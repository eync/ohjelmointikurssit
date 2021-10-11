const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  noIndex: "true",
  title: 'Ohjelmointi kurssit',
  tagline: '',
  url: 'https://beta.ohjelmointikurssit.com',
  baseUrl: '/',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'eync', // Usually your GitHub org/user name.
  projectName: 'ohjelmointikurssit', // Usually your repo name.
  themeConfig: {
    announcementBar: {
      id: 'huomioitavaas',
      content: '<strong>⚠️ Huom. sivusto on yhä beta vaiheessa, sisältöä työstetään ja se voi myös muuttua. ⭐️ Jos pidät sivustosta käy antamassa sille tähti <a href="https://github.com/eync/ohjelmointikurssit" title="GitHub repository">GitHubissa</a>. </strong>',
      backgroundColor: '#303846',
      textColor: 'var(--ifm-color-warning)',
      isCloseable: false,
    },
    navbar: {
      title: 'Ohjelmointi kurssit (beta)',
      items: [
        {
          to: '/kurssit',
          position: 'right',
          label: 'Kurssit',
          type: 'dropdown', 
          items: [
            {
              label: 'Frontend väylä',
              to: '/kurssit/frontend/intro',
            },
            {
              label: 'Backend väylä (javascript)',
              to: '/kurssit/backend/javascript/intro',
            },
            {
              label: 'Backend väylä (python)',
              to: '/kurssit/backend/python/intro',
            }, 
          ],
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
    // themes: ['@docusaurus/theme-live-codeblock'],
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
