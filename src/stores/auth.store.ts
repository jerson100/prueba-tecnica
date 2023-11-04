import { StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";
import { STORAGE } from "@/config/storage.const";
import { AuthStore } from "@/types/authStore";

const INITIAL_STATE_AUTH = {
  token: null,
  user: null,
};

const authSlice: StateCreator<AuthStore> = (set, get) => ({
  ...INITIAL_STATE_AUTH,
  login: (user) => {
    set({ token: user.owl, user: user });
  },
  logout: () => {
    set({ token: null, user: null });
  },
  isAuthenticated: () => !!get().token && !!get().user,
});

const useAuthStore = create<AuthStore>()(
  persist(authSlice, {
    name: STORAGE.AUTH,
    partialize: (state: AuthStore) => ({
      token: state.token,
      user: state.user,
    }),
  })
);

export default useAuthStore;
