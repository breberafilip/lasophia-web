<template lang="pug">
  div.blog-header
    h1.text-2xl.text-dark.mb-2 Blog
    p.text-base.text-primary Zde naleznete ty nejčerstvější informace a novinky ze zákulisí La Sophia.
</template>

<style lang="sass" scoped>
@import '~assets/scss/_mq.sass'
.blog-header
  margin:0 10%
  padding: 2% 0
  border-bottom: 1.5px solid rgb(195, 195, 195)
  +maxiWidth
    margin: 0 20%
    padding: 3% 0
  +tablet
    margin: 0 8%
    padding: 3% 0
  +mobile
    margin: 0 5%
    padding: 3% 0
</style>
