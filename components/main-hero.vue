<template lang="pug">
div(:class='$style.hero')
  div(:class='$style.hero__text')
    div(:class='$style.hero__text__title')
      div(:class='$style.hero__text__decoration')
      h1(:class='$style.hero__text__title__heading')
        | XIII. ročník Mezinárodní soutěže Talent La Sophia.
      p(:class='$style.hero__text__title__description')
        | Soutěž, co ti dá možnost rozvinout tvůj talent a maximalizovat tvůj potenciál. Buď u toho!
  div(:class='$style.hero__image')
    picture
      source(srcset="/images/hero.webp" type='image/webp')
      img(aria-hidden='true' width='1329' height='1080' src="/images/hero.jpg" alt='Dekorativní Obrázek' draggable="false" data-not-lazy)

</template>

<style lang="scss" scoped module>
.hero {
  position: relative;
  min-height: 100vh;
  @apply flex flex-row w-screen;
  @include maxiHeight() {
    min-height: 50vh;
  }

  .hero__text {
    padding: 0 10%;
    @apply bg-primary-background  w-3/5 flex  items-end;
    @include maxiWidth {
      padding-left: 20%;
      padding-right: 10%;
      padding-bottom: 5%;
    }
    @include tablet() {
      padding: 0 8%;
      @apply w-3/6;
    }

    @include mobile() {
      padding: 0 5%;
      @apply w-screen items-center;
    }
    @include miniHeight() {
      padding-top: 0;
      padding-bottom: 0;
      align-items: center;
    }
    @include maxiWidth {
      @apply w-7/12;
    }
    .hero__text__decoration {
      @apply mb-5;
      width: 40%;
      border-top: 9px solid #fedc5d;
    }
    .hero__text__title {
      margin-bottom: 28%;
      max-width: 400px;

      @include mobile() {
        max-width: 100%;
        margin-bottom: 0;
      }
      @include miniHeight() {
        margin-bottom: 0;
      }
      .hero__text__title__heading {
        @apply text-white font-bold text-2xl;
        @include desktop {
          @apply text-3xl;
        }
        @include maxiWidth {
          @apply text-4xl;
        }
      }
      .hero__text__title__description {
        @apply text-white text-base  mt-4;
        @include maxiWidth {
          @apply text-xl;
        }
        @include mobile {
          @apply text-sm;
        }
      }
    }
  }
  .hero__image {
    max-height: 100vh;
    @apply flex-1;
    @include miniHeight() {
      max-height: 100%;
    }
    @include mobile {
      @apply hidden;
    }
    img {
      height: 100%;
      object-fit: cover;
      object-position: 20% 50%;
      width: 100%;
    }
  }
}
</style>
