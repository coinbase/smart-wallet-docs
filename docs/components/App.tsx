"use client";

import type { ReactNode } from "react";

function App({ children }: { children: ReactNode }) {
  const isServer = typeof window === "undefined";
  if (isServer) {
    return null;
  }
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

export default App;
