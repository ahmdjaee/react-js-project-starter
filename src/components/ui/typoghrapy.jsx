import { cn } from "@/lib/utils";
import React from "react";

const PageTitle = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <h5
      ref={ref}
      className={cn("text-lg font-semibold tracking-tight", className)}
      {...props}
    />
  );
});
PageTitle.displayName = "PageTitle";

export { PageTitle };
