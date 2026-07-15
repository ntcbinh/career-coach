"use client";

import { ChakraProvider } from "./ChakraProvider";

type Props = {
  children: React.ReactNode;
};

export function AppProvider({ children }: Props) {
  return (
    <ChakraProvider>
      {children}
    </ChakraProvider>
  );
}
