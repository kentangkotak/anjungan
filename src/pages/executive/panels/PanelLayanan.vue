<template>
  <div class="__mypanel">
    <div class="row q-col-gutter-lg">
      <div class="col-12">
        <app-chart />
      </div>
    </div>
  </div>
</template>
<script setup>
import { useAppStore } from 'src/stores/app'

const app = useAppStore()
console.log('app', app)
</script>
<style lang="scss" scoped>
.__mypanel {
  width:100%;
  display: flex;
  flex-direction:column;
}
</style>
