# Resojot 应声记

<p align="center">
  <a href="https://github.com/jiaoyingxing/resojot/releases">
    <img alt="Release downloads" src="https://img.shields.io/github/downloads/jiaoyingxing/resojot/total.svg?style=flat-square&label=Release%20downloads" />
  </a>
  <a href="https://github.com/jiaoyingxing/resojot/releases">
    <img alt="Latest release" src="https://img.shields.io/github/v/release/jiaoyingxing/resojot?style=flat-square&label=Latest%20release" />
  </a>
  <a href="./README.md">
    <img alt="CN 中文版" src="https://img.shields.io/badge/CN-%E4%B8%AD%E6%96%87%E7%89%88-d32f2f?style=flat-square" />
  </a>
  <a href="./README-en.md">
    <img alt="EN English" src="https://img.shields.io/badge/EN-English-2f6fed?style=flat-square" />
  </a>
</p>

<p align="center">
  <strong>阅读语言：</strong> <strong>简体中文</strong> · <a href="./README-en.md"><strong>English</strong></a>
</p>

Resojot 把录音、转写、整理和 Markdown 笔记沉淀放在同一条 Obsidian 工作流里。

- 录音后自动保存音频并生成 Markdown 笔记。
- 使用本地或云端 ASR 转写，再按自定义方案调用 LLM 润色、提取待办或生成提要。
- 支持导入已有音频、长音频处理、失败恢复和多服务商备用切换。
- 持续维护 iPhone、Android、Windows 与 macOS 的多端兼容。

<p align="center">
  <img src="./assets/readme/readme-mobile-workbench.png" alt="Resojot 移动端录音工作台" width="360" />
</p>

## ✨ 主要能力

| 类别 | 说明 |
|:---|:---|
| 入口与工作台 | 桌面端可通过快捷键、命令和按钮启动；移动端可通过 URL 快捷指令一键录音 |
| 音频与笔记 | 音频保存在 Obsidian vault，支持每次新建、当日追加、当月追加和日记辅助；可自定义目录、排序与笔记模板 |
| ASR 转写 | 统一管理多条本地或云端 ASR 配置，保存前校验可用性；任务失败时可尝试其他合格服务商 |
| 长音频与恢复 | 长录音可分段处理并显示进度；应用关闭、移动端中断或网络波动后，未完成任务可继续恢复 |
| LLM 整理 | 支持自定义润色方案，并可继续提取待办、生成内容提要或按场景处理转写结果 |
| 录音管理 | 集中查看转写、润色、失败、缺失笔记和孤立附件；支持取消、重试、恢复为笔记及分步安全清理 |
| 独立处理 | 支持导入已有音频、处理当前笔记音频，也可以对已经完成的转写重新转写 |
| 界面语言 | 提供简体中文与 English 界面 |

## 🎁 场景与扩展

| 类别 | 说明 |
|:---|:---|
| Windows 听写 | 像语音输入法一样按住说话、松开输入；录音可按设置保留，失败条目仍可回到录音管理处理 |
| Todo 笔记 | 自动汇集待办提取结果，支持勾选、排序、移到顶部、原生高亮和删除 |
| 内容提要 | 把每段录音总结成一句话，可写入文件名或笔记大纲 |
| 电脑声音录制 | 录制电脑播放的声音，戴耳机也可使用；支持 Windows 与 macOS 13+，macOS 15+ 可同时录制麦克风 |
| 日记辅助 | 将普通录音写入 Daily Notes、Periodic Notes、Journals 等工具已经创建的当天日记，不接管日记创建 |
| 本地转写服务 | 桌面端可发现并管理用户已经安装的 FunASR 程序；FunASR 与模型仍由用户自行安装和准备 |
| 录音显示 | 可在“无特别提示”“顶部横条”“全屏浮窗”之间选择，普通录音与电脑声音录制使用同一显示规则 |

## 🖥️ 平台与版本

