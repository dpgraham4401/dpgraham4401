/**
 * See Astros docs on Content Collections https://docs.astro.build/en/guides/content-collections/
 */

import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    timestamp: z.date().optional(),
    tags: z.array(z.string()).optional(),
    published: z.boolean().optional()
  })
});

export const collections = { blog };

// @ts-expect-error -- allows us to type the blog collection
export type Blog = z.infer<typeof blog.schema>;
