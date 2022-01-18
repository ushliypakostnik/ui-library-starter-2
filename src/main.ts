import { App } from 'vue';
import { createApp } from 'vue';
import store, { key } from './store';
import Development from './Development.vue';

import * as components from './components';

const ComponentLibrary = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  install(app: App) {
    // store
    app.use(store, key);

    // components
    for (const componentName in components) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const component = (components as any)[componentName];
      app.component(component.name, component);
    }
  },
};

// ATTENTION! Set to true if you want
// to develop a module (not documentation)
// and false before publishing for use in projects
// or develop documentation!
const isDevelopmentModuleMode = true;
if (isDevelopmentModuleMode) {
  console.log('Start development module!');
  createApp(Development).use(store, key).mount('#app');
}

export default ComponentLibrary;
