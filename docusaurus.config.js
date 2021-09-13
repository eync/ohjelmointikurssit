const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  noIndex: "true",
  title: 'Ohjelmointi kurssit',
  tagline: '',
  url: 'localhost',
  baseUrl: '/beta-ok/',
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
        {
          to: '/copyright',
          position: 'right',
          label: 'Tekijänoikeustiedot',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Ohjelmointikurssit',
          items: [
            {
              label: 'Kurssitarjonta',
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
        // Will add later
        // {
        //   title: 'Yhteisöt',
        //   items: [
        //     {
        //       label: 'Discord',
        //       href: '#',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: '#',
        //     },
        //   ],
        // },
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
      copyright: 
        `Copyright © ${new Date().getFullYear()} Sanjiv Rana - <a href="/copyright">Tekijänoikeustiedot</a>`,
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
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
