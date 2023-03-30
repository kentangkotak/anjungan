<template>
  <q-page class="fullscreen bg-primary">
    <div class="column full-height">
      <!-- header -->
      <!-- <div class="col-auto header bg-yellow">
        <div class="row items-center">
            <div class="q-px-md q-py-sm">
              <div class="row items-center">
                <q-avatar
                size="70px"
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
            <q-space></q-space>
            <div class="q-px-md q-py-sm">
              f
            </div>
          </div>
      </div> -->
      <!-- content -->
      <div class="col grow bg-negative">
        <div class="row full-height">
          <div class="col-4 bg-secondary">
            <div class="q-px-md q-py-sm">
              <div class="row items-center">
                <q-avatar
                size="70px"
                 class="shadow-8"
              >
                <img src="~assets/images/logo-rsud.png">
              </q-avatar>
              <div class="q-ml-md text-white">
                <div class="text-h6 text-weight-bold">UOBK RSUD  MOHAMAD SALEH</div>
                <div class="subtitle" style="margin-top: -5px;">KOTA PROBOLINGGO</div>
              </div>
              </div>
            </div>
          </div>
          <div class="col-8 bg-grey">
            <div class="column full-height">
              <div class="col tempat-video full-height">
                <div class="q-pa-xs full-height">
                  <!-- <div class="q-video full-height">
                    <iframe
                      src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
                      frameborder="0"
                      allowfullscreen
                      autoplay
                    />
                  </div> -->
                  <div class="full-height">
                    <video controls autoplay muted style="width:100%;">
                      <source src="~assets/video/video.webm" />
                      Your Browser does not support mp4 videos, change browser!
                    </video>
                  </div>
                </div>
              </div>
              <div class="col-3 tempat-list-antrian bg-teal">Tempat List</div>
            </div>
          </div>
        </div>
      </div>
      <!-- text berjalan -->
      <div class="col-auto">
        <div class="q-pa-sm">
          Tulisan Berjalan
        </div>
      </div>
    </div>

  </q-page>
</template>

<script setup>
// import { useAnjunganStore } from 'src/stores/anjungan/index'
import { useRouter } from 'vue-router'
// import { Vue3Lottie } from 'vue3-lottie'
// import 'vue3-lottie/dist/style.css'
// import { onMounted } from 'vue'

// const store = useAnjunganStore()

const router = useRouter()
console.log(router)

</script>

<style lang="scss" scoped>

</style>
