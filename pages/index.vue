<script setup lang="ts">
definePageMeta({
  meta: {
    title: 'Login',
    description: 'Login to your SQribe account',
  },
  name: 'Login',
});

</script>
<template>
  <div
    class="relative grid h-dvh flex-col items-center justify-center px-8 sm:px-0 lg:max-w-none lg:grid-cols-2 lg:px-0 w-screen"
  >
    <div class="bg-black h-full w-full hidden lg:flex">Hi</div>
    <div
      class="bg-white h-full w-full flex flex-col items-center justify-center"
    >
      <h3 class="font-medium text-zinc-800 text-2xl my-2">Log in to your account</h3>
      <span
        class="text-sm text-zinc-800 mb-4"
      >
        Login to start using SQribe
      </span>
      <UButton
        color="neutral"
        variant="outline">
        <Icon name="uil:github" /> Log in with GitHub
      </UButton>
    </div>
  </div>
</template>
