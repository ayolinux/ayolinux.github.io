import sidebar from "./sidebar";

import { defineUserConfig } from 'vuepress'
import { defaultTheme } from "@vuepress/theme-default";
import { searchPlugin } from '@vuepress/plugin-search';
import { seoPlugin } from "vuepress-plugin-seo2";
import { sitemapPlugin } from "vuepress-plugin-sitemap2";




export default defineUserConfig({
  lang: 'zh-CN',
  title: '计算机小白自学计划',
  description: '让你真正学会自学 找到一份技术岗工作',
  head: [
        ['script', {}, ``],
        ['link', { rel: 'icon', href: '/logo.jpg' }],
        ['meta', { name: 'keywords', content: '计算机自学,计算机,计算机小白,自学,编程,python,程序员,代码,阿佑学长,阿佑学长Linux'}],
        ['meta', { name: 'google-site-verification', content:'LGx67KDAscrSCkNYSw-nquu35OiFjzUPucGf3aw0194' }],
        ['meta', {
            name: 'description', content:
                '计算机小白自学计划， 让你真正学会自学，找到一份技术岗工作!'
        }],
  ],
  theme: defaultTheme({
    logo: '/logo.jpg',
    navbar: [
        {text: '一对一付费服务', link: '/add_plan.md'},
        {text: '关于阿佑', link: '/about.md'},
        {text: '联系我', link:'/contact.md', children: [{ text: '微博',link: 'https://weibo.com/7398970672/KtB6x9A0d'}, {text: 'B站',link: 'https://space.bilibili.com/523226871',},{text:'微信',link:'/contact.md'}],},
        ],
    sidebar,
    editLink: false,
    contributors: false,
    lastUpdated: false,
  }),
  plugins: [
    seoPlugin({
            hostname: 'https://ayolinux.top',
            author: '阿佑学长Linux',
    }),
    sitemapPlugin({
            hostname: 'https://ayolinux.top',
    }),
  ],
  
})
