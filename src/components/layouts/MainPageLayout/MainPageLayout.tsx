import { FC, PropsWithChildren } from "react";
import {
  Box,
  Drawer,
  DrawerContent,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import HeaderNav from "./components/HeaderNav";
import { motion } from "framer-motion";
import { MainLayoutContainerVariants } from "./mainlayout.variants";

const MainPageLayout: FC<PropsWithChildren> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      as={motion.div}
      initial="hidden"
      animate="visible"
      variants={MainLayoutContainerVariants}
      minH="100vh"
      bg={useColorModeValue("gray.10", "gray.900")}
    >
      <Sidebar
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <Sidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <HeaderNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
};

export default MainPageLayout;
