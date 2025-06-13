import React from 'react';
import { Route, Routes } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PageError } from './elements/PageError.tsx';
import { Homepage } from './pages/Homepage.tsx';
import { ImageDetails } from './pages/ImageDetails.tsx';
import { ErrorBoundary } from './utils/ErrorBoundary.tsx';
import { GlobalStyle } from './styles.ts';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <div>
      <GlobalStyle />

      <ErrorBoundary
        fallback={(
          <PageError
            title="Well this is embarrassing..."
            message="Something went terribly wrong. Try reloading the page."
          />
        )}
      >
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="/details/:id" element={<ImageDetails />} />
          </Routes>
        </QueryClientProvider>
      </ErrorBoundary>
    </div>
  );
};
