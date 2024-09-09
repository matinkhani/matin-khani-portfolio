import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-Primary-Black text-Primary-White shadow hover:bg-Primary-Neutral focus:bg-Primary-White focus:text-Primary-Black focus:border-2 focus:border-Primary-Black",
        destructive:
          "bg-Error-500 text-destructive-foreground shadow-sm hover:bg-Error-500/90 focus:bg-Primary-White focus:text-Error-500 focus:border-2 focus:border-Error-500",
        outline:
          "border-2 border-Primary-Black bg-Primary-White shadow-sm hover:bg-Primary-Black hover:text-Primary-White",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}
// TODO: fixed button color on focus
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, startIcon, endIcon, asChild = false, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {startIcon && startIcon}
        {props.children}
        {endIcon && endIcon}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
