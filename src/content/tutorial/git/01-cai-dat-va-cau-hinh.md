---
title: "Cài đặt và cấu hình Git"
description: "Hướng dẫn chi tiết cài đặt Git trên Windows, macOS, Linux và cấu hình ban đầu để bắt đầu quản lý phiên bản mã nguồn chuyên nghiệp"
pubDate: 2026-05-27
tags: ["git", "tutorial", "setup"]
coverImage: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800"
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

> **Mẹo:** Trong bước "Adjusting the name of the initial branch in new repositories", bạn nên chọn `main` thay vì `master`.

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

_Bài viết được cập nhật lần cuối ngày 27/05/2026._