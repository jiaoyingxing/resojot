# Resojot / 应声记

Resojot is a closed-source Obsidian plugin for capturing voice notes, writing them into Markdown, and transcribing them through local or cloud providers.

应声记（Resojot）是一个面向 Obsidian 的闭源语音笔记插件，目标是让录音、写入笔记、转写和后续整理更自然地接在一起。

<p align="center">
  <img src="./assets/手机-工作台.png" width="30%" />
  <img src="./assets/手机-录音界面.png" width="30%" />
  <img src="./assets/手机-自动转写.png" width="30%" />
</p>

## What Resojot Does

- Record voice notes inside Obsidian.
- Save audio and Markdown notes in your vault.
- Create a new note per recording, append to a daily note, or append to a monthly note.
- Transcribe recordings through local, self-hosted, or cloud providers.
- Keep failed or unfinished transcription tasks visible and retryable.
- Import existing audio files for transcription.
- Polish transcription text with a configured LLM provider when enabled.

## Product Direction

Resojot is built as a voice note workflow plugin with flexible transcription backends.

It is not trying to become a professional recording studio inside Obsidian. The project prioritizes stable capture, recoverable transcription, low interruption, and an Obsidian-native feel.

## Editions

The basic edition can be used for recording and Markdown note writing.

Licensed features may include:

- Automatic transcription
- Transcription queue and retry
- Imported audio transcription
- Text polishing after transcription
- Additional advanced workflow commands

A valid Resojot license does not include third-party cloud provider quotas. Cloud transcription and LLM providers may still require their own account, API key, billing setup, or network access.

## Provider Options

Current provider routes include:

- Local OpenAI-compatible server
- Manual cloud OpenAI-compatible endpoint
- SiliconFlow-compatible OpenAI route
- Tencent Cloud ASR
- Aliyun DashScope ASR
- OpenAI official
- Azure Speech
- Google Speech-to-Text

Provider availability depends on your own credentials, account status, network environment, and the provider's current service policy.

## Privacy And Storage

- Audio files and Markdown notes are stored in your Obsidian vault.
- Provider API keys and plugin settings are stored locally in Obsidian plugin data.
- Resojot does not include client-side telemetry in the current release.
- Cloud transcription or LLM features send the selected audio/text content to the provider you configure.
- Local/offline transcription is available when you configure a local OpenAI-compatible server.

Do not publish your local `.obsidian/plugins/resojot/data.json`; it may contain settings, queue state, license state, or provider credentials.

## Closed Source Notice

This public repository is the project page and release-artifact repository for Resojot.

It may contain:

- `README.md`
- `LICENSE`
- screenshots and public assets
- `manifest.json`
- `versions.json`
- `styles.css`
- compiled `main.js`
- GitHub Release artifacts

It does not contain the private source code, development documents, tests, or internal build scripts. Source review access can be granted separately when required for Obsidian closed-source plugin review.

## Manual Installation

1. Download the latest GitHub Release artifacts.
2. Create a folder named `resojot` under your vault's `.obsidian/plugins/` directory.
3. Put `main.js`, `manifest.json`, and `styles.css` into that folder.
4. Restart Obsidian or reload community plugins.
5. Enable Resojot in Obsidian settings.

## Current Status

Current public release line: `0.9.2`

Minimum Obsidian version: `1.8.0`

## Contact

Feedback is welcome.

- REDnote: `1167756159`
