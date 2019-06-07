<template lang="pug">
  .default
    toolbar
    sidebar
    div
      div.doc-layout
        div.topbar
          div
            div.arrow
              div.wrap(aria-label="open menu")
                div.line.top
                div.line.bottom
        div.content
          div.doc-markdown
            .main
              nuxt
</template>

<script>
import Toolbar from '~/components/Toolbar'
import Sidebar from '~/components/Sidebar'

export default {
  components: {
    Toolbar,
    Sidebar
  }
}
</script>

<style lang="stylus" scoped>
.doc-layout
  display flex
  margin 0 0 0px 270px
  justify-content left
  background #fafafa
  padding 100px 0 60px 100px
  min-height 100vh
  box-sizing border-box

  .topbar
    display none

    .arrow
      display flex
      align-items center
      justify-content center
      position absolute
      top 20px
      right 25px
      width 40px
      height 40px
      transition transform 0.2s ease
      z-index 102

      .wrap
        display flex
        flex-direction column
        justify-content center
        align-items center
        width 100%
        height 100%
        pointer-events none

        .line
          height 1px
          width 22px
          background-color #000
          transition transform 0.15s ease

          &:first-child
            transform translateY(-4px) rotate(0deg)

          &:last-child
            transform translateY(4px) rotate(0deg)

  .content
    flex 1
    max-width 600px
</style>
