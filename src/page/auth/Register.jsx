import { Button, buttonVariants } from "@/components/ui/button";
import { FormControl, Input } from "@/components/ui/input";
import { PageTitle } from "@/components/ui/typoghrapy";
import { handleSubmit } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";
import { Link } from "react-router-dom";

function Register() {
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <>
      <PageTitle>Register</PageTitle>
      <div className="h-full flex justify-center">
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3 w-full m-auto">
          <FormControl>
            <Label htmlFor="name">Name</Label>
            <Input type="text" placeholder="Name" name="name" />
          </FormControl>
          <FormControl>
            <Label htmlFor="email">Email</Label>
            <Input type="text" placeholder="Email" name="email" />
          </FormControl>
          <FormControl>
            <Label htmlFor="password">Password</Label>
            <Input type="password" placeholder="Password" name="password" />
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
