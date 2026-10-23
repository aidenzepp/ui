declare module "lucide-react" {
  import type * as React from "react";

  type LucideIcon = (props: React.ComponentProps<"svg">) => React.JSX.Element;

  export const CopyIcon: LucideIcon;
  export const DownloadIcon: LucideIcon;
  export const EllipsisIcon: LucideIcon;
  export const HistoryIcon: LucideIcon;
  export const Share2Icon: LucideIcon;
  export const Trash2Icon: LucideIcon;
}
