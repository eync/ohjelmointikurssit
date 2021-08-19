const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Ohjelmointi kurssit',
  tagline: '',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'eync', // Usually your GitHub org/user name.
  projectName: 'ohjelmointikurssit', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Ohjelmointi kurssit (beta)',
      items: [
        {
          to: '/kurssit',
          position: 'right',
          label: 'Kurssit',
        },
        {
          to: '/resurssit',
          position: 'right',
          label: 'Resurssit',
        },
        {
          to: '/apua',
          position: 'right',
          label: 'Apua',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Kurssitarjonta',
          items: [
            {
              label: 'Kurssi info',
              to: '/kurssit',
            },
            // {
            //   label: 'Frontend [javascript]',
            //   to: '/kurssit',
            // },
            // {
            //   label: 'Backend (javascript)',
            //   to: '/kurssit',
            // },
            // {
            //   label: 'Fullstack (javascript)',
            //   to: '/kurssit',
            // },
            // {
            //   label: 'Backend (python)',
            //   to: '/kurssit',
            // },
            // {
            //   label: 'Fullstack (python)',
            //   to: '/kurssit',
            // },
          ],
        },
        {
          title: 'Yhteisöt',
          items: [
            {
              label: 'Discord',
              href: '#',
            },
            {
              label: 'Twitter',
              href: '#',
            },
          ],
        },
        {
          title: 'Lisää',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/eync/ohjelmointikurssit',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Sanjiv Rana. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: 'kurssit',          
          routeBasePath: 'kurssit',
          // Please change this to your repo.
          editUrl:
            'https://github.com/eync/ohjelmointikurssit/',
        },
        blog: {
          // showReadingTime: true,
          // // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
