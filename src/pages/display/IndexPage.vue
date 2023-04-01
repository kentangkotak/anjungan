<template>
  <q-page class="fullscreen bg-primary">
    <div class="column full-height">
      <!-- header -->
      <!-- <div class="col-auto header bg-yellow">
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
                <div class="text-h6" style="margin-top: -5px;">KOTA PROBOLINGGO</div>
              </div>
              </div>
            </div>
            <q-space></q-space>
            <div class="q-px-md q-py-sm">
              f
            </div>
          </div>
      </div> -->
      <!-- content -->
      <div class="col grow">
        <div class="row full-height">
          <div class="col-4 bg-secondary">
            <div class="q-px-md q-py-sm">
              <div class="row items-center">
                <q-avatar
                size="70px"
                 class="shadow-8"
              >
                <img src="~assets/images/logo-rsud.png">
              </q-avatar>
              <div class="q-ml-md text-white">
                <div class="text-h6 text-weight-bold">UOBK RSUD  MOHAMAD SALEH</div>
                <div class="subtitle" style="margin-top: -5px;">KOTA PROBOLINGGO</div>
              </div>
              </div>
            </div>
          </div>
          <div class="col-8 bg-black">
            <div class="column full-height">
              <div class="col tempat-video full-height">
                <div class="full-height column items-center flex-center q-mx-auto full-width relative-position">
                    <app-video />
                </div>
              </div>
              <div class="col-3 tempat-list-antrian bg-teal">
                tempat list
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- text berjalan -->
      <div class="col-auto">
        <div class="q-pa-sm">
          Tulisan
        </div>
      </div>
    </div>

  </q-page>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
