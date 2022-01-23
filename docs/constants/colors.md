# Colors

Абстрагируйте все цвета из гайдлайна в короткие имена-маркеры.

<code class="nowrap">~/src/stylus/utils/_variables.styl</code>

```stylus
// Palette
//////////////////////////////////////////////////////

$colors = {
  cat: #fed564,
  dog: #8bc24c,
  bird: #fd5f00,
  wood: #515bd4,
  stone: #ffffff,
  sea: #13334c,
  sky: #0d2233,
  ball: #b1b1b1,
  rain: #efefef,
}
// Dependencies colors
$colors["text"] = $colors.sky
$colors["header"] = $colors.stone
$colors["content"] = $colors.rain
```

В любом месте кода препроцессора или секции стилей SFC (при условии импорта стилевой базы) библиотеки или дочерних проектов вы можете передавать правильные цвета:

```stylus
.selector
  color $colors.primary
```

## Themezation

Переменные препроцессора предоставляют атомы основной цветовой темы. Но вы можете добавлять другие темы содержащие дневной и ночной режим в javascript, в файле <code class="nowrap">@/src/utils/сonstants.ts</code>:

```ts
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
  // ...
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
```

Теперь можно использовать Custom Properties c соответсвующими именами, после переменных препроцессора остающихся в качестве фоллбэка:

```stylus
.selector
  color $colors.text
  color var(--text)
```
