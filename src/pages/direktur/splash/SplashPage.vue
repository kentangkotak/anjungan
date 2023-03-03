<template>
  <q-page class="column flex-center items-center fullscreen bg-primary text-white">
    <div class="full-width q-pa-sm text-center">
      <text-anim :height="100" txt="Dashboard Executive" />
      <text-anim :height="100" />
      <div class="text-h3">KOTA PROBOLINGGO</div>
    </div>
    <q-btn color="secondary">Get Started</q-btn>
  </q-page>
</template>

<script setup>
import TextAnim from './TextAnim.vue'
console.log('splash')
</script>
