<template>
  <header
    class="bg-white dark:bg-gray-900 shadow-md py-4 px-6 flex items-center justify-between"
  >
    <div class="text-lg font-semibold text-gray-800 dark:text-white">
      {{ siteName }}
    </div>
    <nav class="space-x-4">
      <NuxtLink
        to="/"
        class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >Home</NuxtLink
      >
      <NuxtLink
        to="/about"
        class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >About</NuxtLink
      >
      <NuxtLink
        to="/contact"
        class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
        >Contact</NuxtLink
      >
    </nav>
  </header>
</template>
<script setup lang="ts">
const siteName = "MyNuxtApp";
</script>
