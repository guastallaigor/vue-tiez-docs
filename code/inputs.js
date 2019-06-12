export default {
  normal: `\n
<div style="padding: 20px 20px 20px 0px;width:225px;">
  <z-input placeholder="The Evil Rabbit" v-model="value" :max-length="15" />
</div>`,
  disabled: `
<div style="padding: 20px 20px 20px 0px;width:225px;">
  <z-input placeholder="The Evil Rabbit" v-model="value" :max-length="15" disabled/>
</div>`,
  error: `
<div style="padding: 20px 20px 20px 0px;width:225px;">
  <z-input placeholder="The Evil Rabbit" v-model="value" :max-length="15" error/>
</div>`
}
