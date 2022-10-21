---
slug: use-reducer
title: useReducer
authors: DK
tags: [React, Hooks]
---

useReducer 接收两个参数：

第一个参数：reducer 函数，没错就是我们上一篇文章介绍的。第二个参数：初始化的 state。返回值为最新的 state 和 dispatch 函数（用来触发 reducer 函数，计算对应的 state）。按照官方的说法：对于复杂的 state 操作逻辑，嵌套的 state 的对象，推荐使用 useReducer。

听起来比较抽象，我们先看一个简单的例子：

<!--truncate-->

```js
// 官方 useReducer Demo
// 第一个参数：应用的初始化
const initialState = { count: 0 }

// 第二个参数：state的reducer处理函数
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}

function Counter() {
  // 返回值：最新的state和dispatch函数
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      // useReducer会根据dispatch的action，返回最终的state，并触发rerender
      Count: {state.count}
      // dispatch 用来接收一个 action参数「reducer中的action」，用来触发reducer函数，更新最新的状态
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  )
}
```

# 总结

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

useReducer 是一个利用 action 提供的信息，将 state 从 A 转换到 B 的一个纯函数，具有一下几个特点：

- 语法：(state, action) => newState
- Immutable：每次都返回一个 newState， 永远不要直接修改 state 对象
- Action：一个常规的 Action 对象通常有 type 和 payload（可选）组成
  - type： 本次操作的类型，也是 reducer 条件判断的依据
  - payload： 提供操作附带的数据信息
