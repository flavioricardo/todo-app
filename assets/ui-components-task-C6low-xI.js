import{P as e,j as s}from"./ui-components-form-C6ySaX2X.js";import{r as i,B as o,T as t,d as r,i as n,I as a,j as l,R as d}from"./vendor-gestalt-CzAJx8OM.js";import{c as g}from"./app-services-91wEGV88.js";import{t as c,g as p}from"./app-constants-CVKmY58-.js";const u=({children:e,isCompleted:i})=>{const o=d.useRef(null);return s.jsx("div",{ref:o,style:{textDecoration:i?"line-through":"none"},children:s.jsx(t,{overflow:"breakWord",lineClamp:2,children:e})})},m=({task:e,onToggleTask:i,showCategory:t,language:r})=>{const a=e.completed;return s.jsxs(o,{display:"flex",alignItems:"center",justifyContent:"between",padding:2,opacity:a?.6:1,children:[s.jsx(l,{id:`task-${e.id}`,checked:a,label:s.jsx(u,{isCompleted:a,children:e.text}),onChange:()=>i(e.id)}),t&&s.jsx(n,{text:c[r].categories[e.category]||e.category,type:p(e.category)})]})},x=({category:e,tasks:i,onToggleTask:r,language:l,isMobile:d,isExpanded:g,onToggleExpand:u})=>s.jsxs(o,{marginBottom:2,marginEnd:2,borderStyle:"shadow",color:"elevationFloating",rounding:3,padding:3,userSelect:"none",flex:"grow",column:d||g?12:3,width:g?"100%":void 0,children:[s.jsxs(o,{display:"flex",alignItems:"center",justifyContent:"between",marginBottom:1,children:[s.jsx(t,{size:"sm",children:s.jsx(n,{text:c[l].categories[e]||e,type:p(e)})}),s.jsx(a,{size:"sm",selected:g,icon:g?"minimize":"maximize",onClick:()=>u(e),accessibilityLabel:g?c[l].minimize:c[l].expand})]}),i.map((e=>s.jsx(m,{task:e,onToggleTask:r,showCategory:!1,language:l},e.id)))]}),y=({language:e})=>s.jsx(o,{padding:3,display:"flex",justifyContent:"center",children:s.jsx(t,{children:c[e].emptyTaskList})});function h({tasks:e,onToggleTask:n,onClearCompleted:a,filterStatus:l,groupBy:d,language:p,isMobile:u}){const[h,j]=i.useState(null),f=e=>{j(h===e?null:e)},T=e=>[...e].sort(((e,s)=>e.completed===s.completed?0:e.completed?1:-1)),k=e.some((e=>e.completed))&&"pending"!==l;return s.jsxs(s.Fragment,{children:[s.jsxs(o,{marginTop:4,width:"100%",children:[s.jsx(o,{marginBottom:2,children:s.jsx(t,{size:"100",children:c[p].taskList})}),s.jsx(o,{display:u||"category"!==d?void 0:"flex",wrap:u||"category"!==d?void 0:"wrap",legend:c[p].taskList,children:(()=>{if(0===e.length)return s.jsx(y,{language:p});if("category"===d){const i=e.reduce(((e,s)=>(e[s.category]||(e[s.category]=[]),e[s.category].push(s),e)),{}),o=g.sortCategoriesByOrder(Object.keys(i));return[...o].sort(((e,s)=>h===e?-1:h===s?1:o.indexOf(e)-o.indexOf(s))).map((e=>s.jsx(x,{category:e,tasks:T(i[e]),onToggleTask:n,language:p,isMobile:u,isExpanded:h===e,onToggleExpand:f},e)))}return T(e).map((e=>s.jsx(m,{task:e,onToggleTask:n,showCategory:"category"!==d,language:p},e.id)))})()})]}),k&&s.jsx(o,{marginTop:4,width:"100%",display:"flex",children:s.jsx(r,{text:c[p].clearCompleted,onClick:a,color:"red",fullWidth:u,size:u?"lg":"md"})})]})}u.propTypes={children:e.node.isRequired,isCompleted:e.bool.isRequired},m.propTypes={task:e.shape({id:e.string.isRequired,text:e.string.isRequired,category:e.string.isRequired,completed:e.bool.isRequired}).isRequired,onToggleTask:e.func.isRequired,showCategory:e.bool.isRequired,language:e.string.isRequired},x.propTypes={category:e.string.isRequired,tasks:e.array.isRequired,onToggleTask:e.func.isRequired,language:e.string.isRequired,isMobile:e.bool,isExpanded:e.bool,onToggleExpand:e.func.isRequired},y.propTypes={language:e.string.isRequired},h.propTypes={tasks:e.arrayOf(e.shape({id:e.string.isRequired,text:e.string.isRequired,category:e.string.isRequired,completed:e.bool.isRequired})).isRequired,onToggleTask:e.func.isRequired,onClearCompleted:e.func.isRequired,filterStatus:e.string.isRequired,groupBy:e.string,language:e.string.isRequired,isMobile:e.bool},h.defaultProps={groupBy:"none",isMobile:!1};export{h as T};
