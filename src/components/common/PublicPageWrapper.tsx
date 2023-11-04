import { FC, PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import useAuthStore from "@/stores/auth.store";

const PublicPageWrapper: FC<PropsWithChildren> = ({ children }) => {
  const authState = useAuthStore((state) => state);
  if (authState.isAuthenticated()) return <Navigate to="/" replace />;
  return <>{children}</>;
};

export default PublicPageWrapper;
