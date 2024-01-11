import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import plantUml from "markdown-it-plantuml";
import { socialSharePlugin } from 'vuepress-plugin-social-share'
import {googleAnalyticsPlugin} from "@vuepress/plugin-google-analytics";
import { searchConsolePlugin } from 'vuepress-plugin-china-search-console'

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
  },
  plugins:[
    socialSharePlugin({
      networks :['wechat','qq','douban','telegram','qrcode']
    }),
    googleAnalyticsPlugin({
      id:"G-99CKKNDMT8",
      debug:true,
    }),
    searchConsolePlugin({
      autoPushBaiduSwitch: true,
    }),
  ],

  head: [
    //     <meta name="google-site-verification" content="BCYLlBTqItZkRsuw9tNYXU_GV5p78SwaYz2dmaWI6EQ" />
    ['meta', { name: 'google-site-verification', content: 'BCYLlBTqItZkRsuw9tNYXU_GV5p78SwaYz2dmaWI6EQ'}],
    ['meta', { name: 'keywords', content: 'suveng,苏文广'}],
  ]

  // Enable it with pwa
  // shouldPrefetch: false,
});
