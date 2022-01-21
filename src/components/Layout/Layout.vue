<template>
  <main role="main" class="layout" :class="{ 'layout--min': !isMenuOpen }">
    <aside class="layout__sidebar">
      <transition name="fade">
        <div v-if="isMenuOpen">
          <router-link to="/" class="layout__name"
            >UI Library Starter 2</router-link
          >

          <slot name="menu">
            <Menu />
          </slot>
        </div>
      </transition>

      <button type="button" class="layout__toggle" @click="toggleLayout">
        <span v-if="isMenuOpen">&lt;&lt;&lt;</span>
        <span v-else>&gt;&gt;&gt;</span>
      </button>
    </aside>

    <div class="layout__content-wrapper">
      <header role="header" class="layout__header">
        <div class="layout__header-left">
          <button
            v-for="(style, index) in THEMES"
            :key="`theme${index}`"
            type="button"
            class="layout__theme-switch"
            @click="toggleTheme(THEMES[style])"
            :disabled="theme === THEMES[style]"
          >
            {{ style }}
          </button>
        </div>

        <div class="layout__header-right">
          <button
            type="button"
            class="layout__theme-switch"
            @click="toggleMode"
          >
            {{ mode === MODES.mode1 ? MODES.mode2 : MODES.mode1 }}
          </button>

          <LangSwitch class="layout__language-switch" />
        </div>
      </header>

      <div class="layout__content">
        <slot />
      </div>
    </div>
  </main>
</template>

<script>
import { defineComponent, computed, onBeforeMount, watch } from 'vue';
import { useStore } from '../../store';

import { DESIGN, THEMES, MODES } from '../../utils/constants';

import LangSwitch from './LangSwitch.vue';
import Menu from '../Menu';

export default defineComponent({
  name: 'Layout',

  components: {
    LangSwitch,
    Menu,
  },

  setup() {
    const store = useStore();

    let toggleLayout;
    let toggleMode;
    let toggleTheme;
    let setThemeOrMode;
    const isMenuOpen = computed(() => store.getters['layout/isMenuOpen']);
    const theme = computed(() => store.getters['layout/theme']);
    const mode = computed(() => store.getters['layout/mode']);

    toggleLayout = () => {
      store.dispatch('layout/setLayout', {
        field: 'isMenuOpen',
        value: !isMenuOpen.value,
      });
    };

    toggleMode = () => {
      store.dispatch('layout/setLayout', {
        field: 'mode',
        value: mode.value === MODES.mode1 ? MODES.mode2 : MODES.mode1,
      });
    };

    toggleTheme = (theme) => {
      store.dispatch('layout/setLayout', {
        field: 'theme',
        value: theme,
      });
    };

    watch(
      () => store.getters['layout/mode'],
      () => {
        setThemeOrMode();
      },
    );

    watch(
      () => store.getters['layout/theme'],
      () => {
        setThemeOrMode();
      },
    );

    setThemeOrMode = () => {
      for (const color in DESIGN.THEMES[theme.value][mode.value]) {
        document.documentElement.style.setProperty(
          `--${color}`,
          DESIGN.THEMES[theme.value][mode.value][color],
        );
      }
    };

    onBeforeMount(() => {
      setThemeOrMode();
    });

    return {
      THEMES,
      MODES,
      isMenuOpen,
      mode,
      theme,
      toggleLayout,
      toggleTheme,
      toggleMode,
    };
  },
});
</script>

<style lang="stylus" scoped>
@import "~/src/stylus/_stylebase.styl";

$sidebar-width = 400px
$sidebar-width--min = 80px
$effect = $effects.duration

$name = '.layout'

{$name}
  width 100%
  position relative
  padding-left $sidebar-width
  transition padding-left $effect

  &--min
    padding-left $sidebar-width--min

    {$name}__sidebar
      width $sidebar-width--min

    {$name}__menu
      display none

  &__sidebar
    width $sidebar-width
    transition width $effect
    height 100%
    position: fixed
    left 0
    top 0
    bottom 0
    padding: 100px 20px 40px
    background $colors.sea
    background var(--sea)

  &__content
    flex-grow 1
    width 100%
    height 100%
    background $colors.content
    background var(--content)
    color $colors.text
    color var(--text)
    padding 20px

    &-wrapper
      display flex
      flex-direction column
      width 100%
      min-height 100vh

  &__toggle
    position absolute
    right 20px
    top 20px

  &__header
    display flex
    justify-content space-between
    padding 20px
    background $colors.header
    background var(--header)

    button + button
      margin-left 20px

    &-right
      display flex

  &__language-switch
    margin-left 20px

  &__name
    text-decoration none
    position absolute
    left 20px
    top 20px
    white-space nowrap
    color $colors.cat
    $text("maria")
</style>
