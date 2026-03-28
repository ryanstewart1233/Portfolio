<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { personal } from '@/data/personal'
</script>

<template>
  <nav class="sticky top-0 z-50 border-b border-outline-variant/15 bg-surface/60 backdrop-blur-xl">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <RouterLink to="/" class="text-2xl font-bold tracking-tighter font-headline gradient-text">
        {{ personal.name }}
      </RouterLink>
      <div class="hidden items-center gap-8 font-headline font-medium tracking-tight md:flex">
        <RouterLink
          to="/"
          class="text-on-surface/70 transition-colors hover:text-on-surface"
          active-class="!text-primary border-b-2 border-primary pb-1"
        >
          Home
        </RouterLink>
        <RouterLink
          to="/about"
          class="text-on-surface/70 transition-colors hover:text-on-surface"
          active-class="!text-primary border-b-2 border-primary pb-1"
        >
          About
        </RouterLink>
      </div>
      <a
        :href="`mailto:${personal.contactEmail}`"
        class="gradient-btn rounded-full px-6 py-2 font-medium transition-all hover:scale-105 active:scale-95"
      >
        Get in Touch
      </a>
    </div>
  </nav>
</template>
