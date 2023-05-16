<template>
  <div class="q-pa-md full-height bg-white" style="border-radius: 5px;">
    <div class="absolute-top text-center">
      <div class="q-ma-md">
        <div class="q-pa-md text-h5 text-weight-bold">
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
                <div> : {{ store.pasien_bpjs? store.pasien_bpjs.rujukan.peserta.umur.umurSekarang: '-' }}</div>
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
      <div class="q-mt-lg">Apakah Informasi diatas sudah benar? <br />
        Jika sudah benar ... tekan <span class="text-weight-bold"> SETUJU </span> untuk
        <span class="text-weight-bold"> PRINT ANTREAN </span> Anda <br/><br/>
        Atau tekan <span class="text-weight-bold"> KEMBALI </span> Jika Anda ingin melakukan pencarian ulang Data Anda
      </div>
    </div>

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
import { computed } from 'vue'

import user from 'src/assets/images/nouser.png'

const store = useBpjsStore()
const nouser = computed(() => new URL(user, import.meta.url).href)

function toPrint () {
  store.saveBookingPasienBaru()
}
</script>
