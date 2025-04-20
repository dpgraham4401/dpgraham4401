<script>
import Section from "@components/common/Section.vue";
import Anchor from "./common/Anchor.vue";
import { GLOBAL } from "@/lib/constants.js";

export default {
  components: {
    Section,
    Anchor: Anchor
  },
  setup() {
    const date = new Date();
    const year = date.getFullYear();

    const quotes = [
      {
        quote: "Talk is cheap. Show me code.",
        source: "Linus Torvalds"
      },
      {
        quote:
          "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        source: "Martin Fowler"
      },
      {
        quote: "Never laugh at live dragons.",
        source: "Bilbo Baggins,  J.R.R. Tolkien"
      },
      {
        quote: "In the beginning the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move.",
        source: "The Hitchhiker's Guide to the Galaxy, Douglas Adams"
      },
      {
        quote: "Don't Panic!",
        source: "The Hitchhiker's Guide to the Galaxy, Douglas Adams"
      },
      {
        quote: "Never memorize what you could look up in a book.",
        source: "Albert Einstein"
      },
      {
        quote: "All men make mistakes, but a good man yields when he knows his course is wrong, and repairs the evil. The only crime is pride.",
        source: "Sophocles"
      },
      {
        quote: "Today is tomorrow's yesterday.",
        source: "Bob's Burgers"
      },
      {
        quote: "Clean code always looks like it was written by someone who cares.",
        source: "Robert C. Martin"
      },
      {
        quote: "They say stress is the silent killer. But poison darts are also pretty darn quiet.",
        source: "Sterling Archer, Archer"
      },
      {
        quote: " have no special talent. I am only passionately curious.",
        source: "Albert Einstein"
      }
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    return {
      GLOBAL,
      year,
      randomQuote
    };
  }
};
</script>


<template>
  <footer class="mt-16 mb-8">
    <Section class="mb-4">
      <div
        class="vim-border-b vim-transition pb-4 flex flex-col sm:flex-row sm:flex-nowrap gap-8 sm:items-center"
      >
        <ul class="flex flex-col gap-2">
          <li v-for="(url, name) in GLOBAL.menu" :key="name">
            <Anchor :url="url" aria-label="foo">{{ name }}</Anchor>
          </li>
        </ul>
        <div class="flex flex-start items-start gap-4 w-full">
          <svg
            class="vim-fill vim-transition w-8 h-8 min-h-8 min-w-8 max-h-8 max-w-8 -translate-y-2"
            height="32"
            viewBox="0 0 24 24"
            width="32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m10 7l-2 4h3v6H5v-6l2-4zm8 0l-2 4h3v6h-6v-6l2-4z"
              fill="currentColor"
            ></path>
          </svg>
          <p id="quote" class="vim-text vim-transition">{{ randomQuote.quote }}</p>
        </div>
        <div class="flex flex-row sm:flex-col gap-4">
          <Anchor
            v-if="GLOBAL.social.github"
            :url="GLOBAL.social.github"
            aria-label="GitHub Profile"
          >
            <svg
              height="32"
              viewBox="0 0 24 24"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="vim-fill vim-transition"
                d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
              ></path>
            </svg>
          </Anchor>
          <Anchor
            v-if="GLOBAL.social.linkedin"
            :url="GLOBAL.social.linkedin"
            aria-label="LinkedIn Profile"
          >
            <svg
              height="32"
              viewBox="0 0 24 24"
              width="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="vim-fill vim-transition"
                d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.12 19h-3.08v-9h3.08v9zm-1.54-10.29c-.99 0-1.79-.8-1.79-1.79s.8-1.79 1.79-1.79 1.79.8 1.79 1.79-.8 1.79-1.79 1.79zm13.16 10.29h-3.08v-4.89c0-1.16-.02-2.64-1.61-2.64s-1.86 1.26-1.86 2.57v4.96h-3.08v-9h2.96v1.23h.04c.41-.78 1.4-1.6 2.88-1.6 3.08 0 3.65 2.03 3.65 4.66v4.71z"
                fill="currentColor"
              ></path>
            </svg>
          </Anchor>
        </div>
      </div>
    </Section>
    <p class="vim-text vim-transition text-center text-sm font-medium">
      &copy; {{ year }} {{ GLOBAL.site.name }}. All rights reserved.
    </p>
  </footer>
</template>


<style scoped>
/* Add your styles here if needed */
</style>
