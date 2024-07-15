
<template>
  <q-page class="fullscreen bg-dark">
    <div v-if="!isAuth">
      <BlockPage />
    </div>
    <div v-else class="fullscreen">
      <BoxAnimation class="absolute" style="z-index: -1;" />
      <AnimationWave class="z--" />
      <div class="full-height full-width q-pa-md ">
        <!-- <DisplayPoliPage :key="queryparam" /> -->
      </div>
    </div>
  </q-page>
</template>

<script setup>
// import BlockPage from './comp/BlockPage.vue'
// import AnimationWave from './comp/AnimationWave.vue'
// import BoxAnimation from './comp/BoxAnimation.vue'
// import DisplayPoliPage from './DisplayPoliPage.vue'

const BlockPage = () => import('./comp/BlockPage.vue')
const BoxAnimation = () => import('./comp/BoxAnimation.vue')
const AnimationWave = () => import('./comp/AnimationWave.vue')

import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from 'src/stores/auth/index'

const route = useRoute()
const auth = useAuthStore()
const isAuth = computed(() => auth.user)

// eslint-disable-next-line no-unused-vars
const queryparam = computed(() => route.params.name)

onMounted(() => {
  console.log('auth', isAuth.value)
  auth.logout()
  // console.log('route', queryparam)
})

</script>
