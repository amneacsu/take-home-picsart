import { useQuery } from '@tanstack/react-query';
import { usePexelsApi } from './usePexelsApi.ts';
import { GalleryItem } from '../types.ts';

export const useImageDetails = (imageId: number) => {
  const fetchFn = usePexelsApi();

  return useQuery<GalleryItem>({
    queryKey: ['details', imageId],
    queryFn: async () => {
      return fetchFn(`https://api.pexels.com/v1/photos/${imageId}`);
    },
  });
};
