<template>
  <div class="column full-height full-width">
    <!-- <div class="col-auto q-pa-sm opa" >
      <HeaderComp />
    </div> -->
    <div class="col break">
      <div class="row full-height ">
        <div class="col-auto full-height" style="width:60vw;">
          <div class="column full-height q-pr-md relative-position" >
            <div
                class="square"
                style="--i:0;"
              />
              <div
                class="square"
                style="--i:1;"
              />
              <div
                class="square"
                style="--i:2;"
              />
              <div
                class="square"
                style="--i:3;"
              />
              <div
                class="square"
                style="--i:4;"
              />
            <div class="col-auto q-pa-sm opa">
               <HeaderComp />
            </div>
            <div class="col full-height ">
              <!-- <CardcounterComp :items="display.items" /> -->
              <div class="col-auto bg-white relative-position" style="height: 40%;">
                <VideoComp :videos="video.videos" :loading="video.loading" class="z-top" />
              </div>
            </div>

          </div>
        </div>
        <div class="col break q-mb-md relative-position">
          <div class="full-height full-width absolute">
            <div class="column full-height relative-position">
              <div class="col full-height q-pb-md">
                <!-- <WeatherComp /> -->
                <CardcounterComp :items="store.items" />
              </div>
              <!-- <div class="col-auto bg-white relative-position" style="height: 40%;">
                <VideoComp :videos="video.videos" :loading="video.loading" class="z-top" />
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-auto  bg-white z-top">
      <BottomPage />
    </div>
  </div>
</template>

<script setup>
// import WeatherComp from './comp/WeatherComp.vue'
import BottomPage from './comp/BottomPage.vue'
import VideoComp from './comp/VideoComp.vue'
import HeaderComp from './comp/HeaderComp.vue'
// import CardcounterComp from './comp/CardcounterComp.vue'
import { onMounted, ref } from 'vue'
// import { useRoute } from 'vue-router'
import { useVideoStore } from 'src/stores/video'
// import { useDisplayStore } from 'src/stores/display'
import { laravelEcho } from 'src/modules/websocket'
import CardcounterComp from './comp/CardcounterComp.vue'
import { useDisplayTpprjStore } from 'src/stores/display/tpprj'
import { useSpeechStore } from 'src/stores/display/speech'

// const route = useRoute()
const video = useVideoStore()
// const display = useDisplayStore()

const store = useDisplayTpprjStore()
const speech = useSpeechStore()

const indexVoices = ref(0)

onMounted(() => {
  video.getData()
  // display.getData(route?.params?.name)
  // display.get_weather()

  getListVoices().then((x) => {
    settingsVoice()
  })

  subscribedChannel()
})

function getListVoices () {
  return new Promise(
    function (resolve, reject) {
      const synth = speech.synth
      let id = 0

      id = setInterval(() => {
        if (synth.getVoices().length !== 0) {
          speech.voiceList = synth.getVoices()
          resolve(synth.getVoices())
          clearInterval(id)
        }
      }, 10)
    }
  )
}

function settingsVoice () {
  const voices = speech.voiceList
  if (voices.length) {
    const lang = voices?.map(x => x.lang)
    const ind = lang.findIndex(x => x === 'id-ID') ?? 0
    indexVoices.value = ind
  }

  // const synth = window.speechSynthesis
  speech.synth.onvoiceschanged = () => {
    speech.synth.setVoiceList(voices)
  }
  // console.log('voices', voices)
  // console.log('speech', speech)
  listenForSpeechEvents()
}

function listenForSpeechEvents () {
  speech.utterance.onstart = () => {
    console.log('start...')
    speech.isLoading = true
  }
  speech.utterance.onend = () => {
    console.log('end...')
    speech.isLoading = false
  }
}

function setSpeech (txt) {
  // console.log(speech.voiceList[indexVoices.value])
  const voice = speech.utterance
  voice.text = txt
  voice.voice = speech.voiceList[indexVoices.value]

  voice.volume = 1
  voice.pitch = 1
  voice.rate = 1

  return voice
}

// eslint-disable-next-line no-unused-vars
function subscribedChannel () {
  // const kdDisplay = route?.params?.name
  // if (kdDisplay) {
  const channel = laravelEcho.private('private.notif.pendaftaran')
  channel.subscribed(() => {
    console.log('subscribed private.notif.pendaftaran channel !!!')
  }).listen('.notif-message', (e) => {
    console.log('listen notif', e)
    const arr = store.items
    const index = arr.findIndex((item) => item.kode.toString() === e?.message?.loketId)
    console.log('arr', arr)
    console.log('index', index)
    store.items[index].nomor = e?.message?.nomorAntrian
    // store.items = arr
    panggil(e.message)
  })
  // }
}

// eslint-disable-next-line no-unused-vars
function panggil (data) {
  const txt = 'Nomor Antrian ... ' + data?.nomorAntrian + '? ...Harap menujuu ke loket ' + data?.loketId
  speech.synth.speak(setSpeech(txt))
}

</script>

<style lang="scss" scoped>
.opa{
  background-color: (255,255,255,0.5);
}

.square {
    position: absolute;
    // filter: blur(1px);
    backdrop-filter: blur(15px);
    // backdrop-filter: sepia(.5);
    box-shadow: 0 25px 45px rgba(0,0,0,0.1);
    border: 1px solid rgba(255,255,255,0.5);
    border-radius: 10px;
    border-right: 1px solid rgba(255,255,255,0.2);
    border-bottom: 1px solid rgba(255,255,255,0.2);
    // background: rgba(255,255,255,0.1);
    animation: animate 10s linear infinite;
    animation-delay: calc(-1s * var(--i));
  }

  @keyframes animate {
    0%,100%{
      transform: translateY(-40px);
    }
    50% {
      transform: translateY(40px);
    }
  }

  .min-h {
    min-height: 400px;
  }

  .square:nth-child(1){
      top: -50px;
      right: -60px;
      width: 100px;
      height: 100px;
      z-index:-1;
    }
  .square:nth-child(2){
      top: 150px;
      left: -100px;
      width: 120px;
      height: 120px;
      z-index:1;
    }
  .square:nth-child(3){
    bottom: 50px;
    right: -60px;
    width: 80px;
    height: 80px;
    z-index: -1;
  }
  .square:nth-child(4){
    bottom: -70px;
    left: 100px;
    width: 50px;
    height: 50px;
  }
  .square:nth-child(5){
    top: -30px;
    left: 100px;
    width: 60px;
    height: 60px;
  }

</style>
