<template lang="pug">
  div(v-if="code")
    h2 Inputs
    p Normal
    .module
      div(style="padding: 20px 20px 20px 0px;width:225px;")
        z-input(placeholder="The Evil Rabbit" v-model="valueNormal")
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
        z-input(placeholder="The Evil Rabbit" v-model="valueDisabled" disabled)
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
        z-input(placeholder="The Evil Rabbit" v-model="valueError" error)
      p.show-hide-code(@click="hiddenError = !hiddenError") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenError")
          .relative
            p.copy(@click="copy(code.error, $el)") copy
            pre
              code.language-javascript {{ code.error }}
    p Icon
    .module
      div(style="padding: 20px 20px 20px 0px;width:258px;")
        z-input(placeholder="you@domain.com" v-model="valueFirstIcon" icon="closed-email")
      div(style="padding: 20px 20px 20px 0px;width:258px;")
        z-input(placeholder="you@domain.com" v-model="valueSecondIcon" icon="closed-email" with-icon-right)
      p.show-hide-code(@click="hiddenIcon = !hiddenIcon") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenIcon")
          .relative
            p.copy(@click="copy(code.icon, $el)") copy
            pre
              code.language-javascript {{ code.icon }}
    p Inline Label
    .module
      div(style="padding: 20px 20px 20px 0px;width:331.48px;")
        z-input(placeholder="zeit" v-model="valueFirstLabel" label="zeit.co/teams")
      div(style="padding: 20px 20px 20px 0px;width:293.67px;")
        z-input(placeholder="zeit" v-model="valueSecondLabel" label=".now.sh" with-label-right )
      p.show-hide-code(@click="hiddenInlineLabel = !hiddenInlineLabel") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenInlineLabel")
          .relative
            p.copy(@click="copy(code.inlineLabel, $el)") copy
            pre
              code.language-javascript {{ code.inlineLabel }}
    p Normal - Dark
    .module.inverted
      div(style="padding: 20px 20px 20px 0px;width:225px;")
        z-input(placeholder="The Evil Rabbit" v-model="valueNormalDark" dark)
      p.show-hide-code(@click="hiddenNormalDark = !hiddenNormalDark") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenNormalDark")
          .relative
            p.copy(@click="copy(code.normalDark, $el)") copy
            pre
              code.language-javascript {{ code.normalDark }}
    p Disabled - Dark
    .module.inverted
      div(style="padding: 20px 20px 20px 0px;width:225px;")
        z-input(placeholder="The Evil Rabbit" v-model="valueDisabledDark" disabled dark)
      p.show-hide-code(@click="hiddenDisabledDark = !hiddenDisabledDark") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenDisabledDark")
          .relative
            p.copy(@click="copy(code.disabledDark, $el)") copy
            pre
              code.language-javascript {{ code.disabledDark }}
    p Error - Dark
    .module.inverted
      div(style="padding: 20px 20px 20px 0px;width:225px;")
        z-input(placeholder="The Evil Rabbit" v-model="valueErrorDark" error dark)
      p.show-hide-code(@click="hiddenErrorDark = !hiddenErrorDark") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenErrorDark")
          .relative
            p.copy(@click="copy(code.errorDark, $el)") copy
            pre
              code.language-javascript {{ code.errorDark }}
    p Icon - Dark
    .module.inverted
      div(style="padding: 20px 20px 20px 0px;width:258px;")
        z-input(placeholder="you@domain.com" v-model="valueFirstIconDark" icon="closed-email" dark)
      div(style="padding: 20px 20px 20px 0px;width:258px;")
        z-input(placeholder="you@domain.com" v-model="valueSecondIconDark" icon="closed-email" with-icon-right dark)
      p.show-hide-code(@click="hiddenIconDark = !hiddenIconDark") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenIconDark")
          .relative
            p.copy(@click="copy(code.iconDark, $el)") copy
            pre
              code.language-javascript {{ code.iconDark }}
    p Inline Label - Dark
    .module.inverted
      div(style="padding: 20px 20px 20px 0px;width:331.48px;")
        z-input(placeholder="zeit" v-model="valueFirstLabelDark" label="zeit.co/teams" dark)
      div(style="padding: 20px 20px 20px 0px;width:293.67px;")
        z-input(placeholder="zeit" v-model="valueSecondLabelDark" label=".now.sh" with-label-right dark)
      p.show-hide-code(@click="hiddenInlineLabelDark = !hiddenInlineLabelDark") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenInlineLabelDark")
          .relative
            p.copy(@click="copy(code.inlineLabelDark, $el)") copy
            pre
              code.language-javascript {{ code.inlineLabelDark }}
    p Props
    .module
      z-table(:headers="headers" :items="items")
    p Events
    .module
      z-table(:headers="headersEvents" :items="itemsEvents")
