import type * as React from "react";

type SwitchProps = Omit<React.ComponentProps<"button">, "defaultChecked"> & {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
};

export declare function Switch(props: SwitchProps): React.JSX.Element;
