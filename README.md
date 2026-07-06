# Tarot Study Guide

一个纯静态塔罗学习网页，用于个人塔罗学习、卡牌浏览、基础小测和复习进度管理。

## 功能简介

- 78 张塔罗牌基础牌库
- 卡牌详情与学习状态记录
- 基础小测与今日复习队列
- Dashboard 学习进度统计
- 本地 Journal 与练习记录

## 技术栈

- HTML
- CSS
- JavaScript

本项目不使用 React、Vue、后端、数据库、npm 构建流程或真实 AI API。

## 部署方式

适合直接部署到 GitHub Pages。

推荐设置：

- Source: Deploy from a branch
- Branch: main
- Folder: / root

根目录需要保留：

- index.html
- style.css
- script.js
- assets/

## 数据存储

学习进度、测试状态和日志保存在浏览器 localStorage 中。不同浏览器或设备之间不会自动同步。
