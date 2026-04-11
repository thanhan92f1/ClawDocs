// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ClawDocs',
  tagline: 'Enterprise documentation portal for the Claw platform.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://clawdocs.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'PhoTueSoftWareSolutionsJSC',
  projectName: 'ClawDocs',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.7,
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'openclaw',
        path: 'openclaw',
        routeBasePath: 'openclaw',
        sidebarPath: './sidebarsOpenclaw.js',
        editUrl: 'https://github.com/thanhan92-f1/hitechclaw-ai',
        showLastUpdateAuthor: false,
        showLastUpdateTime: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'nemoclaw',
        path: 'nemoclaw',
        routeBasePath: 'nemoclaw',
        sidebarPath: './sidebarsNemoClaw.js',
        editUrl: 'https://github.com/thanhan92-f1/hitechclaw-ai',
        showLastUpdateAuthor: false,
        showLastUpdateTime: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'hitechclaw',
        path: 'hitechclaw',
        routeBasePath: 'hitechclaw',
        sidebarPath: './sidebarsHiTechClaw.js',
        editUrl: 'https://github.com/thanhan92-f1/hitechclaw-ai',
        showLastUpdateAuthor: false,
        showLastUpdateTime: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'clawspark',
        path: 'clawspark',
        routeBasePath: 'clawspark',
        sidebarPath: './sidebarsClawSpark.js',
        editUrl: 'https://github.com/thanhan92-f1/hitechclaw-ai',
        showLastUpdateAuthor: false,
        showLastUpdateTime: false,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'other-docs',
        path: 'other-docs',
        routeBasePath: 'other-docs',
        sidebarPath: './sidebarsOtherDocs.js',
        editUrl: 'https://github.com/thanhan92-f1/hitechclaw-ai',
        showLastUpdateAuthor: false,
        showLastUpdateTime: false,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/hitechclaw-banner-dark.png',
      announcementBar: {
        id: 'clawdocs-enterprise-bar',
        content:
          'ClawDocs Enterprise Portal đang được chuẩn hóa cho Openclaw, NemoClaw, HiTechClaw, ClawSpark và Docs Khác.',
        backgroundColor: '#1d4ed8',
        textColor: '#eff6ff',
        isCloseable: true,
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'ClawDocs',
        logo: {
          alt: 'ClawDocs logo',
          src: 'img/hitechclaw-banner-dark.png',
        },
        items: [
          {
            type: 'docSidebar',
            docsPluginId: 'openclaw',
            sidebarId: 'openclawSidebar',
            position: 'left',
            label: 'Openclaw',
          },
          {
            type: 'docSidebar',
            docsPluginId: 'nemoclaw',
            sidebarId: 'nemoClawSidebar',
            position: 'left',
            label: 'NemoClaw',
          },
          {
            type: 'docSidebar',
            docsPluginId: 'hitechclaw',
            sidebarId: 'hiTechClawSidebar',
            position: 'left',
            label: 'HiTechClaw',
          },
          {
            type: 'docSidebar',
            docsPluginId: 'clawspark',
            sidebarId: 'clawSparkSidebar',
            position: 'left',
            label: 'ClawSpark',
          },
          {
            type: 'docSidebar',
            docsPluginId: 'other-docs',
            sidebarId: 'otherDocsSidebar',
            position: 'left',
            label: 'Docs Khác',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Sản phẩm',
            items: [
              {
                label: 'Openclaw',
                to: '/openclaw/intro',
              },
              {
                label: 'NemoClaw',
                to: '/nemoclaw/intro',
              },
              {
                label: 'HiTechClaw',
                to: '/hitechclaw/intro',
              },
              {
                label: 'ClawSpark',
                to: '/clawspark/intro',
              },
              {
                label: 'Docs Khác',
                to: '/other-docs/intro',
              },
            ],
          },
          {
            title: 'Điều hướng',
            items: [
              {
                label: 'ClawDocs',
                to: '/',
              },
              {
                label: 'Bắt đầu với Openclaw',
                to: '/openclaw/intro',
              },
            ],
          },
          {
            title: 'Thông tin',
            items: [
              {
                label: 'Nền tảng tài liệu nội bộ',
                to: '/',
              },
            ],
          },
        ],
        copyright: `Bản quyền © ${new Date().getFullYear()} Nguyen Thanh An by Pho Tue SoftWare Solutions JSC. Phát triển với Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
    }),
};

export default config;
