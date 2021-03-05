<template lang="pug">
  div.about-ambassadors
    VueSlickCarousel(v-bind="settings")
        
      div(class="focus:outline-none flex justify-center")
        div.slide.flex.flex-col.items-center.justify-start
          div
            picture
              source(srcset="/images/yvettablanarovicova.webp" type='image/webp')
              img(aria-hidden='true' loading='eager' width='541' height='541' src="/images/yvettablanarovicova.jpg" alt='Yvetta Blanarovičová' draggable="false")
          div
            p.text-dark.text-lg.mt-4.text-center(class="mobile:text-base")  Yvetta Blanarovičová
            p.text-primary.text-sm.text-center(class="mobile:hidden")  Herečka, zpěvačka
      
      div(class="focus:outline-none flex justify-center")
        div.slide.flex.flex-col.items-center.justify-start
          div
            picture
              source(srcset="/images/michaldavid.webp" type='image/webp')
              img(aria-hidden='true' loading='eager' width='541' height='541' src="/images/michaldavid.jpg" alt='Michal David' draggable="false")
          div
            p.text-dark.text-lg.mt-4.text-center(class="mobile:text-base")  Michal David
            p.text-primary.text-sm.text-center(class="mobile:hidden")  Zpěvák, skladatel
      div(class="focus:outline-none flex justify-center")
        div.slide.flex.flex-col.items-center.justify-start
          div
            picture
              source(srcset="/images/helenavondrackova.webp" type='image/webp')
              img(aria-hidden='true' loading='eager' width='541' height='541' src="/images/helenavondrackova.jpg" alt='Helena Vondráčková' draggable="false")
          div
            p.text-dark.text-lg.mt-4.text-center(class="mobile:text-base") Helena Vondráčková
            p.text-primary.text-sm.text-center(class="mobile:hidden")  Zpěvačka
      div(class="focus:outline-none flex justify-center")
        div.slide.flex.flex-col.items-center.justify-start
          div
            picture
              source(srcset="/images/josefvojtek.webp" type='image/webp')
              img(aria-hidden='true' loading='eager' width='541' height='541' src="/images/josefvojtek.jpg" alt='Josef Vojtek' draggable="false")
          div
            p.text-dark.text-lg.mt-4.text-center(class="mobile:text-base")  Josef Vojtek
            p.text-primary.text-sm.text-center(class="mobile:hidden") zpěvák a frontman skupiny Kabát
      
</template>

<script lang="ts">
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import { computed } from '@nuxtjs/composition-api'
import { useMediaQuery } from '@vueuse/core'

const VueSlickCarousel: any = require('vue-slick-carousel')

export default {
  components: { VueSlickCarousel },
  setup() {
    const isMobile = useMediaQuery('(max-width: 950px)')
    const settings = computed(() => {
      return {
        lazyLoad: 'ondemand',
        autoplay: false,
        arrows: false,
        infinite: true,
        dots: true,
        initialSlide: 0,
        speed: 500,
        slidesToShow: isMobile.value ? 2 : 4,
        autoplaySpeed: 6000,
        slidesToScroll: 1,
        swipeToSlide: true,
      }
    })
    return { settings, isMobile }
  },
}
</script>
<style lang="sass" scoped>
@import '~assets/scss/_mq.sass'
.about-ambassadors
  padding: 5% 10%
  padding-bottom: 0
  +maxiWidth
    padding: 5% 20%
  +tablet
    padding: 5% 8%
    padding-bottom: 0
  +mobile
    padding: 10% 0
  .slide
    height: 300px
    +tablet
      width: auto
    +mobile
      height: 150px
      width: auto

    img
      height: 180px
      width: 180px
      object-fit: cover
      border-radius: 10px
      +mobile
        height: 100px
        width: 100px
</style>
