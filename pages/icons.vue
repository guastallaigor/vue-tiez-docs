<template lang="pug">
  div
    h2 Icons
    p Icons
      .normal-grid
        .module.pointer(
          v-for="(icon, idx) in icons" :key="idx" :title="icon"
          @click="copy(getIconCode(icon), $el)"
        )
          z-icon(:name="icon")
    p Brand Icons
      .normal-grid
        .module.pointer(
          v-for="(icon, idx) in brandIcons" :key="idx" :title="icon"
          @click="copy(getIconCode(icon), $el)"
        )
          z-icon(:name="icon")
    p Icons - Dark
      .normal-grid
        .module.inverted.pointer(
          v-for="(icon, idx) in icons" :key="idx" :title="icon"
          @click="copy(getIconCodeDark(icon), $el)"
        )
          z-icon(:name="icon" dark)
    p Brand Icons - Dark
      .normal-grid
        .module.inverted.pointer(
          v-for="(icon, idx) in brandIcons" :key="idx" :title="icon"
          @click="copy(getIconCodeDark(icon), $el)"
        )
          z-icon(:name="icon" dark)
    p Props
    .module
      z-table(:headers="headers" :items="items")
    p Note
    .module
      p.black-text You can click on top of an icon to copy the name
</template>
<script>
import { CollapseTransition } from 'vue2-transitions'
import copy from '~/util/copy'
import headers from '~/util/headers'
import { icons, brandIcons } from '~/util/icon-obj'

export default {
  components: { CollapseTransition },
  mixins: [copy],
  data: () => ({
    hiddenIcons: true,
    hiddenBrandIcons: true,
    headers,
    icons,
    brandIcons,
    items: [
      {
        name: 'name',
        type: 'String',
        required: 'true',
        default: 'null',
        description: 'Name of the icon'
      },
      {
        name: 'size',
        type: 'String',
        required: 'false',
        default: '20px',
        description: 'Size of the icon. Amount plus any valid CSS unit (px, em, rem)'
      },
      {
        name: 'dark',
        type: 'Boolean',
        required: 'false',
        default: 'false',
        description: 'Set icon to dark mode'
      }
    ]
  }),
  methods: {
    getIconCode(icon) {
      return `<z-icon name="${icon}"/>`
    },
    getIconCodeDark(icon) {
      return `<z-icon name="${icon}" dark/>`
    }
  }
}
</script>
