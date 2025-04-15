import{i as t,g as e,a,b as r,q as s,c as i,w as o,d as c,e as d,f as n,s as h,h as u,j as g,k as w,u as m,l as y}from"./vendor-firebase-Da0mNW5k.js";import{s as l}from"./app-utils-DAXUT7p0.js";const f=t({apiKey:void 0,authDomain:void 0,projectId:void 0,storageBucket:void 0,messagingSenderId:void 0,appId:void 0,measurementId:void 0});"undefined"!=typeof window&&e(f);const p=a(f),C=r(f),I="sharing",U="users",v={async shareCategory(t,e,a){try{const r=s(i(p,U),o("email","==",a)),d=await c(r);if(d.empty)throw new Error("User not found");const w=d.docs[0].id;if(w===e)throw new Error("Cannot share with yourself");const m={categoryName:t,ownerUid:e,targetUid:w,targetEmail:a,createdAt:h(),updatedAt:h()},y=await u(i(p,I),m),l=s(i(p,"tasks"),o("userId","==",e),o("category","==",t)),f=await c(l),C=g(p);return f.forEach((t=>{const e=n(p,"tasks",t.id),a=t.data().sharedWith||[];a.includes(w)||C.update(e,{sharedWith:[...a,w]})})),await C.commit(),{id:y.id,...m}}catch(r){throw r}},async getSharedWithMe(t){try{const e=s(i(p,I),o("targetUid","==",t)),a=await c(e),r=[];return a.forEach((t=>{r.push({id:t.id,...t.data()})})),r}catch(e){throw e}},async getMyShares(t){try{const e=s(i(p,I),o("ownerUid","==",t)),a=await c(e),r=[];return a.forEach((t=>{r.push({id:t.id,...t.data()})})),r}catch(e){throw e}},async removeShare(t){try{return await d(n(p,I,t)),t}catch(e){throw e}},async getUserByEmail(t){try{const e=s(i(p,U),o("email","==",t)),a=await c(e);return a.empty?null:{uid:a.docs[0].id,...a.docs[0].data()}}catch(e){throw e}}},b="categories",k={async getUserCategories(t){try{const e=i(p,b),a=s(e,o("userId","==",t)),r=await c(a),d=[],n={};return r.forEach((t=>{const e=t.data();d.push(e.name),void 0!==e.order?n[e.name]=e.order:n[e.name]=999})),0===d.length?l.getCustomCategories():(l.set("categoriesOrder",n),d)}catch(e){throw e}},async addCustomCategory(t,e){try{const a=l.getCategoriesOrder(),r=Object.values(a).reduce(((t,e)=>Math.max(t,e)),0)+1,s=n(p,b,`${t}_${e}`);await w(s,{userId:t,name:e,order:r,createdAt:h()});const i=l.getCustomCategories();return i.includes(e)||(l.set("customCategories",[...i,e]),l.setCategoryOrder(e,r)),await this.getUserCategories(t)}catch(a){throw a}},async updateCategoryOrder(t,e,a){try{const r=n(p,b,`${t}_${e}`);return await w(r,{order:a},{merge:!0}),l.setCategoryOrder(e,a),await this.getUserCategories(t)}catch(r){throw r}},async removeCustomCategory(t,e){try{const a=n(p,b,`${t}_${e}`);await d(a);const r=l.getCustomCategories();l.set("customCategories",r.filter((t=>t!==e)));const s=l.getCategoriesOrder();return delete s[e],l.set("categoriesOrder",s),await this.getUserCategories(t)}catch(a){throw a}},async saveCategories(t,e){try{const a=i(p,b),r=s(a,o("userId","==",t)),u=await c(r),g=[];u.forEach((t=>{g.push(d(n(p,b,t.id)))})),g.length>0&&await Promise.all(g);const m=l.getCategoriesOrder()||{},y=e.map(((e,a)=>{const r=void 0!==m[e]?m[e]:1e3+a;return w(n(p,b,`${t}_${e}`),{userId:t,name:e,order:r,createdAt:h()})}));return await Promise.all(y),l.set("customCategories",e),e}catch(a){throw a}},getCategoryOrderMap:()=>({personal_care:10,meal:20,work:30,household_chores:40,transportation:50,physical_activity:60,social_interaction:70,...l.getCategoriesOrder()}),sortCategoriesByOrder(t){const e=this.getCategoryOrderMap();return[...t].sort(((t,a)=>(void 0!==e[t]?e[t]:999)-(void 0!==e[a]?e[a]:999)))}},A="tasks",E={async getUserTasks(t){try{const e=s(i(p,A),o("userId","==",t)),a=await c(e),r=[];a.forEach((t=>{r.push({...t.data(),id:t.id,firebaseId:t.id})}));const d=await v.getSharedWithMe(t);for(const t of d){const e=s(i(p,A),o("userId","==",t.ownerUid),o("category","==",t.categoryName));(await c(e)).forEach((e=>{const a=e.data();r.push({...a,id:e.id,firebaseId:e.id,sharedBy:t.ownerUid,sharedByEmail:t.targetEmail,isShared:!0})}))}return r}catch(e){throw e}},async addTask(t,e){try{const a={...t,userId:e,createdAt:h(),updatedAt:h()},r=await u(i(p,A),a);return{...t,id:r.id,firebaseId:r.id}}catch(a){throw a}},async updateTask(t,e){try{const{firebaseId:a}=t;if(!a)throw new Error("Firebase ID missing");const r=n(p,A,a);return await m(r,{...t,userId:e,updatedAt:h()}),t}catch(a){throw a}},async deleteTask(t){try{return await d(n(p,A,t)),t}catch(e){throw e}},async syncTasks(t){try{const e=l.get("tasks",[]);if(0===e.length)return await this.getUserTasks(t);const a=await this.getUserTasks(t),r=g(p),s=e.filter((t=>!t.firebaseId&&!a.some((e=>e.id===t.id))&&!t.isShared));for(const c of s){const e={...c,userId:t,createdAt:h(),updatedAt:h()},a=n(i(p,A));r.set(a,e),c.firebaseId=a.id}await r.commit();const o=[...a];for(const t of e)if(t.firebaseId&&!t.isShared){const e=o.findIndex((e=>e.firebaseId===t.firebaseId));e>=0&&(o[e]=t)}else t.isShared||o.push(t);return o}catch(e){throw e}},async syncTaskList(t,e){try{const a=g(p);for(const r of t)if(r.firebaseId){const t=n(p,A,r.firebaseId);a.update(t,{...r,userId:e,updatedAt:h()})}else{const t={...r,userId:e,createdAt:h(),updatedAt:h()},s=n(i(p,A));a.set(s,t),r.firebaseId=s.id}return await a.commit(),t}catch(a){throw a}}},O="users",S={async getUserPreferences(t){try{const e=n(p,O,t),a=await y(e);return a.exists()?a.data():{theme:l.get("theme","lightWash"),language:l.get("language","pt")}}catch(e){throw e}},async saveUserPreferences(t,e){try{const a=n(p,O,t),s=r().currentUser;let i=null;s&&s.email&&(i=s.email);const o={...e,updatedAt:h()};return i&&(o.email=i),await w(a,o,{merge:!0}),e}catch(a){throw a}},async updatePreference(t,e,a){try{const s=n(p,O,t),i=await y(s),o={[e]:a,updatedAt:h()};if(!i.exists()||!i.data().email){const t=r().currentUser;t&&t.email&&(o.email=t.email)}return await w(s,o,{merge:!0}),{[e]:a}}catch(s){throw s}},async ensureUserEmail(t){try{const e=n(p,O,t),a=await y(e);if(a.exists()&&a.data().email)return a.data().email;const s=r().currentUser;return s&&s.email?(await w(e,{email:s.email,updatedAt:h()},{merge:!0}),s.email):null}catch(e){throw e}}};export{C as a,k as c,v as s,E as t,S as u};
