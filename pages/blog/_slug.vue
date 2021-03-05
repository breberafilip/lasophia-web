<template lang="pug">
  div
    LazyHydrate(when-idle)
      main-nav(:is-static="true")
    LazyHydrate(never)
      post-content(:title="post.title", :date="post.created_at", :content="post.content || ''")
    LazyHydrate(never)
      main-footer
</template>
<script lang="ts">
import { computed, useContext, useStatic } from '@nuxtjs/composition-api'
// @ts-ignore
import LazyHydrate from 'vue-lazy-hydration'
export default {
  components: {
    LazyHydrate,
  },
  setup() {
    const { params, $strapi } = useContext()
    const slug = computed(() => params.value.slug)

    const post = useStatic(
      async (slug) => {
        const posts = await $strapi.find('posts', { slug })
        return posts[0]
      },
      slug,
      'post'
    )
    return { post }
  },
  head: {
    title: 'La Sophia • Blog',
  },
}
</script>
