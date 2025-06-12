import { useCallback } from 'react';
import { useSearchParams } from 'react-router';

export const useSearchQuery = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const handleChangeQuery = useCallback((newQuery: string) => {
    setSearchParams(newQuery ? { query: newQuery } : undefined);
  }, [setSearchParams]);

  return [query, handleChangeQuery] as const;
};
