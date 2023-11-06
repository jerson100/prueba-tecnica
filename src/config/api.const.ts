export const BASE_URL = "https://opembpo.emeal.nttdata.com";
export const PROXY_URL = "https://serverproxy.onrender.com";

export const ENDPOINTS = {
  SIGN_IN: `/pre/validar_usuario`,
  ADMIN_EQUIP: `/admin/guardias/equipo`,
  ALL_GUARDS: (idEquip: string) => `/admin/guardias/equipo/${idEquip}`,
  CREATE_GUARD: (idEquip: string) =>
    `/admin/guardias/equipo/${idEquip}/agente/postulante`,
};
