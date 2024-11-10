import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "fr-FR",
  title: "InfoGare Docs",
  description: "Documentation du projet InfoGare",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
