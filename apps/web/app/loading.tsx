import { Center, Spinner, Text, VStack } from "@chakra-ui/react";

import { MESSAGES } from "@/constants/messages";

export default function Loading() {
  return (
    <Center flex="1" minH="60vh">
      <VStack gap="4">
        <Spinner size="xl" color="teal.500" borderWidth="4px" />
        <Text color="fg.muted">{MESSAGES.loading.label}</Text>
      </VStack>
    </Center>
  );
}
