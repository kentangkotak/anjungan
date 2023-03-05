<template>
  <router-view />
</template>

<script setup>
import { useQuasar } from 'quasar'
import { onMounted } from 'vue'
const $q = useQuasar()
onMounted(() => {
  $q.fullscreen.request()
    .then(() => {
    // success!
    })
    .catch(_err => {
    // oh, no!!!
    })
})
</script>
