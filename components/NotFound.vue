<template lang="pug">
  div
    h4 {{ title }} :(
    .wrapper
      .subtitle Unfortunately, Vue Tiez doesn't have yet all the {{ text }} from &nbsp;
        a.is-doc-link(href="https://zeit.co/design") ZEIT Design System
    .wrapper
      .subtitle If you're interested in contributing to Vue Tiez, checkout our &nbsp;
        a.is-doc-link(href="https://github.com/guastallaigor/vue-tiez/blob/master/.github/CONTRIBUTING.md") contributing docs
        | &nbsp; for more information
    .wrapper
      .subtitle Also, make sure to check our opened issues and PRs to see if the {{ text.replace(/s$/, '') }} is already made or under development
      .mt-20
        z-spinner.is-loading-contributor(v-if="loading" size="40px")
        div(v-show="!loading")
          github-button.mr-btn(href="https://github.com/guastallaigor/vue-tiez/issues" data-icon="octicon-issue-opened" data-size="large" data-show-count="true" aria-label="Issue guastallaigor/vue-tiez on GitHub") Issue
          github-button(href="https://github.com/guastallaigor/vue-tiez/fork" data-icon="octicon-repo-forked" data-size="large" data-show-count="true" aria-label="Fork guastallaigor/vue-tiez on GitHub") Fork
</template>

<script>
import GithubButton from 'vue-github-button'

export default {
  components: {
    GithubButton
  },
  props: {
    title: {
      type: String,
      default: 'Component not found'
    },
    text: {
      type: String,
      default: 'components'
    }
  },
  data: () => ({
    loading: true,
    timeout: null
  }),
  mounted() {
    this.timeout = setTimeout(() => {
      this.loading = false
      clearTimeout(this.timeout)
    }, 400)
  }
}
</script>

<style lang="stylus" scoped>
.mr-btn
  margin-right 20px

.mt-20
  margin-top 20px

.mt-20
  margin-top 20px
</style>
