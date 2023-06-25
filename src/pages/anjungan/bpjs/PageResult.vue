<template>
  <div class="q-pa-md full-height bg-white" style="border-radius: 5px;">
    <div class="absolute-top text-center">
      <div class="q-ma-md">
        <div class="q-pa-md text-weight-bold" :style="`font-size:${app.txt28}px`">
          BIODATA PASIEN
        </div>
        <q-separator />
      </div>
    </div>
    <div class="q-pa-lg">
      <q-card  bordered class="bg-blue text-white" style="margin-top:60px;">
      <q-card-section horizontal>
        <q-img
          class="col-2"
          :src="nouser"
        />

        <q-card-section>
          <div class="q-ml-lg">
            <div class="row">
              <div class="q-mr-md">
                <!-- tempat -->
                <div>Nama</div>
                <div>NIK</div>
                <div>NOKA</div>
                <div>USIA</div>
              </div>
              <div>
                <!-- isi -->
                <div> : {{ store.pasien_bpjs? store.pasien_bpjs.rujukan.peserta.nama: '-' }}</div>
                <div> : {{ store.pasien_bpjs? store.pasien_bpjs.rujukan.peserta.nik: '-' }}</div>
                <div> : {{ store.pasien_bpjs? store.pasien_bpjs.rujukan.peserta.noKartu: '-' }}</div>
                <div> : {{ usia }}</div>
              </div>
            </div>

            <!-- <q-separator class="q-my-md"></q-separator> -->

          </div>
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <div class="row">
          <div class="q-mr-md">
            <div>Asal Dari Faskes Tingkat {{ store.pasien_bpjs? store.pasien_bpjs.asalFaskes: '-' }}  {{ store.pasien_bpjs? store.pasien_bpjs.rujukan.provPerujuk.nama: '-' }}</div>
          </div>

        </div>
      </q-card-actions>
    </q-card>
    </div>
    <!-- <div class="q-mt-lg">Apakah Benar Informasi di atas?</div> -->
    <div class="text-center">
      <!-- <div clas="text-h5">Maaf</div> -->
      <div class="text-h6">Anda Belum Terdaftar di RSUD MOHAMAD SALEH</div>
      <div class="q-mt-lg text-h6">Anda akan di alihkkan ke <span class="text-weight-bold">ANTRIAN PENDAFTARAN TERLEBIH DAHULU</span>   <br /> <br />
        tekan <span class="text-weight-bold"> SETUJU </span> untuk
        <span class="text-weight-bold"> PRINT ANTREAN PENDAFTARAN </span> Anda <br/><br/>
        Atau tekan <span class="text-weight-bold"> KEMBALI </span> Jika Anda tidak setuju
      </div>
    </div>
    <!-- {{ store.pasien_bpjs }} -->
    <div class="absolute-bottom q-pa-md">
      <div class="row full-width">
        <div class="col-grow bg-negative cursor-pointer" @click="store.tab='awal'">
          <div class="q-pa-lg text-center text-white f-20">KEMBALI</div>
        </div>
        <div class="col-grow bg-dark cursor-pointer">
          <div class="q-pa-lg text-center text-white f-20" @click="toPrint()">SETUJU</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useBpjsStore } from 'src/stores/anjungan/bpjs'
import { computed, onBeforeUnmount, onUpdated, ref } from 'vue'

import user from 'src/assets/images/nouser.png'

const store = useBpjsStore()
const nouser = computed(() => new URL(user, import.meta.url).href)

const usia = computed(() => {
  const x = store.pasien_bpjs ? store.pasien_bpjs.rujukan.peserta.umur.umurSekarang : false
  if (!x) {
    return '-'
  }
  return x.split(',')[0]
})

function toPrint () {
  store.saveBookingPasienBpjs('baru')
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
