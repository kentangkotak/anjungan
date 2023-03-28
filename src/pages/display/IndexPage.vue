<template>
  <q-page class="fullscreen bg-primary">
    <div class="column full-height">
      <!-- header -->
      <div class="col-auto header bg-yellow">
        <div class="row items-center">
            <div class="q-px-md q-py-sm">
              <div class="row items-center">
                <q-avatar
                size="70px"
                 class="shadow-8"
              >
                <img src="~assets/images/logo-rsud.png">
              </q-avatar>
              <div class="q-ml-md text-white">
                <div class="text-h5 text-weight-bold">UOBK RSUD  MOHAMAD SALEH</div>
                <div class="text-h6">KOTA PROBOLINGGO</div>
              </div>
              </div>
            </div>
            <q-space></q-space>
            <div class="q-px-md q-py-sm">
              f
            </div>
          </div>
      </div>
      <!-- content -->
      <div class="col grow bg-negative">
        <div class="row full-height">
          <div class="col-4 bg-secondary">sfa</div>
          <div class="col-8 bg-grey">sfa</div>
        </div>
      </div>
    </div>

  </q-page>
</template>

<script setup>
// import { useAnjunganStore } from 'src/stores/anjungan/index'
import { useRouter } from 'vue-router'
// import { Vue3Lottie } from 'vue3-lottie'
// import 'vue3-lottie/dist/style.css'
// import { onMounted } from 'vue'

// const store = useAnjunganStore()

const router = useRouter()
console.log(router)

</script>

<style lang="scss" scoped>

</style>
