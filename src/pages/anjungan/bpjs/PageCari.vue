<template>
  <div class="q-pt-lg q-mt-lg">
    <div class="text-h3 text-weight-bold">Pasien BPJS</div>
    <q-separator class="q-my-lg q-mr-lg"></q-separator>
    <div class="info text-body1" style="margin-top:100px;">
      Silahkan Anda cari berdasarkan <b>No RUJUKAN </b> yang didapat dari FASKES Tingkat I / Rumah Sakit Lain ,
      <span>Atau <b>SURAT KONTROL </b> Dari RSUD MOH SALEH dibawah Berikut: </span>
    </div>
    <div class="q-my-lg q-mr-lg">
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
    <div class="absolute-bottom text-right q-pa-lg">
      <q-btn
      icon="keyboard_return"
      color="negative" size="lg" padding="md" label="Kembali"
      to="/"
      />
    </div>
  </div>
</template>

<script setup>
import 'vue3-lottie/dist/style.css'
import { ref } from 'vue'
import { useBpjsStore } from 'src/stores/anjungan/bpjs'

const search = ref('')
const kiosk = ref(null)
const caps = ref(true)

// const tab = ref('awal')
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
