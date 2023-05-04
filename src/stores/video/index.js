import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'

export const useVideoStore = defineStore('video', {
  state: () => ({
    videos: [],
    loading: false
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    async getData () {
      this.loading = true
      try {
        const resp = await api.get('/v1/display/video/display')
        console.log('video', resp)
        if (resp.status === 200) {
          this.videos = resp.data
          this.loading = false
        }
        this.loading = false
      } catch (error) {
        console.log('videos', error)
        this.loading = false
      }
    }
  }
})
