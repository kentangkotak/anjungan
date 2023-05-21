import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'
import { notifErrVue } from 'src/modules/utils'
import { formatDateTimeDb } from 'src/utility/formatter'

export const useUmumStore = defineStore('umum', {
  state: () => ({
    time: 30,
    classes: 0,
    tab: 'awal', // pasien-baru | pasien-lama | norm |  result | loading | awal | norm not found
    load: 'Cecking Data',

    // search: '612340',
    search: '',
    // search: '132701020423Y000379', // ini pasien baru
    // search: '0193R0060423B000024',

    pasien: null,

    dokters: [],
    dokter: null,

    form: {
      namapasien: null,
      jenispasien: 'NON JKN', // JKN / NON JKN
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
    setClass () {
      this.classes = 0
    },
    setTab (val) {
      if (val === 'awal') {
        this.resetFormPasien()
        this.search = ''
        this.load = 'Cecking Data'
      }
      this.tab = val
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
          return notifErrVue('Maaf Isikan Dahulu No. RM nya')
        }
        this.pencarianNorm()
      } else {
        this.search += e
      }
    },

    async pencarianNorm () {
      this.setTab('loading')
      this.load = 'Pencarian Data '
      const params = { params: { search: this.search } }
      try {
        const resp = await api.get('v1/anjungan/norm', params)
        console.log('data pasien', resp)
        if (resp.status === 200 || resp.status === '200') {
          if (resp.data.result !== 'Tidak ditemukan') {
            this.pasien = resp.data.result
            this.setTab('result')
          } else {
            this.setTab('norm not found')
            this.resetFormPasien()
          }
        }
      } catch (error) {
        console.log(error)
        this.setTab('cari')
      }
    },
    resetFormPasien () {
      this.form.namapasien = null
      this.form.jenispasien = 'NON JKN' // JKN / NON JKN
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

      this.pasien = null
      this.dokters = []
      this.dokter = null

      this.booking = null
      this.layanan = null
    },

    async saveBookingPasienUmum (barulama) {
      this.setTab('loading')

      this.load = 'Simpan Data'
      const pasienbaru = barulama === 'baru' ? 1 : 0
      // if (this.pasien !== null) {
      this.form.jenispasien = 'NON JKN' // JKN / NON JKN
      this.form.norm = this.pasien ? this.pasien.rs1 : null
      this.form.namapasien = this.pasien ? this.pasien.rs2 : null
      this.form.nomorkartu = null
      this.form.nik = this.pasien ? this.pasien.rs49 : null
      this.form.nohp = this.pasien ? this.pasien.rs55 : null
      this.form.kodepoli = pasienbaru === 1 ? null : null
      this.form.namapoli = pasienbaru === 1 ? null : null
      this.form.pasienbaru = pasienbaru
      // this.form.jeniskunjungan = 1 // 1 (Rujukan FKTP), 2 (Rujukan Internal), 3 (Kontrol), 4 (Rujukan Antar RS)
      this.form.dokter = null
      // this.form.kodedokter = this.dokter ? this.dokter.kodedokter : null
      this.form.tanggalperiksa = formatDateTimeDb(new Date())
      this.form.tgl_ambil = formatDateTimeDb(new Date())
      this.form.nomorreferensi = null
      try {
        const resp = await api.post('v1/booking/store', this.form)
        console.log('post bookings', resp)
        if (resp.status === 200) {
          const meta = resp.data.metadata ? resp.data.metadata : false
          if (meta.code === 200 || meta.code === '200') {
            this.booking = resp.data.result.booking
            this.layanan = resp.data.result.layanan
            if (barulama === 'baru') {
              this.setTab('pasien-baru')
            } else {
              // console.log('pasien-bpjs-lama')
              this.setTab('pasien-lama')
            }
          } else {
            notifErrVue(meta.message)
            this.setTab('awal')
          }
        }
      } catch (error) {
        notifErrVue('Maaf, Ada Kesalahan Harap Ulangi')
        this.setTab('awal')
      }
      // } else {
      //   notifErrVue('Maaf, Ada Kesalahan Harap Ulangi')
      //   this.setTab('awal')
      //   this.pasien_bpjs = null
      // }
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
