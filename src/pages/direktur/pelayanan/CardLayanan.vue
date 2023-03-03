<template>
  <q-card class="my-card __anjay">
    <q-card-section >
      <div class="absolute-bottom bayang">
        <q-icon :name="icon" size="150px" />
      </div>
      <div class="q-mb-md" >
        <div class="f-14 ">{{deskripsi}}</div>
      </div>
      <div class="row items-center justify-between q-pb-sm">
        <q-avatar round size="60px" font-size="40px" :color="txtColor" :text-color="color" :icon="icon" />
        <div class="text-right">
          <div class="text-h3 text-weight-bold">
            {{jumlah}}
          </div>
          <!-- <div >
            <div class="f-14 ">Jumlah Tempat Tidur</div>
          </div> -->
        </div>
      </div>
    </q-card-section>
    <!-- <q-card-actions class="bg-white q-px-md"> -->
      <div class="bg-white">
      <q-list padding>
        <q-item >
          <q-item-section avatar>
            <q-avatar rounded size="40px" font-size="34px" color="grey-4" text-color="negative" :icon="icon1" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="f-18 text-negative">{{txt1}}</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-item-label class="text-weight-bold f-20 text-negative">{{jumlahTerisi}}</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator inset />
        <q-item >
          <q-item-section avatar>
            <q-avatar rounded size="40px" font-size="34px" color="grey-4" text-color="primary" :icon="icon2" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="f-18 text-primary">{{txt2}}</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-item-label class="text-weight-bold f-20 text-primary">{{jumlahTersedia}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      </div>
    <!-- </q-card-actions> -->
  </q-card>
</template>

<script setup>
import { colors } from 'quasar'
const { getPaletteColor } = colors

defineProps({
  jumlah: {
    type: Number,
    default: 0
  },
  jumlahTerisi: {
    type: Number,
    default: 0
  },
  jumlahTersedia: {
    type: Number,
    default: 0
  },
  color: {
    type: String,
    default: 'dark'
  },
  icon: {
    type: String,
    default: 'dashboard'
  },
  txtColor: {
    type: String,
    default: 'grey-4'
  },
  deskripsi: {
    type: String,
    default: 'Jumlah'
  },
  txt1: {
    type: String,
    default: 'Terisi'
  },
  icon1: {
    type: String,
    default: 'local_hotel'
  },
  txt2: {
    type: String,
    default: 'Tersedia'
  },
  icon2: {
    type: String,
    default: 'bed'
  }

})
</script>

<style lang="scss" scoped>
$bg: v-bind(getPaletteColor(color));
$txt: v-bind(getPaletteColor(txtColor));
.__anjay {
  background-color: $bg;
  color: $txt;
  .bayang {
    opacity: .05;
  }
}
</style>
