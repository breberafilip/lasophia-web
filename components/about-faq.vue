<template lang="pug">
  div.about-faq
    h2.text-left.text-2xl.text-dark(class="mobile:text-xl") Často kladené dotazy
    about-accordion(question="Kdo se může přihlásit?")
      p.mb-4  Do soutěže se může přihlásit každý, kdo splňuje věkovou hranici 7 až 18 let a projde výběrovými koly v ČR a SK.
      ul
        li • Primární cílovou skupinou jsou umělecky a sportovně talentované děti a mládež
        li • Nadané děti a mládež vyrůstající v ústavní péči, ze sociálně znevýhodněných rodin, s handicapem, zdravotním onemocněním, z dysfunkčních rodin, Klokánků a komunitních center
        li • Všichni, kdo chtějí absolvovat Masterclass v oboru herectví, komunikace a mluvy, ve věku 18-21 let
    about-accordion(question="Kde najdu přihlášku?")
      p   
        |Přihlášku můžeš buď vyplnit online v sekci 
        nuxt-link(to="/prihlaska").text-dark Přihláška
        |, nebo můžeš zaslat vytisknutou formu poštou na naši adresu.
    about-accordion(question="Co když se nemohu dostavit na casting?")
      p 
        |Pokud se nemůžeš dostavit na výběrové kolo, pošli nám na email 
        a(href="mailto:office@lasophia.cz").text-dark office@lasophia.cz
        |  svoji nahrávku 2 skladeb, či monolog a báseň.

    about-accordion(question="Když chci vstoupit do nadačního systému, musím se zúčastnit Talent La Sophia?")
      p Ano. Někteří, pokud jsou méně zkušení, mohou dostat po výběrovém kole a odborném posouzení výjimku - tzv. dostávají roční šanci nultého ročníku. V následujícím roce porota posoudí zlepšení a účastník tak může získat šanci dostat se do semifinále Akademie Talent La Sophia.
    about-accordion(question="Pokud mi je 18, a v září, když bude finále 19, můžu soutěžit?")
      p Ano. Počítá se rok ve výběrovém kole.
    about-accordion(question="Pokud se dostanu do semifinále sportovního oboru, jaká je náplň aktivit na Akademii?")
      p Kondice, plavání, nohejbal, fotbal, základy jogy, spinning, a další dovednosti.
    about-accordion(question="Když jsem ze sociálně znevýhodněného prostředí, musím si hradit výuku, stavu a ubytování na Akademii?")
      p  Ne, po odeslání patřičných dokladů o znevýhodnění, vše účastníkům hradí La Sophia o.p.s
    about-accordion(question="Když jsem z jiného státu, než ze Slovenska nebo Čech, můžu se přihlásit do soutěže?")
      p  Ano, soutěž je mezinárodní. Máme dveře otevřené všem talentům.
        

    p.text-left.mt-6.text-dark.text-base(class="mobile:text-sm") Nenašli jste odpověď na Váš dotaz?
      a.underline(href="/#contact")  Kontaktujte nás.
</template>

<style lang="sass" scoped>

@import '~assets/scss/_mq.sass'
.about-faq
  text-align: center
  +mobile
    text-align: left
  padding: 5% 15%
  +maxiWidth
    padding: 8% 20%
  +tablet
    padding: 5% 8%
  +mobile
    padding: 5% 5%
  a
    text-decoration-color: #fedc5d
    text-decoration-thickness: 2px
</style>
