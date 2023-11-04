import { ENDPOINTS } from "@/config/api.const";
import axiosInstance from "@/config/axiosClient";
import ResponseAxiosError from "@/lib/ResponseAxiosError";
import { Guard, NewGuard } from "@/types/guard";

export default abstract class GuardService {
  static async create(guard: NewGuard): Promise<string> {
    const { idEquip, ...rest } = guard;
    const response = await axiosInstance.post<string>(
      ENDPOINTS.CREATE_GUARD(idEquip as string),
      undefined,
      {
        params: rest,
      }
    );
    //Esto lo hago solo porque el backend devuelve 200 independientemente si está bien o no. Lo ideal sería que me llegue correctamente los códigos de estado siguiendo la arquirectura REST.
    if (response.status === 200) {
      if (response.data !== "Listo") {
        return Promise.reject(new ResponseAxiosError(response.data));
      }
    }
    return response.data;
  }
  static async getAll(
    idEquip: string,
    fecha_ini: string,
    fecha_fin: string
  ): Promise<Guard[]> {
    const guards = await axiosInstance.get<Guard[]>(
      ENDPOINTS.ALL_GUARDS(idEquip),
      {
        params: {
          fecha_ini: fecha_ini,
          fecha_fin: fecha_fin,
        },
      }
    );
    return guards.data;
  }
}
