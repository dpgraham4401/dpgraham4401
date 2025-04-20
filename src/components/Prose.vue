<template>
  <div
    class="w-full font-mono prose prose-headings:font-mono prose-img:rounded-none
    prose-p:text-[var(--color-vim-dark)] prose-p:dark:text-[var(--color-vim-light)]
    prose-a:underline-offset-4 prose-h1:text-2xl prose-a:text-[var(--color-vim-dark)] dark:prose-a:text-[var(--color-vim-light)]
    prose-headings:text-[var(--color-vim-dark)] prose-headings:dark:text-[var(--color-vim-light)] prose-p:text-justify
    prose-code:text-[var(--color-vim-dark)] dark:prose-code:text-[var(--color-vim-light)] prose-h2:text-2xl prose-h3:text-xl
      prose-h4:text-lg prose-h5:text-base prose-h6:text-sm prose-strong:text-[var(--color-vim-dark)]
    dark:prose-strong:text-[var(--color-vim-light)] prose-li:text-[var(--color-vim-dark)] dark:prose-li:text-[var(--color-vim-light)]
    prose-ul:marker:text-[var(--color-vim-dark)] prose-ul:dark:marker:text-[var(--color-vim-light)] prose-ol:marker:text-[var(--color-vim-dark)]
    prose-ol:dark:marker:text-[var(--color-vim-light)] prose-a:px-1.5 prose-a:focus:outline-2 prose-a:focus:outline-offset-2
    prose-a:focus:outline-vim-dark prose-a:dark:focus:outline-vim-light"
  >
    <slot />
  </div>
</template>
