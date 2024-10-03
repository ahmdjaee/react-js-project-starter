import TopNavBar from "@/components/ui/topnavbar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <TopNavBar />
      <Outlet />
    </>
  );
}

export default MainLayout;
