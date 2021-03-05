<template>
  <div class="application_form">
    <h1 class="text-3xl mobile:text-xl">Online Přihláška</h1>
    <ValidationObserver ref="form">
      <form @submit.prevent="">
        <p class="text-sm text-primary mb-8">
          Položky označené * jsou <span id="required">povinné</span>.
        </p>
        <div class="application__section application__personal">
          <span
            class="application__section__title text-xl text-dark mobile:text-lg"
            >Osobní údaje</span
          >
          <div class="flex flex-row mt-4 mobile:flex-col mb-2 mobile:mb-0">
            <div class="w-6/12 mobile:w-full">
              <ValidationProvider v-slot="{ errors }" name="fname">
                <label
                  for="fname"
                  class="text-primary uppercase text-sm mb-2 mobile:text-xs"
                  >Křestní Jméno
                  <span aria-labelledby="required" class="text-sm text-red-500"
                    >*</span
                  ></label
                >
                <input
                  id="fname"
                  v-model="values.fname"
                  type="text"
                  name="fname"
                  placeholder="Jan"
                  class="textinput block px-4 text-base py-2 text-primary w-full"
                  required
                />
                <span class="text-sm text-red-500">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div class="w-6/12 ml-6 mobile:w-full mobile:ml-0">
              <ValidationProvider v-slot="{ errors }" name="lname">
                <label
                  for="lname"
                  class="text-primary uppercase text-sm mb-2 mobile:text-xs"
                  >Příjmení
                  <span aria-labelledby="required" class="text-sm text-red-500"
                    >*</span
                  ></label
                >
                <input
                  id="lname"
                  v-model="values.lname"
                  type="text"
                  name="lname"
                  class="textinput block px-4 text-base py-2 text-primary w-full"
                  placeholder="Novák"
                  required
                />
                <span class="text-sm text-red-500">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
          </div>
          <div class="w-3/12 mobile:w-full">
            <ValidationProvider
              v-slot="{ errors }"
              name="bdate"
              rules="required"
              mode="passive"
            >
              <label
                for="bdate"
                class="text-primary uppercase text-sm mb-2 mobile:text-xs"
                >Datum Narození
                <span aria-labelledby="required" class="text-sm text-red-500"
                  >*</span
                ></label
              >
              <div>
                <client-only
                  ><date-picker
                    v-model="values.bdate"
                    format="DD.MM.YYYY"
                    value-type="YYYY-MM-DD"
                    prefix-class="xmx"
                    default-panel="year"
                    :append-to-body="false"
                    placeholder="01.01.2021"
                /></client-only>
              </div>
              <span class="text-sm text-red-500">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
        </div>
        <div class="application__section application_contact mt-12 mobile:mt-8">
          <span
            class="application__section__title text-xl text-dark mobile:text-lg"
            >Kontaktní údaje</span
          >
          <div class="flex flex-row mt-4 mobile:flex-col">
            <div class="w-6/12 mobile:w-full">
              <ValidationProvider
                v-slot="{ errors }"
                name="email"
                rules="email"
              >
                <label
                  for="email"
                  class="text-primary uppercase text-sm mb-2 mobile:text-xs"
                  >Emailová adresa
                  <span aria-labelledby="required" class="text-sm text-red-500"
                    >*</span
                  ></label
                >
                <input
                  id="email"
                  v-model="values.email"
                  type="email"
                  name="email"
                  placeholder="priklad@email.cz"
                  class="textinput block px-4 text-base py-2 text-primary w-full"
                  required
                />
                <span class="text-sm text-red-500">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div class="w-6/12 ml-6 mobile:w-full mobile:ml-0">
              <ValidationProvider
                v-slot="{ errors }"
                name="telephone"
                :rules="{ telf: /^(\+?(420|421) ?)?([0-9]{3} ?){2}[0-9]{3}$/ }"
              >
                <label
                  for="telephone"
                  class="text-primary uppercase text-sm mb-2 mobile:text-xs"
                  >Telefon
                  <span aria-labelledby="required" class="text-sm text-red-500"
                    >*</span
                  ></label
                >
                <input
                  id="telephone"
                  v-model="values.telephone"
                  type="tel"
                  name="telephone"
                  placeholder="+420 123 456 789"
                  class="textinput block px-4 text-base py-2 text-primary w-full"
                  required
                />
                <span class="text-sm text-red-500">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
          </div>
        </div>
        <div class="application__section application_address mt-10">
          <span
            class="application__section__title text-xl text-dark mobile:text-lg"
            >Adresa</span
          >
          <div class="flex flex-row mt-4 mobile:flex-col">
            <div class="w-8/12 mobile:w-full">
              <ValidationProvider v-slot="{ errors }" name="address">
                <label
                  for="address"
                  class="text-primary uppercase text-sm mb-2 mobile:text-xs"
                  >Ulice
                  <span aria-labelledby="required" class="text-sm text-red-500"
                    >*</span
                  ></label
                >
                <input
                  id="address"
                  v-model="values.address"
                  type="text"
                  name="address"
                  placeholder="V sadech, 12"
                  class="textinput block px-4 text-base py-2 text-primary w-full"
                  required
                />
                <span class="text-sm text-red-500">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <div class="w-4/12 mobile:w-full ml-6 mobile:ml-0">
              <ValidationProvider v-slot="{ errors }" name="city">
                <label
                  for="city"
                  class="text-primary uppercase text-sm mb-2 mobile:text-xs"
                  >Město
                  <span aria-labelledby="required" class="text-sm text-red-500"
                    >*</span
                  ></label
                >
                <input
                  id="city"
                  v-model="values.city"
                  type="text"
                  name="city"
                  placeholder="Praha"
                  class="textinput block px-4 text-base py-2 text-primary w-full"
                  required
                />
                <span class="text-sm text-red-500">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
          </div>
        </div>

        <div class="application__section application_field">
          <span
            class="application__section__title text-xl text-dark mobile:text-lg"
            >Soutěžní obor
            <span aria-labelledby="required" class="text-base text-red-500"
              >*</span
            ></span
          >
          <ValidationProvider v-slot="{ errors }" name="field">
            <span class="block text-sm text-red-500">{{ errors[0] }}</span>
            <div class="mt-6">
              <div class="mb-4">
                <label class="inline-flex items-center">
                  <input
                    v-model="values.field"
                    type="radio"
                    class="form-radio text-link"
                    name="field"
                    value="hudebni"
                    required
                  />
                  <span class="ml-2 text-primary mobile:text-sm"
                    >Hudební, taneční, dramatický</span
                  >
                </label>
              </div>
              <div>
                <label class="inline-flex items-center">
                  <input
                    v-model="values.field"
                    type="radio"
                    class="form-radio text-link text-base"
                    name="field"
                    value="sportovni"
                    required
                  />
                  <span class="ml-2 text-primary text-base mobile:text-sm"
                    >Sportovní</span
                  >
                </label>
              </div>
            </div>
          </ValidationProvider>
        </div>
        <div
          class="application__section application_experience py-4 mobile:py-0"
        >
          <label
            class="block application__section__title text-xl text-dark my-4 mobile:my-2 mobile:text-lg"
            for="additional"
            >Hudební/Sportovní zkušenosti, ZUŠ, kurzy
          </label>

          <textarea
            id="additional"
            v-model="values.additional"
            type="text"
            name="additional"
            class="textinput block px-4 text-base py-2 text-primary w-full"
          />
        </div>

        <button
          :class="[
            true
              ? 'bg-primary-button flex flex-row items-center button py-3 px-6 text-white mt-8 rounded cursor-pointer text-base mobile:text-sm'
              : '',
            error ? 'button--error' : '',
            success ? 'button--success' : '',
            loading ? 'button--loading' : '',
          ]"
          :disabled="loading"
          @click="onSubmit"
        >
          {{
            success
              ? 'Úspěšně odesláno! 🥳'
              : error
              ? 'Naskytla se chyba, kontaktujte nás.'
              : loading
              ? 'Odesílání..'
              : 'Jdu do toho!'
          }}
          <svg
            v-if="!error && !success"
            width="20"
            class="ml-4 mobile:hidden"
            height="20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.796 9.697L.533.038A.368.368 0 00.01.455l1.986 8.111c.03.123.12.222.24.26l3.4 1.168-3.398 1.168a.36.36 0 00-.238.26L.01 19.545a.37.37 0 00.523.417l19.263-9.604a.38.38 0 00.166-.163.373.373 0 00-.166-.498zm-17.515 7.54l1.159-4.735 6.797-2.333a.185.185 0 000-.35L3.44 7.49 2.286 2.772l14.461 7.252-14.466 7.213z"
              fill="#fff"
            />
          </svg>
        </button>
      </form>
    </ValidationObserver>
  </div>
