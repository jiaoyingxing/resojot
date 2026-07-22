import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

async function readJson(relativePath) {
  const filePath = path.join(rootDir, relativePath);
  const raw = await readFile(filePath, "utf8");
  return JSON.parse(raw);
}

const pkg = await readJson("package.json");
const manifest = await readJson("manifest.json");
const versions = await readJson("versions.json");

const issues = [];

if (pkg.version !== manifest.version) {
  issues.push(
    `Version mismatch: package.json=${pkg.version}, manifest.json=${manifest.version}`
  );
}

if (typeof versions[manifest.version] !== "string") {
  issues.push(`versions.json is missing entry for ${manifest.version}`);
} else if (versions[manifest.version] !== manifest.minAppVersion) {
  issues.push(
    `minAppVersion mismatch for ${manifest.version}: versions.json=${versions[manifest.version]}, manifest.json=${manifest.minAppVersion}`
  );
}

if (!manifest.id || !manifest.name) {
  issues.push("manifest.json is missing required plugin identity fields");
}

if (issues.length) {
  console.error("Resojot metadata check failed:");
  for (const issue of issues) {
    console.error(`- ${issue}`);
  }
  process.exit(1);
}

console.log("Resojot metadata check passed.");
console.log(`- id: ${manifest.id}`);
console.log(`- name: ${manifest.name}`);
console.log(`- version: ${manifest.version}`);
console.log(`- minAppVersion: ${manifest.minAppVersion}`);
