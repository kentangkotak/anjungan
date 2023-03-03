<template>
  <div>
    <div ref="text" :style="`width:100%; height: ${props.height}px;`"></div>
  </div>
</template>

<script setup>

import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'
import { colors } from 'quasar'
// import dark from 'src/assets/themecharts/dark2.json'
// import { useAppStore } from 'src/stores/app'
const text = ref(null)
const { getPaletteColor } = colors

const props = defineProps({
  height: {
    type: Number,
    default: 150
  },
  value: {
    type: Number,
    default: 0
  },
  txt: {
    type: String,
    default: 'UOBK RSUD MOH SALEH'
  },
  color: {
    type: String,
    default: 'white'
  }
})

const option = ref(
  {
    graphic: {
      elements: [
        {
          type: 'text',
          left: 'center',
          top: 'center',
          style: {
            text: props.txt,
            fontSize: 60,
            fontWeight: 'bold',
            lineDash: [0, 200],
            lineDashOffset: 0,
            fill: 'transparent',
            stroke: '#000',
            lineWidth: 2
          },
          keyframeAnimation: {
            duration: 3000,
            loop: false,
            keyframes: [
              {
                percent: 0.8,
                style: {
                  fill: 'transparent',
                  lineDashOffset: 200,
                  lineDash: [200, 0]
                }
              },
              {
              // Stop for a while.
                percent: 0.8,
                style: {
                  fill: 'transparent'
                }
              },
              {
                percent: 1,
                style: {
                  fill: getPaletteColor(props.color)
                }
              }
            ]
          }
        }
      ]
    }
  }
)

onMounted(() => {
  // echarts.registerTheme('dark', dark)
  const echart = echarts.init(text.value)

  echart.setOption(option.value)
})
</script>
