import { ReactNode } from "react";
import { Box, Flex, FlexProps, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { NavLink } from "react-router-dom";

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactNode;
  to: string;
}

const NavItem = ({ to, icon, children, ...rest }: NavItemProps) => {
  return (
    <Box
      as={NavLink}
      to={to}
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      {({ isActive }: { isActive: boolean }) => (
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          bg={isActive ? "cyan.400" : "transparent"}
          color={isActive ? "white" : ""}
          _hover={{
            bg: "cyan.400",
            color: "white",
          }}
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: "white",
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      )}
    </Box>
  );
};

export default NavItem;
