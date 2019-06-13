<template lang="pug">
  div
    h2 Colors
    .wrapper
      .subtitle Primary — Black & White
    .container-block(
      v-for="itemPrimary in colorsPrimary"
      :key="itemPrimary.name"
      @click="copyTimeout(itemPrimary, $el)"
    )
      .proof(
        :style="{background: itemPrimary.name, color: itemPrimary.color}"
      ) {{ itemPrimary.copied ? 'Copied!' : itemPrimary.name }}
    .wrapper
      .subtitle Secondary — Blue, Magenta, Orange, Yellow & Green
    template(v-for="itemSecondary in colorsSecondary")
      .container-block(
        :key="itemSecondary.name"
        @click="copyTimeout(itemSecondary, $el)"
      )
        .proof(
          :style="{background: itemSecondary.name, color: itemSecondary.color}"
        ) {{ itemSecondary.copied ? 'Copied!' : itemSecondary.name }}
      br(v-if="itemSecondary.name === '#FAFBFC' || itemSecondary.name === '#FF0080' || itemSecondary.name === '#F8E71C' || itemSecondary.name === '#79FFE1'")
    .wrapper
      .subtitle Accents — Gray
    .container-block(
      v-for="itemAccent in colorsAccents"
      :key="itemAccent.name"
      @click="copyTimeout(itemAccent, $el)"
    )
      br(v-if="itemAccent.name === '#333333'")
      .proof(
        :style="{background: itemAccent.name, color: itemAccent.color}"
      ) {{ itemAccent.copied ? 'Copied!' : itemAccent.name }}
</template>

<script>
import copy from '~/util/copy'

export default {
  mixins: [copy],
  data: () => ({
    colorsAccents: [
      {
        color: '#000',
        name: '#FAFAFA',
        copied: false
      },
      {
        color: '#000',
        name: '#EAEAEA',
        copied: false
      },
      {
        color: '#000',
        name: '#999999',
        copied: false
      },
      {
        color: '#FFF',
        name: '#888888',
        copied: false
      },
      {
        color: '#FFF',
        name: '#666666',
        copied: false
      },
      {
        color: '#FFF',
        name: '#444444',
        copied: false
      },
      {
        color: '#FFF',
        name: '#333333',
        copied: false
      },
      {
        color: '#FFF',
        name: '#111111',
        copied: false
      }
    ],
    colorsSecondary: [
      {
        color: '#FFF',
        name: '#0076FF',
        copied: false
      },
      {
        color: '#000',
        name: '#FAFBFC',
        copied: false
      },
      {
        color: '#FFF',
        name: '#D400FF',
        copied: false
      },
      {
        color: '#FFF',
        name: '#FF0000',
        copied: false
      },
      {
        color: '#FFF',
        name: '#FF0080',
        copied: false
      },
      {
        color: '#FFF',
        name: '#D9931E',
        copied: false
      },
      {
        color: '#FFF',
        name: '#F5A623',
        copied: false
      },
      {
        color: '#000',
        name: '#F8E71C',
        copied: false
      },
      {
        color: '#FFF',
        name: '#50E3C2',
        copied: false
      },
      {
        color: '#000',
        name: '#79FFE1',
        copied: false
      },
      {
        color: '#FFF',
        name: '#2CBE4E',
        copied: false
      },
      {
        color: '#FFF',
        name: '#028265',
        copied: false
      }
    ],
    colorsPrimary: [
      {
        color: '#FFF',
        name: '#000000',
        copied: false
      },
      {
        color: '#000',
        name: '#FFFFFF',
        copied: false
      }
    ],
    timeout: null
  }),
  methods: {
    copyTimeout(item, $el) {
      item.copied = true
      this.copyToClipboard(item.name, $el)
      this.timeout = setTimeout(() => {
        item.copied = false
        clearTimeout(this.timeout)
      }, 1100)
    }
  }
}
</script>

<style lang="stylus">
.proof
  color: white;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 79px;
  width: 79px;
  background: rgb(0, 0, 0);
  border-width: initial;
  border-style: initial;
  border-color: transparent;
  border-image: initial;
  border-radius: 3px;
</style>
