<template>
  <!-- <q-scroll-area :style="`height:${height - 30}px`" > -->
    <div class="__my-panel">
      <!-- <q-scroll-area :style="`height:${height - 30}px`" > -->
        <panel-header />
        <div class="row q-col-gutter-lg">
          <div class="col-md-2 col-lg-2 col-xl-2 col-sm-12 col-xs-12">

            <q-card flat class="my-card-dark2">
              <div class="text-right pa-lg">
                <div class="txt-xl">110 M</div>
                <div class="txt-md text-grey" style="margin-top:-5px">Target Pendapatan</div>
              </div>
              <div class="bg-bawah">
                <div class="bg-cool"></div>
                <div class="pa-lg txt">

                  <q-knob
                    readonly
                    v-model="percentRealisasiPendapatan"
                    show-value
                    :size="`${app.txt100}px`"
                    :thickness="0.30"
                    color="accent"
                    track-color="accent-4"
                    class="text-white "
                    >
                    {{ percentRealisasiBelanja }}%
                  </q-knob>
                  <div class="flex justify-end" style="margin-top: -15px;">
                    <div class="txt-h5 text-dark">90,345 M</div>
                    <div class="txt-md text-grey-2">Realiasasi Pendapatan</div>
                  </div>
                </div>
              </div>
            </q-card>

            <div class="q-pt-md">
              <q-card flat class="my-card-dark2">

              <div class="tempat-text">
                <div class="text-right pa-lg">
                <div class="txt-xl">100 M</div>
                <div class="txt-md text-grey" style="margin-top: -5px;">Anggaran Belanja</div>
              </div>
              <div class="bg-atas">
                <div class="pa-lg txt">
                  <div class="flex flex-row items-center">
                    <div>
                    <q-knob
                        readonly
                        v-model="percentRealisasiBelanja"
                        show-value
                        :size="`${app.txt100}px`"
                        :thickness="0.22"
                        color="info"
                        track-color="lime-2"
                        class="text-white"
                    >
                    {{ percentRealisasiBelanja }}%
                    </q-knob>
                    </div>
                    <div class="flex flex-1 justify-end">
                      <div class="txt-lg text-grey-2">90,345 M</div>
                      <div class="txt-md text-grey">Realiasasi Belanja</div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              <div class="tempat-wave">
              </div>
              <div class="debt">
                <span class="clip-1"></span>
                <span class="clip-2"></span>
              </div>
            </q-card>
            </div>
          </div>

          <div class="col-md-8 col-lg-8 col-xl-8 col-sm-12 col-xs-12">
            <q-card flat class="my-card-dark">
              <app-chart-bar :height="450" />
            </q-card>
          </div>

          <div class="col-md-2 col-lg-2 col-xl-2 col-sm-12 col-xs-12">
            <div class="txt-lg text-weight-bold">Indicator Performance</div>

            <div
                class="row justify-center q-col-gutter-sm relative-position mt-lg"
              >
              <div class="col-4">
                <div class="text-center">
                  <div>Min</div>
                  <div>80</div>
                </div>
                <app-chart-svg
                  color1="primary"
                  strokeColor="primary"
                  color2="dark"
                  :height="30"
                  :strokeWidth="2"
                  :data-y="[10, 9, 7, 2, 7, 6, 10]"
                />
              </div>
              <div class="col-4">
                <div class="text-center">
                  <div>Avg</div>
                  <div>80</div>
                </div>
                <app-chart-svg
                  strokeColor="accent"
                  color1="accent"
                  color2="dark"
                  :height="30"
                  :strokeWidth="2"
                  :data-y="[9, 8, 7,5, 7, 5, 6]"
                />
              </div>
              <div class="col-4">
                <div class="text-center">
                  <div>Max</div>
                  <div>80</div>
                </div>
                <app-chart-svg
                  strokeColor="secondary"
                  color1="secondary"
                  color2="dark"
                  :height="30"
                  :strokeWidth="2"
                  :data-y="[2, 3, 4, 9, 4, 5, 6]"
                />
              </div>

            </div>

            <div
                class="row justify-center q-col-gutter-sm relative-position mt-lg"
              >
              <div class="col-4">
                <div class="text-center">
                  <div>Min</div>
                  <div>80</div>
                </div>
                <app-chart-svg
                  color1="primary"
                  strokeColor="primary"
                  color2="dark"
                  :height="30"
                  :strokeWidth="2"
                  :data-y="[10, 9, 7, 2, 7, 6, 10]"
                />
              </div>
              <div class="col-4">
                <div class="text-center">
                  <div>Avg</div>
                  <div>80</div>
                </div>
                <app-chart-svg
                  strokeColor="info"
                  color1="info"
                  color2="dark"
                  :height="30"
                  :strokeWidth="2"
                  :data-y="[9, 8, 7,5, 7, 5, 6]"
                />
              </div>
              <div class="col-4">
                <div class="text-center">
                  <div>Max</div>
                  <div>80</div>
                </div>
                <app-chart-svg
                  strokeColor="secondary"
                  color1="secondary"
                  color2="dark"
                  :height="30"
                  :strokeWidth="2"
                  :data-y="[2, 3, 4, 9, 4, 5, 6]"
                />
              </div>

            </div>

            <q-list class="mt-md">
              <div class="txt-lg" >Pendapatan Performance</div>
              <q-separator spaced />
                <div class="flex flex-col">
                  <div class="txt-h5 text-right">1.234 M</div>
                  <div class="txt-md flex flex-1 ellipsis-2-lines text-grey text-right">Rata-rata pendapatan perbulan</div>
                </div>
              <q-separator spaced />
              <div class="flex flex-col">
                  <div class="txt-h5 text-right">1.234 M</div>
                  <div class="txt-md flex flex-1 ellipsis-2-lines text-grey text-right">Rata-rata Belanja perbulan</div>
                </div>
              <q-separator spaced />
                <div class="flex flex-col">
                  <div class="txt-h5 text-right">1.234 M</div>
                  <div class="txt-md flex flex-1 ellipsis-2-lines text-grey text-right">Profit Rata-rata </div>
                </div>
              <q-separator spaced />
            </q-list>
          </div>

        </div>
    </div>
  <!-- </q-scroll-area> -->
