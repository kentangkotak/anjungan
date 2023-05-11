<template>
  <div class="q-pa-xs full-height bg-white" style="border-radius: 5px;">
    <!-- <q-card flat rounded bordered class="bg-grey-2"> -->
    <div class="q-pa-md q-my-lg">
      <div class="text-h4">Pasien BPJS</div>
      <q-separator class="q-my-xs"></q-separator>
      <div class="info text-body1" style="margin-top:150px;">
        Silahkan Anda cari berdasarkan <b>No RUJUKAN </b> yang didapat dari FASKES Tingkat I / Rumah Sakit Lain ,
        <span>Atau <b>SURAT KONTROL </b> Dari RSUD MOH SALEH dibawah Berikut: </span>
      </div>
      <div class="q-my-lg">
        <app-input-kiosk
          ref="kiosk"
          v-model="store.search"
          icon="search"
          :capslock="caps"
          @key-clicked="(val)=> keyClicked(val)"
          @clearable="store.search=''"
          label="Cari no Rujukan / Surat Kontrol"
        />
      </div>
      <div class="absolute-bottom q-pa-md">
      <div class="row full-width">
        <div class="col-grow bg-negative cursor-pointer" @click="goTo('/anjungan')">
          <div class="q-pa-lg text-center text-white f-20">KEMBALI</div>
        </div>
        <div class="col-grow bg-dark cursor-pointer">
          <div class="q-pa-lg text-center text-white">SETUJU</div>
        </div>
      </div>
    </div>
    </div>
  <!-- </q-card> -->
  </div>
</template>

<script setup>
import 'vue3-lottie/dist/style.css'
import { ref } from 'vue'
import { useBpjsStore } from 'src/stores/anjungan/bpjs'
import { useRouter } from 'vue-router'
// import { notifErrVue } from 'src/modules/utils.js'

// const search = ref('')
const kiosk = ref(null)
const caps = ref(true)

const router = useRouter()
const store = useBpjsStore()

function keyClicked (e) {
  store.kioskClicked(e)
}

function goTo (val) {
  store.changeClasses()
  router.push(val)
}
</script>
