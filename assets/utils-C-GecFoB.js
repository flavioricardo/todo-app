import{r as t}from"./vendor-gestalt-CqUovwVg.js";const e="todoapp_",r={set(t,r){try{localStorage.setItem(`${e}${t}`,JSON.stringify(r))}catch(s){}},get(t,r=null){try{const s=localStorage.getItem(`${e}${t}`);return s?JSON.parse(s):r}catch(s){return r}},remove(t){try{localStorage.removeItem(`${e}${t}`)}catch(r){}},addCustomCategory(t){const e=this.getCustomCategories();return e.includes(t)||(e.push(t),this.set("customCategories",e)),e},getCustomCategories(){return this.get("customCategories",[])},removeCustomCategory(t){const e=this.getCustomCategories().filter((e=>e!==t));return this.set("customCategories",e),e}};function s(e=768){const[r,s]=t.useState(window.innerWidth<e);return t.useEffect((()=>{const t=()=>{s(window.innerWidth<e)};return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)}),[e]),r}export{r as s,s as u};
