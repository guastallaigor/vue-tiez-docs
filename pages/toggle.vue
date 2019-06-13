<template lang="pug">
  div(v-if="code")
    h2 Toggle
    p Normal
    .module
      render-string(:string="code.normal")
      p.show-hide-code(@click="hiddenNormal = !hiddenNormal") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenNormal")
          .relative
            p.copy(@click="copy(code.normal, $el)") copy
            pre
              code.language-javascript {{ code.normal }}
    p Checked
    .module
      render-string(:string="code.checked")
      p.show-hide-code(@click="hiddenChecked = !hiddenChecked") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenChecked")
          .relative
            p.copy(@click="copy(code.checked, $el)") copy
            pre
              code.language-javascript {{ code.checked }}
    p Disabled
    .module
      render-string(:string="code.disabled")
      p.show-hide-code(@click="hiddenDisabled = !hiddenDisabled") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenDisabled")
          .relative
            p.copy(@click="copy(code.disabled, $el)") copy
            pre
              code.language-javascript {{ code.disabled }}
    p Normal - Dark
    .module.inverted
      render-string(:string="code.normalDark")
      p.show-hide-code(@click="hiddenNormalDark = !hiddenNormalDark") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenNormalDark")
          .relative
            p.copy(@click="copy(code.normalDark, $el)") copy
            pre
              code.language-javascript {{ code.normalDark }}
    p Checked - Dark
    .module.inverted
      render-string(:string="code.checkedDark")
      p.show-hide-code(@click="hiddenCheckedDark = !hiddenCheckedDark") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenCheckedDark")
          .relative
            p.copy(@click="copy(code.checkedDark, $el)") copy
            pre
              code.language-javascript {{ code.checkedDark }}
    p Disabled - Dark
    .module.inverted
      render-string(:string="code.disabledDark")
      p.show-hide-code(@click="hiddenDisabledDark = !hiddenDisabledDark") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenDisabledDark")
          .relative
            p.copy(@click="copy(code.disabledDark, $el)") copy
            pre
              code.language-javascript {{ code.disabledDark }}
    p Props
    .module
      z-table(:headers="headers" :items="items")
    p Events
    .module
      z-table(:headers="headersEvents" :items="itemsEvents")
</template>
<script>
import code from '~/code/toggle'
import { CollapseTransition } from 'vue2-transitions'
import copy from '~/util/copy'
import headers from '~/util/headers'
import headersEvents from '~/util/headers-events'

export default {
  components: { CollapseTransition },
  mixins: [copy],
  data: () => ({
    code,
    hiddenNormal: true,
    hiddenChecked: true,
    hiddenDisabled: true,
    hiddenNormalDark: true,
    hiddenCheckedDark: true,
    hiddenDisabledDark: true,
    headers,
    headersEvents,
    itemsEvents: [
      {
        name: 'click',
        description: 'Emit an input event'
      }
    ],
    items: [
      {
        name: 'value',
        type: 'Boolean',
        required: 'true',
        default: 'false',
        description: 'True is checked and false is unchecked. Can be used with a v-model as well'
      },
      {
        name: 'disabled',
        type: 'Boolean',
        required: 'false',
        default: 'false',
        description: 'Set checkbox to a disabled state'
      },
      {
        name: 'dark',
        type: 'Boolean',
        required: 'false',
        default: 'false',
        description: 'Set checkbox to dark mode'
      }
    ]
  })
}
</script>
