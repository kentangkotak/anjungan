import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'
import { notifErrVue } from 'src/modules/utils'

export const useBpjsStore = defineStore('bpjs', {
  state: () => ({
    classes: 0,
    tab: 'awal',

    search: '132701010323P000001',

    dokters: [],
    dokter: null
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2
  },
  actions: {
    changeClasses () {
      this.classes === 0 ? this.classes = 1 : this.classes = 1
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
        console.log('cari rujukan bpjs', resp)
        if (resp.status === 200) {
          const meta = resp.data.metadata ? resp.data.metadata : false
          if (meta.code > 200) {
            notifErrVue(resp.data.metadata.message)
          }
          const data = resp.data.result ? resp.data.result : false
          const rujukan = data.rujukan ? data.rujukan : false
          const noka = rujukan.peserta ? rujukan.peserta.noKartu : false
          this.cariPasien(noka)
        }
        this.setTab('awal')
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
        console.log(resp)
        // const res = resp.data.result
        this.setTab('awal')
      } catch (error) {
        console.log(error)
        this.setTab('awal')
      }
    }
  }
})
