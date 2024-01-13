import { Avatar, Flex, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const SuggestHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name="UserName" size={"sm"} src="/profile.jpg" />
        <Text fontSize={14} fontWeight={"md"}>
          UserName
        </Text>
      </Flex>
      <Link
        as={RouterLink}
        to={"/auth"}
        fontSize={14}
        color={"blue.400"}
        _hover={{ textDecoration: "none" }}
      >
        chuyển
      </Link>
    </Flex>
  );
};

export default SuggestHeader;
