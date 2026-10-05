# /terms / 正文流（9 个 H2 段落）

## 覆盖范围
- 对应页面：/terms
- 起始锚点：H2「The service」起，到 H2「Contact」段落结尾止
- 改动性质：纯视觉替换（文字零改动）

## 布局
| 项 | 值 |
|---|---|
| 容器 | mx-auto max-w-2xl（手册法律页宽度，与页头同列） |
| 页面外壳 | py-10 sm:py-16（手册已收编） |
| 断点 | 无分栏，全文单列 |
| 网格 | 无（prose 流） |
| 窄屏 | 单列（与宽屏一致） |

## 元素规格
| 元素 | class（照 CONTRIBUTING.md 取值） |
|---|---|
| 每个 H2 段落容器 | mt-14（手册「section 之间」档） |
| H2 | text-2xl font-semibold tracking-tight（手册「H2 全站」定稿档，font-bold 已作废） |
| 段内正文 <p> | leading-7 text-foreground（手册全站标准正文） |
| 段内正文间距 | 写在 Prose：`[&_p]:mt-4`、`[&_ul]:mt-4`（不用 space-y-* 管正文间距，手册 §4 定稿） |
| H2 与其正文间距 | mt-6（手册「标题与内容之间」档） |
| 链接 <a>（Privacy、Contact 两段） | underline underline-offset-4（手册已收编） |

## 新增文字（纯视觉替换时这节写「无」）
无

## 原文保留声明
- 本区块 9 个 H2 及全部正文、链接一个字不改、不删、不调换顺序；
- 本次仅调整字号档位、间距与栏宽，不新增任何装饰文字。

## 结构影响
- H1 数量：不变（1）
- H2 数量：不变（9）
- H3 数量：不变（0）
- 新增标题标签：无

## 待我确认
无（链接样式已按现网值批准收编进 CONTRIBUTING.md）
