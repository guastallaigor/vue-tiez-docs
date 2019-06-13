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
</div>`,
  icon: `
<div style="padding: 20px 20px 20px 0px;width:258px;">
  <z-input placeholder="you@domain.com" v-model="valueFirstIcon" icon="closed-email"/>
</div>
<div style="padding: 20px 20px 20px 0px;width:258px;">
  <z-input placeholder="you@domain.com" v-model="valueSecondIcon" icon="closed-email" with-icon-right/>
</div>`,
  inlineLabel: `
<div style="padding: 20px 20px 20px 0px;width:331.48px;">
  <z-input placeholder="zeit" v-model="valueFirstLabel" label="zeit.co/teams"/>
</div>
<div style="padding: 20px 20px 20px 0px;width:293.67px;">
  <z-input placeholder="you@domain.com" v-model="valueSecondLabel" label=".now.sh" with-label-right/>
</div>`,
  normalDark: `
<div style="padding: 20px 20px 20px 0px;width:225px;">
  <z-input placeholder="The Evil Rabbit" v-model="value" :max-length="15" dark/>
</div>`,
  disabledDark: `
<div style="padding: 20px 20px 20px 0px;width:225px;">
  <z-input placeholder="The Evil Rabbit" v-model="value" :max-length="15" disabled dark/>
</div>`,
  errorDark: `
<div style="padding: 20px 20px 20px 0px;width:225px;">
  <z-input placeholder="The Evil Rabbit" v-model="value" :max-length="15" error dark/>
</div>`,
  iconDark: `
<div style="padding: 20px 20px 20px 0px;width:258px;">
  <z-input placeholder="you@domain.com" v-model="valueFirstIcon" icon="closed-email" dark/>
</div>
<div style="padding: 20px 20px 20px 0px;width:258px;">
  <z-input placeholder="you@domain.com" v-model="valueSecondIcon" icon="closed-email" with-icon-right dark/>
</div>`,
  inlineLabelDark: `
<div style="padding: 20px 20px 20px 0px;width:331.48px;">
  <z-input placeholder="zeit" v-model="valueFirstLabel" label="zeit.co/teams" dark/>
</div>
<div style="padding: 20px 20px 20px 0px;width:293.67px;">
  <z-input placeholder="you@domain.com" v-model="valueSecondLabel" label=".now.sh" with-label-right dark/>
</div>`
}
