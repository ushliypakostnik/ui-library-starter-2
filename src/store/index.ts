import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import layout from './modules/layout';

declare module '@vue/runtime-core' {
  // declare your own store states
  interface State {
    name: string;
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}

// define your typings for the store state
export interface State {
  name: string;
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol();

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useStore() {
  return baseUseStore(key);
}

const debug: boolean = process.env.NODE_ENV !== 'production';

const name = 'store';

const store = createStore<State>({
  strict: debug,
  state: {
    name,
  },
  modules: {
    layout,
  },
  plugins: [
    createPersistedState({
      key: name,
      paths: ['layout'],
    }),
  ],
});

export default store;
