---
title: 'React Hooks cơ bản'
description: 'Tìm hiểu useState, useEffect và các hooks phổ biến'
pubDate: 2026-05-18
tags: ['react', 'hooks']
---

## useState

Quản lý state trong functional component.

```jsx
const [count, setCount] = useState(0);
```

## useEffect

Xử lý side effects như fetch API, subscription.

```jsx
useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]);
```
