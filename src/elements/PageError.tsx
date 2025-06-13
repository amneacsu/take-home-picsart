import React from 'react';
import * as S from './PageError.styles.ts';

interface PageErrorProps {
  title: string;
  message?: string;
}

export const PageError = ({
  title,
  message,
}: PageErrorProps) => {
  return (
    <S.PageError>
      <h1>{title}</h1>
      {message && (
        <p>
          {message}
        </p>
      )}
    </S.PageError>
  );
};
