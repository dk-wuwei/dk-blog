---
slug: use-reducer
title: useReducer
authors: DK
tags: [React, Hooks]
---

```js
// 返回一个 newState (newObject)
function countReducer(state, action) {
    switch(action.type) {
        case 'add':
            return { ...state, count: state.count + 1; }
        case 'sub':
            return { ...state, count: state.count - 1; }
        default: 
            return count;
    }
}
```
useReducer是一个利用action提供的信息，将state从A转换到B的一个纯函数，具有一下几个特点：
- 语法：(state, action) => newState
- Immutable：每次都返回一个newState， 永远不要直接修改state对象
- Action：一个常规的Action对象通常有type和payload（可选）组成 
  - type： 本次操作的类型，也是 reducer 条件判断的依据
  - payload： 提供操作附带的数据信息