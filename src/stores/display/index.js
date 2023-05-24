import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'

export const useDisplayStore = defineStore('display_antrian', {
  state: () => ({
    item: null,
    items: [],
    params: {
      kode: null
    },
    loading: false
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
        console.log('display', resp)
        if (resp.status === 200) {
          this.item = resp.data
          this.items = this.item ? this.item.units : []
        }
        this.loading = false
      } catch (error) {
        console.log('display', error)
        this.loading = false
      }
    }
  }
})
