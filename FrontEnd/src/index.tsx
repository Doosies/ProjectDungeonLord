import React from 'react';
import { createRoot } from 'react-dom/client';
import '@src/styles/global.css';
import App from './App';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </RecoilRoot>
  </React.StrictMode>,
);
