import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
    coverImage: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

const tutorial = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/tutorial' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    coverImage: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

const projects = defineCollection({
  loader: file('src/content/projects/projects.json'),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(['active', 'participated', 'archived']),
    link: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { blog, tutorial, projects };
