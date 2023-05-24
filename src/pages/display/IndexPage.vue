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
            <q-space></q-space>
          <div class="text-right text-white q-pa-lg">
            jh
          </div>
          </div>

          <!-- </div> -->
      </div>
      <!-- content -->
      <div class="col grow">
        <div class="row full-height">
          <!-- TEMPAT DISPLAY ANTRIAN -->
          <div class="col-5 bg-dark">
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
      <div class="col-1">
        <div class="q-pa-sm">
          Tulisan
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
import { onMounted } from 'vue'

const store = useVideoStore()

onMounted(() => {
  store.getData()
})
</script>

<style lang="scss" scoped>
.head{
  z-index: 100;
  background: url('src/assets/images/head.png');
  background-size: cover;
  // width: 100%;
  height: 100%;
}

.tempat-video {
  // padding: 20px;
  border: 2px solid white;
  border-radius: 20px;
  overflow: hidden;
}
</style>
