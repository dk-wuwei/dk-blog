---
slug: promise
title: 判断是否是 Promise 对象
authors: DK
tags: [JavaScript]
---

一般情况下，我们或许会使用instanceof，是没有问题的。

```tsx
async function back(){
  return 1;
}
const res = back();
console.log(res instanceof Promise); //true
```

但是问题来了，Promise是一个规范而不只是一个类。

遵循Promise规范的库包含了ES6默认Promise、bluebird Promise、Q Promise等，那么我们使用bluebird Promise生成的Promise去instanceofES6的默认Promise会不会有问题呢？
显然，要出错。

所以这引出了React官方使用的方式是通过判断条件:

```tsx
typeof destroy.then === 'function'
```

来判断一个对象是否是异步返回对象。

这样子的好处是，对于所有实现了Promise规范的异步库，这样的判断方式都是有效的。虽然这有产生误报的风险，但这是所有Promise库都必须遵循的规范。

同样的Promise判断方式并不只是React在使用，可以试试在F12运行这行代码，这将不会有任何输出。

```tsx
await {then:()=>1};
```

原因无他，await的语法糖里判断Promise对象也是通过promise.then==='function'，这源于Promise A+最基本的定义：
- "promise"是具有then方法的对象或函数
