<script setup lang="ts">
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
import type { NuxtError } from "#app";

useHead({
  link: [
    {
      rel: 'preload',
      as: 'fetch',
      type: 'application/json',
      href: 'https://lottie.host/e70352e2-d035-4e8c-9709-e3750f0d8b05/G4EdZfloyF.json',
            crossorigin: 'anonymous'
    },
    {
      rel: 'preload',
      as: 'fetch',
      type: 'application/wasm',
      href: 'https://cdn.jsdelivr.net/npm/@lottiefiles/dotlottie-web@0.42.0/dist/dotlottie-player.wasm',
      crossorigin: 'anonymous'
    }
  ]
})

const props = defineProps({
  error: Object as () => NuxtError,
});
</script>

<template>
  <div class="h-screen w-screen bg-gray-100 flex items-center">
    <div
      class="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700"
    >
      <div class="max-w-md">
        <div class="text-5xl font-dark font-bold">{{ error.statusCode }}</div>
        <p class="text-2xl md:text-3xl font-light leading-normal">
          {{ error.statusMessage }}
        </p>
        <p class="mb-8">
          But dont worry, you can find plenty of other things on our homepage.
        </p>

        <NuxtLink to="/">
          <UButton
            trailing-icon="i-lucide-arrow-right" size="md"
          >
            back to homepage
          </UButton>
        </NuxtLink>
      </div>
      <div class="max-w-lg">
        <DotLottieVue background="#FFFFFF" style="height: 500px; width: 500px" autoplay loop src="https://lottie.host/e70352e2-d035-4e8c-9709-e3750f0d8b05/G4EdZfloyF.json" />
      </div>
    </div>
  </div>
</template>
