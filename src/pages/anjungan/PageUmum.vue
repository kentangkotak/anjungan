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
                <PagePilih />
              </q-tab-panel>
              <q-tab-panel name="norm">
                <PageCari />
              </q-tab-panel>
              <q-tab-panel name="result">
                <PageResult />
              </q-tab-panel>
              <q-tab-panel name="norm not found">
                <PageCariNotFound />
              </q-tab-panel>
              <q-tab-panel name="pasien-baru">
                <PasienBaru/>
              </q-tab-panel>
              <q-tab-panel name="pasien-lama">
                <PasienLama/>
              </q-tab-panel>

              <q-tab-panel name="loading">
                <PageLoading />
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
import { useUmumStore } from 'src/stores/anjungan/umum'
// import { ref } from 'vue'
const store = useUmumStore()

import PagePilih from './umum/PagePilih.vue'
import PageCari from './umum/PageCari.vue'
import PageResult from './umum/PageResult.vue'
import PasienBaru from './umum/PasienBaru.vue'
import PasienLama from './umum/PasienLama.vue'
import PageLoading from './umum/PageLoading.vue'
import PageCariNotFound from './umum/PageCariNotFound.vue'
import { onMounted } from 'vue'

onMounted(() => {
  setTimeout(() => {
    console.log('onMounted')
  }, 1000 * 60)
})
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
