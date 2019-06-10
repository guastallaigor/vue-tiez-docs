export default {
  normal: `\n
<div style="padding: 20px 20px 20px 0px;">
  <z-toggle :value="false" />
</div>`,
  checked: `
<div style="padding: 20px 20px 20px 0px;">
  <z-toggle :value="true" />
</div>`,
  disabled: `
<div style="padding: 20px 20px 20px 0px;">
  <z-toggle :value="false" disabled />
</div>`,
  normalDark: `
<div style="padding: 20px 20px 20px 0px;">
  <z-toggle :value="false" dark />
</div>`,
  checkedDark: `
<div style="padding: 20px 20px 20px 0px;">
  <z-toggle :value="true" dark />
</div>`,
  disabledDark: `
<div style="padding: 20px 20px 20px 0px;">
  <z-toggle :value="false" disabled dark />
</div>`
}
