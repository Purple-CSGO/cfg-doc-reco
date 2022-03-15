import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  title: 'CFG预设',
  description: '一套适用于CSGO几乎所有场景的CFG预设文件',
  theme: 'reco',
  themeConfig: {
    style: '@vuepress-reco/style-default',
    logo: '/logo.png',
    author: 'Purp1e',
    docsRepo: 'https://github.com/Purple-CSGO/CSGO-Config-Presets',
    docsBranch: 'main',
    docsDir: 'example',
    lastUpdatedText: '',
    // series 为原 sidebar
    series: {
      '/docs/': ['usage', 'updates', 'faq', 'editor', 'optional', 'weapon-code', 'chatwheel', 'donate']
    },
    navbar:
    [
      { text: '主页', link: '/' },
      { text: '文档', link: '/docs/index'}
    ],
    // valineConfig 配置与 1.x 一致
    // valineConfig: {
    //   appId: 'xxx',
    //   appKey: 'xxx',
    //   placeholder: '填写邮箱可以收到回复提醒哦！',
    //   verify: true, // 验证码服务
    //   // notify: true,
    //   recordIP: true,
    //   // hideComments: true // 隐藏评论
    // },
  },
  // debug: true,
})
