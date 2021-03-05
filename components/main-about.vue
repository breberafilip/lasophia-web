<template>
  <div :class="$style.about">
    <div id="about" :class="$style.images__wrapper">
      <div>
        <div :class="[$style.image, $style['image-left']]">
          <picture>
            <source srcset="/images/about-1.webp" type="image/webp" />
            <img
              aria-hidden="true"
              loading="eager"
              width="500"
              height="333"
              src="/images/about-1.jpg"
              alt="Dekorativní Obrázek"
            />
          </picture>
          <div :class="$style.image__decoration">
            <div :class="$style.image__decoration__circle"></div>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div :class="[$style.image, $style['image-right']]">
          <picture>
            <source srcset="/images/about-2.webp" type="image/webp" />
            <img
              aria-hidden="true"
              loading="eager"
              width="500"
              height="333"
              src="/images/about-2.jpg"
              alt="Dekorativní Obrázek"
            />
          </picture>
          <div :class="$style.image__decoration">
            <div :class="$style.image__decoration__circle"></div>
          </div>
        </div>
        <div :class="[$style.image, $style['image-bottom']]">
          <picture>
            <source srcset="/images/about-3.webp" type="image/webp" />
            <img
              aria-hidden="true"
              loading="eager"
              width="500"
              height="333"
              src="/images/about-3.jpg"
              alt="Dekorativní Obrázek"
            />
          </picture>
          <div :class="$style.image__decoration">
            <div :class="$style.image__decoration__circle"></div>
          </div>
        </div>
      </div>
    </div>
    <div :class="$style.about__text">
      <h2 :class="$style.about__text__title">O soutěži</h2>
      <div :class="$style.about__text__decoration"></div>
      <p :class="$style.about__text__paragraph">
        Nadace Yvetty Blanarovičové La Sophia o.p.s. se již 12 let věnuje
        charitativním aktivitám zaměřeným na pomoc opuštěným dětem.
      </p>
    </div>
    <p :class="$style.about__text__paragraph + ' mt-6'">
      La Sophia zaměřuje především na budoucnost dětí. Cílem je vytváření
      společenských a materiálních podmínek pro podporu rozvíjení nadání a
      vzdělávání talentovaných dětí ze sociálně znevýhodněných rodin, dětských
      domovů a dětí s mírnou formou handicapu. Zejména pomáháme se získáváním
      finančních prostředků na zajišťění studijních stipendií na vyšším stupni
      vzdělávání v Čechách i zahraničí.
    </p>
  </div>
</template>

<style lang="scss" scoped module>
.about {
  @apply flex justify-start;
  flex-direction: column;
  padding: 15% 10%;

  @include maxiWidth {
    padding: 10% 20%;
  }
  @include tablet() {
    padding: 10% 8%;
  }

  @include mobile() {
    padding: 8% 5%;
  }
  background: #f3f3f3;
}
.about__text {
  margin-top: -200px;
  @include tablet() {
    margin-top: 0;
  }
  @include mobile() {
    margin-top: 0;
  }
  width: 300px;
}
.about__text__title {
  @apply text-3xl font-bold mb-4 text-dark;
  @include mobile() {
    @apply text-2xl;
  }
}
.about__text__decoration {
  @apply mb-5;
  width: 40%;
  border-top: 9px solid #fedc5d;
}
.about__text__paragraph {
  @apply text-primary text-lg;
  @include mobile() {
    @apply text-base;
  }
}
.images__wrapper {
  @apply flex flex-row;
  @include tablet() {
    margin-top: 40px;
  }
  @include mobile() {
    display: none;
  }
}
.image img {
  position: relative;

  width: 400px;
  height: 241px;
  object-fit: cover;
  z-index: 10;
  @include tablet() {
    max-width: 250px;
    height: 151px;
  }
}
.image {
  z-index: 10;
  margin: 20px;
  width: 400px;
  height: 241px;
  @include tablet() {
    width: 250px;
    height: 151px;
  }
  height: auto;
  position: relative;
}
.image-left {
  transform: translate(-20px, 20px);
  z-index: 10;
  .image__decoration {
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    top: -50px;
    left: 80px;
    right: 0;
    bottom: 0;
    border: 2px solid rgb(195, 195, 195);
    .image__decoration__circle {
      position: absolute;
      border-radius: 50%;
      border: 2px solid rgb(195, 195, 195);
      top: -30px;
      left: -30px;
      width: 60px;
      height: 60px;
    }
  }
}
.image-right {
  z-index: 20;
  transform: translate(18px, -50px);
  .image__decoration {
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    top: -50px;
    left: 50px;
    right: 0;
    bottom: 0;
    border: 2px solid rgb(195, 195, 195);
    .image__decoration__circle {
      position: absolute;
      border-radius: 50%;
      border: 2px solid rgb(195, 195, 195);
      top: -30px;
      right: -30px;
      width: 60px;
      height: 60px;
    }
  }
}
.image-bottom {
  z-index: 15;
  transform: translate(-50px, -60px);
  .image__decoration {
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    top: -50px;
    left: 50px;
    right: 0;
    bottom: 0;
    border: 2px solid rgb(195, 195, 195);
    .image__decoration__circle {
      position: absolute;
      border-radius: 50%;
      border: 2px solid rgb(195, 195, 195);
      bottom: -30px;
      right: -30px;
      width: 60px;
      height: 60px;
    }
  }
}
</style>
