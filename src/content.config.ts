/**
 * See Astros docs on Content Collections https://docs.astro.build/en/guides/content-collections/
 */

import {glob} from "astro/loaders";
import {defineCollection, z} from "astro:content";

const blogs = defineCollection({
  loader: glob({pattern: "**/*.md", base: "src/content/blogs"}),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    timestamp: z.date().optional(),
    tags: z.array(z.string()).optional(),
    published: z.boolean().optional(),
    isFeatured: z.boolean().optional(),
    readTime: z.string().optional(),
  })
});

const projects = defineCollection({
  loader: glob({pattern: "**/*.md", base: "src/content/projects"}),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
    timestamp: z.date().optional(),
    published: z.boolean().optional(),
    isFeatured: z.boolean().optional(),
    readTime: z.string().optional(),
  })
});

export const collections = {blogs, projects};
