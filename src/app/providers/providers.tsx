"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { useEffect, useState } from "react";

export function Providers({ children }: ThemeProviderProps) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient ? (
        <NextThemesProvider attribute="class">{children}</NextThemesProvider>
      ) : (
        <></>
      )}
    </>
  );
}