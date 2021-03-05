<template lang="pug">
  div.post-list
    div(v-for="post in posts")
      post-block(:title="post.title", :date="post.created_at" :slug="post.slug")
</template>
<script lang="ts">
import { useContext, useStatic } from '@nuxtjs/composition-api'
export default {
  setup() {
    const { $strapi } = useContext()
    // @ts-ignore
    const posts: any = useStatic(() => $strapi.find('posts'), 'posts')
    return { posts }
  },
}
</script>
<style lang="sass" scoped>
@import '~assets/scss/_mq.sass'
.post-list
  margin:0 10%
  padding: 2% 0
  min-height: 80vh
  +maxiWidth
    margin: 0 20%
    padding: 3% 0
  +tablet
    margin: 0 8%
    padding: 3% 0
    padding-bottom: 0
  +mobile
    margin: 0 5%
    padding: 3% 0
</style>
