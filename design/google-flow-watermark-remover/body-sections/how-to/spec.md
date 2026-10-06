# /google-flow-watermark-remover / How to（三步卡）

## 覆盖范围
- 对应页面：/google-flow-watermark-remover
- 起始锚点：H2「How to remove the Gemini watermark from a still image」起，到 H2「What LogoFade can and can't do today」之前止
- 改动性质：含新增文字（新页面；H2/H3 逐字来自 brief，正文文案由内容侧提供）

## 布局
| 项 | 值 |
|---|---|
| 容器 | mx-auto max-w-6xl（手册「卡片网格」档，1152px） |
| 断点 | lg: 起分栏 |
| 网格 | grid gap-6 lg:grid-cols-3（手册「三卡」档） |
| 窄屏 | 单列堆叠 |
| 与上下块间距 | mt-14（手册「section 之间」档） |

## 元素规格
| 元素 | class（照 CONTRIBUTING.md 取值） |
|---|---|
| H2 | text-2xl font-semibold tracking-tight（手册「H2 全站」档） |
| H2 与卡组间距 | mt-6（手册「标题与内容之间」档） |
| 列表标签 | <ol> + <li>（有序步骤，手册 §7） |
| 步骤卡（×3） | 浅绿卡：rounded-2xl bg-accent-teal/6 p-6 ring-1 ring-accent-teal/25 ring-inset |
| 卡内 H3 | text-lg font-semibold text-foreground（手册「H3 卡内标题」档） |
| 卡内正文（每卡 2 个 p） | leading-7 text-foreground（手册正文档）；段内间距写在 Prose：[&_p]:mt-4（不用 space-y-*） |
| 装饰性编号 | 无（H3 已含「Step 1/2/3 —」字样，不另加编号） |

## 新增文字
| 位置 | 文字 | 标签要求 |
|---|---|---|
| H2 | How to remove the Gemini watermark from a still image | H2（brief 逐字） |
| 卡 1 H3 | Step 1 — Open the image tool | H3（brief 逐字） |
| 卡 2 H3 | Step 2 — Drop your original Gemini image | H3（brief 逐字） |
| 卡 3 H3 | Step 3 — Download the clean image | H3（brief 逐字） |
| 装饰性文字 | 无 | — |

## 原文保留声明
- 本页为新页面，无既有文字可改；H2/H3 逐字来自 brief，未作改写；
- 卡内正文（每卡 2 个 p）文案由内容侧提供，本 spec 不产出、不改动文案。

## 结构影响
- 本块：H2 1、H3 3、<ol> 1、<li> 3
- 全页合计：H1 1 / H2 5 / H3 12 / details 4（与 brief 一致，本块不增减）

## 待我确认
无
