# DESIGN.md — LogoFade 设计系统

> 所有视觉值以线上最新编译样式表实测为准。
> 新页面 / 新段落的视觉，一律从本文件取值；**本文件没有的元素，先补进本文件再用**。

## 1. 色板（唯一的色来源）

| token | 值 | 用途 |
|---|---|---|
| `background` | `#f9fbfa` | 页面底色 |
| `foreground` | `#111d1a` | 主文字（深墨绿调） |
| `muted-foreground` | `#576b66` | 次要文字 |
| `card` | `#fff` | 卡片底（在白底上的实心卡） |
| `border` | `#dce5e3` | 常规边框 |
| `accent-teal` | `#6efcd9` | 品牌色，**四档透明度见下** |
| `accent-neon` | `#00ffaa` | 霓虹强调（点缀） |

### accent-teal 的四档透明度（**唯一正确写法**）

| 写法 | 实际值 | 用途 |
|---|---|---|
| `bg-accent-teal/6` | `#6efcd90f` | **卡片底色**（How to / Works with / 讲解卡） |
| `bg-accent-teal/12` | `#6efcd91f` | 图标底、徽章底等小面积强调 |
| `bg-accent-teal/18` | `#6efcd92e` | hero 上传区外框 |
| `ring-accent-teal/25` | `#6efcd940` | **只用于内描边**，不做底色 |

### 补充登记（只有这几条，不得类推出新档位）

| 写法 | 定稿用途 |
|---|---|
| `accent-teal` 实心档（无透明度） | 仅用于**不含文字**的填充与描边（进度条填充、推荐档 `ring-2`），**不得承载文字** |
| `border-accent-teal/25` | 归入 25 档 = 细描边（`ring` / `border` 均可） |
| `bg-foreground/5` | 中性提示底（警告条等）；**品牌提示不得使用**（品牌提示用 `accent-teal/6`） |

### ⚠️ 硬规则

- **`accent-teal` 绝不当文字色**——亮薄荷在白底上对比度约 1.2:1，读不了。
  只能用于 **背景 / 边框 / 描边 / 装饰**。
- **所有文字**用 `text-foreground`（主）/ `text-muted-foreground`（次）。
- **不新增 token、不改 `globals.css`。**
- 项目源码里有个未使用的 `primary`（shadcn 脚手架残留，实测线上编译产物中不存在）——
  **不要拿它当设计色**，会跟 `accent-teal` 形成色差。

## 2. 卡片（三种，按场景选）

| 类型 | class | 场景 |
|---|---|---|
| **浅绿卡**（主力） | `rounded-2xl bg-accent-teal/6 p-6 ring-1 ring-accent-teal/25 ring-inset` | How to / Works with / 讲解三卡 / 法律页引言摘要 |
| **白色实心卡** | `rounded-2xl bg-card p-6 shadow-sm ring-1 ring-border` | 内容对比、Privacy 双栏 |
| **大块容器** | `rounded-3xl sm:p-8` | 大段落的横向长条 |

- 内边距：紧凑用 `p-6`，宽松用 `sm:p-8`（宽屏才加 `sm:`，手机上不要）。
- 圆角：卡 `rounded-2xl`；大块 `rounded-3xl`；小元素 `rounded-lg`。
- 阴影：白卡 `shadow-sm`；浅绿卡**不用阴影**，靠 `ring` 分隔。

## 3. 布局与宽度

| 场景 | 宽度 | 说明 |
|---|---|---|
| 卡片网格 | `mx-auto max-w-6xl` | 1152px，首页各 section |
| 长文（法律页） | `mx-auto max-w-2xl` | 672px，约 75 字符/行 |
| 长文中「不要太宽」的单段 | 段内包一层 `max-w-2xl` | 如 H2 下的开场白 |
| 双栏（文本 + 侧栏） | `lg:grid-cols-[minmax(0,1fr)_340px]` | Privacy 段 |
| 法律页外壳 | `py-10 sm:py-16` | 页面上下 padding（现网值原样收编） |

- **`minmax(0,1fr)` 不能写成 `1fr`**——否则长文本会把列顶破。
- **不要加 `lg:items-center`**：等高交给 grid 默认的 stretch。
- 断点全部用 `lg:` 起分栏，窄屏一律单列。

## 4. 网格与间距

