module.exports = {
  title: 'UI Library Starter 2',

  theme: '@vuepress/theme-default',
  themeConfig: {
    repoLabel: 'GitHub repo',
    repo: 'https://github.com/ushliypakostnik/ui-library-starter-2.git',
    docsDir: 'docs',
    editLink: false,
    navbar: [
      {
        text: 'NPM',
        link: 'https://www.npmjs.com/package/ui-library-starter-2',
      },
    ],
    sidebar: [
      {
        text: 'Intro',
        link: '/',
        collapsible: true,
        children: ['/start.md', '/structure.md', '/links.md'],
      },
      {
        text: `Constants`,
        collapsible: true,
        children: [
          {
            text: `_stylebase.styl`,
            link: '/constants/stylebase',

          },
          {
            text: `Colors`,
            link: '/constants/colors',
          },
          {
            text: `Breakpoints`,
            link: '/constants/breakpoints',
          },
          {
            text: `Typography`,
            link: '/constants/typography',
          },
          {
            text: `Others`,
            link: '/constants/others',
          },
        ],
      },
      {
        text: `Components`,
        collapsible: true,
        children: [
          {
            text: `Layout`,
            link: '/components/layout',
          },
        ],
      },
    ],
  },
};
