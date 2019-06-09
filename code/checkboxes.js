export default {
  normal: `\n
<div style="padding: 20px 20px 20px 0px;">
  <z-checkbox :value="false" />
</div>`,
  checked: `
<div style="padding: 20px 20px 20px 0px;">
  <z-checkbox :value="true" />
</div>`,
  disabled: `
<div style="padding: 20px 20px 20px 0px;">
  <z-checkbox :value="false" disabled />
</div>`,
  checkedDisabled: `
<div style="padding: 20px 20px 20px 0px;">
  <z-checkbox :value="true" disabled />
</div>`,
  normalDark: `
<div style="padding: 20px 20px 20px 0px;">
  <z-checkbox :value="false" dark />
</div>`,
  checkedDark: `
<div style="padding: 20px 20px 20px 0px;">
  <z-checkbox :value="true" dark />
</div>`,
  disabledDark: `
<div style="padding: 20px 20px 20px 0px;">
  <z-checkbox :value="false" disabled dark />
</div>`,
  checkedDisabledDark: `
<div style="padding: 20px 20px 20px 0px;">
  <z-checkbox :value="true" disabled dark />
</div>`
}
