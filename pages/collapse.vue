<template lang="pug">
  div(v-if="code")
    h2 Collapse
    p Collapsible Group
    .module
      div(style="padding: 20px 0px;")
        z-collapse(:items="contents")
      p.show-hide-code(@click="hiddenGroup = !hiddenGroup") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenGroup")
          .relative
            p.copy(@click="copy(code.group, $el)") copy
            pre
              code.language-javascript {{ code.group }}
    p Collapsible Group with Expanded Item
    .module
      div(style="padding: 20px 0px;")
        z-collapse(:items="contents2")
      p.show-hide-code(@click="hiddenGroupItem = !hiddenGroupItem") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenGroupItem")
          .relative
            p.copy(@click="copy(code.groupItem, $el)") copy
            pre
              code.language-javascript {{ code.groupItem }}
    p Collapsible Group - Dark
    .module.inverted
      div(style="padding: 20px 0px;")
        z-collapse(:items="contents" dark)
      p.show-hide-code(@click="hiddenGroupDark = !hiddenGroupDark") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenGroupDark")
          .relative
            p.copy(@click="copy(code.groupDark, $el)") copy
            pre
              code.language-javascript {{ code.groupDark }}
    p Collapsible Group with Expanded Item - Dark
    .module.inverted
      div(style="padding: 20px 0px;")
        z-collapse(:items="contents2" dark)
      p.show-hide-code(@click="hiddenGroupItemDark = !hiddenGroupItemDark") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenGroupItemDark")
          .relative
            p.copy(@click="copy(code.groupItemDark, $el)") copy
            pre
              code.language-javascript {{ code.groupItemDark }}
    p Props
    .module
      z-table(:headers="headers" :items="items")
    p Events
    .module
      z-table(:headers="headersEvents" :items="itemsEvents")
</template>
<script>
import code from '~/code/collapse'
import { CollapseTransition } from 'vue2-transitions'
import copy from '~/util/copy'
import headers from '~/util/headers'
import headersEvents from '~/util/headers-events'

export default {
  components: { CollapseTransition },
  mixins: [copy],
  data: () => ({
    code,
    hiddenGroup: true,
    hiddenGroupItem: true,
    hiddenGroupDark: true,
    hiddenGroupItemDark: true,
    contents: [
      {
        title: 'Question A',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        title: 'Question B',
        content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      }
    ],
    contents2: [
      {
        title: 'Question A',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      },
      {
        title: 'Question B',
        content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
    ],
    headers,
    headersEvents,
    itemsEvents: [
      {
        name: 'click',
        description: 'Expand and collapse the content'
      }
    ],
    items: [
      {
        name: 'items',
        type: 'Array',
        required: 'true',
        default: 'null',
        description: 'Array of objects. Must have at least two attributes inside each object (title/content)'
      },
      {
        name: 'maxWidth',
        type: 'String',
        required: 'false',
        default: '600px',
        description: 'Set the collapse component max-width'
      },
      {
        name: 'contentAttr',
        type: 'String',
        required: 'false',
        default: 'content',
        description: 'Name of the content attribute inside each items object'
      },
      {
        name: 'titleAttr',
        type: 'String',
        required: 'false',
        default: 'title',
        description: 'Name of the title attribute inside each items object'
      },
      {
        name: 'dark',
        type: 'Boolean',
        required: 'false',
        default: 'false',
        description: 'Set collapse to dark mode'
      }
    ]
  })
}
</script>
