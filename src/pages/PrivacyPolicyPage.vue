<script setup lang="ts">
import { computed } from 'vue'
import { useHead } from '@unhead/vue'
import { useApps } from '@/composables/useApps'

const props = defineProps<{ slug: string }>()
const { getAppBySlug } = useApps()
const app = computed(() => getAppBySlug(props.slug))

useHead(computed(() => ({
  title: app.value ? `Privacy Policy — ${app.value.name}` : 'Privacy Policy',
  meta: [
    { name: 'description', content: app.value ? `Privacy policy for ${app.value.name}` : '' },
  ],
})))
</script>

<template>
  <div v-if="app" class="mx-auto max-w-3xl px-6 py-16">
    <RouterLink
      :to="`/apps/${app.slug}`"
      class="mb-8 inline-flex items-center gap-1 font-label text-sm text-primary transition-colors hover:text-primary-dim"
    >
      &larr; Back to {{ app.name }}
    </RouterLink>

    <div class="prose-custom" v-html="app.privacyPolicy.content" />

    <p class="mt-10 font-label text-sm text-on-surface-variant">
      Last updated: {{ app.privacyPolicy.lastUpdated }}
    </p>
  </div>

  <div v-else class="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
    <h1 class="font-headline text-3xl font-bold text-on-surface">App not found</h1>
    <RouterLink to="/" class="mt-4 text-primary hover:text-primary-dim">Back to Home</RouterLink>
  </div>
</template>

<style scoped>
.prose-custom :deep(h2) {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.875rem;
  font-weight: 700;
  color: #dee5ff;
  margin-top: 0;
  margin-bottom: 1.5rem;
  letter-spacing: -0.025em;
}
.prose-custom :deep(h3) {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #dee5ff;
  margin-top: 2rem;
  margin-bottom: 0.75rem;
}
.prose-custom :deep(p) {
  font-family: 'Inter', sans-serif;
  color: #a3aac4;
  line-height: 1.625;
  margin-bottom: 1rem;
}
.prose-custom :deep(ul) {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
}
.prose-custom :deep(li) {
  font-family: 'Inter', sans-serif;
  color: #a3aac4;
  margin-bottom: 0.25rem;
}
.prose-custom :deep(a) {
  color: #9fa7ff;
  text-decoration: underline;
}
.prose-custom :deep(a:hover) {
  color: #8a95ff;
}
.prose-custom :deep(strong) {
  color: #dee5ff;
}
</style>
