import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import AuthProvider from './contexts/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient()
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
