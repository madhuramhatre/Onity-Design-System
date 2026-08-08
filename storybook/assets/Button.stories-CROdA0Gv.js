import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{d as n}from"./iframe-CIW_sAV4.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";function i(e){let t=String(e??`Primary Filled`).trim().toLowerCase();return u[t]??`primary`}function a(e,t){if(t)return`disabled`;let n=String(e??`Default`).trim().toLowerCase();return n.includes(`hover`)?`hover`:n.includes(`pressed`)?`pressed`:`default`}function o(e){return String(e??`Regular`).trim().toLowerCase()===`small`?`small`:`regular`}function s({label:e=`Button`,type:t=`Primary Filled`,state:n=`Default`,size:r=`Regular`,leftIcon:s=!1,rightIcon:u=!1,disabled:f=!1,onClick:p,className:m=``}){let h=i(t),g=a(n,f),_=o(r),v=l[_===`small`?`Small`:`Regular`],y=f||g===`disabled`;return(0,c.jsxs)(`button`,{type:`button`,onClick:y?void 0:p,disabled:y,"aria-disabled":y,className:[`onity-button`,`onity-button--${h}`,`onity-button--${_}`,g==="default"?``:`onity-button--${g}`,m].filter(Boolean).join(` `),children:[s?(0,c.jsx)(d,{direction:`left`}):null,(0,c.jsx)(`span`,{className:`onity-button__label`,children:e}),u?(0,c.jsx)(d,{direction:`right`}):null,(0,c.jsx)(`style`,{children:`
        .onity-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: ${v.gap}px;
          min-height: ${v.minHeight}px;
          padding: ${v.paddingY}px ${v.paddingX}px;
          border: 1px solid transparent;
          border-radius: 6px;
          font-family: Arial, sans-serif;
          font-size: ${v.fontSize}px;
          font-weight: 700;
          line-height: 1.2;
          cursor: pointer;
          transition: transform 120ms ease, box-shadow 120ms ease, background-color 120ms ease, color 120ms ease, border-color 120ms ease;
          white-space: nowrap;
          box-sizing: border-box;
        }

        .onity-button:hover {
          transform: translateY(-1px);
          box-shadow: 0 8px 20px rgba(56, 56, 56, 0.12);
        }

        .onity-button:active {
          transform: translateY(0);
          box-shadow: none;
        }

        .onity-button:disabled,
        .onity-button--disabled {
          cursor: not-allowed;
          opacity: 0.65;
          box-shadow: none;
        }

        .onity-button--primary {
          background-color: #2F20EF;
          color: #FFFFFF;
        }
        .onity-button--primary.onity-button--hover {
          background-color: #1d12d0;
          color: #FFFFFF;
        }
        .onity-button--primary.onity-button--pressed {
          background-color: #150cb8;
          color: #FFFFFF;
        }
        .onity-button--primary.onity-button--disabled {
          background-color: #E0E0E0;
          color: #939393;
        }

        .onity-button--secondary {
          background-color: #939393;
          color: #FFFFFF;
        }
        .onity-button--secondary.onity-button--hover {
          background-color: #7a7a7a;
          color: #FFFFFF;
        }
        .onity-button--secondary.onity-button--pressed {
          background-color: #616161;
          color: #FFFFFF;
        }
        .onity-button--secondary.onity-button--disabled {
          background-color: #E0E0E0;
          color: #939393;
        }

        .onity-button--outline {
          background-color: transparent;
          color: #2F20EF;
          border-color: #2F20EF;
        }
        .onity-button--outline.onity-button--hover {
          color: #1d12d0;
          border-color: #1d12d0;
        }
        .onity-button--outline.onity-button--pressed {
          color: #150cb8;
          border-color: #150cb8;
        }
        .onity-button--outline.onity-button--disabled {
          color: #939393;
          border-color: #939393;
        }

        .onity-button--link {
          background-color: transparent;
          border-color: transparent;
          color: #2F20EF;
          padding-left: 0;
          padding-right: 0;
          min-height: auto;
        }
        .onity-button--link.onity-button--hover {
          color: #1d12d0;
        }
        .onity-button--link.onity-button--pressed {
          color: #150cb8;
        }
        .onity-button--link.onity-button--disabled {
          color: #939393;
        }

        .onity-button--danger {
          background-color: #C7040E;
          color: #FFFFFF;
        }
        .onity-button--danger.onity-button--hover {
          background-color: #8D0209;
          color: #FFFFFF;
        }
        .onity-button--danger.onity-button--pressed {
          background-color: #C7040E;
          color: #FFFFFF;
        }
        .onity-button--danger.onity-button--disabled {
          background-color: #EDEDED;
          color: #6B6B6B;
        }

        .onity-button--white {
          background-color: transparent;
          color: #FFFFFF;
          border-color: #FFFFFF;
        }
        .onity-button--white.onity-button--hover {
          color: #E5E5E5;
          border-color: #E5E5E5;
        }
        .onity-button--white.onity-button--pressed {
          color: #FFFFFF;
          border-color: #FFFFFF;
        }
        .onity-button--white.onity-button--disabled {
          color: #D1D1D1;
          border-color: #D1D1D1;
        }

        .onity-button__icon {
          width: 16px;
          height: 16px;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.8;
          stroke-linecap: round;
          stroke-linejoin: round;
          flex-shrink: 0;
        }

        .onity-button__icon--left {
          transform: rotate(180deg);
        }
      `})]})}var c,l,u,d,f;function p(){return(p=e((()=>{n(),c=r(),l={Regular:{minHeight:40,paddingX:16,paddingY:10,fontSize:14,iconSize:16,gap:8},Small:{minHeight:32,paddingX:12,paddingY:8,fontSize:12,iconSize:12,gap:6}},u={"primary filled":`primary`,primary:`primary`,"secondary filled":`secondary`,secondary:`secondary`,"primary outlined":`outline`,outline:`outline`,"primary link":`link`,link:`link`,"error filled":`danger`,danger:`danger`,"white outlined":`white`,white:`white`},d=({direction:e=`right`})=>(0,c.jsxs)(`svg`,{viewBox:`0 0 24 24`,"aria-hidden":`true`,className:`onity-button__icon onity-button__icon--${e}`,children:[(0,c.jsx)(`path`,{d:`M7 17L17 7`}),(0,c.jsx)(`path`,{d:`M10 7h7v7`})]}),f=[{type:`Primary Filled`,state:`Default`,size:`Regular`,label:`Primary / Default / Regular`},{type:`Primary Filled`,state:`Hover`,size:`Regular`,label:`Primary / Hover / Regular`},{type:`Primary Filled`,state:`Pressed`,size:`Regular`,label:`Primary / Pressed / Regular`},{type:`Primary Filled`,state:`Disabled`,size:`Regular`,label:`Primary / Disabled / Regular`},{type:`Primary Filled`,state:`Default`,size:`Small`,label:`Primary / Default / Small`},{type:`Secondary Filled`,state:`Default`,size:`Regular`,label:`Secondary / Default / Regular`},{type:`Secondary Filled`,state:`Hover`,size:`Regular`,label:`Secondary / Hover / Regular`},{type:`Secondary Filled`,state:`Pressed`,size:`Regular`,label:`Secondary / Pressed / Regular`},{type:`Secondary Filled`,state:`Disabled`,size:`Regular`,label:`Secondary / Disabled / Regular`},{type:`Primary Outlined`,state:`Default`,size:`Regular`,label:`Outline / Default / Regular`},{type:`Primary Outlined`,state:`Hover`,size:`Regular`,label:`Outline / Hover / Regular`},{type:`Primary Outlined`,state:`Pressed`,size:`Regular`,label:`Outline / Pressed / Regular`},{type:`Primary Outlined`,state:`Disabled`,size:`Regular`,label:`Outline / Disabled / Regular`},{type:`Primary Link`,state:`Default`,size:`Regular`,label:`Link / Default / Regular`},{type:`Error Filled`,state:`Default`,size:`Regular`,label:`Danger / Default / Regular`},{type:`White Outlined`,state:`Default`,size:`Regular`,label:`White / Default / Regular`}],s.__docgenInfo={description:``,methods:[],displayName:`Button`,props:{label:{defaultValue:{value:`"Button"`,computed:!1},required:!1},type:{defaultValue:{value:`"Primary Filled"`,computed:!1},required:!1},state:{defaultValue:{value:`"Default"`,computed:!1},required:!1},size:{defaultValue:{value:`"Regular"`,computed:!1},required:!1},leftIcon:{defaultValue:{value:`false`,computed:!1},required:!1},rightIcon:{defaultValue:{value:`false`,computed:!1},required:!1},disabled:{defaultValue:{value:`false`,computed:!1},required:!1},className:{defaultValue:{value:`""`,computed:!1},required:!1}}}})))()}var m=t({AllVariants:()=>v,Playground:()=>_,__namedExportsOrder:()=>y,default:()=>g}),h,g,_,v,y;function b(){return(b=e((()=>{n(),p(),h=r(),g={title:`Components/Button`,component:s,parameters:{design:{type:`figma`,url:`https://www.figma.com/design/ak0IV3s1bbMRn3lrWQGxyj/Copy-of-Customer-Facing-Design-System--Copy-?node-id=6132-13564`}},argTypes:{type:{control:{type:`select`},options:[`Primary Filled`,`Secondary Filled`,`Primary Outlined`,`Primary Link`,`Error Filled`,`White Outlined`]},state:{control:{type:`select`},options:[`Default`,`Hover`,`Pressed`,`Disabled`]},size:{control:{type:`select`},options:[`Regular`,`Small`]},leftIcon:{control:{type:`boolean`}},rightIcon:{control:{type:`boolean`}},disabled:{control:{type:`boolean`}}},args:{label:`Button`,type:`Primary Filled`,state:`Default`,size:`Regular`,leftIcon:!1,rightIcon:!1,disabled:!1}},_={render:e=>(0,h.jsxs)(`div`,{style:{display:`flex`,gap:`16px`,flexWrap:`wrap`,padding:`24px`},children:[(0,h.jsx)(s,{...e}),(0,h.jsx)(s,{...e,leftIcon:!0,rightIcon:!0})]})},v={render:()=>(0,h.jsx)(`div`,{style:{display:`grid`,gap:`16px`,padding:`24px`},children:f.map(e=>(0,h.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`,minHeight:`44px`},children:[(0,h.jsx)(s,{label:e.label,type:e.type,state:e.state,size:e.size,leftIcon:!0,rightIcon:!0,disabled:e.state===`Disabled`}),(0,h.jsxs)(`span`,{style:{fontSize:12,color:`#666`},children:[e.type,` / `,e.state,` / `,e.size]})]},`${e.type}-${e.state}-${e.size}`))})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    padding: '24px'
  }}>\r
      <Button {...args} />\r
      <Button {...args} leftIcon rightIcon />\r
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: '16px',
    padding: '24px'
  }}>\r
      {buttonVariants.map(variant => <div key={\`\${variant.type}-\${variant.state}-\${variant.size}\`} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      minHeight: '44px'
    }}>\r
          <Button label={variant.label} type={variant.type} state={variant.state} size={variant.size} leftIcon rightIcon disabled={variant.state === 'Disabled'} />\r
          <span style={{
        fontSize: 12,
        color: '#666'
      }}>{variant.type} / {variant.state} / {variant.size}</span>\r
        </div>)}\r
    </div>
}`,...v.parameters?.docs?.source}}},y=[`Playground`,`AllVariants`]})))()}export{b as n,m as t};