<template lang="pug">
.partners
  p.text-xl.text-center.mb-4.text-primary(class='mobile:hidden') Generální partneři
  .partners__wraper.flex.flex-row.justify-center.items-center(class='mobile:mb-6')
    .mr-4
      picture
        source(:srcset="'images/partners/sk.webp'" type='image/webp')
        img(aria-hidden='true' loading='eager' width='250' height='44' :src="'images/partners/sk.png'" alt='Logo středočeského kraje')
    .mr-4
      picture
        source(:srcset="'images/partners/cez.webp'" type='image/webp')
        img(aria-hidden='true' loading='eager' width='200' height='150' :src="'images/partners/cez.png'" alt='Logo nadace ČEZ')
    div
      picture
        source(:srcset="'images/partners/agro.webp'" type='image/webp')
        img(aria-hidden='true' loading='eager' width='250' height='70' :src="'images/partners/agro.png'" alt='Logo nadace Agrofert')
  p.text-lg.text-center.mb-6.mt-12.text-primary(class='mobile:hidden') Produktový partner
  .partners__wraper.partner-product.flex.flex-row.justify-center
    div
      picture
        source(:srcset="'images/partners/nestle.webp'" type='image/webp')
        img(aria-hidden='true' loading='eager' width='230' height='230' :src="'images/partners/nestle.png'" alt='Logo Nestle')
</template>
<style lang="scss" scoped>
.partners {
  padding: 8% 10%;
  @include maxiWidth {
    padding: 5% 20%;
  }
  @include tablet() {
    padding: 5% 8%;
  }

  @include mobile() {
    padding: 5% 5%;
  }
  background: #f3f3f3;
  .partners__wraper {
    padding: 0 20%;
    @include mobile() {
      padding: 5% 5%;
    }

    img {
      max-width: 100%;
      height: auto;
      filter: grayscale(100%);
      object-fit: contain;
      transition: filter 0.4s ease-out;
      &:hover {
        filter: grayscale(0);
      }
    }
  }
  .partner-product {
    padding: 0 45%;
    @include mobile() {
      margin-bottom: 5%;
    }
  }
}
</style>
