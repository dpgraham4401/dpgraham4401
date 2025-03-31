/**
 * See Astros docs on Content Collections https://docs.astro.build/en/guides/content-collections/
 */

import { glob } from "astro/loaders";
// @ts-ignore
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    timestamp: z.date().optional(),
    tags: z.array(z.string()).optional(),
    published: z.boolean().optional()
  })
});


type Blog = z.infer<typeof blog.schema>;

export type { Blog };

export const collections = { blog };