import { AlignJustify, ArrowLeftCircle } from "lucide-react";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getCurrentUserAndToken } from "@/service/auth";
import { useAuthContext } from "@/context/auth";
import { useEffect } from "react";

export default function TopNavBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { state, auth } = useAuthContext();
  const user = getCurrentUserAndToken();
  const handleLogout = async () => {
    await auth.logout("/auth/logout");
  };

  useEffect(() => {
    if (state.success) navigate("/");
    return () => auth.resetState();
  }, [state.success]);

  return (
    <header className="w-full flex justify-end items-center px-4 py-3 shadow ">
      {location.pathname !== "/" && (
        <ArrowLeftCircle
          onClick={() => window.history.back()}
          className="size-6 cursor-pointer mr-auto"
        />
      )}
      <nav>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <AlignJustify className="size-6" />
            </Button>
          </DropdownMenuTrigger>

          {user ? (
            // Logged in DropDown Content
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <Link>
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                </Link>
                <Link to="/">
                  <DropdownMenuItem>Home</DropdownMenuItem>
                </Link>
                <Link to="/dashboard">
                  <DropdownMenuItem>Dashboard</DropdownMenuItem>
                </Link>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          ) : (
            // Guest DropDown Content
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Guest</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <Link to="/auth/login">
                  <DropdownMenuItem>Login</DropdownMenuItem>
                </Link>
                <Link to="/auth/register">
                  <DropdownMenuItem>Register</DropdownMenuItem>
                </Link>
                <Link to="/">
                  <DropdownMenuItem>Home</DropdownMenuItem>
                </Link>
                <Link to="/dashboard">
                  <DropdownMenuItem>Dashboard</DropdownMenuItem>
                </Link>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          )}
        </DropdownMenu>
      </nav>
    </header>
  );
}
