import { Container } from "@chakra-ui/react";
import Post from "./Post";

const Posts = () => {
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      <Post userName="burakokmezz" avatar="/img1.png" img="/img1.png" />
      <Post userName="josh" avatar="/img2.png" img="/img2.png" />
      <Post userName="janedoe" avatar="/img3.png" img="/img3.png" />
      <Post userName="johndoe" avatar="/img4.png" img="/img4.png" />
    </Container>
  );
};

export default Posts;
