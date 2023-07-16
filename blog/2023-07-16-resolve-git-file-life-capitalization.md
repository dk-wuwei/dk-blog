---
slug: resolve-git-file-life-capitalization
title: 解决 Git 修改文件命大小写后提交无效
authors: DK
tags: [Git]
---

1. 确保文件名修改正确：首先，确保你正确地修改了文件名的大小写。在某些操作系统上，文件名的大小写可能会被忽略，所以请确保你在修改文件名时使用了正确的大小写。

2. 清除 Git 缓存：如果你修改了文件名的大小写，并且 Git 仍然将其视为相同的文件，可能是因为 Git 缓存了旧文件名的信息。你可以使用以下命令清除 Git 缓存：

```tsx
git rm --cached <filename>
// 请将 <filename> 替换为被修改文件的名称。这将从 Git 缓存中移除旧文件名的信息。
// 如： git rm --cached myfile.txt

// 清除 Git 缓存
git rm -r --cached .
```

3. 提交修改：完成文件名的修改和 Git 缓存的清除后，重新提交你的修改：

```tsx
git add .
git commit -m "Rename file with correct case"
```
