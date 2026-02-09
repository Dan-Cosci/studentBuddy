import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../features/auth/AuthStore.js";
import { useEffect } from "react";
import Loading from "../features/Loading.jsx";

const ProtectedRoute = () => {

  const { isAuth, loading, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  },[]);

  if (loading) return <Loading/>;

  if (!isAuth) return <Navigate to="/auth?mode=login" replace={true} />;

  return <Outlet />;
};

export default ProtectedRoute;
