<template>
  <q-field
    ref="inp"
    standout
    :label="label"
    label-color="grey-6"
    style="min-width: 200px;"
    color="white"
    bg-color="dark"
    class="full-width"
    @focus="popup=true"
  >
    <template #prepend >
      <q-icon :name="icon" color="grey-6"  />
    </template>
    <template #append >
      <q-icon name="close" color="grey-6" @click.stop.prevent="emits('clearable')" class="cursor-pointer" />
    </template>
    <template v-slot:control="{ id, floatingLabel, modelValue, emitValue }">
      <input :id="id"
        class="q-field__input text-white"
        :value="modelValue"
        @change="e => emitValue(e.target.value)"
        v-show="floatingLabel" />
    </template>
    <!-- <template #append> -->
      <div class="popup">
        <q-popup-proxy
          ref="keyb"
          cover
          transition-show="scale"
          transition-hide="scale"
          no-parent-event
          v-model="popup"
          class="shadow-24"
        >
        <!-- <q-dialog v-model="popup" position="bottom"> -->
          <q-card style="width: 750px;" class="shadow-8">
            <div class="row q-col-gutter-sm q-pa-sm full-width">
              <div class="col-9">
                <div class="flex flex-wrap flex-center">
                  <div v-for="(item, i) in keyboards" :key="i" class="q-pa-xs">
                    <q-btn @click="handleClick(item)"
                    size="md"
                    no-caps
                    :class="`shadow-4 ${item==='Capslock'?'w-100':item==='Space'?'w-150':item==='Hapus'?'w-70':
                    item==='Enter'?'w-70':'w-50'}`"
                    >
                    <div v-if="item==='Capslock'||item==='Space'|| item==='Hapus'||item==='Enter'">{{ item }}</div>
                    <div v-else>
                      {{ caps?item.toUpperCase():item.toLowerCase() }}
                    </div>
                  </q-btn>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div class="flex flex-wrap flex-center">
                  <div v-for="(x, n) in keyboards2" :key="n" class="q-pa-xs">
                    <q-btn @click="emits('keyClicked', x)" :label="x" size="md" no-caps
                    :class="`shadow-4 w-50`"
                    />
                  </div>
                </div>
              </div>

            </div>
          </q-card>
        <!-- </q-dialog> -->
      </q-popup-proxy>
      </div>
    <!-- </template> -->
  </q-field>
</template>

<script setup>
import { ref } from 'vue'

const inp = ref(null)
const keyb = ref(null)
const popup = ref(false)

const caps = ref(true)

const keyboards = ref([
  'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
  'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
  'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Capslock', 'Space', 'Hapus', 'Enter'
])
const keyboards2 = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

defineProps({
  icon: {
    type: String,
    default: 'search'
  },
  label: {
    type: String,
    default: 'Pencarian'
  }
})
const emits = defineEmits(['keyClicked', 'emitValue', 'clearable'])

function handleClick (val) {
  if (val === 'Capslock') {
    caps.value = !caps.value
  } else if (val === 'Enter') {
    console.log(keyb.value)
    inp.value.focus(false)
    setTimeout(() => inp.value.blur(), 300)
    popup.value = false
    // inp.value.blur()
    // keyb.value.hide()
    emits('keyClicked', val)
  } else {
    emits('keyClicked', caps.value ? val.toUpperCase() : val.toLowerCase())
  }
}

</script>

<style lang="scss" scoped>
.popup {
  max-height: 200px;
  position: absolute;
  bottom: -100px;
  right: 0;
  left: 0;
}

.w-50 {
  width:50px;
}
.w-70 {
  width:75px;
}
.w-150 {
  width:150px;
}
.w-200 {
  width:200px;
}
.w-100 {
  width:100px;
}

button.q-icon {
  color:$grey-2;
}
</style>
