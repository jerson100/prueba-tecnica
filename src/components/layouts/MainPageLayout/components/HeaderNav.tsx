import ThemeSwitcher from "@/components/common/ThemeSwitcher";
import useAuthStore from "@/stores/auth.store";
import {
  Avatar,
  Box,
  Flex,
  FlexProps,
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiChevronDown, FiMenu } from "react-icons/fi";
import DefaultProfileImage from "@/assets/images/default-profile.jpg";

interface HeaderNavProps extends FlexProps {
  onOpen: () => void;
}

const HeaderNav = ({ onOpen, ...rest }: HeaderNavProps) => {
  const logout = useAuthStore((state) => state.logout);
  const nom_agente = useAuthStore((state) => state.user?.nom_agente);
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      pos={"fixed"}
      w={{ base: "full", md: `calc(100% - 240px)` }}
      height="20"
      alignItems="center"
      zIndex={1}
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between" }}
      {...rest}
    >
      <IconButton
        display={{ base: "flex" }}
        visibility={{ base: "visible", md: "hidden" }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text>
        By
        <Link
          href="https://jersonramirez.studio"
          isExternal
          color="blue.500"
          mx="2"
          fontWeight={"bold"}
        >
          Jerson Ramírez Ortiz
        </Link>
        with ❤️
      </Text>
      {/* 
      <Text
        display={{ base: "flex", md: "none" }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Logo
      </Text> */}

      <HStack spacing={{ base: "0", md: "6" }}>
        <ThemeSwitcher />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack>
                <Avatar size={"sm"} src={DefaultProfileImage} />
                <VStack
                  display={{ base: "none", md: "flex" }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">{nom_agente}</Text>
                  <Text fontSize="xs" color="gray.600">
                    Administrador
                  </Text>
                </VStack>
                <Box display={{ base: "none", md: "flex" }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue("white", "gray.900")}
              borderColor={useColorModeValue("gray.200", "gray.700")}
            >
              <MenuItem>Perfil</MenuItem>
              <MenuDivider />
              <MenuItem onClick={logout}>Cerrar Sesión</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

export default HeaderNav;
