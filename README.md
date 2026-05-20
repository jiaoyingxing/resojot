<p align="center">
  <strong>Language:</strong> <strong>English</strong> · <a href="./README-zh.md"><strong>简体中文</strong></a>
</p>

# Resojot

Give Obsidian room for your full expression.

Speak it out. Save it as a note.

A lot of things are worth keeping. The problem is that, when the moment comes, capturing them often feels like too much work. Typing is fine when you are already sitting in front of a keyboard. What usually slips away are the thoughts that arrive too quickly to type: a sentence that appears on the road, a judgment that forms in the middle of a meeting, a line of thought that slowly comes together while walking. In those moments, speaking is the most natural move.

Resojot is built to bring that moment directly into Obsidian.

You speak first, then save first. The audio goes into your vault, Markdown is written into your note, and transcription, polish, and further editing all continue on the same note. On desktop there are shortcuts. On mobile there are Obsidian URLs that can start recording quickly. The whole entry is meant to stay light and avoid interrupting the moment.

<p align="center">
  <img src="./assets/手机-工作台.png" width="30%" />
  <img src="./assets/手机-录音界面.png" width="30%" />
  <img src="./assets/手机-自动转写.png" width="30%" />
</p>

## Why

Obsidian is great at organizing things that are already formed. Many people already treat it as their main note system. But when you actually want to capture something, you are not always sitting at a keyboard. A lot of ideas, judgments, spoken drafts, and temporary conclusions appear as speech first. The content is already there, but turning it into a note still means finding the right page, switching apps, thinking about formats, figuring out import, and deciding how to write it into Markdown. That is where many notes stop before they begin.

So the material ends up somewhere else first: chat apps, phone notes, voice messages, temporary drafts, or nowhere at all. By the time you come back later, the original tone, detail, and context have often faded.

That is the gap Resojot is trying to close. The point is not how to record audio. The point is how to let something you wanted to keep, but nearly skipped because it felt annoying, grow directly into Obsidian.

## Entry

Resojot is closer to a way of entering your notes.

You start from a shortcut, command, workspace, or mobile entry. The audio is saved first. Markdown is written first. Short material can stop there. Longer material can continue into transcription and polish. Audio already inside the current note and audio imported later can enter the same path too.

The main character is always the note. Recording is the entry, transcription is the process, polish is the cleanup, and the final thing that remains is the note already inside Obsidian. The point is not that you got one more piece of source material. The point is that the material has already come back into your own note system.

## Expression

Typing tends to squeeze a lot of things out. Tone, detail, context, and the event itself all get compressed while you are trying to clean up a sentence. A lot of content that looks a little redundant is exactly what people delete while typing, yet that same redundancy can help AI understand the meaning more completely later.

Once that material stays in place, it also becomes easier to look back and understand what was actually happening at the time. Often the valuable part is not only the conclusion itself, but also how you arrived there.

That is the part Resojot is trying to keep.

## Flow

Sometimes it is just one short thought. Press once, speak, stop, and the note already holds it.

Sometimes it is something longer. Meetings, classes, discussions, and reviews can be captured first and then moved through transcription, polish, and later splitting or cleanup on the same note.

Sometimes the material comes from earlier audio. Audio already in the current note and audio imported later can keep moving through the same path.

The priority stays the same all the way through: when you want to keep something, avoid getting blocked by operation overhead; once it is captured, avoid doing a second round of manual moving later.

## Cleanup

Transcription turns spoken material into text. Polish handles later reading cleanup. Filler words and obvious noise can be reduced, reading becomes easier, and the original tone and meaning are kept as much as possible. This is later-stage cleanup. It does not move the material into another system, and it does not try to rewrite the expression into something unrecognizable.

From the first spoken sentence to the note itself and the editing that follows, the whole path stays inside Obsidian.

## Tradeoffs

Resojot is not trying to become professional recording software.

It does not aim for heavy recording management, a standalone app, or a thick AI writing workflow. It is closer to giving Obsidian a voice entry that is easy enough to reach for: when you want to keep something, you speak directly, and what remains afterwards is a note you can continue working on instead of a piece of source material waiting to be dealt with later.

The goal is to make recording easier first, let the expression stay, and clean it up later.

## Situations

Resojot becomes useful whenever the moment is basically: “I want to keep this, but doing it right now feels annoying.”

That can happen while commuting, walking, sitting in a meeting, in class, in discussion, or simply while sitting at a desk and not wanting to switch back to keyboard input for a few lines. As long as the material was always meant to live in Obsidian, this path is much easier than throwing it somewhere else first and moving it back later.

If Obsidian is already where projects, reviews, ideas, and judgments are kept, that difference becomes more obvious.

## Provider Routes

Current transcription routes include local OpenAI-compatible services, manually configured cloud OpenAI-compatible endpoints, SiliconFlow, Doubao ASR, Tencent Cloud ASR, Aliyun DashScope ASR, OpenAI, Azure Speech, and Google Speech-to-Text.

Polish follows your configured LLM route, including common OpenAI-compatible endpoints and presets such as SiliconFlow and Doubao / Volcengine Ark.

The route you use depends on your own account, API keys, balance, network access, and current provider policies.

## Installation

Public distribution currently happens through GitHub Releases.

Because the official Community Plugins directory does not currently support closed-source plugins, Resojot does not appear in the in-app plugin store search.

### Recommended: BRAT

1. Install `BRAT` from Obsidian's Community Plugins browser.
2. Open BRAT and choose `Add Beta plugin`.
3. Enter `https://github.com/jiaoyingxing/resojot`.
4. Let BRAT install the latest available Resojot build.
5. Enable `Resojot` in Obsidian settings.

Using BRAT makes future updates easier.

### Manual Installation

1. Download `main.js`, `manifest.json`, and `styles.css` from the matching GitHub Release.
2. Create `.obsidian/plugins/resojot/` inside your vault.
3. Place those three files into that folder.
4. Restart Obsidian, or reload community plugins.
5. Enable `Resojot` in Obsidian settings.

## License

Resojot uses feature licensing.

Without a license, you can first try the basic voice capture flow. With a license, automatic transcription, imported-audio transcription, pending-task recovery, and AI polish become available.

Available without a license:

- Recording
- Saving audio
- Writing basic Markdown notes
- Using basic templates

Enabled with a license:

- Automatic transcription
- Pending queue and retry
- Imported-audio transcription
- AI polish after transcription

License notes:

- License keys are verified locally through signature validation.
- A Resojot license does not include third-party cloud service quota.

To get a license key, search for `焦应行` on Xiaohongshu.

## Privacy And Storage

- Audio files and Markdown notes are stored in your Obsidian vault.
- Plugin settings, license state, and pending task state are stored in local Obsidian plugin data.
- Provider keys, polish API keys, and the license key are stored in Obsidian SecretStorage for the current device and vault.
- Resojot currently contains no client-side telemetry.
- If you enable cloud transcription or cloud AI polish, the processed audio or text will be sent to the configured provider.

Do not publish your `.obsidian/plugins/resojot/data.json`. It may contain settings, queue state, license state, and legacy provider credentials from older versions.

## Closed Source Notice

Resojot is currently distributed as a closed-source plugin. The source code is not public; use BRAT or GitHub Releases above for installation and updates.

## Contact

Feedback and license access:

- Search Xiaohongshu for `焦应行`
