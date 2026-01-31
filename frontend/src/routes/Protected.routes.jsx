import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (!user) {
  //   return <Navigate to="/login" replace />;
  // }

  return <Outlet />;
};

export default ProtectedRoute;
