<template>
  <div class="player">
    <div class="player_sizer">
      <!-- <iframe src="~assets/video/NE.mp4" type="video/mp4" allow="autoplay" id="video" style="display:none"></iframe> -->
      <video id="vidEl" ref="refVideo"
        :autoplay="autoplay"
        :muted="muted"
        @loadedmetadata="loadedMD($event)"
        @loadstart="loadedStart($event)"
        @ended="onEnded()"
        >
        <source type="video/mp4" src="~assets/video/NE.mp4">
      </video>
      <q-btn label="play" @click="played($event)"></q-btn>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const refVideo = ref()
const autoplay = ref(false)
const muted = ref(false)

function played () {
  refVideo.value.play()
}
function loadedStart (e) {
  console.log('loaded', e)
  played()
}

function onEnded () {
  console.log('onEnded')
}
function loadedMD (ev) {
  return ev
}
onMounted(() => {
  //
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
