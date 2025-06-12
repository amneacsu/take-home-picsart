import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router';
import { App } from './App.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Fatal: No DOM root!');
const root = createRoot(rootElement);

root.render(
  <HashRouter>
    <App />
  </HashRouter>,
);
