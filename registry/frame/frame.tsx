import * as React from "react"
import { cn } from "cn"

type DivProps = React.ComponentProps<"div">

// Frame is a size container named "frame": children respond to the frame's own
// width with @sm/frame:, @max-lg/frame:, etc., not to the viewport.
function Frame({ className, ...props }: DivProps) {
  return <div data-slot="frame" className={cn("@container/frame flex min-w-0 flex-col rounded-xl bg-fill-1", className)} {...props} />
}

function FrameHeader({ className, ...props }: DivProps) {
  return <div data-slot="frame-header" className={cn("flex h-10 items-center justify-between gap-4 py-1.5 pr-1.5 pl-3.5", className)} {...props} />
}

// Truncates first when space runs out; a plain-string title gets a native tooltip.
function FrameTitle({ className, title, children, ...props }: DivProps) {
  return (
    <div
      data-slot="frame-title"
      title={title ?? (typeof children === "string" ? children : undefined)}
      className={cn("min-w-0 truncate text-sm font-medium text-foreground", className)}
      {...props}
    >
      {children}
    </div>
  )
}

function FrameActions({ className, ...props }: DivProps) {
  return <div data-slot="frame-actions" className={cn("ml-auto flex shrink-0 items-center gap-2", className)} {...props} />
}

function FramePanel({ className, ...props }: DivProps) {
  return (
    <div
      data-slot="frame-panel"
      className={cn("flex min-h-90 w-full flex-wrap content-center items-center justify-center gap-2 overflow-hidden rounded-xl border border-border bg-card p-12 text-card-foreground shadow-2xs @max-sm/frame:px-4", className)}
      {...props}
    />
  )
}

function FrameFooter({ className, ...props }: DivProps) {
  return <div data-slot="frame-footer" className={cn("flex h-11 items-center justify-between gap-2 py-1.5 pr-1.5 pl-3.5", className)} {...props} />
}

// Helper text for the header or footer: truncates, then hides below 24rem of frame width.
function FrameDescription({ className, ...props }: DivProps) {
  return <div data-slot="frame-description" className={cn("min-w-0 truncate text-xs text-muted-foreground @max-sm/frame:hidden", className)} {...props} />
}

export { Frame, FrameHeader, FrameTitle, FrameActions, FramePanel, FrameFooter, FrameDescription }
