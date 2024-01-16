<template>
  <router-view />
</template>

<script setup>
// import { useDisplayStore } from './stores/display'
// import { channel } from './utility/sockets'

// const call = useDisplayStore()
// channel.subscribed(() => {
//   console.log('subscribed!!!')
// }).listen('.antrean', (e) => {
//   console.log('listen', e)
//   const perihal = e.message.menu
//   const data = e.message.data
//   if (perihal === 'panggil-antrean') {
//     call.setPanggil(data)
//     call.getData(data.unit.display_id)
//   }
// })
</script>
