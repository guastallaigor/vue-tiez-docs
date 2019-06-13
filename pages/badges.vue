<template lang="pug">
  div(v-if="code")
    h2 Badges
    p Red Badges
    .module
      render-string(:string="code.red")
      p.show-hide-code(@click="hiddenRed = !hiddenRed") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenRed")
          .relative
            p.copy(@click="copy(code.red, $el)") copy
            pre
              code.language-javascript {{ code.red }}
    p Black Badges
    .module
      render-string(:string="code.black")
      p.show-hide-code(@click="hiddenBlack = !hiddenBlack") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenBlack")
          .relative
            p.copy(@click="copy(code.black, $el)") copy
            pre
              code.language-javascript {{ code.black }}
    p Badges - Dark
    .module.inverted
      render-string(:string="code.dark")
      p.show-hide-code(@click="hiddenDark = !hiddenDark") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenDark")
          .relative
            p.copy(@click="copy(code.dark, $el)") copy
            pre
              code.language-javascript {{ code.dark }}
    p Props
    .module
      z-table(:headers="headers" :items="items")
</template>
<script>
import code from '~/code/badge'
import { CollapseTransition } from 'vue2-transitions'
import copy from '~/util/copy'
import headers from '~/util/headers'

export default {
  components: { CollapseTransition },
  mixins: [copy],
  data: () => ({
    code,
    hiddenRed: true,
    hiddenBlack: true,
    hiddenDark: true,
    headers,
    items: [
      {
        name: 'content',
        type: '[Number, String]',
        required: 'true',
        default: 'null',
        description: 'Badge content'
      },
      {
        name: 'withText',
        type: 'Boolean',
        required: 'false',
        default: 'false',
        description: 'If you pass a text inside the content prop, you should set this to true (slightly different layout)'
      },
      {
        name: 'color',
        type: 'String',
        required: 'false',
        default: 'black',
        description: 'Color of the badge. Valid sizes are: red, black, and dark (white background with black text)'
      }
    ]
  })
}
</script>
