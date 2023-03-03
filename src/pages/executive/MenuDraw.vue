<template>
  <div class="">
    <div class="flex flex-center q-px-md q-py-lg text-center">
      <q-img :src="srcImg" :width="`${app.txt80}px`"></q-img>
    </div>
    <div v-for="(item, i) in  menus" :key="i"
        @click="clickedSelected(item)"
    >
      <div class="text-center">
        <div class="tempat__icon q-pa-md">
          <div :class="item.nama === selected?'active':'not-active'">
            <q-btn flat padding="md" unelevated :class="item.nama === selected?'menu-dark-active':'menu-dark'" :icon="item.icon" :size="`${width}px`">
              <q-tooltip class="bg-primary" :offset="[0, 5]" style="font-size:9px;" >{{ item.nama }}</q-tooltip>
            </q-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { useAppStore } from 'src/stores/app'
import { ref, computed } from 'vue'
defineProps({
  width: {
    type: Number,
    default: 50
  }
})

const srcImg = computed(() => new URL('../../../src/assets/images/logo-rsud.png', import.meta.url).href)
const app = useAppStore()

const emits = defineEmits(['onSelected'])
const menus = ref([
  { nama: 'Keuangan', anim: '116065-wallet-animation.json', icon: 'eva-briefcase-outline', active: true },
  { nama: 'SDM', anim: '57946-profile-user-card.json', icon: 'eva-people-outline', active: false },
  { nama: 'Layanan', anim: '24897-customer-service.json', icon: 'eva-monitor-outline', active: false },
  { nama: 'Sarpras', anim: '73799-worker.json', icon: 'eva-cube-outline', active: false }
])

const selected = ref('Keuangan')

function clickedSelected (item) {
  selected.value = item.nama
  emits('onSelected', item.nama)
}
</script>

<style lang="scss" scoped>
.tempat__icon {
  position: relative;
  transition: all .3s;

  .active {
    opacity: 1;
    transition: all .3s;
    &::before{
      content: "";
      opacity: .8;
      width: 5px;
      border-radius: 4px;
      height: 50%;
      background-color: $primary;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(-50%, -50%);
      transition: all .3s;
    }
  }

}

</style>
