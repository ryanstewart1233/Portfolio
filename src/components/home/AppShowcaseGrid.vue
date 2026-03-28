<script setup lang="ts">
import { useApps } from '@/composables/useApps'
import AppCard from '@/components/app/AppCard.vue'

const { apps } = useApps()
</script>

<template>
  <section id="apps" class="rounded-[3rem] bg-surface-container-low/30 px-6 py-24 md:px-12">
    <div class="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
      <div>
        <span class="font-label text-sm font-medium uppercase tracking-widest text-primary">Projects</span>
        <h2 class="mt-2 font-headline text-4xl font-bold text-on-surface md:text-5xl">Projects</h2>
      </div>
    </div>
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <AppCard v-for="(app, i) in apps" :key="app.slug" :app="app" :class="{ 'md:translate-y-12': i % 2 === 1 }" />
    </div>
    <div class="h-16 md:h-24"></div>
  </section>
</template>
