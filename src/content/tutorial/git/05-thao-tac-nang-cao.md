---
title: "Các thao tác nâng cao trong Git"
description: "Làm chủ các kỹ thuật nâng cao: stash tạm cất thay đổi, reset/revert lịch sử, cherry-pick commit, interactive rebase, bisect tìm bug và tối ưu quy trình làm việc chuyên nghiệp"
pubDate: 2026-06-05
tags: ["git", "tutorial", "advanced"]
coverImage: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=1600"
---

## 1. Stash (Tạm cất thay đổi)

```bash
# Tạm cất thay đổi hiện tại
git stash

# Tạm cất với thông điệp
git stash push -m "thông điệp"

# Liệt kê stash
git stash list

# Áp dụng stash gần nhất
git stash apply

# Áp dụng stash cụ thể
git stash apply stash@{1}

# Xóa stash gần nhất
git stash drop

# Áp dụng và xóa
git stash pop

# Xóa tất cả stash
git stash clear
```

---

## 2. Reset (Quay lại commit trước đó)

```bash
# Quay lại commit nhưng giữ thay đổi trong working directory
git reset --soft <commit-hash>

# Quay lại commit và xóa thay đổi khỏi staging area
git reset --mixed <commit-hash>

# Quay lại commit và hoàn toàn xóa thay đổi
git reset --hard <commit-hash>
```

> **Lưu ý:** Không nên reset commit đã push lên remote.

---

## 3. Revert (Hủy commit nhưng giữ lịch sử)

```bash
# Hủy commit nhưng tạo commit mới
git revert <commit-hash>

# Hủy nhiều commit liên tiếp
git revert <commit-hash>..<commit-hash>
```

---

## 4. Cherry-pick (Áp dụng commit từ branch khác)

```bash
# Áp dụng commit cụ thể
git cherry-pick <commit-hash>

# Áp dụng nhiều commit
git cherry-pick <commit-hash1> <commit-hash2>
```

---

## 5. Rebase (Căn chỉnh lại lịch sử)

```bash
# Rebase branch hiện tại lên main
git rebase main

# Interactive rebase (sửa commit)
git rebase -i HEAD~3
```

> **Lưu ý:** Không rebase commit đã push lên remote.

---

## 6. Các lệnh hữu ích khác

| Lệnh | Mô tả |
|------|-------|
| `git stash` | Tạm cất thay đổi |
| `git reset --hard HEAD` | Xóa tất cả thay đổi chưa commit |
| `git revert <hash>` | Hủy commit nhưng giữ lịch sử |
| `git cherry-pick <hash>` | Áp dụng commit từ branch khác |
| `git rebase -i HEAD~3` | Sửa lịch sử commit |

---

_Bài viết được cập nhật lần cuối ngày 05/06/2026._