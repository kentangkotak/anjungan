<template>
  <q-page class="fullscreen bg-primary">

    <div class="column flex-center items-center full-height text-white">
      <q-card class="_mycard shadow-8" >
        <div class="row">
          <div class="col-5">
            <div class="column flex-center items-center full-height">
              <div class="lottie">
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
            <div class="q-pt-lg">
              <div class="text-h3 text-weight-bold">Pasien BPJS</div>
              <q-separator class="q-my-lg"></q-separator>
              <div class="info text-body1">
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
            </div>
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

function keyClicked (e) {
  if (typeof e === 'number') {
    search.value += e
  } else if (e.toLowerCase() === 'hapus') {
    search.value = search.value.substring(0, search.value.length - 1)
  } else if (e.toLowerCase() === 'space') {
    search.value = search.value += ' '
  } else {
    search.value += e
  }
}
</script>

<style lang="scss" scoped>
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
  margin-top: 60px;
  transform: scaleX(-1);
}
</style>
