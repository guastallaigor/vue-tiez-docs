<template lang="pug">
  .header
    div
      header
        aside.nav-upper
          a.logo
            <svg width="43" height="38" viewBox="0 0 43 38" aria-label="geist"><g stroke="#000" fill="none" fill-rule="evenodd"><path d="M21 4l17 30H4L21 4z" stroke-dasharray="2,3"></path><rect fill="#FFF" x="17.5" y=".5" width="7" height="7" rx="3.5"></rect><rect fill="#FFF" x="35.5" y="30.5" width="7" height="7" rx="3.5"></rect><rect fill="#FFF" x=".5" y="30.5" width="7" height="7" rx="3.5"></rect></g></svg>
          .menu-arrow
        aside.nav-lower
          .desktop-only
            .nav.right
              div
                span.links
                  a Blog
                  a Support
                  a Docs
</template>

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
    margin 2px 10px
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
        width 36px
        height 31px
        position relative
        padding 3px 4px
        margin -3px -4px
        transition height 0.3s ease

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
