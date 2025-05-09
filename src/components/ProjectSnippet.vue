<script lang="ts" setup>
import Anchor from "./common/Anchor.vue";

type Props = {
  title: string
  description: string
  url: string
  githubUrl?: string
  liveUrl?: string
  tags?: string[]
}

defineProps<Props>();
</script>

<template>
  <div class="flex flex-col gap-3 pb-8">
    <div class="flex flex-col gap-3 sm:flex-row sm:justify-between">
      <Anchor :url="url" ariaLabel="go to project" class="text-xl">
        {{ title }}
      </Anchor>
      <div class="flex gap-2">
        <!-- v-if to conditionally render links -->
        <Anchor
          v-if="githubUrl"
          :url="githubUrl"
          ariaLabel="GitHub link"
          class="text-base"
          external
        >
          GitHub
        </Anchor>
        <Anchor
          v-if="liveUrl"
          :url="liveUrl"
          ariaLabel="Live link"
          class="text-base"
          external
        >
          Live
        </Anchor>
      </div>
    </div>
    <p class="vim-text ">
      {{ description }}
    </p>
    <div class="flex flex-row wrap gap-2">
      <!-- v-for to loop over tags -->
      <span
        v-if="tags"
        v-for="(tag, index) in tags"
        :key="index"
        class="vim-text-secondary -vim-bg  px-2 py-1 text-sm font-semibold"
      >
        {{ tag }}
      </span>
    </div>
  </div>
</template>
