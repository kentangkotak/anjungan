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
            <div class="tempat-jam text-white">
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
        <div class="row full-height">
          <!-- TEMPAT DISPLAY ANTRIAN -->
          <div class="col-4 bg-dark" style="overflow: hidden;">
            <div class="q-pl-lg q-pt-lg q-pb-lg">
              <q-card class="my-card" style="height:60%">
                <q-card-section :class="`bg-${colors[7]} text-white`">
                  <div class="text-center text-weight-bold" :style="`font-size: ${app.txtXl}px;`">LOKET A</div>
                  <div class="text-center" :style="`font-size: ${app.txtH5}px; margin-top:-5px;`">PENDAFTARAN PASIEN UMUM</div>
                </q-card-section>

                <q-separator />
                <q-card-section class="">
                  <div class="text-center" :style="`font-size: ${app.txtH5}px;`">Nomor Antrian</div>
                  <div class="text-center" :style="`font-size: ${app.txt50}px; margin-top:-5px`">A003</div>
                </q-card-section>
                <q-separator />
                <q-card-actions align="center" class="bg-negative text-white">
                  <!-- <q-btn flat size="lg">Sisa Antrian : - </q-btn> -->
                  <div> Sisa Antrian : - </div>
                </q-card-actions>
              </q-card>
              <div class="q-pt-md">
                <Vue3Marquee>
                  <div class="" style="overflow: hidden;">
                    <div class="row" v-if="props.items.length">
                        <q-card class="carding q-mr-md" v-for="(row, i) in props.items" :key="row" :style="`width: ${app.txt100*3}px;`">
                          <div :class="`bg-${colors[i]} text-white q-pa-sm`">
                            <div class="text-center text-weight-bold" :style="`font-size: ${app.txtH5}px;`">LOKET {{ row.kode_layanan }}{{ row.loket_no }}</div>
                            <div class="text-center" :style="`font-size: ${app.txtLg}px; margin-top:-5px;`">{{row.loket}} </div>
                          </div>

                          <q-separator />
                          <q-card-section class="">
                            <div class="text-center" :style="`font-size: ${app.txtLg}px; margin-top:-5px;`">Nomor Antrian</div>
                            <div class="text-center" :style="`font-size: ${app.txt48}px; margin-top:-5px;`">A003</div>
                          </q-card-section>
                          <q-separator />
                          <q-card-actions align="center" class="bg-negative text-white">
                            <!-- <q-btn flat size="lg">Sisa Antrian : -</q-btn> -->
                            <div> Sisa Antrian : - </div>
                          </q-card-actions>
                        </q-card>
                    </div>
                  </div>
                </Vue3Marquee>
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

      <!-- <div class="col tempat-video full-height">
        <div class="full-height column items-center flex-center q-mx-auto full-width relative-position">
            <app-video :videos="store.videos" />
        </div>
      </div>

      <div class="fixed-top-right">
        <div class="q-px-xl q-py-xl">
          <div class="row items-center">
            <q-avatar
            size="80px"
              class="shadow-8"
          >
            <img src="~assets/images/logo-rsud.png">
          </q-avatar>
          <div class="q-ml-md text-white">
            <div class="text-h5 text-weight-bold">UOBK RSUD  MOHAMAD SALEH</div>
            <div class="text-h6" style="margin-top: -5px;">KOTA PROBOLINGGO</div>
          </div>
          </div>
        </div>
      </div> -->
    </div>

  <!-- </q-page> -->
</template>

<script setup>
import { useAppStore } from 'src/stores/app'
import { useVideoStore } from 'src/stores/video'
import { onBeforeUnmount, onMounted, ref } from 'vue'

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

const store = useVideoStore()
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

const colors = ref([
  'deep-orange',
  'teal',
  'indigo',
  'purple',
  'orange',
  'brown',
  'blue-grey',
  'blue'
])

// const currentColor = computed(() => { return colors[Math.floor(Math.random() * colors.length)] })

// const cardArray = ref

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
  border-top-left-radius: 50px;
  width:600px;
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
