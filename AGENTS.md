# Project Conventions

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Astro v6 |
| CSS | Tailwind CSS v4 (via `@tailwindcss/vite`) |
| Typography | `@tailwindcss/typography` (`.prose`) |
| UI | Astro components (`.astro`), React 19 for interactive islands |
| Content | Astro Content Collections (Markdown + MDX) |
| Fonts | Inter (sans), JetBrains Mono (code) via Google Fonts |
| Language | Vietnamese (`lang="vi"`) |

## Theme (dark-only)

Theme values defined in `src/styles/global.css` via Tailwind v4 `@theme`:

| Class | Hex | Dùng cho |
|---|---|---|
| `text-fg` / `bg-fg` | `#e5e5e5` | Nội dung chính (body, headings, links) |
| `text-primary` / `bg-primary` | `#60a5fa` | Accent/màu nhấn (links) |
| `bg-bg` | `#0a0a0a` | Nền trang |
| `border-border` | `#262626` | Đường viền |

**Không có light mode.** Site chạy dark theme cố định. Không dùng `dark:` variants.

## Text color rules

Luôn dùng `text-fg` cho tất cả văn bản: body, headings, list items, metadata, back link, year labels, footer, nav links, project descriptions.

Link mặc định dùng `text-primary`, hover chuyển `text-fg` kèm `hover:underline`.

## Prose (blog post body)

`src/styles/global.css` override sẵn `--tw-prose-*` variables. Blog content nằm trong `<div class="prose prose-neutral max-w-none">`.

## Favicon

`public/favicon.svg` — nền đen (`#111`), chữ **N** trắng, bo góc 6px.

## Content collection (blog)

Schema (Zod) in `src/content.config.ts`:
- `title` (string), `description` (string), `pubDate` (date)
- `updatedDate` (date, optional), `tags` (string[], optional)
- `coverImage` (string, optional), `draft` (boolean, default false)

## Routing

`base: '/blog'` (GitHub Pages project site).

| Route | File | URL thực tế |
|---|---|---|
| `/` | `src/pages/index.astro` | `/blog/` |
| `/[slug]` | `src/pages/[...slug].astro` | `/blog/slug` |
| `/all` | `src/pages/all/index.astro` | `/blog/all` |
| `/projects` | `src/pages/projects.astro` | `/blog/projects` |
| `/rss.xml` | `src/pages/rss.xml.js` | `/blog/rss.xml` |

## JSX / React

Khi dùng React (`.tsx`), camelCase props: `className`, `strokeWidth`, `strokeLinecap`.
