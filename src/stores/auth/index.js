import { defineStore } from 'pinia'
import { api } from 'src/boot/axios'
import * as storage from 'src/utility/storrage'

export const useAuthStore = defineStore('auth-store-v2', {
  state: () => ({
    loading: false,
    token: storage.getLocalToken() ? storage.getLocalToken() : null,
    user: storage.getUser() ? storage.getUser() : null
  }),
  // getters: {
  //   doubleCount: (state) => state.counter * 2
  // },
  actions: {
    async login (payload) {
      this.loading = true
      try {
        const resp = await api.post('/v2/login', payload)
        console.log(resp)
        if (resp.status === 200) {
          storage.setLocalToken(resp?.data?.token)
          storage.setUser(resp?.data?.user)
          this.SET_TOKEN()
          this.loading = false
        } else {
          // app.setLoading(false)
          this.loading = false
        }
      } catch (error) {
        console.log(error)
        this.loading = false
      }
    },

    SET_TOKEN () {
      this.user = storage.getUser()
      this.token = storage.getLocalToken()
      this.loading = false
      window.location.reload()
    },

    logout () {
      // setTimeout(() => {
      this.loading = true
      // return new Promise((resolve, reject) => {
      storage.clearStore()
      setTimeout(() => {
        this.loading = false
      }, 200)
      // resolve()
      // })
    }

  }

})
