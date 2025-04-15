import{P as e,j as i}from"./ui-components-form-Bk1A3duM.js";import{r as n,B as s,M as t,R as a,P as o,D as l,g as r,I as d,h as c,d as u,b as p,i as g,L as m,e as x}from"./vendor-gestalt-k6pdCueW.js";import{t as h}from"./app-constants-CVKmY58-.js";function b({items:e,id:a,accessibilityExpandLabel:o,accessibilityCollapseLabel:l,defaultExpandedIndices:r=[],onExpandedChange:d}){const[c,u]=n.useState(r);return i.jsx(s,{children:e.map(((e,n)=>{const r=c.includes(n);return i.jsx(s,{marginTop:2,marginBottom:2,children:i.jsx(t.Expandable,{id:`${a}-module-${n}`,accessibilityCollapseLabel:l,accessibilityExpandLabel:o,items:[e],expandedIndex:r?0:null,onExpandedChange:()=>(e=>{let i;i=c.includes(e)?c.filter((i=>i!==e)):[...c,e],u(i),d&&d(i)})(n)})},`${a}-item-${n}`)}))})}b.propTypes={items:e.arrayOf(e.shape({title:e.string.isRequired,icon:e.string,iconButton:e.element,summary:e.arrayOf(e.string),type:e.oneOf(["info","error"]),iconAccessibilityLabel:e.string,children:e.node,badge:e.object})).isRequired,id:e.string.isRequired,accessibilityExpandLabel:e.string.isRequired,accessibilityCollapseLabel:e.string.isRequired,defaultExpandedIndices:e.arrayOf(e.number),onExpandedChange:e.func},b.defaultProps={defaultExpandedIndices:[],onExpandedChange:void 0};function f({theme:e,language:t,isMobile:m,user:x,toggleTheme:b,setLanguage:f,handleSignOut:y,setOpenLoginModal:j,syncData:v,onOpenShareModal:R}){const[q,C]=a.useState(!1),E=n.useRef(null);return i.jsx(s,{color:"elevationFloating",rounding:3,overflow:"hidden",children:i.jsx(o,{title:"To-Do App",subtext:h[t].subTitle,borderStyle:"pill",thumbnail:!m&&i.jsx(g,{alt:"To-Do App",fit:"contain",naturalHeight:1,naturalWidth:1,src:"/todo-app/assets/logo512-CXkHzP4q.png"},"logo"),primaryAction:{component:i.jsxs(c,{children:[i.jsx(u,{text:"lightWash"===e?h[t].darkMode:h[t].lightMode,onClick:b}),i.jsxs(p,{id:"languageSelect",value:t,onChange:({value:e})=>f(e),children:[i.jsx(p.Option,{label:h[t].portuguese,value:"pt"}),i.jsx(p.Option,{label:h[t].english,value:"en"})]}),(null==x?void 0:x.email)&&i.jsxs(s,{display:"flex",children:[i.jsx(d,{size:"sm",icon:"refresh",padding:3,tooltip:{text:h[t].syncData},onClick:v}),i.jsx(d,{size:"sm",icon:"share",padding:3,tooltip:{text:h[t].sharing},onClick:()=>R(!0)})]}),i.jsx(u,{text:(null==x?void 0:x.email)?h[t].signOut:h[t].signIn,iconEnd:"person",onClick:(null==x?void 0:x.email)?y:()=>j(!0)})]})},dropdownAccessibilityLabel:h[t].options,secondaryAction:m&&{component:i.jsx(n.Fragment,{children:i.jsx(r,{idealDirection:"up",text:h[t].options,children:i.jsx(d,{ref:E,accessibilityExpanded:q,accessibilityHaspopup:!0,accessibilityLabel:h[t].options,icon:"ellipsis",iconColor:"darkGray",onClick:()=>C((e=>!e)),selected:q})})}),dropdownItems:[i.jsx(l.Item,{onSelect:()=>f("en"===t?"pt":"en"),option:{value:t,label:"en"===t?h[t].english:h[t].portuguese},iconEnd:"globe"},"set-language"),i.jsx(l.Item,{onSelect:()=>b(),option:{value:t,label:"lightWash"===e?h[t].darkMode:h[t].lightMode},iconEnd:"globe"},"set-theme"),i.jsx(l.Item,{option:{value:"",label:h[t].syncData},onSelect:v},"sync-data"),i.jsx(l.Item,{option:{value:"",label:h[t].sharing},onSelect:()=>R(!0)},"share-category"),i.jsx(l.Item,{onSelect:()=>(null==x?void 0:x.email)?y():j(!0),option:{value:"",label:(null==x?void 0:x.email)?h[t].signOut:h[t].signIn},iconEnd:"person"},"get-login")]}})})}function y({show:e,message:n,onDismiss:t,language:a}){if(!e)return null;const o=h[a][n]||n;return i.jsx(m,{children:i.jsx(s,{dangerouslySetInlineStyle:{__style:{bottom:50,left:"50%",transform:"translateX(-50%)"}},display:"flex",justifyContent:"center",paddingX:1,position:"fixed",width:"100%",children:i.jsx(x,{variant:"success",text:o,dismissButton:{onDismiss:t}})})})}f.propTypes={theme:e.string.isRequired,language:e.string.isRequired,isMobile:e.bool,user:e.object,toggleTheme:e.func.isRequired,setLanguage:e.func.isRequired,handleSignOut:e.func.isRequired,setOpenLoginModal:e.func.isRequired,syncData:e.func.isRequired,onOpenShareModal:e.func.isRequired},y.propTypes={show:e.bool.isRequired,message:e.string.isRequired,onDismiss:e.func.isRequired,language:e.string.isRequired};export{f as A,y as T,b as a};
