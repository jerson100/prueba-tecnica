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
import { motion } from "framer-motion";
import {
  SignInGroupVariants,
  SignInVariantsContainer,
} from "./signIn.variants";

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
        <Stack
          as={motion.div}
          initial={"hidden"}
          animate={"visible"}
          variants={SignInVariantsContainer}
          spacing={8}
          mx={"auto"}
          w={"full"}
          maxW={"sm"}
          py={12}
          px={6}
        >
          <Stack align={"center"}>
            <Image
              as={motion.img}
              variants={SignInGroupVariants}
              maxWidth={"32"}
              src={Logo}
              alt="GuardiaApp Logo"
            />
            <Heading
              as={motion.h1}
              variants={SignInGroupVariants}
              fontSize={"4xl"}
              textAlign={"center"}
            >
              Iniciar Sesión
            </Heading>
            <Text
              as={motion.p}
              variants={SignInGroupVariants}
              fontSize={"lg"}
              color={"gray.600"}
              align={"center"}
            >
              <TypeAnimation
                // preRenderFirstString={true}
                sequence={[
                  500,
                  "Sé imparable, no inquebrantable. 💥",
                  2000,
                  "El éxito es la mejor venganza. 👊",
                  2000,
                  "Los sueños no expiran. 🌟",
                  2000,
                  "Transforma el dolor en poder. 💪",
                  2000,
                  "Perseverancia, tu gran aliada. 🚀",
                  2000,
                  "Rompe los límites, crea tu legado. 🌄",
                  2000,
                  "Miedo, solo una ilusión. Supéralo. 🦁",
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
