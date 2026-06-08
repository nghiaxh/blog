---
title: "Xử lý Xung đột trong Git"
description: "Hiểu bản chất conflict, các kỹ thuật giải quyết merge conflict, rebase conflict thủ công và sử dụng công cụ GUI như VS Code, Meld, KDiff3 để xử lý xung đột hiệu quả"
pubDate: 2026-06-02
tags: ["git", "tutorial", "conflict", "merge"]
coverImage: "https://images.unsplash.com/photo-1774901128275-dcba96786383?w=1600"
---

## Conflict là gì?

Conflict xảy ra khi Git không thể tự động gộp 2 thay đổi cùng một dòng trong cùng một file. Thường xảy ra khi:
- Merge branch
- Rebase
- Pull từ remote có thay đổi xung đột

---

## 1. Nhận diện Conflict

Khi merge/rebase bị conflict:

```
CONFLICT (content): Merge conflict in ten-file.txt
Automatic merge failed; fix conflicts and then commit the result.
```

File bị conflict sẽ có dấu hiệu:

```text
<<<<<<< HEAD
Nội dung branch hiện tại (main)
=======
Nội dung branch merge vào (feature)
>>>>>>> feature
```

---

## 2. Giải quyết Merge Conflict

### Bước 1: Xem file conflict
```bash
git status
# Unmerged paths: ten-file.txt
```

### Bước 2: Mở file và sửa
Chỉnh sửa file, chọn giữ code nào hoặc gộp thủ công:

```text
<<<<<<< HEAD
function hello() {
  console.log("Hello từ main");
}
=======
function hello() {
  console.log("Hello từ feature");
}
>>>>>>> feature
```

Sửa thành:

```text
function hello() {
  console.log("Hello từ main và feature");
}
```

### Bước 3: Stage file đã sửa
```bash
git add ten-file.txt
```

### Bước 4: Commit merge
```bash
git commit
# Git sẽ mở editor với message merge mặc định
```

---

## 3. Giải quyết Rebase Conflict

```bash
git rebase main
# Conflict ở commit thứ 2/3

# Sửa file conflict
git add ten-file.txt

# Tiếp tục rebase
git rebase --continue

# Hoặc bỏ qua commit gây conflict
git rebase --skip

# Hoặc hủy rebase hoàn toàn
git rebase --abort
```

---

## 4. Công cụ hỗ trợ giải quyết Conflict

### VS Code (built-in)
- Mở file conflict → hiện nút "Accept Current / Incoming / Both"
- Extensions: **GitLens**, **Conflict Marker**

### Git Mergetool
```bash
git mergetool
# Mở tool: vimdiff, meld, kdiff3, vscode, ...
```

Cấu hình tool:
```bash
git config --global merge.tool vscode
git config --global mergetool.vscode.cmd 'code --wait $MERGED'
```

### Các tool phổ biến
- **Meld** (Linux/Windows) — GUI so sánh 3-way
- **KDiff3** — cross-platform
- **Beyond Compare** — trả phí, mạnh
- **P4Merge** — miễn phí

---

## 5. Tránh Conflict

1. **Pull thường xuyên** trước khi làm việc mới
2. **Branch nhỏ**, merge sớm
3. **Rebase local branch** lên main trước khi push
4. **Trao đổi với team** khi sửa cùng file quan trọng
5. **Dùng .gitattributes** cho file binary/auto-generated

---

## 6. Các lệnh hữu ích

| Lệnh | Mô tả |
|------|-------|
| `git status` | Xem file conflict |
| `git diff` | Xem chi tiết conflict |
| `git add <file>` | Stage sau khi sửa |
| `git commit` | Hoàn tất merge |
| `git merge --abort` | Hủy merge |
| `git rebase --abort` | Hủy rebase |
| `git mergetool` | Mở công cụ GUI |

---

_Bài viết được cập nhật lần cuối ngày 02/06/2026._