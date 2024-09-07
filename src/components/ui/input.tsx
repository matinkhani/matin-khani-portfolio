import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-sm border-2 border-Primary-Black bg-transparent px-3 py-1 text-sm text-Primary-Black shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-Zinc-500 hover:bg-Zinc-100 focus:shadow-md disabled:cursor-not-allowed disabled:border-Zinc-200 disabled:bg-Zinc-100 disabled:text-Zinc-300",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
