<script setup>
import { GLOBAL } from "@/lib/variables";
</script>

<template>
  <div class="flex flex-col items-center sm:flex-row gap-8">
    <img
      :alt="GLOBAL.username"
      :src="GLOBAL.profileImage"
      class="rounded-full max-w-40 w-40 h-40 mb-4 z-0 grayscale"
    />
    <div>
      <h1 class="text-3xl sm:text-4xl font-display font-semibold opsz text-center sm:text-left">
        {{ GLOBAL.username }}
      </h1>
      <h2 class="text-center text-xl sm:text-2xl font-mono font-medium sm:text-left">
        <!-- Using v-html to render the HTML string from GLOBAL.shortDescription -->
        <p v-html="GLOBAL.shortDescription" />
      </h2>
    </div>
  </div>
</template>
