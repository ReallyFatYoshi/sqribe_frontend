<template>
  <footer class="bg-white dark:bg-gray-900">
    <div
      class="max-w-screen-xl mx-auto px-4 py-6 flex items-center justify-between"
    >
      <div class="text-sm text-gray-500 dark:text-gray-400">
        &copy; {{ year }} {{ siteName }}. All rights reserved.
      </div>
      <div class="flex space-x-4">
        <a
          href="#"
          class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >Privacy Policy</a
        >
        <a
          href="#"
          class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >Terms of Service</a
        >
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const siteName = "MyNuxtApp";
const year = new Date().getFullYear();
</script>
