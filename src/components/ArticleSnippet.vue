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
  <div class="vim-text vim-transition flex flex-col gap-3 pb-8">
    <Anchor ariaLabel="full article" class="text-xl" :url="url">
      {{ title }}
    </Anchor>
    <p class="">
      {{ description }}
    </p>
    <div
      class="text-neutral-600 dark:text-neutral-400 vim-transition flex justify-between items-center"
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
