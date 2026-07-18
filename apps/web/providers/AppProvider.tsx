"use client";

import { ChakraProvider } from "./ChakraProvider";
import { QueryProvider } from "./QueryProvider";

type Props = {
  children: React.ReactNode;
};

export function AppProvider({ children }: Props) {
  return (
    <ChakraProvider>
      <QueryProvider>
        {children}
      </QueryProvider>
    </ChakraProvider>
  );
}
