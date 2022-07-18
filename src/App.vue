<script setup lang="ts">
import { useRouter } from 'vue-router'

const title = 'Vue'

const router = useRouter()
const jump = (name: string) => {
  router.push({ name })
}
</script>

<template>
  <div class="mx-auto max-w-screen-xl p-4">
    <img src="@/assets/logo.png" class="w-10 md:w-14" />
  </div>
  <div class="bg-gray-50">
    <div
      class="mx-auto max-w-screen-xl px-4 py-12 flex items-center justify-between"
    >
      <div>
        <router-view></router-view>
        <div class="text-purple-600 text-3xl font-bold py-4">Hello Vue3!!!</div>
      </div>
      <div class="flex justify-center flex-col md:flex-row">
        <button
          type="button"
          class="button bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800"
          @click="jump('home')"
        >
          Home
        </button>

        <button
          type="button"
          class="button text-blue-600 mt-3 sm:mt-0 sm:ml-3"
          @click="jump('about')"
        >
          About
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.button {
  @apply font-medium text-xs leading-tight uppercase rounded shadow-md inline-block px-6 py-2.5 active:shadow-lg transition duration-150 ease-in-out;
}
</style>
