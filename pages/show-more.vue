<template lang="pug">
  div(v-if="code")
    h2 Show More
    p Show More Toggle
    .module
      render-string(:string="code.showMore")
      p.show-hide-code(@click="hiddenShowMore = !hiddenShowMore") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenShowMore")
          .relative
            p.copy(@click="copy(code.showMore, $el)") copy
            pre
              code.language-javascript {{ code.showMore }}
    p Show More Toggle - Dark
    .module.inverted
      render-string(:string="code.showMoreDark")
      p.show-hide-code(@click="hiddenShowMoreDark = !hiddenShowMoreDark") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenShowMoreDark")
          .relative
            p.copy(@click="copy(code.showMoreDark, $el)") copy
            pre
              code.language-javascript {{ code.showMoreDark }}
    p Props
    .module
      z-table(:headers="headers" :items="items")
    p Events
    .module
      z-table(:headers="headersEvents" :items="itemsEvents")
</template>
<script>
import code from '~/code/show-more'
import { CollapseTransition } from 'vue2-transitions'
import copy from '~/util/copy'
import headers from '~/util/headers'
import headersEvents from '~/util/headers-events'

export default {
  components: { CollapseTransition },
  mixins: [copy],
  data: () => ({
    code,
    hiddenShowMore: true,
    hiddenShowMoreDark: true,
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
        name: 'more',
        type: 'Boolean',
        required: 'false',
        default: 'false',
        description: 'If true then change the text to \'Show more\', otherwise it will be \'Show less\''
      },
      {
        name: 'dark',
        type: 'Boolean',
        required: 'false',
        default: 'false',
        description: 'Set show more toggle to dark mode'
      }
    ]
  })
}
</script>
