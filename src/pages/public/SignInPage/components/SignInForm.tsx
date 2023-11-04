import { Formik, Field } from "formik";
import {
  FormControl,
  Input,
  Button,
  FormLabel,
  FormErrorMessage,
  VStack,
} from "@chakra-ui/react";
import { SignInSchema } from "../SignInSchema.validation";
import useLogin from "@/hooks/useLogin";

const INITIAL_VALUES = {
  username: "",
  password: "",
};

const SignInForm = () => {
  const { isPending, login } = useLogin();
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={SignInSchema}
      onSubmit={login}
    >
      {({ handleSubmit, errors, touched }) => (
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl isInvalid={!!errors.username && touched.username}>
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
            <FormControl isInvalid={!!errors.password && touched.password}>
              <FormLabel htmlFor="password">Contraseña</FormLabel>
              <Field
                as={Input}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                variant="filled"
              />
              <FormErrorMessage>{errors.password}</FormErrorMessage>
            </FormControl>
            <Button
              isLoading={isPending}
              type="submit"
              colorScheme="purple"
              width="full"
            >
              Login
            </Button>
          </VStack>
        </form>
      )}
    </Formik>
  );
};

export default SignInForm;
