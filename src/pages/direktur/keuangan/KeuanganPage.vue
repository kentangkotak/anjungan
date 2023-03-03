<template>
  <q-page>
    <app-loading v-if="store.loading" />
    <div class="row q-col-gutter-md q-pa-lg" style="padding-bottom:100px">
      <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div class="__judul text-h6">Data Keuangan</div>
        <div class="__sub_judul text-grey">Data Keuangan Bulan {{ app.monts[month - 1] }} {{ year }}</div>
        <div class="row q-col-gutter-md q-pt-md">
          <div class="col-sm-12 col-xs-12 col-md-3 col-lg-3 col-xl-3">
            <card-comp
              :percent="isNaN(percentagePendapatan)? 0: percentagePendapatan"
              :target="1000000000"
              :realisasi="1000000000"
              box-icon-color="secondary"
              title-icon="bar_chart"
              title-icon-color="white"
              title="Pendapatan"
              title-color="white"
              subtitle-color="grey"
              tahun="2023"
              target-name="Target Pendapatan"
              realisasi-name="Realisasi Pendapatan"
            />

            <div class="q-pt-md">
              <card-comp
              :percent="isNaN(percentageBelanja)? 0: percentageBelanja"
              color="info"
              :target="1000000000"
              :realisasi="1000000000"
              box-icon-color="dark"
              title-icon="local_mall"
              title-icon-color="white"
              title="Belanja"
              title-color="dark"
              subtitle-color="grey-9"
              tahun="2023"
              target-name="Anggaran Belanja"
              realisasi-name="Realisasi Pembelanjaan"
            />
            </div>
          </div>
          <div class="col-sm-12 col-xs-12 col-md-4 col-lg-4 col-xl-4">
            <q-card flat bordered class="my-card">
              <q-list>
                  <q-item class="q-mt-lg">
                    <q-item-section avatar>
                      <q-icon name="bar_chart" size="50px" color="primary" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="">Target Pendapatan</q-item-label>
                      <q-item-label caption lines="2" class="f-10 text-grey-8">Target Pendapatan tahun {{ year }}</q-item-label>
                      <q-item-label class="text-weight-bold f-16 q-pt-sm">
                         {{ formatRupiah(store.targetPendapatan) }}
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-separator />
                  <q-item class="q-mt-md">
                    <q-item-section avatar>
                      <q-icon name="point_of_sale" size="50px" color="primary" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="">Realisasi Pendapatan</q-item-label>
                      <q-item-label caption lines="2" class="f-10">Realisasi Pendapatan tahun {{ year }}</q-item-label>
                      <q-item-label class="text-weight-bold f-16 q-pt-sm">
                        {{ formatRupiah(store.realisasiPendapatan) }}
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-separator />
                  <q-item-section>
                        <q-linear-progress color="primary" size="9px" :value="percentagePendapatan/100" class="q-mt-lg" />
                    </q-item-section>
                </q-list>
            </q-card>
            <div class="q-pt-md">
              <q-card flat bordered class="my-card">
                <q-list>
                  <q-item class="q-mt-lg">
                    <q-item-section avatar>
                      <q-icon name="local_mall" size="50px" color="info" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="">Anggaran Belanja</q-item-label>
                      <q-item-label caption lines="2" class="f-10 text-grey-8">Anggaran Belanja tahun {{ year }}</q-item-label>
                      <q-item-label class="text-weight-bold f-16 q-pt-sm">
                        {{ formatRupiah(store.anggaranBelanja) }}
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-separator />
                  <q-item class="q-mt-md">
                    <q-item-section avatar>
                      <q-icon name="shopping_cart" size="50px" color="info" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="">Realisasi Belanja</q-item-label>
                      <q-item-label caption lines="2" class="f-10">Realisasi Belanja tahun {{ year }}</q-item-label>
                      <q-item-label class="text-weight-bold f-16 q-pt-sm">
                        {{ formatRupiah(store.realisasiBelanja) }}
                      </q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-separator />
                  <q-item-section>
                        <q-linear-progress color="info" size="9px" :value="percentageBelanja/100" class="q-mt-lg" />
                    </q-item-section>
                </q-list>
              </q-card>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5">
            <div class="">
              <div>Kas Bendahara Pengeluaran 💸</div>
              <div class="text-h5 text-weight-bold">Rp 0</div>
            </div>
            <cc-card class="q-mt-md" color1="purple" color2="purple-4" title="Kas Induk" :periode="app.monts[month - 1]+' '+ year" :total="0" />
            <cc-card class="q-mt-md" title="Kas Bendahara Penerimaan" :periode="app.monts[month - 1]+' '+ year" :total="0" />

          </div>
        </div>
      </div>
      <div class="col-12">
        <q-card class="my-card" >
          <q-card-section>
            <div class="">Hutang dan Piutang 📝</div>
            <q-separator class="q-my-md"></q-separator>
            <div class="row q-col-gutter-md">
              <div class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <q-list>
                  <q-item>
                    <q-item-section avatar>
                      <q-avatar rounded size="50px" font-size="40px" color="grey-4" text-color="dark" icon="paid" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-grey-8">Hutang Farmasi</q-item-label>
                      <q-item-label class="text-weight-bold">Rp 0</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section avatar>
                      <q-avatar rounded size="50px" font-size="40px" color="grey-4" text-color="negative" icon="bloodtype" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-grey-8">Hutang Bank Darah</q-item-label>
                      <q-item-label class="text-weight-bold">Rp 0</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
              <div class="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <q-list>
                  <q-item>
                    <q-item-section avatar>
                      <q-avatar rounded size="50px" font-size="40px" color="grey-4" text-color="cyan-10" icon="account_balance_wallet" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-grey-8">Hutang Lainnya</q-item-label>
                      <q-item-label class="text-weight-bold">Rp 0</q-item-label>
                    </q-item-section>
                  </q-item>
                  <q-item>
                    <q-item-section avatar>
                      <q-avatar rounded size="50px" font-size="40px" color="grey-4" text-color="secondary" icon="payment" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label class="text-grey-8">PIUTANG</q-item-label>
                      <q-item-label class="text-weight-bold">Rp 0</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
            </div>
          </q-card-section>

        </q-card>
      </div>
  </div>
  </q-page>
