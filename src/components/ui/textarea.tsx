import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[60px] w-full resize-none rounded-md border-2 border-Primary-Black bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground hover:bg-Zinc-100 focus:shadow-md disabled:cursor-not-allowed disabled:border-Zinc-200 disabled:bg-Zinc-100 disabled:text-Zinc-300",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
