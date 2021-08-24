const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  noIndex: "true",
  title: 'Ohjelmointi kurssit',
  tagline: '',
  url: 'https://sanjiv.info',
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
      copyright: 
        `Copyright © ${new Date().getFullYear()} Sanjiv Rana. The material is licensed under the <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en">Creative Commons BY-NC-SA 4.0</a>. You are allowed to distribute and modify the content as long as the identities of original authors are not removed. If you modify the content, you have to use the same license. Commercial use without a permit is forbidden.`,
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
