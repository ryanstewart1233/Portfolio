<script setup lang="ts">
defineProps<{ screenshots: string[]; appName: string }>()
const base = import.meta.env.BASE_URL
</script>

<template>
  <div v-if="screenshots.length" class="mt-16">
    <span class="font-label text-sm font-medium uppercase tracking-widest text-primary">Preview</span>
    <h3 class="mt-2 font-headline text-2xl font-bold text-on-surface">Screenshots</h3>
    <div class="mt-6 flex gap-4 overflow-x-auto pb-4">
      <img
        v-for="(src, i) in screenshots"
        :key="i"
        :src="`${base}${src.slice(1)}`"
        :alt="`${appName} screenshot ${i + 1}`"
        class="h-80 w-auto rounded-2xl border border-outline-variant/15 shadow-md"
      />
    </div>
  </div>
</template>
