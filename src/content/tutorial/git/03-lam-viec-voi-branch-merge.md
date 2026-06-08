---
title: "Làm việc với Branch và Merge"
description: "Học cách tạo, quản lý nhánh (branch), gộp mã nguồn (merge), rebase và áp dụng các chiến lược branching như Git Flow, GitHub Flow cho dự án thực tế"
pubDate: 2026-05-30
tags: ["git", "tutorial", "branch", "merge"]
coverImage: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=1600"
---

## 1. Branch là gì?

Branch (nhánh) là một con trỏ di chuyển tới các commit. Mặc định ban đầu là `main`. Branch giúp bạn phát triển tính năng mới, sửa lỗi mà không ảnh hưởng code chính.

---

## 2. Các lệnh cơ bản với Branch

```bash
# Liệt kê branch (local)
git branch

# Liệt kê tất cả branch (kể cả remote)
git branch -a

# Tạo branch mới
git branch ten-branch

# Tạo và chuyển sang branch mới
git checkout -b ten-branch

# Chuyển sang branch khác
git checkout ten-branch

# Hoặc dùng switch (Git 2.23+)
git switch ten-branch
git switch -c ten-branch  # tạo mới và chuyển

# Đổi tên branch hiện tại
git branch -m ten-branch-moi

# Xóa branch local
git branch -d ten-branch     # chỉ xóa nếu đã merge
git branch -D ten-branch     # force xóa

# Xóa branch remote
git push origin --delete ten-branch
```

---

## 3. Merge (Gộp branch)

```bash
# Chuyển về branch đích (thường là main)
git checkout main

# Gộp branch vào branch hiện tại
git merge ten-branch

# Gộp không fast-forward (tạo merge commit)
git merge --no-ff ten-branch
```

### Loại merge

| Loại | Mô tả |
|------|-------|
| **Fast-forward** | Branch đích chưa có commit mới, chỉ di chuyển con trỏ |
| **Merge commit** | Tạo commit mới gộp 2 lịch sử (khuyên dùng với `--no-ff`) |
| **Squash** | Gộp tất cả commit của branch thành 1 commit |

---

## 4. Rebase (Căn chỉnh lại lịch sử)

```bash
# Rebase branch hiện tại lên main
git rebase main

# Interactive rebase (sửa commit)
git rebase -i HEAD~3
```

> **Lưu ý:** Không rebase branch đã push lên remote (shared branch).

---

## 5. Chiến lược Branching phổ biến

### Git Flow
- `main` — production
- `develop` — development
- `feature/*` — tính năng mới
- `release/*` — chuẩn bị release
- `hotfix/*` — sửa lỗi gấp

### GitHub Flow (đơn giản hơn)
- `main` — luôn deployable
- `feature/*` — tạo branch, PR, review, merge

### Trunk-based Development
- Commit trực tiếp `main` hoặc branch ngắn hạn (< 1 ngày)
- Phù hợp CI/CD mạnh

---

## 6. Các lệnh tham khảo nhanh

| Lệnh | Mô tả |
|------|-------|
| `git branch` | Liệt kê branch local |
| `git checkout -b ten-branch` | Tạo và chuyển branch |
| `git merge ten-branch` | Gộp branch |
| `git rebase main` | Rebase lên main |
| `git log --oneline --graph` | Xem sơ đồ branch |

---

_Bài viết được cập nhật lần cuối ngày 30/05/2026._