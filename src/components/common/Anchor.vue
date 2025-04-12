<script lang="ts" setup>

type Props = {
  url: string,
  external?: boolean,
  ariaLabel: string,
  class?: string
};

// define props with types and default values
const { external = false } = defineProps<Props>();
</script>

<template>
  <a
    :aria-label="ariaLabel"
    :class="['zag-offset', 'underline', 'font-medium', 'flex', 'items-center', 'focus:outline-2', 'focus:outline-offset-2', 'focus:outline-zag-dark', 'dark:focus:outline-zag-light']"
    :href="url"
    :target="external ? '_blank' : '_self'"
  >
    <slot />
    <svg
      v-if="external"
      class="w-6 h-6"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        class="zag-fill zag-transition"
        d="M362.666 149.333V320H320l-.001-97.831l-154.51 154.51l-30.169-30.17L289.829 192h-97.83v-42.666z"
        fill-rule="evenodd"
      />
    </svg>
  </a>
</template>

<style scoped>
</style>