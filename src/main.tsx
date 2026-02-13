import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.tsx';
import 'modern-normalize';
import './global.css';
import TestComponent from './components/TestComponent.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
  <React.StrictMode>
    <TestComponent />
    <App />
  </React.StrictMode>
);
