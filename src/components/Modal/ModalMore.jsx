import { Box, Button, Flex, VStack } from "@chakra-ui/react";
import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/react";

const ModalMore = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const itemModal = [
    {
      text: "Báo cáo",
      color: "red",
      fontWeight: "bold",
    },
    {
      text: "Bỏ theo dõi",
      color: "red",
      fontWeight: "bold",
    },
    {
      text: "Thêm vào mục ưu thích",
      color: "white",
      fontWeight: "null",
    },
    {
      text: "Đi tới bài viết",
      color: "white",
      fontWeight: "null",
    },
    {
      text: "Chia sẻ lên...",
      color: "white",
      fontWeight: "null",
    },
    {
      text: "Sao chép liên kết",
      color: "white",
      fontWeight: "null",
    },
    {
      text: "Nhúng",
      color: "white",
      fontWeight: "null",
    },
    {
      text: "Giới thiệu về tài khoản",
      color: "white",
      fontWeight: "null",
    },
  ];

  return (
    <>
      <Button
        variant="link"
        _hover={{ textDecoration: "none" }}
        fontSize={16}
        onClick={onOpen}
      >
        •••
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            {itemModal.map((item, index) => {
              return (
                <Flex
                  key={index}
                  direction={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <VStack>
                    <Button
                      variant="link"
                      _hover={{ textDecoration: "none" }}
                      fontSize={18}
                      color={item.color}
                      fontWeight={item.fontWeight}
                    >
                      {item.text}
                    </Button>
                  </VStack>

                  <Flex
                    alignItems={"center"}
                    justifyContent={"center"}
                    my={4}
                    w={"full"}
                  >
                    <Box flex={2} h={"1px"} bg={"gray.400"} />
                  </Flex>
                </Flex>
              );
            })}
            <Flex alignItems={"center"} justifyContent={"center"}>
              <Button
                variant="link"
                _hover={{ textDecoration: "none" }}
                fontSize={18}
                color={"white"}
                fontWeight={"null"}
                onClick={onClose}
              >
                Huỷ
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalMore;
