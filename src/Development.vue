<template>
  <Layout>
    <TestComponent />
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Layout from '@/components/Layout/Layout.vue';
import TestComponent from '@/components/TestComponent/TestComponent.vue';

export default defineComponent({
  name: 'Development',

  components: {
    Layout,
    TestComponent,
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
