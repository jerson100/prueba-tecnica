import { useEffect, useMemo, useCallback } from "react";
import AuthService from "@/services/authService";
import useAuthStore from "@/stores/auth.store";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@chakra-ui/react";
import ResponseAxiosError from "@/lib/ResponseAxiosError";
import { UserLogin } from "@/types/login";

const useLogin = () => {
  const toast = useToast();
  const login = useAuthStore((state) => state.login);
  const { mutateAsync, isPending, error } = useMutation({
    mutationFn: AuthService.login,
  });
  useEffect(() => {
    if (!isPending && error) {
      if (error instanceof ResponseAxiosError) {
        toast({
          title: "Error",
          description: error.message,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
      }
    }
    return () => {};
  }, [error, isPending]);

  const _login = useCallback(
    async ({ username, password }: UserLogin) => {
      try {
        const response = await mutateAsync({ username, password });
        login(response);
        toast({
          title: "Success",
          description: `Hola ${response.nom_agente}`,
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
      } catch (error) {
        console.log(error);
      }
    },
    [mutateAsync, login, toast]
  );

  return useMemo(() => {
    return { login: _login, isPending };
  }, [_login, isPending]);
};

export default useLogin;
