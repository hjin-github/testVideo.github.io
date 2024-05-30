import GlobalStyle from '@constant/theme/globalStyles';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import { Outlet } from 'react-router-dom';

const queryClient = new QueryClient();

const Layout: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <GlobalStyle />
      <Outlet />
    </QueryClientProvider>
  );
};

export default Layout;
