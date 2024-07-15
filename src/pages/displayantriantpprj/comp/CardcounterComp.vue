<template>
  <div class="column full-width full-height relative-position items-center glasses q-pa-sm" style="overflow: hidden;">
    <div class="col-2 full-width q-pb-sm">
      <q-card class="fit bg-dark" style="border-radius: 15px; overflow: hidden;" >
      dsgsd
    </q-card>
    </div>
    <div v-for="(item, i) in items" :key="i" class="col-2 full-width q-pb-sm">
      <q-card class="fit bg-negative" style="border-radius: 15px; overflow: hidden;" >
        <div class="column full-height">
          <!-- <div class="col-auto bg-white q-pa-sm">
            <div class="text-right text-weight-bold" :style="`font-size:${app.txtH5}px`">KE LOKET</div>
          </div> -->
          <div class="col full-height full-width full-height">
            <div class="flex items-center full-width justify-between full-height">
              <div class="flex flex-1 text-white text-weight-bold q-px-md" :style="`font-size:${app.txt80}px`">{{item?.nomor ?? '---'}}</div>
              <div class="q-px-md bg-white text-weight-bold" :style="`font-size:${app.txt70}px`">LOKET {{ item?.kode }}</div>
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
// eslint-disable-next-line no-unused-vars
import { ref } from 'vue'

// eslint-disable-next-line no-unused-vars
const app = useAppStore()

// const idx = ref(1)

// const colors = ref([
//   'deep-orange',
//   'teal',
//   'orange',
//   'purple',
//   'indigo',
//   'brown',
//   'blue-grey',
//   'blue'
// ])
defineProps({
  items: {
    type: Array,
    default: () => []
  }
})

// function setNoAntrian (val) {
//   // console.log(val)
//   const panggilan = val?.panggilan
//   if (panggilan.length) {
//     return panggilan[0]?.noantrian
//   } else {
//     const arr = val?.jumlahkunjunganpoli
//     return arr?.length > 0
//       ? arr[0]?.noantrian
//       : '----'
//   }
// }

// function getJmlAntrian (val) {
//   const arr = val?.jumlahkunjunganpoli
//   return arr?.length ?? 0
// }

// function getDiterima (val) {
//   const arr = val?.jumlahkunjunganpoli
//   return arr?.length > 0
//     ? arr.filter(x => x.status === '1' || x.status === '2' || x.status === '3').length
//     : 0
// }

</script>

<style lang="scss" scoped>
.glasses {
  // box-shadow: 10px 10px 10px rgba(255, 255, 255, 0.3);
  border-radius: 15px;
  background: rgba(255,255,255,0.3);
  overflow: hidden;
  backdrop-filter: blur(15px);
}
</style>
