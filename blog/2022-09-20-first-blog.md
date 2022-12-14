---
slug: first-blog
title: Vue2解析excel数据
authors: DK
tags: [Vue2, ElementUI]
---

用最简单的方式使用 Vue2 + Web Worker + js-xlsx 解析 excel 数据

<!--truncate-->

**本文重点在于实现功能，没有过多去关注其他。** 就想使用的话直接 cv 到自己的项目即可，想深入学习下边也有官方网址自行查看咯 🍺

由[SheetJS](https://links.jianshu.com/go?to=https%3A%2F%2Fsheetjs.com%2F)出品的`js-xlsx`是一款非常方便的只需要纯 JS 即可读取和导出 excel 的工具库，功能强大，支持格式众多，支持 xls、xlsx、ods(一种 OpenOffice 专有表格文件格式)等十几种格式。本文以 xlsx 格式为例。github：[https://github.com/SheetJS/sheetjs](https://github.com/SheetJS/sheetjs)

为什么使用 Web Worker 呢？为了加快解析速度，提高用户体验度 🤡。Web Worker 具体介绍看阮老师的博客就好 😀
[Web Worker 使用教程 - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2018/07/web-worker.html)

**本文配套 demo 仓库：**

**[https://gitee.com/ardeng/worker-xlsx.git](https://gitee.com/ardeng/worker-xlsx.git)**

# 效果演示

![演示效果](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d17099415f4a465489d0671abada33d7~tplv-k3u1fbpfcp-watermark.image?)

## HTML

**普普通通、简简单单的 element ui 上传组件**

```html
<el-upload
    ref="input"
    action="/"
    :show-file-list="false"
    :auto-upload="false"
    :on-change="importExcel"
    type="file"
>
    <el-button type="primary">上传</el-button>
</el-upload>
```

## JS 部分

### 无 Web Worker 版

Worker 线程一旦新建成功，就会始终运行，不会被主线程上的活动（比如用户点击按钮、提交表单）打断。这样有利于随时响应主线程的通信。但是，这也造成了 Worker 比较耗费资源，不应该过度使用，而且一旦使用完毕，就应该关闭。

Web Worker 有以下几个使用注意点。

1. **同源限制** 分配给 Worker 线程运行的脚本文件，必须与主线程的脚本文件同源。

2. **DOM 限制** Worker 线程所在的全局对象，与主线程不一样，无法读取主线程所在网页的 DOM 对象，也无法使用`document`、`window`、`parent`这些对象。但是，Worker 线程可以`navigator`对象和`location`对象。

3. **通信联系** Worker 线程和主线程不在同一个上下文环境，它们不能直接通信，必须通过消息完成。

4. **脚本限制** Worker 线程不能执行`alert()`方法和`confirm()`方法，但可以使用 XMLHttpRequest 对象发出 AJAX 请求。

5. **文件限制** Worker 线程无法读取本地文件，即不能打开本机的文件系统（`file://`），它所加载的脚本，必须来自网络。

**由于以上的限制，所以不想搞 Worker 也可以。** 直接解析文件对象 转换数据即可。

```js
importExcel(file) {
  // 验证文件是否为excel
  if (!/\.(xlsx|xls|csv)$/.test(file.name)) {
    alert("格式错误！请重新选择")
    return
  }
  this.fileToExcel(file).then(tabJson => {
    // 这里拿到excel的数据
    console.log(tabJson)
  })
},
// excel数据转为json数组
fileToExcel(file) {
  // 不使用 Promise 也可以 只是把读文件做成异步更合理
  return new Promise(function (resolve, reject) {
    const reader = new FileReader()
    reader.onload = function (e) {
        // 拿到file数据
        const result = e.target.result
        // XLSX 解析的配置  type: 'binary' 必写
        const excelData = XLSX.read(result, { type: 'binary' })
        // 注意要加 { header: 1 }, 此配置项 可生成二维数组
        const data = XLSX.utils.sheet_to_json(excelData.Sheets[excelData.SheetNames[0]],
                      { header: 1 }) //! 读取去除工作簿中的数据
        resolve(data)
      }
      // 调用方法  读取二进制字符串
      reader.readAsBinaryString(file.raw)
    })
  }
```

### Web Worker 版

**想用 Worker 一些前置工作是必不可少的**

1. 下载 worker-loader

```shell
npm i -D worker-loader
```

2. vue.config.js 中配置 loader

```js
// 设置解析以worker.js 结尾的文件使用worker-loader 解析
chainWebpack: (config) => {
  config.module
    .rule("worker")
    .test(/\.worker\.js$/)
    .use("worker-loader")
    .loader("worker-loader")
    .options({ inline: "fallback" });
};
```

**正式进入使用 Web Worker**

封装一下 Web Worker 命名规则如下：xxx.worker.js

下面代码中，`self`代表子线程自身，即子线程的全局对象。

```js
// src\utils\excel.worker.js

import XLSX from "xlsx";

/**
 * 处理错误的函数 主线程可以监听 Worker 是否发生错误。
 * 如果发生错误，Worker 会触发主线程的`error`事件。
 */
const ERROR = () => {
  // 发送错误信息
  self.postMessage({ message: "error", data: [] });

  // `self.close()`用于在 Worker 内部关闭自身。
  self.close();
};

// 错误处理
self.addEventListener("error", (event) => {
  ERROR();

  // 输出错误信息
  console.log(
    "ERROR: Line ",
    event.lineno,
    " in ",
    event.filename,
    ": ",
    event.message
  );
});

/**
 * @description: Worker 线程内部需要有一个监听函数，监听`message`事件。 工作线程接收到主线程的消息
 * @param {object} event event.data  获取到主线程发送过来的数据
 */
self.addEventListener(
  "message",
  async (event) => {
    // 向主线程发送消息
    // postMessage(event.data);

    // 解析excel数据
    parsingExcel(event.data);
  },
  false
);

/**
 * @description: 解析excel数据
 * @param {object} data.excelFileData 文件数据
 * @param {object} data.config 配置信息
 */
const parsingExcel = (data) => {
  try {
    // 注意 { header: 1 }, 此配置项 可生成二维数组
    const { excelFileData, config = { header: 1 } } = data;

    // 创建实例化对象
    const reader = new FileReader();

    // 处理数据
    reader.onload = function (e) {
      // 拿到file数据
      const result = e.target.result;
      const excelData = XLSX.read(result, { type: "binary" });
      const data = XLSX.utils.sheet_to_json(
        excelData.Sheets[excelData.SheetNames[0]],
        config
      ); //! 读取去除工作簿中的数据

      // 发送消息
      self.postMessage({ message: "success", data });
    };
    // 调用方法  读取二进制字符串
    reader.readAsBinaryString(excelFileData.raw);
  } catch (err) {
    ERROR();
    console.log("解析excel数据时 catch到的错误===>", err);
  }
};
```

**使用**

引入文件

```js
import Worker from "@/utils/excel.worker.js";
```

业务相关的逻辑

```js
importExcel(file) {
  if (!/\.(xlsx|xls|csv)$/.test(file.name)) {
    alert("格式错误！请重新选择")
    return;
  }

  // 创建实列
  const worker = new Worker()

  // 主线程调用`worker.postMessage()`方法，向 Worker 发消息
  worker.postMessage({
    excelFileData: file,
    config: { header: 1 }
  })

 // 主线程通过`worker.onmessage`指定监听函数，接收子线程发回来的消息
  worker.onmessage = (event) => {
    const { message, data } = event.data
    if (message === 'success') {
      // data是个二维数组 表头在上边
      console.log(data)
      // Worker 完成任务以后，主线程就可以把它关掉。
      worker.terminate()
    }
  }
}
```

# 可能遇到的问题

1. `npm run dev`  启动不了，并且 webpack 报错：检查下  `webpack` `worker-loader`  的版本。
2. 控制台报错包含  `not a function`  或  `not a constructor`：检查下 webpck 配置。最好是查看英文文档  [webpack](https://webpack.js.org/)，因为中文文档更新不及时。
3. 控制台报错  `window is not defined`：改成  `self`  试试。参考  [Webpack worker-loader - import doesn’t work](https://stackoverflow.com/questions/38747706/webpack-worker-loader-import-doesnt-work)
