<template lang="pug">
  div(v-if="code")
    h2 Video Cards
    p Video Card
    .module
      render-string(:string="code.card")
      p.show-hide-code(@click="hiddenCard = !hiddenCard") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenCard")
          .relative
            p.copy(@click="copy(code.card, $el)") copy
            pre
              code.language-javascript {{ code.card }}
    p Small Video Card
    .module
      render-string(:string="code.smallCard")
      p.show-hide-code(@click="hiddenSmallCard = !hiddenSmallCard") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenSmallCard")
          .relative
            p.copy(@click="copy(code.smallCard, $el)") copy
            pre
              code.language-javascript {{ code.smallCard }}
    p Video Card - Dark
    .module.inverted
      render-string(:string="code.cardDark")
      p.show-hide-code(@click="hiddenCardDark = !hiddenCardDark") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenCardDark")
          .relative
            p.copy(@click="copy(code.cardDark, $el)") copy
            pre
              code.language-javascript {{ code.cardDark }}
    p Small Video Card - Dark
    .module.inverted
      render-string(:string="code.smallCardDark")
      p.show-hide-code(@click="hiddenSmallCardDark = !hiddenSmallCardDark") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenSmallCardDark")
          .relative
            p.copy(@click="copy(code.smallCardDark, $el)") copy
            pre
              code.language-javascript {{ code.smallCardDark }}
    p Props
    .module
      z-table(:headers="headers" :items="items")
</template>
<script>
import code from '~/code/video-card'
import { CollapseTransition } from 'vue2-transitions'
import copy from '~/util/copy'
import headers from '~/util/headers'

export default {
  components: { CollapseTransition },
  mixins: [copy],
  data: () => ({
    code,
    hiddenCard: true,
    hiddenSmallCard: true,
    hiddenCardDark: true,
    hiddenSmallCardDark: true,
    headers,
    items: [
      {
        name: 'src',
        type: 'String',
        required: 'true',
        default: '\'\'',
        description: 'Image source'
      },
      {
        name: 'title',
        type: 'String',
        required: 'false',
        default: '\'\'',
        description: 'Video cards title (first line bellow the image)'
      },
      {
        name: 'subtitle',
        type: 'String',
        required: 'false',
        default: '\'\'',
        description: 'Video cards subtitle (second line bellow the image)'
      },
      {
        name: 'width',
        type: 'String',
        required: 'false',
        default: '500px',
        description: 'Set the video cards width'
      },
      {
        name: 'dark',
        type: 'Boolean',
        required: 'false',
        default: 'false',
        description: 'Set video card to dark mode'
      }
    ]
  })
}
</script>
