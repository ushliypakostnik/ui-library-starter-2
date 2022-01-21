<template>
  <ul class="menu">
    <li
      v-for="(item, index) in items"
      :key="`menuitem${index}`"
      class="menu__item"
    >
      <router-link :to="`/${item.path}`">{{ item.name }}</router-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const menuMock = [
  {
    name: 'route1',
    path: 'route/1',
  },
  {
    name: 'route2',
    path: 'route/2',
  },
];

export default defineComponent({
  name: 'Menu',

  props: {
    items: {
      type: Array,
      required: false,
      default: menuMock,
    },
  },
});
</script>

<style lang="stylus" scoped>
@import "~/src/stylus/_stylebase.styl";

$name = '.menu'

{$name}
  list-style none

  &__item
    color $colors.stone
    margin-bottom: 20px
    $text("maria")

    a
      text-decoration none

      &:hover
        text-decoration underline
</style>
