<template lang="pug">
  div.mb-4
    nuxt-link(:to="'/blog/'+slug")
      h2.text-xl.text-dark {{ title }}
    p.text-sm.text-primary {{ (new Date(date)).toLocaleString('cs-CZ', { timeZone: 'Europe/Prague', dateStyle: "short" }) }}
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    slug: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="sass" scoped>
h2
  color: #008FCC
</style>
