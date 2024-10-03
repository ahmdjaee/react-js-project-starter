import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useCrudContext } from "@/context/crud";
import CrudModule from "@/module/CrudModule";
import { useEffect } from "react";
import { Link } from "react-router-dom";

// Abstraksi komponen Delete Confirmation Dialog
const DeleteConfirmationDialog = ({ onConfirm }) => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="link" className="size-0 text-red-600">
        Delete
      </Button>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete the user.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction onClick={onConfirm}>Confirm</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

// Abstraksi komponen UserCard
const UserCard = ({ user, onDelete, onEdit: { to, state } }) => (
  <Card key={user.id}>
    <div className="py-3 px-4 flex items-center justify-end gap-2">
      <Link to={to} state={state}>
        <Button variant="link" className="size-0">
          Edit
        </Button>
      </Link>
      <DeleteConfirmationDialog onConfirm={() => onDelete(user.id)} />
    </div>
    <DropdownMenuSeparator className="border" />
    <CardHeader className="py-3 px-4">
      <CardTitle>{user.name}</CardTitle>
      <CardDescription>{user.email}</CardDescription>
    </CardHeader>
  </Card>
);

const ListWithLoading = ({ children, isLoading, count }) => {
  if (isLoading) {
    return (
      <div className="space-y-2">
        {Array.from({ length: count }).map((_, index) => (
          <Skeleton key={index} className="h-[117px] w-full" />
        ))}
      </div>
    );
  }

  return children;
};

export default function Dashboard() {
  const { state, crud } = useCrudContext();

  useEffect(() => {
    crud.getList("/users");
  }, [state.refetch]);

  const handleDelete = async (id) => await crud.delete(`/users/${id}`);

  return (
    <CrudModule className="grid px-4 py-5 gap-5">
      <h2 className="text-xl font-semibold">List of Users</h2>

      <div className="flex items-center gap-3">
        <Link to="/dashboard/create" className={buttonVariants()}>
          Create User
        </Link>
        <Input type="search" placeholder="Search" />
      </div>

      <div className="grid gap-[10px]">
        <ListWithLoading count={8} isLoading={state.list.loading}>
          {state.list.data.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              onDelete={handleDelete}
              onEdit={{ to: `/dashboard/update`, state: user }}
            />
          ))}
        </ListWithLoading>
      </div>
    </CrudModule>
  );
}
