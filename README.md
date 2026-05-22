# 🎙️ 应声记 Resojot

<p align="center">
  <strong>阅读语言：</strong> <strong>简体中文</strong> · <a href="./README-en.md"><strong>English</strong></a>
</p>

Obsidian 的语音记录插件。录音后自动保存音频并生成 Markdown 笔记，支持语音转写与 AI 润色。

---

## 📌 用途

Obsidian 适合管理已整理好的内容，但记录需求往往发生在没有键盘的场景中。语音消息、临时想法、会议内容等，如果无法快速入库，通常会散落在其他应用，事后补录容易丢失细节。

应声记用于将语音内容直接录入 Obsidian，减少二次搬运。

---

## ⚙️ 工作流程

1. 🎤 通过快捷键、命令或移动端 URL 启动录音
2. 💾 音频保存至 Obsidian vault
3. 📝 同时生成 Markdown 笔记
4. 🔄 可选：语音转写为文字
5. ✨ 可选：AI 润色转写结果

当前笔记中的音频或后续导入的音频，均可执行转写和润色。

---

## ✨ 功能

| 功能 | 说明 |
|:---|:---|
| 🎙️ 语音录音 | 支持快捷键、命令和移动端 URL 快速启动 |
| 📝 自动笔记 | 录音后自动生成或追加 Markdown 笔记 |
| 🔄 语音转写 | 支持多种 ASR 服务将语音转为文字 |
| ✨ AI 润色 | 使用 LLM 整理转写结果 |
| ⏳ 待处理队列 | 转写或润色失败后可继续重试 |
| 📥 导入音频 | 已有音频文件可导入后转写 |

---

## 🔌 接入的服务

**转写（ASR）**
- 🏠 本地 OpenAI-compatible 接口
- ☁️ 云端 OpenAI-compatible 接口
- 🔗 硅基流动
- 🟢 豆包 ASR
- 🔵 腾讯云 ASR
- 🟠 阿里云 DashScope ASR
- ⚪ OpenAI
- 🔷 Azure Speech
- 🔶 Google Speech-to-Text

**润色（LLM）**
- ⚪ OpenAI-compatible 接口
- 🔗 硅基流动
- 🟢 豆包 / 火山方舟

> [!NOTE]
> 具体使用哪个服务，由用户自行配置 API key 和参数决定。插件授权不包含第三方云服务额度。

---

## 🚀 安装

> [!WARNING]
> 官方 Community Plugins 目录不支持闭源插件，应用内插件商店无法搜索到本插件。

### 方式一：BRAT（推荐）

1. 在 Obsidian 社区插件中安装 **BRAT**
2. 打开 BRAT，选择 **Add Beta plugin**
3. 输入 `https://github.com/jiaoyingxing/resojot`
4. 安装完成后，在 Obsidian 设置中启用 **Resojot**

### 方式二：手动安装

1. 从 [GitHub Releases](https://github.com/jiaoyingxing/resojot/releases) 下载 `main.js`、`manifest.json`、`styles.css`
2. 在 vault 的 `.obsidian/plugins/resojot/` 目录放入上述文件
3. 重启 Obsidian 或重新加载社区插件
4. 在设置中启用 Resojot

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

## 🔒 隐私与数据存储

| 数据 | 存储位置 |
|:---|:---|
| 🎙️ 音频文件、Markdown 笔记 | Obsidian vault（本地） |
| ⚙️ 插件设置、授权状态、待处理状态 | Obsidian 本地插件数据 |
| 🔑 Provider API key、润色 API key、授权码 | Obsidian SecretStorage（设备与 vault 隔离） |

> [!CAUTION]
> 请勿公开 `.obsidian/plugins/resojot/data.json`。该文件可能包含设置、队列状态、授权状态及旧版本遗留的 provider 凭据。

- 插件本身不包含客户端遥测
- 启用云端转写或云端润色时，音频或文字会发送至用户配置的第三方服务

---

## 📦 分发说明

- 闭源插件，源码不公开
- 安装与更新通过 BRAT 或 GitHub Releases 进行

---

## 📮 联系

反馈与授权码获取：小红书搜索 **焦应行**
