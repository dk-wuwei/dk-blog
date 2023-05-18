---
slug: beacon-api
title: Beacon API
authors: DK
tags: [JavaScript]
---

1.`Beacon API`用于将少量数据通过 post 请求发送到服务器。

2.`Beacon`是非阻塞请求，不需要响应

完美的解决性能缺陷问题:

1.浏览器将`Beacon`请求排队让它再空闲的时候执行并立即返回

2.它再`unload`状态下也可以异步发送,不阻塞页面刷新/跳转等操作
使用 `navigator.sendBeacon()`

```tsx
const blob = new Blob(['room_id=123'], {
  type: 'application/x-www-form-urlencoded',
})

const result = navigator.sendBeacon('http://127.0.0.1:8686', blob)
```

`result`是一个布尔值，代表这次发送请求的结果
浏览器接受并把请求排队了 返回`true`
如果过程中出现了问题 返回`false`

`navigator.sendBeacon`接受两个参数:
`url` :请求的`url` ,请求是`post`请求
`data`:要发送的数据

`Beacon`其他相关
`Beacon`更多的情况是用于做前端埋点，监控用户活动
客户端优化：可以将 `Beacon` 请求合并到其他请求上，一同处理, 尤其在移动环境下。
