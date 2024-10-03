import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FormControl, FormErrorText, Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FloatCircularIndicator } from "@/components/ui/loader";
import { useCrudContext } from "@/context/crud";
import { handleSubmit } from "@/lib/utils";
import { useLocation } from "react-router-dom";

function UpdateUser() {
  const { state, crud } = useCrudContext();
  const location = useLocation();
  const onSubmit = async (data) =>
    await crud.put(`/users/${location.state?.id}`, data, "/dashboard");

  return (
    <FloatCircularIndicator loading={state.action.loading}>
      <form onSubmit={handleSubmit(onSubmit)} className={"grid px-4 py-5 gap-5"}>
        <Card className={"p-4 space-y-4"}>
          <FormControl>
            <Label htmlFor="name">Name</Label>
            <Input
              defaultValue={location.state?.name}
              type="text"
              placeholder="Name"
              name="name"
            />
            <FormErrorText errors={state.action.errors?.name} />
          </FormControl>
          <FormControl>
            <Label htmlFor="email">Email</Label>
            <Input
              defaultValue={location.state?.email}
              type="text"
              autoComplete="off"
              placeholder="Email"
              name="email"
            />
            <FormErrorText errors={state.action.errors?.email} />
          </FormControl>
        </Card>
        <Button>Update</Button>
      </form>
    </FloatCircularIndicator>
  );
}

export default UpdateUser;
