<template>
  <div class="flex flex-row-reverse">
    <div v-for="(item, i) in yearIntervals()" :key="i" class="ml-lg">
      <q-btn flat dense unelevated :class="item === year?'menu-dark-active':'menu-dark'"
        @click="changeYear(item)"
      >
        <div class="txt-lg pa-xs">{{ item }}</div>
      </q-btn>
    </div>
  </div>
</template>

<script setup>
import useDate from 'src/utility/useDate.js'
import { ref } from 'vue'

const { currentYear, yearIntervals } = useDate()

const emits = defineEmits(['onClickYear'])

const year = ref(currentYear())

function changeYear (val) {
  year.value = val
  emits('onClickYear', val)
}
</script>
