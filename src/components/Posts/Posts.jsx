import {
  Box,
  Container,
  Flex,
  Skeleton,
  SkeletonCircle,
  VStack,
} from "@chakra-ui/react";
import Post from "./Post";
import { useEffect, useState } from "react";

const Posts = () => {
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsloading(false);
    }, 2000);
  }, []);

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading && (
        <VStack gap={4} alignItems={"flex-start"} mb={10}>
          <Flex gap={2}>
            <SkeletonCircle size={10} />
            <VStack gap={2} alignItems={"flex-start"}>
              <Skeleton height="10px" w={200} />
              <Skeleton height="10px" w={150} />
            </VStack>
          </Flex>
          <Skeleton w={"full"}>
            <Box h={"500px"}>contens wrapped</Box>
          </Skeleton>
        </VStack>
      )}

      {!isLoading && (
        <>
          <Post userName="burakokmezz" avatar="/img1.png" img="/img1.png" />
          <Post userName="josh" avatar="/img2.png" img="/img2.png" />
          <Post userName="janedoe" avatar="/img3.png" img="/img3.png" />
          <Post userName="johndoe" avatar="/img4.png" img="/img4.png" />
        </>
      )}
    </Container>
  );
};

export default Posts;
