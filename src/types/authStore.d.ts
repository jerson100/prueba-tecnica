import { AuthUser, User } from "./user";

export interface AuthStoreState {
  token: string | null;
  user: User | null;
}

export interface AuthStoreActions {
  login: (user: User) => void;
  logout: () => void;
  isAuthenticated: () => boolean;
}

export interface AuthLocalStorage {
  state: AuthStoreState;
  version: number;
}

export type AuthStore = AuthStoreState & AuthStoreActions;
