// Types
import { TConfig, TMessages } from '@/models/utils';

export const LANGUAGES: Array<TConfig> = [
  { id: 1, name: 'en' },
  { id: 2, name: 'ru' },
];

export const THEMES: TConfig = {
  theme1: 'theme1',
  theme2: 'theme2',
};

export const MODES: TConfig = {
  mode1: 'light',
  mode2: 'dark',
};

// Design constants
//////////////////////////////////////////////////////

export const DESIGN: TConfig = {
  V: '1.0.0',
  BREAKPOINTS: {
    tablet: 768,
    desktop: 1025,
  },
  THEMES: {
    [THEMES.theme1]: {
      // Light
      [MODES.mode1]: {
        // Palette
        cat: '#fed564',
        dog: '#8bc24c',
        bird: '#fd5f00',
        wood: '#515bd4',
        stone: '#ffffff',
        sea: '#13334c',
        sky: '#dddddd',
        ball: '#b1b1b1',
        rain: '#efefef',

        // Dependencies colors
        text: '#0d2233',
        header: '#ffffff',
        content: '#efefef',
      },
      // Dark
      [MODES.mode2]: {
        // Palette
        cat: '#fed564',
        dog: '#8bc24c',
        bird: '#fd5f00',
        wood: '#515bd4',
        stone: '#ffffff',
        sea: '#13334c',
        sky: '#dddddd',
        ball: '#b1b1b1',
        rain: '#efefef',

        // Dependencies colors
        text: '#ffffff',
        header: '#163C59',
        content: '#0d2233',
      },
    },
    [THEMES.theme2]: {
      // Light
      [MODES.mode1]: {
        // Palette
        cat: '#fd5f00',
        dog: '#8bc24c',
        bird: '#fed564',
        wood: '#515bd4',
        stone: '#ffffff',
        sea: '#3A0061',
        sky: '#f9f9f9',
        ball: '#b1b1b1',
        rain: '#efefef',

        // Dependencies colors
        text: '#1F0033',
        header: '#ffffff',
        content: '#efefef',
      },
      // Dark
      [MODES.mode2]: {
        // Palette
        cat: '#fd5f00',
        dog: '#8bc24c',
        bird: '#fed564',
        wood: '#515bd4',
        stone: '#ffffff',
        sea: '#3A0061',
        sky: '#f9f9f9',
        ball: '#b1b1b1',
        rain: '#efefef',

        // Dependencies colors
        text: '#ffffff',
        header: '#5D009C',
        content: '#1F0033',
      },
    },
  },
};

export const MESSAGES: TMessages = {
  en: {
    layout: {
      colors: 'Colors',
      route: 'Test route',
    },
  },
  ru: {
    layout: {
      colors: 'Цвета',
      route: 'Тестовый роут',
    },
  },
};
