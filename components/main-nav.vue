<template lang="pug">
div(:class="[$style.navbar, isStatic ? $style.others : '']")
  nuxt-link(to='/')
    div(:class='$style.navbar__logo')
      img(:src="isStatic ? '/logo-dark.svg' : '/logo.svg'" alt='Logo La Sophia' width="112" height="25" data-not-lazy)

  div(:class="$style['navbar__menu--mobile']")
    div(v-show="$route.name !== 'nadace'" :class='$style.navbar__menu__link')
      nuxt-link(to='/nadace') O nás
    nuxt-link(v-show="$route.name !== 'prihlaska'" :class='$style.navbar__menu__button' to='/prihlaska')
      p Přihláška

  div(:class='$style.navbar__menu')
    div(v-show="$route.name !== 'index'" :class='$style.navbar__menu__link')
      nuxt-link(to='/') Úvod
    div(v-show="$route.name !== 'nadace'" :class='$style.navbar__menu__link')
      nuxt-link(to='/nadace') Nadace
    div(:class='$style.navbar__menu__link')
      nuxt-link(to='/galerie') Galerie
    div(:class='$style.navbar__menu__link'  v-show="$route.name !== 'blog'")
      nuxt-link(to='/blog') Novinky
    div(v-show="$route.name == 'index'" :class='$style.navbar__menu__link')
      a(href='/#contact') Kontakt
    nuxt-link(v-show="$route.name !== 'prihlaska'" :class='$style.navbar__menu__button' to='/prihlaska')
      p Přihlaš se nyní
</template>

<script lang="ts">
export default {
  props: {
    isStatic: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style lang="scss" scoped module>
.others {
  position: static !important;
  text-transform: none;
  background: white;
  .navbar__menu__link a {
    color: #333333 !important;
  }
  .navbar__menu__button {
    background: #333333 !important;
    & > p {
      color: white !important;
    }
  }
}
.navbar {
  @apply flex uppercase flex-row justify-between items-center absolute top-0 w-screen;
  height: 80px;
  z-index: 1;
  padding: 0 10%;

  @include maxiWidth {
    padding: 0% 20%;
  }
  @include tablet() {
    padding: 0 8%;
  }
  @include mobile() {
    @apply normal-case;
    padding: 0 5%;
  }
  @include microWidth() {
    position: static;
    background: #81b5cb;
    padding: 0 4%;
  }
  @include microHeight() {
    position: static;
    background: #81b5cb;
    padding: 2% inherit;
  }
  .navbar__logo img {
    height: 25px;
  }
  .navbar__menu {
    @apply flex flex-row items-center;
    @include mobile() {
      display: none;
    }
  }
  .navbar__menu__button {
    @apply block ml-5 bg-white py-1 px-3 rounded-md;
    transition: ease-out 0.5s;
    &:hover {
      background: #fedc5d;
    }
    & > p {
      @apply text-sm text-dark font-bold text-center;
      @include maxiWidth {
        @apply text-base;
      }
    }
  }
  .navbar__menu__link {
    @apply mx-5;
    & > a:link,
    a:visited {
      @apply text-sm;
      color: white;
      @include maxiWidth {
        @apply text-base;
      }
    }
  }
  .navbar__menu--mobile {
    @apply flex flex-row items-center hidden;

    @include mobile() {
      display: flex;
    }
    .navbar__menu__button {
      @apply block ml-2 bg-white py-1 px-3 rounded-md;
      & > p {
        @apply text-dark font-bold text-center;
      }
    }
    .navbar__menu__link {
      @apply mx-2;
      & > a {
        @applytext-white;
      }
    }
  }
}
</style>
