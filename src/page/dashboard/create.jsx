import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FormControl, FormErrorText, Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FloatCircularIndicator } from "@/components/ui/loader";
import { useCrudContext } from "@/context/crud";
import { handleSubmit } from "@/lib/utils";

function CreateUser() {
  const { state, crud } = useCrudContext();
  const onSubmit = async (data) => await crud.post("/users", data, "/dashboard");

  return (
    <FloatCircularIndicator loading={state.action.loading}>
      <form onSubmit={handleSubmit(onSubmit)} className={"grid px-4 py-5 gap-5"}>
        <Card className={"p-4 space-y-4"}>
          <FormControl>
            <Label htmlFor="name">Name</Label>
            <Input type="text" placeholder="Name" name="name" />
            <FormErrorText errors={state.action.errors?.name} />
          </FormControl>
          <FormControl>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              autoComplete="off"
              placeholder="Email"
              name="email"
            />
            <FormErrorText errors={state.action.errors?.email} />
          </FormControl>
          <FormControl>
            <Label htmlFor="password">Password</Label>
            <Input type="password" placeholder="Password" name="password" />
            <FormErrorText errors={state.action.errors?.password} />
          </FormControl>
        </Card>
        <Button>Create</Button>
      </form>
    </FloatCircularIndicator>
  );
}

export default CreateUser;
