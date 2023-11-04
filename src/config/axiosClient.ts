import AuthStorage from "@/lib/authStorage";
import axios, { AxiosError } from "axios";
import ResponseAxiosError from "lib/ResponseAxiosError";
import { BASE_URL } from "./api.const";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
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
