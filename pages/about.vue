<template lang="pug">
  div
    h1 About
    .wrapper
      .subtitle Created by &nbsp;
        a.is-doc-link(href="https://github.com/guastallaigor") @guastallaigor
    .wrapper
      .subtitle Vue Tiez is under the &nbsp;
        a.is-doc-link(href="https://github.com/guastallaigor/vue-tiez/blob/master/LICENSE") MIT
        | &nbsp; license
    .wrapper
      .subtitle This is an unofficial project
    .wrapper
      .subtitle I do not work or am I affiliated with ZEIT
    .wrapper
      .subtitle Any problems regarding copyright infringements will be prioritized
    .wrapper
      .subtitle You can open an issue, message me in my twitter &nbsp;
        a.is-doc-link(href="https://twitter.com/guastallaigor") @guastallaigor
        | &nbsp; or email me at &nbsp;
        a.is-doc-link(href="mailto:limaguastallaigor@gmail.com") limaguastallaigor@gmail.com
    .wrapper(style="margin-top:20px;")
      .subtitle If you like Vue Tiez, consider giving it a star!
      github-button(href="https://github.com/guastallaigor/vue-tiez" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star guastallaigor/vue-tiez on GitHub") Star
</template>

<script>
import GithubButton from 'vue-github-button'

export default {
  components: {
    GithubButton
  }
}
</script>
