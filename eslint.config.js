// https://docs.expo.dev/guides/using-eslint/
import { defineConfig } from "eslint/config"
import { expoConfig } from "eslint-config-expo/flat.js"
import { eslinntPluginPrettierRecommended } from "eslint-plugin-prettier/recommended"



module.exports = defineConfig([
  expoConfig,
  eslinntPluginPrettierRecommended,
  {
    ignores: ["dist/*"],
  }
]);
