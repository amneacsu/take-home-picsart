import { useInfiniteQuery } from '@tanstack/react-query';
import { usePexelsApi } from './usePexelsApi.ts';
import { GalleryList } from '../types.ts';

const itemsPerPage = 10;

const getEndpoint = (query: string | null) => {
  const root = 'https://api.pexels.com/v1';
  return query
    ? `${root}/search?query=${query}&per_page=${itemsPerPage}`
    : `${root}/curated?per_page=${itemsPerPage}`;
};

const getQueryKey = (query: string | null) => {
  return query ? ['search', query] : ['curated'];
};

export const useImageList = (query: string | null) => {
  const fetchFn = usePexelsApi();

  return useInfiniteQuery<GalleryList>({
    queryKey: getQueryKey(query),
    queryFn: async ({ pageParam }) => {
      return fetchFn(pageParam as string);
    },
    getNextPageParam: (lastPage) => lastPage.next_page,
    initialPageParam: getEndpoint(query),
  });
};
