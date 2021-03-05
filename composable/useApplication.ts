import { useContext } from '@nuxtjs/composition-api'

interface IValues {
  fname: string
  lname: string
  email: string
  bdate: string
  address: string
  city: string
  telephone: string
  field: string
  additional: string
}

export const useApplication = () => {
  const { $axios, $logRocket } = useContext()
  const sendApplication = async (values: IValues) => {
    const res = await $axios.post('/applications', values)
    $logRocket.identify(values.email)
    return res
  }
  return { sendApplication }
}
