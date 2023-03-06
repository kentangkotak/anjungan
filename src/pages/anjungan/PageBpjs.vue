<template>
  <q-page class="fullscreen bg-grey">
    <div class="_fs">
      <video autoplay muted class="fs_">
        <source src="~assets/video/video.webm" type="video/webm" />
      </video>
    </div>
    <div class="column flex-center items-center full-height text-white">
      <q-card class="_mycard shadow-8" >
        <div class="row full-height">
          <div class="col-5">
            <div v-if="loading" class="column flex-center items-center full-height">
              <app-wait />
              <!-- <q-img src="~assets/images/logo-rsud.png" /> -->
            </div>
            <div v-else class="column flex-center items-center full-height">
              <div class="lottie order-last">
                <Vue3Lottie
                  ref="anim"
                  :animationData="fileLink"
                  :playOnHover="false"
                  :autoPlay="true"
                />
              </div>
            </div>
          </div>
          <div class="col-7">
            <q-tab-panels
              v-model="tab"
              animated
              transition-prev="jump-up"
              transition-next="jump-down"
              class="transparent full-height"
            >
              <q-tab-panel name="awal">
                <div class="q-pt-lg q-mt-lg">
                  <div class="text-h3 text-weight-bold">Pasien BPJS</div>
                  <q-separator class="q-my-lg q-mr-lg"></q-separator>
                  <div class="info text-body1" style="margin-top:100px;">
                    Silahkan Anda cari no.rujukan Anda pada kolom Pencarian di bawah berikut :
                  </div>
                  <div class="q-my-lg q-mr-lg">
                    <app-input-kiosk
                      ref="kiosk"
                      v-model="search"
                      icon="search"
                      :capslock="caps"
                      @key-clicked="(val)=> keyClicked(val)"
                      @clearable="search=''"
                      label="Cari no Rujukan BPJS"
                    />
                  </div>
                  <div class="absolute-bottom text-right q-pa-lg">
                    <q-btn
                    icon="keyboard_return"
                    color="negative" size="lg" padding="md" label="Kembali"
                    to="/"
                    />
                  </div>
                </div>
              </q-tab-panel>

              <q-tab-panel name="loading">
                <div class="column flex-center items-center full-height bg-white">
                  Harap Tunggu
                </div>
              </q-tab-panel>

              <q-tab-panel name="movies">
                <div class="text-h6">Movies</div>
                Nostrum necessitatibus expedita dolores? Voluptatem repudiandae magni ea.
              </q-tab-panel>
            </q-tab-panels>

          </div>
        </div>

      </q-card>
      <!-- <div class="q-mb-lg">PASIEN BPJS</div>
      <div class="w-400 q-my-lg">
        <app-input-kiosk
          ref="kiosk"
          v-model="search"
          icon="search"
          :capslock="caps"
          @key-clicked="(val)=> keyClicked(val)"
          @clearable="search=''"
        />
      </div> -->
      <!-- <q-btn class="bg-secondary" to="/">BACK</q-btn> -->
    </div>

  </q-page>
</template>

<script setup>
import { Vue3Lottie } from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import fileLink from 'src/assets/lottie/mad-saleh.json'
import { ref } from 'vue'

const search = ref('')
const kiosk = ref(null)
const caps = ref(true)

const tab = ref('awal')

const loading = ref(true)

function keyClicked (e) {
  if (typeof e === 'number') {
    search.value += e
  } else if (e.toLowerCase() === 'hapus') {
    search.value = search.value.substring(0, search.value.length - 1)
  } else if (e.toLowerCase() === 'space') {
    search.value = search.value += ' '
  } else if (e.toLowerCase() === 'enter') {
    tab.value = 'loading'
  } else {
    search.value += e
  }
}
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

._mycard {
  height: 90%;
  width: 70%;
  background-color: rgba($grey-2, 0.8);
  color: $dark;
}

.lottie {
  width: 70%;
  transform: scaleX(-1);
}
</style>
