/**
 * See Astros docs on Content Collections https://docs.astro.build/en/guides/content-collections/
 */

import { glob } from "astro/loaders";
// @ts-ignore - not sure why this is giving warning, not causing problems
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string()
  })
});


type Blog = z.infer<typeof blog.schema>;

export type { Blog };

export const collections = { blog };