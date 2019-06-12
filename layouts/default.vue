<template lang="pug">
  .default.relative
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
    div
      .toast-area
        .toast-container(:class="{visible: toast}")
          .toast.success
            span.message Copied!
</template>

<script>
import Toolbar from '~/components/Toolbar'
import Sidebar from '~/components/Sidebar'
import EventBus from '~/util/event-bus'

export default {
  components: {
    Toolbar,
    Sidebar
  },
  data: () => ({
    toast: false
  }),
  created() {
    EventBus.$on('showToast', () => {
      this.showToast()
    })
  },
  beforeDestroy() {
    EventBus.$off('showToast')
    clearTimeout(this.timeout)
  },
  methods: {
    showToast() {
      this.toast = true
      this.timeout = setTimeout(() => {
        this.toast = false
      }, 5000)
    }
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
    max-width 840px
</style>

<style lang="stylus">
.toast-area
  position: fixed;
  bottom: 10px;
  right: 60px;
  max-width: 110px;
  z-index: 2000;
  transition: transform 0.4s ease 0s;

  .message
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    margin-top: -1px;
    overflow: hidden;

  .toast-container
    width: 110px;
    height: 72px;
    position: absolute;
    bottom: -10px;
    right: 0px;
    transform: translate3d(0px, 100%, 0px) scale(1);
    opacity: 1;
    transition: all 0.4s ease 0s;
    text-align center

    &.visible
      transform: translate3d(0px, 0px, 0px) scale(1);

    .toast
      width: 110px;
      color: black;
      height: 60px;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      justify-content: space-between;
      box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 9px;
      font-size: 14px;
      display: flex;
      background: white;
      border-width: 0px;
      border-style: initial;
      border-color: initial;
      border-image: initial;
      border-radius: 5px;
      padding: 0px 20px;

      &.success
        background-color: rgb(0, 118, 255);
        color: white;
        border-width: 0px;
        border-style: initial;
        border-color: initial;
        border-image: initial;
</style>
