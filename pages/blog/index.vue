<template lang="pug">
  div
    LazyHydrate(when-idle)
      main-nav(:is-static="true")
    LazyHydrate(never)
      blog-intro
    LazyHydrate(never)
      post-list
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
  head: {
    title: 'La Sophia • Blog',
  },
}
</script>
