<template>
  <div class="categories">
    <div
      class="category flex flex-row justify-between mb-12 items-start mobile:mb-4"
    >
      <div class="image image-first">
        <picture>
          <source srcset="/images/category-1.webp" type="image/webp" />
          <img
            aria-hidden="true"
            loading="eager"
            width="500"
            height="333"
            src="/images/category-1.jpg"
            alt="Dekorativní Obrázek"
          />
        </picture>
      </div>
      <div class="text-r text">
        <h2 class="text-dark text-2xl mb-4 mobile:text-xl mobile:mb-2">
          Talent La Sophia
        </h2>
        <div class="flex flex-row items-center">
          <div class="mr-4 arrow hidden desktop:block">
            <svg
              width="32"
              height="35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.52 16.285L15.096.19A.653.653 0 0014.64 0H10.79c-.322 0-.47.452-.226.687l15.225 14.92H.348c-.191 0-.348.177-.348.393v2.945c0 .216.157.393.348.393h25.438L10.56 34.258c-.243.24-.095.687.227.687h3.978a.314.314 0 00.226-.098L31.52 18.66c.15-.147.27-.33.354-.535a1.747 1.747 0 000-1.305 1.574 1.574 0 00-.354-.535z"
                fill="#616161"
              />
            </svg>
          </div>

          <div>
            <p class="text-base text-primary">
              Projekt Talent La Sophia vznikl v roce 2008 a je největším
              mezinárodním projektem obecně prospěšné společnosti La Sophia.
              Projektem prošlo stovky dětí a každým rokem se jejich počet
              zvyšuje.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="category flex flex-row justify-between mb-12 items-center mobile:mb-4"
    >
      <div class="text-l text">
        <h2 class="text-dark text-2xl mb-4 mobile:text-xl mobile:mb-2">
          Galavečer
        </h2>
        <div class="flex flex-row items-center">
          <div class="mr-4 arrow hidden desktop:block">
            <svg
              width="32"
              height="35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.52 16.285L15.096.19A.653.653 0 0014.64 0H10.79c-.322 0-.47.452-.226.687l15.225 14.92H.348c-.191 0-.348.177-.348.393v2.945c0 .216.157.393.348.393h25.438L10.56 34.258c-.243.24-.095.687.227.687h3.978a.314.314 0 00.226-.098L31.52 18.66c.15-.147.27-.33.354-.535a1.747 1.747 0 000-1.305 1.574 1.574 0 00-.354-.535z"
                fill="#616161"
              />
            </svg>
          </div>

          <div>
            <p class="text-base text-primary">
              Galavečer bývá slavnostní tečkou za celým ročníkem Talent La
              Sophia. Při této příležitosti mají děti možnost ukázat svůj talent
              a vystupují se známými osobnostmi hudebního průmyslu.
            </p>
          </div>
        </div>
      </div>
      <div class="image image-second">
        <picture>
          <source srcset="/images/category-2.webp" type="image/webp" />
          <img
            aria-hidden="true"
            loading="eager"
            width="500"
            height="433"
            src="/images/category-2.jpg"
            alt="Dekorativní Obrázek"
          />
        </picture>
      </div>
    </div>
    <div class="category flex flex-row justify-between items-end">
      <div class="image image-third">
        <picture>
          <source srcset="/images/category-3.webp" type="image/webp" />
          <img
            aria-hidden="true"
            loading="eager"
            width="500"
            height="313"
            src="/images/category-3.jpg"
            alt="Dekorativní Obrázek"
          />
        </picture>
      </div>
      <div class="text-r text">
        <h2 class="text-dark text-2xl mb-4 mobile:text-xl mobile:mb-2">
          Akademie
        </h2>
        <div class="flex flex-row items-center">
          <div class="mr-4 arrow hidden desktop:block">
            <svg
              width="32"
              height="35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.52 16.285L15.096.19A.653.653 0 0014.64 0H10.79c-.322 0-.47.452-.226.687l15.225 14.92H.348c-.191 0-.348.177-.348.393v2.945c0 .216.157.393.348.393h25.438L10.56 34.258c-.243.24-.095.687.227.687h3.978a.314.314 0 00.226-.098L31.52 18.66c.15-.147.27-.33.354-.535a1.747 1.747 0 000-1.305 1.574 1.574 0 00-.354-.535z"
                fill="#616161"
              />
            </svg>
          </div>

          <div>
            <p class="text-base text-primary">
              Mezinárodní hudební festival La Sophia přímo navazuje na jarní
              ročník projektu Talent La Sophia, ve kterém odborná porota
              každoročně vybere ty nejtalentovanější děti, které se projektu
              zúčastnily.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.image {
  position: relative;
  @include mobile() {
    display: none;
  }
  img {
    position: relative;
    z-index: 10;
    width: 400px;
    height: 241px;
    object-fit: cover;

    @include tablet() {
      max-width: 300px;
    }
  }

  &::after {
    position: absolute;
    z-index: 5;
    width: 100%;
    height: 100%;
    display: block;
    background: #fedc5d;
    content: '';
  }
}
.image-first::after {
  bottom: -20px;
  left: -20px;
}

.image-second::after {
  top: 0;
}

.image-third::after {
  bottom: -20px;
  left: -20px;
  background: #333333;
}

.text {
  width: 450px;
  padding-left: 5%;
  padding-bottom: 2%;
  padding-top: 2%;
  border-left: 2px solid rgb(195, 195, 195);
  @include tablet() {
    padding-left: 0;
    border: none;
  }
  @include mobile() {
    margin-left: 0;
  }
}
.text-r {
  margin-left: 50px;
  @include mobile() {
    margin-left: 0;
  }
}
.text-l {
  margin-right: 50px;
  @include mobile() {
    margin-right: 0;
  }
}
.categories {
  padding: 8% 10%;

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
