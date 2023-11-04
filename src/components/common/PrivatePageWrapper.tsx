import useAuthStore from "@/stores/auth.store";
import { Navigate, Outlet } from "react-router-dom";
import MainPageLayout from "../layouts/MainPageLayout";

const PrivatePageWrapper = () => {
  const authState = useAuthStore((state) => state);
  if (!authState.isAuthenticated()) return <Navigate to="/login" />;
  return (
    <div>
      {/* <p>Layout main page</p> */}
      <MainPageLayout />
      <Outlet />
    </div>
  );
};

export default PrivatePageWrapper;
