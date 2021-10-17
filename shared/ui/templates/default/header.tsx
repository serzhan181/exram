import { Flex, Divider, IconButton, Box } from "@chakra-ui/react";
import { MessageSquare, User, Settings } from "react-feather";

export function Header() {
  return (
    <Flex
      pos="fixed"
      top="0"
      bg="yellow.300"
      alignItems="center"
      w="full"
      justifyContent="center"
      h="14"
    >
      <Flex w="container.xl" justifyContent="space-between">
        <Flex w="50%"></Flex>
        <Flex style={{ gap: ".3rem" }} w="50%" direction="row-reverse">
          <IconButton aria-label="messages" icon={<MessageSquare />} />
          <IconButton aria-label="Profile" icon={<User />} />
          <IconButton aria-label="settings" icon={<Settings />} />
        </Flex>
      </Flex>
    </Flex>
  );
}
