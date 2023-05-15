<template>
  <div class="q-pa-xs full-height bg-white column flex-center" style="border-radius: 5px;">
    <div class="absolute-top text-center">
      <div class="q-ma-md">
        <div class="q-pa-md text-h5 text-weight-bold">
          PREVIEW ANTRIAN
        </div>
        <q-separator />
      </div>
    </div>
    <div class="q-pa-md q-my-lg " style="min-width: 500px;">
      <div class="text-center q-pa-xl">
        <div class="row flex-center">
          <q-img
            :src="logox"
            spinner-color="white"
            style="max-width: 50px"
          />
          <div class="text-left q-ml-md">
            <div class="f-16 text-weight-bold q-mt-sm ">{{store.rsud.nama}} </div>
            <div class="f-14">{{store.rsud.alamat}} {{ store.rsud.kota }}</div>
          </div>
        </div>

        <q-separator class="q-my-md" />
      <div class="f-14">PASIEN BARU </div>
      <div class="text-h5 text-weight-bold">BPJS</div>
      <div class="f-14">No. Antrian Anda: </div>
      <div class="q-ma-lg">
        <div class="text-h5 text-weight-bold bord">NA002</div>
      </div>
      <div class="f-14  q-mb-md">LOKET PENDAFTARAN 2</div>
      <div class="f-14">SILAHKAN MENUNGGU NOMOR ANTRIAN DIPANGGIL</div>
      <div class="f-14">NOMOR INI HANYA BERLAKU PADA HARI DICETAK</div>
      <div class="f-14">{{ dateHuman(new Date())}}</div>
      </div>
      <div class="absolute-bottom q-pa-md">
        <div class="row full-width">
          <div class="col-grow bg-dark cursor-pointer" @click="goTo('/anjungan')">
          <div class="q-pa-lg text-center text-white f-20">PRINT ANTRIAN</div>
        </div>
        <!-- <div class="col-grow bg-dark cursor-pointer">
          <div class="q-pa-lg text-center text-white">SETUJU</div>
        </div> -->
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useBpjsStore } from 'src/stores/anjungan/bpjs'
import { useRouter } from 'vue-router'
import { dateHuman } from 'src/modules/utils.js'

import logo from 'src/assets/images/logo-rsud.png'

const router = useRouter()
const store = useBpjsStore()

const logox = computed(() => {
  return new URL(logo, import.meta.url).href
})

// function keyClicked (e) {
//   store.kioskClicked(e)
// }

function goTo (val) {
  store.changeClasses()
  store.setTab('awal')
  router.push(val)
}
</script>

<style lang="scss" scoped>
.bord{
  border: 2px solid black;
}
</style>
