<template lang="pug">
  div
    LazyHydrate(when-idle)
      main-nav(:is-static="true")
    div.error-page.flex.flex-col.justify-center.items-center
      h1.text-center.text-3xl.text-bold.text-primary Připravujeme pro Vás.
      a.text-xl(href="/") Pokračujte zpět na hlavní stránku.
    LazyHydrate(never)
      main-footer
</template>

<script lang="ts">
// @ts-ignore
import LazyHydrate from 'vue-lazy-hydration'
export default {
  components: {
    LazyHydrate,
  },
}
</script>

<style lang="sass" scoped>
.error-page
  min-height: 70vh
  a
    color: #008FCC
</style>
