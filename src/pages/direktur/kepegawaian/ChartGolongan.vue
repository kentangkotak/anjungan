<template>
  <div class="q-pt-md q-px-md">
    <div ref="bar" :style="`width:100%; height: ${props.height}px;`"></div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'
// import dark from 'src/assets/themecharts/dark2.json'
// import { useAppStore } from 'src/stores/app'
const bar = ref(null)

// const app = useAppStore()

const props = defineProps({
  height: {
    type: Number,
    default: 300
  },
  dataAxis: {
    type: Array,
    default: () => ['点', '击', '柱', '子', '或', '者', '两', '指', '在', '触', '屏', '上', '滑', '动', '能', '够', '自', '动', '缩', '放']
  },
  data: {
    type: Array,
    default: () => [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220]
  },
  dataShadow: {
    type: Array,
    default: () => []
  },
  yMax: {
    type: Number,
    default: 300
  }
})

// const labelOption = {
//   show: true,
//   position: 'bottom',
//   distance: 0,
//   align: 'left',
//   verticalAlign: 'midle',
//   rotate: 90,
//   formatter: '{b}  ({c})',
//   fontSize: 14,
//   rich: {
//     name: {}
//   }
// }

const options = ref(
  {
    title: {
      show: false,
      padding: 0,
      itemGap: 0
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '5%',
      right: '3%',
      top: '2%',
      bottom: '10%'
    },
    xAxis: {
      data: props.dataAxis,
      axisLabel: {
        inside: true,
        color: 'black',
        interval: 0,
        rotate: 90,
        formatter: '{value}'
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      nameTextStyle: {
        fontWeight: 'bold'
      },
      z: 10
    },
    yAxis: {
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#999'
      }
    },
    dataZoom: [
      {
        type: 'inside'
      }
    ],
    series: [
      {
        type: 'bar',
        showBackground: true,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#83bff6' },
            { offset: 0.5, color: '#188df0' },
            { offset: 1, color: '#188df0' }
          ])
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#2378f7' },
              { offset: 0.7, color: '#2378f7' },
              { offset: 1, color: '#83bff6' }
            ])
          }
        },
        data: props.data
      }
    ]
  }
)

onMounted(() => {
  // echarts.registerTheme('dark', dark)
  const echart = echarts.init(bar.value)

  echart.setOption(options.value)
})
</script>
