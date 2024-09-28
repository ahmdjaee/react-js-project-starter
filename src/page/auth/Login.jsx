import { Button, buttonVariants } from "@/components/ui/button";
import { FormControl, Input } from "@/components/ui/input";
import { PageTitle } from "@/components/ui/typoghrapy";
import { handleSubmit } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const onSubmit = (data) => {
    console.log(data);
    navigate(from, { replace: true });
  };

  return (
    <>
      <PageTitle>Login</PageTitle>
      <div className="h-full flex justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3 w-full m-auto">
          <FormControl>
            <Label htmlFor="email">Email</Label>
            <Input type="text" placeholder="Email" name="email" />
          </FormControl>
          <FormControl>
            <Label htmlFor="password">Password</Label>
            <Input type="password" placeholder="Password" name="password" />
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
