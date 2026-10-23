"use client";

import * as React from "react";

function isShown(el: Element | null) {
  return el instanceof HTMLElement && el.checkVisibility();
}

function selector(name: string) {
  return `[data-overflow="${CSS.escape(name)}"]`;
}

/**
 * Collapses low-priority Frame header actions into its overflow menu.
 *
 * Mark each inline group with data-overflow="<name>" and hide it with a frame container
 * query (e.g. @max-lg/frame:hidden). Put triggerRef on the "…" menu trigger inside the same
 * Frame and pass onOpenChange to the menu. When the menu opens, hidden holds the groups the
 * container queries collapsed, so the menu can render those actions instead.
 */
function useFrameOverflow<const Name extends string>(names: readonly Name[]) {
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const [hidden, setHidden] = React.useState<ReadonlySet<Name>>(() => new Set());

  function onOpenChange(open: boolean) {
    const frame = triggerRef.current?.closest("[data-slot=frame]");

    if (!open || !frame) {
      return;
    }

    setHidden(new Set(names.filter((name) => !isShown(frame.querySelector(selector(name))))));
  }

  return { hidden, onOpenChange, triggerRef };
}

export { useFrameOverflow };
