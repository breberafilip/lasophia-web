import { Plugin } from '@nuxt/types'

const headers: Plugin = async ({ app: { $axios, $recaptcha } }) => {

  $axios.onRequest(async (config: any) => {
    await $recaptcha.init()
    const captchaToken = await $recaptcha.execute('plugin')
    if (!config.headers.captcha && captchaToken)
      config.headers.captcha = captchaToken

    return config
  })
}

export default headers
