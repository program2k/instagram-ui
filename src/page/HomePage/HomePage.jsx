import { Box, Container, Flex } from "@chakra-ui/react";
import Posts from "../../components/Posts/Posts";
import SuggestUsers from "../../components/SuggestUsers/SuggestUsers";

const HomePage = () => {
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={20}>
        <Box flex={2} py={10}>
          <Posts />
        </Box>

        <Box
          flex={3}
          mr={20}
          display={{ base: "none", lg: "block" }}
          maxW={"300px"}
        >
          <SuggestUsers />
        </Box>
      </Flex>
    </Container>
  );
};

export default HomePage;
