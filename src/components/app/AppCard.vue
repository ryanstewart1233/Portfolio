<script setup lang="ts">
import type { AppData } from '@/data/apps'

defineProps<{ app: AppData }>()

const base = import.meta.env.BASE_URL
</script>

<template>
  <RouterLink
    :to="`/apps/${app.slug}`"
    class="glass-card group block rounded-[2rem] p-8 transition-all duration-300"
  >
    <div class="mb-6 flex items-start justify-between">
      <div class="flex h-16 w-16 items-center justify-center rounded-2xl bg-surface-container-highest text-primary">
        <img
          :src="`${base}${app.icon.slice(1)}`"
          :alt="`${app.name} icon`"
          class="h-12 w-12 rounded-xl"
          @error="($event.target as HTMLImageElement).style.display='none'"
        />
      </div>
      <span class="rounded-sm border border-outline-variant/10 bg-secondary-container/50 px-3 py-1 font-label text-xs text-on-secondary-container">
        {{ app.category }}
      </span>
    </div>
    <h3 class="mb-3 font-headline text-2xl font-bold text-on-surface">{{ app.name }}</h3>
    <p class="mb-8 font-body leading-relaxed text-on-surface-variant">{{ app.tagline }}</p>
    <div class="flex flex-wrap gap-2">
      <span
        v-for="tech in app.techStack"
        :key="tech"
        class="rounded bg-surface-variant px-2 py-1 font-label text-xs text-on-surface-variant"
      >
        {{ tech }}
      </span>
    </div>
  </RouterLink>
</template>
