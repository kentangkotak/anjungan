<template>
  <router-view />
</template>

<script setup>
import { useAppStore } from './stores/app'
import { useDisplayStore } from './stores/display'
import { channel } from './utility/sockets'

const app = useAppStore()

const call = useDisplayStore()
channel.subscribed(() => {
  console.log('subscribed!!!')
}).listen('.antrean', (e) => {
  console.log('listen', e)
  const perihal = e.message.menu
  const data = e.message.data
  if (perihal === 'panggil-antrean') {
    call.setPanggil(data)
    call.getData(data.unit.display_id)
  }
})
</script>

<style lang="scss">
$txtjudul: v-bind('app.txt28')px;
$txtdesc : v-bind('app.txtH5')px;
$txtLg : v-bind('app.txtLg')px;

.anjungan-judul {
  font-size: $txtjudul;
}
.anjungan-desc {
  font-size: $txtdesc;
}
.anjungan-lg {
  font-size: $txtLg;
}
</style>
