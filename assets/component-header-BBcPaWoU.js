import{P as e,j as n,t as i}from"./components-small-qHjBVGZR.js";import{R as o,r as l,P as s,D as t,e as a,I as r,f as u,a as g,S as c,g as d}from"./vendor-gestalt-DclyTH-S.js";function p({theme:e,language:p,isMobile:h,user:m,toggleTheme:b,setLanguage:x,handleSignOut:j,setOpenLoginModal:v}){const[f,y]=o.useState(!1),S=l.useRef(null);return n.jsx(s,{title:"To-Do App",borderStyle:"none",thumbnail:!h&&n.jsx(d,{alt:"To-Do App",fit:"contain",naturalHeight:1,naturalWidth:1,src:"/logo512.png"},"logo"),primaryAction:{component:n.jsxs(u,{children:[n.jsx(g,{text:"lightWash"===e?i[p].darkMode:i[p].lightMode,onClick:b}),n.jsxs(c,{id:"languageSelect",value:p,onChange:({value:e})=>x(e),children:[n.jsx(c.Option,{label:"Português",value:"pt"}),n.jsx(c.Option,{label:"English",value:"en"})]}),n.jsx(g,{text:(null==m?void 0:m.email)?i[p].signOut:i[p].signIn,iconEnd:"person",color:"white",onClick:(null==m?void 0:m.email)?j:()=>v(!0)})]})},dropdownAccessibilityLabel:i[p].options,secondaryAction:h&&{component:n.jsx(l.Fragment,{children:n.jsx(a,{idealDirection:"up",text:i[p].options,children:n.jsx(r,{ref:S,accessibilityExpanded:f,accessibilityHaspopup:!0,accessibilityLabel:i[p].options,icon:"ellipsis",iconColor:"darkGray",onClick:()=>y((e=>!e)),selected:f})})}),dropdownItems:[n.jsx(t.Item,{onSelect:()=>x("en"===p?"pt":"en"),option:{value:p,label:"en"===p?"English":"Português"},iconEnd:"globe"},"set-language"),n.jsx(t.Item,{onSelect:()=>b(),option:{value:p,label:"lightWash"===e?i[p].darkMode:i[p].lightMode},iconEnd:"globe"},"set-theme"),n.jsx(t.Item,{onSelect:()=>(null==m?void 0:m.email)?j():v(!0),option:{value:"",label:(null==m?void 0:m.email)?i[p].signOut:i[p].signIn},iconEnd:"person"},"get-login")]}})}p.propTypes={theme:e.string.isRequired,language:e.string.isRequired,isMobile:e.bool,user:e.object,toggleTheme:e.func.isRequired,setLanguage:e.func.isRequired,handleSignOut:e.func.isRequired,setOpenLoginModal:e.func.isRequired};export{p as A};
