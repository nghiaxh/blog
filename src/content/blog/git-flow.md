---
title: 'Git flow trực quan với Mermaid'
description: 'Trực quan hoá quy trình Git: branch strategy, pull request, merge — vẽ bằng Mermaid ngay trong Markdown'
pubDate: 2026-05-27
tags: ['git', 'mermaid', 'tutorial']
---

## Git branch cơ bản

```mermaid
gitGraph
  commit id: "init"
  branch feature
  checkout feature
  commit id: "add login"
  commit id: "add API"
  checkout main
  merge feature
  commit id: "v1.0"
```

## Quy trình feature branch

```mermaid
flowchart LR
  A[main] -->|git checkout -b| B[feature/abc]
  B -->|git add + commit| C[feature/abc *]
  C -->|git push| D[origin/feature/abc]
  D -->|tạo PR| E[Review code]
  E -->|approve| F[Merge vào main]
```

## Pull request & code review

```mermaid
sequenceDiagram
  actor Dev
  actor Reviewer
  participant GitHub

  Dev->>GitHub: git push origin feature
  Dev->>GitHub: Tạo Pull Request
  GitHub-->>Reviewer: thông báo review
  Reviewer->>GitHub: Xem xét code
  Reviewer-->>Dev: Comment / Request changes
  Dev->>GitHub: Fix + push thêm commit
  Reviewer->>GitHub: Approve
  Dev->>GitHub: Merge PR
  GitHub->>GitHub: squash & merge
```

## Git flow chuẩn (Vincent Driessen)

```mermaid
gitGraph
  commit id: "v1.0"
  branch develop
  checkout develop
  commit id: "init dev"
  branch feature/x
  checkout feature/x
  commit id: "feat: ui"
  checkout develop
  merge feature/x
  branch release/v1.1
  checkout release/v1.1
  commit id: "fix bug"
  checkout main
  merge release/v1.1 tag: "v1.1"
  checkout develop
  merge release/v1.1
```

## Use case — Git với remote

```mermaid
flowchart TD
  subgraph Developer
    A1[git push]
    A2[git pull]
    A3[git merge]
  end
  subgraph Collaborator
    B1[git push]
    B2[pull request]
  end
  subgraph CI
    C1[run tests]
    C2[deploy]
  end

  B2 -->|code review| B1
  A1 --> C1
  C1 --> C2
```

## Class diagram — cấu trúc object Git

```mermaid
classDiagram
  class Commit {
    +string hash
    +string message
    +timestamp date
    +getDiff() Diff
  }
  class Tree {
    +string hash
    +listBlobs() Blob[]
  }
  class Blob {
    +string hash
    +string content
  }
  class Branch {
    +string name
    +Commit target
    +checkout() void
  }
  class Remote {
    +string url
    +fetch() Branch[]
    +push() void
  }

  Commit --> Tree : points to
  Tree --> Blob : contains
  Branch --> Commit : points to
  Remote --> Branch : tracks
```

## Activity diagram — quy trình commit

```mermaid
stateDiagram-v2
  [*] --> WorkingDir: sửa code
  WorkingDir --> Staging: git add
  Staging --> LocalRepo: git commit
  LocalRepo --> RemoteRepo: git push
  RemoteRepo --> WorkingDir: git pull (có conflict)
  WorkingDir --> Staging: resolve conflict + git add
  Staging --> LocalRepo: git commit
  LocalRepo --> RemoteRepo: git push
  RemoteRepo --> [*]
```

## Pie chart — thời lượng các thao tác Git

```mermaid
pie showData
  "Code" : 45
  "Git add/commit" : 10
  "Git push/pull" : 5
  "Review" : 25
  "Merge/rebase" : 15
```

## Timeline — lịch sử Git

```mermaid
timeline
  title Lịch sử Git
  2005 : Linus Torvalds tạo Git
  2008 : GitHub ra đời
  2010 : Git 1.7
  2016 : Git 2.0
  2020 : Git 2.30
  2026 : Git v3 (kế hoạch)
```

## Giải thích

| Diagram | Dùng để |
|---------|---------|
| **`gitGraph`** | Vẽ cây Git commit/branch trực quan |
| **`flowchart`** | Sơ đồ luồng công việc, ca sử dụng (use case) |
| **`sequenceDiagram`** | Tương tác giữa người/dịch vụ theo thời gian |
| **`classDiagram`** | Cấu trúc object, quan hệ giữa các lớp |
| **`stateDiagram-v2`** | Trạng thái & chuyển tiếp (activity) |
| **`pie`** | Biểu đồ tròn, phân bố dữ liệu |
| **`timeline`** | Mốc thời gian, lịch sử |

Tất cả đều là Mermaid — viết bằng cú pháp text, render tự động ở client.
