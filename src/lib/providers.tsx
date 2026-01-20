"use client";

import { PropsWithChildren, ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { ErrorBoundary } from "react-error-boundary";

import { QueryProvider } from "@/lib/query-provider";
import { FiltersProvider } from "@/providers/filters";

interface ProvidersProps {
  children: PropsWithChildren<ReactNode>;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ErrorBoundary
      fallbackRender={({ error, resetErrorBoundary }) => (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
          <h1 className="text-xl font-bold mb-4">An error occurred: {error.message}</h1>
          <button
            onClick={resetErrorBoundary}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg"
          >
            Return home
          </button>
        </div>
      )}
    >
      <QueryProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <FiltersProvider>{children}</FiltersProvider>
        </ThemeProvider>
      </QueryProvider>
    </ErrorBoundary>
  );
}
