<p align="center">
  <strong>Language:</strong> <strong>English</strong> · <a href="./README-zh.md"><strong>简体中文</strong></a>
</p>

# 🎙️ Resojot

You think you are taking notes, but sometimes you are typing and deleting thoughts before they have even had a chance to be spoken.

Typing often pushes us to make expression clean before it is complete.<br>
Valuable context, hesitation, additions, jumps, and tone can disappear in that process.

Resojot works the other way around:
say it first, organize it later.

In Obsidian, the core flow stays simple:

Recording → Transcription → AI organization → Markdown notes

- **Recording**: speak first, with audio saved into your vault
- **Transcription**: use local or cloud ASR, automatically or manually
- **Organization**: connect your LLM for polishing, summarizing, or structured output
- **Archiving**: keep original audio, transcripts, and organized notes in one place

Resojot does not turn your notes into a separate system. Audio, transcripts, and organized results return to your Obsidian vault and continue inside your existing note workflow.

It does not try to make you write perfectly on the spot.<br>
It helps keep what you said available, so you can organize it and return to it later.

It is especially useful for thoughts that are still forming, moments when typing would interrupt you, and voice notes captured while walking, commuting, or using small pockets of time.

Let expression happen first. Let structure come after.

Resojot = Resonate + Jot down<br>
应声记: hear it, keep it, turn it into notes

<p align="center">
  <img src="./assets/手机-工作台.png" width="30%" />
  <img src="./assets/手机-录音界面.png" width="30%" />
  <img src="./assets/手机-自动转写.png" width="30%" />
</p>

## 💡 Why Resojot

### We are used to thinking with a keyboard

We often think and edit at the same time.<br>
The result is slower expression, compressed ideas, and thoughts that disappear before they become clear enough to write.

Resojot offers another path:<br>
say it first, organize it later.

The value of voice notes is not only speed. It is fidelity. Pauses, additions, turns, hesitation, and context are not always noise. They can be important clues to what you meant. For AI, the extra texture in spoken language can sometimes make your intent easier to recover.

## 🧭 Designed For

- Ideas that appear suddenly, before you want to start typing
- Quick capture while walking, commuting, or using fragmented time
- Spoken material where tone, pauses, and context matter
- A workflow that keeps original expression in your knowledge base, not only the polished result

## 🔁 Core Workflow

### 1. Record Quickly

Start recording from the workspace, command palette, or mobile-friendly entry points. Resojot is built around saving the thought first, not making you understand a large configuration surface before you can begin.

### 2. Write To Markdown

After recording, audio is saved into your Obsidian vault and written into Markdown notes. You can create a new note each time, or append to daily or monthly notes.

### 3. Transcribe And Recover

With a license, Resojot can enable automatic transcription, imported-audio transcription, current-note audio transcription, and a pending task queue. Unfinished or failed tasks can stay in the pending list for retry and recovery.

### 4. Optional AI Polish

After transcription, you can connect your configured LLM provider to polish text. Polishing is a later organization step; it does not replace the main goal of capturing first.

## 🧰 Main Features

### Recording And Writing

- Record directly inside Obsidian.
- Save audio files and embed them into Markdown notes.
- Choose new note, daily append, or monthly append writing modes.
- Use templates for more consistent voice note structure.
- Use lightweight mobile-first entries and workspace views.

### Transcription And Recovery

- Enable automatic transcription after recording with a license.
- Transcribe imported audio files.
- Transcribe audio in the current note.
- Keep failed or unfinished work in a pending list for retry.
- Use common error hints and diagnostics to reduce troubleshooting cost.

### AI Organization

- Continue into an AI polishing flow after transcription with a license.
- Use common LLM providers or OpenAI-compatible endpoints.
- Customize prompt presets so the same spoken material can become different styles of writing.

### Provider Routes

Available provider routes depend on your own accounts, API keys, balance, network access, and provider policies:

- Local OpenAI-compatible server
- Manual cloud OpenAI-compatible endpoint
- SiliconFlow-compatible OpenAI route
- Tencent Cloud ASR
- Aliyun DashScope ASR
- OpenAI official
- Azure Speech
- Google Speech-to-Text

## 🔐 License And Versions

Resojot uses feature licensing. Without a license key, it can still be used as a basic voice recording tool. With a license, enhanced features such as transcription, pending queues, imported-audio transcription, and AI polishing can be enabled.

### Available Without A License

- Recording
- Saving audio
- Writing basic Markdown notes
- Using basic templates

### Enabled With A License

- Automatic transcription
- Pending queue and retry
- Imported-audio transcription
- AI polishing after transcription

### License Model

- License keys are verified locally through signature validation.
- Resojot currently does not rely on a remote license server.
- Resojot currently does not require a server-side account system.
- The author will not remotely enable or disable your local plugin through an extra background service.
- Lifetime license users receive priority access to new builds and update support.

To get a license key, search for `焦应行` on Xiaohongshu.

A Resojot license does not include third-party cloud service quota. Cloud ASR or LLM providers still require your own account, API key, balance, billing settings, and network access.

## 🛡️ Privacy And Storage

- Audio files and Markdown notes are stored in your Obsidian vault.
- Plugin settings, license state, and pending task state are stored in local Obsidian plugin data.
- Provider keys, polishing API keys, and the license key are stored in Obsidian SecretStorage, scoped to the current device and vault.
- Resojot currently contains no client-side telemetry.
- If you enable cloud ASR or cloud LLM polishing, the processed audio or text will be sent to the provider you configured.
- If you configure a local OpenAI-compatible service, you can use a local or self-hosted route.

Do not publish your `.obsidian/plugins/resojot/data.json`. It may contain settings, queue state, license state, and legacy provider credentials from older versions.

## 📦 Installation

Resojot currently provides installable builds through GitHub Releases. Use the versions that are actually available on the Releases page. Do not treat files on the repository main branch as official release packages.

Manual installation:

1. Download `main.js`, `manifest.json`, and `styles.css` from the corresponding GitHub Release.
2. Create `.obsidian/plugins/resojot/` under your vault.
3. Put the three files into that folder.
4. Restart Obsidian, or reload community plugins.
5. Enable Resojot in Obsidian settings.

## 🔒 Closed Source Notice

This public repository is the project homepage and release artifacts repository for Resojot.

It generally contains:

- `README.md`
- `README-zh.md`
- `LICENSE`
- Screenshots and public assets
- `manifest.json`
- `versions.json`
- `styles.css`
- Compiled `main.js`
- GitHub Release artifacts

It does not contain private source code, development documents, tests, internal build scripts, license generation materials, private keys, API keys, or local user data.

The plugin has not yet entered the official Obsidian plugin submission process. If source review access is required later under Obsidian's closed-source plugin review process, the author will provide reviewer access to a private source repository separately.

## 📌 Current Status

- Please refer to the GitHub Releases page for actually published installable versions.

## ✉️ Contact

Feedback and license key access:

- Search Xiaohongshu for `焦应行`
