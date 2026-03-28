<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { personal } from '@/data/personal'

useHead({
  title: 'About — Ryan Stewart',
  meta: [
    { name: 'description', content: `About ${personal.name} — ${personal.title}` },
  ],
})
</script>

<template>
  <div class="mx-auto max-w-7xl px-6 py-16">
    <!-- Header -->
    <div class="mb-16 md:w-2/3">
      <span class="font-label text-sm font-medium uppercase tracking-widest text-primary">About</span>
      <h1 class="mt-2 font-headline text-4xl font-bold tracking-tight text-on-surface md:text-6xl">
        About Me
      </h1>
      <p class="mt-6 max-w-2xl font-body text-xl leading-relaxed text-on-surface-variant">{{ personal.bio }}</p>
    </div>

    <!-- Skills -->
    <section class="mb-16">
      <span class="font-label text-sm font-medium uppercase tracking-widest text-primary">Expertise</span>
      <h2 class="mt-2 font-headline text-3xl font-bold text-on-surface">Skills</h2>
      <div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="group in personal.skills"
          :key="group.category"
          class="glass-card rounded-[2rem] p-8"
        >
          <h3 class="mb-4 font-label text-sm font-semibold uppercase tracking-widest text-primary">
            {{ group.category }}
          </h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="item in group.items"
              :key="item"
              class="rounded bg-surface-variant px-3 py-1.5 font-label text-sm text-on-surface-variant"
            >
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience -->
    <section v-if="personal.experience.length" class="mb-16">
      <span class="font-label text-sm font-medium uppercase tracking-widest text-primary">Career</span>
      <h2 class="mt-2 font-headline text-3xl font-bold text-on-surface">Experience</h2>
      <div class="mt-8 space-y-4">
        <div
          v-for="job in personal.experience"
          :key="`${job.company}-${job.role}`"
          class="glass-card rounded-[2rem] p-8"
        >
          <div class="flex items-baseline justify-between">
            <h3 class="font-headline text-xl font-bold text-on-surface">{{ job.role }}</h3>
            <span class="font-label text-sm text-on-surface-variant">{{ job.period }}</span>
          </div>
          <p class="mt-1 font-label text-sm text-primary">{{ job.company }}</p>
          <p class="mt-3 font-body text-on-surface-variant">{{ job.description }}</p>
        </div>
      </div>
    </section>

    <!-- Education -->
    <section v-if="personal.education.length" class="mb-16">
      <span class="font-label text-sm font-medium uppercase tracking-widest text-primary">Education</span>
      <h2 class="mt-2 font-headline text-3xl font-bold text-on-surface">Education</h2>
      <div class="mt-8 space-y-4">
        <div
          v-for="edu in personal.education"
          :key="edu.institution"
          class="glass-card rounded-[2rem] p-8"
        >
          <h3 class="font-headline text-xl font-bold text-on-surface">{{ edu.degree }}</h3>
          <p class="mt-1 font-label text-sm text-on-surface-variant">{{ edu.institution }} — {{ edu.year }}</p>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="py-16">
      <div class="glass-card relative overflow-hidden rounded-[3rem] p-12 text-center md:p-20">
        <div class="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-primary to-tertiary"></div>
        <h2 class="font-headline text-4xl font-bold tracking-tight text-on-surface md:text-5xl">
          Get in <span class="text-primary">touch</span>
        </h2>
        <p class="mx-auto mb-10 mt-6 max-w-2xl font-body text-xl text-on-surface-variant">
          Want to work together or have a question about one of my projects?
        </p>
        <a
          :href="`mailto:${personal.contactEmail}`"
          class="gradient-btn inline-block rounded-full px-10 py-5 text-xl font-bold transition-all hover:shadow-[0_0_30px_rgba(159,167,255,0.4)]"
        >
          Get in Touch
        </a>
      </div>
    </section>

    <!-- Links -->
    <section class="mb-8">
      <div class="flex gap-4">
        <a
          v-for="link in personal.links"
          :key="link.label"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-full border border-outline-variant/30 bg-transparent px-6 py-3 font-label text-sm text-on-surface transition-all hover:bg-surface-container-highest hover:text-primary"
        >
          {{ link.label }}
        </a>
      </div>
    </section>
  </div>
</template>
