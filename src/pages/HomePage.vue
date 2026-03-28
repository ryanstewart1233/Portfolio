<script setup lang="ts">
import { useHead } from '@unhead/vue'
import HeroSection from '@/components/home/HeroSection.vue'
import AppShowcaseGrid from '@/components/home/AppShowcaseGrid.vue'

useHead({
  title: 'Ryan Stewart — Senior Software Engineer',
  meta: [
    { name: 'description', content: 'Ryan Stewart — Senior Software Engineer. Apps, tools, and side projects.' },
    { property: 'og:title', content: 'Ryan Stewart — Senior Software Engineer' },
    { property: 'og:description', content: 'Apps, tools, and side projects by Ryan Stewart.' },
  ],
})
</script>

<template>
  <div class="mx-auto max-w-7xl">
    <HeroSection />
    <AppShowcaseGrid />
  </div>
</template>
