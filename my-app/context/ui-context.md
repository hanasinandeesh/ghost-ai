# UI Context

## Theme

Dark only. No light mode. The design language is a dark technical workspace — near-black backgrounds, layered surfaces, and vivid accent colors for interactive elements.

## Colors

All components use these design tokens defined as CSS custom properties. No hardcoded hex values in component markup.

| Role            | CSS Variable       | Value     |
| --------------- | ------------------ | --------- |
| Page background | `--bg-base`        | `#09090b` |
| Surface         | `--bg-surface`     | `#121215` |
| Primary text    | `--text-primary`   | `#f4f4f5` |
| Muted text      | `--text-muted`     | `#a1a1aa` |
| Primary accent  | `--accent-primary` | `#3b82f6` |
| Border          | `--border-default` | `#27272a` |
| Error           | `--state-error`    | `#ef4444` |
| Success         | `--state-success`  | `#22c55e` |

## Typography

| Role      | Font       | Variable            |
| --------- | ---------- | ------------------- |
| UI text   | Geist Sans | `--font-geist-sans` |
| Code/mono | Geist Mono | `--font-geist-mono` |

## Border Radius

| Context           | Class        |
| ----------------- | ------------ |
| Inline / small UI | `rounded-md` |
| Cards / panels    | `rounded-xl` |
| Modals / overlays | `rounded-lg` |

## Component Library

shadcn/ui built on Radix primitives and Tailwind CSS v4. UI primitives reside in `components/ui/`.
- Helper `cn()` lives in `libs/utils.ts` (with alias re-export in `lib/utils.ts`).
- Standard components installed: `button`, `card`, `dialog`, `input`, `tabs`, `textarea`, `scroll-area`.

## Icons

Lucide React (`lucide-react`). Stroke-based icons only. Sizes: `size-4` for inline, `size-5` for buttons.
