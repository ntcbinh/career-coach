"use client";

import { EmotionRegistry } from "@/lib/emotion/EmotionRegistry";
import {
  ChakraProvider as Provider,
  defaultSystem,
} from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

export function ChakraProvider({ children }: Props) {
  return (
    <EmotionRegistry>
      <Provider value={defaultSystem}>
        {children}
      </Provider>
    </EmotionRegistry>
  );
}
