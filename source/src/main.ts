import { Notice, Plugin } from "obsidian";
import {
  DEFAULT_SETTINGS,
  ResojotSettingTab,
  type ResojotSettings
} from "./settings";

export default class ResojotPlugin extends Plugin {
  override settings: ResojotSettings = DEFAULT_SETTINGS;

  override async onload(): Promise<void> {
    await this.loadSettings();

    this.addRibbonIcon("mic", "Resojot", () => {
      new Notice("Resojot");
    });

    this.addCommand({
      id: "open-notice",
      name: "Open notice",
      callback: () => {
        new Notice("Resojot");
      }
    });

    this.addSettingTab(new ResojotSettingTab(this.app, this));

    if (this.settings.showNoticeOnLoad) {
      new Notice("Resojot loaded.");
    }
  }

  async loadSettings(): Promise<void> {
    const stored = (await this.loadData()) as Partial<ResojotSettings> | null;
    this.settings = {
      ...DEFAULT_SETTINGS,
      ...(stored ?? {})
    };
  }

  async updateSettings(patch: Partial<ResojotSettings>): Promise<void> {
    this.settings = { ...this.settings, ...patch };
    await this.saveData(this.settings);
  }
}
