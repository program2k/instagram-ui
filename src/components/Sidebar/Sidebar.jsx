import { Avatar, Box, Flex, Link, Tooltip } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  CreatePostLogo,
  InstagramLogo,
  InstagramMobileLogo,
  NotificationsLogo,
  SearchLogo,
} from "../../assets/Logo";
import { AiFillHome } from "react-icons/ai";

const Sidebar = () => {
  const sidebarItems = [
    {
      icon: <AiFillHome />,
      text: "Trang chủ",
      link: "/",
    },
    {
      icon: <SearchLogo />,
      text: "Tìm kiếm",
    },
    {
      icon: <NotificationsLogo />,
      text: "Thông báo",
    },
    {
      icon: <CreatePostLogo />,
      text: "Tạo",
    },
    {
      icon: <Avatar size={"sm"} name="Burak Orkmez" src="/profilepic.png" />,
      text: "Trang cá nhân",
      link: "/profile",
    },
  ];

  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction={"column"} gap={10} w="full" height={"full"}>
        <Link
          to={"/"}
          as={RouterLink}
          pl={2}
          display={{ base: "none", md: "block" }}
          cursor={"pointer"}
        >
          <InstagramLogo />
        </Link>

        <Link
          to={"/"}
          as={RouterLink}
          pl={2}
          display={{ base: "block", md: "none" }}
          _hover={{
            bg: "whiteAlpha.200",
          }}
          w={10}
          cursor={"pointer"}
        >
          <InstagramMobileLogo />
        </Link>

        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          {sidebarItems.map((item, index) => (
            <Tooltip
              key={index}
              hasArrow
              label={item.text}
              placement="right"
              ml={1}
              openDelay={500}
              display={{ base: "block", md: "none" }}
            >
              <Link
                display={"flex"}
                to={item.link || null}
                as={RouterLink}
                alignItems={"center"}
                gap={4}
                _hover={{
                  bg: "whiteAlpha.400",
                }}
                borderRadius={6}
                p={2}
                w={"full"}
              >
                {item.icon}
                <Box display={{ base: "none", md: "block" }}>{item.text}</Box>
              </Link>
            </Tooltip>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Sidebar;
