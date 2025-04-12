<script lang="ts" setup>
import Anchor from "./common/Anchor.vue";

type Props = {
  title: string
  description: string
  url: string
  githubUrl?: string
  liveUrl?: string
  tags: string[]
}

defineProps<Props>();
</script>

<template>
  <div class="flex flex-col gap-3 pb-8">
    <div class="flex flex-col gap-3 sm:flex-row sm:justify-between">
      <Anchor :url="url" class="text-xl">
        {{ title }}
      </Anchor>
      <div class="flex gap-2">
        <!-- v-if to conditionally render links -->
        <Anchor
          v-if="githubUrl"
          :external
          :url="githubUrl"
          aria-label="GitHub link"
          class="text-base"
        >
          GitHub
        </Anchor>
        <Anchor
          v-if="liveUrl"
          :external
          :url="liveUrl"
          aria-label="Live link"
          class="text-base"
        >
          Live
        </Anchor>
      </div>
    </div>
    <p class="zag-text zag-transition">
      {{ description }}
    </p>
    <div class="flex flex-row wrap gap-2">
      <!-- v-for to loop over tags -->
      <span
        v-for="(tag, index) in tags"
        :key="index"
        class="-zag-text -zag-bg zag-transition px-2 py-1 text-sm font-semibold"
      >
        {{ tag }}
      </span>
    </div>
  </div>
</template>
