# Resojot 应声记

<p align="center">
  <strong>阅读语言：</strong> <strong>简体中文</strong> · <a href="./README-en.md"><strong>English</strong></a>
</p>

Obsidian 的语音记录插件。录音后自动保存音频并生成 Markdown 笔记，支持语音转写与 AI 润色。

你在走路、通勤或开会时想到一件事，值得记进 Obsidian。但手头没有键盘，只能先发到微信或备忘录，等有空再整理。等真坐下来，当时的语气和细节已经淡了，搬运也麻烦。

按快捷键开始说话，音频保存到笔记库的同时，Markdown 笔记已经生成。后续可以转写、润色，整条链路都在 Obsidian 里完成。

<p align="center">
  <img src="./assets/readme/hero-overview.png" alt="Resojot 移动端与桌面端概览" width="430" />
</p>

---

## ⚙️ 怎么用

1. 🎤 通过快捷键或命令启动录音
2. 💾 音频保存至 Obsidian vault
3. 📝 同时生成 Markdown 笔记
4. 🔄 可选：语音转写为文字
5. ✨ 可选：AI 润色转写结果

当前笔记中的音频或后续导入的音频，均可执行转写和润色。

<p align="center">
  <img src="./assets/readme/workflow-overview.png" alt="Resojot 从录音到 Markdown 笔记的处理流程" width="430" />
</p>

---

## ✨ 基本能力

| 环节 | 能力 | 说明 |
|:---|:---|:---|
| 🎙️ 录入 | 语音录音 | 快捷键或命令启动，音频直接落盘 |
| 📝 记录 | 自动笔记 | 录音同时生成 Markdown 文件 |
| 🔄 处理 | 语音转写 | 支持多种 ASR 服务将语音转为文字 |
| ✨ 处理 | AI 润色 | 使用 LLM 整理转写结果 |
| ⏳ 兜底 | 待处理队列 | 转写失败自动进入队列，支持重试 |
| 📥 补录 | 导入音频 | 已有音频文件可导入后转写 |

---

## 👀 界面预览

| 场景 | 预览 |
|:---|:---|
| **移动端录音工作台**<br>直接开始录音，查看近期录音片段。 | <img src="./assets/readme/mobile-workbench.gif" alt="移动端录音工作台" width="260" /> |
| **电脑端命令入口**<br>通过命令面板快速打开工作台、待处理列表和录音命令。 | <img src="./assets/readme/desktop-command.png" alt="电脑端命令入口" width="320" /> |
| **笔记内实时润色**<br>润色过程中先返回部分内容，完成后自动替换为完整结果。 | <img src="./assets/readme/polishing-note.gif" alt="笔记内实时润色" width="260" /> |
| **转写服务商配置**<br>按服务商与模型维护转写配置，保存后即可切换使用。 | <img src="./assets/readme/provider-entry.gif" alt="转写服务商配置" width="260" /> |

---

## 🔌 接入的服务

| 类型 | 已支持 |
|:---|:---|
| 转写（ASR） | 本地 OpenAI-compatible 接口<br>云端 OpenAI-compatible 接口<br>硅基流动<br>豆包 ASR<br>腾讯云 ASR<br>阿里云 DashScope ASR<br>OpenAI<br>Azure Speech<br>Google Speech-to-Text |
| 润色（LLM） | OpenAI-compatible 接口<br>硅基流动<br>豆包 / 火山方舟 |

> [!NOTE]
> 具体使用哪个服务，由用户自行配置 API key 和参数决定。插件授权不包含第三方云服务额度。

---

## 🚀 安装

> [!WARNING]
> Resojot 为闭源插件，不在官方 Community Plugins 商店中。

### 方式一：BRAT（推荐）

1. 在 Obsidian 社区插件中安装 **BRAT**
2. 打开 BRAT，选择 **Add Beta plugin**
3. 输入 `https://github.com/jiaoyingxing/resojot`
4. 安装完成后，在 Obsidian 设置中启用 **Resojot**

> BRAT 可自动从 GitHub Releases 更新，无需手动替换文件。

### 方式二：手动安装

1. 从 [GitHub Releases](https://github.com/jiaoyingxing/resojot/releases) 下载 `main.js`、`manifest.json`、`styles.css`
2. 在 vault 的 `.obsidian/plugins/resojot/` 目录放入上述文件
3. 重启 Obsidian 或重新加载社区插件
4. 在设置中启用 **Resojot**

---

## 🔐 授权

| 状态 | 可用功能 |
|:---|:---|
| 🔓 未授权 | 录音、保存音频、基础 Markdown 笔记、基础模板 |
| 🔒 授权后 | 自动转写、待处理队列与重试、导入音频转写、AI 润色 |

- 授权码在本地进行签名校验
- 授权码不包含第三方云服务额度
- 获取授权码：小红书搜索 **焦应行**

---

## 🔒 数据与隐私

| 数据 | 存储位置 |
|:---|:---|
| 🎙️ 音频文件、Markdown 笔记 | Obsidian vault（本地） |
| ⚙️ 插件设置、授权状态、待处理状态 | Obsidian 本地插件数据 |
| 🔑 Provider API key、润色 API key、授权码 | Obsidian SecretStorage（设备与 vault 隔离） |

- 插件本身不包含客户端遥测
- 启用云端转写或云端润色时，音频或文字会发送至用户配置的第三方服务

> [!CAUTION]
> 请勿公开 `.obsidian/plugins/resojot/data.json`。该文件可能包含设置、队列状态、授权状态及旧版本遗留的 provider 凭据。

---

## 📦 分发与许可

- 闭源插件，源码不公开
- 安装与更新通过 BRAT 或 GitHub Releases 进行
- 详见 [LICENSE](./LICENSE)

---

## 📮 联系

反馈与授权码获取：小红书搜索 **焦应行**
