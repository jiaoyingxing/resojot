# Resojot / 应声记

**Resojot** is an Obsidian voice notes plugin focused on fast capture, structured note writing, and flexible transcription backends.

**应声记（Resojot）** 是一个面向 Obsidian 的语音笔记插件，重点在于：快速录音、稳定写入笔记，以及更自由的转写后端选择。

---

<p align="center">
  <img src="./assets/手机-工作台.png" width="30%" />
  <img src="./assets/手机-录音界面.png" width="30%" />
  <img src="./assets/手机-自动转写.png" width="30%" />
</p>

<br/>

---
## 版本功能清单

### 0.9.2版本更新预告
- 工作台
  - 最近列表改名后将会及时刷新
  - 非浮窗录音时，工作台新增收音状态动效
  - 录音按钮触发动效调整，现在从工作台用浮窗录音更自然
  - 工作台视觉精简，移除不必要的文本元素
  - 工作台列表录音计时优化
  - 修复安卓手机工作台近期录音不显示时长问题（手机端计算音频时长过于占用资源，导致卡顿，考虑移除）
- 设置
  - 笔记模板支持搜索选择，设置模板更方便。
  - 修复“录音清理”弹窗过大等显示问题。
  - 待转界面与录音清理界面显示优化、新增打开文件功能，提升易用性。 
  - 新增音频写入方式可选开关  [[...]]  / ![[...]] ，解决多音频md内嵌播放器渲染卡顿问题。
  - 新增“当月追加”模式，同一月内的录音都追加到同一篇月笔记。
- 润色
  - 新增的独立板块，在完成录音转写后，自动通过API调用LLM润色。
  - 支持自定义提示词方案预设。
  - 支持自定义大语言模型API。
- 其他
  - 优化Resojot冷启动速度。
  - 优化录音保存链条，尽量避免意外中断导致文件丢失。

### 0.9.1版本
1. 设置（括号里是旧名）
  - 诊断（高级与诊断）：新增“转写错误提示解析”栏目；新增“音频格式能力诊断”栏目；移除无实际用途的转写状态检查按钮、诊断数据开关（相关命令保留）；新增“录音清理”入口，用于管理异常音频文件。
    - 录音清理：可扫描孤立附件、无效语音残留、失败录音残留；支持打开笔记、播放/删除录音。
    - 转写错误 FAQ：用于常见失败原因对照排查，覆盖无语音、解码失败、额度不足、鉴权失败、本地服务未启动、格式不支持等场景。
    - 音频格式能力诊断：查看当前设备/当前转写服务支持哪些格式，显示默认候选顺序等。
  - 存储（默认配置）：可选的分段录制功能“长录音自动分段保存”（用于兼容超长录制场景，避免文件过大无法转写）
  - 显示（启动与显示）：新增“录音时显示全屏浮窗”开关，现在支持非全屏录制，电脑端可同时操作其他笔记；新增“工作台精简模式”开关，启用后仅保留录音、设置、队列按钮，电脑端可缩小标签页常驻主页。
2. 录音
  - 支持中断处理，在手机锁屏/切后台时自动结束并保存录音，不造成继续录制假象。
3. 命令
  - 新增“转写当前笔记的全部音频”命令，原“转写当前笔记音频”更名为“转写光标附近音频”。
  - “开始录音”的命令改为“开始/结束”，更适配非全屏录制情况。
4. 其他
  - 待转列表常见报错提示汉化
  - 阿里云转写异常换行修复
  - 设置界面相关文案、标签用词优化

### 0.9.0版本（首次发布版）
- 百度网盘链接: https://pan.baidu.com/s/1yH034XqlA_YwRh1OBBtvyg 
  - 提取码: nk9v
- 夸克网盘链接：https://pan.quark.cn/s/76a105f1d253
  - 提取码：GWv5
