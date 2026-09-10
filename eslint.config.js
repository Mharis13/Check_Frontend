// https://docs.expo.dev/guides/using-eslint/
import { eslinntPluginPrettierRecommended } from "eslint-plugin-prettier/recommended"
import { defineConfig } from "eslint/config"
import expoConfig from "eslint-config-expo/flat"



export default defineConfig([
  expoConfig,
  eslinntPluginPrettierRecommended,
  {
    ignores: ["dist/*"],
  }
]);
