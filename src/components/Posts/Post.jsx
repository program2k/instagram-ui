import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import { Box, Image } from "@chakra-ui/react";

const Post = ({ userName, avatar, img }) => {
  return (
    <>
      <PostHeader userName={userName} avatar={avatar} />

      <Box my={2} borderRadius={4} overflow={"hidden"}>
        <Image src={img} alt={userName} />
      </Box>

      <PostFooter userName={userName} />
    </>
  );
};

export default Post;
