---
slug: leave-page-do-fetch
title: 离开页面发起请求
authors: DK
tags: [JavaScript]
---

## 需求背景

用户退出当前页面时，修改的数据未进行保存，需要发送接口请求实现自动保存的功能。简单分析需求可知，退出页面包含 **路由切换**和**关闭浏览器标签页**两种情况：

- 路由切换：项目使用 `Vue2` 开发，离开页面时可以在 `beforeDestroy` 钩子函数中调用接口实现保存数据，但是这个方法只能在路由切换当前组件销毁前触发，无法监听到浏览器页面关闭的情况。
- 关闭浏览器标签页：考虑在 `window.onunload` 钩子函数中发送请求。

<!--truncate-->

### 路由切换

路由切换时，当前组件将会被销毁，由于 `beforeDestroy` 钩子函数是在组件销毁前被调用，可以直接拿到当前组件的 `data`，因此可以在 `beforeDestroy` 钩子函数中直接使用 `axios` 去调用接口，保存数据。

路由切换时调用接口保存数据的方式简单，不做过多赘述。

### 关闭浏览器标签页

### 请求时机：

回顾一下浏览器加载、刷新、卸载（关闭）时触发的事件：

- 加载时：触发 `onload` 事件
- 刷新时：先触发 `onbeforeunload` 事件，然后是 `onunload` 事件，最后是 `onload` 事件。
- 卸载时：先触发 `onbeforeunload` 事件，然后是 `onunload` 事件

**刷新和卸载页面时都会先后触发 onbeforeunload 和 onunload 事件，但刷新页面的时候时不需要调用接口的，那么就需要区分刷新和关闭行为。**

**根据时间差来实现判断是刷新还是关闭标签**：

在点击刷新或者关闭时开始计时记录下这一刻的时间戳，因为刷新和关闭 在执行 onunload 方法时的时间不一样，一般情况下经过测试：

- **关闭时时间差不大于 3 毫秒**
- **刷新时即使只有一个简单的 helloworld 页面都不少于 10 毫秒**
- **而一般网站网页内容更多，时间差达到了 100 多毫秒**

## demo🌰：

```tsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let beginTime = 0
      let differTime = 0
      window.onbeforeunload = function () {
        beginTime = new Date().getTime()
      }

      window.onunload = function () {
        differTime = new Date().getTime() - beginTime
        // 关闭页面操作
        if (differTime < 5) {
          var blob = new Blob(['room_id=123'], {
            type: 'application/x-www-form-urlencoded'
          })

          navigator.sendBeacon('http://127.0.0.1:8686', blob)
        }
      }
    </script>
  </body>
</html>
```

### 第二种方案

```tsx
document.addEventListener('visibilitychange', () => {
  let isHidden = document.hidden
  if (isHidden) {
    this.saveCalculatorRecord()
    this.againGetCalculatorRecord = new Date().getTime()
  }
})
```

## 注意：

在app中需要原生暴露出接口