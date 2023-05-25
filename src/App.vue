<template>
  <router-view />
</template>

<script setup>
import { channel } from './utility/sockets'

channel.subscribed(() => {
  console.log('subscribed!!!')
}).listen('.antrean', (e) => {
  console.log('listen', e)
})
</script>
