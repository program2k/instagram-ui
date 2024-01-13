import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react";
import { useState } from "react";

const SuggestUser = ({ name, followers, avatar }) => {
  const [isFollowed, setIsFollowed] = useState(false);
  const handleFollowed = () => {
    if (!isFollowed) {
      setIsFollowed(true);
    } else {
      setIsFollowed(false);
    }
  };

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"}>
        <Avatar name={name} src={avatar} size={"sm"} />
        <VStack spacing={2} alignItems={"flex-start"} pl={4}>
          <Box fontSize={12} fontWeight={"bold"}>
            {name}
          </Box>
          <Box fontSize={11} color={"gray.500"}>
            {followers} người theo dõi
          </Box>
        </VStack>
      </Flex>
      <Button
        variant={"White"}
        p={0}
        fontSize={12}
        color={"blue.500"}
        onClick={handleFollowed}
        h={"max-content"}
      >
        {isFollowed ? "Bỏ theo dõi" : "Theo dõi"}
      </Button>
    </Flex>
  );
};

export default SuggestUser;
