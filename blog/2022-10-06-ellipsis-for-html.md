---
slug: ellipsis-for-html
title: 适用于HTML的省略号
authors: DK
tags: [HTML, CSS]
---

设置内容显示多少行，多余的内容添加省略号

```scss
.ellipsis {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  
/ / moz 不设置也可以 display:-moz-box;
  -moz-box-orient: vertical;
  -moz-line-clamp: 1;
}
```
