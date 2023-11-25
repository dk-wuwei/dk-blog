---
slug: margin和padding的区别以及什么时候使用
title: 浅析MVVM
authors: DK
tags: [CSS]
---

首先需要明白，盒子模型主要定义四个区域：内容（content）、边框与内容的区域，称为内边距（padding）、边框（border）、边框与外部的区域，称为外边距（margin）。

## 区别

1. margin：表示边框以外的区域
2. padding：表示边框与内容之间的区域

## 使用场景

<!--truncate-->

### margin的使用场景：

1. 需要在border（边框）以外的区域添加空白间距时；
2. 空白区域不需要使用背景颜色时

> 注意：上下两个相连的盒子之间使用的外边距需要相互抵消。 需要使用负值对页面布局时（注意：margin的值可以取负数，padding的值是不能使负数的）

### padding的使用场景：

1. 需要在border内侧添加空白
2. 空白区域需要使用到背景颜色

> 注意：上下相连的两个盒子之间的空白，间距是两者之和 最后，需注意margin是用来隔开元素与元素的间距；padding是用来隔开元素与内容的间距；margin用于布局分开元素，使元素与元素互不干扰；padding用于元素与内容之间间隔，让内容与元素之间有一段距离。

## 补充

- 怪异盒模型：content=content+padding+border
- 标准盒模型：content=content

- **在怪异盒模型中，一个块的总宽度受margin影响，但不受padding的影响。**
