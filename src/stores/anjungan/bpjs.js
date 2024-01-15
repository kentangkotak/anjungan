import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'
import { notifErrVue } from 'src/modules/utils'
import { formatDateDb, formatDateTimeDb } from 'src/utility/formatter'

export const useBpjsStore = defineStore('bpjs', {
  state: () => ({
    time: 30,
    classes: 0,
    tab: 'awal', // pasien-bpjs-baru | pasien-bpjs-baru | dokter | result | loading | awal | rujukan not found
    load: 'Cecking Data',

    // search: '0213B0050423P000192',
    // search: '132701020423Y000379', // ini pasien baru
    search: '0213R0020523B000114', // ini pasien baru
    // search: '0193R0060423B000024',

    pasien_bpjs: null,
    pasien_rs: null,

    dokters: [],
    dokter: null,

    form: {
      namapasien: null,
      jenispasien: 'JKN', // JKN / NON JKN
      nomorkartu: null,
      norm: null,
      nik: null,
      nohp: null,
      pasienbaru: 1, // 1(Ya), 0(Tidak)
      jeniskunjungan: 1, // 1 (Rujukan FKTP), 2 (Rujukan Internal), 3 (Kontrol), 4 (Rujukan Antar RS)
      kodedokter: null,
      tanggalperiksa: null,
      tgl_ambil: null,
      nomorreferensi: null, // norujukan/kontrol pasien JKN,diisi kosong jika NON JKN
      kodepoli: null,
      namapoli: null,
      dokter: null
    },

    booking: null,
    layanan: null,

    rsud: {
      nama: 'RSUD MOHAMAD SALEH',
      kota: 'KOTA PROBOLINGGO',
      alamat: 'Jl. Panjaitan no.65'
    }
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2
  },
  actions: {
    changeClasses () {
      this.classes === 0 ? this.classes = 1 : this.classes = 0
    },
    setTab (val) {
      if (val === 'awal') {
        this.search = ''
        this.resetFormPasien()
        this.load = 'Cecking Data'
      }
      this.tab = val
    },
    setSearch (val) {
      this.search = val
    },

    kioskClicked (e) {
      if (typeof e === 'number') {
        this.search += e
      } else if (e.toLowerCase() === 'hapus') {
        this.search = this.search.substring(0, this.search.length - 1)
      } else if (e.toLowerCase() === 'space') {
        this.search = this.search += ' '
      } else if (e.toLowerCase() === 'cari') {
        if (this.search === '' || this.search === null) {
          return notifErrVue('Maaf Isikan Dahulu Pencariannya')
        }
        this.pencarianRujukan()
      } else {
        this.search += e
      }
    },

    async pencarianRujukan () {
      this.resetFormPasien()
      this.setTab('loading')
      // 132701010323P000001
      const params = { params: { search: this.search } }
      try {
        this.load = 'Cari Rujukan'
        const resp = await api.get('/v1/anjungan/cari-rujukan', params)
        console.log('cari rujukan pCare', resp)
        if (resp.status === 200) {
          const meta = resp.data.metadata ? resp.data.metadata : false
          if (meta.code === 200 || meta.code === '200') {
            const data = resp.data.result ? resp.data.result : false
            const rujukan = data.rujukan ? data.rujukan : false
            const noka = rujukan.peserta ? rujukan.peserta.noKartu : false
            this.form.jeniskunjungan = 1
            this.pasien_bpjs = data
            this.cariPasien(noka)
          } else {
            this.pasien_bpjs = null
            this.pencarianRujukanRS()
          }
        }
        // this.setTab('awal')
      } catch (error) {
        console.log(error)
        this.setTab('awal')
        notifErrVue('Ada Kesalahan')
      }
    },
    async pencarianRujukanRS () {
      this.setTab('loading')
      const params = { params: { search: this.search } }
      try {
        const resp = await api.get('/v1/anjungan/cari-rujukan-rs', params)
        console.log('cari rujukan rs', resp)
        if (resp.status === 200) {
          const meta = resp.data.metadata ? resp.data.metadata : false
          if (meta.code === 200 || meta.code === '200') {
            const data = resp.data.result ? resp.data.result : false
            const rujukan = data.rujukan ? data.rujukan : false
            const noka = rujukan.peserta ? rujukan.peserta.noKartu : false

            this.form.jeniskunjungan = 4
            this.pasien_bpjs = data
            this.cariPasien(noka)
          } else {
            this.pasien_bpjs = null
            this.setTab('rujukan not found')
          }
        }
      } catch (error) {
        console.log(error)
        this.setTab('awal')
        notifErrVue('Ada Kesalahan')
      }
    },

    async cariPasien (noka) {
      this.setTab('loading')
      const params = { params: { noka } }
      try {
        this.load = 'Cari Pasien'
        const resp = await api.get('/v1/anjungan/cari-noka', params)
        console.log('cari pasien rs', resp)
        // const res = resp.data.result
        if (resp.status === 200 || resp.status === '200') {
          const res = resp.data.result ? resp.data.result : false
          if (res === 'Tidak ditemukan') { // artinya pasien baru
            // ke antrian pendaftaran
            // this.setTab('pasien-bpjs-baru')
            this.pasien_rs = null
            this.form.pasienbaru = 1
            this.setTab('result')
          } else {
            this.pasien_rs = res
            this.setTab('dokter')
          }
        }
      } catch (error) {
        console.log(error)
        this.setTab('awal')
        notifErrVue('Ada Kesalahan')
      }
    },

    async cariDokter () {
      if (this.pasien_bpjs !== null) {
        const kodepoli = this.pasien_bpjs.rujukan.poliRujukan.kode
        const tanggal = formatDateDb(new Date())
        const params = { params: { kodepoli, tanggal } }
        try {
          this.load = 'Cari Dokter'
          const resp = await api.get('/v1/anjungan/cari-dokter', params)
          console.log('dokter', resp)
          if (resp.status === 200 || resp.status === '200') {
            const res = resp.data.result ? resp.data.result : false
            if (!res) {
              this.setTab('awal')
              notifErrVue('Maaf Ada Kesalahan, Harap Ulangi')
            } else {
              const meta = resp.data.metadata
              if (meta.code > 200) {
                this.dokters = []
                this.dokter = null
              } else {
                this.dokters = res
              }
            }
          }
        } catch (error) {
          notifErrVue('Maaf, Ada Kesalahan Harap Ulangi')
          this.setTab('awal')
        }
      } else {
        notifErrVue('Maaf, Ada Keslahan Harap Ulangi')
        this.setTab('awal')
        this.pasien_bpjs = null
      }
    },

    async saveBookingPasienBpjs (barulama) {
      this.setTab('loading')
      const pasienbaru = barulama === 'baru' ? 1 : 0
      if (this.pasien_bpjs !== null) {
        this.form.jenispasien = 'JKN' // JKN / NON JKN
        this.form.norm = this.pasien_rs ? this.pasien_rs.rs1 : null
        this.form.namapasien = this.pasien_bpjs.rujukan.peserta.nama
        this.form.nomorkartu = this.pasien_bpjs.rujukan.peserta.noKartu
        this.form.nik = this.pasien_bpjs.rujukan.peserta.nik
        this.form.nohp = this.pasien_bpjs.rujukan.peserta.mr.noTelepon
        this.form.kodepoli = this.pasien_bpjs.rujukan.poliRujukan.kode
        this.form.namapoli = this.pasien_bpjs.rujukan.poliRujukan.nama
        this.form.pasienbaru = pasienbaru
        // this.form.jeniskunjungan = 1 // 1 (Rujukan FKTP), 2 (Rujukan Internal), 3 (Kontrol), 4 (Rujukan Antar RS)
        this.form.dokter = this.dokter
        // this.form.kodedokter = this.dokter ? this.dokter.kodedokter : null
        this.form.tanggalperiksa = formatDateTimeDb(new Date())
        this.form.tgl_ambil = formatDateTimeDb(new Date())
        this.form.nomorreferensi = this.pasien_bpjs.rujukan.noKunjungan

        this.load = 'Simpan Data'
        try {
          const resp = await api.post('v1/booking/store', this.form)
          console.log('post bookings', resp)
          if (resp.status === 200) {
            const meta = resp.data.metadata ? resp.data.metadata : false
            if (meta.code === 200 || meta.code === '200') {
              this.booking = resp.data.result.booking
              this.layanan = resp.data.result.layanan
              if (barulama === 'baru') {
                this.setTab('pasien-bpjs-baru')
              } else {
                // console.log('pasien-bpjs-lama')
                this.setTab('pasien-bpjs-lama')
              }
            } else {
              notifErrVue(meta.message)
              this.setTab('awal')
            }
          }
        } catch (error) {
          notifErrVue('Maaf, Ada Kesalahan Harap Ulangi')
        }
      } else {
        notifErrVue('Maaf, Ada Kesalahan Harap Ulangi')
        this.setTab('awal')
        this.pasien_bpjs = null
      }
    },

    resetFormPasien () {
      this.form.namapasien = null
      this.form.jenispasien = 'JKN' // JKN / NON JKN
      this.form.nomorkartu = null
      this.form.norm = null
      this.form.nik = null
      this.form.nohp = null
      this.form.pasienbaru = 1 // 1(Ya), 0(Tidak)
      this.form.jeniskunjungan = 1 // 1 (Rujukan FKTP), 2 (Rujukan Internal), 3 (Kontrol), 4 (Rujukan Antar RS)
      this.form.kodedokter = null
      this.form.tanggalperiksa = formatDateTimeDb(new Date())
      this.form.tgl_ambil = formatDateTimeDb(new Date())
      this.form.nomorreferensi = null
      this.form.kodepoli = null
      this.form.namapoli = null
      this.form.dokter = null

      this.pasien_bpjs = null
      this.pasien_rs = null
      this.dokters = []
      this.dokter = null

      this.booking = null
      this.layanan = null
    },

    cetak_antrean () {
      const params = { params: { kodebooking: this.booking ? this.booking.kodebooking : null } }
      return new Promise((resolve, reject) => {
        api.get('v1/booking/cetak-antrean', params).then((resp) => {
          console.log('update booking', resp)
          resolve(resp)
        }).catch((error) => {
          notifErrVue('Maaf Ada Kesalahan... Harap Ulangi!')
          reject(error)
        })
      })
    }

  }// end actions

})
