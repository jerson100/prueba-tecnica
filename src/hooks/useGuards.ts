import { useEffect, useMemo } from "react";
import GuardService from "@/services/guardService";
import { useQuery } from "@tanstack/react-query";
import { Guard } from "@/types/guard";
import ResponseAxiosError from "@/lib/ResponseAxiosError";
import useAuthStore from "@/stores/auth.store";
import useGuardStore from "@/stores/guards.store";
import { useShallow } from "zustand/react/shallow";

const useAllGuardsByIdEquip = () => {
  const idEquip = useAuthStore((state) => state.user?.id_equipo);
  const setGuards = useGuardStore((state) => state.setGuards);
  const setLoadingGuards = useGuardStore((state) => state.setLoading);
  const dates = useGuardStore(useShallow((state) => state));
  const { data, error, isFetching } = useQuery<Guard[], ResponseAxiosError>({
    queryKey: ["guards", idEquip, dates.initialDate, dates.finalDate],
    queryFn: () =>
      idEquip
        ? GuardService.getAll(idEquip, dates.initialDate, dates.finalDate)
        : [],
  });

  useEffect(() => {
    setLoadingGuards(isFetching);
  }, [isFetching]);

  useEffect(() => {
    if (data) setGuards(data);
  }, [data, setGuards]);

  return useMemo(() => {
    return { loading: isFetching, guards: data, error };
  }, [isFetching, error, data]);
};

export default useAllGuardsByIdEquip;
