<template lang="pug">
.showcase.flex.flex-col(class='desktop:flex-row desktop:items-center desktop:justify-between')
  .showcase__description.mr-12(class='tablet:mr-0 mobile:mr-0 desktop:mr-12')
    h2.text-3xl.mb-4.text-dark(class='mobile:text-2xl') Najdi svůj talent!
    p.text-sm.text-primary.text-base
      | O čem vlastně La Sophia je? V našem krátkém videu najdeš nejen ukázky z předchozích workshopů a akcí organizace. Už máš podanou přihlášku?
  .showcase__video(class='mobile:mt-10 tablet:mt-8 desktop:mt-0')
    client-only
      vue-plyr(:options='options')
        .plyr__video-embed
          iframe(src='https://player.vimeo.com/video/515994791' width='560' height='315' allow='fullscreen; picture-in-picture;')

</template>
<script>
import { reactive } from '@nuxtjs/composition-api'
export default {
  setup() {
    const options = reactive({
      controls: ['play', 'progress', 'mute', 'volume', 'pip', 'airplay'],
    })
    return { options }
  },
}
</script>

<style lang="scss" scoped>
.showcase {
  padding: 5% 10%;
  @include maxiWidth {
    padding: 5% 20%;
  }
  @include tablet() {
    padding: 5% 8%;
  }

  @include mobile() {
    padding: 5% 5%;
  }
  background: #f3f3f3;
  --plyr-color-main: #fedc5d;
  --plyr-video-control-background-hover: #333333;
  .showcase__description {
    max-width: 400px;
    @include tablet() {
      max-width: 100%;
    }
    @include mobile() {
      max-width: 100%;
    }
  }
  .showcase__video {
    width: 100%;
    height: auto;
    padding-bottom: 0;

    @include maxiHeight {
      width: 100%;
      height: auto;
      padding-bottom: 0;
    }
    iframe {
      position: static;
      width: 100%;
      height: 315px;

      @include maxiHeight {
        position: static;
        width: 100%;
        height: 315px;
      }
      @include tablet {
        width: 90%;
      }
      @include mobile {
        width: 100%;
      }
    }
  }
}
</style>