- 三卡：`grid gap-6 lg:grid-cols-3`
- 两栏：`grid gap-6 lg:grid-cols-2`（等宽）/ 上面的 `minmax` 写法（不等宽）
- section 之间：`mt-14`
- 标题与内容之间：`mt-6`；卡与卡之间：`gap-6`；非正文的块级堆叠：`space-y-4`（如 FAQ 卡片串、卡内小列表）；正文（`<p>` / `<ul>`）**一律不用 `space-y-*`，写在 Prose 里**
- 段落之间：`mt-4`；H2 后首段：`mt-6`；列表上方：`[&_ul]:mt-4`
- **正文间距不要用 `space-y-*`，一律写在 Prose 里**（如 `[&_p]:mt-4`、`[&_ul]:mt-4`）；`space-y-*` 只用于非正文的块级堆叠（如 FAQ 卡片串）

## 5. 文字

| 元素 | class |
|---|---|
| 首页 H1 | `text-4xl leading-tight font-semibold tracking-tight sm:text-5xl lg:text-6xl`（首页 H1 即主关键词） |
| 法律页 H1 | `text-3xl font-semibold tracking-tight sm:text-4xl` |
| H2（全站） | `text-2xl font-semibold tracking-tight` |
| H3（卡内标题） | `text-lg font-semibold text-foreground` |
| 正文 | `leading-7 text-foreground`（16px，**全站标准，不许改**） |
| 次要 / 说明 | `text-sm text-muted-foreground` |
| 开场白（H2 下） | `mt-4 max-w-2xl text-lg leading-8` |
| 编号 / 小标签 | `font-mono text-sm text-foreground`（或 `text-muted-foreground`） |
| 链接 `<a>` | `underline underline-offset-4`（现网值原样收编） |
| 行内代码 `<code>` | `font-mono text-[0.9em]`（现网值原样收编） |
| 无序列表 | `ul: list-disc pl-6 mt-4`；`li: mt-2 leading-7`（现网值收编，列表上方间距定稿 `mt-4`） |

**⚠️ 字号是标准，padding 是局部的事——要压高度就调 `padding`，不要动字号。**
**⚠️ `font-bold` 只允许出现在价格数字上；全站标题一律 `font-semibold`（含 H1、H2），任何标题都不得使用 `font-bold`。**

## 6. 图标

- **一律内联 SVG**，不装任何图标库。
- 容器：`bg-accent-teal/12 text-foreground`；尺寸 `h-5 w-5` / `h-6 w-6`。
- 装饰性图标加 `aria-hidden="true"`。

## 7. 结构语义（视觉之外，一并遵守）

- **新增的装饰文字（编号、小标签）只能用 `<p>` / `<span>` / `<div>`，
  绝不许用 `<h4>`~`<h6>`**——会污染标题结构。
- 卡片列表用 `<ul>` + `<li>`（无序）或 `<ol>` + `<li>`（有序），**不要用裸 `<div>` 装 `<li>`**。
- 图标内联，不引入依赖。

## 8. 按钮（形状与颜色写一串，布局另给一串）

| 类型 | class | 布局 |
|---|---|---|
| 品牌主按钮 | `rounded-full bg-foreground px-5 py-2.5 text-base font-medium text-background` | `inline-flex items-center justify-center gap-2` |
| 描边按钮 | `rounded-full bg-card px-5 py-2.5 text-base font-medium text-foreground ring-1 ring-border` | `inline-flex items-center justify-center gap-2` |
| 大号（hero CTA） | `rounded-full bg-foreground px-7 py-3.5 text-lg font-medium text-background` | `inline-flex items-center justify-center gap-2` |

上表基础尺寸（`px-5 py-2.5 text-base`）仅适用于主按钮与描边按钮；大号按本行取值。

- 旧的 `h-11` / `rounded-lg` / `text-sm` / `font-semibold` 按钮写法**全部作废**。
- 主按钮为深色（`bg-foreground`）：`accent-teal` 在白底上不显形、在浅绿外框里会撞色，**不得用于按钮底色**。

## 9. 定价页（登记）

| 路径 | 说明 |
|---|---|
| `/pricing` | 独立静态路径，零 `"use client"`。**备注：此路径需在开工定价页时同步修订 CLAUDE.md §7 的措辞与 sitemap 基线** |
| `/pricing/annual` | 独立静态路径（年付），零 `"use client"`，多一个可收录 URL |

- 不做月/年切换：两个独立静态路径，页内不挂交互开关。
