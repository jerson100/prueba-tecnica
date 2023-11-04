import { getCurrentDayAndLastDayOfMonth } from "@/lib/date";
import { GuardStore } from "@/types/guard";
import { create } from "zustand";

const { currentDay, lastDay } = getCurrentDayAndLastDayOfMonth("yyyy-mm-dd");

const INITIAL_STATE = {
  guards: [],
  initialDate: currentDay,
  finalDate: lastDay,
  loading: false,
};

const useGuardStore = create<GuardStore>((set) => ({
  ...INITIAL_STATE,
  setGuards: (guards) => {
    set({ guards });
  },
  setGuard: (guard) => {
    set((prev) => ({ guards: [guard, ...prev.guards] }));
  },
  reset: () => {
    set(INITIAL_STATE);
  },
  setLoading: (loading: boolean) => {
    set({ loading });
  },
  setDates: ({ initialDate, finalDate }) => {
    set({ initialDate, finalDate });
  },
}));

export default useGuardStore;
