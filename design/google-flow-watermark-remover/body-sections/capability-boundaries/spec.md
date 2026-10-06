# /google-flow-watermark-remover / 能力边界（等宽两栏白卡）

## 覆盖范围
- 对应页面：/google-flow-watermark-remover
- 起始锚点：H2「What LogoFade can and can't do today」起，到 H2「Works with」之前止
- 改动性质：含新增文字（新页面；H2/H3 逐字来自 brief，列表文案由内容侧提供）

## 布局
| 项 | 值 |
|---|---|
| 容器 | mx-auto max-w-6xl（手册「卡片网格」档，1152px） |
| 断点 | lg: 起分栏 |
| 网格 | grid gap-6 lg:grid-cols-2（手册「两栏」等宽档） |
| 窄屏 | 单列堆叠 |
| 与上下块间距 | mt-14（手册「section 之间」档） |

## 元素规格
| 元素 | class（照 CONTRIBUTING.md 取值） |
|---|---|
| H2 | text-2xl font-semibold tracking-tight（手册「H2 全站」档） |
| H2 与卡组间距 | mt-6（手册「标题与内容之间」档） |
| 栏卡（×2，左 does / 右 doesn't） | 白色实心卡：rounded-2xl bg-card p-6 shadow-sm ring-1 ring-border |
| 卡内 H3 | text-lg font-semibold text-foreground（手册「H3 卡内标题」档） |
| 卡内列表（每栏 ul 1、li 3） | ul: list-disc pl-6 mt-4；li: mt-2 leading-7（手册「无序列表」档） |
| 列表标记 | 普通圆点，**不加 ✓/✗ 图标**（brief 指定：✓/✗ 只登记给表格；靠两张卡的 H3 区分语义） |
| 列表标签 | <ul> + <li>（手册 §7） |

## 新增文字
| 位置 | 文字 | 标签要求 |
|---|---|---|
| H2 | What LogoFade can and can't do today | H2（brief 逐字） |
| 左卡 H3 | What it does today | H3（brief 逐字） |
| 右卡 H3 | What it doesn't do yet | H3（brief 逐字） |
| 装饰性文字 | 无 | — |

## 原文保留声明
- 本页为新页面，无既有文字可改；H2/H3 逐字来自 brief，未作改写；
- 两栏各 3 条 li 的文案由内容侧提供，本 spec 不产出、不改动文案。

## 结构影响
- 本块：H2 1、H3 2、<ul> 2、<li> 6
- 全页合计：H1 1 / H2 5 / H3 12 / details 4（与 brief 一致，本块不增减）

## 待我确认
无
