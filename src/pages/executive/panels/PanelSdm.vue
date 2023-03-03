<template>
  <div class="__mypanel">
    <div class="row q-col-gutter-lg">
      <div class="col-8">
        <!-- header -->
        <q-card flat class="my-card-dark2">
          <div class="q-pa-lg">
            <div class="txt-lg text-weight-bold">Dashboard Executive</div>
            <div class="txt-md text-grey">Dashboard SDM (kepegawaian) khusus untuk direktur</div>
            <div class="txt-md text-grey">UOBK RSUD MOHAMAD SALEH</div>
          </div>
        </q-card>
        <!-- KARTU PEGAWAI -->
        <div class="row q-col-gutter-sm q-pt-lg">
          <div class="col-3">
            <q-card flat class="my-card bg-primary">
              <div class="pa-md">
                <div class="flex flex-row items-center">
                  <q-avatar color="white" text-color="primary" icon="people_alt" :size="`${app.txt48}px`" :font-size="`${app.txt32}px`" />
                  <div class="text-right flex-col flex-1">
                    <div class="txt-h5 text-weight-bold">800</div>
                  </div>
                </div>
              </div>
              <q-separator></q-separator>
              <div class="pa-sm text-grey-2 text-right txt-md">Seluruh Pegawai</div>
            </q-card>
          </div>
          <div class="col-9">
            <div class="row q-col-gutter-sm">
              <div class="col-2">
                <q-card flat class="my-card-dark">
                  <div class="px-md pt-md">
                    <div class="z-top">
                      <div class="txt-h5 text-weight-bold text-right">400</div>
                      <div class="txt-lg text-grey-2" >PNS</div>
                    </div>

                  </div>
                  <div>
                    <app-chart-svg
                    color1="info"
                    strokeColor="info"
                    color2="dark"
                    :height="app.txt50"
                    :strokeWidth="2"
                    :data-y="[10, 9, 7, 2, 7, 6, 10]"
                  />
                  </div>
                </q-card>
              </div>
              <div class="col-2">
                <q-card flat class="my-card-dark">
                  <div class="px-md pt-md">
                    <div class="z-top">
                      <div class="txt-h5 text-weight-bold text-right">100</div>
                      <div class="txt-lg text-grey-2" >P3K</div>
                    </div>

                  </div>
                  <div>
                    <app-chart-svg
                    color1="positive"
                    strokeColor="positive"
                    color2="dark"
                    :height="app.txt50"
                    :strokeWidth="2"
                    :data-y="[10, 9, 7, 2, 7, 6, 10]"
                  />
                  </div>
                </q-card>
              </div>
              <div class="col-2">
                <q-card flat class="my-card-dark">
                  <div class="px-md pt-md">
                    <div class="z-top">
                      <div class="txt-h5 text-weight-bold text-right">200</div>
                      <div class="txt-lg text-grey-2" >HONDA</div>
                    </div>

                  </div>
                  <div>
                    <app-chart-svg
                    color1="accent"
                    strokeColor="accent"
                    color2="dark"
                    :height="app.txt50"
                    :strokeWidth="2"
                    :data-y="[4, 9, 7, 7,6, 3, 10]"
                  />
                  </div>
                </q-card>
              </div>
              <div class="col-2">
                <q-card flat class="my-card-dark">
                  <div class="px-md pt-md">
                    <div class="z-top">
                      <div class="txt-h5 text-weight-bold text-right">300</div>
                      <div class="txt-lg text-grey-2" >PT</div>
                    </div>

                  </div>
                  <div>
                    <app-chart-svg
                    color1="negative"
                    strokeColor="negative"
                    color2="dark"
                    :height="app.txt50"
                    :strokeWidth="2"
                    :data-y="[7, 5, 2, 7,9, 8, 10]"
                  />
                  </div>
                </q-card>
              </div>
              <div class="col-2">
                <q-card flat class="my-card-dark">
                  <div class="px-md pt-md">
                    <div class="z-top">
                      <div class="txt-h5 text-weight-bold text-right">150</div>
                      <div class="txt-lg text-grey-2" >PTT</div>
                    </div>

                  </div>
                  <div>
                    <app-chart-svg
                    color1="blue-grey"
                    strokeColor="blue-grey"
                    color2="dark"
                    :height="app.txt50"
                    :strokeWidth="2"
                    :data-y="[7, 8, 9, 7,9, 2, 3]"
                  />
                  </div>
                </q-card>
              </div>
               <div class="col-2">
                <q-card flat class="my-card-dark">
                  <div class="px-md pt-md">
                    <div class="z-top">
                      <div class="txt-h5 text-weight-bold text-right">150</div>
                      <div class="txt-lg text-grey-2" >Lainnya</div>
                    </div>

                  </div>
                  <div>
                    <app-chart-svg
                    color1="lime"
                    strokeColor="lime"
                    color2="dark"
                    :height="app.txt50"
                    :strokeWidth="2"
                    :data-y="[9, 8, 3, 6,7, 7, 9]"
                  />
                  </div>
                </q-card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">page2</div>
    </div>
    <div>
    </div>
  </div>
</template>
<script setup>
import { useAppStore } from 'src/stores/app'

const app = useAppStore()
</script>
<style lang="scss" scoped>
.__mypanel {
  width:100%;
  display: flex;
  flex-direction:column;
}
</style>
