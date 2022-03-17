const { description } = require('../../package');

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Simple Code',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#247ba0' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/image/favicon-32x32.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/image/favicon-16x16.png',
      },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    displayAllHeaders: true,
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Simple Slider',
        link: '/carrousel/intro/',
      },
      {
        text: 'Simple Review',
        link: '/review/intro/',
      },
      {
        text: 'VS Meme',
        link: '/meme/intro/',
      },
      {
        text: 'My Projects',
        link: 'https://my-portfolio-blog-website.netlify.app/',
      },
    ],
    sidebar: {
      // '/guide/slide': ['intro', '', 'params', 'DynamicData'],
      // '/guide/review': ['intro', '', 'params'],
      // simpleCode: [
      //   {
      //     text: 'Simple Slider',
      //     link: '/carrousel/intro/',
      //   },
      //   {
      //     text: 'Simple Review',
      //     link: '/review/intro/',
      //   },
      // ],
      '/simpleCode/': ['/carrousel/intro', '/review/intro', '/meme/intro'],
      '/review/': ['intro', '', 'GetValues', 'params'],
      '/carrousel/': ['intro', '', 'params', 'DynamicData'],
      '/meme/': ['intro'],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom'],
};
