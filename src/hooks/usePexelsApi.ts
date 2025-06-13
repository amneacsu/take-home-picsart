import { useCallback } from 'react';

export const usePexelsApi = () => {
  return useCallback(async (url: string) => {
    const response = await fetch(url, {
      headers: {
        Authorization: process.env.PEXELS_API_KEY ?? '',
      },
    });

    return response.status === 404
      ? null
      : response.json();
  }, []);
};
