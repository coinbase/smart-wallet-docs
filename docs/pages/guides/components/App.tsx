'use client';

import type { ReactNode } from 'react';


export default function App({ children }: { children: ReactNode }) {
  const isServer = typeof window === 'undefined';
  if (isServer) {
    return null;
  }
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}