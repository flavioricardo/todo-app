import{P as e,j as n,t as i}from"./components-small-Rzwon3i3.js";import{R as s,r as o,P as t,D as l,e as a,I as c,f as u,c as r,a as d,g}from"./vendor-gestalt-C7yLN_Hx.js";function p({theme:e,language:p,isMobile:m,user:h,toggleTheme:x,setLanguage:b,handleSignOut:j,setOpenLoginModal:v,syncData:y}){const[f,R]=s.useState(!1),S=o.useRef(null);return n.jsx(t,{title:"To-Do App",borderStyle:"none",thumbnail:!m&&n.jsx(g,{alt:"To-Do App",fit:"contain",naturalHeight:1,naturalWidth:1,src:"/todo-app/assets/logo512-CXkHzP4q.png"},"logo"),primaryAction:{component:n.jsxs(u,{children:[n.jsx(r,{text:"lightWash"===e?i[p].darkMode:i[p].lightMode,onClick:x}),n.jsxs(d,{id:"languageSelect",value:p,onChange:({value:e})=>b(e),children:[n.jsx(d.Option,{label:"Português",value:"pt"}),n.jsx(d.Option,{label:"English",value:"en"})]}),(null==h?void 0:h.email)&&n.jsx(c,{size:"sm",icon:"refresh",padding:3,tooltip:{text:i[p].syncData},onClick:y}),n.jsx(r,{text:(null==h?void 0:h.email)?i[p].signOut:i[p].signIn,iconEnd:"person",onClick:(null==h?void 0:h.email)?j:()=>v(!0)})]})},dropdownAccessibilityLabel:i[p].options,secondaryAction:m&&{component:n.jsx(o.Fragment,{children:n.jsx(a,{idealDirection:"up",text:i[p].options,children:n.jsx(c,{ref:S,accessibilityExpanded:f,accessibilityHaspopup:!0,accessibilityLabel:i[p].options,icon:"ellipsis",iconColor:"darkGray",onClick:()=>R((e=>!e)),selected:f})})}),dropdownItems:[n.jsx(l.Item,{onSelect:()=>b("en"===p?"pt":"en"),option:{value:p,label:"en"===p?"English":"Português"},iconEnd:"globe"},"set-language"),n.jsx(l.Item,{onSelect:()=>x(),option:{value:p,label:"lightWash"===e?i[p].darkMode:i[p].lightMode},iconEnd:"globe"},"set-theme"),n.jsx(l.Item,{option:{value:"",label:i[p].syncData},onSelect:y},"sync-data"),n.jsx(l.Item,{onSelect:()=>(null==h?void 0:h.email)?j():v(!0),option:{value:"",label:(null==h?void 0:h.email)?i[p].signOut:i[p].signIn},iconEnd:"person"},"get-login")]}})}p.propTypes={theme:e.string.isRequired,language:e.string.isRequired,isMobile:e.bool,user:e.object,toggleTheme:e.func.isRequired,setLanguage:e.func.isRequired,handleSignOut:e.func.isRequired,setOpenLoginModal:e.func.isRequired,syncData:e.func.isRequired};export{p as A};
