import { Navigate, Outlet, useLocation } from "react-router-dom";

function RequireAuth() {
  const isAuthenticaed = false;
  let location = useLocation();

  if (!isAuthenticaed) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}

export default RequireAuth;
