<template>
  <div class="row full-width full-height relative-position flex-center items-center" style="overflow: hidden;">
    <div v-for="(item, i) in items" :key="i"  class="col-auto q-pr-md " style="width:30%; height: 50%; overflow: hidden;">
      <q-card dark class="glasses full-width" style="height: calc(100% - 20px);" >
        <div class="column full-height full-width flex-center">
          <div class="col-auto full-width" :class="`bg-${colors[i]} text-white q-pa-md`">
            <div class="text-center text-weight-bold" :style="`font-size: ${app.txtH5}px;`">{{item?.panggil_antrian}}</div>
            <!-- <div class="text-center" :style="`font-size: ${app.txtLg}px; margin-top:-5px;`">{{item?.rs4}}</div> -->
          </div>
          <div class="col full-height full-width bg-grey-3 text-dark">
            <div class="column flex-center full-height">
              <div class="" :style="`font-size: ${app.txtLg}px;`" >Nomor Antrian</div>
              <div class="text-weight-bold" :style="`font-size: ${app.txt70}px; margin-top:-10px`">{{ setNoAntrian(item) }}</div>
            </div>

          </div>
          <div class="col-auto full-width " :class="`bg-${colors[i]} text-white`">
            <div class="row justify-between">
              <div class="col column flex-center text-center bg-green q-px-md q-py-sm">
                <div class=" text-weight-bold" :style="`font-size: ${app.txt28}px;`">{{ getJmlAntrian(item) - getDiterima(item) }}</div>
                <div :style="`font-size: ${app.txtMd}px;`">Sisa Antrian</div>
              </div>
              <div class="col column flex-center text-center bg-brown q-px-md q-py-sm">
                <div class=" text-weight-bold" :style="`font-size: ${app.txt28}px;`">{{ getJmlAntrian(item) }}</div>
                <div :style="`font-size: ${app.txtMd}px;`">Jumlah Antrian</div>
              </div>
            </div>
          </div>
        </div>
      </q-card>
    </div>

  </div>
  <!--  -->
</template>

<script setup>
import { useAppStore } from 'src/stores/app'
import { ref } from 'vue'

const app = useAppStore()

// const idx = ref(1)

const colors = ref([
  'deep-orange',
  'teal',
  'orange',
  'purple',
  'indigo',
  'brown',
  'blue-grey',
  'blue'
])
defineProps({
  items: {
    type: Array,
    default: () => []
  }
})

function setNoAntrian (val) {
  // console.log(val)
  const panggilan = val?.panggilan
  if (panggilan.length) {
    return panggilan[0]?.noantrian
  } else {
    const arr = val?.jumlahkunjunganpoli
    return arr?.length > 0
      ? arr[0]?.noantrian
      : '----'
  }
}

function getJmlAntrian (val) {
  const arr = val?.jumlahkunjunganpoli
  return arr?.length ?? 0
}

function getDiterima (val) {
  const arr = val?.jumlahkunjunganpoli
  return arr?.length > 0
    ? arr.filter(x => x.status === '1' || x.status === '2' || x.status === '3').length
    : 0
}

</script>

<style lang="scss" scoped>
.glasses {
  // box-shadow: 10px 10px 10px rgba(255, 255, 255, 0.5);
  // border-radius: 15px;
  // background: rgba(255,255,255,0.1);
  overflow: hidden;
  backdrop-filter: blur(5px);
}
</style>
