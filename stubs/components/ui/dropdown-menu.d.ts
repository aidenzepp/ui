import type * as React from "react";

export declare function DropdownMenu(props: {
  children?: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
}): React.JSX.Element;

export declare function DropdownMenuTrigger(
  props: React.ComponentProps<"button"> & { render?: React.ReactElement },
): React.JSX.Element;

export declare function DropdownMenuContent(
  props: React.ComponentProps<"div"> & { align?: "start" | "center" | "end" },
): React.JSX.Element;

export declare function DropdownMenuItem(
  props: React.ComponentProps<"div"> & { variant?: "default" | "destructive" },
): React.JSX.Element;

export declare function DropdownMenuSeparator(
  props: React.ComponentProps<"div">,
): React.JSX.Element;
