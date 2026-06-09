---
title: "Khởi tạo Repository, Commit và Quản lý Lịch sử Thay đổi"
description: "Nắm vững quy trình làm việc cơ bản Git: khởi tạo repo, staging, commit, đồng bộ remote và theo dõi lịch sử thay đổi mã nguồn"
pubDate: 2026-05-29
tags: ["git", "tutorial", "basic-workflow"]
coverImage: "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?w=1600"
---

## 1. Khởi tạo repository

```bash
# Tạo repo mới
git init

# Hoặc clone repo có sẵn
git clone https://github.com/ten-nguoi-dung/ten-repo.git
```

---

## 2. Thêm file & Commit

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

---

## 3. Đồng bộ với Remote

```bash
# Thêm remote
git remote add origin https://github.com/ten-nguoi-dung/ten-repo.git

# Đổi tên nhánh hiện tại thành main (nếu đang là master)
git branch -M main

# Đẩy code lên remote lần đầu
git push -u origin main

# Kéo code mới nhất từ remote
git pull
```

---

## 4. Sơ đồ Flow cơ bản

```
Working Directory  →    Staging Area  →    Local Repo   →    Remote Repo
   (sửa code)            (git add)        (git commit)       (git push)
```

1. **Working Directory**: Làm việc trong thư mục dự án
2. **Staging Area**: dùng `git add` để đánh dấu file sẽ commit
3. **Local Repo**: dùng `git commit` để lưu snapshot vào kho local
4. **Remote Repo**: dùng `git push` để đồng bộ lên GitHub/GitLab/etc...

---

## 5. Thuật ngữ cơ bản

| Thuật ngữ | Ý nghĩa |
|-----------|---------|
| **Commit** | Thao tác lưu lại các thay đổi (thêm, xóa, sửa file) vào repository |
| **Branch** | Một dòng phát triển riêng, cho phép làm việc độc lập mà không ảnh hưởng code chính |
| **Remote** | Repository trên internet (GitHub, GitLab, …) mà local repo kết nối tới |
| **Origin** | Tên mặc định của remote khi clone hoặc thêm remote lần đầu |
| **Push** | Đẩy commit từ local repo lên remote repo |
| **Pull** | Kéo commit mới nhất từ remote về local repo |

---

## 6. Xem lịch sử thay đổi

```bash
# Xem lịch sử commit (gọn)
git log --oneline

# Xem lịch sử chi tiết
git log

# Xem lịch sử có đồ họa
git log --oneline --graph --all

# Xem thay đổi của một commit cụ thể
git show <commit-hash>

# Xem thay đổi chưa stage
git diff

# Xem thay đổi đã stage
git diff --staged
```

---

## 7. Bảng tổng hợp lệnh Git

### Bắt đầu với Git

| Lệnh | Ý nghĩa |
|------|---------|
| `git init` | Khởi tạo repository Git |
| `git config --global user.name "tên"` | Đặt tên người dùng Git |
| `git config --global user.email "email"` | Đặt email người dùng Git |

### Làm việc cơ bản

| Lệnh | Ý nghĩa |
|------|---------|
| `git status` | Kiểm tra trạng thái file |
| `git add .` | Thêm tất cả file vào staging |
| `git add ten-file` | Thêm một file vào staging |
| `git commit -m "message"` | Lưu thay đổi với ghi chú commit |
| `git log --oneline` | Xem lịch sử commit ngắn gọn |

### Share repo lên GitHub

| Lệnh | Ý nghĩa |
|------|---------|
| `git remote add origin URL` | Kết nối repository local với GitHub |
| `git branch -M main` | Đổi tên nhánh chính thành main |
| `git push -u origin main` | Đẩy code lên GitHub lần đầu |
| `git pull` | Đồng bộ code từ GitHub về |

---

_Bài viết được cập nhật lần cuối ngày 29/05/2026._