</template>

<script setup>
import { onMounted, computed, watch } from 'vue'
import CardComp from './CardComp.vue'
import CcCard from './CcCard.vue'
// import useDate from 'src/utility/useDate.js'
import { useKeuanganStore } from 'src/stores/keuangan/index'
import { formatRupiah } from 'src/utility/formatter'
import { useAppStore } from 'src/stores/app'

// const { currentMonth, currentYear } = useDate()
// const percentagePendapatan = ref(82)

const month = computed(() => app.currentMonth)
const year = computed(() => app.currentYear)
// const year = ref(currentYear())

const store = useKeuanganStore()
const app = useAppStore()
// console.log('store', store.realisasiPendapatan)
const percentagePendapatan = computed(() => {
  const hitung = (store.realisasiPendapatan / store.targetPendapatan) * 100
  const m = hitung.toFixed(0)
  return parseInt(m)
})
const percentageBelanja = computed(() => {
  const hitung = (store.realisasiBelanja / store.anggaranBelanja) * 100
  const m = hitung.toFixed(0)
  return parseInt(m)
})

function monthToString () {
  return month.value <= 9 ? '0' + (month.value) : (month.value).toString()
}

onMounted(() => {
  const mYear = monthToString() + '-' + year.value
  store.getData(mYear)
})

watch([month, year], (newValue) => {
  // console.log('watch', newValue)
  trigerredWatch(newValue)
})

function trigerredWatch (val) {
  console.log(val)
  const m = val[0] <= 9 ? '0' + val[0] : (val[0]).toString()
  const mYear = m + '-' + val[1]
  store.getData(mYear)
}
</script>
