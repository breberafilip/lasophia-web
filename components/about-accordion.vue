<template lang="pug">
  div.rounded-md.accordion.mt-4(:class="{ opened }")
    div.flex.flex-row.justify-between.accordion__item.items-center(@click="toggleAccordion" )
      h3.text-base.text-dark(class="mobile:text-sm") {{question}}
      div.button.flex.flex-col.justify-center.items-center.ml-5
        img(src="/images/arrow_down.svg" alt="Vektor Šipky" width="40" height="22")
    div(v-show="opened").accordion__item__content
      p.text-base.text-primary.text-left(class="mobile:text-sm")
        slot
</template>
<script lang="ts">
import { ref } from '@nuxtjs/composition-api'
export default {
  props: {
    question: {
      type: String,
      default: '',
    },
    answer: {
      type: String,
      default: '',
    },
  },
  setup() {
    const opened = ref(false)
    const toggleAccordion = () => (opened.value = !opened.value)
    return { opened, toggleAccordion }
  },
}
</script>
<style lang="sass">
.accordion
  width: 100%
  text-align: left
  background: #F3F3F3
.accordion__item

  user-select: none
  cursor: pointer
  &:hover
    .button
      background: #DEDEDE
  @apply px-4 py-2
  .button
    width: 40px
    height: 40px
    flex-shrink: 0
    @apply rounded-md
    img
      height: 10px

.accordion__item__content
  border-top: 1px solid #DEDEDE
  @apply px-4 py-4
.opened
  img
    transform: scaleY(-1)
</style>
