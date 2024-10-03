import { cn } from "@/lib/utils";
import * as React from "react";

const Input = React.forwardRef(
  ({ className, type, autoComplete, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        autoComplete={autoComplete}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

const FormControl = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      className={cn("grid w-full max-w-sm items-center gap-1.5", className)}
      ref={ref}
      {...props}
    />
  );
});

FormControl.displayName = "FormControl";

const FormErrorText = React.forwardRef(
  ({ className, errors = [], ...props }, ref) => {
    return errors.map((error) => (
      <p
        key={error}
        className={cn("text-sm text-red-600", className)}
        ref={ref}
        {...props}
      >
        {error}
      </p>
    ));
  }
);

FormErrorText.displayName = "FormErrorText";

export { FormControl, Input, FormErrorText };
