<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({ title: '404 — Page Not Found' })
</script>

<template>
  <div class="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
    <h1 class="font-headline text-7xl font-bold gradient-text">404</h1>
    <p class="mt-4 font-body text-xl text-on-surface-variant">Page not found</p>
    <RouterLink
      to="/"
      class="gradient-btn mt-8 rounded-full px-8 py-3 font-semibold transition-all hover:scale-105"
    >
      Back to Home
    </RouterLink>
  </div>
</template>
