<template>
  <q-card square class="full-height">
    <div class="column full-height">
      <div :class="`col-auto bg-${colors[7]} text-white q-pa-md`">
        <div class="text-center text-weight-bold" :style="`font-size: ${app.txt28}px;`">POLI GIGI</div>
        <div class="text-center" :style="`font-size: ${app.txtH5}px; margin-top:-5px;`">PENDAFTARAN PASIEN UMUM</div>
      </div>
      <div class="col full-height column flex-center">
        <div class="text-center" :style="`font-size: ${app.txtH5}px;`">Nomor Antrian</div>
        <div class="text-center text-weight-bold" :style="`font-size: ${app.txt70}px; margin-top:-5px`">A003</div>

      </div>
      <div class="col-auto bg-negative text-white q-pa-md text-center">
        <div> Sisa Antrian : - </div>
      </div>
    </div>
  </q-card>
</template>

<script setup>
import { useAppStore } from 'src/stores/app'
import { ref } from 'vue'

const app = useAppStore()

const colors = ref([
  'deep-orange',
  'teal',
  'indigo',
  'purple',
  'orange',
  'brown',
  'blue-grey',
  'blue'
])
defineProps({
  item: {
    type: Object,
    default: null
  }
})

</script>
