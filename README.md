# Blog

Blog cá nhân — chia sẻ kiến thức về lập trình và các dự án.

## Công nghệ

Astro v6, Tailwind CSS v4, React 19, MDX, Mermaid.

## Cấu trúc

```text
src/
├── components/        # UI components (.astro)
├── content/
│   ├── blog/          # Bài viết .md/.mdx
│   ├── projects/      # Dữ liệu dự án (JSON)
│   └── tutorial/      # Hướng dẫn .md
│       ├── css/
│       ├── git/
│       └── nodejs/
├── layouts/           # BaseLayout
├── pages/             # Trang chủ, bài viết, hướng dẫn, dự án, RSS
└── styles/            # global.css (Tailwind + dark theme)
```

## Content Collections

| Collection | Loader | Schema |
|---|---|---|
| `blog` | Glob `.md/.mdx` | title, description, pubDate, tags, coverImage, draft |
| `tutorial` | Glob `.md/.mdx` | title, description, pubDate, category, tags, coverImage, draft |
| `projects` | File `projects.json` | id, title, description, status (active/participated/archived) |

## Routing

Base path: `/blog`. Internal links must use `import.meta.env.BASE_URL`.

| Route | File |
|---|---|
| `/` | `index.astro` |
| `/[slug]` | `[...slug].astro` |
| `/all` | `all/index.astro` |
| `/projects` | `projects.astro` |
| `/tutorial` | `tutorial/index.astro` |
| `/tutorial/[...slug]` | `tutorial/[...slug].astro` |
| `/rss.xml` | `rss.xml.js` |

## Commands

| Command | Description |
|---|---|
| `npm run dev` | Astro dev server |
| `npm run build` | Static build to `dist/` |
| `npm run preview` | Preview built site |
