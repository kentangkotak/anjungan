<template>
  <div class="column flex-center items-center full-height bg-white">
      <q-spinner-cube
        color="info"
        size="4em"
      />
      <div class="">Harap Tunggu ...</div>
      <div class="text-weight-bold text-accent">{{store.load}}</div>
    </div>
</template>
<script setup>
import { useBpjsStore } from 'src/stores/anjungan/bpjs'

const store = useBpjsStore()
</script>
