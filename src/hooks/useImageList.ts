import { useEffect, useState } from 'react';
import { GalleryItem } from '../types.ts';
import { createMockImage } from '../utils/createMockImage.ts';

export const useImageList = (query: string | null) => {
  const [isFetching, setIsFetching] = useState(true);
  const [data, setData] = useState<GalleryItem[]>([]);
  console.debug(query);

  useEffect(() => {
    setTimeout(() => {
      const images: GalleryItem[] = [];

      while (images.length < 50000) {
        images.push(createMockImage(images.length));
      }

      setIsFetching(false);
      setData((prev) => [...prev, ...images]);
    }, 200);
  }, []);

  return { data, isFetching };
};
