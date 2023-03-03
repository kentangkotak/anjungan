import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'
import { date } from 'quasar'

export const usePelayananStore = defineStore('pelayanan', {
  state: () => ({
    items: [],
    tempatTidur: 0,
    tempatTidurTersedia: 0,
    tempatTidurTerisi: 0,

    poli: 0,
    poliHrIniBlm: 0,
    poliHrIniSdh: 0,
    dataPoliHrIniSdh: [],
    masterPoli: [],

    poliTahun: [],
    ranapTahun: [],

    igd: 0,

    loading: false,
    params: {
      d: date.formatDate(new Date(), 'DD'),
      month: null,
      year: null,
      tgl: null
    }
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2
  },
  actions: {
    async getData (payload) {
      this.loading = true
      this.setParams(payload)
      const params = { params: this.params }
      console.log(params)
      await api.get('v1/dashboardexecutive/pelayanan', params)
        .then(resp => {
          console.log('pelayanan :', resp)
          if (resp.status === 200) {
            // ...
            const data = resp.data.tempat_tidur
            this.items = data.length > 0 ? data : []
            this.tempatTidur = data.length > 0 ? data.map(x => x.total).reduce((x, y) => x + y, 0) : 0
            this.tempatTidurTersedia = data.length > 0 ? data.map(x => parseInt(x.sisa)).reduce((x, y) => x + y, 0) : 0
            this.tempatTidurTerisi = data.length > 0 ? data.map(x => parseInt(x.terisi)).reduce((x, y) => x + y, 0) : 0

            // const poliHrIniBlm = resp.data.poli_harinibelum
            this.poliHrIniBlm = resp.data.poli_hariinibelum ? resp.data.poli_hariinibelum.length : 0
            this.poliHrIniSdh = resp.data.poli_hariinisudah ? resp.data.poli_hariinisudah.length : 0
            this.dataPoliHrIniSdh = resp.data.poli_hariinisudah ? resp.data.poli_hariinisudah : []
            this.poli = parseInt(this.poliHrIniBlm) + parseInt(this.poliHrIniSdh)
            this.igd = resp.data.igd_harini.length

            this.poliTahun = resp.data.poli_tahun
            this.ranapTahun = resp.data.ranap_tahun

            this.masterPoli = resp.data.poli
            this.loading = false
          }

          this.loading = false
        }).catch(e => {
          this.loading = false
        })
    },

    setParams (payload) {
      if (payload) {
        const myArray = payload.split('-')

        this.params.tgl = myArray[1] + '-' + myArray[0] + '-' + myArray[2]
        this.params.month = myArray[0]
        this.params.year = myArray[1]
        this.d = myArray[2]
      }
    },

    countData (data, jns) {
      if (jns === 'total') {
        return data.map(x => x.total).reduce((x, y) => x + y, 0)
      } else if (jns === 'terisi') {
        return data.map(x => x.terisi).reduce((x, y) => x + y, 0)
      } else {
        return data.map(x => x.sisa).reduce((x, y) => x + y, 0)
      }
    }

  }

})
