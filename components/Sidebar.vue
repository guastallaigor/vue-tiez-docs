<template lang="pug">
  .sidebar
    div
      .category.level-1
        .label Getting Started
        .posts
          .link
            .link-inside(:class="isSelected('installation')")
              nuxt-link(
                to="/installation"
                :class="isSelected('installation')"
              ) Installation
          .link
            .link-inside(:class="isSelected('configuration')")
              nuxt-link(
                to="/configuration"
                :class="isSelected('configuration')"
              ) Configuration
          .link
            .link-inside(:class="isSelected('browser-support')")
              nuxt-link(
                to="/browser-support"
                :class="isSelected('browser-support')"
              ) Browser Support
          .link
            .link-inside(:class="isSelected('contributors')")
              nuxt-link(
                to="/contributors"
                :class="isSelected('contributors')"
              ) Contributors
      .category.level-1
        .label Styles
        .posts
          .link
            .link-inside(:class="isSelected('colors')")
              nuxt-link(
                to="/colors"
                :class="isSelected('colors')"
              ) Colors
          .link
            .link-inside(:class="isSelected('headings')")
              nuxt-link(
                to="/headings"
                :class="isSelected('headings')"
              ) Headings
          .link
            .link-inside(:class="isSelected('lists')")
              nuxt-link(
                to="/lists"
                :class="isSelected('lists')"
              ) Lists
          .link
            .link-inside(:class="isSelected('paragraphs')")
              nuxt-link(
                to="/paragraphs"
                :class="isSelected('paragraphs')"
              ) Paragraphs
          .link
            .link-inside(:class="isSelected('typeface')")
              nuxt-link(
                to="/typeface"
                :class="isSelected('typeface')"
              ) Typeface
      .category.level-1
        .label Components
        .posts
          .link
            .link-inside(:class="isSelected('avatar')")
              nuxt-link(
                to="/avatar"
                :class="isSelected('avatar')"
              ) Avatar
          .link
            .link-inside(:class="isSelected('badges')")
              nuxt-link(
                to="/badges"
                :class="isSelected('badges')"
              ) Badges
          .link
            .link-inside(:class="isSelected('buttons')")
              nuxt-link(
                to="/buttons"
                :class="isSelected('buttons')"
              ) Buttons
          .link
            .link-inside(:class="isSelected('checkbox')")
              nuxt-link(
                to="/checkbox"
                :class="isSelected('checkbox')"
              ) Checkbox
          .link
            .link-inside(:class="isSelected('code')")
              nuxt-link(
                to="/code"
                :class="isSelected('code')"
              ) Code
          .link
            .link-inside(:class="isSelected('collapse')")
              nuxt-link(
                to="/collapse"
                :class="isSelected('collapse')"
              ) Collapse
          .link
            .link-inside(:class="isSelected('fieldsets')")
              nuxt-link(
                to="/fieldsets"
                :class="isSelected('fieldsets')"
              ) Fieldsets
          .link
            .link-inside(:class="isSelected('file-tree')")
              nuxt-link(
                to="/file-tree"
                :class="isSelected('file-tree')"
              ) File Tree
          .link
            .link-inside(:class="isSelected('icons')")
              nuxt-link(
                to="/icons"
                :class="isSelected('icons')"
              ) Icons
          .link
            .link-inside(:class="isSelected('images')")
              nuxt-link(
                to="/images"
                :class="isSelected('images')"
              ) Images
          .link
            .link-inside(:class="isSelected('inputs')")
              nuxt-link(
                to="/inputs"
                :class="isSelected('inputs')"
              ) Inputs
          .link
            .link-inside(:class="isSelected('loading-dots')")
              nuxt-link(
                to="/loading-dots"
                :class="isSelected('loading-dots')"
              ) Loading Dots
          .link
            .link-inside(:class="isSelected('note')")
              nuxt-link(
                to="/note"
                :class="isSelected('note')"
              ) Note
          .link
            .link-inside(:class="isSelected('popover-menu')")
              nuxt-link(
                to="/popover-menu"
                :class="isSelected('popover-menu')"
              ) PopOver Menu
          .link
            .link-inside(:class="isSelected('radio')")
              nuxt-link(
                to="/radio"
                :class="isSelected('radio')"
              ) Radio
          .link
            .link-inside(:class="isSelected('scroller')")
              nuxt-link(
                to="/scroller"
                :class="isSelected('scroller')"
              ) Scroller
          .link
            .link-inside(:class="isSelected('select')")
              nuxt-link(
                to="/select"
                :class="isSelected('select')"
              ) Select
          .link
            .link-inside(:class="isSelected('show-more')")
              nuxt-link(
                to="/show-more"
                :class="isSelected('show-more')"
              ) Show More
          .link
            .link-inside(:class="isSelected('sliders')")
              nuxt-link(
                to="/sliders"
                :class="isSelected('sliders')"
              ) Sliders
          .link
            .link-inside(:class="isSelected('spinner')")
              nuxt-link(
                to="/spinner"
                :class="isSelected('spinner')"
              ) Spinner
          .link
            .link-inside(:class="isSelected('table')")
              nuxt-link(
                to="/table"
                :class="isSelected('table')"
              ) Table
          .link
            .link-inside(:class="isSelected('textarea')")
              nuxt-link(
                to="/textarea"
                :class="isSelected('textarea')"
              ) Textarea
          .link
            .link-inside(:class="isSelected('toasts')")
              nuxt-link(
                to="/toasts"
                :class="isSelected('toasts')"
              ) Toasts
          .link
            .link-inside(:class="isSelected('toggle')")
              nuxt-link(
                to="/toggle"
                :class="isSelected('toggle')"
              ) Toggle
          .link
            .link-inside(:class="isSelected('video-cards')")
              nuxt-link(
                to="/video-cards"
                :class="isSelected('video-cards')"
              ) Video Cards
          .link
            .link-inside(:class="isSelected('videos')")
              nuxt-link(
                to="/videos"
                :class="isSelected('videos')"
              ) Videos
</template>

<script>
export default {
  name: 'Sidebar',
  methods: {
    isSelected(name) {
      return {
        selected: this.routeCheck(name)
      }
    },
    routeCheck(name) {
      return this.$route.name === name
    }
  }
}
</script>

<style lang="stylus">
.sidebar
  position fixed
  width 270px
  margin-top 0
  bottom 0
  left 0
  top 100px
  overflow auto

  .category.level-1
    margin 0 0 50px 0

  .label
    margin 0 0 15px 0
    font-size 13px
    text-transform uppercase
    letter-spacing 1.3px
    font-weight 400
    color #888
    cursor default
    &:not(.link)
      padding-left 30px
  .link
    margin 10px 0
    .link-inside
      padding 4px 10px 4px 30px
      &.selected
        border-left 4px solid black
        box-sizing border-box
        padding-left 26px
      a
        text-decoration none
        font-size 14px
        color #000
        box-sizing border-box
        -webkit-tap-highlight-color rgbnuxt-link(0,0,0,0)
        &.selected
          text-decoration none
          font-size 14px
          color #000
          box-sizing border-box
          font-weight 600
</style>
