---
slug: gitlab-add-or-delete-branch
title: gitlab 删除、新建远程分支问题
authors: DK
tags: [Git]
---

## 删除分支后本地查看远程分支仍显示已删除的分支

1. 使用 git branch -r 命令查看远程分支，发现远程分支已经删除，但本地还显示
2. 使用 git remote show origin 查看 remote 地址，远程分支，及远程分支与本地分支相对应关系等信息
3. 使用 git remote prune origin 同步本地分支
4. 使用 git branch -r 命令再次查看远程分支就与 gitlab 一致了

## 新建分支后本地查看远程分支不显示已建的分支

1. 使用 git remote update origin --prune 命令
2. 使用 git branch -r 就可以查看到新建的分支
