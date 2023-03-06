<template>
  <!-- <div class="absolute bg-loading" style="width:100%; height:100%; z-index: 100;"> -->
     <!-- <div class="full-width full-height column justify-center items-center content-center"> -->
       <div class="column flex-center items-center" >
        <Vue3Lottie
          ref="anim"
          :animationData="fileLink"
          :playOnHover="false"
          :autoPlay="true"
          direction="alternate"
        />
        <!-- <div class="f-14 text-grey-7">Harap Tunggu ...</div> -->
       </div>
     <!-- </div> -->
    <!-- </div> -->
</template>
<script setup>
import { Vue3Lottie } from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'

import fileLink from 'src/assets/lottie/95619-webpage-loading-animation.json'
</script>
<style lang="scss" scoped>
.bg-loading {
  background-color: #ffffffea;
}
</style>
