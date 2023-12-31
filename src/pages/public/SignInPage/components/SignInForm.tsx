import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  useColorModeValue,
  FormErrorMessage,
  Flex,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import { SignInSchema } from "../SignInSchema.validation";
import useLogin from "@/hooks/useLogin";
import InputPassword from "@/components/common/inputs/InputPassword";
import { motion } from "framer-motion";
import {
  FormVariantsContainer,
  SignInGroupYVariants,
} from "../signIn.variants";
import AuthorText from "@/components/common/AuthorText";

const INITIAL_VALUES = {
  username: "",
  password: "",
};

export default function SignInForm2() {
  const { login, isPending } = useLogin();
  return (
    <Box
      rounded={"lg"}
      bg={useColorModeValue("white", "gray.700")}
      boxShadow={"lg"}
      p={8}
      as={motion.div}
      variants={FormVariantsContainer}
    >
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={SignInSchema}
        onSubmit={login}
      >
        {({ handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl
                isRequired
                isInvalid={!!errors.username && touched.username}
              >
                <FormLabel
                  as={motion.label}
                  variants={SignInGroupYVariants}
                  custom={-1}
                  htmlFor="username"
                >
                  Usuario
                </FormLabel>
                <Box
                  as={motion.div}
                  variants={SignInGroupYVariants}
                  custom={-1}
                >
                  <Field
                    as={Input}
                    id="username"
                    autoComplete="username"
                    name="username"
                    variant="filled"
                  />
                  <FormErrorMessage>{errors.username}</FormErrorMessage>
                </Box>
              </FormControl>
              <FormControl
                isRequired
                isInvalid={!!errors.password && touched.password}
              >
                <FormLabel
                  as={motion.label}
                  variants={SignInGroupYVariants}
                  custom={-1}
                  htmlFor="password"
                >
                  Contraseña
                </FormLabel>
                <Box
                  as={motion.div}
                  variants={SignInGroupYVariants}
                  custom={-1}
                >
                  <Field
                    as={InputPassword}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    variant="filled"
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </Box>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  isLoading={isPending}
                  size="lg"
                  type="submit"
                  bg={"blue.400"}
                  color={"white"}
                  as={motion.button}
                  variants={SignInGroupYVariants}
                  custom={-1}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Acceder
                </Button>
              </Stack>
              <Flex justifyContent={"center"} pt={6}>
                <AuthorText />
              </Flex>
            </Stack>
          </form>
        )}
      </Formik>
    </Box>
  );
}
