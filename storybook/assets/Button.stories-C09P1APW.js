import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{d as t}from"./iframe-Dy6lkJNO.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{i as r,n as i,t as a}from"./Button-CdWltPwh.js";var o,s,c,l,u;function d(){return(d=e((()=>{t(),r(),o=n(),s={title:`Components/Button`,component:a,tags:[`autodocs`],parameters:{design:{type:`figma`,url:`https://www.figma.com/design/ak0IV3s1bbMRn3lrWQGxyj/Copy-of-Customer-Facing-Design-System--Copy-?node-id=6132-13564`}},argTypes:{type:{control:{type:`select`},options:[`Primary Filled`,`Secondary Filled`,`Primary Outlined`,`Primary Link`,`Error Filled`,`White Outlined`]},state:{control:{type:`select`},options:[`Default`,`Hover`,`Pressed`,`Disabled`]},size:{control:{type:`select`},options:[`Regular`,`Small`]},leftIcon:{control:{type:`boolean`}},rightIcon:{control:{type:`boolean`}},disabled:{control:{type:`boolean`}}},args:{label:`Button`,type:`Primary Filled`,state:`Default`,size:`Regular`,leftIcon:!1,rightIcon:!1,disabled:!1}},c={render:e=>(0,o.jsx)(a,{...e})},l={render:()=>(0,o.jsx)(`div`,{style:{display:`grid`,gap:`16px`},children:i.map(e=>(0,o.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`},children:[(0,o.jsx)(a,{label:e.label,type:e.type,state:e.state,size:e.size,disabled:e.disabled,leftIcon:!0,rightIcon:!0}),(0,o.jsxs)(`span`,{style:{fontSize:12,color:`#666`},children:[e.type,` / `,e.state,` / `,e.size]})]},`${e.type}-${e.state}-${e.size}`))})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <Button {...args} />
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '16px'
  }}>
      {buttonVariants.map(variant => <div key={\`\${variant.type}-\${variant.state}-\${variant.size}\`} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }}>
          <Button label={variant.label} type={variant.type} state={variant.state} size={variant.size} disabled={variant.disabled} leftIcon rightIcon />
          <span style={{
        fontSize: 12,
        color: '#666'
      }}>{variant.type} / {variant.state} / {variant.size}</span>
        </div>)}
    </div>
}`,...l.parameters?.docs?.source}}},u=[`Playground`,`AllVariants`]})))()}d();export{l as AllVariants,c as Playground,u as __namedExportsOrder,s as default};