<template lang="pug">
  div(v-if="code")
    h2 Table
    p Example
    .module
      div(style="padding: 20px 0px;")
        z-table(:headers="headersExample" :items="itemsExample")
      p.show-hide-code(@click="hiddenExample = !hiddenExample") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenExample")
          .relative
            p.copy(@click="copy(code.example, $el)") copy
            pre
              code.language-javascript {{ code.example }}
    p Example - Dark
    .module.inverted
      div(style="padding: 20px 0px;")
        z-table(:headers="headersExample" :items="itemsExample" dark)
      p.show-hide-code(@click="hiddenExampleDark = !hiddenExampleDark") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenExampleDark")
          .relative
            p.copy(@click="copy(code.exampleDark, $el)") copy
            pre
              code.language-javascript {{ code.exampleDark }}
    p Props
    .module
      z-table(:headers="headers" :items="items")
    p Note
    .module
      p.black-text {{ note }}
</template>
<script>
import code from '~/code/table'
import { CollapseTransition } from 'vue2-transitions'
import copy from '~/util/copy'
import headers from '~/util/headers'

export default {
  components: { CollapseTransition },
  mixins: [copy],
  data: () => ({
    code,
    hiddenExample: true,
    hiddenExampleDark: true,
    note: 'You also have the <slot> option, then you don\'t need the items and headers prop',
    headersExample: [
      {
        name: '',
        key: 'img',
        image: true
      },
      {
        name: 'NAME',
        key: 'name'
      },
      {
        name: 'USERNAME',
        key: 'userName'
      }
    ],
    itemsExample: [
      {
        image: 'https://zeit.co/api/www/avatar/?u=evilrabbit&s=160',
        name: 'Evil Rabbit',
        userName: 'evilrabbit'
      },
      {
        image: 'https://zeit.co/api/www/avatar/?u=rauchg&s=160',
        name: 'Guilermo Rauch',
        userName: 'rauchg'
      }
    ],
    headers,
    items: [
      {
        name: 'headers',
        type: 'Array',
        required: 'false',
        default: '[]',
        description: 'Array of objects for the table header. Must have two attributes inside each object (name/key). This key property will bind the column to the respective header. If you have an image column, you should have an extra attribute called \'image\' and set it to true'
      },
      {
        name: 'items',
        type: 'Array',
        required: 'false',
        default: '[]',
        description: 'Array of objects for the table body'
      },
      {
        name: 'width',
        type: 'String',
        required: 'false',
        default: '100%',
        description: 'Set the table component width'
      },
      {
        name: 'dark',
        type: 'Boolean',
        required: 'false',
        default: 'false',
        description: 'Set table to dark mode'
      }
    ]
  })
}
</script>
