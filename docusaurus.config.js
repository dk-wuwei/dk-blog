// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DK Blog',
  tagline: 'DK的博客 学习、记录、分享',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dk-wuwei', // Usually your GitHub org/user name.
  projectName: 'dk-blog', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/dk-wuwei/dk-blog/tree/main/',
        },
        blog: {
          path: './blog',
          routeBasePath: "/",
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.

          editUrl:
            'https://github.com/dk-wuwei/dk-blog/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'DK Blog',
        logo: {
          alt: 'DK Blog Logo',
          src: 'img/logo.svg',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'right',
          //   label: 'Tutorial',
          // },
          // {to: '/', label: 'Blog', position: 'right'},
          {
            href: 'https://juejin.cn/user/536217407720958/posts',
            label: '掘金',
            position: 'right',
          },
          {
            href: 'https://github.com/dk-wuwei/dk-blog',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Blog',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //     ],
        //   },
        //   {
        //     title: '社交媒体',
        //     items: [
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/dk-wuwei/dk-blog',
        //       },
        //       {
        //         label: '掘金',
        //         href: 'https://juejin.cn/user/536217407720958/posts',
        //       },
        //     ],
        //   },
        // ],
        copyright: `<p>Copyright © 2022 DK Built with Docusaurus. | <a href="https://beian.miit.gov.cn/">豫ICP备2021031684号-1</a></p>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
