<script lang="ts" setup>
import Anchor from "./common/Anchor.vue";

type Props = {
  title: string;
  description: string;
  url: string;
  readTime?: number;
  timestamp?: Date;
  tags?: string[];
};

defineProps<Props>();
</script>

<template>
  <div class="vim-text flex flex-col gap-3 pb-8">
    <Anchor :url="url" aria-label="full article" class="text-xl">
      {{ title }}
    </Anchor>
    <p class="">
      {{ description }}
    </p>
    <div
      class="text-neutral-600 dark:text-neutral-400 flex justify-between items-center"
    >
      <p v-if="timestamp">
        {{ timestamp.toLocaleDateString() }}
      </p>
      <p v-if="readTime">
        {{ readTime }} min
      </p>
    </div>
  </div>
</template>
