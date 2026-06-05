<p align="center">
  <strong>Language:</strong> <strong>English</strong> · <a href="./README.md"><strong>简体中文</strong></a>
</p>

# Resojot

Obsidian voice capture plugin. Record first, save audio automatically, create a Markdown note, then continue with transcription and AI polish.

When you think of something while walking, commuting, or in a meeting, it may deserve a place in Obsidian. But without a keyboard nearby, it often gets sent to chat apps or temporary notes first, then moved back later. By the time you return to it, the original tone and detail may already be fading.

Press a shortcut, start speaking, and the audio is saved into your vault while a Markdown note is created at the same time. After that, transcription and polish can continue on the same note inside Obsidian.

<p align="center">
  <img src="./assets/readme/hero-overview.png" alt="Resojot across mobile and desktop" width="430" />
</p>

---

## ⚙️ How It Works

1. 🎤 Start recording with a shortcut or command
2. 💾 Save the audio into your Obsidian vault
3. 📝 Create a Markdown note at the same time
4. 🔄 Optional: transcribe speech into text
5. ✨ Optional: polish the transcript with AI

Audio already in the current note, or audio imported later, can also go through transcription and polish.

<p align="center">
  <img src="./assets/readme/workflow-overview.png" alt="Resojot workflow from recording to Markdown note" width="430" />
</p>

---

## ✨ Core Capabilities

| Phase | Capability | Description |
|:---|:---|:---|
| 🎙️ Capture | Voice recording | Start with a shortcut or command, and save audio directly |
| 📝 Note | Automatic note creation | Create a Markdown file while recording |
| 🔄 Process | Speech transcription | Turn audio into text through supported ASR providers |
| ✨ Process | AI polish | Clean up and organize the transcript with an LLM |
| ⏳ Fallback | Pending queue | Failed transcription tasks go into a queue and can be retried |
| 📥 Import | Audio import | Import existing audio files and transcribe them later |

---

## 👀 UI Preview

| Scenario | Preview |
|:---|:---|
| **Mobile recording workspace**<br>Start recording directly and review recent audio clips. | <img src="./assets/readme/mobile-workbench.gif" alt="Mobile recording workspace" width="260" /> |
| **Desktop command entry**<br>Open the workspace, pending list, and recording commands from the command palette. | <img src="./assets/readme/desktop-command.png" alt="Desktop command entry" width="320" /> |
| **Live polish inside the note**<br>Partial content appears first, then gets replaced by the final polished result. | <img src="./assets/readme/polishing-note.gif" alt="Live polish inside the note" width="260" /> |
| **Transcription provider setup**<br>Manage transcription providers and models, then switch between them after saving. | <img src="./assets/readme/provider-entry.gif" alt="Transcription provider setup" width="260" /> |

---

## 🔌 Supported Provider Routes

| Type | Supported Routes |
|:---|:---|
| Transcription (ASR) | Local OpenAI-compatible endpoint<br>Cloud OpenAI-compatible endpoint<br>SiliconFlow<br>Doubao ASR<br>Tencent Cloud ASR<br>Aliyun DashScope ASR<br>OpenAI<br>Azure Speech<br>Google Speech-to-Text |
| Polish (LLM) | OpenAI-compatible endpoint<br>SiliconFlow<br>Doubao / Volcengine Ark |

> [!NOTE]
> The actual route you use depends on your own API keys and provider configuration. A Resojot license does not include third-party service quota.

---

## 🚀 Installation

> [!WARNING]
> Resojot is a closed-source plugin and does not appear in the official Community Plugins store.

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
4. Enable **Resojot** in Obsidian settings

---

## 🔐 Licensing

| Status | Available Features |
|:---|:---|
| 🔓 Without a license | Recording, audio saving, basic Markdown notes, basic templates |
| 🔒 With a license | Automatic transcription, pending queue and retry, imported-audio transcription, AI polish |

- License keys are verified locally through signature validation
- A Resojot license does not include third-party cloud service quota
- To get a license key, search for **焦应行** on Xiaohongshu

---

## 🔒 Data And Privacy

| Data | Stored In |
|:---|:---|
| 🎙️ Audio files and Markdown notes | Your Obsidian vault (local) |
| ⚙️ Plugin settings, license state, and pending task state | Local Obsidian plugin data |
| 🔑 Provider API keys, polish API keys, and license key | Obsidian SecretStorage (isolated per device and vault) |

- Resojot does not include client-side telemetry
- If you enable cloud transcription or cloud polish, the processed audio or text will be sent to your configured provider

> [!CAUTION]
> Do not publish `.obsidian/plugins/resojot/data.json`. It may contain settings, queue state, license state, and legacy provider credentials from older versions.

---

## 📦 Distribution And License

- Resojot is distributed as a closed-source plugin
- Installation and updates happen through BRAT or GitHub Releases
- See [LICENSE](./LICENSE)

---

## 📮 Contact

For feedback and license access, search for **焦应行** on Xiaohongshu.
