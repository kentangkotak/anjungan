import { defineStore } from 'pinia'

export const useSpeechStore = defineStore('speech_store', {
  state: () => ({
    isLoading: true,
    name: '',
    selectedVoice: 0,
    synth: window.speechSynthesis,
    voiceList: [],
    utterance: new window.SpeechSynthesisUtterance()
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    setLoading (val) {
      this.isLoading = val
    },
    setVoiceList (val) {
      this.voiceList = val
    }
  }
})
