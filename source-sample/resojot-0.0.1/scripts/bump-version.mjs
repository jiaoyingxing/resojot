import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function printUsageAndExit() {
  console.error("Usage: npm run version:sync -- <version> [minAppVersion]");
  process.exit(1);
}

function isValidVersion(value) {
  return /^\d+\.\d+\.\d+$/.test(value);
}

async function readJson(relativePath) {
  const filePath = path.join(rootDir, relativePath);
  const raw = await readFile(filePath, "utf8");
  return JSON.parse(raw);
}

async function writeJson(relativePath, data) {
  const filePath = path.join(rootDir, relativePath);
  await writeFile(filePath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

const [versionArg, minAppVersionArg] = process.argv.slice(2);
if (!versionArg || !isValidVersion(versionArg)) {
  printUsageAndExit();
}

const pkg = await readJson("package.json");
const manifest = await readJson("manifest.json");
const versions = await readJson("versions.json");

const nextVersion = versionArg;
const nextMinAppVersion = minAppVersionArg || manifest.minAppVersion;

pkg.version = nextVersion;
manifest.version = nextVersion;
manifest.minAppVersion = nextMinAppVersion;

const nextVersions = {
  ...versions,
  [nextVersion]: nextMinAppVersion
};

await writeJson("package.json", pkg);
await writeJson("manifest.json", manifest);
await writeJson("versions.json", nextVersions);

console.log("Resojot version metadata updated.");
console.log(`- version: ${nextVersion}`);
console.log(`- minAppVersion: ${nextMinAppVersion}`);
