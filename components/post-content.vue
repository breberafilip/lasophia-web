<template lang="pug">
  div.post-content
    div
      nuxt-link.inline-block.text-md.text-primary(to="/blog") Blog
      span.inline-block.text-md.text-primary.mx-2 >
      span.inline-block.text-md.text-dark {{title}}

    div.post-content__header.mt-4
      h1.text-2xl.text-dark {{title}}
      span.text-base.text-primary {{(new Date(date)).toLocaleString('cs-CZ', { timeZone: 'Europe/Prague' })}}
    div.post-content__text
      p.text-base.mt-4(v-html="$md.render(content)")
</template>
<script lang="ts">
export default {
  props: {
    title: String,
    date: String,
    content: String,
  },
}
</script>
<style lang="sass" scoped>
@import '~assets/scss/_mq.sass'
.post-content
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
<style lang="sass">
.post-content__text
  @apply text-primary
  h1
    font-size: 2em
  h2
    font-size: 1.8em
  h3
    font-size: 1.5em
</style>
