import React from 'react';
import { Route, Routes } from 'react-router';
import { Homepage } from './pages/Homepage.tsx';
import { ImageDetails } from './pages/ImageDetails.tsx';
import { GlobalStyle } from './styles.ts';

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/details/:id" element={<ImageDetails />} />
      </Routes>
    </div>
  );
};
