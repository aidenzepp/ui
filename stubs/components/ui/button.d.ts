import type * as React from "react";

type ButtonProps = React.ComponentProps<"button"> & {
  size?: "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg";
  variant?: "default" | "outline" | "secondary" | "ghost" | "destructive" | "link";
};

export declare function Button(props: ButtonProps): React.JSX.Element;
