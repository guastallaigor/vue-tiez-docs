export default {
  primary: `\n
<div style="padding: 20px 20px 10px 0px;">
  <z-button type="primary" @click="click">Action</z-button>
</div>
<div style="padding: 10px 20px 20px 0px;">
  <z-button type="primary" @click="click" small>Action</z-button>
</div>`,
  secondary: `
<div style="padding: 20px 20px 10px 0px;">
  <z-button type="secondary" @click="click">Action</z-button>
</div>
<div style="padding: 10px 20px 20px 0px;">
  <z-button type="secondary" @click="click" small>Action</z-button>
</div>`,
  disabled: `
<div style="padding: 20px 20px 10px 0px;">
  <z-button disabled @click="click">Action</z-button>
</div>
<div style="padding: 10px 20px 20px 0px;">
  <z-button disabled @click="click" small>Action</z-button>
</div>`,
  loading: `
<div style="padding: 20px 20px 10px 0px;">
  <z-button loading @click="click">Action</z-button>
</div>
<div style="padding: 10px 20px 20px 0px;">
  <z-button loading @click="click" small>Action</z-button>
</div>`,
  abort: `
<div style="padding: 20px 20px 10px 0px;">
  <z-button type="abort" @click="click">Abort</z-button>
</div>
<div style="padding: 10px 20px 20px 0px;">
  <z-button type="abort" @click="click" small>Abort</z-button>
</div>`,
  warning: `
<div style="padding: 20px 20px 10px 0px;">
  <z-button type="warning" @click="click">Action</z-button>
</div>
<div style="padding: 10px 20px 20px 0px;">
  <z-button type="warning" @click="click" small>Action</z-button>
</div>`,
  highlight: `
<div style="padding: 20px 20px 10px 0px;">
  <z-button type="highlight" @click="click">Action</z-button>
</div>
<div style="padding: 10px 20px 20px 0px;">
  <z-button type="highlight" @click="click" small>Action</z-button>
</div>`,
  shadow: `
<div style="padding: 20px 20px 10px 0px;">
  <z-button type="abort" shadow @click="click">Action</z-button>
</div>
<div style="padding: 10px 20px 20px 0px;">
  <z-button type="highlight" shadow @click="click">Action</z-button>
</div>
<div style="padding: 10px 20px 20px 0px;">
  <z-button loading shadow @click="click">Action</z-button>
</div>
<div style="padding: 10px 20px 20px 0px;">
  <z-button disabled shadow @click="click">Action</z-button>
</div>`,
  link: `
<div style="padding: 20px 20px 10px 0px;">
  <z-button type="link" @click="click">Action</z-button>
</div>
<div style="padding: 10px 20px 20px 0px;">
  <z-button type="link" disabled @click="click">Action</z-button>
</div>`,
  icon: `
<div style="padding: 20px 20px 10px 0px;">
  <z-button type="primary" icon="github" @click="click">Action</z-button>
</div>
<div style="padding: 10px 20px 20px 0px;">
  <z-button type="secondary" icon="github" @click="click">Action</z-button>
</div>
<div style="padding: 10px 20px 20px 0px;">
  <z-button type="secondary" disabled icon="github" @click="click">Action</z-button>
</div>
<div style="padding: 10px 20px 20px 0px;">
  <z-button type="warning" icon="github" @click="click">Action</z-button>
</div>
<div style="padding: 10px 20px 20px 0px;">
  <z-button type="highlight" icon="github" @click="click">Action</z-button>
</div>
<div style="padding: 10px 20px 20px 0px;">
  <z-button type="secondary" shadow icon="github" @click="click">Action</z-button>
</div>
<div style="padding: 10px 20px 20px 0px;">
  <z-button type="highlight" shadow icon="github" @click="click">Action</z-button>
</div>
<div style="padding: 10px 20px 20px 0px;">
  <z-button type="primary" icon="github" with-icon-right @click="click" content="Action"/>
</div>`,
  primaryDark: `
<div style="padding: 20px 20px 10px 0px;">
  <z-button type="primary" @click="click" dark>Action</z-button>
</div>
<div style="padding: 10px 20px 20px 0px;">
  <z-button type="primary" @click="click" small dark>Action</z-button>
</div>`,
  secondaryDark: `
<div style="padding: 20px 20px 10px 0px;">
  <z-button type="secondary" @click="click" dark>Action</z-button>
</div>
<div style="padding: 10px 20px 20px 0px;">
  <z-button type="secondary" @click="click" small dark>Action</z-button>
</div>`,
  disabledDark: `
<div style="padding: 20px 20px 10px 0px;">
  <z-button disabled @click="click" dark>Action</z-button>
</div>
<div style="padding: 10px 20px 20px 0px;">
  <z-button disabled @click="click" small dark>Action</z-button>
</div>`,
  loadingDark: `
<div style="padding: 20px 20px 10px 0px;">
  <z-button loading @click="click" dark>Action</z-button>
</div>
<div style="padding: 10px 20px 20px 0px;">
  <z-button loading @click="click" small dark>Action</z-button>
</div>`,
  abortDark: `
<div style="padding: 20px 20px 10px 0px;">
  <z-button type="abort" @click="click" dark>Abort</z-button>
</div>
<div style="padding: 10px 20px 20px 0px;">
  <z-button type="abort" @click="click" small dark>Abort</z-button>
</div>`,
  warningDark: `
<div style="padding: 20px 20px 10px 0px;">
  <z-button type="warning" @click="click" dark>Action</z-button>
</div>
<div style="padding: 10px 20px 20px 0px;">
  <z-button type="warning" @click="click" small dark>Action</z-button>
</div>`,
  highlightDark: `
<div style="padding: 20px 20px 10px 0px;">
  <z-button type="highlight" @click="click" dark>Action</z-button>
</div>
<div style="padding: 10px 20px 20px 0px;">
  <z-button type="highlight" @click="click" small dark>Action</z-button>
</div>`,
  shadowDark: `
<div style="padding: 20px 20px 10px 0px;">
  <z-button type="abort" shadow @click="click" dark>Action</z-button>
</div>
<div style="padding: 10px 20px 20px 0px;">
  <z-button type="highlight" shadow @click="click" dark>Action</z-button>
</div>
<div style="padding: 10px 20px 20px 0px;">
  <z-button loading shadow @click="click" dark>Action</z-button>
</div>
<div style="padding: 10px 20px 20px 0px;">
  <z-button disabled shadow @click="click" dark>Action</z-button>
</div>`,
  iconDark: `
<div style="padding: 20px 20px 10px 0px;">
  <z-button type="primary" icon="github" @click="click" dark>Action</z-button>
</div>
<div style="padding: 10px 20px 20px 0px;">
  <z-button type="secondary" icon="github" @click="click" dark>Action</z-button>
</div>
<div style="padding: 10px 20px 20px 0px;">
  <z-button type="secondary" disabled icon="github" @click="click" dark>Action</z-button>
</div>
<div style="padding: 10px 20px 20px 0px;">
  <z-button type="warning" icon="github" @click="click" dark>Action</z-button>
</div>
<div style="padding: 10px 20px 20px 0px;">
  <z-button type="highlight" icon="github" @click="click" dark>Action</z-button>
</div>
<div style="padding: 10px 20px 20px 0px;">
  <z-button type="secondary" shadow icon="github" @click="click" dark>Action</z-button>
</div>
<div style="padding: 10px 20px 20px 0px;">
  <z-button type="highlight" shadow icon="github" @click="click" dark>Action</z-button>
</div>
<div style="padding: 10px 20px 20px 0px;">
  <z-button type="primary" icon="github" with-icon-right @click="click" content="Action" dark/>
</div>`
}
