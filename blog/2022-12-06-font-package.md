---
slug: font-package
title: 怎么引入字体包
authors: DK
tags: [CSS]
---

## 添加字体包

推荐：[https://fonts.google.com/](https://fonts.google.com/)

在网上找资源或者问设计同学要。

## 引入字体包

### 存放位置归类（自由放置即可）

<!--truncate-->

1. 在src里面的assets文件中创建fonts文件（没有assets文件可以自己创建一个，也可以不用此命名）；  
2. 把字体包放入fonts文件，并创建一个font.css文件（命名随意），font.css文件中，font-family建议使用英文。

![tu|400](https://gitee.com/dk-wuwei/note-resource/raw/master/image/202211092136489.png)


### 引入字体

```scss
@font-face {
    font-family: 'AlibabaPuHuiTi';
    src: url('../fonts/AlibabaPuHuiTi.woff2');
}

@font-face {
    font-family: 'STFangsong';
    src: url('../fonts/STFangsong.ttf');
}
```

如果需要引入多个字体，直接在里面继续添加即可，不用另建文件。

## 在main入口文件中引入

```tsx
import "@/assets/css/font.css";
```

## 使用

正常使用，font-family与text.css中一致即可。

```scss
.text {
	font-family: 'STFangsong';
	font-size: 32px;
}
```