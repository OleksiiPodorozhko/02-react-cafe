import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App.tsx';
import 'modern-normalize';
// import './global.css';
// import TestComponent from './components/TestComponent.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
