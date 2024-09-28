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

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<RequireAuth />}>
        <Route path="/" element={<Home />} />
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
