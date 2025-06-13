import { useEffect, useState } from 'react';
import { GalleryItem } from '../types.ts';
import { createMockImage } from '../utils/createMockImage.ts';

export const useImageDetails = (imageId: number) => {
  const [isPending, setIsPending] = useState(true);

  const [data, setData] = useState<GalleryItem>();

  useEffect(() => {
    setTimeout(() => {
      setData(createMockImage(imageId));
      setIsPending(false);
    }, 200);
  }, [imageId]);

  return { data, isPending };
};