首发正式版
1. 工作台
  - 集成设置、浏览、管理、录音等能力
  - 可从工作台直接打开语音笔记
  - 支持快速展开转写队列并管理
  - 自定义展示近期录音片段/近期录音笔记、最近列表显示条目
  - 自选是否“启动时打开工作台”
2. 录音
  - 在 Obsidian 内直接开始录音 
  - 支持命令或工作台启动
  - 停止录音后保存音频文件 
3. 录音笔记
  - 录制后自动写入Markdown笔记 
  - 可分别配置录音文件与Markdown笔记的存储目录
  - 支持两种笔记存储方式： 每次新建一篇笔记/按天追加到同一篇日记
  - 支持分别设置两种模式下的文件名格式
  - 支持自定义选择笔记模板
4. 转写能力
  - 自动转写
    -  录音完成后直接触发转写 
    -  转写成功后写回结果 
    -  若后台未完成，可自动进入待转队列 
    -  支持无效录音识别
  - 导入音频转写（聚焦在音频文件）
    -  支持导入当前聚焦的音频文件并执行转写 
    -  导入音频也支持： 
      -  转写成功 
      -  进入待转队列 
      -  后台失败保留 
      -  无有效语音保留
  - 转写当前笔记中的音频（聚焦在md文件）
    -  若笔记有多段音频，默认转写最后一段，也支持根据当前光标附近音频来判断目标。
5. 待转写队列与补转
  - 可从工作台顶部按钮进入转写队列。
  - 显示待处理详情，包括md笔记与拼音目录位置、名称、 失败原因、报错代码等内容。
  - 情况包含待转、处理中、失败、无有效语音、源文件缺失等。
  - 支持重试待转写任务，适用于离线录音的网络恢复转写等。
6. 支持转写服务
  - OpenAI 官方
  - 手动云端（OpenAI-compatible）
  - 本地服务（OpenAI-compatible）
  - 腾讯云 ASR
  - 阿里云百炼语音识别
  - Azure Speech
  - Google Speech-to-Text
7. 支持快捷命令
  - 开始录音
  - 打开设置
  - 打开工作台
  - 打开当天记录
  - 重试待转写任务
  - 导入当前音频文件
  - 转写当前笔记的音频
  - 在光标位置开始录音
  - 检查转写状态一致性
  - 修复转写状态一致性
  - 校验当前转写Provider
8. 其他
  - i18n适配

![命令面板](./assets/%20命令面板-2.png)

![命令面板](./assets/%20命令面板-1.png)


## What Resojot Tries to Solve / Resojot 试图解决什么问题

### English
Many note tools can record audio, but the experience often breaks into pieces:

- recording is separate from note writing
- transcription failures are hard to recover
- local and cloud transcription options are fragmented
- importing existing audio is awkward

Resojot tries to make these parts work together more naturally.

### 中文
很多笔记工具虽然能录音，但体验常常是割裂的：

- 录音和写笔记是分开的
- 转写失败后不容易恢复
- 本地转写与云端转写方案很分散
- 导入已有音频也不顺手

Resojot 想做的是，把这些环节更自然地接起来。

---

## Product Direction / 产品方向

Resojot is being built as:

**a voice note workflow plugin with flexible transcription backends**

not as:

**a professional recording studio inside Obsidian**

Resojot 的产品方向是：

**语音笔记工作流插件 + 可插拔转写后端**

而不是：

**在 Obsidian 里塞进一个专业录音软件**

That means the project will continue to prioritize:

- stable recording and note writing
- provider flexibility
- offline transcription options
- clear recovery path for failed tasks

这意味着项目会持续优先关注：

- 稳定的录音与写入主链路
- 更自由的 provider 选择
- 离线转写可行性
- 转写失败后的清晰恢复路径

---

## Notes / 说明

This repository is intended to serve as the public-facing project page for Resojot.

这个仓库主要用于作为 Resojot 的对外项目主页。

---

## Contact / 联系方式

欢迎反馈与交流。

- 📕REDnote：1167756159
