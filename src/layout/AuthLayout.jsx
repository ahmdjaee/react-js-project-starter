import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="w-full h-screen flex flex-col justify-center p-4">
      <Outlet />
    </div>
  );
}

export default AuthLayout;
