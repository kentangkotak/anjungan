<template>
  <q-card class="my-card cc-card">
    <q-card-section>
      <div class="row justify-between">
        <div>{{ title }}</div>
        <q-img
          :src="getImage()"
          spinner-color="white"
          style="height: 40px; width: 40px"
        />
      </div>

    </q-card-section>
    <div class="absolute-bottom q-pa-md">
      <!-- <div class="text-caption" style="margin-bottom: -5px;">Jumlah</div> -->
      <div class="text-h5 text-weight-bold text-center">{{ formatRupiah(total) }}</div>
      <div class="row items-center justify-between q-mt-lg">
        <div>
          <div class="text-caption" style="margin-bottom: -10px;">Periode</div>
          <div class="text-overline">{{ periode }}</div>
        </div>
        <div class="text-right">
          <div class="img__master-card"></div>
        </div>
      </div>
    </div>
  </q-card>
</template>

<script setup>
import { colors } from 'quasar'
import { formatRupiah } from 'src/utility/formatter.js'

const { getPaletteColor } = colors

defineProps({
  color1: {
    type: String,
    default: 'dark'
  },
  color2: {
    type: String,
    default: 'grey-9'
  },
  txtColor: {
    type: String,
    default: 'grey-2'
  },
  total: {
    type: Number,
    default: 100000000000
  },
  periode: {
    type: String,
    default: 'Februari 2023'
  },
  title: {
    type: String,
    default: 'Kas Bendahara Penerimaan'
  }

})

function getImage () {
  return new URL('../../../assets/images/logo-rsud.png', import.meta.url).href
}
</script>

<style lang="scss" scoped>
  $c1 : v-bind(getPaletteColor(color1));
  $c2 : v-bind(getPaletteColor(color2));
  $txt : v-bind(getPaletteColor(txtColor));

.cc-card {
  // background: rgb(24,24,24);
  // background: linear-gradient(85deg, rgba(24,24,24,1) 0%, rgba(82,82,82,1) 100%);

  background: $c1;
  background: linear-gradient(80deg, $c1 0%, $c2 60%);
  color: $txt;
  height: 200px;
  &::before {
    content: "";
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    overflow: hidden;
    background: $dark;
    background: linear-gradient(5deg, $c1 0%, $c2 100%);
    opacity: .6;
    transform: translate(-50%, -50%);
  }
  &::after {
    content: "";
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    background-color:  $c1;
    // background: linear-gradient(5deg, rgba(24,24,24,1) 0%, rgba(82,82,82,1) 100%);
    opacity: .2;
    right: -80px;
    bottom: -70px;
  }
}

.img__master-card {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: $orange;
  &::before {
    content: "";
    position: absolute;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: $negative;
    right: 30px;
    opacity: .8;
  }
}
</style>
