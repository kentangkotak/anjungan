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
    <div id="printTing" class="" style="min-width: 500px;">
      <div class="text-center">
        <div class="row flex-center">
          <q-img
            :src="logox"
            spinner-color="white"
            style="max-width: 40px"
          />
          <div class="text-left q-ml-md">
            <div class="f-16 text-weight-bold">{{store.rsud.nama}} </div>
            <div class="f-14">{{store.rsud.alamat}} {{ store.rsud.kota }}</div>
          </div>
        </div>

        <q-separator class="q-my-md" />
        <!-- {{ store.pasien_bpjs }} -->
      <div class="f-14">PASIEN BARU </div>
      <div class="text-h5 text-weight-bold">BPJS</div>
      <div class="f-14">No. Antrian Anda: </div>
      <div class="q-ma-lg">
        <div class="text-h5 text-weight-bold bord">NA002</div>
      </div>
      <div class="f-14  q-mb-md text-blue">LOKET PENDAFTARAN 2</div>
      <div class="f-14">SILAHKAN MENUNGGU NOMOR ANTRIAN DIPANGGIL</div>
      <div class="f-14">NOMOR INI HANYA BERLAKU PADA HARI DICETAK</div>
      <div class="f-14 q-mt-md text-blue">{{ dateHuman(new Date())}}</div>
      </div>

    </div>
    <div class="absolute-bottom q-pa-md">
        <div class="row full-width">
          <div class="col-grow bg-negative cursor-pointer" @click="store.setTab('awal')">
            <div class="q-pa-lg text-center text-white f-20">BATAL</div>
          </div>
          <div class="col-grow bg-dark cursor-pointer" v-print="printObj">
          <div class="q-pa-lg text-center text-white f-20">PRINT ANTRIAN</div>
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

const printObj = {
  id: 'printTing',
  popTitle: 'print Absensi',
  // extraCss: 'https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.1/animate.compat.css, https://cdn.bootcdn.net/ajax/libs/hover.css/2.3.1/css/hover-min.css',
  // extraHead: '<meta http-equiv="Content-Language"content="zh-cn"/>',
  beforeOpenCallback (vue) {
    // printed.value = true
    console.log('wait...')
  },
  openCallback (vue) {
    console.log('opened')
  },
  closeCallback (vue) {
    // printed.value = false
    // changePeriode()
    console.log('closePrint')
    goTo('/anjungan')
  }
}
</script>

<style lang="scss" scoped>
.bord{
  border: 2px solid black;
}
</style>
