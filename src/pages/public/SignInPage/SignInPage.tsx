import { Helmet } from "react-helmet-async";
import SignInForm from "./components/SignInForm";
import {
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import Logo from "assets/images/logo.png";
import { TypeAnimation } from "react-type-animation";

const SignInPage = () => {
  return (
    <>
      <Helmet>
        <title>GuardiaApp | Login</title>
        <meta name="description" content="GuardiaApp Login" />
        <meta name="autor" content="Jerson Ramírez Ortiz" />
      </Helmet>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} w={"full"} maxW={"md"} py={12} px={6}>
          <Stack align={"center"}>
            <Image maxWidth={"32"} src={Logo} alt="GuardiaApp Logo" />
            <Heading as="h1" fontSize={"4xl"} textAlign={"center"}>
              Iniciar Sesión
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              <TypeAnimation
                // preRenderFirstString={true}
                sequence={[
                  500,
                  "Actitud positiva, resultados positivos. ✌️", // after 1000ms, this string will be rendered
                  2000,
                  "La programación es el futuro. ✌️",
                  2000,
                  "El futuro es ahora. ✌️",
                  2000,
                  "Si lo puedes imaginar, lo puedes programar. ✌️", // initially rendered starting point
                  500,
                ]}
                speed={75}
                repeat={Infinity}
              />
            </Text>
          </Stack>
          <SignInForm />
        </Stack>
      </Flex>
    </>
  );
};

export default SignInPage;
