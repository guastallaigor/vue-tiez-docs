<template lang="pug">
  div(v-if="code")
    h2 Tooltip
    p Default Size
    .module
      render-string(:string="code.default")
      p.show-hide-code(@click="hiddenDefault = !hiddenDefault") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenDefault")
          .relative
            p.copy(@click="copy(code.default, $el)") copy
            pre
              code.language-javascript {{ code.default }}
    p Custom Size
    .module
      render-string(:string="code.custom")
      p.show-hide-code(@click="hiddenCustom = !hiddenCustom") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenCustom")
          .relative
            p.copy(@click="copy(code.custom, $el)") copy
            pre
              code.language-javascript {{ code.custom }}
    p Default Size - Dark
    .module.inverted
      render-string(:string="code.defaultDark")
      p.show-hide-code(@click="hiddenDefaultDark = !hiddenDefaultDark") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenDefaultDark")
          .relative
            p.copy(@click="copy(code.defaultDark, $el)") copy
            pre
              code.language-javascript {{ code.defaultDark }}
    p Custom Size - Dark
    .module.inverted
      render-string(:string="code.customDark")
      p.show-hide-code(@click="hiddenCustomDark = !hiddenCustomDark") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenCustomDark")
          .relative
            p.copy(@click="copy(code.customDark, $el)") copy
            pre
              code.language-javascript {{ code.customDark }}
    p Props
    .module
      z-table(:headers="headers" :items="items")
</template>
<script>
import code from '~/code/spinner'
import { CollapseTransition } from 'vue2-transitions'
import copy from '~/util/copy'
import headers from '~/util/headers'

export default {
  components: { CollapseTransition },
  mixins: [copy],
  data: () => ({
    code,
    hiddenDefault: true,
    hiddenCustom: true,
    hiddenDefaultDark: true,
    hiddenCustomDark: true,
    headers,
    items: [
      {
        name: 'size',
        type: 'String',
        required: 'false',
        default: '20px',
        description: 'Size of the spinner component. Amount plus any valid CSS unit (px, em, rem)'
      },
      {
        name: 'dark',
        type: 'Boolean',
        required: 'false',
        default: 'false',
        description: 'Set spinner to dark mode'
      }
    ]
  })
}
</script>
