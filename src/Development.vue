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
@import "./stylus/_stylebase.styl";

// Import UI Library fonts

@font-face {
  font-family: $font-family;
  src: url('./static/fonts/Ubuntu/Ubuntu-Regular.eot');
  src: local('Ubuntu Regular'), local('Ubuntu-Regular'),
    url('./static/fonts/Ubuntu/Ubuntu-Regular.eot?#iefix') format('embedded-opentype'),
    url('./static/fonts/Ubuntu/Ubuntu-Regular.woff2') format('woff2'),
    url('./static/fonts/Ubuntu/Ubuntu-Regular.woff') format('woff'),
    url('./static/fonts/Ubuntu/Ubuntu-Regular.ttf') format('truetype');
  font-weight: $font-weight.regular;
  font-style: normal;
}

@font-face {
  font-family: $font-family;
  src: url('./static/fonts/Ubuntu/Ubuntu-Bold.eot');
  src: local('Ubuntu Bold'), local('Ubuntu-Bold'),
    url('./static/fonts/Ubuntu/Ubuntu-Bold.eot?#iefix') format('embedded-opentype'),
    url('./static/fonts/Ubuntu/Ubuntu-Bold.woff2') format('woff2'),
    url('./static/fonts/Ubuntu/Ubuntu-Bold.woff') format('woff'),
    url('./static/fonts/Ubuntu/Ubuntu-Bold.ttf') format('truetype');
  font-weight: $font-weight.bold;
  font-style: bold;
}

:root
  scroll-behavior smooth

body
  font-family "Ubuntu", sans-serif
  -moz-osx-font-smoothing grayscale
  -webkit-font-smoothing antialiased
  text-rendering: optimizeSpeed
  overflow-x hidden
</style>
