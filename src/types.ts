import z from 'zod';

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const galleryItemSchema = z.object({
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

export type GalleryItem = z.infer<typeof galleryItemSchema>;
