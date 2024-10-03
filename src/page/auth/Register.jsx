import { Button, buttonVariants } from "@/components/ui/button";
import { FormControl, FormErrorText, Input } from "@/components/ui/input";
import { PageTitle } from "@/components/ui/typoghrapy";
import { useAuthContext } from "@/context/auth";
import { handleSubmit } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Register() {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/dashboard";
  const { state, auth } = useAuthContext();

  const onSubmit = async (data) => {
    await auth.loginOrRegister("/auth/register", data);
  };

  useEffect(() => {
    if (state.success) navigate(from, { replace: true });
    return () => auth.resetState();
  }, [state.success]);

  return (
    <>
      <PageTitle>Register</PageTitle>
      <div className="h-full flex justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-3 w-full max-w-sm "
        >
          <FormControl>
            <Label htmlFor="name">Name</Label>
            <Input type="text" placeholder="Name" name="name" />
            <FormErrorText errors={state.errors?.name} />
          </FormControl>
          <FormControl>
            <Label htmlFor="email">Email</Label>
            <Input type="email" placeholder="Email" name="email" />
            <FormErrorText errors={state.errors?.email} />
          </FormControl>
          <FormControl>
            <Label htmlFor="password">Password</Label>
            <Input type="password" placeholder="Password" name="password" />
            <FormErrorText errors={state.errors?.password} />
          </FormControl>
          <p className="mx-auto">
            Already have an account?
            <Link className={buttonVariants({ variant: "link" })} to="/auth/login">
              Login
            </Link>
          </p>
          <Button type="submit" className="mx-auto">
            Register
          </Button>
        </form>
      </div>
    </>
  );
}

export default Register;
