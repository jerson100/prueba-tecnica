import { ENDPOINTS } from "@/config/api.const";
import axiosClient from "@/config/axiosClient";
import ResponseAxiosError from "@/lib/ResponseAxiosError";
import { UserLogin } from "@/types/login";
import { User } from "@/types/user";

export default abstract class AuthService {
  static async login(userLogin: UserLogin): Promise<User> {
    const response = await axiosClient.post<User & { msg: string }>(
      ENDPOINTS.SIGN_IN,
      undefined,
      {
        params: {
          usuario: encodeURIComponent(userLogin.username),
          password: encodeURIComponent(userLogin.password),
        },
      }
    );
    const { msg, ...authUser } = response.data;
    if (msg !== "Validado.") {
      return Promise.reject(new ResponseAxiosError(msg));
    }
    return authUser;
  }
}
