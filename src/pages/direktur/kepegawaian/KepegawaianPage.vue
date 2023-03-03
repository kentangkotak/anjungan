<template>
  <q-page>
    <app-loading v-if="store.loading" />
    <div class="row q-col-gutter-md q-pa-lg" style="padding-bottom:100px">
      <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div class="__judul text-h6">Data Kepegawaian</div>
        <div class="__sub_judul f-14 text-grey">Data Kepegawaian Per tanggal {{ app.currentDay }} {{ app.monts[month - 1] }} {{ year }}</div>
      </div>

        <div class="col-sm-12 col-xs-12 col-md-12 col-lg-12 col-xl-12">
          <div class="row q-col-gutter-md">
            <div class="col-sm-6 col-xs-6 col-md-3 col-lg-3 col-xl-3">
              <card-kepeg :jumlah="allPegawai" :jumlah-l="allPegawaiMan" :jumlah-p="allPegawaiWoman" txt="Seluruh Pegawai" icon="groups" />
            </div>
            <div v-for="(item, i) in store.statusPegawai" :key="i" class="col-sm-6 col-xs-6 col-md-3 col-lg-3 col-xl-3">
              <card-kepeg
                :jumlah="item.jumlah"
                :jumlah-l="item.l"
                :jumlah-p="item.p"
                :color="setColor(item) !== null ? setColor(item): 'dark'"
                :txt-color="setTxtColor(item) !== null ? setTxtColor(item): 'white'"
                txt="Pegawai Negeri Sipil"
                :txt-short="item.jenispegawai"
                :icon="setIcon(item) !== null? setIcon(item): 'people'" />
            </div>
          </div>
        </div>

        <div class="col-sm-12 col-xs-12 col-md-4 col-lg-4 col-xl-4">

          <!-- kategori pegawai -->

          <q-card class="my-card">
            <q-list padding separator>
              <q-item-label header class="text-weight-bold text-dark">Kategori Pegawai</q-item-label>
              <q-separator />
              <q-item v-for="(row, n) in store.kategoriPegawai" :key="n">
                <q-item-section avatar>
                  <q-avatar rounded size="32px" font-size="26px" color="grey-2" :text-color="store.icons[n].color" :icon="store.icons[n].icon" />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-grey-8 f-14">{{row.namakategoripeg}}</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-item-label class="text-weight-bold f-18 text-dark">{{ row.jumlah }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card>

          <!-- pegawai yg absen -->

          <q-card class="my-card q-mt-md">
            <q-list padding separator>
              <q-item-label header class="text-weight-bold text-dark">Absensi Pegawai hari ini</q-item-label>
              <q-separator />
              <q-item>
                <q-item-section avatar>
                  <q-avatar rounded size="32px" font-size="26px" color="grey-2" text-color="primary" icon="perm_contact_calendar" />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-grey-8 f-14">Yang Masuk Hari ini</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-item-label class="text-weight-bold f-18 text-dark">{{ store.ygMasuk}}</q-item-label>
                </q-item-section>
              </q-item>
              <q-item v-for="(cell, x) in store.flag" :key="x">
                <q-item-section avatar>
                  <q-avatar rounded size="32px" font-size="26px" color="grey-4" :text-color="cell.color" :icon="cell.icon" />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-grey-8 f-14">Hari ini {{cell.id}}</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-item-label class="text-weight-bold f-18 text-dark">{{ getIjin(cell.id) }}</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </div>

        <div class="col-sm-12 col-xs-12 col-md-8 col-lg-8 col-xl-8">
          <q-card class="my-card">
            <q-list padding separator>
              <q-item-label header class="text-weight-bold text-dark">
                Pola Ketenagaan Berdasarkan Golongan Pegawai
              </q-item-label>
              <q-separator />
            </q-list>
            <chart-golongan :key="data" :data-axis="golAxis" :data="data" />
          </q-card>
        </div>

    </div>
  </q-page>
</template>

<script setup>
import CardKepeg from './CardKepeg.vue'
import ChartGolongan from './ChartGolongan.vue'
import { useAppStore } from 'src/stores/app'
import { useKepegawaianStore } from 'src/stores/kepegawaian/index'
import { computed, onMounted } from 'vue'

// const { currentMonth, currentYear } = useDate()
// const percentagePendapatan = ref(82)

const app = useAppStore()
const store = useKepegawaianStore()
const month = computed(() => app.currentMonth)
const year = computed(() => app.currentYear)

const allPegawai = computed(() => {
  const jns = store.statusPegawai
  if (jns.length) {
    return jns.map(x => x.jumlah).reduce((x, y) => x + y, 0)
  }

  return 0
})
const allPegawaiMan = computed(() => {
  const jns = store.statusPegawai
  if (jns.length) {
    return jns.map(x => x.l).reduce((x, y) => x + y, 0)
  }

  return 0
})
const allPegawaiWoman = computed(() => {
  const jns = store.statusPegawai
  if (jns.length) {
    return jns.map(x => x.p).reduce((x, y) => x + y, 0)
  }

  return 0
})
const golAxis = computed(() => {
  const jns = store.golonganPegawai
  if (jns.length) {
    return jns.map(x => x.golruang)
  }

  return []
})
const data = computed(() => {
  const jns = store.golonganPegawai
  if (jns.length) {
    return jns.map(x => x.jumlah)
  }

  return []
})

function getIjin (kat) {
  const arr = store.ygIjin
  const cek = arr.filter(x => x.flag === kat).length
  return cek
}

onMounted(() => {
  store.getData()
})

function setColor (item) {
  const jns = item.jenispegawai
  const colorx = store.colorize
  const cc = colorx.filter(x => x.id === jns)
  return cc.length ? cc[0].color : null
}
function setTxtColor (item) {
  const jns = item.jenispegawai
  const colorx = store.colorize
  const cc = colorx.filter(x => x.id === jns)
  return cc.length ? cc[0].txtColor : null
}
function setIcon (item) {
  const jns = item.jenispegawai
  const colorx = store.colorize
  const cc = colorx.filter(x => x.id === jns)
  return cc.length ? cc[0].icon : null
}

</script>
