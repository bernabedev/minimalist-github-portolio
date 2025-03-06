import { defineCollection, z } from 'astro:content'

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string().transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((val) => (val ? new Date(val) : undefined)),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.object({
      name: z.string(),
      avatar: z.string().optional()
    }),
    category: z.string(),
    lang: z.enum(['en', 'es'])
  })
})

export const collections = {
  blog: blogCollection
}
