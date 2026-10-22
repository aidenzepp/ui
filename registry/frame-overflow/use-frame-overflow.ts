"use client"

import * as React from "react"

// Collapsing header actions for Frame.
//
// Mark each low-priority inline group with data-overflow="<name>" and hide it with a
// frame container query (e.g. @max-lg/frame:hidden). Put the trigger ref on the "…"
// menu trigger inside the same Frame and pass onOpenChange to the menu. When the menu
// opens, `hidden[name]` says which groups the container queries collapsed, so the
// menu can render those actions instead.
function useFrameOverflow<const Name extends string>(names: readonly Name[]) {
  const triggerRef = React.useRef<HTMLButtonElement>(null)
  const key = names.join("\u0000")
  const initial = React.useMemo(
    () => Object.fromEntries(names.map((name) => [name, false])) as Record<Name, boolean>,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [key]
  )
  const [hidden, setHidden] = React.useState(initial)

  const onOpenChange = React.useCallback(
    (open: boolean) => {
      const frame = triggerRef.current?.closest("[data-slot=frame]")
      if (!open || !frame) return
      const next = { ...initial }
      for (const name of Object.keys(initial) as Name[]) {
        const el = frame.querySelector<HTMLElement>(`[data-overflow="${CSS.escape(name)}"]`)
        next[name] = !el || !(el.checkVisibility?.() ?? el.getClientRects().length > 0)
      }
      setHidden(next)
    },
    [initial]
  )

  const anyHidden = (Object.values(hidden) as boolean[]).some(Boolean)
  return { triggerRef, hidden, anyHidden, onOpenChange }
}

export { useFrameOverflow }
