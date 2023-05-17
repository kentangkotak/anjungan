<template>
  <div class="q-pa-xs full-height bg-white" style="border-radius: 5px;">
    <!-- <q-card flat rounded bordered class="bg-grey-2"> -->
    <div class="absolute-top text-center">
      <div class="q-ma-md">
        <div class="q-pa-md text-h5 text-weight-bold">
          PENCARIAN DOKTER
        </div>
        <q-separator />
      </div>
    </div>
    <div class="q-pa-lg">
      <q-card  bordered class="bg-accent text-white" style="margin-top:60px;">
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
          <div class="row q-pa-sm">
            <div class="q-mr-md">
              <div>Asal Dari Faskes Tingkat {{ store.pasien_bpjs? store.pasien_bpjs.asalFaskes: '-' }}  {{ store.pasien_bpjs? store.pasien_bpjs.rujukan.provPerujuk.nama: '-' }}</div>
            </div>

          </div>
        </q-card-actions>
      </q-card>
    </div>

    <!-- DOKTER -->
    <div class="q-pa-md q-mt-lg">

      <div class="q-my-sm">
        <div class="info text-body1 q-mb-sm" style="margin-top:20px;">
        Silahkan Anda Pilih Dokter Terjadwal dibawah Berikut :
      </div>
        <q-list bordered separator v-if="store.dokters.length">
          <q-item v-for="(item, i) in store.dokters" :key="i" tag="label" v-ripple>
            <q-item-section avatar>
              <q-radio v-model="store.dokter" :val="item" color="teal" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{item.namadokter}}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
        <div v-else class="column flex-center " style="height:300px;">
          <div> Maaf Tidak Ada Jadwal Dokter Hari Ini </div>
          <div class="text-weight-bold"> 🙏 Kembali Lagi Besok Hari</div>
        </div>

        <!-- {{ store.dokter }} -->
      </div>
      <div class="absolute-bottom q-pa-md">
      <div class="row full-width">
        <div class="col-grow bg-negative cursor-pointer" @click="store.setTab('awal')">
          <div class="q-pa-lg text-center text-white f-20">KEMBALI</div>
        </div>
        <div v-if="store.dokters.length" class="col-grow bg-dark cursor-pointer">
          <div class="q-pa-lg text-center text-white f-20" @click="goTo()">LANJUTKAN</div>
        </div>
      </div>
    </div>
    </div>
  <!-- </q-card> -->
  </div>
</template>

<script setup>
import 'vue3-lottie/dist/style.css'
import { computed, onMounted } from 'vue'
import { useBpjsStore } from 'src/stores/anjungan/bpjs'

const store = useBpjsStore()

import user from 'src/assets/images/nouser.png'
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

function goTo () {
  store.saveBookingPasienBpjs('baru')
}

</script>
