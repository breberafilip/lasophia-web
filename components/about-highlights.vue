<template lang="pug">
  div(:class="$style['about-highlights']")
    div(:class="$style['about-highlights__item']")
      h3 2000+
      p talentů podpořeno
    div(:class="$style['about-highlights__item']")
      h3 13
      p let pomáháme
    div(:class="$style['about-highlights__item']")
      h3 3
      p mezinárodní souteže
</template>

<style lang="sass" scoped module>
@import '~assets/scss/_mq.sass'
.about-highlights
  margin:  0 10%
  padding: 4% 0
  border-bottom: 1.5px solid rgb(195, 195, 195)
  @apply flex flex-row items-center justify-center text-center
  +maxiWidth
    margin: 0 20%
    padding: 5% 0
  +tablet
    margin: 0 8%
    padding: 3% 0
  +mobile
    display: none
  .about-highlights__item
    padding: 0 5%
    h3
      @apply text-5xl text-dark
      +tablet
       @apply text-4xl
      +mobile
        @apply text-2xl
    p
      @apply text-2xl text-dark
      +tablet
       @apply text-xl
      +mobile
        @apply text-lg
</style>
