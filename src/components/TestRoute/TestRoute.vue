<template>
  <div class="route">{{ $t('layout.route') }} {{ id }}</div>
</template>

<script lang="ts">
import { defineComponent /* watch, ref */ } from 'vue';
// import { useRoute } from 'vue-router';
// import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'TestRoute',

  // Options API
  data() {
    return {
      id: '',
    };
  },

  watch: {
    $route() {
      this.getId();
    },
  },

  mounted() {
    this.getId();
  },

  methods: {
    getId() {
      this.id = this.$router.currentRoute.value.params.id as string;
    },
  },

  // Composition API
  // Throws errors in the child project, for example:
  // Unhandled error during execution of scheduler flush. This is likely a Vue internals bug
  /*
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
  }, */
});
</script>

<style lang="stylus">
@import "~/src/stylus/_stylebase.styl";

.route
  $text("anna")
</style>
