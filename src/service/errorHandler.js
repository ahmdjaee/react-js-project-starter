import { toast } from "@/hooks/use-toast";

export function errorHandler(error) {
  const { response } = error;
  if (response?.status === 500) {
    toast({
      title: "Internal Server Error",
      description: "Something went wrong. Please try again later.",
      variant: "destructive",
    });
    return response?.data;
  } else if (response?.status === 401) {
    toast({
      title: "Unauthorized",
      description: "Please login to continue.",
      variant: "destructive",
    });
    return response?.data;
  } else if (response?.status === 422) {
    if (response?.data?.message) {
      toast({
        title: "Bad Request",
        description: response.data.message,
        variant: "destructive",
      });
    }
    return response?.data;
  } else {
    toast({
      title: "Internal Server Error",
      description: "Something went wrong. Please try again later.",
      variant: "destructive",
    });
    return response?.data;
  }
}
