"use client";

import * as React from "react";
import {
  CopyIcon,
  DownloadIcon,
  EllipsisIcon,
  HistoryIcon,
  Share2Icon,
  Trash2Icon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Frame,
  FrameActions,
  FrameDescription,
  FrameFooter,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/ui/frame";
import { useFrameOverflow } from "@/hooks/use-frame-overflow";

const iconActions = [
  { icon: Share2Icon, label: "Share" },
  { icon: DownloadIcon, label: "Download" },
  { icon: HistoryIcon, label: "History" },
];

export function OverflowFrame({ id }: { id?: string }) {
  const { triggerRef, hidden, onOpenChange } = useFrameOverflow(["icons"]);

  return (
    <Frame id={id}>
      <FrameHeader>
        <FrameTitle>Deploy settings · acme-dashboard-production-eu-west-1</FrameTitle>
        <FrameActions>
          <div data-overflow="icons" className="flex items-center gap-0.5 @max-lg/frame:hidden">
            {iconActions.map(({ label, icon: Icon }) => (
              <Button key={label} variant="ghost" size="icon-sm" aria-label={label}>
                <Icon />
              </Button>
            ))}
          </div>
          <Button size="sm">Deploy</Button>
          <DropdownMenu onOpenChange={onOpenChange}>
            <DropdownMenuTrigger
              ref={triggerRef}
              render={<Button variant="ghost" size="icon-sm" aria-label="More" />}
            >
              <EllipsisIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44">
              {hidden.has("icons") &&
                iconActions.map(({ label, icon: Icon }) => (
                  <DropdownMenuItem key={label}>
                    <Icon />
                    {label}
                  </DropdownMenuItem>
                ))}
              {hidden.size > 0 && <DropdownMenuSeparator />}
              <DropdownMenuItem>
                <CopyIcon />
                Duplicate
              </DropdownMenuItem>
              <DropdownMenuItem variant="destructive">
                <Trash2Icon />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </FrameActions>
      </FrameHeader>
      <FramePanel className="block min-h-0 p-0 text-sm @max-sm/frame:px-0">
        {[
          ["Region", "eu-west-1"],
          ["Branch", "main"],
          ["Last deploy", "2 min ago by Sterling"],
        ].map(([k, v]) => (
          <div
            key={k}
            className="flex justify-between gap-4 border-b border-border px-4 py-3 last:border-b-0"
          >
            <span className="text-muted-foreground">{k}</span>
            <span className="min-w-0 truncate">{v}</span>
          </div>
        ))}
      </FramePanel>
      <FrameFooter>
        <FrameDescription>Last saved 2 min ago</FrameDescription>
        <FrameActions>
          <Button variant="outline">Cancel</Button>
          <Button>Save</Button>
        </FrameActions>
      </FrameFooter>
    </Frame>
  );
}
