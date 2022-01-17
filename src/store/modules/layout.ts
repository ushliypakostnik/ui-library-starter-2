import { Module } from 'vuex';

// Types
import { IStore, ILayout } from '@/models/store';

const initialState: ILayout = {
  isMenuOpen: true,
};

const Layout: Module<ILayout, IStore> = {
  namespaced: true,

  state: initialState,

  getters: {
    isMenuOpen: (state: ILayout) => state.isMenuOpen,
  },

  actions: {
    setMenu: ({ commit }, isMenuOpen: boolean): void => {
      commit('setMenu', isMenuOpen);
    },
  },

  mutations: {
    setMenu: (state: ILayout, isMenuOpen: boolean): void => {
      state.isMenuOpen = isMenuOpen;
    },
  },
};

export default Layout;
