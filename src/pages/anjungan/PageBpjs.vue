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
              <q-tab-panel name="dokter">
                <PageDokter />
              </q-tab-panel>

              <q-tab-panel name="loading">
                <div class="column flex-center items-center full-height light-dimmed">
                  <q-spinner-cube
                    color="info"
                    size="4em"
                  />
                  Harap Tunggu
                </div>
              </q-tab-panel>

              <q-tab-panel name="result">
                <PageResult />
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
import PageDokter from './bpjs/PageDokter.vue'
import PageResult from './bpjs/PageResult.vue'
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
