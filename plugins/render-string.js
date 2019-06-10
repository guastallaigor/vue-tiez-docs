import Vue from 'vue'

Vue.component('render-string', {
  props: {
    string: {
      required: true,
      type: String
    },
    items: {
      required: false,
      type: Array
    }
  },
  render(h) {
    const render = {
      template: '<div>' + this.string + '</div>'
    }

    return h(render)
  }
})
