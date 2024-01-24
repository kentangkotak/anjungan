<template>
  <div class="full-height full-width bg-transparent">
    <q-card class="full-width full-height glasses shadow-4">
      <q-card-section class="full-height" >
        <div class="row full-height">
          <div class="col-9 column full-height relative-position flex-center">
            <div class="absolute-top">
              <div class="text-weight-bold text-white txt-shadow" :style="`font-size:${app.txt50}px`">
                {{ hari }} <span class="text-weight-bold text-white txt-shadow" :style="`font-size:${app.txtLg}px; margin-top:-${app.txtSm}px;`">
                {{ tgl }}
              </span>
              </div>

              <div class="text-white txt-shadow" :style="`font-size:${app.txtLg}px; `">
                <!-- <span><q-icon name="place" size="xs"></q-icon></span>  -->
                <span :style="`font-size:${app.txtSm}px; `">KOTA PROBOLINGGO - JAWATIMUR - INDONESIA</span>
              </div>
              <div class="text-white txt-shadow" :style="`font-size:${app.txtLg}px;`">
                {{ display.cuaca ? display.cuaca?.current?.condition?.text : 'Berawan' }}
              </div>
            </div>

            <div>
              <!-- <IconWheater name="rainy" /> -->
              <img src='//cdn.weatherapi.com/weather/64x64/day/176.png' alt="Weather data by WeatherAPI.com" border="0" :style="`width: ${app.txt140}px;`"  >
            </div>

             <div class="text-weight-bold text-white txt-shadow" :style="`font-size:${app.txt50}px`">
                {{ display.cuaca ? display.cuaca?.current?.temp_c +  '°' : '32°'}}
              </div>
            <div class="absolute-bottom bg-dark q-pa-sm br-20 full-width">
                <div class="jam flex flex-center">
                  <JamDigital />
                </div>
              <!-- </div> -->
            </div>
          </div>
          <div class="col-3 q-pl-md full-height">
            <div v-if="display.cuaca?.forecast" class="column full-height">
              <!-- <template v-if="display.cuaca?.length"> -->
                <q-card dark flat v-for="(item, n) in forecast" :key="n" class="col full-height br-10 q-mt-sm" :class="n===0?'bg-grey-2 text-dark':''">
                  <div class="column full-height flex-center">
                    <!-- <div :style="`font-size:${app.txtMd}px`">icon</div> -->
                    <!-- <q-icon name="cloud" size="md" /> -->
                    <img :src="`${item?.day?.condition?.icon}`" alt="Weather data by WeatherAPI.com" border="0" :style="`width: ${app.txt48}px;`" >
                    <div :style="`font-size:${app.txtSm}px; margin-top:${app.txtSm}px; margin-bottom:${app.txtSm}px`">{{getHari(item?.date)}}</div>
                    <div class="text-weight-bold" :style="`font-size:${app.txtLg}px`">{{item?.day?.avgtemp_c}}°</div>
                  </div>
                </q-card>
              <!-- </template> -->

            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { date } from 'quasar'
import JamDigital from './weathercomp/JamDigital.vue'
// import IconWheater from './weathercomp/IconWheather.vue'
import { useAppStore } from 'src/stores/app'
import { useDisplayStore } from 'src/stores/display'
import { computed, onMounted, ref } from 'vue'

const app = useAppStore()
const display = useDisplayStore()
const options = {
  // weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}
const tgl = ref(new Date().toLocaleDateString('id', options))
const hari = ref(new Date().toLocaleDateString('id', { weekday: 'long' }))

const forecast = computed(() => display?.cuaca?.forecast?.forecastday)

onMounted(() => {
  // console.log('asdasd', display.cuaca)
})

function getHari (tgl) {
  const dt = date.formatDate(tgl, 'YYYY-MM-DD HH:mm:ss')
  // console.log('tgl', new Date(dt).toLocaleDateString('id', { weekday: 'long' }))
  return new Date(dt).toLocaleDateString('id', { weekday: 'long' })
}
</script>

<style lang="scss" scoped>
.glasses {
  // box-shadow: 10px 10px 10px rgba(255, 255, 255, 0.5);
  border-radius: 15px;
  background: rgba(255,255,255,0.1);
  overflow: hidden;
  backdrop-filter: blur(15px);
}

.txt-shadow{
  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
}

.br-10{
  border-radius: 10px;
}
.br-20{
  border-radius: 20px;
}
</style>
