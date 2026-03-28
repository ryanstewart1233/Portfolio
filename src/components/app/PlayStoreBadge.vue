<script setup lang="ts">
defineProps<{ url: string }>()
const badgeSrc = `${import.meta.env.BASE_URL}images/google-play-badge.png`
</script>

<template>
  <div v-if="url">
    <a :href="url" target="_blank" rel="noopener noreferrer" class="inline-block transition-opacity hover:opacity-80">
      <img
        :src="badgeSrc"
        alt="Get it on Google Play"
        class="h-14"
      />
    </a>
  </div>
  <div v-else class="inline-block rounded-full border border-outline-variant/30 px-6 py-3 font-label text-sm text-on-surface-variant">
    Coming soon to Google Play
  </div>
</template>
