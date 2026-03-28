<script setup lang="ts">
defineProps<{ features: string[] }>()
</script>

<template>
  <div v-if="features.length" class="mt-16">
    <span class="font-label text-sm font-medium uppercase tracking-widest text-primary">Capabilities</span>
    <h3 class="mt-2 font-headline text-2xl font-bold text-on-surface">Features</h3>
    <ul class="mt-6 grid gap-4 sm:grid-cols-2">
      <li
        v-for="feature in features"
        :key="feature"
        class="flex items-start gap-4 rounded-2xl bg-surface-container-high/60 p-5"
      >
        <span class="material-symbols-outlined mt-0.5 text-primary">check_circle</span>
        <span class="font-body text-on-surface-variant">{{ feature }}</span>
      </li>
    </ul>
  </div>
</template>
