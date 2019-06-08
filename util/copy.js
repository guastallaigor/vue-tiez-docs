export default {
  methods: {
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
