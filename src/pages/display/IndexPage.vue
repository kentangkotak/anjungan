<template>
  <q-page class="fullscreen bg-dark">
    <div class="column full-height">
      <!-- header -->
      <div class="col-2 header ">
      <!-- <div class="head full-width"> -->
        <div class="row items-center head">
            <div class="q-pa-lg">
              <div class="row items-center">
                <q-avatar
                size="90px"
                 class="shadow-8"
              >
                <img src="~assets/images/logo-rsud.png">
              </q-avatar>
              <div class="q-ml-md text-dark">
                <div class="text-h4 text-weight-bold">UOBK RSUD  MOHAMAD SALEH</div>
                <div class="text-h5" style="margin-top: 0px;">KOTA PROBOLINGGO</div>
              </div>
              </div>
            </div>
            <!-- TEMPAT JAM DIGITAL -->
            <q-space></q-space>
          <div class="q-py-sm">
            <div class="tempat-jam text-white">
              <!-- <div class="modif"></div> -->
              <div class="row items-center justify-end  q-px-lg q-pt-lg">
                <div class="text-h1 text-weight-bold">{{ jam }} </div>
                <div class="text-h1 text-weight-bold q-mx-md"> : {{ menit }} </div>
                <div class="text-h1 text-weight-bold q-ml-md"> : {{ detik }}</div>
              </div>
              <div class="text-right q-px-lg">
                <q-btn color="negative" size="md" disable :label="tanggal.toDateString()"></q-btn>
              </div>

            </div>
          </div>
        </div>
      </div>
      <!-- content -->
      <div class="col grow">
        <div class="row full-height">
          <!-- TEMPAT DISPLAY ANTRIAN -->
          <div class="col-5 bg-dark">
            <div class="q-pl-lg q-pt-lg q-pb-lg">
              <q-card class="my-card">
                <q-card-section class="bg-blue text-white">
                  <div class="text-h2 text-center">LOKET A</div>
                  <div class="text-h5 text-center">PENDAFTARAN PASIEN UMUM</div>
                </q-card-section>

                <q-separator />
                <q-card-section class="">
                  <div class="text-h5 text-center">Nomor Antrian</div>
                  <div class="text-h1 text-center">A003</div>
                </q-card-section>
                <q-separator />
                <q-card-actions align="center" class="bg-negative text-white">
                  <q-btn flat size="xl">Sisa Antrian : - </q-btn>
                </q-card-actions>
              </q-card>
              <div class="row q-pt-lg q-col-gutter-sm">
                <div class="col-4" v-for="(x, i) in 3" :key="i">
                  <!-- <Vue3Marquee> -->
                    <q-card class="carding" >
                      <q-card-section class="bg-teal text-white">
                        <div class="text-h5 text-center">LOKET B</div>
                        <div class="f-12 text-center">PASIEN BPJS</div>
                      </q-card-section>

                      <q-separator />
                      <q-card-section class="">
                        <div class="f-12 text-center">Nomor Antrian</div>
                        <div class="text-h5 text-center">A003</div>
                      </q-card-section>
                      <q-separator />
                      <q-card-actions align="center" class="bg-negative text-white">
                        <q-btn flat size="sm">Sisa Antrian : 40</q-btn>
                      </q-card-actions>
                    </q-card>
                  <!-- </Vue3Marquee> -->
                </div>
                <!-- <div class="col-4">
                  <q-card class="my-card">
                    <q-card-section class="bg-accent text-white">
                      <div class="text-h5 text-center">LOKET C</div>
                      <div class="f-12 text-center">PASIEN UMUM</div>
                    </q-card-section>

                    <q-separator />
                    <q-card-section class="">
                      <div class="f-12 text-center">Nomor Antrian</div>
                      <div class="text-h5 text-center">C023</div>
                    </q-card-section>
                    <q-separator />
                    <q-card-actions align="center" class="bg-negative text-white">
                      <q-btn flat size="sm">Sisa Antrian : - </q-btn>
                    </q-card-actions>
                  </q-card>
                </div> -->
                <!-- <div class="col-4">
                  <q-card class="my-card">
                    <q-card-section class="bg-secondary text-white">
                      <div class="text-h5 text-center">LOKET D</div>
                      <div class="f-12 text-center">PASIEN UMUM</div>
                    </q-card-section>

                    <q-separator />
                    <q-card-section class="">
                      <div class="f-12 text-center">Nomor Antrian</div>
                      <div class="text-h5 text-center">D001</div>
                    </q-card-section>
                    <q-separator />
                    <q-card-actions align="center" class="bg-negative text-white">
                      <q-btn flat size="sm">Sisa Antrian : 40</q-btn>
                    </q-card-actions>
                  </q-card>
                </div> -->
              </div>
            </div>
          </div>

          <!-- TEMPAT DISPLAY VIDEO -->
          <div class="col-7 bg-dark">
            <div class="column full-height q-pa-lg ">
              <div class="col full-height tempat-video">
                <div class="full-height column items-center flex-center q-mx-auto full-width relative-position">
                    <app-video :videos="store.videos" />
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
            :gradient="true"
            :gradientColor="[255, 255, 255]"
            :gradientWidth="`20%`"
          >
            <span
              v-for="(word, index) in helloArray"
              :key="index"
              class="word-style"
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

  </q-page>
</template>

<script setup>
import { useVideoStore } from 'src/stores/video'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const store = useVideoStore()
let date = new Date()

const tanggal = ref(date)

const jam = ref(date.getHours() > 9 ? date.getHours() : '0' + date.getHours())
const menit = ref(date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes())
const detik = ref(date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds())

const helloArray = ref(
  [
    'KAMI SEGENAP KARYAWAN UOBK RSUD MOHAMAD SALEH MENGUCAPKAN TERIMAKASIH ANDA TELAH BERSEDIA MENUNGGU'
  ]
)

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

</style>
