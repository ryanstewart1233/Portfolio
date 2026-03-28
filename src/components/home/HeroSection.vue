<script setup lang="ts">
import { personal } from '@/data/personal'
</script>

<template>
  <section class="relative flex min-h-[70vh] flex-col items-start justify-center px-6 py-24">
    <!-- Decorative Background -->
    <div class="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 opacity-20">
      <div class="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]"></div>
      <div class="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-tertiary/20 blur-[100px]"></div>
    </div>

    <div class="w-full md:w-2/3">
      <p class="mb-6 font-label text-sm font-semibold uppercase tracking-widest text-primary">
        {{ personal.title }}
      </p>
      <h1 class="mb-8 font-headline text-6xl font-bold leading-[0.9] tracking-tighter text-on-surface md:text-8xl">
        I build things and <span class="gradient-text">ship</span> them.
      </h1>
      <p class="mb-12 max-w-2xl font-body text-xl leading-relaxed text-on-surface-variant md:text-2xl">
        {{ personal.bio }}
      </p>
      <div class="flex flex-wrap gap-4">
        <a
          href="#apps"
          class="gradient-btn rounded-full px-8 py-4 text-lg font-semibold transition-all"
        >
          View Projects
        </a>
        <RouterLink
          to="/about"
          class="rounded-full border border-outline-variant/30 bg-transparent px-8 py-4 text-lg font-semibold text-on-surface transition-all hover:bg-surface-container-highest"
        >
          About Me
        </RouterLink>
      </div>
    </div>
  </section>
</template>
