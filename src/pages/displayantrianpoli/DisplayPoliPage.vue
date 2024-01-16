<template>
  <div class="column full-height full-width">
    <div class="col-auto q-pa-sm opa" >
      <HeaderComp />
    </div>
    <div class="col-grow">
      <div class="row full-height full-width">
        <div class="col-auto full-height">
          <div class="full-height q-pr-md q-py-md" style="width:30vw;">
            <div class="column full-width full-height">
              <div class="col-grow q-pb-md">
                <CardcounterComp />
              </div>
              <div class="col-auto bg-red" style="height: 30%;">
                Bawah
              </div>
            </div>
          </div>
        </div>
        <div class="col full-width">
          <VideoComp :videos="video.videos" :loading="video.loading" />
        </div>
      </div>
    </div>
    <div class="col-auto bg-white q-pa-sm">Bottom</div>
  </div>
</template>

<script setup>
import VideoComp from './comp/VideoComp.vue'
import HeaderComp from './comp/HeaderComp.vue'
import CardcounterComp from './comp/CardcounterComp.vue'
import { onMounted } from 'vue'
// import { useRoute } from 'vue-router'
import { useVideoStore } from 'src/stores/video'

// const route = useRoute()
const video = useVideoStore()

onMounted(() => {
  // console.log(route)
  video.getData()
})
</script>

<style lang="scss" scoped>
.opa{
  background-color: (255,255,255,0.5);
}

</style>
