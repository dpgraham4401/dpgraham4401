<script lang="ts" setup>
import { GLOBAL } from "src/lib/constants";
import { onMounted, onUnmounted, ref } from "vue";
import Anchor from "./common/Anchor.vue";
import ShipLogo from "./logo/ShipLogo.vue";
import ThemeToggle from "./ThemeToggle.vue";

let isOpen = ref(false);

function updateNavState() {
  const nav = document.querySelector("nav");
  const isMobile = window.matchMedia("(max-width: 640px)").matches;
  if (nav) {
    if (isMobile) {
      nav.style.transform = isOpen.value ? "translateY(0)" : "translateY(-100%)";
    } else {
      nav.style.transform = "translateY(0)";
      isOpen.value = false;
    }
  }
}


function toggleNav() {
  isOpen.value = !isOpen.value;
  updateNavState();
}

onMounted(() => {
  window.addEventListener("resize", updateNavState);
  updateNavState();
});

onUnmounted(() => {
  window.removeEventListener("resize", updateNavState);
});


</script>

<template>
  <header
    class="vim-bg vim-border-b sticky top-0 w-full z-10"
  >
    <div
      class="vim-bg sm:hidden relative z-50 py-4 flex items-center"
    >
      <button aria-label="Toggle navigation menu" class="px-4" @click="toggleNav">
        <svg
          class="vim-fill "
          height="32"
          viewBox="0 0 512 512"
          width="32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M80 96h352v32H80zm0 144h352v32H80zm0 144h352v32H80z"></path>
        </svg>
      </button>
    </div>
    <nav
      class="vim-bg transition vim-border-b fixed sm:relative inset-x-0 top-0 h-auto sm:px-4 flex justify-between flex-col gap-8 py-4 text-xl sm:flex-row max-w-2xl mx-auto sm:pt-4 sm:border-none">
      <div
        class="flex flex-col items-center font-mono font-medium gap-4 sm:flex-row px-4 sm:px-0 mt-16 sm:mt-0"
      >
        <ShipLogo />
        <div v-for="(value, key) in GLOBAL.menu" :key="key">
          <Anchor :url="value" aria-label="foo">{{ key }}</Anchor>
        </div>
      </div>
      <div class="flex gap-4 items-center justify-between px-4 sm:px-0">
        <Anchor :url="GLOBAL.social.github" aria-label="GitHub Repository">
          <svg
            class="vim-fill "
            height="32"
            viewBox="0 0 24 24"
            width="32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
            ></path>
          </svg>
        </Anchor>
        <ThemeToggle />
      </div>
    </nav>
  </header>
</template>
