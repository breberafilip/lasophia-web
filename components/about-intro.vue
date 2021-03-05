<template lang="pug">
  div(:class="$style['about-intro']")
    h2 Kdo jsme?
    p La Sophia o.p.s se už 13 let věnuje, díky svým projektům, umělecky a sportovně talentovaným dětem a mládeži z České a Slovenské republiky ve věku od 7 do 18 let. V roce 2021 otevřela také masterclass pro ty, kteří se chtějí zdokonalit v mluvě, herectví, zpěvu a pohybu. Organizace pokrývá i náklady spojené se studiem, stravou, ošacením a umožněním získání specifických sportovních, uměleckých, vědeckých pomůcek a ostatních materiálních předpokladů nutných ke studiu a rozvoji talentu.
    p(class="mobile:hidden") Obecně prospěšná společnost La Sophia se už 12 let věnuje charitativním aktivitám zaměřeným na pomoc opuštěným dětem. Cílem je poskytnout dětem individuální přístup a pomoci jim především v oblasti vzdělávání, seberealizace, podpory a rozvíjení talentu. Jsme odrazovým můstkem pro mnohé nadané účastníky, díky aktivitám, na kterých se podílejí významné osobnosti uměleckého a sportovního světa.
</template>

<style lang="sass" scoped module>
@import '~assets/scss/_mq.sass'
.about-intro
  text-align: center
  +mobile
    text-align: left
  padding: 5% 15%
  padding-bottom: 0

  +maxiWidth
    padding: 8% 20%
  +tablet
    padding: 5% 8%
    padding-bottom: 0
  +mobile
    padding: 5% 5%

  h2
    @apply text-4xl mb-4
    +mobile
      @apply text-2xl mb-2
  p
    @apply text-base text-primary mt-4
    +mobile
      @apply mt-2 text-sm
</style>
