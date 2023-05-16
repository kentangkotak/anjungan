<template>
  <div class="q-pa-xs full-height bg-white column flex-center" style="border-radius: 5px;">
    <div class="q-pa-md q-my-lg ">
      <div class="text-center">
        <div class="text-h5 text-weight-bold">
        Maaf
      </div>
      <div class="text-h5">Pencarian dengan No Rujukan / No Surat Kontrol dengan Nomor</div>
      <div class="text-h4 text-weight-bold bord q-my-md">{{ store.search }}</div>
      <div  class="text-h5 text-negative">Tidak ditemukan</div>
      </div>
      <div class="absolute-bottom q-pa-md">
        <div class="row full-width">
          <div class="col-grow bg-negative cursor-pointer" @click="goTo('/anjungan')">
          <div class="q-pa-lg text-center text-white f-20">KEMBALI</div>
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
// import { ref } from 'vue'
import { useBpjsStore } from 'src/stores/anjungan/bpjs'
import { useRouter } from 'vue-router'
// import { notifErrVue } from 'src/modules/utils.js'

const router = useRouter()
const store = useBpjsStore()

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
