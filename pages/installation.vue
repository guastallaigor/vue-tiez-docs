<template lang="pug">
  div
    h1 Installation
    h2 Install with npm or yarn
    .module(style="margin-bottom:30px")
      p.copy(@click="copy(code.npmYarn, $el)") copy
      pre
        code.bash {{ code.npmYarn }}
    h2 CDN
    .subtitle This is the links available in CDN, but you should install it via npm or yarn
    .module(style="margin-bottom:30px;margin-top:20px;")
      p.copy(@click="copy(code.cdn, $el)") copy
      pre
        code.bash {{ code.cdn }}
    h2 Usage
    .subtitle You can import in your application's main entry point file
    .module(style="margin-bottom:30px;margin-top:20px;")
      p.copy(@click="copy(code.normalUsage, $el)") copy
      pre
        code.bash {{ code.normalUsage }}
    .subtitle Or locally in any component
    .module(style="margin-bottom:30px;margin-top:20px;")
      p.copy(@click="copy(code.locallyUsage, $el)") copy
      pre
        code.bash {{ code.locallyUsage }}
    .subtitle You will also need to include the Vue Tiez CSS file
    .subtitle Simply include this CSS file in your index.html or import the actual SASS file or the minified CSS in your application's main entry point file
    .module(style="margin-bottom:30px;margin-top:20px;")
      p.copy(@click="copy(code.css, $el)") copy
      pre
        code.bash {{ code.css }}
    h2 Nuxt.js
    .subtitle You can import as a Nuxt.js plugin, just like normal Vue.js import
    .subtitle But then import it in your "nuxt.config.js" file
    .module(style="margin-top:20px;")
      p.copy(@click="copy(code.nuxt, $el)") copy
      pre
        code.bash {{ code.nuxt }}
</template>
<script>
import copy from '~/util/copy'

export default {
  mixins: [copy],
  data: () => ({
    code: {
      npmYarn: `
# Using npm
npm install vue-tiez --save

# Using yarn
yarn add vue-tiez
`,
      normalUsage: `
import Vue from 'vue'
import VueTiez from 'vue-tiez'

Vue.use(VueTiez)
`,
      locallyUsage: `
import { ZButton } from 'vue-tiez'

export default {
  components: {
    ZButton
  }
}`,
      css: `
import 'vue-tiez/css/vue-tiez.min.css'
`,
      nuxt: `
plugins: [
    '~/plugins/vue-tiez.js'
]`,
      cdn: `
<link href="https://unpkg.com/vue-tiez@^0.1.5/css/vue-tiez.min.css" rel="stylesheet">

<script src="https://unpkg.com/vue-tiez/vue-tiez.js"><\/script>
`
    }
  })
}
</script>