| 能力 | 要求 |
|:---|:---|
| Resojot 常规功能 | Obsidian `1.11.4+`；支持 Windows、macOS、iPhone 与 Android |
| Windows 听写 | 仅 Windows 桌面端 |
| 电脑声音录制 | Windows 与 macOS 13+ 桌面端；macOS 15+ 可同时录制麦克风 |
| 本地 FunASR 管理 | 桌面端，需要用户已经安装 FunASR 并准备模型 |
| Resojot CLI | Obsidian 桌面端官方安装包 `1.12.7+`，并启用 Command line interface |

## 🧪 Resojot CLI（测试功能）

从 `0.9.10` 起，Resojot CLI 作为测试功能开放给 Codex、Claude Code 等外部 Agent。它可以发现插件能力、处理库内已有音频、查询 / 重试 / 取消持久任务并取得结果笔记与 artifact，也可以安全调整存储设置、审计录音管理状态、预览有界内容，以及在用户确认精确计划后恢复笔记、重试任务或清理选定条目。配套预检可识别宿主、vault、插件和命令状态，反馈入口可在用户确认完整内容后衔接官方 GitHub Issues。

- 需要 Obsidian 桌面端 `1.12.7+` 的官方安装包，并在 **设置 → 通用** 中启用 **Command line interface**
- 调用时 Obsidian 与目标 vault 需要保持打开；移动端和旧版宿主不提供 CLI
- 写操作继续遵循“先生成精确计划、向用户说明、确认后执行、执行前重校验”的边界
- CLI 不公开 API Key、授权码或插件内部队列；测试期间公共协议和操作范围仍可能调整

最小能力发现：

```shell
obsidian vault="<vault-name-or-id>" resojot
obsidian vault="<vault-name-or-id>" resojot:capabilities
obsidian vault="<vault-name-or-id>" resojot:schema command=resojot:process-audio
```

终端当前目录已经是目标 vault 时，可以省略 `vault=...`。完整参数以当前版本返回的 `resojot:schema` 为准。

## 👀 界面预览

| 场景 | 预览 |
|:---|:---|
| **工作台快速菜单**<br>从移动端工作台直接进入录音管理、设置、四种写入方式和音频导入。 | <img src="./assets/readme/readme-mobile-workbench-menu.png" alt="移动端工作台快速菜单" width="240" /> |
| **标注框动作菜单**<br>在当前转写或润色块中继续调用润色方案、待办、提要、复制和删除。 | <img src="./assets/readme/readme-desktop-callout-actions.png" alt="标注框动作菜单" width="480" /> |
| **桌面端录音管理**<br>集中查看失败原因、重试状态和单条录音详情。 | <img src="./assets/readme/readme-desktop-management.png" alt="桌面端录音管理" width="480" /> |
| **移动端录音管理**<br>在手机上查看取消、无语音、笔记缺失和孤立附件等状态。 | <img src="./assets/readme/readme-mobile-management.png" alt="移动端录音管理" width="240" /> |
| **存储与写入**<br>选择笔记写入方式、音频与笔记目录、模板和追加顺序。 | <img src="./assets/readme/readme-desktop-storage.png" alt="存储与笔记写入设置" width="480" /> |
| **日记辅助模式**<br>按目录、日期命名规则和板块标题定位已有日记。 | <img src="./assets/readme/readme-mobile-journal-assist.png" alt="日记辅助模式设置" width="240" /> |
| **润色与附加处理**<br>管理润色服务商、默认润色、待办提取和内容提要。 | <img src="./assets/readme/readme-mobile-polish-settings.png" alt="润色服务商与自动处理设置" width="240" /> |
| **Todo 笔记**<br>控制自动汇集、笔记位置、显示大小和任务行末操作。 | <img src="./assets/readme/readme-mobile-todo-settings.png" alt="Todo 笔记设置" width="240" /> |
| **关于与隐私**<br>版本、作者入口、隐私、API 服务、使用风险和数据存储说明集中展示。 | <img src="./assets/readme/readme-desktop-about.png" alt="Resojot 0.9.10 关于页面" width="480" /> |

