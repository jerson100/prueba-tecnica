import AuthStorage from "@/lib/authStorage";
import axios, { AxiosError } from "axios";
import ResponseAxiosError from "lib/ResponseAxiosError";
import { BASE_URL } from "./api.const";
import { StatusCodes } from "http-status-codes";

//Tuve que crear un servidor proxy con nodejs para poder hacer las peticiones al backend
//desde el frontend ya que el backend no tiene habilitado el cors.
const PROXY_URL = "http://localhost:1554";
// const PROXY_URL = "https://serverproxy.onrender.com";

const axiosInstance = axios.create({
  baseURL: `${PROXY_URL}/${BASE_URL}`,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = AuthStorage.getToken();
    if (token) {
      config.headers.authToken = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response) {
      //Analizando la api dada por el backend se observa que no se manejan los códigos de estado
      //adecuadamente siguiendo la arquitectura rest.
      //Por ejemplo cuando se vence el token me devuelve error 500 - Internal Server Error
      //que en realidad debería de devolver código 401 - Unauthorized, por lo tanto
      //voy a redireccionar al usuario al login cuando reciba un error 500 como si fuera un 401 - Unauthorized
      if (error.response.status === StatusCodes.INTERNAL_SERVER_ERROR) {
        AuthStorage.removeToken();
        window.location.href = "/login";
      }
      const {
        response: { data, status },
      } = error;
      const { message } = data as { message: string };
      return Promise.reject(new ResponseAxiosError(message, status));
    }
    return Promise.reject(
      new ResponseAxiosError(
        "Ocurrió un error",
        error.code === "ERR_CANCELED" ? 0 : 1
      )
    );
  }
);

export default axiosInstance;
