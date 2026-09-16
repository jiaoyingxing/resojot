import {
  App,
  PluginSettingTab,
  Setting,
  type SettingDefinitionItem
} from "obsidian";
import type ResojotPlugin from "./main";

export interface ResojotSettings {
  showNoticeOnLoad: boolean;
}

export const DEFAULT_SETTINGS: ResojotSettings = {
  showNoticeOnLoad: false
};

export class ResojotSettingTab extends PluginSettingTab {
  constructor(app: App, private readonly plugin: ResojotPlugin) {
    super(app, plugin);
  }

  override display(): void {
    const { containerEl } = this;
    containerEl.empty();

    new Setting(containerEl)
      .setName("Resojot")
      .setDesc("Resojot settings.")
      .setHeading();

    new Setting(containerEl)
      .setName("Show notice on load")
      .setDesc("Show a notice when the plugin loads.")
      .addToggle(toggle =>
        toggle
          .setValue(this.plugin.settings.showNoticeOnLoad)
          .onChange(async value => {
            await this.plugin.updateSettings({ showNoticeOnLoad: value });
          })
      );
  }

  override getSettingDefinitions(): SettingDefinitionItem[] {
    return [
      {
        name: "Show notice on load",
        desc: "Show a notice when the plugin loads.",
        control: {
          type: "toggle",
          key: "showNoticeOnLoad"
        }
      }
    ];
  }
}
