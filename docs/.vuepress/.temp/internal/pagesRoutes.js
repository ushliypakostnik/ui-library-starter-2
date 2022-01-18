import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"UI Library Starter 2"},["/index.html","/README.md"]],
  ["v-35162c79","/links.html",{"title":"Useful links"},["/links","/links.md"]],
  ["v-6f9a3970","/start.html",{"title":"Getting Started"},["/start","/start.md"]],
  ["v-c9d96302","/structure.html",{"title":"Structure"},["/structure","/structure.md"]],
  ["v-1c7e20af","/components/layout.html",{"title":"Layout"},["/components/layout","/components/layout.md"]],
  ["v-2242b1f0","/constants/breakpoints.html",{"title":"Breakpoints"},["/constants/breakpoints","/constants/breakpoints.md"]],
  ["v-8f2ca960","/constants/colors.html",{"title":"Colors"},["/constants/colors","/constants/colors.md"]],
  ["v-18b3c53d","/constants/others.html",{"title":"Others"},["/constants/others","/constants/others.md"]],
  ["v-5703aed0","/constants/stylebase.html",{"title":"_stylebase.styl"},["/constants/stylebase","/constants/stylebase.md"]],
  ["v-5350a771","/constants/typography.html",{"title":"Typography"},["/constants/typography","/constants/typography.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
