<template lang="pug">
  div(v-if="code")
    h2 Note
    p Default Note
    .module
      render-string(:string="code.default")
      p.show-hide-code(@click="hiddenDefault = !hiddenDefault") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenDefault")
          .relative
            p.copy(@click="copy(code.default, $el)") copy
            pre
              code.language-javascript {{ code.default }}
    p Hint Note
    .module
      render-string(:string="code.hint")
      p.show-hide-code(@click="hiddenHint = !hiddenHint") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenHint")
          .relative
            p.copy(@click="copy(code.hint, $el)") copy
            pre
              code.language-javascript {{ code.hint }}
    p Alert Note
    .module
      render-string(:string="code.alert")
      p.show-hide-code(@click="hiddenAlert = !hiddenAlert") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenAlert")
          .relative
            p.copy(@click="copy(code.alert, $el)") copy
            pre
              code.language-javascript {{ code.alert }}
    p Warning Note
    .module
      render-string(:string="code.warning")
      p.show-hide-code(@click="hiddenWarning = !hiddenWarning") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenWarning")
          .relative
            p.copy(@click="copy(code.warning, $el)") copy
            pre
              code.language-javascript {{ code.warning }}
    p Note with Hidden Label
    .module
      render-string(:string="code.noLabel")
      p.show-hide-code(@click="hiddenNoLabel = !hiddenNoLabel") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenNoLabel")
          .relative
            p.copy(@click="copy(code.noLabel, $el)") copy
            pre
              code.language-javascript {{ code.noLabel }}
    p Note with Custom Label
    .module
      render-string(:string="code.customLabel")
      p.show-hide-code(@click="hiddenCustomLabel = !hiddenCustomLabel") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenCustomLabel")
          .relative
            p.copy(@click="copy(code.customLabel, $el)") copy
            pre
              code.language-javascript {{ code.customLabel }}
    p Default Note - Dark
    .module.inverted
      render-string(:string="code.defaultDark")
      p.show-hide-code(@click="hiddenDefaultDark = !hiddenDefaultDark") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenDefaultDark")
          .relative
            p.copy(@click="copy(code.defaultDark, $el)") copy
            pre
              code.language-javascript {{ code.defaultDark }}
    p Hint Note - Dark
    .module.inverted
      render-string(:string="code.hintDark")
      p.show-hide-code(@click="hiddenHintDark = !hiddenHintDark") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenHintDark")
          .relative
            p.copy(@click="copy(code.hintDark, $el)") copy
            pre
              code.language-javascript {{ code.hintDark }}
    p Alert Note - Dark
    .module.inverted
      render-string(:string="code.alertDark")
      p.show-hide-code(@click="hiddenAlertDark = !hiddenAlertDark") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenAlertDark")
          .relative
            p.copy(@click="copy(code.alertDark, $el)") copy
            pre
              code.language-javascript {{ code.alertDark }}
    p Warning Note - Dark
    .module.inverted
      render-string(:string="code.warningDark")
      p.show-hide-code(@click="hiddenWarningDark = !hiddenWarningDark") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenWarningDark")
          .relative
            p.copy(@click="copy(code.warningDark, $el)") copy
            pre
              code.language-javascript {{ code.warningDark }}
    p Note with Hidden Label - Dark
    .module.inverted
      render-string(:string="code.noLabelDark")
      p.show-hide-code(@click="hiddenNoLabelDark = !hiddenNoLabelDark") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenNoLabelDark")
          .relative
            p.copy(@click="copy(code.noLabelDark, $el)") copy
            pre
              code.language-javascript {{ code.noLabelDark }}
    p Note with Custom Label - Dark
    .module.inverted
      render-string(:string="code.customLabelDark")
      p.show-hide-code(@click="hiddenCustomLabelDark = !hiddenCustomLabelDark") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenCustomLabelDark")
          .relative
            p.copy(@click="copy(code.customLabelDark, $el)") copy
            pre
              code.language-javascript {{ code.customLabelDark }}
    p Props
    .module
      z-table(:headers="headers" :items="items")
    p Note
    .module
      p.black-text {{ note }}
</template>

<script>
import code from '~/code/note'
import { CollapseTransition } from 'vue2-transitions'
import copy from '~/util/copy'
import headers from '~/util/headers'

export default {
  components: { CollapseTransition },
  mixins: [copy],
  data: () => ({
    code,
    hiddenDefault: true,
    hiddenHint: true,
    hiddenAlert: true,
    hiddenWarning: true,
    hiddenNoLabel: true,
    hiddenCustomLabel: true,
    hiddenDefaultDark: true,
    hiddenHintDark: true,
    hiddenAlertDark: true,
    hiddenWarningDark: true,
    hiddenNoLabelDark: true,
    hiddenCustomLabelDark: true,
    note: 'The default <slot> can be used to append any element below the content',
    headers,
    items: [
      {
        name: 'content',
        type: 'String',
        required: 'false',
        default: '\'\'',
        description: 'Note content. First line text string. Sufix of the type or the customLabel (if there\'s one)'
      },
      {
        name: 'type',
        type: 'String',
        required: 'false',
        default: '\'\'',
        description: 'Type of the note. It\'ll append the type as a title prefix, and change the border color. Valid types are: hint, alert, warning and \'\''
      },
      {
        name: 'customLabel',
        type: 'String',
        required: 'false',
        default: '\'\'',
        description: 'Set a custom label to note instead of the type prop. Has higher priority over type'
      },
      {
        name: 'dark',
        type: 'Boolean',
        required: 'false',
        default: 'false',
        description: 'Set note to dark mode'
      }
    ]
  })
}
</script>
