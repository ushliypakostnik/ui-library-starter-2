import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("FooBar", defineAsyncComponent(() => import("/home/levon/projects/github/ui-library-starter-2/src/components/Layout/Layout.vue")))
}
