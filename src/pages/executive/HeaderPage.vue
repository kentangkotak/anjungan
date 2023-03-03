<template>
  <div class="">
    <!-- <div class="flex flex-row"> -->
      <!-- <div class="flex q-pa-md text-center w-140 ">
        <q-img :src="srcImg" :width="`${width}px`"></q-img>
      </div> -->
      <div class="flex flex-1">
        <div class="row items-center grow">
          <div class="pl-md" >
            <div class="txt-h5 text-weight-bold relative-position flex flex-row">
              Dashboard Executive
              <div class=" ml-sm txt-md text-weight-light">
                @ {{currentYear}}
              </div>
            </div>
            <div class="txt-lg text-grey">Dashboard Khusus untuk direktur UOBK RSUD Mohamad Saleh</div>
          </div>
          <q-space />
          <div class="flex flex-row-reverse">
            <div v-for="(item, i) in yearArray" :key="i" class="ml-lg">
              <q-btn flat dense unelevated :class="item === currentYear?'menu-dark-active':'menu-dark'"
                @click="currentYear = item"
              >
                <div class="txt-lg pa-xs">{{ item }}</div>
              </q-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  <!-- </div> -->
</template>

<script setup>
import { onMounted, ref } from 'vue'

defineProps({
  width: {
    type: Number,
    default: 50
  }
})
const currentYear = ref(null)
const yearArray = ref([])

onMounted(() => {
  const date = new Date()
  const year = date.getFullYear().toString()
  currentYear.value = year

  const years = []
  for (let i = 0; i < 5; i++) {
    years.push(subtractYears(i))
  }
  console.log('mounted header', years)
  yearArray.value = years
})

function subtractYears (num) {
  const date = new Date()
  date.setFullYear(date.getFullYear() - num)
  return date.getFullYear().toString()
}
</script>
