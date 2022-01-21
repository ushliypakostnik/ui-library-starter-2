<template>
  <div class="route">{{ $t('layout.route') }} {{ id }}</div>
</template>

<script lang="ts">
import { defineComponent, watch, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'TestRoute',

  setup() {
    const route = useRoute();
    let id = ref(route.params.id);

    const { t } = useI18n();

    watch(route, () => {
      id.value = route.params.id;
    });

    return {
      id,
      t,
    };
  },
});
</script>

<style lang="stylus">
@import "~/src/stylus/_stylebase.styl";

.route
  $text("anna")
</style>
