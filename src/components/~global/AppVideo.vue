<template>
  <div class="player">
    <div class="player_sizer">
      <!-- <iframe src="~assets/video/NE.mp4" type="video/mp4" allow="autoplay" id="video" style="display:none"></iframe> -->
      <video id="vidEl" ref="refVideo"
        :key="idx"
        :autoplay="autoplay"
        :muted="muted"
        @loadedmetadata="loadedMD($event)"
        @loadstart="loadedStart($event)"
        @ended="onEnded()"
        >
        <source :src="getVideo()">
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

const videos = ref(['NE.mp4', 'video.webm'])
const idx = ref(0)

function getVideo () {
  const file = videos.value[idx.value]
  if (file === null || file === 'undefined' || file === undefined || file === '') {
    return new URL('../../assets/video/NE.mp4', import.meta.url).href
  } else {
    return new URL('../../assets/video/' + file, import.meta.url).href
  }
}

function played () {
  refVideo.value.play()
}
function loadedStart (e) {
  console.log('loaded', e)
  played()
}

function onEnded () {
  console.log('onEnded')
  const vid = videos.value.length
  if (idx.value === vid - 1) {
    idx.value = 0
  } else {
    idx.value = idx.value + 1
  }
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
