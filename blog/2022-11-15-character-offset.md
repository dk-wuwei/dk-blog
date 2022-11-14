---
slug: character-offset
title: Git 偏移符号
authors: DK
tags: [Git]
---

在 Git 中，有两个「偏移符号」: `^` 和 `~`。

## 一、^ 的用法: 

在 `commit` 的后面加一个或多个 `^` 号，可以 把 `commit` 往回偏移，偏移的数量是 `^` 的数量。例 如: `master^` 表示 `master` 指向的 `commit` 之前的那 个 `commit`; `HEAD^^` 表示 `HEAD` 所指向的 `commit` 往 前数两个 `commit`。

<!--truncate-->

```shell
git rebase -i HEAD^^
```

上面这行代码表示，把当前 `commit` ( `HEAD` 所指向的 `commit`) `rebase` 到 `HEAD` 之前 2 个的 `commit` 上:

![](https://gitee.com/dk-wuwei/note-resource/raw/master/image/202211080816919.png)

## 二、~ 的用法:

在 `commit` 的后面加上 `~` 号和一个数，可以 把 `commit` 往回偏移，偏移的数量是 `~` 号后面的数。例如: `HEAD~5` 表示 `HEAD` 指向的 `commit` 往前数 5 个 `commit`。