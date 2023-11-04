import { GUARD_STATUS } from "@/config/guard.const";

export type GuardStatus = GUARD_STATUS.AVAILABLE | GUARD_STATUS.NOT_AVAILABLE;

export interface Guard {
  id_guardia: number;
  agente: Agente;
  tipo_guardia: any;
  estado_guardia: GuardStatus;
  //   estado_guardia: string;
  fecha_guardia: string;
  fecha_registro_guardia: string;
}

export interface Agente {
  id_agente: string;
  nom_agente: string;
  estado_agente: string;
  email_agente: string;
  id_empleado: number;
  ofic_agente: any;
  propagado_bi: boolean;
  propagado_encuestas: boolean;
  id_shori: any;
  propagado_shori: boolean;
  cant_personal: number;
  horario: any;
  equipoInformaticoDetalle: any;
  hijos: any;
  equiposLider: any;
  rolesDisponibles: any;
  rol: Rol;
  equipo: Equipo;
  proyecto: Proyecto;
  proyecto_grupo: any;
  unidad_negocio: any;
  fecha_password: any;
}

export interface Rol {
  id_rol: number;
  nom_rol: string;
  descripcion_rol: string;
  enlace_principal_rol: string;
}

export interface Equipo {
  id_eq: number;
  nombre_eq: string;
  estado_equipo: string;
  propagado_bi: boolean;
  propagado_encuestas: boolean;
  id_shori: any;
  proyecto: Proyecto;
}

export interface Proyecto {
  id_proy: number;
  nom_proy: string;
  propagado_bi: boolean;
  estado_proy: string;
  proyecto_grupo: ProyectoGrupo;
  pais: Pais;
  moneda: Moneda;
}

export interface ProyectoGrupo {
  id_proy_grupo: number;
  nombre_proy_grupo: string;
  unidad_negocio: UnidadNegocio;
}

export interface UnidadNegocio {
  id_unidad_negocio: number;
  nombre_unidad_negocio: string;
  estado_unidad_negocio: string;
}

export interface Pais {
  id_pais: number;
  nombre_pais: string;
  abrev_pais: string;
}

export interface Moneda {
  idtb_pom_monedas: number;
  descripcion: string;
  simbolos: string;
  divisa: string;
}

export type NewGuard = Pick<Guard, "tipo_guardia" | "fecha_guardia"> & {
  idEquip?: string;
};

export interface GuardStoreState {
  guards: Guard[];
  initialDate: string;
  finalDate: string;
  loading: boolean;
}

export interface GuardStoreActions {
  setGuard: (guard: Guard) => void;
  setGuards: (guards: Guard[]) => void;
  reset: () => void;
  setLoading: (loading: boolean) => void;
  setDates: ({ initialDate: string, finalDate: string }) => void;
}

export type GuardStore = GuardStoreState & GuardStoreActions;
