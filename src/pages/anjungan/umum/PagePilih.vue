<template>
  <div class="q-pa-xs full-height bg-white" style="border-radius: 5px;">
    <!-- <q-card flat rounded bordered class="bg-grey-2"> -->
      <div class="absolute-top text-center">
      <div class="q-ma-md">
        <div class="q-pa-md text-h5 text-weight-bold">
          PESERTA UMUM / NON JKN
        </div>
        <q-separator />
      </div>
    </div>
    <div class="q-pa-lg">
      <div class="info text-subtitle q-mb-lg" style="margin-top:70px;">
        Silahkan Anda pilih <b>LAMA </b> jika anda sudah mempunyai <b>NO.RM / Nomor Rekam Medis</b>
        di RSUD MOHAMAD SALEH atau pilih <b>BARU</b> Jika Belum Mempunyai <b>NO.RM</b>
      </div>
      <div class="q-pa-lg">
        <div class="column flex-center">
          <q-btn rounded size="xl" class="full-width q-mb-lg" color="accent" @click="cetakAntrean()">
            <div class="q-pa-lg">PASIEN BARU</div>
          </q-btn>
          <q-btn rounded size="xl" class="full-width " color="dark" @click="store.setTab('norm')">
            <div class="q-pa-lg">PASIEN LAMA</div>
          </q-btn>
        </div>
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
  <!-- </q-card> -->
  </div>
</template>

<script setup>
// import { ref } from 'vue'
import { useUmumStore } from 'src/stores/anjungan/umum'
import { onBeforeUnmount, onUpdated, ref } from 'vue'
import { useRouter } from 'vue-router'
// import { notifErrVue } from 'src/modules/utils.js'

// const search = ref('')

const router = useRouter()
const store = useUmumStore()
function goTo (val) {
  store.changeClasses()
  router.push(val)
}

function cetakAntrean () {
  store.saveBookingPasienUmum('baru')
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
