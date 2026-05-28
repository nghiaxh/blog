---
title: 'Làm việc với CSS Flexbox'
description: 'Hướng dẫn chi tiết về Flexbox — cách sắp xếp bố cục linh hoạt với CSS'
pubDate: 2026-05-28
category: 'css'
tags: ['css', 'frontend', 'layout']
coverImage: 'https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?w=800'
---

## Flexbox là gì?

Flexbox (Flexible Box Layout) là mô hình bố cục một chiều trong CSS, giúp bạn căn chỉnh và phân phối không gian giữa các phần tử trong một container linh hoạt hơn so với các phương pháp truyền thống.

---

## 1. Container & Item

### Bắt đầu với Flexbox

```css
.container {
  display: flex;
}
```

Khi thêm `display: flex` vào container, các phần tử con bên trong tự động trở thành **flex items** và được sắp xếp theo chiều ngang (mặc định).

---

## 2. Trục chính & trục chéo

Flexbox hoạt động trên hai trục:

- **Main axis** (trục chính): mặc định là chiều ngang (left → right)
- **Cross axis** (trục chéo): vuông góc với trục chính

Thuộc tính `flex-direction` quyết định hướng của trục chính.

```css
.container {
  flex-direction: row;            /* mặc định: trái → phải */
  flex-direction: row-reverse;    /* phải → trái */
  flex-direction: column;         /* trên → dưới */
  flex-direction: column-reverse; /* dưới → trên */
}
```

---

## 3. Thuộc tính dành cho Container

### `justify-content` — sắp xếp trên trục chính

```css
.container {
  justify-content: flex-start;   /* mặc định: đầu trục chính */
  justify-content: flex-end;      /* cuối trục chính */
  justify-content: center;        /* giữa */
  justify-content: space-between; /* giãn đều, item đầu/cuối sát mép */
  justify-content: space-around;  /* giãn đều, khoảng cách hai đầu = 1/2 khoảng giữa */
  justify-content: space-evenly;  /* giãn đều, mọi khoảng cách bằng nhau */
}
```

### `align-items` — sắp xếp trên trục chéo

```css
.container {
  align-items: stretch;     /* mặc định: kéo giãn đầy container */
  align-items: flex-start;  /* đầu trục chéo */
  align-items: flex-end;    /* cuối trục chéo */
  align-items: center;      /* giữa trục chéo */
  align-items: baseline;    /* theo baseline của text */
}
```

### `flex-wrap` — xuống dòng

```css
.container {
  flex-wrap: nowrap;    /* mặc định: không xuống dòng */
  flex-wrap: wrap;      /* xuống dòng nếu quá rộng */
  flex-wrap: wrap-reverse; /* xuống dòng theo hướng ngược lại */
}
```

### `gap` — khoảng cách giữa các item

```css
.container {
  gap: 16px;         /* khoảng cách dọc & ngang */
  gap: 16px 8px;     /* row-gap column-gap */
}
```

---

## 4. Thuộc tính dành cho Item

### `flex` — shorthand quan trọng nhất

```css
.item {
  flex: grow shrink basis;
}
```

Ví dụ thực tế:

```css
.sidebar {
  flex: 0 0 250px;  /* không co giãn, rộng 250px */
}

.main {
  flex: 1;          /* chiếm toàn bộ khoảng trống còn lại */
}
```

### `align-self` — ghi đè `align-items` cho một item

```css
.item {
  align-self: center;     /* chỉ item này ở giữa */
  align-self: flex-end;   /* chỉ item này ở cuối */
}
```

### `order` — thay đổi thứ tự hiển thị

```css
.item:first-child {
  order: 2;   /* đẩy xuống cuối */
}

.item:last-child {
  order: 1;   /* đưa lên đầu */
}
```

> **Chú ý:** `order` chỉ ảnh hưởng đến thứ tự hiển thị, không thay đổi thứ tự trong DOM hay accessibility.

---

## 5. Ví dụ thực tế

### Header với logo, nav, user avatar

```html
<header class="header">
  <div class="logo">Logo</div>
  <nav class="nav">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </nav>
  <div class="user">👤</div>
</header>
```

```css
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
}

.nav {
  display: flex;
  gap: 16px;
}
```

### Card grid

```css
.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.card {
  flex: 1 1 300px; /* tối thiểu 300px, co giãn để lấp đầy */
}
```

---

## 6. Khi nào dùng Flexbox?

| Dùng Flexbox | Không nên dùng |
|-------------|---------------|
| Navigation, header, footer | Bố cục 2 chiều (dùng Grid) |
| Danh sách item ngang/dọc | Layout toàn trang (dùng Grid) |
| Căn giữa phần tử | — |

---

## 7. Mẹo & Debug

- Dùng `outline` hoặc `background-color` tạm thời để thấy rõ vùng chứa flex items
- Công cụ DevTools của browser có tab **Flexbox** hiển thị trực quan

---

_Bài viết được cập nhật lần cuối ngày 28/05/2026._
