import { Navigate, Outlet, useLocation } from "react-router-dom";

function MustNotAuth() {
  const isAuthenticaed = false;
  let location = useLocation();

  if (isAuthenticaed) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <Outlet />;
}

export default MustNotAuth;
