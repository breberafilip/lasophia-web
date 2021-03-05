<template>
  <div class="application-hero">
    <h1
      class="text-white text-3xl text-center font-bold mobile:text-xl mobile:text-left"
    >
      Přihláška
    </h1>
  </div>
</template>

<style lang="scss" scoped>
.application-hero {
  padding: 7% 10%;
  background: #656565;

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
