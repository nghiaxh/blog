# Design

## Theme

- **Dark mode cố định**, không light mode, không dùng `dark:` variant.
- Layout trung tâm, nội dung chính rộng tối đa `max-w-2xl` (672px).
- Padding dọc: `py-12`, padding ngang: `px-6`.

## Colors

| Token | Hex | Usage |
|---|---|---|
| `primary` | `#60a5fa` | Link, accent |
| `bg` | `#191A19` | Nền trang |
| `fg` | `#e5e5e5` | Văn bản chính |
| `fg/60` | `#e5e5e599` | Mô tả, text phụ |
| `border` | `#262626` | Đường viền, separator |
| selection bg | `primary` | Chọn văn bản (nền xanh, chữ đen) |

## Typography

- **Sans**: Inter, 4 weights (400, 500, 600, 700) — Google Fonts
- **Code**: JetBrains Mono (kế hoạch, chưa cấu hình)
- Body size mặc định Tailwind (`text-base` / 1rem)
- Prose size mặc định, không custom `--tw-prose-*` size
- Slug (heading ID) loại bỏ dấu tiếng Việt bằng `rehype-vietnamese-slug`

## Spacing

- `space-y-4`: danh sách bài viết (home, all posts, related)
- `space-y-3`: danh sách dự án
- `mb-8` / `mb-10` / `mb-12`: khoảng cách giữa sections
- `gap-x-2`: metadata inline (date, reading time, tags)
- `mt-3`: metadata dưới tiêu đề bài viết
- `mt-16`: related posts section

## Components tree

```
BaseLayout (html, head, fonts, footer)
├── Trang chủ        index.astro
│   ├── Intro (name, links, bio)
│   ├── Bài viết (recent 3)
│   ├── Hướng dẫn (recent 3)
│   └── Dự án (static preview)
├── Bài viết         all/index.astro + all/[page].astro
│   └── Danh sách nhóm theo năm, phân trang 5/page
├── Chi tiết bài     [...slug].astro
│   ├── Back link
│   ├── Header (title, date, reading time, word count, tags)
│   ├── Cover image (optional)
│   ├── Sidebar mục lục (desktop, fixed)
│   ├── Prose content
│   └── RelatedPosts component
├── Hướng dẫn        tutorial/index.astro
│   └── Danh sách nhóm theo category
├── Chi tiết HD      tutorial/[...slug].astro
│   └── Header (category label, title, date, tags)
├── Dự án            projects.astro
│   └── Static sections (đang hoạt động, đã tham gia, đã ngưng)
└── 404              404.astro
    └── Center: 404 + link về trang chủ
```

## Pages detail

### Trang chủ (`/`)
- 4 sections dọc: intro, bài viết, hướng dẫn, dự án.
- Section heading là link `text-sm uppercase`.
- Mỗi section cách nhau `mb-16`.
- Chỉ hiện 3 bài gần nhất, có link "Xem tất cả" nếu > 3.

### Bài viết (`/all`)
- Nhóm theo năm, mỗi năm cách `mb-10`.
- Năm label `text-sm font-bold`.
- Phân trang 5 bài/page, navigation giữa trang: `← Trang trước | 1/3 | Trang sau →`.
- Navigation nằm dưới `border-t border-border pt-8 mt-12`.

### Chi tiết bài viết (`/:slug`)
- Back link "Quay lại" ở đầu.
- Title `text-3xl font-bold`.
- Metadata inline: `date • reading time • word count • #tag1 #tag2`.
- Cover image `w-full rounded-lg mb-10` (optional).
- Mục lục sidebar fixed bên trái desktop (`hidden lg:block`), vị trí `top-32 left-[max(calc(50%-21rem-14rem),1.5rem)] w-36`.
- Headings từ depth >= 2, depth 3 thụt lề `pl-3`.
- Related posts section dưới cùng, separated by `border-t border-border mt-16`.

### Hướng dẫn (`/tutorial`)
- Nhóm theo category label (định nghĩa trong `categoryLabels` map).
- Mỗi nhóm cách `mb-12`.

### Chi tiết hướng dẫn (`/tutorial/:slug`)
- Giống blog post nhưng đơn giản hơn:
  - Không word count, reading time, cover image, mục lục, related posts.
  - Có category label `text-xs uppercase` phía trên title.

## Links

- Default: `text-primary`, hover: `text-fg` + `hover:underline`.
- Title links trong danh sách: `font-medium text-fg`, hover `text-fg` (không gạch chân).
- Back links: `text-sm`, hover `text-fg hover:underline`.

## Prose (blog/tutorial body)

Override `--tw-prose-*` variables trong `global.css` để khớp theme:
- body, headings, bold → `--color-fg`
- links → `--color-primary`
- code → `--color-fg`

Content class: `<div class="prose prose-neutral max-w-none prose-invert">`.

## Interactions

- `transition-colors` trên tất cả links, buttons.
- `hover:underline` trên links dạng text.
- `cursor-pointer` mặc định cho links.

## Responsive

- Mobile-first, single column.
- Mục lục ẩn trên mobile (`hidden lg:block`).
- `flex-wrap` cho metadata để xuống dòng khi hẹp.

## Favicon

- `favicon.svg`: nền đen (`#111`), hình tròn trắng ở giữa, bo góc 6px.
- `favicon.ico`: fallback.

## Notes

- Các page không dùng chung component danh sách — mỗi page tự render list riêng.
- `RelatedPosts` là component duy nhất có logic (tính điểm shared tags).
- Tags không phải link — chỉ hiển thị dạng `#tag`.
- Mọi internal path đều dùng `import.meta.env.BASE_URL` prefix (`/blog`).
