# Repo Docs

Documentation for the repo since the README.md is displayed on my public GitHub profile page.

## Getting Started

Install dependencies and start the dev server:

```bash
pnpm install
pnpm dev
```

Requires Node `>=24`.

### Git Hooks

Git hooks are managed with [Husky](https://typicode.github.io/husky/).
They install automatically after `pnpm install` via the `prepare` script.
Hook scripts live in `.husky/`.

### Astro Dynamic Content

Articles are authored as Markdown under `src/content/articles/` and rendered by [Astro](https://astro.build) content collections.
Add a new `.md` file with the required frontmatter and it will be picked up at build time.
