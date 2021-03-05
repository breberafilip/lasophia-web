<template>
  <div class="footer flex flex-row justify-between mobile:flex-col">
    <div>
      <h2
        class="desktop:text-3xl text-white mb-12 text-2xl tablet:mb-8 mobile:mb-4"
      >
        La Sophia
      </h2>
      <p class="desktop:text-base text-light text-sm">
        Dlouhá 705/16, 110 00 Praha 1
      </p>
      <p class="desktop:text-base text-light text-sm">
        <a href="tel:420724979101" class="hover:underline">+420 724 979 101</a>,
        <a href="tel:420724777653" class="hover:underline">+420 724 777 653</a>
      </p>
      <p class="desktop:text-base text-light text-sm">
        <a href="mailto:office@lasophia.cz" class="hover:underline"
          >office@lasophia.cz</a
        >
      </p>
      <p class="desktop:text-base text-light text-sm">IČO: 27019101</p>
      <div class="mt-12 flex flex-col tablet:flex-row mobile:mt-4 tablet:mt-8">
        <div class="">
          <nuxt-link
            to="/prihlaska"
            class="text-light desktop:text-base mr-4 hover:text-gray-300 text-sm"
            >Přihláška</nuxt-link
          >
        </div>
        <div>
          <nuxt-link
            to="/nadace"
            class="text-light desktop:text-base mr-4 hover:text-gray-300 text-sm"
            >O nás</nuxt-link
          >
        </div>

        <div>
          <a
            href="/sitemap.xml"
            class="text-light desktop:text-base mr-4 hover:text-gray-300 text-sm"
            >Sitemap</a
          >
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-end mobile:mt-4 tablet:text-right">
      <div>
        <a
          href="/lasophia_gdpr.pdf"
          class="text-light desktop:text-base mr-2 hover:text-gray-300 text-sm"
          >GDPR</a
        >
      </div>
      <div>
        <a
          href="/"
          class="text-light desktop:text-base mr-2 hover:text-gray-300 text-sm"
          >Podmínky</a
        >
      </div>
      <div>
        <nuxt-link
          to="/nadace"
          class="text-light desktop:text-base mr-2 hover:text-gray-300 text-sm"
          >Časté dotazy</nuxt-link
        >
      </div>
      <div class="mt-4">
        <a
          href="/"
          class="text-light text-lg desktop:text-xl mr-2 mobile:hidden"
          >Inhoud</a
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  background: #333333;
  padding: 5% 10%;

  @include maxiWidth {
    padding: 5% 20%;
  }
  @include tablet() {
    padding: 5% 8%;
  }

  @include mobile() {
    padding: 8% 5%;
  }
}
</style>
<script lang="ts">
// TODO: Dodělat odkazy
</script>
