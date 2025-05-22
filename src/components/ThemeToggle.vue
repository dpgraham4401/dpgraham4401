<script lang="ts" setup>

import { HalfMoon, SunLight } from "@iconoir/vue";
import { ref } from "vue";

const isDark = ref(false);

const saveDarkModeToStorage = (theme: string) => {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("theme", theme);
  }
};

const applyDarkMode = (theme: string) => {
  document.documentElement.dataset.theme = theme;
  isDark.value = theme === "dark";
};

const getDarkMode = () => {
  if (typeof localStorage !== "undefined") {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme;
    }
  }
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
};

if (typeof localStorage !== "undefined") {
  const savedTheme = getDarkMode();
  applyDarkMode(savedTheme);
}

const handleToggleClick = () => {
  const newTheme = isDark.value ? "light" : "dark";
  applyDarkMode(newTheme);
  saveDarkModeToStorage(newTheme);
};

</script>

<template>
  <button
    id="themeToggle"
    aria-label="Theme Toggle"
    class="border-none h-1/2 bg-none focus:outline-2 focus:outline-offset-2 focus:outline-vim-dark dark:focus:outline-vim-light"
    @click="handleToggleClick">
    <SunLight v-if="isDark" stroke-width="2" />
    <HalfMoon v-else stroke-width="2" />
  </button>
</template>
