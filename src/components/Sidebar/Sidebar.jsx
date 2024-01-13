import { Avatar, Box, Flex, Link, Tooltip } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  InstagramLogo,
  InstagramMobileLogo,
  ReelsLogo,
} from "../../assets/Logo";
import { AiOutlineCompass } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { CiHeart, CiCirclePlus } from "react-icons/ci";
import { BiLogOut } from "react-icons/bi";
import { TbHomeMove } from "react-icons/tb";

const Sidebar = () => {
  const sidebarItems = [
    {
      icon: <TbHomeMove size={25} />,
      text: "Trang chủ",
      link: "/",
    },
    {
      icon: <IoSearchOutline size={25} />,
      text: "Tìm kiếm",
    },
    {
      icon: <AiOutlineCompass size={25} />,
      text: "Khám phá",
      link: "/explore",
    },
    {
      icon: <ReelsLogo />,
      text: "Reels",
      link: "/reels",
    },
    {
      icon: <RiMessengerLine size={25} />,
      text: "Tin nhắn",
      link: "/direct/inbox",
    },
    {
      icon: <CiHeart size={25} />,
      text: "Thông báo",
    },
    {
      icon: <CiCirclePlus size={25} />,
      text: "Tạo",
    },
    {
      icon: <Avatar size={"sm"} name="UserName" src="/profile.jpg" />,
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
        <Tooltip
          hasArrow
          label={"Đăng xuất"}
          placement="right"
          ml={1}
          openDelay={500}
          display={{ base: "block", md: "none" }}
        >
          <Link
            display={"flex"}
            to={"/auth"}
            as={RouterLink}
            alignItems={"center"}
            gap={4}
            _hover={{
              bg: "whiteAlpha.400",
            }}
            borderRadius={6}
            p={2}
            w={"full"}
            mt={"auto"}
          >
            <BiLogOut size={25} />
            <Box display={{ base: "none", md: "block" }}>Đăng xuất</Box>
          </Link>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default Sidebar;
