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

# Đẩy code lên remote
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
2. **Staging Area** — Dùng `git add` để đánh dấu file sẽ commit
3. **Local Repo** — Dùng `git commit` để lưu snapshot vào kho local
4. **Remote Repo** — Dùng `git push` để đồng bộ lên GitHub/GitLab/etc...

---

## 5. Xem lịch sử thay đổi

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

## 6. Các lệnh thường dùng

| Lệnh | Mô tả |
|------|-------|
| `git status` | Xem trạng thái file |
| `git log --oneline` | Xem lịch sử commit (gọn) |
| `git diff` | Xem thay đổi chưa stage |
| `git show <hash>` | Xem chi tiết commit |

---

_Bài viết được cập nhật lần cuối ngày 29/05/2026._