import { App } from 'vue';
import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import store, { key } from './store';
import Development from './Development.vue';

import * as components from './components';

// Constants
import { LANGUAGES, MESSAGES } from '@/utils/constants';

const i18n = createI18n({
  legacy: true,
  locale: store.getters['layout/language'] ? store.getters['layout/language'] : LANGUAGES[0].name,
  fallbackLocale: LANGUAGES[0].name,
  messages: MESSAGES,
});

const ComponentLibrary = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  install(app: App) {
    // localization
    app.use(i18n);

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
const isDevelopmentModuleMode = false;
if (isDevelopmentModuleMode) {
  console.log('Start development module!');
  createApp(Development).use(i18n).use(store, key).mount('#app');
}

export default ComponentLibrary;
