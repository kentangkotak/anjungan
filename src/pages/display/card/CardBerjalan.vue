<template>
  <div>
    <Vue3Marquee>
      <div class="" style="overflow: hidden;">
        <div class="row" v-if="items.length >= 1">
            <q-card class="carding q-mr-md" v-for="(row, i) in items" :key="row" :style="`width: ${app.txt100*3}px;`">
              <div :class="`bg-${colors[i]} text-white q-pa-sm`">
                <div class="text-center text-weight-bold" :style="`font-size: ${app.txtH5}px;`">
                  {{row.display_id === 'A'? 'UNIT': 'UNIT'}} {{ row.kode_layanan }}
                </div>
                <div class="text-center" :style="`font-size: ${app.txtLg}px; margin-top:-5px;`">{{row.loket}} </div>
              </div>

              <q-separator />
              <q-card-section class="">
                <div  class="text-center" :style="`font-size: ${app.txtLg}px; margin-top:-5px;`">Nomor Antrian</div>
                <div class="text-center" :style="`font-size: ${app.txt48}px; margin-top:-5px;`">
                  {{ row?.kode_layanan }}0{{row?.kuotajkn}}
                </div>
                <!-- <div v-else class="text-center" :style="`font-size: ${app.txt48}px; margin-top:-5px;`">
                  {{ cekLayanan(row) }}
                </div> -->
              </q-card-section>
              <q-separator />
              <q-card-actions align="center" class="bg-negative text-white">
                <div> ----- </div>
              </q-card-actions>
            </q-card>
        </div>
        <div v-else class="row items-center q-pa-lg" style="height: 100px;">
          <span
              v-for="(word, index) in noPreview"
              :key="index"
              class="word-style text-weight-bold"
              :class="{ word: true, odd: index % 2 === 0, even: index % 2 === 1 }"
            >
              {{ word }}
            </span>
        </div>
      </div>
    </Vue3Marquee>
  </div>
</template>

<script setup>
import { useAppStore } from 'src/stores/app'
import { ref } from 'vue'

const app = useAppStore()
const colors = ref([
  'deep-orange',
  'teal',
  'indigo',
  'purple',
  'orange',
  'brown',
  'blue-grey',
  'blue',
  'red',
  'grey'
])

const noPreview = ref(
  [
    'NO PREVIEW QUEQUE AVAILABLE'
  ]
)
const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
})

// function cekLayanan (row) {
//   const layanan = row.layanan
//   if (!layanan) {
//     return false
//   }
//   const bookings = layanan.bookings
//   if (bookings.length > 0) {
//     return bookings[0].nomorantrean
//   }
//   return false
// }

console.log('items', props.items)
</script>

<style scoped lang="scss">

.carding {
  // width:300px;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.word {
  font-size: 20px;
  margin: 0 10px;
}
.odd {
  color: rgb(68, 77, 84);
}
.even {
  color: rgb(137, 147, 156);
}
</style>
