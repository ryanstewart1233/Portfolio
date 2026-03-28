<script setup lang="ts">
import { computed } from 'vue'
import { useHead } from '@unhead/vue'
import { useApps } from '@/composables/useApps'
import AppScreenshots from '@/components/app/AppScreenshots.vue'
import AppFeatureList from '@/components/app/AppFeatureList.vue'
import PlayStoreBadge from '@/components/app/PlayStoreBadge.vue'

const props = defineProps<{ slug: string }>()
const { getAppBySlug } = useApps()
const app = computed(() => getAppBySlug(props.slug))
const base = import.meta.env.BASE_URL

useHead(computed(() => ({
  title: app.value ? `${app.value.name} — Ryan Stewart` : 'App Not Found',
  meta: [
    { name: 'description', content: app.value?.tagline ?? '' },
    { property: 'og:title', content: app.value?.name ?? '' },
    { property: 'og:description', content: app.value?.tagline ?? '' },
  ],
})))
</script>

<template>
  <div v-if="app" class="mx-auto max-w-4xl px-6 py-16">
    <!-- Header -->
    <div class="flex flex-col items-start gap-8 md:flex-row">
      <div class="flex h-28 w-28 items-center justify-center rounded-3xl bg-surface-container-highest shadow-lg">
        <img
          :src="`${base}${app.icon.slice(1)}`"
          :alt="`${app.name} icon`"
          class="h-20 w-20 rounded-2xl"
          @error="($event.target as HTMLImageElement).style.display='none'"
        />
      </div>
      <div>
        <span class="font-label text-sm font-medium uppercase tracking-widest text-primary">{{ app.category }}</span>
        <h1 class="mt-2 font-headline text-4xl font-bold tracking-tight text-on-surface md:text-5xl">{{ app.name }}</h1>
        <p class="mt-3 max-w-xl font-body text-xl leading-relaxed text-on-surface-variant">{{ app.tagline }}</p>
        <div class="mt-6">
          <PlayStoreBadge :url="app.playStoreUrl" />
        </div>
      </div>
    </div>

    <!-- Description -->
    <div class="mt-16">
      <p class="max-w-2xl font-body text-lg leading-relaxed text-on-surface-variant">{{ app.description }}</p>
    </div>

    <!-- Features -->
    <AppFeatureList :features="app.features" />

    <!-- Screenshots -->
    <AppScreenshots :screenshots="app.screenshots" :app-name="app.name" />

    <!-- Tech Stack -->
    <div class="mt-16">
      <span class="font-label text-sm font-medium uppercase tracking-widest text-primary">Technology</span>
      <h3 class="mt-2 font-headline text-2xl font-bold text-on-surface">Tech Stack</h3>
      <div class="mt-4 flex flex-wrap gap-3">
        <span
          v-for="tech in app.techStack"
          :key="tech"
          class="rounded-lg bg-secondary-container/50 px-4 py-2 font-label text-sm text-on-secondary-container"
        >
          {{ tech }}
        </span>
      </div>
    </div>

    <!-- Data Safety -->
    <div class="mt-16 glass-card rounded-[2rem] p-8">
      <div class="flex items-center gap-3 mb-4">
        <span class="material-symbols-outlined text-3xl text-primary">verified_user</span>
        <h3 class="font-headline text-2xl font-bold text-on-surface">Data Safety</h3>
      </div>
      <div v-for="item in app.dataCollected" :key="item.dataType" class="mt-3 flex items-center gap-3">
        <span v-if="!item.collected" class="material-symbols-outlined text-green-400">check_circle</span>
        <span class="font-body text-sm text-on-surface-variant">{{ item.dataType }}: {{ item.purpose }}</span>
      </div>
    </div>

    <!-- Links -->
    <div class="mt-12 flex gap-6 text-sm">
      <RouterLink
        :to="`/apps/${app.slug}/privacy`"
        class="font-label text-primary transition-colors hover:text-primary-dim"
      >
        Privacy Policy &rarr;
      </RouterLink>
      <RouterLink
        :to="`/apps/${app.slug}/terms`"
        class="font-label text-primary transition-colors hover:text-primary-dim"
      >
        Terms of Service &rarr;
      </RouterLink>
    </div>
  </div>

  <div v-else class="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
    <h1 class="font-headline text-3xl font-bold text-on-surface">App not found</h1>
    <RouterLink to="/" class="mt-4 text-primary hover:text-primary-dim">Back to Home</RouterLink>
  </div>
</template>
