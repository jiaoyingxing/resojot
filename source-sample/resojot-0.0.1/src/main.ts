import { Notice, Plugin } from "obsidian";
import {
  DEFAULT_SETTINGS,
  ResojotPlaceholderSettingTab,
  type ResojotPlaceholderSettings
} from "./settings";

export default class ResojotPlaceholderPlugin extends Plugin {
  settings: ResojotPlaceholderSettings = DEFAULT_SETTINGS;

  override async onload(): Promise<void> {
    await this.loadSettings();

    this.addRibbonIcon("mic", "Resojot source sample", () => {
      new Notice("This frozen source sample does not include Resojot product features.");
    });

    this.addCommand({
      id: "open-source-sample-notice",
      name: "Open source sample notice",
      callback: () => {
        new Notice("Resojot 0.0.1 public source placeholder");
      }
    });

    this.addSettingTab(new ResojotPlaceholderSettingTab(this.app, this));

    if (this.settings.showNoticeOnLoad) {
      new Notice("Resojot 0.0.1 public source placeholder loaded.");
    }
  }

  async loadSettings(): Promise<void> {
    const stored = (await this.loadData()) as Partial<ResojotPlaceholderSettings> | null;
    this.settings = {
      ...DEFAULT_SETTINGS,
      ...(stored ?? {}),
      showNoticeOnLoad: Boolean(stored?.showNoticeOnLoad)
    };
  }

  async updateSettings(patch: Partial<ResojotPlaceholderSettings>): Promise<void> {
    this.settings = { ...this.settings, ...patch };
    await this.saveData(this.settings);
  }
}
