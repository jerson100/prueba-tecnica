import { Box, Flex } from "@chakra-ui/react";
import SignInForm from "./components/SignInForm";
import { Helmet } from "react-helmet-async";

const SignInPage = () => {
  return (
    <>
      <Helmet>
        <title>GuardiaApp | Login</title>
        <meta name="description" content="GuardiaApp Login" />
        <meta name="autor" content="Jerson Ramírez Ortiz" />
      </Helmet>
      <Flex bg="gray.100" align="center" justify="center" h="100vh">
        <Box bg="white" p={6} rounded="md" w={64}>
          <SignInForm />
        </Box>
      </Flex>
    </>
  );
};

export default SignInPage;
