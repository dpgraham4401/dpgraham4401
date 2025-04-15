/**
 * See Astros docs on Content Collections https://docs.astro.build/en/guides/content-collections/
 */

import {glob} from "astro/loaders";
import {defineCollection, z} from "astro:content";

const blog = defineCollection({
  loader: glob({pattern: "**/*.md", base: "src/content/blog"}),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    timestamp: z.date().optional(),
    tags: z.array(z.string()).optional(),
    published: z.boolean().optional(),
    isFeatured: z.boolean().optional(),
  })
});

export const collections = {blog};
