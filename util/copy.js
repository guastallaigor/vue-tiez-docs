import EventBus from '~/util/event-bus'

export default {
  methods: {
    copy(code, el) {
      this.copyToClipboard(code, el)
      EventBus.$emit('showToast')
    },
    copyToClipboard(code, el) {
      const fake = document.createElement('textarea')
      fake.value = code
      fake.setAttribute('readonly', '')
      Object.assign(fake.style, {
        position: 'absolute',
        left: '-9999px'
      })
      el.appendChild(fake)
      fake.select()
      document.execCommand('copy')
      el.removeChild(fake)
    }
  }
}
