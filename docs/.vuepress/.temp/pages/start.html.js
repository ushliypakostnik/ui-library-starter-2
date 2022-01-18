export const data = {
  "key": "v-6f9a3970",
  "path": "/start.html",
  "title": "Getting Started",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Installation",
      "slug": "installation",
      "children": []
    },
    {
      "level": 2,
      "title": "Customization",
      "slug": "customization",
      "children": [
        {
          "level": 3,
          "title": "README.md",
          "slug": "readme-md",
          "children": []
        },
        {
          "level": 3,
          "title": "package.json",
          "slug": "package-json",
          "children": []
        },
        {
          "level": 3,
          "title": "Documentation config",
          "slug": "documentation-config",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": null,
    "contributors": []
  },
  "filePathRelative": "start.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
