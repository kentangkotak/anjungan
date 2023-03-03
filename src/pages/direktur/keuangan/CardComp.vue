<template>
  <q-card flat bordered class="my">

    <q-card-section :class="`bg-${color} text-${titleColor}`">
      <div class="absolute-bottom bayang">
        <q-icon :name="titleIcon" color="white" size="350px" />
      </div>
      <div class="absolute-top bayang">
        <q-icon :name="titleIcon" color="white" size="100px" />
      </div>
      <div class="row items-center">
        <q-avatar rounded size="34px" font-size="18px" :color="boxIconColor" :text-color="titleIconColor" :icon="titleIcon" />
        <div class="q-ml-md ">
          <div class="text-weight-bold">{{title}}</div>
          <div :class="`text-${subtitleColor} f-12`"> tahun {{tahun}}</div>
        </div>
      </div>
      <div class="text-center">
        <app-gauge :key="percent" :value="isNaN(percent)?0:percent" :height="150" :name="title" :color="boxIconColor" :title-color="boxIconColor" />
        <div :class="`text-${subtitleColor} f-12`"> {{ percent }}% Complete</div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>

defineProps({
  percent: {
    type: Number,
    default: 0
  },
  color: {
    type: String,
    default: 'dark'
  },
  target: {
    type: Number,
    default: 1000000000
  },
  tahun: {
    type: String,
    default: '2023'
  },
  title: {
    type: String,
    default: 'Pendapatan'
  },
  titleColor: {
    type: String,
    default: 'white'
  },
  subtitleColor: {
    type: String,
    default: 'grey'
  },
  titleIcon: {
    type: String,
    default: 'bar_chart'
  },
  titleIconColor: {
    type: String,
    default: 'white'
  },
  boxIconColor: {
    type: String,
    default: 'secondary'
  },
  targetName: {
    type: String,
    default: 'Target Pendapatan'
  },
  realisasiName: {
    type: String,
    default: 'Realisasi Pendapatan'
  },
  realisasi: {
    type: Number,
    default: 1000000000
  }

})
</script>

<style lang="scss" scoped>
.my {
  overflow: hidden;
  border-radius: 10px;
  .bayang{
    opacity: .05;
  }
}
</style>
