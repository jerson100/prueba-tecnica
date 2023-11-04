import ResponseAxiosError from "@/lib/ResponseAxiosError";
import GuardService from "@/services/guardService";
import useAuthStore from "@/stores/auth.store";
import { NewGuard } from "@/types/guard";
import { useMutation } from "@tanstack/react-query";
import { useCallback, useMemo } from "react";

const useNewGuard = () => {
  const idEquip = useAuthStore((state) => state.user?.id_equipo);
  const { isPending, error, mutateAsync } = useMutation<
    string,
    ResponseAxiosError,
    NewGuard
  >({
    mutationFn: GuardService.create,
  });

  const create = useCallback(
    async (newGuard: NewGuard) => {
      try {
        const response = await mutateAsync({
          ...newGuard,
          idEquip: idEquip,
        });
        return response;
      } catch (error: ResponseAxiosError | unknown) {
        throw error;
      }
    },
    [mutateAsync, idEquip]
  );

  return useMemo(
    () => ({
      create,
      loading: isPending,
      error,
    }),
    [create, isPending, error]
  );
};

export default useNewGuard;
