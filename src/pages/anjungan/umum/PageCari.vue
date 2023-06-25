<template>
  <div class="q-pa-xs full-height bg-white" style="border-radius: 5px;">
    <!-- <q-card flat rounded bordered class="bg-grey-2"> -->
      <div class="absolute-top text-center">
      <div class="q-ma-md">
        <div class="q-pa-md anjungan-judul text-weight-bold">
          PESERTA UMUM / NON JKN
        </div>
        <q-separator />
      </div>
    </div>
    <div class="q-pa-md q-my-lg">
      <!-- <div class="text-h4">Pasien BPJS</div>
      <q-separator class="q-my-xs"></q-separator> -->
      <div class="info anjungan-desc" :style="`margin-top:${app.txt100}px;`">
        Silahkan Anda Masukkan <b>No RM ( Nomor Rekam Medis )</b> Anda 👇
      </div>
      <div class="q-my-lg">
        <app-input-kiosk
          ref="kiosk"
          v-model="store.search"
          icon="search"
          :capslock="caps"
          @key-clicked="(val)=> keyClicked(val)"
          @clearable="store.search=''"
          label="Nomor Rekam Medis"
        />
      </div>
      <div class="absolute-bottom q-pa-md">
      <div class="row full-width">
        <div class="col-grow bg-negative cursor-pointer" @click="goTo('/anjungan')">
          <div class="q-pa-lg text-center text-white anjungan-lg">KEMBALI</div>
        </div>
        <!-- <div class="col-grow bg-dark cursor-pointer">
          <div class="q-pa-lg text-center text-white">SETUJU</div>
        </div> -->
      </div>
    </div>
    </div>
  <!-- </q-card> -->
  </div>
</template>

<script setup>
import { onBeforeUnmount, onUpdated, ref } from 'vue'
import { useUmumStore } from 'src/stores/anjungan/umum'
import { useAppStore } from 'src/stores/app'
// import { notifErrVue } from 'src/modules/utils.js'

// const search = ref('')
const app = useAppStore()
const kiosk = ref(null)
const caps = ref(true)

const store = useUmumStore()

function keyClicked (e) {
  store.kioskClicked(e)
}

import { useRouter } from 'vue-router'
const router = useRouter()
function goTo (val) {
  store.changeClasses()
  store.setTab('awal')
  router.push(val)
}

const angka = ref(0)
const hitung = () => {
  angka.value = angka.value + 1
  console.log(angka.value)
  if (angka.value === store.time) {
    store.setTab('awal')
    goTo('/')
  }
}

const updateTimeInterval = setInterval(hitung, 1000)

onBeforeUnmount(() => {
  clearInterval(updateTimeInterval)
})

onUpdated(() => {
  angka.value = 0
  console.log('updated', angka.value)
})
</script>
