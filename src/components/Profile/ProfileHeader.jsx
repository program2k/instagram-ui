import {
  AvatarGroup,
  Flex,
  Avatar,
  VStack,
  Text,
  Button,
} from "@chakra-ui/react";

const ProfileHeader = () => {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
    >
      <AvatarGroup
        size={{ base: "xl", md: "2xl" }}
        justifySelf={"center"}
        alignSelf={"flex-start"}
        mx={"auto"}
      >
        <Avatar name="UserName" src="/profile.jpg" alt="UserName" />
      </AvatarGroup>

      <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
        <Flex
          gap={4}
          direction={{ base: "column", sm: "row" }}
          justifyContent={{ base: "center", sm: "flex-start" }}
          alignItems={"center"}
          w={"full"}
        >
          <Text fontSize={{ base: "sm", md: "lg" }}>UserName</Text>
          <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
            <Button
              bg={"white"}
              color={"black"}
              _hover={{ bg: "whiteAlpha.800" }}
              size={{ base: "xs", md: "sm" }}
            >
              Chỉnh sửa trang cá nhân
            </Button>
          </Flex>
        </Flex>
        <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
          <Text>
            <Text as="span" fontWeight={"bold"} mr={1}>
              4
            </Text>
            Bài viết
          </Text>

          <Text>
            <Text as="span" fontWeight={"bold"} mr={1}>
              4
            </Text>
            Người theo dõi
          </Text>

          <Text>
            Đang theo dõi{" "}
            <Text as="span" fontWeight={"bold"} mr={1}>
              149
            </Text>
            người dùng
          </Text>
        </Flex>
        <Flex alignItems={"center"} gap={4}>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            UserName
          </Text>
        </Flex>
        <Text fontSize={"sm"}>
          Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
          deserunt aute id consequat veniam incididunt duis in sint irure nisi.
          Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor
          esse quis.
        </Text>
      </VStack>
    </Flex>
  );
};

export default ProfileHeader;
