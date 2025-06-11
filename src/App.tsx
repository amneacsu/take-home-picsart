import React from 'react';
import { Homepage } from './pages/Homepage';
import { GlobalStyle } from './styles';

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Homepage />
    </div>
  );
};
