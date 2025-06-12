import { useState } from 'react';
import { GalleryItem } from '../types.ts';
import { createMockImage } from '../utils/createMockImage.ts';

export const useImageList = () => {
  const [data] = useState(() => {
    const images: GalleryItem[] = [];

    while (images.length < 50000) {
      images.push(createMockImage(images.length));
    }

    return images;
  });

  return data;
};
