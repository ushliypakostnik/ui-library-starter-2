import { App } from 'vue';
// import { createApp } from 'vue';
// import { store, key } from './store';
// import App from './App.vue';

import * as components from './components';

const ComponentLibrary = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  install(app: App) {
    // components
    for (const componentName in components) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const component = (components as any)[componentName];
      app.component(component.name, component);
    }
  },
};

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Vue?: any;
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ComponentLibrary);
}

// createApp(App).use(store, key).mount('#app');
