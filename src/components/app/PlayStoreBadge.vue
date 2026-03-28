<script setup lang="ts">
defineProps<{ url: string }>()
const badgeSrc = `${import.meta.env.BASE_URL}images/google-play-badge.svg`
</script>

<template>
  <a :href="url" target="_blank" rel="noopener noreferrer" class="inline-block transition-opacity hover:opacity-80">
    <img
      :src="badgeSrc"
      alt="Get it on Google Play"
      class="h-14"
    />
  </a>
</template>
