# DESIGN.md — LogoFade 设计系统

> 所有视觉值以线上编译后的样式表实测为准（`logofade.com` 的 `06--3wq5wfu1t.css`）。
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
| **浅绿卡**（主力） | `rounded-2xl bg-accent-teal/6 p-6 ring-1 ring-accent-teal/25 ring-inset` | How to / Works with / 讲解三卡 |
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

- **`minmax(0,1fr)` 不能写成 `1fr`**——否则长文本会把列顶破。
- **不要加 `lg:items-center`**：等高交给 grid 默认的 stretch。
- 断点全部用 `lg:` 起分栏，窄屏一律单列。

## 4. 网格与间距

- 三卡：`grid gap-6 lg:grid-cols-3`
- 两栏：`grid gap-6 lg:grid-cols-2`（等宽）/ 上面的 `minmax` 写法（不等宽）
- section 之间：`mt-14`
- 标题与内容之间：`mt-6`；卡与卡之间：`gap-6`；文本块之间：`space-y-4`

## 5. 文字

| 元素 | class |
|---|---|
| H1 | `text-4xl font-bold tracking-tight`（首页 H1 即主关键词） |
| H2 | `text-2xl font-bold tracking-tight` |
| H3（卡内标题） | `text-lg font-semibold text-foreground` |
| 正文 | `leading-7 text-foreground`（16px，**全站标准，不许改**） |
| 次要 / 说明 | `text-sm text-muted-foreground` |
| 开场白（H2 下） | `mt-4 max-w-2xl text-lg leading-8` |
| 编号 / 小标签 | `font-mono text-sm text-foreground`（或 `text-muted-foreground`） |

**⚠️ 字号是标准，padding 是局部的事——要压高度就调 `padding`，不要动字号。**

## 6. 图标

- **一律内联 SVG**，不装任何图标库。
- 容器：`bg-accent-teal/12 text-foreground`；尺寸 `h-5 w-5` / `h-6 w-6`。
- 装饰性图标加 `aria-hidden="true"`。

## 7. 结构语义（视觉之外，一并遵守）

- **新增的装饰文字（编号、小标签）只能用 `<p>` / `<span>` / `<div>`，
  绝不许用 `<h4>`~`<h6>`**——会污染标题结构。
- 卡片列表用 `<ul>` + `<li>`（无序）或 `<ol>` + `<li>`（有序），**不要用裸 `<div>` 装 `<li>`**。
- 图标内联，不引入依赖。

## 8. 待补充区（新元素先写在这里，再落代码）

| 元素 | 状态 |
|---|---|
| 定价表 / 套餐卡 | 待定（订阅制上线前补） |
| 对比表 | 待定 |
| 视频页 hero | 待定（Day 22+） |