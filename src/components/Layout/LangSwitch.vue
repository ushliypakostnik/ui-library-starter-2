<template>
  <div>
    <button
      v-for="(value, index) in languages"
      :key="`language${index}`"
      type="button"
      @click="changeLanguage(value)"
      :disabled="value === language"
    >
      {{ value }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';
import { useI18n } from 'vue-i18n';

// Constants
import { LANGUAGES } from '../../utils/constants';

// Types
import { Tlanguage } from '../../models/store';

export default defineComponent({
  name: 'LangSwitch',

  setup() {
    const { t, locale } = useI18n({
      inheritLocale: true,
      useScope: 'global',
    });

    const store = useStore(key);

    const language = computed(() => store.getters['layout/language']);

    const changeLanguage = (value: Tlanguage) => {
      locale.value = value;
      store.dispatch('layout/changeLanguage', value);
    };

    const languages = LANGUAGES.map((language): Tlanguage => {
      return language.name;
    });

    return {
      t,
      language,
      languages,
      changeLanguage,
    };
  },
});
</script>

<style lang="stylus" scoped>
@import "~/src/stylus/_stylebase.styl";
</style>
