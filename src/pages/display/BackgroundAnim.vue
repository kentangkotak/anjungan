<template>
  <div :class="`bg_${store.classes}`">
      <div class="absolute-top awan" >
        <Vue3Lottie
            ref="anim"
            :animationData="fileLink"
            :playOnHover="false"
            :autoPlay="true"
          />
      </div>
      <div class="_center">
        <div class="tmpt_logo full-width">
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
        <slot />

      </div>
    </div>
</template>

<script setup>
import { useAnjunganStore } from 'src/stores/anjungan/index'
import { useRouter } from 'vue-router'
import { Vue3Lottie } from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import fileLink from 'src/assets/lottie/102873-clouds-loop.json'
import { onMounted } from 'vue'

const store = useAnjunganStore()

const router = useRouter()
console.log(router)
// function goTo (val) {
//   router.push(val)
// }

onMounted(() => {
  setTimeout(() => {
    store.changeClasses()
  }, 1000)
})

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
  // &::before {
  //   content: '';
  //   background: url('src/assets/images/awan.png');
  //   position: absolute;
  //   width: 125%;
  //   height: 270.38px;
  //   left: -107px;
  //   top: 15px;
  //   opacity: .5;
  //   transition: all 1s ease;
  // }

  // // pohon
  // &::after {
  //   content: '';
  //   background: url('src/assets/images/pohon.png');
  //   position: absolute;
  //   left: 85%;
  //   right: -28.33%;
  //   top: -1.08%;
  //   bottom: -4.58%;
  //   opacity: 0.8;
  //   z-index: 1;
  //   transition: all 1s ease;
  // }
  ._center{
    width: 100%;
    height: 100%;
    // rsud
    // &::before{
    //   content: '';
    //   background: url('src/assets/images/RSUD.png');
    //   position: absolute;
    //   width: 140%;
    //   height: 100%;
    //   background-position: bottom;
    //   background-size: cover;
    //   transform: translateY(40%);
    //   transition: all 1s ease;
    //   // bottom: 20%;
    // }
    // // matahari
    // &::after{
    //   content: '';
    //   background: url('src/assets/images/matahari.png');
    //   position: absolute;
    //   width: 210px;
    //   height: 219px;
    //   transform: scale(.5,.5);
    //   top: 40%;
    //   right: 10%;
    //   transition: all 1s ease;
    // }
  }

}

.tmpt_logo {
  // padding-left: 2%;
  // padding-right: 2%;
  margin-top:10px;
  z-index: 10;
  background-color: rgba($primary,1);
  background: linear-gradient(85deg, $primary 0%, $secondary 80%);
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

    ._center{
    width: 100%;
    height: 100%;
    }
  // &::before {
  //   content: '';
  //   background: url('src/assets/images/awan.png');
  //   position: absolute;
  //   width: 125%;
  //   height: 270.38px;
  //   left: -80px;
  //   top: 5px;
  //   opacity: .5;
  //   transition: all 1s ease;
  // }

  // // pohon
  // &::after {
  //   content: '';
  //   background: url('src/assets/images/pohon.png');
  //   position: absolute;
  //   left: 85%;
  //   right: -28.33%;
  //   top: 0;
  //   bottom: 4.58%;
  //   transform: translate(250px, 100px);
  //   // transform: translateY(100px);
  //   opacity: 0;
  //   transition: all 1s ease;
  // }
  // ._center{
  //   // background-color: #76C7C2;
  //   width: 100%;
  //   height: 100%;
  //   // rsud
  //   &::before{
  //     content: '';
  //     background: url('src/assets/images/RSUD.png');
  //     position: absolute;
  //     width: 100%;
  //     height: 100%;
  //     background-position: bottom;
  //     background-size: cover;
  //     opacity: 0.9;
  //     transform: translateY(8%);
  //     transition: all 1s ease;
  //   }
  //   // matahari
  //   &::after{
  //     content: '';
  //     background: url('src/assets/images/matahari.png');
  //     position: absolute;
  //     width: 210px;
  //     height: 219px;
  //     transform: scale(.5,.5);
  //     top: 30%;
  //     right: 15%;
  //     opacity: .8;
  //     transition: all 1s ease;
  //   }
  // }

}
</style>
