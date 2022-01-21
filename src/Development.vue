<template>
  <Layout>
    <router-view />
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Layout from '@/components/Layout/Layout.vue';

export default defineComponent({
  name: 'Development',

  components: {
    Layout,
  },
});
</script>

<style lang="stylus">
:root
  scroll-behavior smooth

body
  font-family "Ubuntu", sans-serif
  -moz-osx-font-smoothing grayscale
  -webkit-font-smoothing antialiased
  text-rendering: optimizeSpeed
  overflow-x hidden
</style>