</template>
<script lang="ts">
import { ref, reactive, Ref, useContext } from '@nuxtjs/composition-api'
// @ts-ignore
import DatePicker from 'vue2-datepicker'
import 'assets/scss/datepicker.scss'
import 'vue2-datepicker/locale/cs'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { useApplication } from '../composable/useApplication'

// @ts-ignore
type VForm = { validate: () => boolean } & { reset: () => void }
export default {
  components: {
    ValidationObserver,
    ValidationProvider,
    DatePicker,
  },
  setup() {
    const form = ref(null) as Ref<VForm | null>
    const { sendApplication } = useApplication()

    const values = reactive({
      fname: '',
      lname: '',
      email: '',
      address: '',
      bdate: '',
      city: '',
      field: '',
      telephone: '',
      additional: '',
    })
    const loading = ref(false)
    const success = ref(false)
    const error = ref(false)

    const onSubmit = async () => {
      if (error.value || success.value) location.reload()
      const valid = await form.value!.validate()
      if (!valid) return
      loading.value = true
      const res = await sendApplication(values).catch(
        () => (error.value = true)
      )
      loading.value = false
      // @ts-ignore
      if (res.status === 200) {
        success.value = true
        form.value!.reset()
      }
    }
    return { values, onSubmit, form, loading, success, error }
  },
}
</script>
<style lang="scss" scoped>
.application_form {
  padding: 10% 20%;

  @include maxiWidth {
    padding: 8% 20%;
  }
  @include tablet() {
    padding: 8% 8%;
  }

  @include mobile() {
    padding: 8% 5%;
  }
}

.button {
  background: #333333;
}
.button--error {
  background: rgba(239, 68, 68);
}
.button--success {
  background: rgba(16, 185, 129);
}
.button--loading {
  background: #626262;
}
.application__section {
  margin-bottom: 20px;

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
}

.application_field {
  border-bottom: 1px solid #d7d7d7;
  padding: 50px 0;
  @include mobile() {
    padding: 0;
    padding-bottom: 30px;
  }
}
</style>

<style lang="scss">
.xmx-input {
  border: 1.5px solid #d1d1d1;
  border-radius: 5px;
  padding-top: 0.5rem;
  padding-left: 1rem;
  height: auto;
  line-height: inherit;
  padding-right: 1rem;
  padding-bottom: 0.5rem;
  font-size: 1rem;
  color: #616161;
  &:focus {
    border-color: #fedc5d !important;
  }
  &::placeholder {
    color: #d6d6d6;
  }
}
</style>
