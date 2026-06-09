---
title: "GitHub cơ bản"
description: "Tìm hiểu GitHub, nền tảng lưu trữ và cộng tác mã nguồn, cách tạo repository, Pull Request, Issues và viết README chuyên nghiệp"
pubDate: 2026-06-09
tags: ["git", "github", "tutorial"]
coverImage: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=1600"
---

## GitHub là gì?

GitHub là một dịch vụ lưu trữ trên web dành cho các dự án sử dụng Git. Nó cung cấp giao diện trực quan, công cụ quản lý dự án, theo dõi lỗi (bug tracking), và môi trường để các lập trình viên cộng tác với nhau.

GitHub được ví như "mạng xã hội" và "đám mây" nơi các dự án Git được lưu trữ và chia sẻ.

---

## 1. Repository (Kho lưu trữ)

Repository (repo) là nơi chứa toàn bộ thư mục, tệp tin (code, hình ảnh, tài liệu) và lịch sử thay đổi của một dự án.

### Mức độ hiển thị

| Loại | Mô tả |
|------|-------|
| **Public Repository** | Mọi người đều có thể xem, fork, clone, phù hợp dự án mã nguồn mở |
| **Private Repository** | Chỉ bạn và người được mời mới xem được, phù hợp dự án riêng tư, công ty |

---

## 2. README.md

Khi truy cập vào repo của bạn, điều đầu tiên người khác thấy là file `README.md`, GitHub tự động hiển thị nội dung file này ở trang chủ của repo.

### README.md nên chứa:

- Tên và mô tả ngắn gọn dự án làm gì
- Yêu cầu hệ thống (Prerequisites)
- Hướng dẫn cài đặt (Installation), VD: `npm install`
- Hướng dẫn sử dụng (Usage), VD: `npm start`
- Tên tác giả / Giấy phép (License)

---

## 3. Pull Request (PR)

Pull Request là yêu cầu gộp code từ một nhánh này vào nhánh khác (thường là từ nhánh feature vào `main`).

### Quy trình cơ bản

1. Tạo nhánh mới từ `main`: `git checkout -b ten-tinh-nang`
2. Code và commit trên nhánh đó
3. Push lên GitHub: `git push -u origin ten-tinh-nang`
4. Lên GitHub → tạo Pull Request
5. Mời người khác review code
6. Sau khi được approve → nhấn **Merge** để gộp code vào `main`

---

## 4. Merge (Gộp code)

Sau khi PR được duyệt (Approve), người quản lý dự án sẽ nhấn nút **Merge**. Hành động này trộn code từ nhánh feature vào nhánh đích (thường là `main`).

Các tùy chọn merge trên GitHub:
- **Create a merge commit**: giữ nguyên lịch sử của tất cả commit
- **Squash and merge**: gộp tất cả commit feature thành 1 commit sạch
- **Rebase and merge**: rebase commit lên đầu nhánh đích

---

## 5. Issues

Issues là hệ thống theo dõi công việc (ticketing system) tích hợp sẵn trong mỗi Repository. Dùng để:
- Báo lỗi (bug report)
- Đề xuất tính năng mới (feature request)
- Theo dõi công việc (task tracking)

Mỗi Issue có thể gán người xử lý (assignee), nhãn (label), milestone và có phần thảo luận riêng.

---

_Bài viết được cập nhật lần cuối ngày 09/06/2026._
