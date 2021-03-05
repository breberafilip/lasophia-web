<template lang="pug">
  div
    div(:class="$style['about-hero']")
      div(:class="$style['about-hero__overlay']") 
        h1(:class="$style['about-hero__title']") Nadace La Sophia
        div(:class="$style['about-hero__decoration']")
        h2(:class="$style['about-hero__title']") XIII.ročník Mezinárodní soutěže talent La Sophia
      div(:class="$style['about-hero__image']")
        picture
          source(srcset="/images/nadace.webp" type="image/webp")
          img(aria-hidden="true" loading="eager" width="1620" height="1080" src="/images/nadace.jpg" alt="Dekorativní obrázek")
          
</template>

<style lang="sass" scoped module>
@import '~assets/scss/_mq.sass'
.about-hero
  position: relative
  height: 60vh
  background: #333333
  +mobile
     height: 30vh
  +microWidth
    min-height: 30vh
    height: 100%
    max-height: 100vh
  +miniHeight
    min-height: 100%


  .about-hero__overlay
    width: 100%
    height: 100%
    position: relative
    z-index: 10
    padding: 10%
    background: rgba(43,43,43, 0.7)
    @apply flex flex-col justify-center items-center
    +maxiWidth
      padding: 8% 20%
    +tablet
      padding: 8% 8%
    +mobile
      padding: 5% 5%
  .about-hero__decoration
    @apply my-3
    width: 20%
    border-top: 9px solid #fedc5d
  .about-hero__title
    @apply text-white text-2xl text-center font-bold
    +mobile
      @apply text-xl

  .about-hero__image
    z-index: 0
    position: absolute
    width: 100%
    height:100%
    top:0
    left:0
    right:0
    bottom:0
    img
      object-fit: cover
      object-position: 50% 20%
      width: 100%
      height: 100%
</style>
