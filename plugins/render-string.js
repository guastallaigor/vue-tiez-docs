import Vue from 'vue'

Vue.component('render-string', {
  props: {
    string: {
      required: true,
      type: String
    }
  },
  render(h) {
    const render = {
      template: '<div>' + this.string + '</div>'
    }

    return h(render)
  }
})
