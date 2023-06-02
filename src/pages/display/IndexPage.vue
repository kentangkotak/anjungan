<template>
  <q-page class="fullscreen bg-dark">
    <app-loading v-if="speech.isLoading" />
    <AsyncComp v-else :key="queryparam" :item="store.panggil" :items="store.items"
      @voice-end="store.deleteTablePanggil(route.params.name)"
    />
  </q-page>
</template>

<script setup>
import { useRoute } from 'vue-router'
import AsyncComp from './AsyncComp.vue'
import { computed, onMounted } from 'vue'
import { useDisplayStore } from 'src/stores/display'
import { useSpeechStore } from 'src/stores/display/speech.js'

const route = useRoute()
const store = useDisplayStore()
const speech = useSpeechStore()

const queryparam = computed(() => route.params.name)

onMounted(() => {
  console.log('route', route.params.name)
  store.getData(queryparam.value)
  const voices = speech.synth.getVoices()
  if (voices.length) {
    speech.setLoading(false)
    console.log('onMounted :', voices)
  }

  speech.synth.onvoiceschanged = () => {
    speech.setVoiceList(speech.synth.getVoices())
    // give a bit of delay to show loading screen
    // just for the sake of it, I suppose. Not the best reason
    setTimeout(() => {
      speech.setLoading(false)
    }, 800)
  }
})
</script>
