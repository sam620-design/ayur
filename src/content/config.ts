import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    image: z.string(),
    category: z.enum(['health', 'beauty', 'digestion', 'immunity', 'hair-care']),
    featured: z.boolean().optional().default(false)
  })
});

export const collections = {
  posts: postsCollection
};