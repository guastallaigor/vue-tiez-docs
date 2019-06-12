<template lang="pug">
  div(v-if="code")
    h2 Inputs
    p Normal
    .module
      div(style="padding: 20px 20px 20px 0px;width:225px;")
        z-input(placeholder="The Evil Rabbit" v-model="valueNormal" :max-length="15")
      p.show-hide-code(@click="hiddenNormal = !hiddenNormal") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenNormal")
          .relative
            p.copy(@click="copy(code.normal, $el)") copy
            pre
              code.language-javascript {{ code.normal }}
    p Disabled
    .module
      div(style="padding: 20px 20px 20px 0px;width:225px;")
        z-input(placeholder="The Evil Rabbit" v-model="valueDisabled" :max-length="15" disabled)
      p.show-hide-code(@click="hiddenDisabled = !hiddenDisabled") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenDisabled")
          .relative
            p.copy(@click="copy(code.disabled, $el)") copy
            pre
              code.language-javascript {{ code.disabled }}
    p Error
    .module
      div(style="padding: 20px 20px 20px 0px;width:225px;")
        z-input(placeholder="The Evil Rabbit" v-model="valueError" :max-length="15" error)
      p.show-hide-code(@click="hiddenError = !hiddenError") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenError")
          .relative
            p.copy(@click="copy(code.error, $el)") copy
            pre
              code.language-javascript {{ code.error }}
    p Props
    .module
      z-table(:headers="headers" :items="items")
</template>
<script>
import code from '~/code/inputs'
import { CollapseTransition } from 'vue2-transitions'
import copy from '~/util/copy'
import headers from '~/util/headers'

export default {
  components: { CollapseTransition },
  mixins: [copy],
  data: () => ({
    code,
    hiddenNormal: true,
    hiddenDisabled: true,
    hiddenError: true,
    headers,
    valueNormal: '',
    valueDisabled: '',
    valueError: 'The Good Rabbit',
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
