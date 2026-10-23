"use client";

import * as React from "react";

// Collapsing header actions for Frame.
//
// Mark each low-priority inline group with data-overflow="<name>" and hide it with a
// frame container query (e.g. @max-lg/frame:hidden). Put the trigger ref on the "…"
// menu trigger inside the same Frame and pass onOpenChange to the menu. When the menu
// opens, `hidden[name]` says which groups the container queries collapsed, so the
// menu can render those actions instead.
function useFrameOverflow<const Name extends string>(names: readonly Name[]) {
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  // Callers usually pass an inline array, so memoize on its contents rather than its identity.
  const key = JSON.stringify(names);
  const initial = React.useMemo(() => {
    // SAFETY: key is JSON.stringify(names), so it parses back to the same Name[].
    const keyNames = JSON.parse(key) as Name[];

    // SAFETY: every name in keyNames becomes a key, so the record holds exactly the Name keys.
    return Object.fromEntries(keyNames.map((name) => [name, false])) as Record<Name, boolean>;
  }, [key]);
  const [hidden, setHidden] = React.useState(initial);

  const onOpenChange = React.useCallback(
    (open: boolean) => {
      const frame = triggerRef.current?.closest("[data-slot=frame]");

      if (!open || !frame) {
        return;
      }

      const next = { ...initial };

      // SAFETY: initial was built from Name keys only, so its own keys are all Name.
      for (const name of Object.keys(initial) as Name[]) {
        const el = frame.querySelector<HTMLElement>(`[data-overflow="${CSS.escape(name)}"]`);

        next[name] = !el || !(el.checkVisibility?.() ?? el.getClientRects().length > 0);
      }

      setHidden(next);
    },
    [initial],
  );

  const anyHidden = Object.values<boolean>(hidden).some(Boolean);

  return { anyHidden, hidden, onOpenChange, triggerRef };
}

export { useFrameOverflow };
