<template lang="pug">
.testimonials
  h2.text-3xl.text-dark.text-center.mb-12(class='mobile:text-2xl')
    | Zkušenosti absolventů
  div
    VueSlickCarousel(v-bind='settings')
      .testimonials__slide
        .testimonials__slide__content
          p.text-dark.text-2xl.mb-4 Karolína
          p.text-primary.text-base
            | Díky La Sophii jsem si našla spoustu nových kamarádů a naučila se hodně věcí.
      .testimonials__slide
        .testimonials__slide__content
          p.text-dark.text-2xl.mb-4 Vojta
          p.text-primary.text-base
            | Talentová soutěž mi umožnila rozvinout můj potenciál, překonat osobní strach a díky ní se naplno mohu věnovat tomu, co mě baví!
      .testimonials__slide
        .testimonials__slide__content
          p.text-dark.text-2xl.mb-4 Pepa
          p.text-primary.text-base
            | Jsem vděčný za tuto skvělou příležitost. Poznal jsem díky ni skvělé lidi, kamarády a překonal jsem svůj strach.

</template>

<script lang="ts">
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import { reactive } from '@nuxtjs/composition-api'
const VueSlickCarousel: any = require('vue-slick-carousel')
export default {
  name: 'Testimonials',
  components: { VueSlickCarousel },
  setup() {
    const settings = reactive({
      autoplay: true,
      arrows: false,
      infinite: true,
      dots: true,
      initialSlide: 0,
      speed: 500,
      slidesToShow: 1,
      autoplaySpeed: 6000,
      slidesToScroll: 1,
      swipeToSlide: true,
    })
    return { settings }
  },
}
</script>

<style lang="scss" scoped>
.testimonials {
  padding: 8% 10%;
  @include maxiWidth {
    padding: 5% 20%;
  }
  @include tablet() {
    padding: 5% 8%;
  }

  @include mobile() {
    padding: 8% 5%;
  }
  .testimonials__slide {
    display: inline-flex !important;
    justify-content: center;
    margin-bottom: 20px;
    &:focus {
      outline: none;
    }
  }
  .testimonials__slide__content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #f4f4f4;
    width: 60%;
    min-height: 400px;
    @include tablet() {
      width: 80%;
    }
    @include mobile() {
      width: 80%;
    }
    padding: 10%;
    &::after {
      position: absolute;
      @include microWidth() {
        display: none;
      }
      top: -0;
      left: -25px;
      width: 50px;
      height: 50px;
      background-repeat: no-repeat;
      background-size: contain;
      background-image: url('assets/quote.svg');
      content: '';
    }
  }
}
</style>
