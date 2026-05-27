---
title: "Cách cài đặt Git & quy trình cơ bản"
description: "Cài đặt và cấu hình Git trên Windows, macOS, Linux và quy trình làm việc cơ bản"
pubDate: 2026-05-27
tags: ["git", "tutorial"]
coverImage: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800"
---

## Git là gì?

Git là hệ thống quản lý phiên bản phân tán (DVCS) phổ biến nhất hiện nay, giúp bạn theo dõi lịch sử thay đổi của mã nguồn và làm việc nhóm hiệu quả.

---

## 1. Cài đặt Git

### Windows

1. Tải bộ cài từ <https://git-scm.com/download/win>
2. Chạy file `.exe` và làm theo các bước cài đặt
3. Sau khi cài, mở **Git Bash** (hoặc **Command Prompt** / **PowerShell**) và kiểm tra:

```bash
git --version
```

> **Mẹo:** Trong bước "Adjusting the name of the initial branch in new repositories", bạn nên chọn `main`  thay vì `master`.

### macOS

#### Cách 1 — Dùng Homebrew (khuyến nghị)

```bash
brew install git
```

#### Cách 2 — Dùng Xcode Command Line Tools

```bash
xcode-select --install
```

Sau đó kiểm tra:

```bash
git --version
```

### Linux (Ubuntu/Debian)

```bash
sudo apt update
sudo apt install git -y
git --version
```

### Linux (Fedora/RHEL)

```bash
sudo dnf install git -y
git --version
```

### Linux (Arch)

```bash
sudo pacman -S git
git --version
```

---

## 2. Cấu hình lần đầu

Sau khi cài, bạn cần khai báo tên và email — thông tin này sẽ gắn vào mỗi commit:

```bash
git config --global user.name "Tên của bạn"
git config --global user.email "email@example.com"
```

Kiểm tra lại cấu hình:

```bash
git config --global --list
```

### Một số cấu hình hữu ích khác

```bash
# Đặt branch mặc định là main (thay vì master)
git config --global init.defaultBranch main

# Bật màu cho output
git config --global color.ui auto

# Dùng rebase thay vì merge khi pull
git config --global pull.rebase true
```

---

## 3. Quy trình làm việc cơ bản

### 3.1. Khởi tạo repository

```bash
# Tạo repo mới
git init

# Hoặc clone repo có sẵn
git clone https://github.com/ten-nguoi-dung/ten-repo.git
```

### 3.2. Thêm file & commit

```bash
# Xem trạng thái
git status

# Thêm file vào staging area
git add ten-file.txt

# Thêm tất cả file
git add .

# Commit với thông điệp
git commit -m "feat: thêm tính năng mới"
```

### 3.3. Đồng bộ với remote

```bash
# Thêm remote
git remote add origin https://github.com/ten-nguoi-dung/ten-repo.git

# Đẩy code lên remote
git push -u origin main

# Kéo code mới nhất từ remote
git pull
```

---

## 4. Sơ đồ flow cơ bản

```
Working Directory  →    Staging Area  →    Local Repo   →    Remote Repo
   (sửa code)            (git add)        (git commit)       (git push)
```

1. **Working Directory**: Làm việc trong thư mục dự án
2. **Staging Area** — Dùng `git add` để đánh dấu file sẽ commit
3. **Local Repo** — Dùng `git commit` để lưu snapshot vào kho local
4. **Remote Repo** — Dùng `git push` để đồng bộ lên GitHub/GitLab/etc...

---

## 5. Các lệnh thường dùng

| Lệnh                         | Mô tả                             |
| ---------------------------- | --------------------------------- |
| `git status`                 | Xem trạng thái file               |
| `git log --oneline`          | Xem lịch sử commit (gọn)          |
| `git diff`                   | Xem thay đổi chưa stage           |
| `git branch`                 | Liệt kê branch                    |
| `git checkout -b ten-branch` | Tạo và chuyển sang branch mới     |
| `git merge ten-branch`       | Gộp branch vào branch hiện tại    |
| `git stash`                  | Tạm cất thay đổi để làm việc khác |
| `git stash pop`              | Lấy lại thay đổi đã cất           |

---

## 6. Mẹo & tài nguyên

- **.gitignore** dùng để liệt kê những thư mục/file không cần theo dõi (node_modules, .env, dist...)
- Nên đặt tên commit theo chuẩn: `feat:`, `fix:`, `docs:`, `refactor:`, `chore:`,...

---

_Bài viết được cập nhật lần cuối ngày 27/05/2026._
