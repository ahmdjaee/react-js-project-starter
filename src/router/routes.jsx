import AuthLayout from "@/layout/AuthLayout";
import Login from "@/page/auth/Login";
import Register from "@/page/auth/Register";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RequireAuth from "./RequireAuth";
import Home from "@/page/home";
import MustNotAuth from "./MustNotAuth";
import Dashboard from "@/page/dashboard";
import MainLayout from "@/layout/MainLayout";
import CreateUser from "@/page/dashboard/create";
import UpdateUser from "@/page/dashboard/update";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<MainLayout />}>
        <Route path="/" index element={<Home />} />
        <Route element={<RequireAuth />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="dashboard/create" element={<CreateUser />} />
          <Route path="dashboard/update" element={<UpdateUser />} />
        </Route>
      </Route>

      <Route element={<MustNotAuth />}>
        <Route path="auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Route>
    </Route>
  )
);
