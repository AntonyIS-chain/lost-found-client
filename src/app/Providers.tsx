// app/providers.tsx
"use client";

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ApolloProvider } from "@apollo/client";
import { AuthProvider } from "./context/AuthContext";
import apolloClient from "./utils/apolloClient";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <ApolloProvider client={apolloClient}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </ApolloProvider>
    </AppRouterCacheProvider>
  );
}
