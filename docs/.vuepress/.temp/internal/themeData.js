export const themeData = {
  "repoLabel": "GitHub repo",
  "repo": "https://github.com/ushliypakostnik/ui-library-starter-2.git",
  "docsDir": "docs",
  "editLink": false,
  "navbar": [
    {
      "text": "NPM",
      "link": "https://www.npmjs.com/package/ui-library-starter-2"
    }
  ],
  "sidebar": [
    {
      "text": "Intro",
      "link": "/",
      "collapsible": true,
      "children": [
        "/start.md",
        "/structure.md",
        "/links.md"
      ]
    },
    {
      "text": "Constants",
      "collapsible": true,
      "children": [
        {
          "text": "_stylebase.styl",
          "link": "/constants/stylebase"
        },
        {
          "text": "Colors",
          "link": "/constants/colors"
        },
        {
          "text": "Breakpoints",
          "link": "/constants/breakpoints"
        },
        {
          "text": "Typography",
          "link": "/constants/typography"
        },
        {
          "text": "Others",
          "link": "/constants/others"
        }
      ]
    },
    {
      "text": "Components",
      "collapsible": true,
      "children": [
        {
          "text": "Layout",
          "link": "/components/layout"
        }
      ]
    }
  ],
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "logo": null,
  "darkMode": true,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
