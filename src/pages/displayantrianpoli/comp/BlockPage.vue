<template>
  <div class="column flex-center fullscreen bg-dark text-white">
    <q-icon name="monitor" size="200px"></q-icon>
    <div class="text-h1">DISPLAY {{ param }}</div>
    <div class="text-h5">Aplikasi Display untuk Poli</div>
    <div class="q-mt-lg">
      <q-btn label="mulai / login dulu disini" color="primary"
        :loading="auth.loading"
        :disable="auth.loading"
        @click="login"
      ></q-btn>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from 'src/stores/auth'

defineProps({
  param: {
    type: String,
    default: null
  }
})

const auth = useAuthStore()

function login () {
  const params = {
    username: 'sa',
    email: 'sa@app.com',
    password: 'sasa12345',
    device: 'display'
  }

  auth.login(params)
}
</script>
