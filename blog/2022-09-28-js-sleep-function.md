---
slug: js-sleep-function
title: JS睡眠函数
authors: DK
tags: [JavaScript]
---

```tsx
/**
 * js睡眠函数
 * @param numberMillis {number} 毫秒值
 * @returns {boolean}
 */
function sleep (numberMillis) {
  let now = new Date();
  let exitTime = now.getTime() + numberMillis;
  while (true) {
    now = new Date();
    if (now.getTime() > exitTime)
      return true;
  }
}
```




