<template>
  <div class="player">
    <div class="player_sizer">
      <!-- <iframe src="~assets/video/NE.mp4" type="video/mp4" allow="autoplay" id="video" style="display:none"></iframe> -->
      <video v-if="!loading" id="vidEl" ref="refVideo"
        :key="idx"
        :autoplay="autoplay"
        :muted="muted"
        @loadedmetadata="loadedMD($event)"
        @loadstart="loadedStart($event)"
        @ended="onEnded()"
        >
        <source :type="getType()" :src="getVideo()">
      </video>
      <q-btn label="play" @click="played($event)"></q-btn>
    </div>
  </div>
</template>

<script setup>
import { pathImg } from 'src/boot/axios'
import { ref, onMounted } from 'vue'

const props = defineProps({
  videos: {
    type: Array,
    default: () => []
  },
  loading: {
    type: Boolean,
    default: true
  }
})

const refVideo = ref()
const autoplay = ref(false)
const muted = ref(false)

// const videos = ref(['NE.mp4', 'video.webm'])
const idx = ref(0)

function getVideo () {
  const file = props.videos[idx.value]
  if (props.videos.length === 0) {
    return new URL('../../assets/video/NE.mp4', import.meta.url).href
  }
  if (file === null || file === 'undefined' || file === undefined || file === '') {
    return new URL('../../assets/video/NE.mp4', import.meta.url).href
  } else {
    return pathImg + file.url
  }
}
function getType () {
  const file = props.videos[idx.value]
  if (props.videos.length === 0) {
    return 'video/mp4'
  }
  if (file === null || file === 'undefined' || file === undefined || file === '') {
    return 'video/mp4'
  } else {
    return file.type
  }
}

function played () {
  return refVideo.value ? refVideo.value.play() : false
}
function loadedStart (e) {
  console.log('loaded', e)
  played()
}

function onEnded () {
  console.log('onEnded')
  // const vid = videos.value.length
  const vid = props.videos.length
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
