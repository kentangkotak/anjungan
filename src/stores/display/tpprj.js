import { defineStore } from 'pinia'
// import { api } from 'src/boot/axios'

export const useDisplayTpprjStore = defineStore('display_antrian_tpprj', {
  state: () => ({
    item: null,
    items: [
      {
        kode: 1,
        nomor: null
      },
      {
        kode: 2,
        nomor: null
      },
      {
        kode: 3,
        nomor: null
      },
      {
        kode: 4,
        nomor: null
      },
      {
        kode: 5,
        nomor: null
      },
      {
        kode: 6,
        nomor: null
      }
    ],

    loading: false,

    // dari websocket
    panggil: null
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2
  },
  actions: {

  }
})
