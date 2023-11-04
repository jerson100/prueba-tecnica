import { Field, Formik } from "formik";
import { NewFormSchema } from "../schemasValidation";
import useNewGuard from "@/hooks/useNewGuard";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import { NewGuard } from "@/types/guard";
import ResponseAxiosError from "@/lib/ResponseAxiosError";

const NewGuardForm = () => {
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
    <Formik
      onSubmit={handleSubmit}
      initialValues={{
        tipo_guardia: "1", //Por defecto es 1 según lo especificado en la reunión
        fecha_guardia: "",
      }}
      validationSchema={NewFormSchema}
    >
      {({ handleSubmit, errors, touched }) => (
        <form onSubmit={handleSubmit}>
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
          <Button isLoading={loading} type="submit" mt={4}>
            Crear
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default NewGuardForm;
