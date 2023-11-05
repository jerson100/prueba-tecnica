import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Text,
  useColorModeValue,
  Link,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import { SignInSchema } from "../SignInSchema.validation";
import useLogin from "@/hooks/useLogin";
import InputPassword from "@/components/common/inputs/InputPassword";

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
                <FormLabel htmlFor="username">Usuario</FormLabel>
                <Field
                  as={Input}
                  id="username"
                  autoComplete="username"
                  name="username"
                  variant="filled"
                />
                <FormErrorMessage>{errors.username}</FormErrorMessage>
              </FormControl>
              <FormControl
                isRequired
                isInvalid={!!errors.password && touched.password}
              >
                <FormLabel htmlFor="password">Contraseña</FormLabel>
                <Field
                  as={InputPassword}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  variant="filled"
                />
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  isLoading={isPending}
                  size="lg"
                  type="submit"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Acceder
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
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
              </Stack>
            </Stack>
          </form>
        )}
      </Formik>
    </Box>
  );
}
