import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const texts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/texts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
  }),
});

export const collections = { texts };
