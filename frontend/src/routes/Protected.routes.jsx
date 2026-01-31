import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../features/auth/AuthStore.js";
import { useEffect } from "react";

const ProtectedRoute = () => {

  const { isAuth, loading, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  },[]);

  if (loading) return <div>Loading...</div>;

  if (!isAuth) return <Navigate to="/login" replace={true} />;

  return <Outlet />;
};

export default ProtectedRoute;
