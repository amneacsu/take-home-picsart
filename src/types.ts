import z from 'zod';

export const galleryItemSchema = z.object({
  id: z.number(),
  width: z.number(),
  height: z.number(),
  alt: z.string(),
  photographer: z.string(),
  src: z.object({
    original: z.string().url(),
    large: z.string().url(),
  }),
  avg_color: z.string(),
});

export const gallerySchema = z.object({
  photos: z.array(galleryItemSchema),
  next_page: z.string().optional(),
});

export type GalleryItem = z.infer<typeof galleryItemSchema>;
export type GalleryList = z.infer<typeof gallerySchema>;
