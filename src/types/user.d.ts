export interface User {
  id_rol: string;
  owl: string;
  id_proyecto: string;
  nom_agente: string;
  id_equipo: string;
  token: string;
}

export interface AuthUser {
  user: User;
  token: string;
}
