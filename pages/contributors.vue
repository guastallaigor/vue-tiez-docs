<template lang="pug">
  div
    h1 Contributors
    .wrapper
      .subtitle Thank you to all the people who already contributed to Vue Tiez!
    z-spinner.is-loading-contributor(v-if="loading" size="80px")
    div(v-else)
      template(v-for="user in contributors")
        a.contributor(:key="user" :href="user.html_url" target="_blank")
          img(:src="user.avatar_url + '&size=64'" :alt="'Contributor ' + user.login")
          .subtitle {{ user.login }}
    .wrapper
      .subtitle If you're interested in contributing to Vue Tiez, checkout our &nbsp;
        a.is-doc-link(href="https://github.com/guastallaigor/vue-tiez/blob/master/.github/CONTRIBUTING.md") contributing docs
        | &nbsp; for more information
</template>

<script>
export default {
  data: () => ({
    contributors: [],
    loading: true
  }),
  created() {
    this.getContributors()
  },
  methods: {
    async getContributors() {
      const response = await fetch('https://api.github.com/repos/guastallaigor/vue-tiez/contributors?per_page=100')
      const data = await response.json()
      this.contributors = data
      this.loading = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.contributor
  display inline-block
  margin 1rem
  text-align center
  text-decoration none
  transition all .4s

.contributor > p
  margin .5rem
  font-size 12px

.contributor img
  display inline-block
  border-radius 50px
  width 64px
  height 64px

.contributor:hover
  text-decoration none
  opacity 0.7

.is-loading-contributor
  margin-top 20px
  margin-left 20px
</style>
