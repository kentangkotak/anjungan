<template>
  <router-view />
</template>

<script setup>
import { useDisplayStore } from './stores/display'
import { channel } from './utility/sockets'

const call = useDisplayStore()
channel.subscribed(() => {
  console.log('subscribed!!!')
}).listen('.antrean', (e) => {
  console.log('listen', e)
  console.log('listen', call)
})
</script>
