/**
 * See Astros docs on Content Collections https://docs.astro.build/en/guides/content-collections/
 */

import {glob} from 'astro/loaders';
import {defineCollection, z} from 'astro:content';

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/pages/blog" }),
  schema: z.object({
      title: z.string(),
      description: z.string(),
  })
});

export const collections = { blog };