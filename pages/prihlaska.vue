<template>
  <div>
    <LazyHydrate when-idle
      ><main-nav :is-static="true" @contextmenu.prevent=""
    /></LazyHydrate>
    <LazyHydrate never><application-hero /></LazyHydrate>

    <LazyHydrate on-interaction><application-form /></LazyHydrate>
    <LazyHydrate never><application-info /></LazyHydrate>
    <LazyHydrate never><main-footer /></LazyHydrate>
  </div>
</template>

<script lang="ts">
// @ts-ignore
import LazyHydrate from 'vue-lazy-hydration'
export default {
  components: {
    LazyHydrate,
  },

  scrollToTop: true,
  head: {
    title: 'La Sophia - Podej si přihlášku',
  },
}
</script>
