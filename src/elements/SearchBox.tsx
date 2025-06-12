import React, { useCallback, useState } from 'react';
import * as S from './SearchBox.styles.ts';

interface SearchBoxProps {
  query: string | null;
  onChangeQuery: (newQuery: string) => void;
};

export const SearchBox = ({
  query,
  onChangeQuery,
}: SearchBoxProps) => {
  const [queryInternal, setQueryInternal] = useState<string>();

  const handleSearchChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setQueryInternal(event.currentTarget.value);
  }, []);

  const handleKeyUp = useCallback((event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') return;
    const input = event.currentTarget;
    onChangeQuery(input.value);
    input.blur();
  }, [onChangeQuery]);

  return (
    <S.SearchBox
      type="text"
      placeholder="Enter topic to search for..."
      value={queryInternal ?? query ?? ''}
      onChange={handleSearchChange}
      onKeyUp={handleKeyUp}
    />
  );
};
