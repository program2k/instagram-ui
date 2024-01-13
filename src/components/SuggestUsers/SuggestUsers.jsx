import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import SuggestHeader from "./SuggestHeader";
import SuggestUser from "./SuggestUser";

const SuggestUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestHeader />

      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={14} fontWeight={"sm"} color={"gray"}>
          Gợi ý cho bạn
        </Text>

        <Text
          fontSize={12}
          p={0}
          fontWeight={"bold"}
          cursor={"pointer"}
          _hover={{ color: "gray" }}
        >
          Xem tất cả
        </Text>
      </Flex>

      <SuggestUser name="burakokmezz" followers={1392} avatar="/img1.png" />
      <SuggestUser name="josh" followers={1392} avatar="/img2.png" />
      <SuggestUser name="janedoe" followers={1392} avatar="/img3.png" />
      <SuggestUser name="johndoe" followers={1392} avatar="/img4.png" />

      <Box fontSize={12} color={"gray.500"} mt={5} w={"90%"}>
        <Link>Giới thiệu</Link>
        {" • "}
        <Link>Trợ giúp</Link>
        {" • "}
        <Link>Báo chí</Link>
        {" • "}
        <Link>API</Link>
        {" • "}
        <Link>Việc làm</Link>
        {" • "}
        <Link>Quyền riêng tư</Link>
        {" • "}
        <Link>Điều khoản</Link>
        {" • "}
        <Link>Vị trí</Link>
        {" • "}
        <Link>Ngôn ngữ</Link>
        {" • "}
        <Link>Meta đã xác minh</Link>
      </Box>
    </VStack>
  );
};

export default SuggestUsers;
