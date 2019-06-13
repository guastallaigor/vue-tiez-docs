<template lang="pug">
  div(v-if="code")
    h2 Buttons
    p Button - Primary
    .module
      render-string(:string="code.primary")
      p.show-hide-code(@click="hiddenPrimary = !hiddenPrimary") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenPrimary")
          .relative
            p.copy(@click="copy(code.primary, $el)") copy
            pre
              code.language-javascript {{ code.primary }}
    p Button - Secondary
    .module
      render-string(:string="code.secondary")
      p.show-hide-code(@click="hiddenSecondary = !hiddenSecondary") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenSecondary")
          .relative
            p.copy(@click="copy(code.secondary, $el)") copy
            pre
              code.language-javascript {{ code.secondary }}
    p Button - Disabled
    .module
      render-string(:string="code.disabled")
      p.show-hide-code(@click="hiddenDisabled = !hiddenDisabled") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenDisabled")
          .relative
            p.copy(@click="copy(code.disabled, $el)") copy
            pre
              code.language-javascript {{ code.disabled }}
    p Button - Loading
    .module
      render-string(:string="code.loading")
      p.show-hide-code(@click="hiddenLoading = !hiddenLoading") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenLoading")
          .relative
            p.copy(@click="copy(code.loading, $el)") copy
            pre
              code.language-javascript {{ code.loading }}
    p Button - Abort
    .module
      render-string(:string="code.abort")
      p.show-hide-code(@click="hiddenAbort = !hiddenAbort") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenAbort")
          .relative
            p.copy(@click="copy(code.abort, $el)") copy
            pre
              code.language-javascript {{ code.abort }}
    p Button - Warning
    .module
      render-string(:string="code.warning")
      p.show-hide-code(@click="hiddenWarning = !hiddenWarning") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenWarning")
          .relative
            p.copy(@click="copy(code.warning, $el)") copy
            pre
              code.language-javascript {{ code.warning }}
    p Button - Highlight
    .module
      render-string(:string="code.highlight")
      p.show-hide-code(@click="hiddenHighlight = !hiddenHighlight") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenHighlight")
          .relative
            p.copy(@click="copy(code.highlight, $el)") copy
            pre
              code.language-javascript {{ code.highlight }}
    p Button - Shadow
    .module
      render-string(:string="code.shadow")
      p.show-hide-code(@click="hiddenShadow = !hiddenShadow") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenShadow")
          .relative
            p.copy(@click="copy(code.shadow, $el)") copy
            pre
              code.language-javascript {{ code.shadow }}
    p Button - Link
    .module
      render-string(:string="code.link")
      p.show-hide-code(@click="hiddenLink = !hiddenLink") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenLink")
          .relative
            p.copy(@click="copy(code.link, $el)") copy
            pre
              code.language-javascript {{ code.link }}
    p Button With Icon
    .module
      render-string(:string="code.icon")
      p.show-hide-code(@click="hiddenIcon = !hiddenIcon") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenIcon")
          .relative
            p.copy(@click="copy(code.icon, $el)") copy
            pre
              code.language-javascript {{ code.icon }}
    p Button - Primary - Dark
    .module.inverted
      render-string(:string="code.primaryDark")
      p.show-hide-code(@click="hiddenPrimaryDark = !hiddenPrimaryDark") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenPrimaryDark")
          .relative
            p.copy(@click="copy(code.primaryDark, $el)") copy
            pre
              code.language-javascript {{ code.primaryDark }}
    p Button - Secondary - Dark
    .module.inverted
      render-string(:string="code.secondaryDark")
      p.show-hide-code(@click="hiddenSecondaryDark = !hiddenSecondaryDark") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenSecondaryDark")
          .relative
            p.copy(@click="copy(code.secondaryDark, $el)") copy
            pre
              code.language-javascript {{ code.secondaryDark }}
    p Button - Disabled - Dark
    .module.inverted
      render-string(:string="code.disabledDark")
      p.show-hide-code(@click="hiddenDisabledDark = !hiddenDisabledDark") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenDisabledDark")
          .relative
            p.copy(@click="copy(code.disabledDark, $el)") copy
            pre
              code.language-javascript {{ code.disabledDark }}
    p Button - Loading - Dark
    .module.inverted
      render-string(:string="code.loadingDark")
      p.show-hide-code(@click="hiddenLoadingDark = !hiddenLoadingDark") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenLoadingDark")
          .relative
            p.copy(@click="copy(code.loadingDark, $el)") copy
            pre
              code.language-javascript {{ code.loadingDark }}
    p Button - Abort - Dark
    .module.inverted
      render-string(:string="code.abortDark")
      p.show-hide-code(@click="hiddenAbortDark = !hiddenAbortDark") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenAbortDark")
          .relative
            p.copy(@click="copy(code.abortDark, $el)") copy
            pre
              code.language-javascript {{ code.abortDark }}
    p Button - Warning - Dark
    .module.inverted
      render-string(:string="code.warningDark")
      p.show-hide-code(@click="hiddenWarningDark = !hiddenWarningDark") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenWarningDark")
          .relative
            p.copy(@click="copy(code.warningDark, $el)") copy
            pre
              code.language-javascript {{ code.warningDark }}
    p Button - Highlight - Dark
    .module.inverted
      render-string(:string="code.highlightDark")
      p.show-hide-code(@click="hiddenHighlightDark = !hiddenHighlightDark") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenHighlightDark")
          .relative
            p.copy(@click="copy(code.highlightDark, $el)") copy
            pre
              code.language-javascript {{ code.highlightDark }}
    p Button - Shadow - Dark
    .module.inverted
      render-string(:string="code.shadowDark")
      p.show-hide-code(@click="hiddenShadowDark = !hiddenShadowDark") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenShadowDark")
          .relative
            p.copy(@click="copy(code.shadowDark, $el)") copy
            pre
              code.language-javascript {{ code.shadowDark }}
    p Button With Icon - Dark
    .module.inverted
      render-string(:string="code.iconDark")
      p.show-hide-code(@click="hiddenIconDark = !hiddenIconDark") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenIconDark")
          .relative
            p.copy(@click="copy(code.iconDark, $el)") copy
            pre
              code.language-javascript {{ code.iconDark }}
    p Props
    .module
      z-table(:headers="headers" :items="items")
    p Events
    .module
      z-table(:headers="headersEvents" :items="itemsEvents")
