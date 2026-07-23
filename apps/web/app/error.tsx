"use client";

import { Button, Center, Heading, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";

import { MESSAGES } from "@/constants/messages";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      console.error(error);
    }
  }, [error]);

  return (
    <Center flex="1" minH="60vh" px="6">
      <VStack gap="4" textAlign="center" maxW="md">
        <Heading size="lg">{MESSAGES.error.title}</Heading>
        <Text color="fg.muted">{MESSAGES.error.description}</Text>
        <Button colorPalette="teal" onClick={reset}>
          {MESSAGES.error.retry}
        </Button>
      </VStack>
    </Center>
  );
}
