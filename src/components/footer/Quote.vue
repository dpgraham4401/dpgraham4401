<script setup lang="ts">

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
</script>

<template>
  <div class="flex flex-start items-start gap-4 w-full">
    <svg
      class="vim-fill w-8 h-8 min-h-8 min-w-8 max-h-8 max-w-8 -translate-y-2"
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
    <div>
      <p id="quote" class="vim-text justify-start">{{ randomQuote.quote }}</p>
      <div class="flex justify-end">
        <p id="attribution" class="vim-text"> — {{ randomQuote.source }}</p>
      </div>
    </div>
  </div>
</template>
