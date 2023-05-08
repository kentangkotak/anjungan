<template>
  <div class="q-pa-md full-height bg-white" style="border-radius: 5px;">
    <q-card flat rounded bordered class="bg-grey-2" style="margin-top:50px;">
      <q-card-section>
        <!-- <div>Data Pasien</div> -->
        <div class="absolute-top column flex-center" style="margin-top:-50px;">
            <q-avatar
              size="100px"
            >
              <img :src="`https://cdn.quasar.dev/img/avatar1.jpg`" style="border: 4px solid grey;">
            </q-avatar>
          </div>
        <div class="row q-mt-lg q-py-lg">

          <div class="q-ml-lg">
            <q-separator class="q-my-sm"></q-separator>
            <div class="q-pt-sm">
              <div class="flex">
              <div class="w-t">Nama</div>
              <div class="text-weight-bold" >: Nama Pasien </div>
            </div>
            <div class="flex">
              <div class="w-t">No. RM</div>
              <div class="text-weight-bold" >: No RM Pasien </div>
            </div>
            <div class="flex">
              <div class="w-t">Alamat</div>
              <div class="text-weight-bold" >: Alamat Pasien Alamat Pasien</div>
            </div>
            </div>

            <q-separator class="q-my-md"></q-separator>
            <div>
              Anda Akan ke poli GIGI
            </div>
          </div>
        </div>
      </q-card-section>

    </q-card>
    <!-- <div class="q-mt-lg">Apakah Benar Informasi di atas?</div> -->
    <div class="q-mt-lg">Apakah Informasi diatas sudah benar? <br />
      Jika sudah benar ... tekan <span class="text-weight-bold"> SETUJU </span> untuk
      <span class="text-weight-bold"> PRINT ANTREAN POLI </span> Anda <br/><br/>
      Atau tekan <span class="text-weight-bold"> KEMBALI </span> Jika Anda ingin melakukan pencarian ulang Data Anda
    </div>

    <div class="absolute-bottom q-pa-md">
      <div class="row full-width">
        <div class="col-grow bg-negative cursor-pointer" @click="store.tab='awal'">
          <div class="q-pa-lg text-center text-white f-20">KEMBALI</div>
        </div>
        <div class="col-grow bg-dark cursor-pointer">
          <div class="q-pa-lg text-center text-white f-20">SETUJU</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useBpjsStore } from 'src/stores/anjungan/bpjs'

const store = useBpjsStore()
</script>
