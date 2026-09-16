import esbuild from "esbuild";
import { copyFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(rootDir, "dist");
const isProduction = process.argv.includes("production");

await mkdir(outputDir, { recursive: true });
await Promise.all(
  ["styles.css", "versions.json"].map(fileName =>
    copyFile(path.join(rootDir, fileName), path.join(outputDir, fileName))
  )
);

await esbuild.build({
  entryPoints: [path.join(rootDir, "src", "main.ts")],
  bundle: true,
  format: "cjs",
  platform: "browser",
  target: "es2020",
  outfile: path.join(outputDir, "main.js"),
  sourcemap: isProduction ? false : "inline",
  minify: isProduction,
  external: ["obsidian", "electron"],
  logLevel: "info"
});
