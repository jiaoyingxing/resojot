<p align="center">
  <strong>Language:</strong> <strong>English</strong> · <a href="./README.md"><strong>简体中文</strong></a>
</p>

# Resojot

Obsidian voice capture plugin.

- Record, automatically save audio, and generate Markdown notes.
- Automatic ASR transcription and LLM polish, all completed inside Obsidian.
- Every release is tested on real iPhone, Android, and Windows devices.
- Mobile startup overhead is about 40 ms.

<p align="center">
  <img src="./assets/readme/hero-overview.png" alt="Resojot across mobile and desktop" width="430" />
</p>

## ✨ Core Capabilities

| Category | Description |
|:---|:---|
| Entry points | On PC, recording can start from shortcuts, commands, or buttons; on mobile, URL shortcuts enable one-tap recording |
| Audio storage | Audio is saved into the Obsidian vault, with configurable per-note / daily / monthly organization, folders, and sorting |
| Markdown notes | Recording generates Markdown notes at the same time, including recording links, structured sections, and custom note templates |
| ASR transcription | Multiple ASR providers are unified under one path and can be switched or extended; APIs are user-supplied |
| LLM polish | Transcript results can be polished with LLMs, and prompt schemes can be customized and switched at any time |
| Queue and management | Includes pending-task queue, retry flow, and recording management |
| Independent use | Each capability can be used independently, and importing existing audio is also supported |
| Current usage | Already used by hundreds of paying users and still actively updated |

<p align="center">
  <img src="./assets/readme/workflow-overview.png" alt="Resojot workflow from recording to Markdown note" width="430" />
</p>

## 👀 UI Preview

| Scenario | Preview |
|:---|:---|
| **Mobile recording workspace**<br>Start recording directly and review recent audio clips. | <img src="./assets/readme/mobile-workbench.gif" alt="Mobile recording workspace" width="260" /> |
| **Desktop command entry**<br>Open the workspace, pending list, and recording commands from the command palette. | <img src="./assets/readme/desktop-command.png" alt="Desktop command entry" width="320" /> |
| **Live polish inside the note**<br>Partial content appears first, then gets replaced by the final polished result. | <img src="./assets/readme/polishing-note.gif" alt="Live polish inside the note" width="260" /> |
| **Transcription provider setup**<br>Manage provider and model settings, then switch after saving. | <img src="./assets/readme/provider-entry.gif" alt="Transcription provider setup" width="260" /> |

## 🔌 Currently Supported Services

| Type | Supported Routes |
|:---|:---|
| Transcription (ASR) | Local OpenAI-compatible endpoint, including local deployments such as voxbox<br>Cloud OpenAI-compatible endpoint<br>SiliconFlow<br>Doubao ASR<br>Tencent Cloud ASR<br>Aliyun DashScope ASR<br>OpenAI<br>Azure Speech<br>Google Speech-to-Text |
| Polish (LLM) | OpenAI-compatible<br>Anthropic<br>Gemini<br>Ollama |

> [!NOTE]
> A Resojot license does not include third-party cloud service quota.

## 🚀 Installation

> [!WARNING]
> Resojot is a closed-source plugin and cannot be found in the official plugin store.

### Option 1: BRAT (Recommended)

1. Install **BRAT** from Obsidian Community Plugins
2. Open BRAT and choose **Add Beta plugin**
3. Enter `https://github.com/jiaoyingxing/resojot`
4. Enable **Resojot** in Obsidian settings after installation

> BRAT can update the plugin directly from GitHub Releases, so you usually do not need to replace files manually.

### Option 2: Manual Installation

1. Download `main.js`, `manifest.json`, and `styles.css` from [GitHub Releases](https://github.com/jiaoyingxing/resojot/releases)
2. Put them into `.obsidian/plugins/resojot/` inside your vault
3. Restart Obsidian, or reload community plugins
4. Enable Resojot in Obsidian settings

## 🔐 Licensing and Privacy

### Licensing Status

| Status | Available Features |
|:---|:---|
| 🔓 Without a license | Recording, audio saving, basic Markdown notes, and basic templates |
| 🔒 With a license | Automatic transcription, pending queue and retry, imported-audio transcription, AI polish, and other advanced features |

- License keys are verified locally through signature validation
- A Resojot license does not include third-party cloud service quota
- To get a license key, search for **焦应行** on Xiaohongshu

### Data and Storage

| Data | Stored In |
|:---|:---|
| 🎙️ Audio files and Markdown notes | Your Obsidian vault (local) |
| ⚙️ Plugin settings, license state, and pending task state | Local Obsidian plugin data |
| 🔑 Provider API keys, polish API keys, and license key | Obsidian SecretStorage, isolated per device and vault |

- Resojot does not include client-side telemetry
- If you enable cloud transcription or cloud polish, the processed audio or text will be sent to your configured provider

> [!CAUTION]
> Do not publish `.obsidian/plugins/resojot/data.json`. It may contain settings, queue state, license state, and legacy provider credentials from older versions.

## 📜 License

- Distributed as a closed-source plugin
- Installation and updates happen through BRAT or GitHub Releases
- See [LICENSE](./LICENSE)

## 📮 Contact

For feedback and license access, search for **焦应行** on Xiaohongshu.