</template>
<script>
import code from '~/code/input'
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
    hiddenDisabled: true,
    hiddenError: true,
    hiddenIcon: true,
    hiddenInlineLabel: true,
    hiddenNormalDark: true,
    hiddenDisabledDark: true,
    hiddenErrorDark: true,
    hiddenIconDark: true,
    hiddenInlineLabelDark: true,
    headers,
    headersEvents,
    valueNormal: '',
    valueDisabled: '',
    valueError: 'The Good Rabbit',
    valueFirstIcon: '',
    valueSecondIcon: '',
    valueFirstLabel: 'zeit',
    valueSecondLabel: 'zeit',
    valueNormalDark: '',
    valueDisabledDark: '',
    valueErrorDark: 'The Good Rabbit',
    valueFirstIconDark: '',
    valueSecondIconDark: '',
    valueFirstLabelDark: 'zeit',
    valueSecondLabelDark: 'zeit',
    itemsEvents: [
      {
        name: 'focus',
        description: 'Emit a focus event'
      },
      {
        name: 'blur',
        description: 'Emit a blur event'
      },
      {
        name: 'input',
        description: 'Emit an input event'
      }
    ],
    items: [
      {
        name: 'autoFocus',
        type: 'Boolean',
        required: 'false',
        default: 'false',
        description: 'Set autofocus to input'
      },
      {
        name: 'disabled',
        type: 'Boolean',
        required: 'false',
        default: 'false',
        description: 'Set input to disabled mode. Can\'t focus or type on it'
      },
      {
        name: 'error',
        type: 'Boolean',
        required: 'false',
        default: 'false',
        description: 'Set input to error mode. Add a red border and color'
      },
      {
        name: 'icon',
        type: 'String',
        required: 'false',
        default: 'false',
        description: 'Add a icon inside the input. Go to the icons tab to see all the icons name available'
      },
      {
        name: 'withIconRight',
        type: 'Boolean',
        required: 'false',
        default: 'false',
        description: 'Put icon to the right side. This must be used with the icon prop'
      },
      {
        name: 'inlineLabel',
        type: 'String',
        required: 'false',
        default: '\'\'',
        description: 'Add a label inside the input'
      },
      {
        name: 'withLabelRight',
        type: 'Boolean',
        required: 'false',
        default: 'false',
        description: 'Put label to the right side. This must be used with the inlineLabel prop'
      },
      {
        name: 'label',
        type: 'String',
        required: 'false',
        default: '\'\'',
        description: 'Add a label above the input'
      },
      {
        name: 'placeholder',
        type: 'String',
        required: 'false',
        default: '\'\'',
        description: 'Add a placeholder attribute inside the input'
      },
      {
        name: 'type',
        type: 'String',
        required: 'false',
        default: 'text',
        description: 'Set the type of the input, e.g. number'
      },
      {
        name: 'value',
        type: '[String, Number]',
        required: 'false',
        default: '\'\'',
        description: 'Value of the input. Can be used with a v-model as well'
      },
      {
        name: 'maxLength',
        type: '[String, Number]',
        required: 'false',
        default: 'null',
        description: 'Set the max-length attribute inside the input'
      },
      {
        name: 'dark',
        type: 'Boolean',
        required: 'false',
        default: 'false',
        description: 'Set input to dark mode'
      }
    ]
  })
}
</script>
