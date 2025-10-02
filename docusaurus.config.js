// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Weather Intelligence for Smart Operations',
  tagline: 'Weather Intelligence for Smart Operations',
  favicon: 'img/meteosync-favicon.ico',

  // Set the production url of your site here
  url: 'https://www.meteosync.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    // [
    //   'classic',
    //   /** @type {import('@docusaurus/preset-classic').Options} */
    //   ({
    //     docs: {
    //       sidebarPath: './sidebars.js',
    //       // Please change this to your repo.
    //       // Remove this to remove the "edit this page" links.
    //       editUrl:
    //         'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
    //     },
    //     blog: {
    //       showReadingTime: true,
    //       feedOptions: {
    //         type: ['rss', 'atom'],
    //         xslt: true,
    //       },
    //       // Please change this to your repo.
    //       // Remove this to remove the "edit this page" links.
    //       editUrl:
    //         'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
    //       // Useful options to enforce blogging best practices
    //       onInlineTags: 'warn',
    //       onInlineAuthors: 'warn',
    //       onUntruncatedBlogPosts: 'warn',
    //     },
    //     theme: {
    //       customCss: [require.resolve('./src/css/custom.css')],
    //     },
    //   }),
    // ],
    // [
    //   'redocusaurus',
    //   {
    //     specs: [
    //       {
    //         id: 'api-docs',
    //         spec: './static/openapi.yaml', // Path to your OpenAPI spec file
    //         route: '/api', // Route where the API docs will be served
    //       },
    //     ],
    //     theme: {
    //       primaryColor: '#1890ff',
    //     },
    //   },
    // ],    
  [
    'classic',
    {
      docs: false,   // ❌ disable Docs
      blog: false,   // ❌ disable Blog
      theme: {
        customCss: require.resolve('./src/css/custom.css'),
      },
    },
  ],

  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Meteosync',
      logo: {
        alt: 'Meteosync Logo',
        src: 'img/meteosync-logo.svg',
      },
      items: [
        // { to: '/docs/intro', label: 'Docs', position: 'left' },
        // { to: '/blog', label: 'Blog', position: 'left' },
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'WeatherCalendar',
              href: 'https://www.meteosync.com/calendar',
            },
            {
              label: 'WeatherPlanB',
              href: 'https://www.meteosync.com/trip-planner',
            },            
            // {
            //   label: 'Docs',
            //   to: '/docs/intro',
            // },
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            // {
            //   label: 'GitHub',
            //   href: 'https://github.com/facebook/docusaurus',
            // },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Meteosync Built with Docusaurus.`,
    },
  },
};

export default config;
