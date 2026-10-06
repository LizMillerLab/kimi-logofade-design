# /google-flow-watermark-remover / H1 区

## 覆盖范围
- 对应页面：/google-flow-watermark-remover
- 起始锚点：H1「Google Flow Watermark Remover」起，到 H2「How to remove the Gemini watermark from a still image」之前止
- 改动性质：含新增文字（新页面；标题与按钮文字逐字来自 brief，正文文案由内容侧提供）

## 布局
| 项 | 值 |
|---|---|
| 容器 | mx-auto max-w-2xl（手册「长文」档，672px 窄栏） |
| 页面外壳 | py-10 sm:py-16（手册「内页 H1 区」档，已登记） |
| 断点 | 无分栏，单列 |
| 网格 | 无 |
| 窄屏 | 单列（与宽屏一致） |
| 与下一块间距 | mt-14（手册「section 之间」档） |

## 元素规格
| 元素 | class（照 CONTRIBUTING.md 取值） |
|---|---|
| H1「Google Flow Watermark Remover」 | text-3xl font-semibold tracking-tight sm:text-4xl（手册「内页 H1」档，brief 指定） |
| 首段（1 个 p，浅绿卡内） | 浅绿卡：rounded-2xl bg-accent-teal/6 p-6 ring-1 ring-accent-teal/25 ring-inset（手册「法律页引言摘要」场景）；卡内文字 text-lg leading-8 text-foreground（手册「开场白」字号档） |
| 首段卡与按钮组间距 | mt-6（手册「标题与内容之间」档） |
| 主按钮「Open the image tool」（→ /） | rounded-full bg-foreground px-5 py-2.5 text-base font-medium text-background + inline-flex items-center justify-center gap-2（手册 §8 品牌主按钮） |
| 描边按钮「Email us about video support」（→ mailto:support@logofade.com） | rounded-full bg-card px-5 py-2.5 text-base font-medium text-foreground ring-1 ring-border + inline-flex items-center justify-center gap-2（手册 §8 描边按钮） |
| 按钮组容器 | flex flex-wrap gap-4（手册 §4「按钮组」档，已登记） |
| 内链 | 除两颗按钮外无其他内链（brief 指定） |

## 新增文字
| 位置 | 文字 | 标签要求 |
|---|---|---|
| 页首 | Google Flow Watermark Remover | H1（brief 逐字） |
| 按钮 1 | Open the image tool | <a> 按钮化（brief 逐字） |
| 按钮 2 | Email us about video support | <a> 按钮化（brief 逐字） |
| 装饰性文字 | 无 | — |

## 原文保留声明
- 本页为新页面，无既有文字可改；H1、按钮文字逐字来自 brief，未作改写；
- 首段正文文案由内容侧提供，本 spec 不产出、不改动文案。

## 结构影响
- 本块：H1 1、H2 0、H3 0
- 全页合计：H1 1 / H2 5 / H3 12 / details 4（与 brief 一致，本块不增减）

## 待我确认
无（按钮组间距 `flex flex-wrap gap-4` 已登记进手册 §4；外壳 `py-10 sm:py-16` 随「内页 H1 区」版式登记进手册 §3）
