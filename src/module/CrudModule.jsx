import { FloatCircularIndicator } from "@/components/ui/loader";
import { useCrudContext } from "@/context/crud";
import { cn } from "@/lib/utils";
import { useLayoutEffect } from "react";

function CrudModule({ children, className, ...props }) {
  const { state, crud } = useCrudContext();

  useLayoutEffect(() => {
    return () => crud.resetState();
  }, []);

  return (
    <FloatCircularIndicator loading={state.action.loading}>
      <div className={cn(className)} {...props}>
        {children}
      </div>
    </FloatCircularIndicator>
  );
}

export default CrudModule;
