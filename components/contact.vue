<template>
  <div
    id="contact"
    class="contact flex flex-row justify-between mobile:flex-col tablet:items-center"
  >
    <div>
      <h2 class="label text-primary text-sm uppercase">Kontakt</h2>
      <h3 class="text-3xl mb-4 mobile:text-2xl text-dark">Kde nás najdete?</h3>
      <div>
        <h4 class="text-base text-primary">Telefon</h4>
        <a class="text-sm text-dark hover:underline" href="tel:420724979101"
          >+420 724 979 101</a
        >
        <h4 class="text-base text-primary mt-2">Adresa</h4>
        <p class="text-sm text-dark">Dlouhá 705/16, 110 00 Praha 1</p>
        <h4 class="text-base text-primary mt-2">Email</h4>
        <a
          class="text-sm text-dark hover:underline"
          href="mailto:office@lasophia.cz"
        >
          office@lasophia.cz
        </a>
      </div>
    </div>
    <div class="w-3/6 mobile:w-full desktop:w-2/5 mobile:mt-8">
      <h2 class="label text-primary text-sm uppercase">Formulář</h2>
      <h3 class="text-3xl mb-4 mobile:text-2xl text-dark">Máte dotaz?</h3>
      <div>
        <label
          for="email"
          class="text-primary uppercase text-sm mb-2 mobile:text-xs"
          >Váš Email</label
        >
        <input
          id="email"
          v-model="values.email"
          type="text"
          name="email"
          placeholder="vas@email.cz"
          class="textinput block px-4 text-base py-2 text-primary w-full mb-4 mobile:text-sm"
          required
        />
        <label
          for="subject"
          class="text-primary uppercase text-sm mb-2 mobile:text-xs"
          >Předmět</label
        >
        <input
          id="subject"
          v-model="values.subject"
          type="text"
          name="subject"
          placeholder="Název zprávy"
          class="textinput block px-4 text-base py-2 text-primary w-full mb-4 mobile:text-sm"
          required
        />
        <label
          for="message"
          class="text-primary uppercase text-sm mb-2 mobile:text-xs"
          >Zpráva</label
        >
        <textarea
          id="message"
          v-model="values.message"
          name="message"
          class="textinput block px-4 text-base py-2 text-primary w-full mobile:text-sm"
          placeholder="Rád bych se zeptal na.."
          required
        />
        <button
          class="flex flex-row items-center button py-3 px-6 text-black mt-4 rounded cursor-pointer text-base mobile:text-sm"
          :disabled="success"
          @click="send"
        >
          {{ success ? 'Úspěšně odesláno.' : error ? 'Chyba' : 'Odeslat'
          }}<svg
            v-if="!success"
            width="20"
            height="20"
            fill="none"
            class="ml-4 mobile:hidden"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.796 9.697L.533.038A.368.368 0 00.01.455l1.986 8.111c.03.123.12.222.24.26l3.4 1.168-3.398 1.168a.36.36 0 00-.238.26L.01 19.545a.37.37 0 00.523.417l19.263-9.604a.38.38 0 00.166-.163.373.373 0 00-.166-.498zm-17.515 7.54l1.159-4.735 6.797-2.333a.185.185 0 000-.35L3.44 7.49 2.286 2.772l14.461 7.252-14.466 7.213z"
              fill="#000"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact {
  padding: 10% 10%;

  @include maxiWidth {
    padding: 8% 20%;
  }
  @include tablet() {
    padding: 8% 8%;
  }

  @include mobile() {
    padding: 15% 5%;
  }

  textarea,
  input {
    &::placeholder {
      color: #d6d6d6;
    }
    &:focus {
      outline-color: #fedc5d;
    }
  }
  .textinput {
    border: 1.5px solid #d1d1d1;
    border-radius: 5px;
  }
  .button {
    background: #fedc5d;
    transition: 0.4s ease-out;
    svg path {
      fill: black;
      transition: 0.4s ease-out;
    }
    &:hover {
      background: #333333;
      color: white;
      svg path {
        fill: white;
      }
    }
  }
}
</style>

<script lang="ts">
import { useContext, ref, reactive } from '@nuxtjs/composition-api'
export default {
  setup() {
    const { $axios } = useContext()
    const values = reactive({
      email: '',
      subject: '',
      message: '',
    })
    const success = ref(false)
    const error = ref(false)
    const send = async () => {
      const res = await $axios
        .post('/contact', {
          email: values.email,
          subject: values.subject,
          message: values.message,
        })
        .catch((e) => (error.value = true))
      // @ts-ignore
      if (res.status === 200) success.value = true
    }
    return { success, send, values, error }
  },
}
</script>
