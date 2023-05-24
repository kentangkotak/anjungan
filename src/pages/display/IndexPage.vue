<template>
  <q-page class="fullscreen bg-dark">
    <AsyncComp :key="queryparam" />
  </q-page>
</template>

<script setup>
import { useRoute } from 'vue-router'
import AsyncComp from './AsyncComp.vue'
import { computed, onMounted } from 'vue'
import { useDisplayStore } from 'src/stores/display'

const route = useRoute()
const store = useDisplayStore()

const queryparam = computed(() => route.params.name)

onMounted(() => {
  console.log('route', route.params.name)
  store.getData(queryparam.value)
})
</script>
