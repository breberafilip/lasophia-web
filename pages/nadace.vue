<template>
  <div>
    <LazyHydrate when-idle
      ><main-nav :is-static="true" @contextmenu.prevent=""
    /></LazyHydrate>
    <LazyHydrate never> <about-hero /></LazyHydrate>

    <LazyHydrate never> <about-highlights /></LazyHydrate>
    <LazyHydrate when-visible> <about-intro /></LazyHydrate>
    <LazyHydrate when-visible> <about-ambassadors /></LazyHydrate>
    <LazyHydrate on-interaction="click"><about-faq /></LazyHydrate>
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
  head: {
    title: 'La Sophia - O Nadaci',
  },
}
</script>
