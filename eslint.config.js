import { includeIgnoreFile } from "@eslint/compat";
import globals from "globals";
import pluginJs from "@eslint/js";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore");

export default [
  includeIgnoreFile(gitignorePath),
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    files: ['vite.config.js'],
    languageOptions: { globals: globals.node },
  }
];
