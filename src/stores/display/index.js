import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'

export const useDisplayStore = defineStore('display_antrian', {
  state: () => ({
    item: null,
    items: [],
    params: {
      kode: null
    },
    loading: false,

    // dari websocket
    panggil: null,
    cuaca: null
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2
  },
  actions: {
    async getData (val) {
      this.loading = true
      this.params.kode = val
      const params = { params: this.params }
      try {
        const resp = await api.get('v1/fordisplay/display', params)
        console.log('fordisplay', resp)
        if (resp.status === 200) {
          this.items = resp?.data?.poli
          this.setItem()
        }
        this.loading = false
      } catch (error) {
        // console.log('fordisplay', error)
        this.loading = false
      }
    },

    setItem () {
      if (this.panggil === null) {
        if (this.items.length) {
          this.item = this.items[0]
        }
      } else {
        this.item = this.panggil
      }
    },

    setPanggil (val) {
      this.panggil = val
    },
    async get_weather () {
      const resp = await api.get('v1/fordisplay/get_weather')
      if (resp.status === 200) {
        this.cuaca = resp.data
      }
      console.log('cuaca', this.cuaca)
    }
  }
})
