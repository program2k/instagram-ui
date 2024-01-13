import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { CommentLogo, NotificationsLogo, UnlikeLogo } from "../../assets/Logo";
import { FaRegHeart } from "react-icons/fa6";

const PostFooter = ({ userName, isProfile }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(100);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes + 1);
    } else {
      setLiked(true);
      setLikes(likes - 1);
    }
  };

  return (
    <Box my={10} mt={"auto"}>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={4}>
        <Box cursor={"pointer"} onClick={handleLike}>
          {!liked ? <FaRegHeart size={25} /> : <UnlikeLogo />}
        </Box>

        <Box>
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={"sm"}>
        {likes} lượt thích
      </Text>

      {!isProfile && (
        <>
          <Text fontWeight={700} fontSize={"sm"}>
            {userName}{" "}
            <Text as="span" fontWeight={400}>
              Cảm thấy tuyệt vời 🤩
            </Text>
          </Text>
          <Text fontSize={"sm"} color={"gray"} cursor={"pointer"}>
            Xem tất cả 30 bình luận
          </Text>
        </>
      )}

      <Flex justifyContent={"center"} alignItems={"center"} gap={2} w={"full"}>
        <InputGroup>
          <Input
            variant={"flushed"}
            placeholder="Thêm bình luận..."
            fontSize={14}
          />
          <InputRightElement>
            <Button
              variant={"white"}
              fontSize={14}
              color={"blue.500"}
              fontWeight={600}
              _hover={{ color: "white" }}
              bg={"transparent"}
            >
              Đăng
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Box>
  );
};

export default PostFooter;
