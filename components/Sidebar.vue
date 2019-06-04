<template lang="pug">
  .sidebar
    div
      .category.level-1
        .label Getting Started
        .posts
          .link
            .link-inside
              a(nuxt-link="/installation") Installation
          .link
            .link-inside
              a(nuxt-link="/configuration") Configuration
          .link
            .link-inside
              a(nuxt-link="/browser-support") Browser Support
          .link
            .link-inside
              a(nuxt-link="/contributors") Contributors
      .category.level-1
        .label Styles
        .posts
          .link
            .link-inside
              a(nuxt-link="/colors") Colors
          .link
            .link-inside
              a(nuxt-link="/headings") Headings
          .link
            .link-inside
              a(nuxt-link="/lists") Lists
          .link
            .link-inside
              a(nuxt-link="/paragraphs") Paragraphs
          .link
            .link-inside
              a(nuxt-link="/typeface") Typeface
      .category.level-1
        .label Components
        .posts
          .link
            .link-inside.selected
              a.selected(nuxt-link="/avatar") Avatar
          .link
            .link-inside
              a(nuxt-link="/badges") Badges
          .link
            .link-inside
              a(nuxt-link="/buttons") Buttons
          .link
            .link-inside
              a(nuxt-link="/checkbox") Checkbox
          .link
            .link-inside
              a(nuxt-link="/code") Code
          .link
            .link-inside
              a(nuxt-link="/collapse") Collapse
          .link
            .link-inside
              a(nuxt-link="/fieldsets") Fieldsets
          .link
            .link-inside
              a(nuxt-link="/file-tree") File Tree
          .link
            .link-inside
              a(nuxt-link="/icons") Icons
          .link
            .link-inside
              a(nuxt-link="/images") Images
          .link
            .link-inside
              a(nuxt-link="/inputs") Inputs
          .link
            .link-inside
              a(nuxt-link="/loading-dots") Loading Dots
          .link
            .link-inside
              a(nuxt-link="/note") Note
          .link
            .link-inside
              a(nuxt-link="/popover-menu") PopOver Menu
          .link
            .link-inside
              a(nuxt-link="/radio") Radio
          .link
            .link-inside
              a(nuxt-link="/scroller") Scroller
          .link
            .link-inside
              a(nuxt-link="/select") Select
          .link
            .link-inside
              a(nuxt-link="/show-more") Show More
          .link
            .link-inside
              a(nuxt-link="/sliders") Sliders
          .link
            .link-inside
              a(nuxt-link="/spinner") Spinner
          .link
            .link-inside
              a(nuxt-link="/table") Table
          .link
            .link-inside
              a(nuxt-link="/textarea") Textarea
          .link
            .link-inside
              a(nuxt-link="/toasts") Toasts
          .link
            .link-inside
              a(nuxt-link="/toggle") Toggle
          .link
            .link-inside
              a(nuxt-link="/video-cards") Video Cards
          .link
            .link-inside
              a(nuxt-link="/videos") Videos
</template>

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
        -webkit-tap-highlight-color rgba(0,0,0,0)
        &.selected
          text-decoration none
          font-size 14px
          color #000
          box-sizing border-box
          font-weight 600
</style>
