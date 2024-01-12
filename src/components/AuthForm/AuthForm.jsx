import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [input, setInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleAuth = () => {
    console.log(input);
    if (!input.email || !input.password) {
      alert("Please fill all the fields");
      return;
    }

    navigate("/");
  };

  return (
    <>
      <Box boder={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image src="/logo.png" h={24} cursor={"pointer"} alt="instagram" />
          <Input
            placeholder="Số điện thoại, tên người dùng hoặc email"
            fontSize={14}
            type="email"
            value={input.email}
            onChange={(e) => setInput({ ...input, email: e.target.value })}
          />
          <Input
            placeholder="Mật khẩu"
            fontSize={14}
            type="password"
            value={input.password}
            onChange={(e) => setInput({ ...input, password: e.target.value })}
          />

          {isLogin ? (
            <Input
              placeholder="Xác nhận lại mật khẩu"
              fontSize={14}
              type="password"
              value={input.confirmPassword}
              onChange={(e) =>
                setInput({ ...input, confirmPassword: e.target.value })
              }
            />
          ) : null}

          <Button
            w={"full"}
            colorScheme="blue"
            size={"sm"}
            fontSize={14}
            onClick={handleAuth}
          >
            {isLogin ? "Đăng ký" : "Đăng nhập"}
          </Button>

          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            gap={1}
            w={"full"}
          >
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text mx={1} color={"white"}>
              Hoặc
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>

          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            cursor={"pointer"}
          >
            <Image src="/google.png" h={5} alt="google logo" />
            <Text mx="2" color={"blue.500"}>
              Đăng nhập với Google
            </Text>
          </Flex>
        </VStack>
      </Box>

      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Đã có tài khoản?" : "Chưa có tài khoản?"}
          </Box>
          <Box
            color={"blue.500"}
            cursor={"pointer"}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Đăng nhập" : "Đăng ký"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
