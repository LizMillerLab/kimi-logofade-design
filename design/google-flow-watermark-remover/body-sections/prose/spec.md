# /google-flow-watermark-remover / Prose（窄栏说明段）

## 覆盖范围
- 对应页面：/google-flow-watermark-remover
- 起始锚点：H2「Flow, Veo, Omni and Gemini: which watermark is which」起，到页尾（含页脚同行文字）止
- 改动性质：含新增文字（新页面；H2 逐字来自 brief，正文与页脚文字来自 brief/内容侧）

## 布局
| 项 | 值 |
|---|---|
| 容器 | mx-auto max-w-2xl（手册「长文」档，672px 窄栏，brief 指定） |
| 断点 | 无分栏，单列 |
| 网格 | 无（prose 流） |
| 窄屏 | 单列（与宽屏一致） |
| 与上一块间距 | mt-14（手册「section 之间」档） |

## 元素规格
| 元素 | class（照 CONTRIBUTING.md 取值） |
|---|---|
| H2 | text-2xl font-semibold tracking-tight（手册「H2 全站」档） |
| H2 后首段 | mt-6（手册「H2 后首段」档） |
| 正文（4 个 p） | leading-7 text-foreground（手册正文档）；段落间距写在 Prose：[&_p]:mt-4（不用 space-y-*） |
| 行内链接（1 处，回 /） | underline underline-offset-4（手册「链接」档） |
| 页脚同行文字「LogoFade · Not affiliated with Google.」 | 与页脚「LogoFade」同行；text-sm text-muted-foreground（手册 §1 补充登记已收编；只换颜色 token，布局 class 不动） |

## 新增文字
| 位置 | 文字 | 标签要求 |
|---|---|---|
| H2 | Flow, Veo, Omni and Gemini: which watermark is which | H2（brief 逐字） |
| 页脚同行 | LogoFade · Not affiliated with Google. | <p> 或 <span>（brief 指定文字；绝不许用 <h4>~<h6>） |
| 装饰性文字 | 无 | — |

## 原文保留声明
- 本页为新页面，无既有文字可改；H2、页脚文字逐字来自 brief，未作改写；
- 4 个正文段文案由内容侧提供，本 spec 不产出、不改动文案。

## 结构影响
- 本块：H2 1、H3 0、<p> 4、行内链接 1
- 全页合计：H1 1 / H2 5 / H3 12 / details 4（与 brief 一致，本块不增减）

## 待我确认
无（页脚文字色已按 `text-muted-foreground` 收编进手册 §1 补充登记；Header/Footer 边框 `border-zinc-200` 不在本次范围）
