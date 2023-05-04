<template>
  <q-page class="fullscreen bg-grey">
    <div class="_fs">
      <video autoplay muted class="fs_">
        <source src="~assets/video/video.webm" type="video/webm" />
      </video>
    </div>
    <!-- tab panels 1 -->
    <div class="column flex-center items-center full-height text-white">
      <q-card class="_mycard shadow-8" >
        <div class="row full-height">
          <div class="col-5">

            <transition
              name="slider" mode="out-in"
            >
              <div v-if="store.tab==='awal'" class="column flex-center items-center full-height">
                <div class="lottie order-last">
                  <Vue3Lottie
                    ref="anim"
                    :animationData="fileLink"
                    :playOnHover="false"
                    :autoPlay="true"
                  />
                </div>
              </div>

              <div v-else class="column flex-center items-center full-height">
                <app-wait />
              </div>
            </transition>

          </div>
          <div class="col-7">
            <q-tab-panels
              v-model="store.tab"
              animated
              transition-prev="jump-up"
              transition-next="jump-down"
              class="transparent full-height"
            >
              <q-tab-panel name="awal">
                <PageCari />
              </q-tab-panel>

              <q-tab-panel name="loading">
                <div class="column flex-center items-center full-height bg-white">
                  <q-spinner-cube
                    color="info"
                    size="4em"
                  />
                  Harap Tunggu
                </div>
              </q-tab-panel>

              <q-tab-panel name="result">
                <div class="q-pa-md full-height bg-white" style="border-radius: 5px;">
                  <q-card flat rounded bordered class="bg-grey-2">
                    <q-card-section>
                      <div>Data Pasien</div>
                      <div class="row q-mt-lg">
                        <div>
                          <q-avatar
                            size="100px"
                          >
                            <img :src="`https://cdn.quasar.dev/img/avatar1.jpg`" style="border: 2px solid blue;">
                          </q-avatar>
                        </div>
                        <div class="q-ml-lg">
                          <div class="flex">
                            <div class="w-t">Nama</div>
                            <div class="text-weight-bold" >: Nama Pasien </div>
                          </div>
                          <div class="flex">
                            <div class="w-t">No. RM</div>
                            <div class="text-weight-bold" >: No RM Pasien </div>
                          </div>
                          <div class="flex">
                            <div class="w-t">Alamat</div>
                            <div class="text-weight-bold" >: Alamat Pasien Alamat Pasien</div>
                          </div>

                          <q-separator class="q-my-lg"></q-separator>
                          <div>
                            Anda Akan ke poli GIGI
                          </div>
                        </div>
                      </div>
                    </q-card-section>

                  </q-card>
                  <!-- <div class="q-mt-lg">Apakah Benar Informasi di atas?</div> -->
                  <div class="q-mt-lg">Apakah Informasi diatas sudah benar? <br />
                    Jika sudah benar ... tekan <span class="text-weight-bold"> SETUJU </span> untuk
                    <span class="text-weight-bold"> PRINT ANTREAN POLI </span> Anda <br/><br/>
                    Atau tekan <span class="text-weight-bold"> KEMBALI </span> Jika Anda ingin melakukan pencarian ulang Data Anda
                  </div>

                  <div class="absolute-bottom q-pa-md">
                    <div class="row full-width">
                      <div class="col-grow bg-negative cursor-pointer" @click="tab='awal'">
                        <div class="q-pa-lg text-center text-white">KEMBALI</div>
                      </div>
                      <div class="col-grow bg-dark cursor-pointer">
                        <div class="q-pa-lg text-center text-white">SETUJU</div>
                      </div>
                    </div>
                  </div>
                </div>

              </q-tab-panel>
            </q-tab-panels>

          </div>
        </div>

      </q-card>
    </div>

  </q-page>
</template>

<script setup>
import { Vue3Lottie } from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import fileLink from 'src/assets/lottie/mad-saleh.json'
// import { ref } from 'vue'
import { useBpjsStore } from 'src/stores/anjungan/bpjs'
const store = useBpjsStore()

import PageCari from './bpjs/PageCari.vue'
</script>

<style lang="scss" scoped>
._fs {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  top:0;
  left: 0;
  position: absolute;
  z-index: 0;
  .fs_ {
    width: 100%;
    height:100%;
    padding-top:100px;
  }

}
.w-400 {
  width:400px;
}
.w-t {
  width:70px;
}

._mycard {
  height: 90%;
  width: 70%;
  background-color: rgba($grey-2, 0.8);
  color: $dark;
  overflow: hidden;
}

.lottie {
  width: 70%;
  transform: scaleX(-1);
}
</style>
