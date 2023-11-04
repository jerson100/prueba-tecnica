import * as Yup from "yup";

export const NewFormSchema = Yup.object().shape({
  fecha_guardia: Yup.date().required("La fecha es requerida"),
  tipo_guardia: Yup.number().required("El id es requerido"),
});

export const GuardsFilterSchema = Yup.object().shape({
  initialDate: Yup.date().required("La fecha inicial es requerida"),
  finalDate: Yup.date()
    .required("La fecha final es requerida")
    .min(
      Yup.ref("initialDate"),
      "La fecha final no puede ser menor que la fecha inicial"
    ),
});
