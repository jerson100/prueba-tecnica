import { Alert, AlertIcon, AlertTitle, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Flex height={"100%"} alignItems={"center"} justifyContent={"center"}>
      <Alert maxW={"md"} flexDir={"column"} rowGap={4}>
        <AlertIcon />
        <AlertTitle mr={2}>Página no encontrada</AlertTitle>
        <AlertTitle mr={2}>404</AlertTitle>
        <Button as={Link} to="/">
          Ir a guardias
        </Button>
      </Alert>
    </Flex>
  );
};

export default NotFound;
