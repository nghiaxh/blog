---
title: 'Cài đặt Node.js và npm'
description: 'Hướng dẫn cài đặt Node.js và npm trên Windows, macOS và Linux cùng quản lý phiên bản với nvm'
pubDate: 2026-05-28
category: 'nodejs'
tags: ['nodejs', 'npm', 'javascript', 'frontend']
coverImage: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800'
---

## Node.js là gì?

Node.js là môi trường chạy JavaScript phía server, dựa trên V8 engine của Chrome. Đi kèm với Node.js là **npm** (Node Package Manager) — kho thư viện lớn nhất thế giới.

---

## 1. Cài đặt trực tiếp (cách đơn giản)

### Windows

1. Truy cập <https://nodejs.org>
2. Tải bản **LTS** (Long Term Support) — khuyến nghị cho đa số người dùng
3. Chạy file `.msi` và làm theo hướng dẫn

Sau khi cài, kiểm tra:

```bash
node --version
npm --version
```

### macOS

#### Cách 1 — Dùng official installer

Tương tự Windows, tải `.pkg` từ <https://nodejs.org> và cài đặt.

#### Cách 2 — Dùng Homebrew

```bash
brew install node
```

### Linux (Ubuntu/Debian)

```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs
```

### Linux (Fedora/RHEL)

```bash
# Node.js 22
curl -fsSL https://rpm.nodesource.com/setup_22.x | sudo bash -
sudo dnf install -y nodejs
```

---

## 2. Cài đặt bằng nvm (khuyến nghị cho developer)

**nvm** (Node Version Manager) cho phép chuyển đổi giữa nhiều phiên bản Node.js.

### Windows

Dùng **nvm-windows**:

1. Tải bản mới nhất từ <https://github.com/coreybutler/nvm-windows/releases>
2. Chạy `nvm-setup.exe`
3. Kiểm tra:

```bash
nvm --version
```

Sau đó cài và dùng phiên bản Node mong muốn:

```bash
nvm install lts
nvm use lts
```

### macOS / Linux

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

Sau khi cài, restart terminal hoặc chạy:

```bash
source ~/.bashrc   # hoặc ~/.zshrc
```

Kiểm tra:

```bash
nvm --version
```

Cài Node.js LTS và đặt làm mặc định:

```bash
nvm install --lts
nvm alias default lts/*
```

---

## 3. Kiểm tra cài đặt

```bash
# Phiên bản Node
node --version   # ví dụ: v22.14.0

# Phiên bản npm
npm --version    # ví dụ: 10.x

# Đường dẫn cài đặt
which node       # macOS/Linux
```

---

## 4. Làm quen với npm

### Khởi tạo dự án

```bash
mkdir my-project
cd my-project
npm init -y
```

Kết quả là file `package.json` — đây là "giấy tờ tuỳ thân" của dự án.

### Cài đặt package

```bash
# Cài vào dependencies (dùng trong production)
npm install express

# Cài vào devDependencies (chỉ cần khi phát triển)
npm install --save-dev typescript

# Cài global
npm install -g pnpm
```

### Các lệnh cơ bản

| Lệnh | Mô tả |
|------|-------|
| `npm install` | Cài tất cả dependencies trong `package.json` |
| `npm update` | Cập nhật packages lên phiên bản mới nhất |
| `npm uninstall express` | Gỡ package |
| `npm list --depth=0` | Liệt kê packages đã cài |
| `npm outdated` | Xem packages có bản mới hơn |

### Scripts trong package.json

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview"
  }
}
```

Chạy script:

```bash
npm run dev
npm run build
```

---

## 5. Thay thế cho npm

| Trình quản lý | Đặc điểm |
|--------------|---------|
| **npm** | Mặc định, ổn định, phổ biến |
| **pnpm** | Nhanh hơn, tiết kiệm disk space (dùng hard links) |
| **yarn** | Tương thích npm, nhanh hơn npm ở một số tác vụ |

Cài pnpm:

```bash
npm install -g pnpm
Các lệnh cơ bản tương tự npm.
```

---

## 6. Lưu ý

- Nên dùng phiên bản **LTS** cho dự án production
- **Commit `package-lock.json`** (hoặc `yarn.lock`, `pnpm-lock.yaml`) vào git để lock phiên bản
- Thêm `node_modules` vào `.gitignore`:

```
node_modules/
```

---

## 7. Troubleshooting

### Lỗi "command not found: node"

Chưa cài Node.js hoặc chưa thêm vào PATH. Hãy kiểm tra lại bước cài đặt hoặc restart terminal.

### Lỗi EACCES (permission denied) khi cài global

Trên macOS/Linux nên dùng nvm thay vì cài trực tiếp để tránh vấn đề quyền.

### Lỗi "npm ERR! code ENOENT"

Thiếu file `package.json`. Chạy `npm init -y` trước khi `npm install`.

---

_Bài viết được cập nhật lần cuối ngày 28/05/2026._
