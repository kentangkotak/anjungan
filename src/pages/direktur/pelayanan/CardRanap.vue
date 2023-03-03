<template>
  <q-card class="my-card">
    <q-card-section>
      <div class="row items-center justify-between">
        <div>{{ txtJumlah }} tahun {{tahun}}</div>
        <div class="text-right text-weight-bold text-h5">{{formatMoney(jumlahRanapTahun)}}</div>
      </div>
      <div>
        <div ref="line" :style="`width:100%; height: ${height}px;`"></div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import * as echarts from 'echarts'
import { ref, onMounted, computed } from 'vue'
import { formatMoney } from 'src/utility/formatter'

import { colors } from 'quasar'
const { getPaletteColor } = colors

const props = defineProps({
  jumlahRanapTahun: {
    type: Number,
    default: 0
  },
  height: {
    type: Number,
    default: 197
  },
  dateList: {
    type: Array,
    default: () => []
  },
  valueList: {
    type: Array,
    default: () => []
  },
  txtJumlah: {
    type: String,
    default: 'Jumlah'
  },
  tahun: {
    Type: Number,
    default: 2023
  },
  primary: {
    type: String,
    default: 'primary'
  },
  secondary: {
    type: String,
    default: 'secondary'
  },
  label: {
    type: String,
    default: 'Ranap'
  }
})

const values = computed(() => {
  const data = props.valueList
  if (data.length > 0) {
    return data.map(x => x.jumlah)
  }

  return []
})
const dates = computed(() => {
  // const data = props.valueList
  // if (data.length > 0) {
  //   return data.map(x => x.month)
  // }

  return ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des']
})

const option = ref({
  tooltip: {
    trigger: 'axis',
    position: function (pt) {
      return [pt[0], '10%']
    }
  },
  // toolbox: {
  //   feature: {
  //     dataZoom: {
  //       yAxisIndex: 'none'
  //     },
  //     restore: {},
  //     saveAsImage: {}
  //   }
  // },
  grid: {
    left: '0%',
    right: '2%',
    bottom: '1%',
    top: '6%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: dates.value
  },
  yAxis: {
    type: 'value',
    boundaryGap: [0, '50%'],
    axisLabel: {
      formatter: (value, index) => {
        return formatMoney(value)
      }
    }
  },
  // dataZoom: [
  //   {
  //     type: 'inside',
  //     start: 0,
  //     end: 10
  //   },
  //   {
  //     start: 0,
  //     end: 10
  //   }
  // ],
  series: [
    {
      name: props.label,
      type: 'line',
      symbol: 'circle',
      // sampling: 'lttb',
      itemStyle: {
        color: getPaletteColor(props.primary)
      },
      lineStyle: {
        color: getPaletteColor(props.primary),
        width: 3
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: getPaletteColor(props.primary)
          },
          {
            offset: 1,
            color: getPaletteColor(props.secondary)
          }
        ])
      },
      markPoint: {
        data: [
          { type: 'max', name: 'Max' },
          { type: 'min', name: 'Min' }
        ]
      },
      data: values.value
    }
  ]
})

const line = ref(null)

onMounted(() => {
  const echart = echarts.init(line.value)
  echart.setOption(option.value)
})

</script>
