import { Avatar, Box, Flex } from "@chakra-ui/react";
import ModalMore from "../Modal/ModalMore";

const PostHeader = ({ userName, avatar }) => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar src={avatar} alt={userName} size={"sm"} />
        <Flex fontSize={12} fontWeight={"bold"} gap={2} />
        {userName}
        <Box color={"gray.500"}>• 1 giờ</Box>
      </Flex>
      <ModalMore />
    </Flex>
  );
};

export default PostHeader;
