<template lang="pug">
  div(v-if="code")
    h2 Scroller
    p Scroller - Normal
    .module(style="width:760px;")
      render-string(:string="code.normal")
      p.show-hide-code(@click="hidden = !hidden") </>
      collapse-transition.width-transition
        .overflow(v-show="!hidden")
          .relative
            p.copy(@click="copy(code.normal, $el)") copy
            pre
              code.language-javascript {{ code.normal }}
    p Scroller - Dark
    .module.inverted(style="width:760px;")
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
import code from '~/code/scroller'
import { CollapseTransition } from 'vue2-transitions'
import copy from '~/util/copy'
import headers from '~/util/headers'

export default {
  components: { CollapseTransition },
  mixins: [copy],
  data: () => ({
    code,
    hidden: true,
    hiddenDark: true,
    headers,
    items: [
      {
        name: 'width',
        type: 'String',
        required: 'false',
        default: '600px',
        description: 'Set the width of the scroller'
      },
      {
        name: 'dark',
        type: 'Boolean',
        required: 'false',
        default: 'false',
        description: 'Set scroller to dark mode'
      }
    ]
  })
}
</script>
