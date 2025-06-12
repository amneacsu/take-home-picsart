import { useMemo } from 'react';
import { GalleryItem } from '../types.ts';

export const useMasonryLayout = (data: GalleryItem[], cols: number) => {
  const width = 300;

  return useMemo(() => {
    const buckets = (new Array(cols)).fill(0);
    return data.map((item) => {
      const smallestBucketIndex = buckets.indexOf(Math.min(...buckets));
      const ratio = item.height / item.width;
      const height = width * ratio;

      const newItem = {
        image: item,
        rect: {
          width,
          height,
          x: smallestBucketIndex * width,
          y: buckets[smallestBucketIndex],
        },
      };
      buckets[smallestBucketIndex] += height;

      return newItem;
    });
  }, [data, cols]);
};
