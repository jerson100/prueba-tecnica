import {
  Box,
  BoxProps,
  CloseButton,
  Flex,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import NavItem from "./NavItem";
import { IconType } from "react-icons";
import { FiHome } from "react-icons/fi";
import Logo from "assets/images/logo.png";
import { motion } from "framer-motion";
import { SidebarVariants } from "../mainlayout.variants";

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

interface LinkItemProps {
  name: string;
  icon: IconType;
}

const LinkItems: Array<LinkItemProps> = [{ name: "Guardias", icon: FiHome }];

const Sidebar = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Box as={motion.div} variants={SidebarVariants}>
          <Image src={Logo} alt="Logo" maxWidth={"full"} width={"28"} />
        </Box>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Box as={motion.div} variants={SidebarVariants}>
        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar;
