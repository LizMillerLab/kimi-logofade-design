# kimi-logofade-design

[logofade.com](https://logofade.com) 的设计仓。这里不写实现代码，只产出设计规格，供写代码的 AI 直接照做。

## 仓库里有什么

| 路径 | 作用 | 给谁看 |
|---|---|---|
| `CONTRIBUTING.md` | **设计规则手册**：色板、卡片、宽度、字号、间距、图标、结构语义——所有可用设计 token 的唯一来源 | 人 + AI 共同遵守 |
| `design.md` | 设计系统 tokens 速查（与手册同源） | 人 |
| `design/<页面>/<区块>/spec.md` | **每个页面每个区块一份规格表**（覆盖范围 / 布局 / 元素规格 / 新增文字 / 原文保留声明 / 结构影响 / 待确认） | 写代码的 AI 的唯一输入 |
| `design/<页面>/<区块>/preview.html` | 静态预览 | 只给人看效果，不作为实现依据 |

## 规则（每份 spec 都必须遵守）

- 只用 `CONTRIBUTING.md` 里有的值；手册没有的 → 写进 spec 的「待确认」，**不就地发明**新颜色、新圆角、新间距。
- spec 不改任何文案；新增的编号 / 标签 / 徽章等装饰文字只能用 `<p>` / `<span>` / `<div>`，绝不用 `<h4>`~`<h6>`。
- `accent-teal`（#6efcd9）绝不当文字色，只用于背景 / 边框 / 描边 / 装饰。

## 当前进度

- 首页中间区块重设计（reverse alpha 讲解区 + Privacy 区）：见 `src/`（React 预览工程，`npm install && npm run dev` 可看效果）
- `/privacy`：`design/privacy/page-header`、`design/privacy/body-sections`
- `/terms`：`design/terms/page-header`、`design/terms/body-sections`
