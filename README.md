# Resojot 应声记

Obsidian 的语音记录插件。

录音、自动保存音频、生成 Markdown 笔记。
自动ASR转写、LLM润色，整条链路都在 Obsidian 里完成。

## ✨ 基本能力
1. 🎤 通过PC快捷键、URL快捷指令、按钮点击等入口启动
2. 💾 音频保存至 Obsidian vault，可选按次/日/月保存
3. 📝 同时生成 Markdown 笔记，包含录音、结构化目录、可选模板
4. 🔄 语音自动转文字，多家ASR共用、切换、并发等
5. ✨ AI 润色转写结果，提示词方案可自定义，随时切换
6. 🔧 具备录音管理能力

- 支持先录，也支持自己导音频进来处理。
- 每个功能都可拆分独立调用。

## 🔌 目前接入的服务

**转写（ASR）**
-  本地 OpenAI-compatible 接口（支持voxbox本地部署模型）
-  云端 OpenAI-compatible 接口
-  硅基流动
-  豆包 ASR
-  腾讯云 ASR
-  阿里云 DashScope ASR
-  OpenAI
-  Azure Speech
-  Google Speech-to-Text

**润色（LLM）**
-  OpenAl-compatible
-  Anthropic
-  Gemini
-  Ollama

> [!NOTE]
> 插件授权不包含第三方云服务额度。

## 🚀 安装

> [!WARNING]
> ⚠️ Resojot 为闭源插件，官方插件商店搜不到。

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
4. 在设置中启用 Resojot

## 🔐 授权与隐私

| 状态 | 可用功能 |
|:---|:---|
| 🔓 未授权 | 录音、保存音频、基础 Markdown 笔记、基础模板 |
| 🔒 授权后 | 自动转写、待处理队列与重试、导入音频转写、AI 润色等高级功能 |

- 授权码在本地进行签名校验
- 授权码不包含第三方云服务额度
- 获取授权码：小红书搜索 **焦应行**

数据与存储**
| 数据 | 存储位置 |
|:---|:---|
| 🎙️ 音频文件、Markdown 笔记 | Obsidian vault（本地） |
| ⚙️ 插件设置、授权状态、待处理状态 | Obsidian 本地插件数据 |
| 🔑 Provider API key、润色 API key、授权码 | Obsidian SecretStorage（设备与 vault 隔离） |

- 插件本身不包含客户端遥测
- 启用云端转写或云端润色时，音频或文字会发送至用户配置的第三方服务
> [!CAUTION]
> 请勿公开 `.obsidian/plugins/resojot/data.json`。该文件可能包含设置、队列状态、授权状态及旧版本遗留的 provider 凭据。

## 📜 许可

- 闭源分发，源码不公开
- 安装与更新通过 BRAT 或 GitHub Releases 进行
- 详见 LICENSE 文件

## 📮 联系

反馈与授权码获取：小红书搜索 **焦应行**
