<template lang="pug">
  div(v-if="code")
    h2 Code
    p Terminal Input
    .module
      render-string(:string="code.input")
      p.show-hide-code(@click="hiddenInput = !hiddenInput") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenInput")
          .relative
            p.copy(@click="copy(code.input, $el)") copy
            pre
              code.language-javascript {{ code.input }}
    p Terminal Output
    .module
      render-string(:string="code.output")
      p.show-hide-code(@click="hiddenOutput = !hiddenOutput") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenOutput")
          .relative
            p.copy(@click="copy(code.output, $el)") copy
            pre
              code.language-javascript {{ code.output }}
    p Props
    .module
      z-table(:headers="headers" :items="items")
    p Note
    .module
      p.black-text This component doesn't have any syntax highlighter
</template>
<script>
import code from '~/code/code'
import { CollapseTransition } from 'vue2-transitions'
import copy from '~/util/copy'
import headers from '~/util/headers'

export default {
  components: { CollapseTransition },
  mixins: [copy],
  data: () => ({
    code,
    hiddenInput: true,
    hiddenOutput: true,
    headers,
    items: [
      {
        name: 'content',
        type: 'String',
        required: 'false',
        default: '\'\'',
        description: 'Code content. You can use this or pass it as a <slot>'
      },
      {
        name: 'withDolar',
        type: 'Boolean',
        required: 'false',
        default: 'false',
        description: 'Appends a \'$\' prefix'
      },
      {
        name: 'dark',
        type: 'Boolean',
        required: 'false',
        default: 'false',
        description: 'Set code to dark mode'
      }
    ]
  })
}
</script>
