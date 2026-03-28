<script setup lang="ts">
import { personal } from '@/data/personal'
</script>

<template>
  <footer class="bg-surface py-12">
    <div class="mx-auto flex max-w-7xl flex-col items-center justify-between border-t border-outline-variant/10 px-8 pt-8 md:flex-row">
      <p class="mb-6 font-body text-sm text-on-surface/50 md:mb-0">
        &copy; {{ new Date().getFullYear() }} {{ personal.name }}
      </p>
      <div class="flex gap-8">
        <a
          v-for="link in personal.links"
          :key="link.label"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="font-body text-sm text-on-surface/50 transition-colors hover:text-primary"
        >
          {{ link.label }}
        </a>
      </div>
    </div>
  </footer>
</template>
