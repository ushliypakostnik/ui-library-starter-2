import { Module } from 'vuex';

// Types
import { IStore, ILayout, Tlanguage, ILayoutPayload } from '../../models/store';

import { THEMES, MODES } from '../../utils/constants';

const initialState: ILayout = {
  language: null,
  isMenuOpen: true,
  theme: THEMES.theme1,
  mode: MODES.mode1,
};

const Layout: Module<ILayout, IStore> = {
  namespaced: true,

  state: initialState,

  getters: {
    language: (state: ILayout) => state.language,
    isMenuOpen: (state: ILayout) => state.isMenuOpen,
    theme: (state: ILayout) => state.theme,
    mode: (state: ILayout) => state.mode,
  },

  actions: {
    changeLanguage: ({ commit }, language: Tlanguage): void => {
      commit('changeLanguage', language);
    },

    setLayout: ({ commit }, payload: ILayoutPayload): void => {
      commit('setLayout', payload);
    },
  },

  mutations: {
    changeLanguage: (state: ILayout, language: Tlanguage): void => {
      state.language = language;
    },

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setLayout: (state: any, payload: ILayoutPayload): void => {
      state[payload.field] = payload.value;
    },
  },
};

export default Layout;
