import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'
import { notifErrVue } from 'src/modules/utils'
import { formatDateTimeDb } from 'src/utility/formatter'

export const useBpjsStore = defineStore('bpjs', {
  state: () => ({
    classes: 0,
    tab: 'awal', // pasien-bpjs-baru | dokter | result | loading | awal | rujukan not found

    // search: '0213B0050423P000192',
    search: '132701020423Y000379',

    pasien_bpjs: null,
    pasien_rs: null,

    dokters: [],
    dokter: null,

    form: {
      nama: null,
      jenispasien: 'JKN', // JKN / NON JKN
      nomorkartu: null,
      norm: null,
      nik: null,
      nohp: null,
      pasienbaru: 1, // 1(Ya), 0(Tidak)
      jeniskunjungan: 1, // 1 (Rujukan FKTP), 2 (Rujukan Internal), 3 (Kontrol), 4 (Rujukan Antar RS)
      dokter_id: null,
      tanggalperiksa: null,
      tgl_ambil: null,
      nomorreferensi: null // norujukan/kontrol pasien JKN,diisi kosong jika NON JKN
    },

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
      this.setTab('loading')
      // 132701010323P000001
      const params = { params: { search: this.search } }
      try {
        const resp = await api.get('/v1/anjungan/cari-rujukan', params)
        console.log('cari rujukan pCare', resp)
        if (resp.status === 200) {
          const meta = resp.data.metadata ? resp.data.metadata : false
          if (meta.code === 200 || meta.code === '200') {
            const data = resp.data.result ? resp.data.result : false
            const rujukan = data.rujukan ? data.rujukan : false
            const noka = rujukan.peserta ? rujukan.peserta.noKartu : false
            this.pasien_bpjs = data
            this.cariPasien(noka)
          } else {
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
            this.pasien_bpjs = data
            this.cariPasien(noka)
          } else {
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
        const resp = await api.get('/v1/anjungan/cari-noka', params)
        console.log('cari pasien rs', resp)
        // const res = resp.data.result
        if (resp.status === 200 || resp.status === '200') {
          const res = resp.data.result ? resp.data.result : false
          if (res === 'Tidak ditemukan') { // artinya pasien baru
            // ke antrian pendaftaran
            // this.setTab('pasien-bpjs-baru')
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
      }
    },

    async saveBookingPasienBaru () {
      if (this.pasien_bpjs !== null) {
        this.form.nama = this.pasien_bpjs.rujukan.peserta.nama
        this.form.jenispasien = 'JKN' // JKN / NON JKN
        this.form.nomorkartu = this.pasien_bpjs.rujukan.peserta.noKartu
        this.form.norm = null
        this.form.nik = this.pasien_bpjs.rujukan.peserta.nik
        this.form.nohp = this.pasien_bpjs.rujukan.peserta.mr.noTelepon
        this.form.jeniskunjungan = 1 // 1 (Rujukan FKTP), 2 (Rujukan Internal), 3 (Kontrol), 4 (Rujukan Antar RS)
        this.form.dokter_id = null
        this.form.tanggalperiksa = formatDateTimeDb(new Date())
        this.form.tgl_ambil = formatDateTimeDb(new Date())
        this.form.nomorreferensi = this.pasien_bpjs.rujukan.noKunjungan

        try {
          const resp = await api.post('v1/anjungan/booking', this.form)
          if (resp.status === 201) {
            this.setTab('pasien-bpjs-baru')
          }
        } catch (error) {
          notifErrVue('Maaf, Ada Keslahan Harap Ulangi')
        }
      } else {
        notifErrVue('Maaf, Ada Keslahan Harap Ulangi')
        this.setTab('awal')
        this.pasien_bpjs = null
      }
    }
  },
  resetFormPasien () {
    this.form.nama = null
    this.form.jenispasien = 'JKN' // JKN / NON JKN
    this.form.nomorkartu = null
    this.form.norm = null
    this.form.nik = null
    this.form.nohp = null
    this.form.pasienbaru = 1 // 1(Ya), 0(Tidak)
    this.form.jeniskunjungan = 1 // 1 (Rujukan FKTP), 2 (Rujukan Internal), 3 (Kontrol), 4 (Rujukan Antar RS)
    this.form.dokter_id = null
    this.form.tanggalperiksa = formatDateTimeDb(new Date())
    this.form.tgl_ambil = formatDateTimeDb(new Date())
    this.form.nomorreferensi = null
  }
})
