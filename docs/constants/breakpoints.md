# Breakpoints

Переменные-брекпоинты лучше называть более интуитивно-понятно.

<code class="nowrap">~/src/stylus/utils/_variables.styl</code>

```stylus
// Breakpoints
//////////////////////////////////////////////////////

$breakpoints = {
  tablet: 768px,
  desktop: 1025px,
}
$breakpoints["mobile--max"] = $breakpoints.tablet - 1
$breakpoints["tablet--max"] = $breakpoints.desktop - 1
```

::: warning
Основные точки перехода: в стилевой базе препроцессора в <code class="nowrap">px</code> и в константах скриптов библиотеки в <code class="nowrap">Number</code> - должны соответствовать друг-другу.
:::

<code class="nowrap">@/src/utils/сonstants.ts</code>

```ts
// Design constants
//////////////////////////////////////////////////////

export const DESIGN = {
  BREAKPOINTS: {
    tablet: 768,
    desktop: 1025,
  },
};
```

В препроцессоре - мощнейшее, очень удобное средство - построенные на брекпоинтах примеси принимающие контент:

```stylus
// Media
//////////////////////////////////////////////////////

$no-gadgets()
  @media only screen and (max-width $breakpoints.desktop--max)
    {block}

$desktop()
  @media only screen and (min-width $breakpoints.desktop)
    {block}

$gadgets()
  @media only screen and (max-width $breakpoints.tablet--max)
    {block}

$tablet()
  @media only screen and (min-width $breakpoints.tablet) and (max-width $breakpoints.tablet--max)
    {block}

$not-mobile()
  @media only screen and (min-width $breakpoints.tablet)
    {block}

$mobile()
  @media only screen and (max-width $breakpoints.mobile--max)
    {block}
```

Использование в любом блоке стилей SFC:

```stylus
.selector
  +$desktop()
    // styles only for desktops

  +$tablet()
    // styles only for tablet

  +$mobile()
    // styles only for mobile
```

::: tip
В строгой традиции запрещается использование любых глобальных классов со стилями, за исключением анимаций для Vue и вынужденных кастомизаций действительно необходимых сторонних модулей где «классический ад с <code class="nowrap">!important</code>»))). Мы стараемся минимизировать количество зависимостей и «точечно» закрываем самые «дорогие», неподъемные по ресурсам проблемные места.
:::

Точки перехода скриптов обрабатываются специальным модулем-помощником для экрана через matchMedia:

<code class="nowrap">@/src/utils/screen-helper.ts</code>

@[code](../../src/utils/screen-helper.ts)

Для того чтобы и компоненты библиотеки и дочерних проектов могли всегда верно определять типоразмер устройства с помощью модуля можно обновлять переменные в событии ресайза (в синтаксисе Options API):

```ts
import ScreenHelper from '../utils/screen-helper.ts'; // в компонентах библиотеки
// import ScreenHelper from 'ui-library-starter-2/src/utils/screen-helper.ts'; // в дочерних проектах

export default {
  data() {
    return {
      isMobile: null,
      isTablet: null,
      isDesktop: null,
    };
  },

  mounted() {
    window.addEventListener('resize', this.onWindowResize, false);
    this.onWindowResize();
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onWindowResize, false);
  },

  methods: {
    onWindowResize() {
      // console.log('onWindowResize!!!!');
      this.isMobile = ScreenHelper.isMobile();
      this.isTablet = ScreenHelper.isTablet();
      this.isDesktop = ScreenHelper.isDesktop();
    },
  },
};
```
