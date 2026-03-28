<script setup lang="ts">
import { computed } from 'vue'
import { useHead } from '@unhead/vue'
import { useApps } from '@/composables/useApps'

const props = defineProps<{ slug: string }>()
const { getAppBySlug } = useApps()
const app = computed(() => getAppBySlug(props.slug))

useHead(computed(() => ({
  title: app.value ? `Terms of Service — ${app.value.name}` : 'Terms of Service',
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

    <span class="font-label text-sm font-medium uppercase tracking-widest text-primary">Legal</span>
    <h1 class="mt-2 font-headline text-3xl font-bold tracking-tight text-on-surface">Terms of Service</h1>
    <p class="mt-2 font-label text-sm text-on-surface-variant">For {{ app.name }}</p>

    <div class="mt-10 space-y-8 font-body leading-relaxed text-on-surface-variant">
      <section>
        <h2 class="mb-3 font-headline text-xl font-bold text-on-surface">1. Acceptance of Terms</h2>
        <p>By downloading or using {{ app.name }}, you agree to these Terms of Service. If you do not agree, do not use the app.</p>
      </section>

      <section>
        <h2 class="mb-3 font-headline text-xl font-bold text-on-surface">2. Use of the App</h2>
        <p>{{ app.name }} is provided "as is" for personal, non-commercial use. You may not reverse-engineer, modify, or redistribute the app.</p>
      </section>

      <section>
        <h2 class="mb-3 font-headline text-xl font-bold text-on-surface">3. Limitation of Liability</h2>
        <p>To the maximum extent permitted by law, the developer shall not be liable for any indirect, incidental, or consequential damages arising from use of the app.</p>
      </section>

      <section>
        <h2 class="mb-3 font-headline text-xl font-bold text-on-surface">4. Changes</h2>
        <p>These terms may be updated from time to time. Continued use of the app constitutes acceptance of the updated terms.</p>
      </section>

      <section>
        <h2 class="mb-3 font-headline text-xl font-bold text-on-surface">5. Contact</h2>
        <p>Questions? Contact us at <a :href="`mailto:${app.privacyPolicy.contactEmail}`" class="text-primary hover:text-primary-dim underline">{{ app.privacyPolicy.contactEmail }}</a>.</p>
      </section>
    </div>
  </div>

  <div v-else class="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
    <h1 class="font-headline text-3xl font-bold text-on-surface">App not found</h1>
    <RouterLink to="/" class="mt-4 text-primary hover:text-primary-dim">Back to Home</RouterLink>
  </div>
</template>
