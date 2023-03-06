import { defineStore } from 'pinia'

export const useBpjsStore = defineStore('bpjs', {
  state: () => ({
    classes: 0
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2
  },
  actions: {
    changeClasses () {
      this.classes === 0 ? this.classes = 1 : this.classes = 1
    }
  }
})
