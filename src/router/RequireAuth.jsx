import { getCurrentUserAndToken } from "@/service/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function RequireAuth() {
  const user = getCurrentUserAndToken();
  let location = useLocation();

  if (!user) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}

export default RequireAuth;
