export default {
  default: `\n
<div style="padding: 20px 20px 20px 0px;">
  <z-note custom-label="NOTE" content="This is a note that details something important">
    <a href="#"><strong style="font-weight: 500;">A link to helpful information.</strong></a>
  </z-note>
</div>`,
  hint: `
<div style="padding: 20px 20px 20px 0px;">
  <z-note type="hint" content="This is a hint for something that is possible."/>
</div>`,
  alert: `
<div style="padding: 20px 20px 20px 0px;">
  <z-note type="alert" content="This is an alert for something to take action for."/>
</div>`,
  warning: `
<div style="padding: 20px 20px 20px 0px;">
  <z-note type="warning" content="This is a warning for something very important."/>
</div>`,
  noLabel: `
<div style="padding: 20px 20px 20px 0px;">
  <z-note content="Just a quick note!"/>
</div>`,
  customLabel: `
<div style="padding: 20px 20px 20px 0px;">
  <z-note content="This is a warning for something very important." custom-label="LABEL"/>
</div>
<div style="padding: 0px 20px 20px 0px;">
  <z-note type="warning" content="This is a warning for something very important." custom-label="LABEL"/>
</div>`,
  defaultDark: `
<div style="padding: 20px 20px 20px 0px;">
  <z-note custom-label="NOTE" content="This is a note that details something important" dark>
    <a href="#"><strong style="font-weight: 500;">A link to helpful information.</strong></a>
  </z-note>
</div>`,
  hintDark: `
<div style="padding: 20px 20px 20px 0px;">
  <z-note type="hint" content="This is a hint for something that is possible." dark/>
</div>`,
  alertDark: `
<div style="padding: 20px 20px 20px 0px;">
  <z-note type="alert" content="This is an alert for something to take action for." dark/>
</div>`,
  warningDark: `
<div style="padding: 20px 20px 20px 0px;">
  <z-note type="warning" content="This is a warning for something very important." dark/>
</div>`,
  noLabelDark: `
<div style="padding: 20px 20px 20px 0px;">
  <z-note content="Just a quick note!" dark/>
</div>`,
  customLabelDark: `
<div style="padding: 20px 20px 20px 0px;">
  <z-note content="This is a warning for something very important." custom-label="LABEL" dark/>
</div>
<div style="padding: 0px 20px 20px 0px;">
  <z-note type="warning" content="This is a warning for something very important." custom-label="LABEL" dark/>
</div>`
}
