# /privacy / 页头（H1 + 更新日期 + 引言）

## 覆盖范围
- 对应页面：/privacy
- 起始锚点：H1「Privacy Policy」起，到 H2「Your images stay on your device」之前止
- 改动性质：纯视觉替换（文字零改动）

## 布局
| 项 | 值 |
|---|---|
| 容器 | mx-auto max-w-2xl（手册法律页宽度；现网为 max-w-3xl，按手册收窄） |
| 断点 | 无分栏，全文单列 |
| 网格 | 无（prose 流） |
| 窄屏 | 单列（与宽屏一致） |

## 元素规格
| 元素 | class（照 CONTRIBUTING.md 取值） |
|---|---|
| H1「Privacy Policy」 | text-4xl font-bold tracking-tight |
| 更新日期行「Last updated: October 1, 2026」 | mt-6 font-mono text-sm text-muted-foreground（手册「编号 / 小标签」档） |
| 引言段（「This policy explains…」整段） | 浅绿卡：rounded-2xl bg-accent-teal/6 p-6 ring-1 ring-accent-teal/25 ring-inset；卡内文字 mt-0 text-lg leading-8 text-foreground（手册「开场白」字号档） |
| 引言卡与上方日期行间距 | mt-6（手册「标题与内容之间」档） |
| 卡内文字标签 | 仍为原 <p>，不换标签 |

## 新增文字（纯视觉替换时这节写「无」）
无

## 原文保留声明
- 本区块原有 H1 / 更新日期行 / 引言段一个字不改、不删；
- 引言段仅改变容器与字号档位，文字内容、语序、标点全部保留。

## 结构影响
- H1 数量：不变（1）
- H2 数量：不变（11）
- H3 数量：不变（0）
- 新增标题标签：无

## 待我确认
- 浅绿卡在手册中的已列场景为「How to / Works with / 讲解三卡」，本规格把它用于「法律页引言摘要」这一新场景，卡片样式本身全部照手册取值，请确认该场景是否收编。
- 页面外壳上下 padding（现网 py-10 sm:py-16）手册未收录，建议保留现网值，请确认。
