<template>
  <div class="row head items-center">
    <div class="q-mx-md">
      <div class="row items-center">
        <img src="~assets/images/logo-rsud.png" :style="`width:70px; height:70px;`">
        <div class="q-ml-md text-dark">
          <div class="text-weight-bold" :style="`font-size:${app.txt32}px;`">UOBK RSUD  MOHAMAD SALEH</div>
          <div class="" :style="`font-size:${app.txth5}px; margin-top:-8px`">Jl. Mayjen Panjaitan No.65 Kota Probolinggo Sukabumi, Kec. Mayangan</div>
          <div class="" :style="`font-size: ${app.txt28}; `">KOTA PROBOLINGGO</div>
        </div>
      </div>
    </div>
    <!-- TEMPAT JAM DIGITAL -->
    <q-space></q-space>
    <div class="q-pt-sm">
      <!-- <div class="tempat-jam text-white" :style="`
        width:${app.txt100*6}px;
        border-top-left-radius:${app.txt50}px;
      `"> -->
        <div class="row justify-end" style="font-size: 40px; line-height:40px">
          <div class="text-weight-bold">{{ jam }} </div>
          <div class="text-weight-bold q-mx-sm"> : {{ menit }} </div>
          <div class="text-weight-bold q-ml-sm"> : {{ detik }}</div>
        </div>
        <div class="text-right q-mt-sm">
          <div style="margin-top:-10px;" class="text-caption">{{ tanggal.toDateString() }}</div>
        </div>

      <!-- </div> -->
    </div>
  </div>
</template>

<script setup>
import { useAppStore } from 'src/stores/app'
import { ref } from 'vue'

const app = useAppStore()
const date = new Date()
const tanggal = ref(date)

const jam = ref(date.getHours() > 9 ? date.getHours() : '0' + date.getHours())
const menit = ref(date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes())
const detik = ref(date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds())

</script>
