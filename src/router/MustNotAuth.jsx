import { getCurrentUserAndToken } from "@/service/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function MustNotAuth() {
  const user = getCurrentUserAndToken();
  let location = useLocation();

  if (user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <Outlet />;
}

export default MustNotAuth;
