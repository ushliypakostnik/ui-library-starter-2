module.exports = {
  lang: 'en-US',
  title: 'UI Library Starter 2',
  description: 'Vue Component UI Library Starter 2',

  theme: '@vuepress/theme-default',
  themeConfig: {
    repoLabel: 'GitHub repo',
    repo: 'https://github.com/ushliypakostnik/ui-library-starter-2.git',
    docsDir: 'docs',
    editLink: false,
    locales: {
      '/': {
        nav: [{ text: 'NPM', link: 'https://www.npmjs.com/package/ui-library-starter-2' }],
        sidebar: [
          {
            title: `Intro`,
            // collapsable: false,
            children: [
              '/',
              'start',
              'structure',
              'links',
            ],
          },
        ],
      },
    },
  },
};
