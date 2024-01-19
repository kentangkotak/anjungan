<template>
  <div class="row full-width full-height relative-position flex-center items-center" style="overflow: hidden;">
    <div v-for="(item, i) in items" :key="i"  class="col-auto q-pr-md " style="width:30%; height: 50%; overflow: hidden;">
      <q-card dark class="full-width" style="height: calc(100% - 20px);" >
        <div class="column full-height">
          <div :class="`col-auto bg-${colors[i]} text-white q-pa-md`">
            <div class="text-center text-weight-bold" :style="`font-size: ${app.txtH5}px;`">{{item?.panggil_antrian}}</div>
            <!-- <div class="text-center" :style="`font-size: ${app.txtLg}px; margin-top:-5px;`">{{item?.rs4}}</div> -->
          </div>
          <div class="col full-height column flex-center bg-grey-3 text-dark">
            <div class="text-center" :style="`font-size: ${app.txtLg}px;`" style="margin-bottom: -10px;">Nomor Antrian</div>
            <div class="text-center text-weight-bold" :style="`font-size: ${app.txt50}px; margin-top:-5px`">{{ setNoAntrian(item) }}</div>

          </div>
          <div :class="`col-auto bg-${colors[i]} text-white text-center`">
            <div class="row justify-between q-pa-md">
              <div class="text-center">
                <div class=" text-weight-bold" :style="`font-size: ${app.txtH5}px;`">1</div>
                <div :style="`font-size: ${app.txtSm}px;`">Sisa Antrian</div>
              </div>
              <div class="text-center">
                <div class=" text-weight-bold" :style="`font-size: ${app.txtH5}px;`">{{ getJmlAntrian(item) }}</div>
                <div :style="`font-size: ${app.txtSm}px;`">Jumlah Antrian</div>
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
  const arr = val?.jumlahkunjunganpoli
  return arr?.length > 0
    ? arr[0]?.antrian_ambil[0]?.nomor
    : '----'
}

function getJmlAntrian (val) {
  const arr = val?.jumlahkunjunganpoli
  return arr?.length ?? 0
}

</script>

<style lang="scss" scoped>
</style>
