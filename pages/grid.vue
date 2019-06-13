<template lang="pug">
  div
    h2 Grid
    not-found(title="Section not found" text="sections")
</template>

<script>
import NotFound from '~/components/NotFound'

export default {
  components: {
    NotFound
  }
}
</script>
