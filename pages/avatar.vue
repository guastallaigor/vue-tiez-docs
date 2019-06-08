<template lang="pug">
  div(v-if="code")
    h2 Avatar
    p Avatars
    .module
      render-string(:string="code.avatars")
      p.show-hide-code(@click="hiddenAvatars = !hiddenAvatars") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenAvatars")
          .relative
            p.copy(@click="copy(code.avatars, $el)") copy
            pre
              code.language-javascript {{ code.avatars }}
    p Stacked Avatars
    .module
      render-string(:string="code.stackedAvatars")
      p.show-hide-code(@click="hiddenStackedAvatars = !hiddenStackedAvatars") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenStackedAvatars")
          .relative
            p.copy(@click="copy(code.stackedAvatars, $el)") copy
            pre(:class="{hidden: hiddenStackedAvatars}")
              code.language-javascript {{ code.stackedAvatars }}
    p Avatars - Dark
    .module.inverted
      render-string(:string="code.avatarsDark")
      p.show-hide-code.is-dark(@click="hiddenAvatarsDark = !hiddenAvatarsDark") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenAvatarsDark")
          .relative
            p.copy(@click="copy(code.avatarsDark, $el)") copy
            pre(:class="{hidden: hiddenAvatarsDark}")
              code.language-javascript {{ code.avatarsDark }}
    p Stacked Avatars - Dark
    .module.inverted
      render-string(:string="code.stackedAvatarsDark")
      p.show-hide-code.is-dark(@click="hiddenStackedAvatarsDark = !hiddenStackedAvatarsDark") </>
      collapse-transition.width-transition
        .overflow(v-show="!hiddenStackedAvatarsDark")
          .relative
            p.copy(@click="copy(code.stackedAvatarsDark, $el)") copy
            pre(:class="{hidden: hiddenStackedAvatarsDark}")
              code.language-javascript {{ code.stackedAvatarsDark }}
    p Props
    .module
      z-table(:headers="headers" :items="items")
</template>

<script>
import code from '~/code/avatars'
import { CollapseTransition } from 'vue2-transitions'
import copy from '~/util/copy'

export default {
  components: { CollapseTransition },
  mixins: [copy],
  data: () => ({
    code,
    hiddenAvatars: true,
    hiddenStackedAvatars: true,
    hiddenAvatarsDark: true,
    hiddenStackedAvatarsDark: true,
    headers: [
      {
        name: 'Name',
        key: 'name'
      },
      {
        name: 'Type',
        key: 'type'
      },
      {
        name: 'Required',
        key: 'required'
      },
      {
        name: 'Default',
        key: 'default'
      },
      {
        name: 'Description',
        key: 'description'
      }
    ],
    items: [
      {
        name: 'src',
        type: 'String',
        required: 'false',
        default: 'null',
        description: 'Image source'
      },
      {
        name: 'alt',
        type: 'String',
        required: 'false',
        default: '\'\'',
        description: 'Image alt attribute'
      },
      {
        name: 'size',
        type: 'String',
        required: 'false',
        default: '\'\'',
        description: 'Size of the image. Valid sizes are: small, medium, large or \'\''
      }
    ]
  })
}
</script>

<style lang="stylus" scoped>
.number-aside
  font-size 14px
  display inline-flex
  padding-left 5px
  justify-content flex-end
  margin-right auto
  color #000

.inverted
  .number-aside
    color #fff
</style>
