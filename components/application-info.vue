<template>
  <div class="application__info flex flex-row justify-between mobile:flex-col">
    <div>
      <h2 class="text-dark text-2xl mb-4 mobile:text-xl">
        Jak mohu zaslat přihlášku?
      </h2>
      <ul>
        <li>
          <span class="text-primary test-base mobile:text-sm"
            >a) Vyplnění a odeslání online přihlášky
          </span>
        </li>
        <li>
          <span class="text-primary test-base mobile:text-sm"
            >b) Vyplnění Word dokumentu v PC a zaslání emailem</span
          >
        </li>
        <li>
          <span class="text-primary test-base mobile:text-sm"
            >c) Vyplnění Word dokumentu v PC, vytištění a zaslání poštou</span
          >
        </li>
        <li>
          <span class="text-primary test-base mobile:text-sm"
            >d) Vytištění, ruční vyplnění a zaslání poštou</span
          >
        </li>
      </ul>
    </div>
    <div
      class="application__info__files ml-12 mobile:ml-0 mobile:mt-4 w-2/6 mobile:w-full"
    >
      <h2 class="text-dark text-2xl mb-4 mobile:text-xl">Přílohy</h2>
      <ul>
        <li class="tablet:mb-2">
          <a href="" class="text-primary text-base mobile:text-sm"
            >Podmínky soutěže (formát PDF) 147 kB</a
          >
        </li>
        <li class="tablet:mb-2">
          <a
            href="/prihlaska_2021.doc"
            class="text-primary text-base mobile:text-sm"
            >Přihláška (formát DOC) 42 kB</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.application__info {
  padding: 5% 10%;
  background: #f3f3f3;

  @include maxiWidth {
    padding: 8% 20%;
  }
  @include tablet() {
    padding: 8% 8%;
  }

  @include mobile() {
    padding: 5% 5%;
  }
}
</style>
