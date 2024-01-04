import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    // "/en/": {
    //   lang: "en-US",
    //   title: "苏文广的博客",
    //   description: "苏文广的博客",
    // },
    "/": {
      lang: "zh-CN",
      title: "苏文广的博客",
      description: "苏文广的博客",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
