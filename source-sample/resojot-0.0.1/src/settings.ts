import { App, PluginSettingTab, Setting } from "obsidian";
import type ResojotPlaceholderPlugin from "./main";

export interface ResojotPlaceholderSettings {
  showNoticeOnLoad: boolean;
}

export const DEFAULT_SETTINGS: ResojotPlaceholderSettings = {
  showNoticeOnLoad: false
};

export class ResojotPlaceholderSettingTab extends PluginSettingTab {
  constructor(app: App, private readonly plugin: ResojotPlaceholderPlugin) {
    super(app, plugin);
  }

  override display(): void {
    const { containerEl } = this;
    containerEl.empty();

    new Setting(containerEl)
      .setName("Source sample")
      .setDesc(
        "This frozen public placeholder intentionally excludes production feature implementations."
      )
      .setHeading();

    new Setting(containerEl)
      .setName("Show placeholder notice on load")
      .setDesc("Displays a notice to make the sample-only runtime explicit.")
      .addToggle(toggle =>
        toggle
          .setValue(this.plugin.settings.showNoticeOnLoad)
          .onChange(async value => {
            await this.plugin.updateSettings({ showNoticeOnLoad: value });
          })
      );
  }
}
