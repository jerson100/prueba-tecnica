import * as Yup from "yup";

/*Simple Validation*/
export const SignInSchema = Yup.object().shape({
  username: Yup.string().required("El usuario es requerido"),
  password: Yup.string().required("La contraseña es requerida"),
});
