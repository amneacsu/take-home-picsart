import React from 'react';
import * as S from './Spinner.styles.ts';

export const Spinner = () => {
  return (
    <S.Spinner
      aria-live="polite"
      role="status"
    />
  );
};
