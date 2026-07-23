import { Button, Center, Heading, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

import { MESSAGES } from "@/constants/messages";
import { ROUTES } from "@/constants/routes";

export default function NotFound() {
  return (
    <Center flex="1" minH="60vh" px="6">
      <VStack gap="4" textAlign="center">
        <Heading size="4xl" color="fg.muted">
          {MESSAGES.notFound.code}
        </Heading>
        <Text color="fg.muted">{MESSAGES.notFound.description}</Text>
        <Button asChild colorPalette="teal" variant="outline">
          <Link href={ROUTES.home}>{MESSAGES.notFound.backHome}</Link>
        </Button>
      </VStack>
    </Center>
  );
}