## 🔌 目前接入的服务

| 类型 | 已支持 |
|:---|:---|
| 转写（ASR） | 本地转写服务（兼容 OpenAI 接口；桌面端可管理已安装的 FunASR）<br>云端 OpenAI-compatible 接口<br>硅基流动<br>豆包 ASR<br>腾讯云 ASR<br>阿里云 DashScope ASR<br>小米 MiMo ASR<br>OpenAI<br>Azure Speech<br>Google Speech-to-Text |
| 润色（LLM） | 硅基流动<br>豆包<br>通义千问<br>DeepSeek<br>小米 MiMo<br>OpenAI / ChatGPT<br>Gemini<br>Anthropic / Claude<br>Ollama<br>自定义 OpenAI-compatible 接口 |

> [!NOTE]
> 插件授权不包含第三方云服务额度。服务是否可用、模型权限、费用和请求限制由用户配置的服务商决定。

## 🚀 安装

### 方式一：Obsidian 社区插件（推荐）

1. 打开 Obsidian 的 **设置 → 第三方插件**
2. 选择 **浏览**，搜索 **Resojot**
3. 安装并启用插件

### 方式二：BRAT

1. 在 Obsidian 社区插件中安装 **BRAT**
2. 打开 BRAT，选择 **Add Beta plugin**
3. 输入 `https://github.com/jiaoyingxing/resojot`
4. 安装完成后，在 Obsidian 设置中启用 **Resojot**

> BRAT 可自动从 GitHub Releases 更新，无需手动替换文件。

### 方式三：手动安装

1. 从 [GitHub Releases](https://github.com/jiaoyingxing/resojot/releases) 下载 `main.js`、`manifest.json`、`styles.css`
2. 在 vault 的 `.obsidian/plugins/resojot/` 目录放入上述文件
3. 重启 Obsidian 或重新加载社区插件
4. 在设置中启用 Resojot

## 🔐 授权与隐私

### 授权状态

| 状态 | 可用功能 |
|:---|:---|
| 🔒 未授权 | 录音、保存音频、基础 Markdown 笔记、基础模板 |
| 🔓 授权后 | 自动转写（含任务队列与失败重试）、导入音频转写、AI 润色，以及依赖润色的待办提取和内容提要 |

- 授权码在本地进行签名校验
- 授权码不包含第三方云服务额度
- 授权期限与适用版本以插件“授权信息”中显示的内容为准
- 获取授权码：小红书搜索 **焦应行**

### 数据与存储

| 数据 | 存储位置 |
|:---|:---|
| 🎙️ 音频文件、Markdown 笔记 | Obsidian vault（本地） |
| ⚙️ 插件设置、授权状态、待处理状态 | Obsidian 本地插件数据 |
| 🔑 Provider API key、润色 API key、授权码 | Obsidian SecretStorage（设备与 vault 隔离） |

- 插件本身不包含客户端遥测
- 启用云端转写或云端润色时，音频或文字会发送至用户配置的第三方服务

> [!CAUTION]
> 请勿公开 `.obsidian/plugins/resojot/data.json`。该文件可能包含设置、队列状态、授权状态及旧版本遗留的 provider 凭据。

## 👋 联系与反馈

- Bug、可复现问题和功能建议：[GitHub Issues](https://github.com/jiaoyingxing/resojot/issues)
- 使用咨询、授权码获取和产品交流：小红书搜索 **焦应行** 🔍
- 详细部署指南、免费 API 指南、插件使用技巧和售后群信息也在小红书

## 📜 许可

- 闭源分发，源码不公开
- 安装与更新可通过 Obsidian 社区插件、BRAT 或 GitHub Releases 进行
- 详见 [LICENSE](./LICENSE)
