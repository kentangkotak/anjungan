<template>
  <q-page class="fullscreen">
    <div :class="`bg_${store.classes}`">
      <div class="absolute-top awan">
        <Vue3Lottie
            ref="anim"
            :animationData="fileLink"
            :playOnHover="false"
            :autoPlay="true"
          />
      </div>
      <div class="_center">
        <div class="tmpt_logo absolute-top full-width">
          <div class="row items-center">
            <div>
              <q-avatar
                size="80px"
                 class="shadow-8"
              >
                <img src="~assets/images/logo-rsud.png">
              </q-avatar>
            </div>
            <q-space></q-space>
            <div>
              <q-avatar
                size="80px"
                class="shadow-8"
              >
                <img src="~assets/images/bpjs.png">
              </q-avatar>
            </div>
          </div>

        </div>

        <q-tab-panels
          v-model="store.classes"
          animated
          class="transparent"
          transition-next="slide-up"
          transition-prev="silde-down"
          :transition-duration="500"
          style="height: 100%; z-index: 1000;"
          >
            <q-tab-panel :name="0">
              <div class="_txt column flex-center items-center full-height">
                <div class="text-h3 text-weight-bold text-primary">ANJUNGAN MANDIRI</div>
                <div class="text-h4 text-weight-normal text-primary">UOBK RSUD MOHAMAD SALEH</div>
                <div class="q-mt-lg">
                  <q-btn
                    icon="send"
                    color="primary" size="lg" padding="md" label="Mulai"
                    @click="store.changeClasses()"
                    />
                </div>
              </div>
            </q-tab-panel>
            <q-tab-panel :name="1">
              <div class="_txt column flex-center items-center full-height">
                <div class="flex justify-center items-center">
                  <div style="width:250px" class="q-ma-md">
                    <q-card class="my-card bg-dark text-white shadow-24 cursor-pointer" @click="goTo('/pasien-umum')"  >
                        <div class="column flex-center items-center" style="min-height: 250px;">
                          <q-avatar size="100px">
                            <img src="~assets/images/logo-rsud.png" />
                          </q-avatar>
                          <div class="q-mt-lg text-h5">
                            PASIEN UMUM
                          </div>
                        </div>
                    </q-card>
                  </div>
                  <div style="width:250px" class="q-ma-md">
                    <q-card class="my-card bg-primary text-white shadow-24 cursor-pointer"  @click="goTo('/pasien-bpjs')" >
                        <div class="column flex-center items-center" style="min-height: 250px;">
                          <q-avatar size="100px" color="white">
                            <img src="~assets/images/bpjs.png" />
                          </q-avatar>
                          <div class="q-mt-lg text-h5">
                            PASIEN BPJS
                          </div>
                        </div>
                    </q-card>
                  </div>
                </div>
              </div>
            </q-tab-panel>
          <q-tab-panel name="movies" icon="movie" label="Movies" />
        </q-tab-panels>

      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useAnjunganStore } from 'src/stores/anjungan/index'
import { useRouter } from 'vue-router'
import { Vue3Lottie } from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import fileLink from 'src/assets/lottie/102873-clouds-loop.json'

const store = useAnjunganStore()

const router = useRouter()

function goTo (val) {
  router.push(val)
}

</script>

<style lang="scss" scoped>

.bg_0{
  width: 100vw;
  height: 100%;
  background: linear-gradient(0deg,
    #FFFFDB 21.14%,
    #FBFEDB 33.88%,
    #EDFCDD 44.73%,
    #D8F7DF 56.66%,
    #B9F2E1 69.68%,
    #A7EEE3 84.05%,
    #76C7C2 100%);
    // awan
    .awan {
      top:-200px;
      z-index: 0;
      opacity: .5;
    }
  &::before {
    content: '';
    background: url('src/assets/images/awan.png');
    position: absolute;
    width: 125%;
    height: 270.38px;
    left: -107px;
    top: 15px;
    opacity: .5;
    transition: all 1s ease;
  }

  // pohon
  &::after {
    content: '';
    background: url('src/assets/images/pohon.png');
    position: absolute;
    left: 85%;
    right: -28.33%;
    top: -1.08%;
    bottom: -4.58%;
    opacity: 0.8;
    z-index: 1;
    transition: all 1s ease;
  }
  ._center{
    width: 100%;
    height: 100%;
    // rsud
    &::before{
      content: '';
      background: url('src/assets/images/RSUD.png');
      position: absolute;
      width: 140%;
      height: 100%;
      background-position: bottom;
      background-size: cover;
      transform: translateY(40%);
      transition: all 1s ease;
      // bottom: 20%;
    }
    // matahari
    &::after{
      content: '';
      background: url('src/assets/images/matahari.png');
      position: absolute;
      width: 210px;
      height: 219px;
      transform: scale(.5,.5);
      top: 40%;
      right: 10%;
      transition: all 1s ease;
    }
  }

}

.tmpt_logo {
  padding: 5%;
  z-index: 10;
}

.bg_1{
  width: 100vw;
  height: 100%;
  background: linear-gradient(0deg,
    #FFFFDB 21.14%,
    #FBFEDB 33.88%,
    #EDFCDD 44.73%,
    #D8F7DF 56.66%,
    #B9F2E1 69.68%,
    #A7EEE3 84.05%,
    #76C7C2 100%);

    // awan kartun
    .awan {
      top:-200px;
      z-index: 0;
      opacity: .5;
    }
  &::before {
    content: '';
    background: url('src/assets/images/awan.png');
    position: absolute;
    width: 125%;
    height: 270.38px;
    left: -80px;
    top: 5px;
    opacity: .5;
    transition: all 1s ease;
  }

  // pohon
  &::after {
    content: '';
    background: url('src/assets/images/pohon.png');
    position: absolute;
    left: 85%;
    right: -28.33%;
    top: 0;
    bottom: 4.58%;
    transform: translate(250px, 100px);
    // transform: translateY(100px);
    opacity: 0;
    transition: all 1s ease;
  }
  ._center{
    // background-color: #76C7C2;
    width: 100%;
    height: 100%;
    // rsud
    &::before{
      content: '';
      background: url('src/assets/images/RSUD.png');
      position: absolute;
      width: 100%;
      height: 100%;
      background-position: bottom;
      background-size: cover;
      opacity: 0.9;
      transform: translateY(8%);
      transition: all 1s ease;
    }
    // matahari
    &::after{
      content: '';
      background: url('src/assets/images/matahari.png');
      position: absolute;
      width: 210px;
      height: 219px;
      transform: scale(.5,.5);
      top: 30%;
      right: 15%;
      opacity: .8;
      transition: all 1s ease;
    }
  }

}
</style>
