import { useCallback, useEffect, useState } from 'react';
import { GalleryItem } from '../types.ts';
import { createMockImage } from '../utils/createMockImage.ts';

export const useImageList = (query: string | null) => {
  const [isFetching, setIsFetching] = useState(true);
  const [data, setData] = useState<GalleryItem[]>([]);
  console.debug(query);

  const fetchNextPage = useCallback(() => {
    setIsFetching(true);

    setTimeout(() => {
      const images: GalleryItem[] = [];

      while (images.length < 50) {
        images.push(createMockImage(images.length));
      }

      setIsFetching(false);
      setData((prev) => [...prev, ...images]);
    }, 200);
  }, []);

  useEffect(() => {
    fetchNextPage();
  }, [fetchNextPage]);

  return { data, isFetching, fetchNextPage };
};
