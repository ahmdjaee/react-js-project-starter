import { Button, buttonVariants } from "@/components/ui/button";
import { FormControl, FormErrorText, Input } from "@/components/ui/input";
import { PageTitle } from "@/components/ui/typoghrapy";
import { useAuthContext } from "@/context/auth";
import { handleSubmit } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/dashboard";
  const { state, auth } = useAuthContext();

  const onSubmit = async (data) => {
    await auth.loginOrRegister("/auth/login", data);
  };

  useEffect(() => {
    if (state.success) navigate(from, { replace: true });
    return () => auth.resetState();
  }, [state.success]);

  return (
    <>
      <PageTitle>Login</PageTitle>
      <div className="h-full flex justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-3 flex-1 max-w-sm h-min mx-auto"
        >
          <FormControl>
            <Label htmlFor="email">Email</Label>
            <Input type="text" placeholder="Email" name="email" />
            <FormErrorText errors={state.errors?.email} />
          </FormControl>
          <FormControl>
            <Label htmlFor="password">Password</Label>
            <Input type="password" placeholder="Password" name="password" />
            <FormErrorText errors={state.errors?.password} />
          </FormControl>
          <p className="mx-auto">
            Not have an account?
            <Link
              className={buttonVariants({ variant: "link" })}
              to="/auth/register"
            >
              Register
            </Link>
          </p>
          <Button type="submit" className="mx-auto">
            Login
          </Button>
        </form>
      </div>
    </>
  );
}

export default Login;
