# AGENTS.md — blog

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

## Commands

| Command | What it does |
|---|---|
| `npm run dev` | Astro dev server |
| `npm run build` | `astro build` — static site to `dist/` |
| `npm run preview` | Astro preview of built `dist/` |

No linter or test framework configured.

## Deployment

GitHub Pages via [`actions/deploy-pages`](https://github.com/actions/deploy-pages) on push to `main`.

| Config | Value |
|---|---|
| Site URL | `https://nghiaxh.github.io` |
| Base path | `/blog` (`astro.config.mjs` → `base: '/blog'`) |
| Build output | `dist/` |
| Node version | 22 |

Workflow file: `.github/workflows/deploy.yml`.

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

**Quan trọng:** Mọi internal link (absolute path) phải dùng `import.meta.env.BASE_URL` prefix, vì site deploy ở sub-path `/blog`. Ví dụ: `href={base + '/all'}`, `href={base + '/' + post.id}`.

## JSX / React

Khi dùng React (`.tsx`), camelCase props: `className`, `strokeWidth`, `strokeLinecap`.

## Git commit convention

Dùng [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>
```

Types: `feat`, `fix`, `docs`, `refactor`, `chore`, `style`, `perf`, `test`, `ci`, `build`.

- `feat` — tính năng mới
- `fix` — sửa lỗi
- `docs` — thay đổi tài liệu/blog content
- `refactor` — tái cấu trúc code (không thay đổi hành vi)
- `chore` — bảo trì, dependencies, config
- `style` — format code, CSS
- `ci` — CI/CD
- `build` — build system

Scope (tuỳ chọn) là tên file/thư mục chịu ảnh hưởng. Ví dụ: `feat(favicon):`, `fix(blog):`, `chore(deps):`.

Viết mô tả bằng tiếng Anh, thì hiện tại, không viết hoa chữ cái đầu, không có dấu chấm cuối.
