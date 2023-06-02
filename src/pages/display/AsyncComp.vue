<template>
  <!-- <q-page class="fullscreen bg-dark"> -->
    <div class="column full-height">
      <!-- header -->
      <div class="col-2 header ">
      <!-- <div class="head full-width"> -->
        <div class="row head">
            <div class="q-px-lg q-pt-md">
              <div class="row items-center">
                <q-avatar
                  :size="`${app.txt100}px`"
                  class="shadow-8"
              >
                <img src="~assets/images/logo-rsud.png">
              </q-avatar>
              <div class="q-ml-md text-dark">
                <div class="text-weight-bold" :style="`font-size: ${app.txtXl}px;`">UOBK RSUD  MOHAMAD SALEH</div>
                <div class="" :style="`font-size: ${app.txt28}px; margin-top:-5px`">KOTA PROBOLINGGO</div>
              </div>
              </div>
            </div>
            <!-- TEMPAT JAM DIGITAL -->
            <q-space></q-space>
          <div class="q-pt-sm">
            <div class="tempat-jam text-white" :style="`
             width:${app.txt100*6}px;
             border-top-left-radius:${app.txt50}px;
            `">
              <!-- <div class="modif"></div> -->
              <div class="row justify-end  q-px-lg q-pt-lg" :style="`font-size: ${app.txt70}px;`">
                <div class="text-weight-bold">{{ jam }} </div>
                <div class="text-weight-bold q-mx-sm"> : {{ menit }} </div>
                <div class="text-weight-bold q-ml-sm"> : {{ detik }}</div>
              </div>
              <div class="text-right q-px-lg">
                <!-- <q-btn color="negative" size="md" disable :label="tanggal.toDateString()"></q-btn> -->
                <div style="margin-top:-10px;">{{ tanggal.toDateString() }}</div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <!-- content -->
      <div class="col-9"  style="overflow: hidden;">
        <div class="row full-height  bg-dark">
          <!-- TEMPAT DISPLAY ANTRIAN -->
          <div class="col-4" style="overflow: hidden;" >
            <div class="q-pl-lg q-pt-lg q-pb-lg">
              <CardIndividu :item="item" :key="item" />
              <div class="q-pt-md">
                <CardBerjalan :items="items" :key="props.items" />
              </div>
            </div>
          </div>
          <!-- TEMPAT DISPLAY VIDEO -->
          <div class="col-8 bg-dark">
            <div class="column full-height q-pa-lg ">
              <div class="col full-height tempat-video">
                <div class="full-height column items-center flex-center q-mx-auto full-width relative-position">
                    <app-loading v-if="store.loading" />
                    <app-video v-else :videos="store.videos" :loading="store.loading" />
                </div>
              </div>
              <!-- <div class="col-2 tempat-list-antrian bg-teal">
                tempat list
              </div> -->
            </div>
          </div>
        </div>
      </div>
      <!-- text berjalan -->
      <div class="col-1 bg-white">
        <div class="row items-center full-height q-px-lg">
          <Vue3Marquee
            :duration="50"
            :gradient="true"
            :gradientColor="[255, 255, 255]"
            :gradientWidth="`10%`"
          >
            <span
              v-for="(word, index) in helloArray"
              :key="index"
              class="word-style text-weight-bold"
              :class="{ word: true, odd: index % 2 === 0, even: index % 2 === 1 }"
            >
              {{ word }}
            </span>
          </Vue3Marquee>
        </div>
      </div>
    </div>

  <!-- </q-page> -->
</template>

<script setup>
import { useSpeechStore } from 'src/stores/display/speech.js'
import CardIndividu from './card/CardIndividu.vue'
import CardBerjalan from './card/CardBerjalan.vue'
import { useAppStore } from 'src/stores/app'
import { useVideoStore } from 'src/stores/video'
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    default: null
  },
  items: {
    type: Array,
    default: () => []
  }
})

const emits = defineEmits(['voiceEnd'])

const store = useVideoStore()
const speech = useSpeechStore()
const app = useAppStore()
let date = new Date()

const tanggal = ref(date)

const jam = ref(date.getHours() > 9 ? date.getHours() : '0' + date.getHours())
const menit = ref(date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes())
const detik = ref(date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds())

const helloArray = ref(
  [
    'KAMI SEGENAP KARYAWAN UOBK RSUD MOHAMAD SALEH MENGUCAPKAN TERIMAKASIH ANDA TELAH BERSEDIA MENUNGGU ... '
  ]
)

const currentTime = () => {
  date = new Date()
  // console.log(date)
  jam.value = date.getHours() > 9 ? date.getHours() : '0' + date.getHours()
  menit.value = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes()
  detik.value = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds()
}

const updateTimeInterval = setInterval(currentTime, 1000)
onBeforeUnmount(() => {
  clearInterval(updateTimeInterval)
})

onMounted(() => {
  store.getData()
  console.log('app', app.height)
})

function setSpeech (txt) {
  console.log(speech.voiceList[11])
  const voice = speech.utterance
  voice.text = txt
  voice.voice = speech.voiceList[11]

  voice.volume = 1
  voice.pitch = 1
  voice.rate = 1

  voice.onend = function () {
    // this code is not called
    emits('voiceEnd')
    console.log('end')
  }
  return voice
}

function panggilan () {
  const panggil = props.item
  const nomorantrean = panggil ? panggil.nomorantrean : false
  const namapasien = panggil ? panggil.namapasien === null || panggil.namapasien === '' ? 'BELUM ADA NAMA' : panggil.namapasien
    : 'BELUM ADA NAMA'
  const set = panggil.set
  if (nomorantrean) {
    const unit = panggil.unit.display_id === 'A' ? 'LOKET... ' : 'UNIT... '
    const sambung = '... Menuju... ' + unit + panggil.unit.kode_layanan + panggil.unit.loket_no
    const txt1 = 'Nomor Antrian... ' + nomorantrean
    const txt2 = 'Saudara... ' + namapasien
    const txt3 = txt2 + ' ... ' + txt1

    const txt = set === 1 ? txt1 + sambung : set === 2 ? txt2 + sambung : txt3 + sambung

    speech.synth.speak(setSpeech(txt))
  } else {
    const txt = 'TIDAK ADA DATA'
    speech.synth.speak(setSpeech(txt))
  }
}

watch(() => props.item, (first, second) => {
  console.log(
    'Watch props.selected function called with args:',
    first
  )
  panggilan()
})
</script>

<style lang="scss" scoped>
.head{
  // z-index: 100;
  // background: url('src/assets/images/head.png');
  // background-size: fill;
  // width: 100%;
  background-color: #fff;
  height: 100%;
}

.tempat-video {
  // padding: 20px;
  border: 2px solid white;
  border-radius: 20px;
  overflow: hidden;
}
.tempat-jam {
  background-color: $dark;
  // border-top-left-radius: 50px;
  // width:600px;
  justify-content: flex-end;
  position: relative;
  height: 100%;
  // &::before {
  //   content: '';
  //   width:100px;
  //   height: 100px;
  //   background-color: yellow;
  //   position: absolute;
  //   bottom: 0;
  //   left:-100px;
  //   border-radius: 100% 0% 0% 0% / 100% 29% 71% 0% ;
  // }
}

.modif{
  width:100px;
  height: 100px;
  background-color: yellow;
  position: relative;
  position: absolute;
  left: 100px;
}

.word {
  font-size: 40px;
  margin: 0 10px;
}
.odd {
  color: rgb(68, 77, 84);
}
.even {
  color: rgb(137, 147, 156);
}

.carding {
  // width:300px;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

</style>
