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
                    <!-- <video controls autoplay muted style="width:100%;">
                      <source src="~assets/video/video.webm" />
                      Your Browser does not support mp4 videos, change browser!
                    </video> -->
                    <video-player
                        class="video-player vjs-big-play-centered"
                        src="https://github.surmon.me/videojs-player"
                        poster="https://vjs.zencdn.net/v/oceans.png"
                        crossorigin="anonymous"
                        playsinline
                        controls
                        :volume="0.6"
                        :height="320"
                        :playback-rates="[0.7, 1.0, 1.5, 2.0]"
                        @mounted="handleMounted"
                        @ready="handleEvent($event)"
                        @play="handleEvent($event)"
                        @pause="handleEvent($event)"
                        @ended="handleEvent($event)"
                        @loadeddata="handleEvent($event)"
                        @waiting="handleEvent($event)"
                        @playing="handleEvent($event)"
                        @canplay="handleEvent($event)"
                        @canplaythrough="handleEvent($event)"
                        @timeupdate="handleEvent(player?.currentTime())"
                      />
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
import { VideoPlayer } from '@videojs-player/vue'
// import { VideoJsPlayer } from 'video.js'
import 'video.js/dist/video-js.css'
import { shallowRef } from 'vue'
// import { useAnjunganStore } from 'src/stores/anjungan/index'
import { useRouter } from 'vue-router'
// import { Vue3Lottie } from 'vue3-lottie'
// import 'vue3-lottie/dist/style.css'
// import { onMounted } from 'vue'

// const store = useAnjunganStore()

const router = useRouter()
const player = shallowRef()
console.log(router)

const handleMounted = (payload) => {
  player.value = payload.player
  console.log('Basic player mounted', payload)
}

const handleEvent = (log) => {
  console.log('Basic player event', log)
}

</script>

<style lang="scss" scoped>
.video-player {
    background-color: $dark;
    width: 100%;
  }
</style>
