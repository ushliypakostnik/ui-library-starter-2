<template>
  <main role="main" class="layout" :class="{ 'layout--min': !isMenuOpen }">
    <aside class="layout__sidebar">
      <button type="button" class="layout__toggle" @click="toggle">
        Toggle
      </button>
    </aside>

    <div class="layout__content"><slot /></div>
  </main>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';

export default defineComponent({
  name: 'Layout',

  setup() {
    const store = useStore(key);

    let toggle;
    const isMenuOpen = computed(() => store.getters['layout/isMenuOpen']);

    toggle = () => {
      store.dispatch('layout/setMenu', !isMenuOpen.value);
    };

    return {
      isMenuOpen,
      toggle,
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
    padding: 60px 20px 40px
    background $colors.primary

  &__menu
    list-style none

  &__menu-item
    color $colors.stone
    margin-bottom: 20px
    $text("maria")
    a
      text-decoration none
      &:hover
        text-decoration underline

  &__content
    width 100%
    min-height 100vh
    background $colors.sky
    padding 20px

  &__toggle
    position absolute
    right 20px
    top 20px
</style>
