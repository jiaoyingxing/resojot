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
const versions = await readJson("versions.json");

const issues = [];

if (typeof versions[pkg.version] !== "string" || !versions[pkg.version].trim()) {
  issues.push(`versions.json is missing minAppVersion for ${pkg.version}`);
}

if (issues.length) {
  console.error("Resojot metadata check failed:");
  for (const issue of issues) {
    console.error(`- ${issue}`);
  }
  process.exit(1);
}

console.log("Resojot metadata check passed.");
console.log(`- package: ${pkg.name}`);
console.log(`- version: ${pkg.version}`);
console.log(`- minAppVersion: ${versions[pkg.version]}`);
