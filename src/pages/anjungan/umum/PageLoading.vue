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
import { useUmumStore } from 'src/stores/anjungan/umum'

const store = useUmumStore()
</script>
