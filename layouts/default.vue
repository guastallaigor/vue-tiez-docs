<template lang="pug">
  .default
    toolbar
    sidebar
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
