import { Avatar, Flex, Text } from "@chakra-ui/react";

const Comment = ({ createAt, userName, profilePic, text }) => {
  return (
    <Flex gap={4}>
      <Avatar src={profilePic} name={userName} size={"sm"} />
      <Flex direction={"column"}>
        <Flex gap={2}>
          <Text fontWeight={"bold"} fontSize={12}>
            {userName}
          </Text>
          <Text fontSize={14}>{text}</Text>
        </Flex>
        <Text fontSize={12} color={"gray"}>
          {createAt}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Comment;
