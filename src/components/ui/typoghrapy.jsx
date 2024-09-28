import { cn } from "@/lib/utils";
import React from "react";

const PageTitle = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <h1
      ref={ref}
      className={cn("text-xl font-semibold tracking-tight", className)}
      {...props}
    />
  );
});
PageTitle.displayName = "PageTitle";

export { PageTitle };
