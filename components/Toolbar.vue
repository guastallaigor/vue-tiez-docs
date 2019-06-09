<template lang="pug">
  .header
    div
      header
        aside.nav-upper
          a.logo
            logo
          .menu-arrow
        aside.nav-lower
          .desktop-only
            .nav.right
              div
                span.links
                  a(href="https://github.com/guastallaigor/vue-tiez")
                    z-icon(name="github")
                  nuxt-link(to="/") Home
</template>

<script>
import Logo from '~/static/img/logo-icon.svg'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="stylus">
.header
  position fixed
  top 0px
  left 0px
  right 0px
  z-index 1

  header
    justify-content space-between
    max-width 100%
    margin 0 10px
    width auto
    position relative
    transition height 0.3s ease
    @media (min-width: 951px)
      padding 10px 20px
      display flex
      flex-direction row
      align-items center
      height 80px

    .nav-upper
      display flex
      justify-content space-between
      align-items center
      transition padding 0.3s ease
      padding 20px 0

      a.logo
        display block
        position relative
        padding 3px 4px
        margin -3px -4px
        transition height 0.3s ease
        cursor pointer

        svg
          width 60px
          height 60px

      .menu-arrow
        display flex
        width 40px
        height 40px
        margin -9px
        align-items center
        justify-content center
        transition transform 0.2s ease
        fill #000
        @media (min-width: 951px)
          display none

    .nav-lower
      display none
      margin-bottom 30px
      width 100%
      @media (min-width: 951px)
        width auto
        display flex
        justify-content space-between
        align-items center
        margin -2px 0 0 10px
        background-color transparent

      .desktop-only
        display flex
        justify-content space-between
        align-items center
        width 100%
        visibility visible

        .nav
          display flex
          flex-direction column
          @media (min-width: 951px)
            display flex
            flex-direction row
            animation fade-in 0.2s ease
            align-items center
          &.right > div
            display flex
            align-items center

            .links
              display flex
              align-items center
              margin 0 9px

              a
                color #999
                font-size 14px
                text-decoration none
                padding 0 9px
                transition color 0.2s ease

        .right
          right 0

@keyframes fade-in
  0%
    opacity 0
  100%
      opacity 1
</style>
