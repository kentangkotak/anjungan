<template>
  <div class="player">
    <div class="player_sizer">
      <video ref="refVideo" autoplay controls loop>
        <source type="video/mp4" src="~assets/video/NE.mp4">
      </video>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const refVideo = ref()
onMounted(() => {
  console.log('video', refVideo.value)
})
</script>

<style lang="scss" scoped>
.player{
  width: 100%;
  video{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top:0;
  }

  &_sizer {
    width: 100%;
    padding-top: 56.25%;
    // outline: 3px solid red;
  }
}
</style>
