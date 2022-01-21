<template>
  <div class="notfound">
    <div class="notfound__404">404</div>
    <div class="notfound__text">Page not found</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NotFound',
});
</script>

<style lang="stylus">
@import "~/src/stylus/_stylebase.styl";

.notfound
  &__404
    $text("anna")

  &__text
    $text("alena")
</style>
