import{P as e,j as n,t as i}from"./components-small-Dz8sz-BQ.js";import{R as o,r as s,B as l,P as t,D as a,f as u,I as c,g as d,d as r,a as g,h as p}from"./vendor-gestalt-BRg-26zS.js";function h({theme:e,language:h,isMobile:m,user:x,toggleTheme:b,setLanguage:j,handleSignOut:v,setOpenLoginModal:f,syncData:y}){const[R,S]=o.useState(!1),k=s.useRef(null);return n.jsx(l,{color:"elevationFloating",rounding:3,overflow:"hidden",children:n.jsx(t,{title:"To-Do App",subtext:i[h].subTitle,borderStyle:"pill",thumbnail:!m&&n.jsx(p,{alt:"To-Do App",fit:"contain",naturalHeight:1,naturalWidth:1,src:"/todo-app/assets/logo512-CXkHzP4q.png"},"logo"),primaryAction:{component:n.jsxs(d,{children:[n.jsx(r,{text:"lightWash"===e?i[h].darkMode:i[h].lightMode,onClick:b}),n.jsxs(g,{id:"languageSelect",value:h,onChange:({value:e})=>j(e),children:[n.jsx(g.Option,{label:i[h].portuguese,value:"pt"}),n.jsx(g.Option,{label:i[h].english,value:"en"})]}),(null==x?void 0:x.email)&&n.jsx(c,{size:"sm",icon:"refresh",padding:3,tooltip:{text:i[h].syncData},onClick:y}),n.jsx(r,{text:(null==x?void 0:x.email)?i[h].signOut:i[h].signIn,iconEnd:"person",onClick:(null==x?void 0:x.email)?v:()=>f(!0)})]})},dropdownAccessibilityLabel:i[h].options,secondaryAction:m&&{component:n.jsx(s.Fragment,{children:n.jsx(u,{idealDirection:"up",text:i[h].options,children:n.jsx(c,{ref:k,accessibilityExpanded:R,accessibilityHaspopup:!0,accessibilityLabel:i[h].options,icon:"ellipsis",iconColor:"darkGray",onClick:()=>S((e=>!e)),selected:R})})}),dropdownItems:[n.jsx(a.Item,{onSelect:()=>j("en"===h?"pt":"en"),option:{value:h,label:"en"===h?i[h].english:i[h].portuguese},iconEnd:"globe"},"set-language"),n.jsx(a.Item,{onSelect:()=>b(),option:{value:h,label:"lightWash"===e?i[h].darkMode:i[h].lightMode},iconEnd:"globe"},"set-theme"),n.jsx(a.Item,{option:{value:"",label:i[h].syncData},onSelect:y},"sync-data"),n.jsx(a.Item,{onSelect:()=>(null==x?void 0:x.email)?v():f(!0),option:{value:"",label:(null==x?void 0:x.email)?i[h].signOut:i[h].signIn},iconEnd:"person"},"get-login")]}})})}h.propTypes={theme:e.string.isRequired,language:e.string.isRequired,isMobile:e.bool,user:e.object,toggleTheme:e.func.isRequired,setLanguage:e.func.isRequired,handleSignOut:e.func.isRequired,setOpenLoginModal:e.func.isRequired,syncData:e.func.isRequired};export{h as A};
