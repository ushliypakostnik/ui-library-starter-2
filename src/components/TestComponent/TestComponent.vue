<template>
  <div class="test-component__text">{{ $t('layout.colors') }}:</div>
  <ul class="test-component">
    <li
      v-for="(color, index) in Object.keys(DESIGN.THEMES[theme][mode])"
      :key="`colors${index}`"
      class="test-component__color"
      :style="`background: ${getColorValueByName(color)}`"
    >
      <span
        class="test-component__color-wrapper"
        :style="`background: ${DESIGN.THEMES[theme][mode].text}`"
      >
        <span class="test-component__color-name">{{ color }}</span>
        <br />
        <span class="test-component__color-value">{{
          getColorValueByName(color)
        }}</span>
      </span>
    </li>
  </ul>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useStore } from '../../store';
import { useI18n } from 'vue-i18n';

import { DESIGN } from '../../utils/constants';

export default defineComponent({
  name: 'TestComponent',

  setup() {
    const store = useStore();

    const { t } = useI18n({
      inheritLocale: true,
      useScope: 'global',
    });

    let getColorValueByName;
    const theme = computed(() => store.getters['layout/theme']);
    const mode = computed(() => store.getters['layout/mode']);

    getColorValueByName = (color) => {
      return DESIGN.THEMES[theme.value][mode.value][color];
    };

    return {
      t,
      DESIGN,
      theme,
      mode,
      getColorValueByName,
    };
  },
});
</script>

<style lang="stylus" scoped>
@import "~/src/stylus/_stylebase.styl";

$name = '.test-component'

{$name}
  list-style none
  display grid
  grid-template-columns repeat(4, 1fr)
  grid-gap 20px

  &__text
    margin-bottom 20px
    $text("anna")

  &__color
    @extend $flex--center
    height 200px
    color $colors.content
    color var(--content)

    &-wrapper
      display inline-block
      padding 4px 8px
      text-align center

    &-name
      $text("maria")

    &-value
      $text("katya")
</style>
