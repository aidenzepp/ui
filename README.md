# @aidenzepp shadcn registry

Own components only (MIT). Never add SortUI Pro or any other paid code here.

| item             | type          | installs                                                                                                              |
| ---------------- | ------------- | --------------------------------------------------------------------------------------------------------------------- |
| `frame`          | registry:ui   | `components/ui/frame.tsx` (+ shadcn `utils` for `cn`, + tokens `fill-1` light/dark, `--color-fill-1`, `--shadow-2xs`) |
| `frame-overflow` | registry:hook | `hooks/use-frame-overflow.ts` (`useFrameOverflow`)                                                                    |

## Use

components.json:

```json
"registries": {
  "@aidenzepp": "https://raw.githubusercontent.com/aidenzepp/ui/main/public/r/{name}.json"
}
```

```bash
npx shadcn@latest add @aidenzepp/frame @aidenzepp/frame-overflow
```

Zero-config alternative once the repo is public on GitHub (reads root registry.json):
`npx shadcn@latest add aidenzepp/ui/frame`

## Develop

```bash
npm i && npm run build      # shadcn build -> public/r/*.json
python3 -m http.server 4555 --directory public   # then "@aidenzepp": "http://localhost:4555/r/{name}.json"
```

Gotcha: Frame is a size container (`@container/frame`), so it has no intrinsic width. In a
shrink-to-fit parent (flex item without width, `grid` auto track, inline-block) it collapses;
give it or its parent a width (`w-full`).

`examples/` holds a working overflow-menu example (shadcn dropdown-menu + button); it is not a registry item.

## Lint and format

```bash
npm run check   # vp fmt --check, vp lint --type-aware, tsc --noEmit
npm run fix     # vp fmt, then vp lint --fix
```

Vite+ formats and lints `registry/` and `examples/` with the Ultracite core, anti-slop and React presets; `public/r/` is generated and ignored. Statement spacing inserts blank lines between top-level declarations and calls, between a local call group and a following const declaration, before returns, and after complete if/else statements. Components and hooks stay named function declarations, as in shadcn's own source. `tsconfig.json` maps the install aliases (`@/components/ui/frame`, `@/hooks/use-frame-overflow`) to their registry source and the shadcn primitives to type-only stubs in `stubs/`, so typecheck and type-aware lint run without a host app.
