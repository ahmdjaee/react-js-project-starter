import { FloatCircularIndicator } from "@/components/ui/loader";
import { useAuthContext } from "@/context/auth";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  const { state } = useAuthContext();
  return (
    <FloatCircularIndicator loading={state.loading}>
      <div className="w-full h-screen flex flex-col justify-center p-4">
        <Outlet />
      </div>
    </FloatCircularIndicator>
  );
}

export default AuthLayout;
