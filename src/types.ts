import z from 'zod';

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const galleryItemSchema = z.object({
  id: z.number(),
  width: z.number(),
  height: z.number(),
});

export type GalleryItem = z.infer<typeof galleryItemSchema>;
