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
    panggil: null
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
          this.items = resp.data
        }
        this.loading = false
      } catch (error) {
        console.log('fordisplay', error)
        this.loading = false
      }
    },

    setPanggil (val) {
      this.panggil = val
    },
    async deleteTablePanggil () {
      const params = this.panggil
      try {
        const resp = await api.post('v1/fordisplay/delete_panggilan', params)
        console.log('del panggilan', resp)
      } catch (error) {
        console.log(error)
      }
    }
  }
})
