import { extend, localize, setInteractionMode } from 'vee-validate'
import { required, email, regex } from 'vee-validate/dist/rules'

import cs from 'vee-validate/dist/locale/cs.json'

localize({ cs })
extend('required', {
  ...required,
  message: 'Toto pole je povinné.',
})

extend('email', {
  ...email,
  message: 'Emailová adresa není platná.',
})

extend('telf', {
  ...regex,
  message: 'Chybný formát telefonního čísla.',
})
setInteractionMode('eager')