</template>

<script setup>
import { useAppStore } from 'src/stores/app'
import { onMounted, ref } from 'vue'
import PanelHeader from './PanelHeader.vue'
// import { onMounted } from 'vue'
const app = useAppStore()

const percentRealisasiBelanja = ref(90)
const percentRealisasiPendapatan = ref(90)

// defineProps({
//   height: {
//     type: Number,
//     default: 400
//   }
// })

onMounted(() => {
  // const panel = document.getElementsByClassName('__my-panel')[0]
  // console.log('panelKeuangan', panel.clientHeight)
})

</script>

<style lang="scss" scoped>
.__my-panel {
  // background-color: $primary;
  width:100%;
  height:100%;
  display: flex;
  flex-direction:column;
}
.bg-bawah {
  // background-color: $primary;
  overflow: hidden;
  position: relative;
  margin-top: -15px;
  .txt {
    z-index: 1;
    position: relative;
  }

  &::before {
    content:'';
    position:absolute;
    width:108%;
    height:115%;
    left:0;
    top:0;
    background: linear-gradient(0deg, $dark 0%, $primary 100%);
    // left:0;
    // transition:all 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform: translateY(15px) translateX(-7px) rotate(15deg);
    // -webkit-clip-path: polygon(91.1% 56.8%, 96.7% 63.8%, 100% 77%, 100% 100%, 68% 100%, 32% 100%, 0% 100%, 0% 17.8%, 14.6% 3.5%);
    // clip-path: polygon(91.1% 56.8%, 96.7% 63.8%, 100% 77%, 100% 100%, 68% 100%, 32% 100%, 0% 100%, 0% 17.8%, 14.6% 3.5%);
    // border-radius: 10% 66% 25% 25% / 39% 80% 0% 0%;
    border-top-left-radius: 30%;
    border: 3px dotted $accent;
    // opacity: 0.5;
    z-index: 0;
  }
}

.bg-atas {
  margin-top: -20px;
}
.tempat-text {
  position: relative;
  z-index: 1;
}
.tempat-wave {
  position: absolute;
  width: 100%;
  height: 100%;
  top:40%;
}
.debt {
  position: absolute;
  top:0;
  // overflow: hidden;
  width: 100%;
  height: 100%;
  opacity: .1;
  z-index: 0;
  &::before {
    content:'';
    position:absolute;
    width:20%;
    height:20%;
    left:10%;
    z-index: 0;
    background-color: $accent;
    clip-path: polygon(30% 100%, 100% 0%, 30% 0%);
  }
  &::after {
  content:'';
  position:absolute;
  width:20%;
  height:20%;
  left:26%;
  top: 20%;
  z-index: 0;
  background-color: $grey-2;
  clip-path: polygon(30% 100%, 100% 0%, 30% 0%);
}
  span.clip-1 {
    &::before {
      content:'';
      position:absolute;
      width:30%;
      height:20%;
      left:16%;
      z-index: 0;
      background-color: $grey-9;
      clip-path: polygon(50% 0%, 100% 0%, 50% 100%, 0% 100%)
    }
    &::after {
      content:'';
      position:absolute;
      width:30%;
      height:20%;
      left:32%;
      z-index: 0;
      background-color: $secondary;
      clip-path: polygon(50% 0%, 100% 0%, 50% 100%, 0% 100%)
    }
  }
  span.clip-2 {
    z-index: 0;
    &::before {
      content:'';
      z-index: 0;
      position:absolute;
      width:30%;
      height:20%;
      left:64%;
      z-index: 0;
      background-color: $info;
      clip-path: polygon(50% 0%, 100% 0%, 50% 100%, 0% 100%)
    }
    &::after {
     content:'';
      z-index: 0;
      position:absolute;
      width:30%;
      height:20%;
      left:32%;
      top:20%;
      background-color: $info;
      clip-path: polygon(50% 0%, 100% 0%, 50% 100%, 0% 100%)
    }
  }
}
</style>
