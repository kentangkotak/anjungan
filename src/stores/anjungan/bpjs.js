import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'
import { notifErrVue } from 'src/modules/utils'

export const useBpjsStore = defineStore('bpjs', {
  state: () => ({
    classes: 0,
    tab: 'awal', // pasien-bpjs-baru | dokter | result | loading | awal | rujukan not found

    search: '132701010323P000001',

    dokters: [],
    dokter: null,

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
      const params = {
        params: {
          search: this.search
        }
      }
      try {
        const resp = await api.get('/v1/anjungan/cari-rujukan', params)
        console.log('cari rujukan pCare', resp)
        if (resp.status === 200) {
          const meta = resp.data.metadata ? resp.data.metadata : false
          if (meta.code === 200 || meta.code === '200') {
            const data = resp.data.result ? resp.data.result : false
            const rujukan = data.rujukan ? data.rujukan : false
            const noka = rujukan.peserta ? rujukan.peserta.noKartu : false
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
            this.setTab('pasien-bpjs-baru')
          } else {
            this.setTab('dokter')
          }
        }
      } catch (error) {
        console.log(error)
        this.setTab('awal')
      }
    }
  }
})
