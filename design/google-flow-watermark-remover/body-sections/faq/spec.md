# /google-flow-watermark-remover / FAQ（details 手风琴）

## 覆盖范围
- 对应页面：/google-flow-watermark-remover
- 起始锚点：H2「FAQ」起，到 H2「Flow, Veo, Omni and Gemini: which watermark is which」之前止
- 改动性质：含新增文字（新页面；H2/H3 逐字来自 brief，答案文案由内容侧提供）

## 布局
| 项 | 值 |
|---|---|
| 容器 | mx-auto max-w-3xl（手册「FAQ 卡片串容器」档，768px，与首页一致） |
| 断点 | 无分栏，单列 |
| 网格 | 无（纵向堆叠） |
| 窄屏 | 单列（与宽屏一致） |
| 与上下块间距 | mt-14（手册「section 之间」档） |
| 条目堆叠 | space-y-4（手册 §4「非正文的块级堆叠」档——details 卡片串属非正文堆叠） |

## 元素规格
| 元素 | class（照 CONTRIBUTING.md 取值） |
|---|---|
| H2 | text-2xl font-semibold tracking-tight（手册「H2 全站」档） |
| H2 与条目组间距 | mt-6（手册「标题与内容之间」档） |
| 条目（<details> ×4，默认 open） | 白色实心卡：rounded-2xl bg-card p-6 shadow-sm ring-1 ring-border |
| 问题（<summary> 内 H3） | text-lg font-semibold text-foreground（手册「H3 卡内标题」档）；summary 横向两端排列，隐藏原生 marker |
| 展开箭头 | 内联 SVG，h-5 w-5，stroke 1.5，aria-hidden="true"（手册 §6）；open 时旋转 180° |
| 答案（每条 1 个 p） | leading-7 text-foreground（手册正文档）；与 summary 间距 mt-4（Prose 写法 [&_p]:mt-4，不用 space-y-*） |

## 新增文字
| 位置 | 文字 | 标签要求 |
|---|---|---|
| H2 | FAQ | H2（brief 逐字） |
| 条目 1 H3 | How do I remove a watermark from Google Flow AI? | H3（brief 逐字） |
| 条目 2 H3 | How to download flow video without watermark? | H3（brief 逐字） |
| 条目 3 H3 | How can I remove a watermark from Google? | H3（brief 逐字） |
| 条目 4 H3 | How can I remove the watermark from a Veo 3 video? | H3（brief 逐字） |
| 装饰性文字 | 无 | — |

## 原文保留声明
- 本页为新页面，无既有文字可改；H2/H3 逐字来自 brief，未作改写；
- 每条答案（1 个 p）文案由内容侧提供，本 spec 不产出、不改动文案。

## 结构影响
- 本块：H2 1、H3 4、<details> 4（默认展开）
- 全页合计：H1 1 / H2 5 / H3 12 / details 4（与 brief 一致，本块不增减）

## 待我确认
无
