// import { ToastAction } from "@/components/ui/toast";
import { toast } from "@/hooks/use-toast";

function successHandler(response, withAction = true) {
  if (response) {
    if (response.status === 200 || response.status === 201) {
      toast({
        title: "Success",
        description: response?.data?.message,
        // action: withAction ? (
        //   <ToastAction onClick={() => window.history.back()} altText="Try again">
        //     Back
        //   </ToastAction>
        // ) : null,
      });
    }
  }
}

export { successHandler };
