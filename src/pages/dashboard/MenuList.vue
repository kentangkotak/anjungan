<template>
  <q-card class="my-card shadow-4">
    <div class="pa-lg">
      <div class="row items-center q-col-gutter-sm">
        <div>
          <q-btn dense flat round icon="lens" :size="`${app.txtMd}px`" color="primary" />
        </div>
        <div class="txt-h5 text-weight-bold">Dashgroup</div>
      </div>
      <div class="txt-sm text-grey">Kumpulan Dashboard Executive</div>
    </div>

    <!-- menu -->
    <q-list bordered padding class="rounded-borders q-pb-lg">

      <q-item
        clickable
        v-ripple
        v-for="(item , i) in menus" :key=i
        dense
        style="padding: 0px !important"
        @click="clickedSelected(item)"
        :class="`${selected === item.nama?'my-menu-link':'no-active'}`"
      >
        <div class="row items-center">
          <div class="q-pl-sm">
            <app-lottie :url="item.anim" :height="55" :active="selected === item.nama" />
          </div>
          <div class="q-ml-md txt-lg">{{item.nama}}</div>
        </div>
      </q-item>

    </q-list>
  </q-card>
</template>

<script setup>
import { useAppStore } from 'src/stores/app'
import { ref } from 'vue'

const app = useAppStore()
const selected = ref('Keuangan')

const menus = ref([
  { nama: 'Keuangan', anim: '116065-wallet-animation.json', active: false },
  { nama: 'SDM', anim: '57946-profile-user-card.json', active: false },
  { nama: 'Layanan', anim: '24897-customer-service.json', active: false },
  { nama: 'Sarpras', anim: '73799-worker.json', active: false }
])

const emits = defineEmits(['onSelected'])

function clickedSelected (item) {
  selected.value = item.nama
  emits('onSelected', item.nama)
}

</script>

<style lang="scss" scoped>

.my-menu-link{
  color: white;
  background: $primary;
  margin-left: 20px !important;
  border-radius: 20px 0px 0 20px;
  // border-left: 5px solid $grey;
  transition: all .3s;
}

.no-active {
  color: $grey-10;
  margin-left: 0px;
  transition: all .3s;
}
</style>
