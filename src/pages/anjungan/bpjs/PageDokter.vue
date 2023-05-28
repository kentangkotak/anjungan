<template>
  <div class="q-pa-xs full-height bg-white" style="border-radius: 5px;">
    <!-- <q-card flat rounded bordered class="bg-grey-2"> -->
    <div class="absolute-top text-center">
      <div class="q-ma-md">
        <div class="q-pa-md anjungan-judul text-weight-bold">
          PENCARIAN DOKTER
        </div>
        <q-separator />
      </div>
    </div>
    <div class="q-pa-lg">
      <q-card  bordered class="bg-accent text-white" style="margin-top:40px;">
        <q-card-section horizontal>
          <q-img
            class="col-2"
            :src="nouser"
          />

          <q-card-section>
            <div class="q-ml-lg">
              <div class="row anjungan-lg">
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
          <div class="row q-pa-xs">
            <div class="q-mr-md anjungan-lg">
              <div>Asal Dari Faskes Tingkat {{ store.pasien_bpjs? store.pasien_bpjs.asalFaskes: '-' }}  {{ store.pasien_bpjs? store.pasien_bpjs.rujukan.provPerujuk.nama: '-' }}</div>
            </div>

          </div>
        </q-card-actions>
      </q-card>
    </div>

    <!-- DOKTER -->
    <div class="q-pa-lg">

      <div class="">
        <div class="info anjungan-desc q-mb-sm" >
        Silahkan Anda Pilih Dokter Terjadwal dibawah Berikut 👇:
      </div>
        <q-scroll-area :style="`height:${app.txt100*2}px;`">
        <q-list bordered separator v-if="store.dokters.length > 0">
          <q-item v-for="(item, i) in store.dokters" :key="i" tag="label" v-ripple>
            <q-item-section avatar>
              <q-radio v-model="store.dokter" :val="item" color="teal" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{item.namadokter}}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
        <div v-else class="column flex-center " :style="`height:${app.txt100*2}px;`">
          <div> Maaf Tidak Ada Jadwal Dokter Hari Ini </div>
          <div class="text-weight-bold"> 🙏 Kembali Lagi Besok Hari</div>
        </div>
        </q-scroll-area>
        <!-- {{ store.dokters.length }} -->
      </div>
      <div class="absolute-bottom q-pa-md">
      <div class="row full-width">
        <div class="col-grow bg-negative cursor-pointer" @click="store.setTab('awal')">
          <div class="q-pa-lg text-center text-white f-20">KEMBALI</div>
        </div>
        <div v-if="store.dokters.length" class="col-grow bg-dark cursor-pointer">
          <div class="q-pa-lg text-center text-white f-20" @click="goToX()">LANJUTKAN</div>
        </div>
      </div>
    </div>
    </div>
  <!-- </q-card> -->
  </div>
</template>

<script setup>
import 'vue3-lottie/dist/style.css'
import { computed, onBeforeUnmount, onMounted, onUpdated, ref } from 'vue'
import { useBpjsStore } from 'src/stores/anjungan/bpjs'
import { useAppStore } from 'src/stores/app'

const store = useBpjsStore()
const app = useAppStore()

import user from 'src/assets/images/nouser.png'
import { notifErrVue } from 'src/modules/utils'
const nouser = computed(() => new URL(user, import.meta.url).href)
const usia = computed(() => {
  const x = store.pasien_bpjs ? store.pasien_bpjs.rujukan.peserta.umur.umurSekarang : false
  if (!x) {
    return '-'
  }
  return x.split(',')[0]
})

onMounted(() => {
  store.cariDokter()
})

function goToX () {
  if (store.dokter === null) {
    return notifErrVue('Maaf ... Pilih Dokter Terlebih Dahulu')
  }
  store.saveBookingPasienBpjs()
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

onMounted(() => {
  console.log('0213B0050423P000192')
})

</script>
