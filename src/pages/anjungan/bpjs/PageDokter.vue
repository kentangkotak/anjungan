<template>
  <div class="q-pa-xs full-height bg-white" style="border-radius: 5px;">
    <!-- <q-card flat rounded bordered class="bg-grey-2"> -->
    <div class="q-pa-md q-my-lg">
      <div class="text-h3">Pasien BPJS</div>
      <q-separator class="q-my-xs"></q-separator>

      <div class="info text-body1" style="margin-top:150px;">
        Silahkan Anda cari Dokter Terjadwal dibawah Berikut:
      </div>
      <div class="q-my-lg">
        <app-input-kiosk
          ref="kiosk"
          v-model="search"
          icon="search"
          :capslock="caps"
          @key-clicked="(val)=> keyClicked(val)"
          @clearable="search=''"
          label="Cari no Rujukan / Surat Kontrol"
        />
      </div>
      <div class="absolute-bottom q-pa-md">
      <div class="row full-width">
        <div class="col-grow bg-negative cursor-pointer" @click="store.setTab('awal')">
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

const search = ref('')
const kiosk = ref(null)
const caps = ref(true)

const store = useBpjsStore()

function keyClicked (e) {
  if (typeof e === 'number') {
    search.value += e
  } else if (e.toLowerCase() === 'hapus') {
    search.value = search.value.substring(0, search.value.length - 1)
  } else if (e.toLowerCase() === 'space') {
    search.value = search.value += ' '
  } else if (e.toLowerCase() === 'cari') {
    store.tab = 'loading'
    setTimeout(() => {
      store.tab = 'result'
    }, 3000)
  } else {
    search.value += e
  }
}

</script>
