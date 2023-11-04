import { Field, Formik } from "formik";
import { NewFormSchema } from "../schemasValidation";
import useNewGuard from "@/hooks/useNewGuard";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  ModalBody,
  ModalFooter,
  useToast,
} from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import { NewGuard } from "@/types/guard";
import ResponseAxiosError from "@/lib/ResponseAxiosError";
import { FC } from "react";

interface NewGuardFormProps {
  onCloseModal: () => void;
}

const NewGuardForm: FC<NewGuardFormProps> = ({ onCloseModal }) => {
  const queryClient = useQueryClient();
  const toast = useToast();
  const { create, loading } = useNewGuard();

  const handleSubmit = async (values: NewGuard) => {
    try {
      const response = await create(values);
      toast({
        position: "top-right",
        title: "Guardia creada",
        description: response,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      onCloseModal();
      await queryClient.invalidateQueries({
        queryKey: ["guards"],
      });
    } catch (e) {
      if (e instanceof ResponseAxiosError) {
        toast({
          position: "top-right",
          title: "Error",
          status: "error",
          description: e.message,
          duration: 5000,
          isClosable: true,
        });
      }
    }
  };
  return (
    <Flex mb={4}>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          tipo_guardia: "1", //Por defecto es 1 según lo especificado en la reunión
          fecha_guardia: "",
        }}
        validationSchema={NewFormSchema}
      >
        {({ handleSubmit, errors, touched }) => (
          <Box as="form" onSubmit={handleSubmit} width={"full"}>
            <ModalBody pb={6}>
              <FormControl
                isInvalid={!!errors.fecha_guardia && touched.fecha_guardia}
              >
                <FormLabel htmlFor="fecha_guardia">Fecha Guardia</FormLabel>
                <Field
                  as={Input}
                  type="date"
                  id="fecha_guardia"
                  autoComplete="off"
                  name="fecha_guardia"
                  variant="filled"
                />
                <FormErrorMessage>{errors.fecha_guardia}</FormErrorMessage>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button
                isLoading={loading}
                colorScheme="blue"
                type="submit"
                mr={4}
              >
                Crear
              </Button>
              <Button onClick={onCloseModal}>Cancel</Button>
            </ModalFooter>
          </Box>
        )}
      </Formik>
    </Flex>
  );
};

export default NewGuardForm;