</template>
<script>
import code from '~/code/button'
import { CollapseTransition } from 'vue2-transitions'
import copy from '~/util/copy'
import headers from '~/util/headers'
import headersEvents from '~/util/headers-events'

export default {
  components: { CollapseTransition },
  mixins: [copy],
  data: () => ({
    code,
    hiddenPrimary: true,
    hiddenSecondary: true,
    hiddenDisabled: true,
    hiddenLoading: true,
    hiddenAbort: true,
    hiddenWarning: true,
    hiddenHighlight: true,
    hiddenShadow: true,
    hiddenLink: true,
    hiddenIcon: true,
    hiddenPrimaryDark: true,
    hiddenSecondaryDark: true,
    hiddenDisabledDark: true,
    hiddenLoadingDark: true,
    hiddenAbortDark: true,
    hiddenWarningDark: true,
    hiddenHighlightDark: true,
    hiddenShadowDark: true,
    hiddenLinkDark: true,
    hiddenIconDark: true,
    headers,
    headersEvents,
    itemsEvents: [
      {
        name: 'click',
        description: 'Emit a click event'
      }
    ],
    items: [
      {
        name: 'content',
        type: 'String',
        required: 'false',
        default: '\'\'',
        description: 'Buttons content. You can use this or pass it as a <slot>'
      },
      {
        name: 'icon',
        type: 'String',
        required: 'false',
        default: '\'\'',
        description: 'Add a icon inside the button. Go to the icons tab to see all the icons name available'
      },
      {
        name: 'withIconRight',
        type: 'Boolean',
        required: 'false',
        default: 'false',
        description: 'Put icon to the right side. This must be used with the icon prop'
      },
      {
        name: 'disabled',
        type: 'Boolean',
        required: 'false',
        default: 'false',
        description: 'Set button to a disabled state'
      },
      {
        name: 'small',
        type: 'Boolean',
        required: 'false',
        default: 'false',
        description: 'The button will have a smaller size'
      },
      {
        name: 'loading',
        type: 'Boolean',
        required: 'false',
        default: 'false',
        description: 'Set button to a loading state'
      },
      {
        name: 'active',
        type: 'Boolean',
        required: 'false',
        default: 'false',
        description: 'Set button to a active state'
      },
      {
        name: 'active',
        type: 'Boolean',
        required: 'false',
        default: 'false',
        description: 'Set button dark mode'
      },
      {
        name: 'shadow',
        type: 'Boolean',
        required: 'false',
        default: 'false',
        description: 'Add a buttons shadow and different hover style'
      },
      {
        name: 'type',
        type: 'String',
        required: 'false',
        default: 'primary',
        description: 'Type of the button. Valid types are: primary, secondary, warning, highlight, link and abort'
      }
    ]
  })
}
</script>
