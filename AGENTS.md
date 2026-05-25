# Color System & Dark Mode Conventions

## CSS Variables (defined in `src/styles/global.css`)

| Variable | Light | Dark | Dùng cho |
|---|---|---|---|
| `--color-fg` | `#111` | `#e5e5e5` | Nội dung chính (body, headings, links, văn bản) |
| `--color-primary` | `#2563eb` | `#60a5fa` | Accent/màu nhấn (link hover) |
| `--color-bg` | `#ffffff` | `#0a0a0a` | Nền trang |
| `--color-border` | `#e5e5e5` | `#262626` | Đường viền |

## Quy tắc: chữ không bị xám

Luôn dùng `text-(--color-fg) dark:text-(--color-fg-dark)` cho **tất cả văn bản**:
- Body text, paragraphs
- Section headings (h1, h2, h3)
- List items, strong/bold
- Post titles trên homepage
- Metadata (ngày tháng, reading time, tags)
- Back link (`← Home`)
- Year labels
- Footer text
- Project descriptions
- Nav links

## Dark Mode: luôn dùng `dark:` pair

Mỗi class màu sắc phải đi kèm variant dark tương ứng:

```astro
class="text-(--color-fg) dark:text-(--color-fg-dark)"
class="hover:text-(--color-primary) dark:hover:text-(--color-primary-dark)"
class="border-(--color-border) dark:border-(--color-border-dark)"
class="bg-(--color-bg) dark:bg-(--color-bg-dark)"
```

## Prose (blog post body)

`src/styles/global.css` override prose colors để đảm bảo nội dung bài viết không bị xám:

```css
@layer base {
  .prose {
    --tw-prose-body: var(--color-fg);
    --tw-prose-headings: var(--color-fg);
    --tw-prose-links: var(--color-primary);
    --tw-prose-bold: var(--color-fg);
    --tw-prose-code: var(--color-fg);
  }
  .dark .prose {
    --tw-prose-body: var(--color-fg-dark);
    --tw-prose-headings: var(--color-fg-dark);
    --tw-prose-links: var(--color-primary-dark);
    --tw-prose-bold: var(--color-fg-dark);
    --tw-prose-code: var(--color-fg-dark);
  }
}
```

## Lưu ý React JSX

Trong React component (`.tsx`), dùng camelCase props:
- `className` thay vì `class`
- `strokeWidth` thay vì `stroke-width`
- `strokeLinecap` thay vì `stroke-linecap`
