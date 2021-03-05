import { default } from '../components/about-ambassadors.vue';
<template>
  <div class="relative">
    <LazyHydrate when-idle><main-nav /></LazyHydrate>
    <LazyHydrate never><main-hero /></LazyHydrate>
    <LazyHydrate when-visible><main-about /></LazyHydrate>
    <LazyHydrate when-visible><categories /></LazyHydrate>
    <LazyHydrate when-visible><main-video /></LazyHydrate>
    <LazyHydrate when-visible><testimonials /></LazyHydrate>
    <LazyHydrate when-visible><partners /></LazyHydrate>
    <LazyHydrate on-interaction><contact /></LazyHydrate>
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
}
</script>
