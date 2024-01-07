import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import plantUml from "markdown-it-plantuml";

export default defineUserConfig({
  base: "/suveng_blog/",

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
  extendsMarkdown: (md) => {
    md.set({ breaks: true })
    md.use(plantUml)
  }

  // Enable it with pwa
  // shouldPrefetch: false,
});
