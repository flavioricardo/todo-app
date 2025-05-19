var t={};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n=function(t){const n=[];let e=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?n[e++]=s:s<2048?(n[e++]=s>>6|192,n[e++]=63&s|128):55296==(64512&s)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++i)),n[e++]=s>>18|240,n[e++]=s>>12&63|128,n[e++]=s>>6&63|128,n[e++]=63&s|128):(n[e++]=s>>12|224,n[e++]=s>>6&63|128,n[e++]=63&s|128)}return n},e={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,n){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=n?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const n=t[s],r=s+1<t.length,o=r?t[s+1]:0,a=s+2<t.length,h=a?t[s+2]:0,u=n>>2,c=(3&n)<<4|o>>4;let l=(15&o)<<2|h>>6,f=63&h;a||(f=64,r||(l=64)),i.push(e[u],e[c],e[l],e[f])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(n(t),e)},decodeString(t,n){return this.HAS_NATIVE_SUPPORT&&!n?atob(t):function(t){const n=[];let e=0,i=0;for(;e<t.length;){const s=t[e++];if(s<128)n[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[e++];n[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=((7&s)<<18|(63&t[e++])<<12|(63&t[e++])<<6|63&t[e++])-65536;n[i++]=String.fromCharCode(55296+(r>>10)),n[i++]=String.fromCharCode(56320+(1023&r))}else{const r=t[e++],o=t[e++];n[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return n.join("")}(this.decodeStringToByteArray(t,n))},decodeStringToByteArray(t,n){this.init_();const e=n?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const n=e[t.charAt(r++)],o=r<t.length?e[t.charAt(r)]:0;++r;const a=r<t.length?e[t.charAt(r)]:64;++r;const h=r<t.length?e[t.charAt(r)]:64;if(++r,null==n||null==o||null==a||null==h)throw new i;const u=n<<2|o>>4;if(s.push(u),64!==a){const t=o<<4&240|a>>2;if(s.push(t),64!==h){const t=a<<6&192|h;s.push(t)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class i extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const s=function(t){return function(t){const i=n(t);return e.encodeByteArray(i,!0)}(t).replace(/\./g,"")},r=function(t){try{return e.decodeString(t,!0)}catch(n){}return null},o=()=>{try{
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */().p||(()=>{if("undefined"==typeof process)return;const n=t.p;return n?JSON.parse(n):void 0})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const n=t&&r(t[1]);return n&&JSON.parse(n)})()}catch(n){return}},a=t=>{var n,e;return null===(e=null===(n=o())||void 0===n?void 0:n.emulatorHosts)||void 0===e?void 0:e[t]},h=()=>{var t;return null===(t=o())||void 0===t?void 0:t.config},u=t=>{var n;return null===(n=o())||void 0===n?void 0:n[`_${t}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,n)=>{this.resolve=t,this.reject=n}))}wrapCallback(t){return(n,e)=>{n?this.reject(n):this.resolve(e),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(n):t(n,e))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function f(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function d(){try{return"object"==typeof indexedDB}catch(t){return!1}}function w(){return new Promise(((t,n)=>{try{let e=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var t;n((null===(t=s.error)||void 0===t?void 0:t.message)||"")}}catch(e){n(e)}}))}class p extends Error{constructor(t,n,e){super(n),this.code=t,this.customData=e,this.name="FirebaseError",Object.setPrototypeOf(this,p.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,m.prototype.create)}}class m{constructor(t,n,e){this.service=t,this.serviceName=n,this.errors=e}create(t,...n){const e=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],r=s?function(t,n){return t.replace(v,((t,e)=>{const i=n[e];return null!=i?String(i):`<${e}?>`}))}(s,e):"Error",o=`${this.serviceName}: ${r} (${i}).`;return new p(i,o,e)}}const v=/\{\$([^}]+)}/g;function g(t,n){if(t===n)return!0;const e=Object.keys(t),i=Object.keys(n);for(const s of e){if(!i.includes(s))return!1;const e=t[s],r=n[s];if(y(e)&&y(r)){if(!g(e,r))return!1}else if(e!==r)return!1}for(const s of i)if(!e.includes(s))return!1;return!0}function y(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(t){const n=[];for(const[e,i]of Object.entries(t))Array.isArray(i)?i.forEach((t=>{n.push(encodeURIComponent(e)+"="+encodeURIComponent(t))})):n.push(encodeURIComponent(e)+"="+encodeURIComponent(i));return n.length?"&"+n.join("&"):""}function E(t){const n={};return t.replace(/^\?/,"").split("&").forEach((t=>{if(t){const[e,i]=t.split("=");n[decodeURIComponent(e)]=decodeURIComponent(i)}})),n}function I(t){const n=t.indexOf("?");if(!n)return"";const e=t.indexOf("#",n);return t.substring(n,e>0?e:void 0)}class T{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((n=>{n.next(t)}))}error(t){this.forEachObserver((n=>{n.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,n,e){let i;if(void 0===t&&void 0===n&&void 0===e)throw new Error("Missing Observer.");i=function(t){if("object"!=typeof t||null===t)return!1;for(const n of["next","error","complete"])if(n in t&&"function"==typeof t[n])return!0;return!1}(t)?t:{next:t,error:n,complete:e},void 0===i.next&&(i.next=_),void 0===i.error&&(i.error=_),void 0===i.complete&&(i.complete=_);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(t){}})),this.observers.push(i),s}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{n(this.observers[t])}catch(e){"undefined"!=typeof console&&console.error}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function _(){}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(t,n=1e3,e=2){const i=n*Math.pow(e,t),s=Math.round(.5*i*(Math.random()-.5)*2);return Math.min(144e5,i+s)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(t){return t&&t._?t._:t}class N{constructor(t,n,e){this.name=t,this.instanceFactory=n,this.type=e,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const t=new c;if(this.instancesDeferred.set(n,t),this.isInitialized(n)||this.shouldAutoInitialize())try{const e=this.getOrInitializeService({instanceIdentifier:n});e&&t.resolve(e)}catch(e){}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const e=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(n=null==t?void 0:t.optional)&&void 0!==n&&n;if(!this.isInitialized(e)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:e})}catch(s){if(i)return null;throw s}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:O})}catch(n){}for(const[t,e]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:i});e.resolve(t)}catch(n){}}}}clearInstance(t=O){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"k"in t)).map((t=>t.k()))])}isComponentSet(){return null!=this.component}isInitialized(t=O){return this.instances.has(t)}getOptions(t=O){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,e=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(e))throw Error(`${this.name}(${e}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:e,options:n});for(const[s,r]of this.instancesDeferred.entries())e===this.normalizeInstanceIdentifier(s)&&r.resolve(i);return i}onInit(t,n){var e;const i=this.normalizeInstanceIdentifier(n),s=null!==(e=this.onInitCallbacks.get(i))&&void 0!==e?e:new Set;s.add(t),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&t(r,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const e=this.onInitCallbacks.get(n);if(e)for(const s of e)try{s(t,n)}catch(i){}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let e=this.instances.get(t);if(!e&&this.component&&(e=this.component.instanceFactory(this.container,{instanceIdentifier:(i=t,i===O?void 0:i),options:n}),this.instances.set(t,e),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(e,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,e)}catch(s){}var i;return e||null}normalizeInstanceIdentifier(t=O){return this.component?this.component.multipleInstances?t:O:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class C{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new k(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var R,D;(D=R||(R={}))[D.DEBUG=0]="DEBUG",D[D.VERBOSE=1]="VERBOSE",D[D.INFO=2]="INFO",D[D.WARN=3]="WARN",D[D.ERROR=4]="ERROR",D[D.SILENT=5]="SILENT";const P={debug:R.DEBUG,verbose:R.VERBOSE,info:R.INFO,warn:R.WARN,error:R.ERROR,silent:R.SILENT},$=R.INFO,M={[R.DEBUG]:"log",[R.VERBOSE]:"log",[R.INFO]:"info",[R.WARN]:"warn",[R.ERROR]:"error"},x=(t,n,...e)=>{if(!(n<t.logLevel||((new Date).toISOString(),M[n])))throw new Error(`Attempted to log a message with an invalid logType (value: ${n})`)};class L{constructor(t){this.name=t,this.$=$,this.q=x,this.rt=null}get logLevel(){return this.$}set logLevel(t){if(!(t in R))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this.$=t}setLogLevel(t){this.$="string"==typeof t?P[t]:t}get logHandler(){return this.q}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this.q=t}get userLogHandler(){return this.rt}set userLogHandler(t){this.rt=t}debug(...t){this.rt&&this.rt(this,R.DEBUG,...t),this.q(this,R.DEBUG,...t)}log(...t){this.rt&&this.rt(this,R.VERBOSE,...t),this.q(this,R.VERBOSE,...t)}info(...t){this.rt&&this.rt(this,R.INFO,...t),this.q(this,R.INFO,...t)}warn(...t){this.rt&&this.rt(this,R.WARN,...t),this.q(this,R.WARN,...t)}error(...t){this.rt&&this.rt(this,R.ERROR,...t),this.q(this,R.ERROR,...t)}}let F,U;const j=new WeakMap,V=new WeakMap,q=new WeakMap,B=new WeakMap,z=new WeakMap;let G={get(t,n,e){if(t instanceof IDBTransaction){if("done"===n)return V.get(t);if("objectStoreNames"===n)return t.objectStoreNames||q.get(t);if("store"===n)return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return W(t[n])},set:(t,n,e)=>(t[n]=e,!0),has:(t,n)=>t instanceof IDBTransaction&&("done"===n||"store"===n)||n in t};function H(t){return"function"==typeof t?(n=t)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(U||(U=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(n)?function(...t){return n.apply(K(this),t),W(j.get(this))}:function(...t){return W(n.apply(K(this),t))}:function(t,...e){const i=n.call(K(this),t,...e);return q.set(i,t.sort?t.sort():[t]),W(i)}:(t instanceof IDBTransaction&&function(t){if(V.has(t))return;const n=new Promise(((n,e)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",r),t.removeEventListener("abort",r)},s=()=>{n(),i()},r=()=>{e(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",r),t.addEventListener("abort",r)}));V.set(t,n)}(t),e=t,(F||(F=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,G):t);var n,e}function W(t){if(t instanceof IDBRequest)return function(t){const n=new Promise(((n,e)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",r)},s=()=>{n(W(t.result)),i()},r=()=>{e(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",r)}));return n.then((n=>{n instanceof IDBCursor&&j.set(n,t)})).catch((()=>{})),z.set(n,t),n}(t);if(B.has(t))return B.get(t);const n=H(t);return n!==t&&(B.set(t,n),z.set(n,t)),n}const K=t=>z.get(t);function J(t,n,{blocked:e,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,n),a=W(o);return i&&o.addEventListener("upgradeneeded",(t=>{i(W(o.result),t.oldVersion,t.newVersion,W(o.transaction),t)})),e&&o.addEventListener("blocked",(t=>e(t.oldVersion,t.newVersion,t))),a.then((t=>{r&&t.addEventListener("close",(()=>r())),s&&t.addEventListener("versionchange",(t=>s(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}const Q=["get","getKey","getAll","getAllKeys","count"],X=["put","add","delete","clear"],Y=new Map;function Z(t,n){if(!(t instanceof IDBDatabase)||n in t||"string"!=typeof n)return;if(Y.get(n))return Y.get(n);const e=n.replace(/FromIndex$/,""),i=n!==e,s=X.includes(e);if(!(e in(i?IDBIndex:IDBObjectStore).prototype)||!s&&!Q.includes(e))return;const r=async function(t,...n){const r=this.transaction(t,s?"readwrite":"readonly");let o=r.store;return i&&(o=o.index(n.shift())),(await Promise.all([o[e](...n),s&&r.done]))[0]};return Y.set(n,r),r}var tt;tt=G,G={...tt,get:(t,n,e)=>Z(t,n)||tt.get(t,n,e),has:(t,n)=>!!Z(t,n)||tt.has(t,n)};
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nt{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const n=t.getComponent();return"VERSION"===(null==n?void 0:n.type)}(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}return null})).filter((t=>t)).join(" ")}}const et="@firebase/app",it="0.11.4",st=new L("@firebase/app"),rt="@firebase/app-compat",ot="@firebase/analytics-compat",at="@firebase/analytics",ht="@firebase/app-check-compat",ut="@firebase/app-check",ct="@firebase/auth",lt="@firebase/auth-compat",ft="@firebase/database",dt="@firebase/data-connect",wt="@firebase/database-compat",pt="@firebase/functions",mt="@firebase/functions-compat",vt="@firebase/installations",gt="@firebase/installations-compat",yt="@firebase/messaging",bt="@firebase/messaging-compat",Et="@firebase/performance",It="@firebase/performance-compat",Tt="@firebase/remote-config",_t="@firebase/remote-config-compat",At="@firebase/storage",St="@firebase/storage-compat",Nt="@firebase/firestore",Ot="@firebase/vertexai",kt="@firebase/firestore-compat",Ct="firebase",Rt="[DEFAULT]",Dt={[et]:"fire-core",[rt]:"fire-core-compat",[at]:"fire-analytics",[ot]:"fire-analytics-compat",[ut]:"fire-app-check",[ht]:"fire-app-check-compat",[ct]:"fire-auth",[lt]:"fire-auth-compat",[ft]:"fire-rtdb",[dt]:"fire-data-connect",[wt]:"fire-rtdb-compat",[pt]:"fire-fn",[mt]:"fire-fn-compat",[vt]:"fire-iid",[gt]:"fire-iid-compat",[yt]:"fire-fcm",[bt]:"fire-fcm-compat",[Et]:"fire-perf",[It]:"fire-perf-compat",[Tt]:"fire-rc",[_t]:"fire-rc-compat",[At]:"fire-gcs",[St]:"fire-gcs-compat",[Nt]:"fire-fst",[kt]:"fire-fst-compat",[Ot]:"fire-vertex","fire-js":"fire-js",[Ct]:"fire-js-all"},Pt=new Map,$t=new Map,Mt=new Map;function xt(t,n){try{t.container.addComponent(n)}catch(e){st.debug(`Component ${n.name} failed to register with FirebaseApp ${t.name}`,e)}}function Lt(t){const n=t.name;if(Mt.has(n))return st.debug(`There were multiple attempts to register component ${n}.`),!1;Mt.set(n,t);for(const e of Pt.values())xt(e,t);for(const e of $t.values())xt(e,t);return!0}function Ft(t,n){const e=t.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),t.container.getProvider(n)}function Ut(t){return null!=t&&void 0!==t.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt=new m("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vt{constructor(t,n,e){this.ft=!1,this.dt=Object.assign({},t),this.wt=Object.assign({},n),this.vt=n.name,this.gt=n.automaticDataCollectionEnabled,this.yt=e,this.container.addComponent(new N("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this.gt}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this.gt=t}get name(){return this.checkDestroyed(),this.vt}get options(){return this.checkDestroyed(),this.dt}get config(){return this.checkDestroyed(),this.wt}get container(){return this.yt}get isDeleted(){return this.ft}set isDeleted(t){this.ft=t}checkDestroyed(){if(this.isDeleted)throw jt.create("app-deleted",{appName:this.vt})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="11.6.0";function Bt(t,n={}){let e=t;"object"!=typeof n&&(n={name:n});const i=Object.assign({name:Rt,automaticDataCollectionEnabled:!1},n),s=i.name;if("string"!=typeof s||!s)throw jt.create("bad-app-name",{appName:String(s)});if(e||(e=h()),!e)throw jt.create("no-options");const r=Pt.get(s);if(r){if(g(e,r.options)&&g(i,r.config))return r;throw jt.create("duplicate-app",{appName:s})}const o=new C(s);for(const h of Mt.values())o.addComponent(h);const a=new Vt(e,i,o);return Pt.set(s,a),a}function zt(t=Rt){const n=Pt.get(t);if(!n&&t===Rt&&h())return Bt();if(!n)throw jt.create("no-app",{appName:t});return n}function Gt(t,n,e){var i;let s=null!==(i=Dt[t])&&void 0!==i?i:t;e&&(s+=`-${e}`);const r=s.match(/\s|\//),o=n.match(/\s|\//);if(r||o){const t=[`Unable to register library "${s}" with version "${n}":`];return r&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&t.push("and"),o&&t.push(`version name "${n}" contains illegal characters (whitespace or "/")`),void st.warn(t.join(" "))}Lt(new N(`${s}-version`,(()=>({library:s,version:n})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht="firebase-heartbeat-store";let Wt=null;function Kt(){return Wt||(Wt=J("firebase-heartbeat-database",1,{upgrade:(t,n)=>{if(0===n)try{t.createObjectStore(Ht)}catch(e){}}}).catch((t=>{throw jt.create("idb-open",{originalErrorMessage:t.message})}))),Wt}async function Jt(t,n){try{const e=(await Kt()).transaction(Ht,"readwrite"),i=e.objectStore(Ht);await i.put(n,Qt(t)),await e.done}catch(e){if(e instanceof p)st.warn(e.message);else{const t=jt.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});st.warn(t.message)}}}function Qt(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(t){this.container=t,this.bt=null;const n=this.container.getProvider("app").getImmediate();this.It=new Zt(n),this._t=this.It.read().then((t=>(this.bt=t,t)))}async triggerHeartbeat(){var t,n;try{const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Yt();if(null==(null===(t=this.bt)||void 0===t?void 0:t.heartbeats)&&(this.bt=await this._t,null==(null===(n=this.bt)||void 0===n?void 0:n.heartbeats)))return;if(this.bt.lastSentHeartbeatDate===i||this.bt.heartbeats.some((t=>t.date===i)))return;if(this.bt.heartbeats.push({date:i,agent:e}),this.bt.heartbeats.length>30){const t=function(t){if(0===t.length)return-1;let n=0,e=t[0].date;for(let i=1;i<t.length;i++)t[i].date<e&&(e=t[i].date,n=i);return n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.bt.heartbeats);this.bt.heartbeats.splice(t,1)}return this.It.overwrite(this.bt)}catch(e){st.warn(e)}}async getHeartbeatsHeader(){var t;try{if(null===this.bt&&await this._t,null==(null===(t=this.bt)||void 0===t?void 0:t.heartbeats)||0===this.bt.heartbeats.length)return"";const n=Yt(),{heartbeatsToSend:e,unsentEntries:i}=function(t,n=1024){const e=[];let i=t.slice();for(const s of t){const t=e.find((t=>t.agent===s.agent));if(t){if(t.dates.push(s.date),tn(e)>n){t.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),tn(e)>n){e.pop();break}i=i.slice(1)}return{heartbeatsToSend:e,unsentEntries:i}}(this.bt.heartbeats),r=s(JSON.stringify({version:2,heartbeats:e}));return this.bt.lastSentHeartbeatDate=n,i.length>0?(this.bt.heartbeats=i,await this.It.overwrite(this.bt)):(this.bt.heartbeats=[],this.It.overwrite(this.bt)),r}catch(n){return st.warn(n),""}}}function Yt(){return(new Date).toISOString().substring(0,10)}class Zt{constructor(t){this.app=t,this.At=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!d()&&w().then((()=>!0)).catch((()=>!1))}async read(){if(await this.At){const t=await async function(t){try{const n=(await Kt()).transaction(Ht),e=await n.objectStore(Ht).get(Qt(t));return await n.done,e}catch(n){if(n instanceof p)st.warn(n.message);else{const t=jt.create("idb-get",{originalErrorMessage:null==n?void 0:n.message});st.warn(t.message)}}}(this.app);return(null==t?void 0:t.heartbeats)?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var n;if(await this.At){const e=await this.read();return Jt(this.app,{lastSentHeartbeatDate:null!==(n=t.lastSentHeartbeatDate)&&void 0!==n?n:e.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var n;if(await this.At){const e=await this.read();return Jt(this.app,{lastSentHeartbeatDate:null!==(n=t.lastSentHeartbeatDate)&&void 0!==n?n:e.lastSentHeartbeatDate,heartbeats:[...e.heartbeats,...t.heartbeats]})}}}function tn(t){return s(JSON.stringify({version:2,heartbeats:t})).length}function nn(t,n){var e={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&n.indexOf(i)<0&&(e[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(t);s<i.length;s++)n.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(e[i[s]]=t[i[s]])}return e}Lt(new N("platform-logger",(t=>new nt(t)),"PRIVATE")),Lt(new N("heartbeat",(t=>new Xt(t)),"PRIVATE")),Gt(et,it,""),Gt(et,it,"esm2017"),Gt("fire-js",""),"function"==typeof SuppressedError&&SuppressedError;const en=function(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}},sn=new m("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),rn=new L("@firebase/auth");function on(t,...n){rn.logLevel<=R.ERROR&&rn.error(`Auth (${qt}): ${t}`,...n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(t,...n){throw ln(t,...n)}function hn(t,...n){return ln(t,...n)}function un(t,n,e){const i=Object.assign(Object.assign({},en()),{[n]:e});return new m("auth","Firebase",i).create(n,{appName:t.name})}function cn(t){return un(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ln(t,...n){if("string"!=typeof t){const e=n[0],i=[...n.slice(1)];return i[0]&&(i[0].appName=t.name),t.St.create(e,...i)}return sn.create(t,...n)}function fn(t,n,...e){if(!t)throw ln(n,...e)}function dn(t){const n="INTERNAL ASSERTION FAILED: "+t;throw on(n),new Error(n)}function wn(t,n){t||dn(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function mn(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vn{constructor(t,n){this.shortDelay=t,this.longDelay=n,wn(n>t,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(l())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===mn()||"https:"===mn()||f()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(t,n){wn(t.emulator,"Emulator should always be set here");const{url:e}=t.emulator;return n?`${e}${n.startsWith("/")?n.slice(1):n}`:e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{static initialize(t,n,e){this.fetchImpl=t,n&&(this.headersImpl=n),e&&(this.responseImpl=e)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},En=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],In=new vn(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(t,n){return t.tenantId&&!n.tenantId?Object.assign(Object.assign({},n),{tenantId:t.tenantId}):n}async function _n(t,n,e,i,s={}){return An(t,s,(async()=>{let s={},r={};i&&("GET"===n?r=i:s={body:JSON.stringify(i)});const o=b(Object.assign({key:t.config.apiKey},r)).slice(1),a=await t.Nt();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:n,headers:a},s);return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent||(h.referrerPolicy="no-referrer"),yn.fetch()(await Nn(t,t.config.apiHost,e,o),h)}))}async function An(t,n,e){t.Ot=!1;const i=Object.assign(Object.assign({},bn),n);try{const n=new kn(t),s=await Promise.race([e(),n.promise]);n.clearNetworkTimeout();const r=await s.json();if("needConfirmation"in r)throw Cn(t,"account-exists-with-different-credential",r);if(s.ok&&!("errorMessage"in r))return r;{const n=s.ok?r.errorMessage:r.error.message,[e,o]=n.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===e)throw Cn(t,"credential-already-in-use",r);if("EMAIL_EXISTS"===e)throw Cn(t,"email-already-in-use",r);if("USER_DISABLED"===e)throw Cn(t,"user-disabled",r);const a=i[e]||e.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw un(t,a,o);an(t,a)}}catch(s){if(s instanceof p)throw s;an(t,"network-request-failed",{message:String(s)})}}async function Sn(t,n,e,i,s={}){const r=await _n(t,n,e,i,s);return"mfaPendingCredential"in r&&an(t,"multi-factor-auth-required",{kt:r}),r}async function Nn(t,n,e,i){const s=`${n}${e}?${i}`,r=t,o=r.config.emulator?gn(t.config,s):`${t.config.apiScheme}://${s}`;return En.includes(e)&&(await r.Ct,"COOKIE"===r.Rt())?r.Pt().Dt(o).toString():o}function On(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class kn{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,n)=>{this.timer=setTimeout((()=>n(hn(this.auth,"network-request-failed"))),In.get())}))}}function Cn(t,n,e){const i={appName:t.name};e.email&&(i.email=e.email),e.phoneNumber&&(i.phoneNumber=e.phoneNumber);const s=hn(t,n,i);return s.customData.$t=e,s}function Rn(t){return void 0!==t&&void 0!==t.enterprise}class Dn{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===t.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return On(n.enforcementState);return null}isProviderEnabled(t){return"ENFORCE"===this.getProviderEnforcementState(t)||"AUDIT"===this.getProviderEnforcementState(t)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Pn(t,n){return _n(t,"POST","/v1/accounts:lookup",n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t){if(t)try{const n=new Date(Number(t));if(!isNaN(n.getTime()))return n.toUTCString()}catch(n){}}function Mn(t){return 1e3*Number(t)}function xn(t){const[n,e,i]=t.split(".");if(void 0===n||void 0===e||void 0===i)return on("JWT malformed, contained fewer than 3 sections"),null;try{const t=r(e);return t?JSON.parse(t):(on("Failed to decode base64 JWT payload"),null)}catch(s){return on("Caught error parsing JWT payload as JSON",null==s?void 0:s.toString()),null}}function Ln(t){const n=xn(t);return fn(n,"internal-error"),fn(void 0!==n.exp,"internal-error"),fn(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fn(t,n,e=!1){if(e)return n;try{return await n}catch(i){throw i instanceof p&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}class Un{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}Mt(){this.isRunning||(this.isRunning=!0,this.schedule())}xt(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(n=this.user.stsTokenManager.expirationTime)&&void 0!==n?n:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null==t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this.Lt()}Lt(){this.lastSignInTime=$n(this.lastLoginAt),this.creationTime=$n(this.createdAt)}Ft(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this.Lt()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vn(t){var n;const e=t.auth,i=await t.getIdToken(),s=await Fn(t,Pn(e,{idToken:i}));fn(null==s?void 0:s.users.length,e,"internal-error");const r=s.users[0];t.Ut(r);const o=(null===(n=r.providerUserInfo)||void 0===n?void 0:n.length)?qn(r.providerUserInfo):[],a=(h=t.providerData,u=o,[...h.filter((t=>!u.some((n=>n.providerId===t.providerId)))),...u]);var h,u;const c=t.isAnonymous,l=!(t.email&&r.passwordHash||(null==a?void 0:a.length)),f=!!c&&l,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new jn(r.createdAt,r.lastLoginAt),isAnonymous:f};Object.assign(t,d)}function qn(t){return t.map((t=>{var{providerId:n}=t,e=nn(t,["providerId"]);return{providerId:n,uid:e.rawId||"",displayName:e.displayName||null,email:e.email||null,phoneNumber:e.phoneNumber||null,photoURL:e.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){fn(t.idToken,"internal-error"),fn(void 0!==t.idToken,"internal-error"),fn(void 0!==t.refreshToken,"internal-error");const n="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):Ln(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){fn(0!==t.length,"internal-error");const n=Ln(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return n||!this.accessToken||this.isExpired?(fn(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:e,refreshToken:i,expiresIn:s}=await async function(t,n){const e=await An(t,{},(async()=>{const e=b({grant_type:"refresh_token",refresh_token:n}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,r=await Nn(t,i,"/v1/token",`key=${s}`),o=await t.Nt();return o["Content-Type"]="application/x-www-form-urlencoded",yn.fetch()(r,{method:"POST",headers:o,body:e})}));return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}(t,n);this.updateTokensAndExpiration(e,i,Number(s))}updateTokensAndExpiration(t,n,e){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*e}static fromJSON(t,n){const{refreshToken:e,accessToken:i,expirationTime:s}=n,r=new Bn;return e&&(fn("string"==typeof e,"internal-error",{appName:t}),r.refreshToken=e),i&&(fn("string"==typeof i,"internal-error",{appName:t}),r.accessToken=i),s&&(fn("number"==typeof s,"internal-error",{appName:t}),r.expirationTime=s),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}jt(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}Vt(){return Object.assign(new Bn,this.toJSON())}qt(){return dn("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(t,n){fn("string"==typeof t||void 0===t,"internal-error",{appName:n})}class Gn{constructor(t){var{uid:n,auth:e,stsTokenManager:i}=t,s=nn(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Un(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=e,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new jn(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Fn(this,this.stsTokenManager.getToken(this.auth,t));return fn(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth.Bt(this),this.auth.zt(this)),n}getIdTokenResult(t){return async function(t,n=!1){const e=S(t),i=await e.getIdToken(n),s=xn(i);fn(s&&s.exp&&s.auth_time&&s.iat,e.auth,"internal-error");const r="object"==typeof s.firebase?s.firebase:void 0,o=null==r?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:$n(Mn(s.auth_time)),issuedAtTime:$n(Mn(s.iat)),expirationTime:$n(Mn(s.exp)),signInProvider:o||null,signInSecondFactor:(null==r?void 0:r.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const n=S(t);await Vn(n),await n.auth.Bt(n),n.auth.zt(n)}(this)}jt(t){this!==t&&(fn(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata.Ft(t.metadata),this.stsTokenManager.jt(t.stsTokenManager))}Vt(t){const n=new Gn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager.Vt()}));return n.metadata.Ft(this.metadata),n}Gt(t){fn(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this.Ut(this.reloadUserInfo),this.reloadUserInfo=null)}Ut(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}Ht(){this.proactiveRefresh.Mt()}Wt(){this.proactiveRefresh.xt()}async Kt(t,n=!1){let e=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),e=!0),n&&await Vn(this),await this.auth.Bt(this),e&&this.auth.zt(this)}async delete(){if(Ut(this.auth.app))return Promise.reject(cn(this.auth));const t=await this.getIdToken();return await Fn(this,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(t,n){return _n(t,"POST","/v1/accounts:delete",n)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),Jt:this.Jt},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static Qt(t,n){var e,i,s,r,o,a,h,u;const c=null!==(e=n.displayName)&&void 0!==e?e:void 0,l=null!==(i=n.email)&&void 0!==i?i:void 0,f=null!==(s=n.phoneNumber)&&void 0!==s?s:void 0,d=null!==(r=n.photoURL)&&void 0!==r?r:void 0,w=null!==(o=n.tenantId)&&void 0!==o?o:void 0,p=null!==(a=n.Jt)&&void 0!==a?a:void 0,m=null!==(h=n.createdAt)&&void 0!==h?h:void 0,v=null!==(u=n.lastLoginAt)&&void 0!==u?u:void 0,{uid:g,emailVerified:y,isAnonymous:b,providerData:E,stsTokenManager:I}=n;fn(g&&I,t,"internal-error");const T=Bn.fromJSON(this.name,I);fn("string"==typeof g,t,"internal-error"),zn(c,t.name),zn(l,t.name),fn("boolean"==typeof y,t,"internal-error"),fn("boolean"==typeof b,t,"internal-error"),zn(f,t.name),zn(d,t.name),zn(w,t.name),zn(p,t.name),zn(m,t.name),zn(v,t.name);const _=new Gn({uid:g,auth:t,email:l,emailVerified:y,displayName:c,isAnonymous:b,photoURL:d,phoneNumber:f,tenantId:w,stsTokenManager:T,createdAt:m,lastLoginAt:v});return E&&Array.isArray(E)&&(_.providerData=E.map((t=>Object.assign({},t)))),p&&(_.Jt=p),_}static async Xt(t,n,e=!1){const i=new Bn;i.updateFromServerResponse(n);const s=new Gn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:e});return await Vn(s),s}static async Yt(t,n,e){const i=n.users[0];fn(void 0!==i.localId,"internal-error");const s=void 0!==i.providerUserInfo?qn(i.providerUserInfo):[],r=!(i.email&&i.passwordHash||(null==s?void 0:s.length)),o=new Bn;o.updateFromIdToken(e);const a=new Gn({uid:i.localId,auth:t,stsTokenManager:o,isAnonymous:r}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new jn(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash||(null==s?void 0:s.length))};return Object.assign(a,h),a}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=new Map;function Wn(t){wn(t instanceof Function,"Expected a class definition");let n=Hn.get(t);return n?(wn(n instanceof t,"Instance stored in cache mismatched with class"),n):(n=new t,Hn.set(t,n),n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(){this.type="NONE",this.storage={}}async Zt(){return!0}async tn(t,n){this.storage[t]=n}async nn(t){const n=this.storage[t];return void 0===n?null:n}async en(t){delete this.storage[t]}sn(t,n){}rn(t,n){}}Kn.type="NONE";const Jn=Kn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(t,n,e){return`firebase:${t}:${n}:${e}`}class Xn{constructor(t,n,e){this.persistence=t,this.auth=n,this.userKey=e;const{config:i,name:s}=this.auth;this.fullUserKey=Qn(this.userKey,i.apiKey,s),this.fullPersistenceKey=Qn("persistence",i.apiKey,s),this.boundEventHandler=n.an.bind(n),this.persistence.sn(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence.tn(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence.nn(this.fullUserKey);if(!t)return null;if("string"==typeof t){const n=await Pn(this.auth,{idToken:t}).catch((()=>{}));return n?Gn.Yt(this.auth,n,t):null}return Gn.Qt(this.auth,t)}removeCurrentUser(){return this.persistence.en(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence.tn(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,n?this.setCurrentUser(n):void 0}delete(){this.persistence.rn(this.fullUserKey,this.boundEventHandler)}static async create(t,n,e="authUser"){if(!n.length)return new Xn(Wn(Jn),t,e);const i=(await Promise.all(n.map((async t=>{if(await t.Zt())return t})))).filter((t=>t));let s=i[0]||Wn(Jn);const r=Qn(e,t.config.apiKey,t.name);let o=null;for(const u of n)try{const n=await u.nn(r);if(n){let e;if("string"==typeof n){const i=await Pn(t,{idToken:n}).catch((()=>{}));if(!i)break;e=await Gn.Yt(t,i,n)}else e=Gn.Qt(t,n);u!==s&&(o=e),s=u;break}}catch(h){}const a=i.filter((t=>t.hn));return s.hn&&a.length?(s=a[0],o&&await s.tn(r,o.toJSON()),await Promise.all(n.map((async t=>{if(t!==s)try{await t.en(r)}catch(h){}}))),new Xn(s,t,e)):new Xn(s,t,e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yn(t){const n=t.toLowerCase();if(n.includes("opera/")||n.includes("opr/")||n.includes("opios/"))return"Opera";if(ee(n))return"IEMobile";if(n.includes("msie")||n.includes("trident/"))return"IE";if(n.includes("edge/"))return"Edge";if(Zn(n))return"Firefox";if(n.includes("silk/"))return"Silk";if(se(n))return"Blackberry";if(re(n))return"Webos";if(te(n))return"Safari";if((n.includes("chrome/")||ne(n))&&!n.includes("edge/"))return"Chrome";if(ie(n))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,e=t.match(n);if(2===(null==e?void 0:e.length))return e[1]}return"Other"}function Zn(t=l()){return/firefox\//i.test(t)}function te(t=l()){const n=t.toLowerCase();return n.includes("safari/")&&!n.includes("chrome/")&&!n.includes("crios/")&&!n.includes("android")}function ne(t=l()){return/crios\//i.test(t)}function ee(t=l()){return/iemobile/i.test(t)}function ie(t=l()){return/android/i.test(t)}function se(t=l()){return/blackberry/i.test(t)}function re(t=l()){return/webos/i.test(t)}function oe(t=l()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ae(t=l()){return oe(t)||ie(t)||re(t)||se(t)||/windows phone/i.test(t)||ee(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(t,n=[]){let e;switch(t){case"Browser":e=Yn(l());break;case"Worker":e=`${Yn(l())}-${t}`;break;default:e=t}const i=n.length?n.join(","):"FirebaseCore-web";return`${e}/JsCore/${qt}/${i}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const e=n=>new Promise(((e,i)=>{try{e(t(n))}catch(s){i(s)}}));e.onAbort=n,this.queue.push(e);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const e of this.queue)await e(t),e.onAbort&&n.push(e.onAbort)}catch(e){n.reverse();for(const t of n)try{t()}catch(i){}throw this.auth.St.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(t){var n,e,i,s;const r=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(n=r.minPasswordLength)&&void 0!==n?n:6,r.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=r.maxPasswordLength),void 0!==r.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=r.containsLowercaseCharacter),void 0!==r.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=r.containsUppercaseCharacter),void 0!==r.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=r.containsNumericCharacter),void 0!==r.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=r.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(i=null===(e=t.allowedNonAlphanumericCharacters)||void 0===e?void 0:e.join(""))&&void 0!==i?i:"",this.forceUpgradeOnSignin=null!==(s=t.forceUpgradeOnSignin)&&void 0!==s&&s,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,e,i,s,r,o;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,a),this.validatePasswordCharacterOptions(t,a),a.isValid&&(a.isValid=null===(n=a.meetsMinPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(e=a.meetsMaxPasswordLength)||void 0===e||e),a.isValid&&(a.isValid=null===(i=a.containsLowercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(s=a.containsUppercaseLetter)||void 0===s||s),a.isValid&&(a.isValid=null===(r=a.containsNumericCharacter)||void 0===r||r),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(t,n){const e=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;e&&(n.meetsMinPasswordLength=t.length>=e),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){let e;this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);for(let i=0;i<t.length;i++)e=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,e>="a"&&e<="z",e>="A"&&e<="Z",e>="0"&&e<="9",this.allowedNonAlphanumericCharacters.includes(e))}updatePasswordCharacterOptionsStatuses(t,n,e,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=e)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(t,n,e,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=e,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new de(this),this.idTokenSubscription=new de(this),this.beforeStateQueue=new ue(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this.Ot=!0,this.un=!1,this.cn=!1,this.ln=null,this.fn=null,this.St=sn,this.dn=null,this.wn={},this.pn=null,this.mn={},this.vn=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion,this.Ct=new Promise((t=>this.vn=t))}gn(t,n){return n&&(this.fn=Wn(n)),this.ln=this.queue((async()=>{var e,i,s;if(!this.cn&&(this.persistenceManager=await Xn.create(this,t),null===(e=this.vn)||void 0===e||e.call(this),!this.cn)){if(null===(i=this.fn)||void 0===i?void 0:i.yn)try{await this.fn.bn(this)}catch(r){}await this.initializeCurrentUser(n),this.lastNotifiedUid=(null===(s=this.currentUser)||void 0===s?void 0:s.uid)||null,this.cn||(this.un=!0)}})),this.ln}async an(){if(this.cn)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this.En.jt(t),void(await this.currentUser.getIdToken())):void(await this.In(t,!0)):void 0}async initializeCurrentUserFromIdToken(t){try{const n=await Pn(this,{idToken:t}),e=await Gn.Yt(this,n,t);await this.directlySetCurrentUser(e)}catch(n){await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(Ut(this.app)){const t=this.app.settings.authIdToken;return t?new Promise((n=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(t).then(n,n)))})):this.directlySetCurrentUser(null)}const e=await this.assertedPersistence.getCurrentUser();let i=e,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const e=null===(n=this.redirectUser)||void 0===n?void 0:n.Jt,r=null==i?void 0:i.Jt,o=await this.tryRedirectSignIn(t);e&&e!==r||!(null==o?void 0:o.user)||(i=o.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i.Jt){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(r){i=e,this.fn._n(this,(()=>Promise.reject(r)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return fn(this.fn,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser.Jt===i.Jt?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this.fn.An(this,t,!0)}catch(e){await this.Sn(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Vn(t)}catch(n){if("auth/network-request-failed"!==(null==n?void 0:n.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async k(){this.cn=!0}async updateCurrentUser(t){if(Ut(this.app))return Promise.reject(cn(this));const n=t?S(t):null;return n&&fn(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this.In(n&&n.Vt(this))}async In(t,n=!1){if(!this.cn)return t&&fn(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return Ut(this.app)?Promise.reject(cn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this.fn)&&await this.Sn(null),this.In(null,!0))}setPersistence(t){return Ut(this.app)?Promise.reject(cn(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(Wn(t))}))}Nn(){return null==this.tenantId?this.dn:this.wn[this.tenantId]}async validatePassword(t){this.On()||await this.kn();const n=this.On();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this.St.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}On(){return null===this.tenantId?this.pn:this.mn[this.tenantId]}async kn(){const t=await async function(t,n={}){return _n(t,"GET","/v2/passwordPolicy",Tn(t,n))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this),n=new ce(t);null===this.tenantId?this.pn=n:this.mn[this.tenantId]=n}Rt(){return this.assertedPersistence.persistence.type}Pt(){return this.assertedPersistence.persistence}Cn(t){this.St=new m("auth","Firebase",t())}onAuthStateChanged(t,n,e){return this.registerStateListener(this.authStateSubscription,t,n,e)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,e){return this.registerStateListener(this.idTokenSubscription,t,n,e)}authStateReady(){return new Promise(((t,n)=>{if(this.currentUser)t();else{const e=this.onAuthStateChanged((()=>{e(),t()}),n)}}))}async revokeAccessToken(t){if(this.currentUser){const n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(n.tenantId=this.tenantId),await async function(t,n){return _n(t,"POST","/v2/accounts:revokeToken",Tn(t,n))}(this,n)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this.En)||void 0===t?void 0:t.toJSON()}}async Sn(t,n){const e=await this.getOrInitRedirectPersistenceManager(n);return null===t?e.removeCurrentUser():e.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Wn(t)||this.fn;fn(n,this,"argument-error"),this.redirectPersistenceManager=await Xn.create(this,[Wn(n.Rn)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async Dn(t){var n,e;return this.un&&await this.queue((async()=>{})),(null===(n=this.En)||void 0===n?void 0:n.Jt)===t?this.En:(null===(e=this.redirectUser)||void 0===e?void 0:e.Jt)===t?this.redirectUser:null}async Bt(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}zt(t){t===this.currentUser&&this.notifyAuthListeners()}Pn(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}Ht(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this.En.Ht()}Wt(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this.En.Wt()}get En(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this.un)return;this.idTokenSubscription.next(this.currentUser);const e=null!==(n=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==n?n:null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,e,i){if(this.cn)return()=>{};const s="function"==typeof n?n:n.next.bind(n);let r=!1;const o=this.un?Promise.resolve():this.ln;if(fn(o,this,"internal-error"),o.then((()=>{r||s(this.currentUser)})),"function"==typeof n){const s=t.addObserver(n,e,i);return()=>{r=!0,s()}}{const e=t.addObserver(n);return()=>{r=!0,e()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this.En.Wt(),t&&this.isProactiveRefreshEnabled&&t.Ht(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return fn(this.persistenceManager,this,"internal-error"),this.persistenceManager}Mn(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=he(this.config.clientPlatform,this.xn()))}xn(){return this.frameworks}async Nt(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const e=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());e&&(n["X-Firebase-Client"]=e);const i=await this.Ln();return i&&(n["X-Firebase-AppCheck"]=i),n}async Ln(){var t;if(Ut(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await(null===(t=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getToken());return(null==n?void 0:n.error)&&function(t,...n){rn.logLevel<=R.WARN&&rn.warn(`Auth (${qt}): ${t}`,...n)}(`Error while retrieving App Check token: ${n.error}`),null==n?void 0:n.token}}function fe(t){return S(t)}class de{constructor(t){this.auth=t,this.observer=null,this.addObserver=function(t){const n=new T(t,void 0);return n.subscribe.bind(n)}((t=>this.observer=t))}get next(){return fn(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let we={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function pe(t){return we.loadJS(t)}class me{constructor(){this.enterprise=new ve}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class ve{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const ge="NO_RECAPTCHA";class ye{constructor(t){this.type="recaptcha-enterprise",this.auth=fe(t)}async verify(t="verify",n=!1){function e(n,e,i){const s=window.grecaptcha;Rn(s)?s.enterprise.ready((()=>{s.enterprise.execute(n,{action:t}).then((t=>{e(t)})).catch((()=>{e(ge)}))})):i(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?(new me).execute("siteKey",{action:"verify"}):new Promise(((t,i)=>{(async function(t){if(!n){if(null==t.tenantId&&null!=t.dn)return t.dn.siteKey;if(null!=t.tenantId&&void 0!==t.wn[t.tenantId])return t.wn[t.tenantId].siteKey}return new Promise((async(n,e)=>{(async function(t){return _n(t,"GET","/v2/recaptchaConfig",Tn(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}))})(t).then((i=>{if(void 0!==i.recaptchaKey){const e=new Dn(i);return null==t.tenantId?t.dn=e:t.wn[t.tenantId]=e,n(e.siteKey)}e(new Error("recaptcha Enterprise site key undefined"))})).catch((t=>{e(t)}))}))})(this.auth).then((s=>{if(!n&&Rn(window.grecaptcha))e(s,t,i);else{if("undefined"==typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));let n=we.recaptchaEnterpriseScript;0!==n.length&&(n+=s),pe(n).then((()=>{e(s,t,i)})).catch((t=>{i(t)}))}})).catch((t=>{i(t)}))}))}}async function be(t,n,e,i=!1,s=!1){const r=new ye(t);let o;if(s)o=ge;else try{o=await r.verify(e)}catch(h){o=await r.verify(e,!0)}const a=Object.assign({},n);if("mfaSmsEnrollment"===e||"mfaSmsSignIn"===e){if("phoneEnrollmentInfo"in a){const t=a.phoneEnrollmentInfo.phoneNumber,n=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:t,recaptchaToken:n,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const t=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:t,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return i?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Ee(t,n,e,i,s){var r;if(null===(r=t.Nn())||void 0===r?void 0:r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await be(t,n,e,"getOobCode"===e);return i(t,s)}return i(t,n).catch((async s=>{if("auth/missing-recaptcha-token"===s.code){const s=await be(t,n,e,"getOobCode"===e);return i(t,s)}return Promise.reject(s)}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(t){const n=t.indexOf(":");return n<0?"":t.substr(0,n+1)}function Te(t){if(!t)return null;const n=Number(t);return isNaN(n)?null:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _e{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return dn("not implemented")}Fn(t){return dn("not implemented")}jn(t,n){return dn("not implemented")}Vn(t){return dn("not implemented")}}async function Ae(t,n){return _n(t,"POST","/v1/accounts:signUp",n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Se(t,n){return Sn(t,"POST","/v1/accounts:signInWithPassword",Tn(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ne extends _e{constructor(t,n,e,i=null){super("password",e),this.Bn=t,this.Gn=n,this.Wn=i}static Qn(t,n){return new Ne(t,n,"password")}static te(t,n,e=null){return new Ne(t,n,"emailLink",e)}toJSON(){return{email:this.Bn,password:this.Gn,signInMethod:this.signInMethod,tenantId:this.Wn}}static fromJSON(t){const n="string"==typeof t?JSON.parse(t):t;if((null==n?void 0:n.email)&&(null==n?void 0:n.password)){if("password"===n.signInMethod)return this.Qn(n.email,n.password);if("emailLink"===n.signInMethod)return this.te(n.email,n.password,n.tenantId)}return null}async Fn(t){switch(this.signInMethod){case"password":return Ee(t,{returnSecureToken:!0,email:this.Bn,password:this.Gn,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",Se);case"emailLink":return async function(t,n){return Sn(t,"POST","/v1/accounts:signInWithEmailLink",Tn(t,n))}(t,{email:this.Bn,oobCode:this.Gn});default:an(t,"internal-error")}}async jn(t,n){switch(this.signInMethod){case"password":return Ee(t,{idToken:n,returnSecureToken:!0,email:this.Bn,password:this.Gn,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ae);case"emailLink":return async function(t,n){return Sn(t,"POST","/v1/accounts:signInWithEmailLink",Tn(t,n))}(t,{idToken:n,email:this.Bn,oobCode:this.Gn});default:an(t,"internal-error")}}Vn(t){return this.Fn(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oe(t,n){return Sn(t,"POST","/v1/accounts:signInWithIdp",Tn(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke extends _e{constructor(){super(...arguments),this.pendingToken=null}static ne(t){const n=new ke(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):an("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n="string"==typeof t?JSON.parse(t):t,{providerId:e,signInMethod:i}=n,s=nn(n,["providerId","signInMethod"]);if(!e||!i)return null;const r=new ke(e,i);return r.idToken=s.idToken||void 0,r.accessToken=s.accessToken||void 0,r.secret=s.secret,r.nonce=s.nonce,r.pendingToken=s.pendingToken||null,r}Fn(t){return Oe(t,this.buildRequest())}jn(t,n){const e=this.buildRequest();return e.idToken=n,Oe(t,e)}Vn(t){const n=this.buildRequest();return n.autoCreate=!1,Oe(t,n)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=b(n)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(t){var n,e,i,s,r,o;const a=E(I(t)),h=null!==(n=a.apiKey)&&void 0!==n?n:null,u=null!==(e=a.oobCode)&&void 0!==e?e:null,c=function(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);fn(h&&u&&c,"argument-error"),this.apiKey=h,this.operation=c,this.code=u,this.continueUrl=null!==(s=a.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(r=a.languageCode)&&void 0!==r?r:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(t){const n=function(t){const n=E(I(t)).link,e=n?E(I(n)).deep_link_id:null,i=E(I(t)).deep_link_id;return(i?E(I(i)).link:null)||i||e||n||t}(t);try{return new Ce(n)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(){this.providerId=Re.PROVIDER_ID}static credential(t,n){return Ne.Qn(t,n)}static credentialWithLink(t,n){const e=Ce.parseLink(n);return fn(e,"argument-error"),Ne.te(t,e.code,e.tenantId)}}Re.PROVIDER_ID="password",Re.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Re.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class De{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe extends De{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e extends Pe{constructor(){super("facebook.com")}static credential(t){return ke.ne({providerId:$e.PROVIDER_ID,signInMethod:$e.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return $e.credentialFromTaggedObject(t)}static credentialFromError(t){return $e.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({$t:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return $e.credential(t.oauthAccessToken)}catch(n){return null}}}$e.FACEBOOK_SIGN_IN_METHOD="facebook.com",$e.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Me extends Pe{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return ke.ne({providerId:Me.PROVIDER_ID,signInMethod:Me.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Me.credentialFromTaggedObject(t)}static credentialFromError(t){return Me.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({$t:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:e}=t;if(!n&&!e)return null;try{return Me.credential(n,e)}catch(i){return null}}}Me.GOOGLE_SIGN_IN_METHOD="google.com",Me.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xe extends Pe{constructor(){super("github.com")}static credential(t){return ke.ne({providerId:xe.PROVIDER_ID,signInMethod:xe.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return xe.credentialFromTaggedObject(t)}static credentialFromError(t){return xe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({$t:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return xe.credential(t.oauthAccessToken)}catch(n){return null}}}xe.GITHUB_SIGN_IN_METHOD="github.com",xe.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Le extends Pe{constructor(){super("twitter.com")}static credential(t,n){return ke.ne({providerId:Le.PROVIDER_ID,signInMethod:Le.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Le.credentialFromTaggedObject(t)}static credentialFromError(t){return Le.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({$t:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:e}=t;if(!n||!e)return null;try{return Le.credential(n,e)}catch(i){return null}}}Le.TWITTER_SIGN_IN_METHOD="twitter.com",Le.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fe{constructor(t){this.user=t.user,this.providerId=t.providerId,this.$t=t.$t,this.operationType=t.operationType}static async Xt(t,n,e,i=!1){const s=await Gn.Xt(t,e,i),r=Ue(e);return new Fe({user:s,providerId:r,$t:e,operationType:n})}static async ee(t,n,e){await t.Kt(e,!0);const i=Ue(e);return new Fe({user:t,providerId:i,$t:e,operationType:n})}}function Ue(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends p{constructor(t,n,e,i){var s;super(n.code,n.message),this.operationType=e,this.user=i,Object.setPrototypeOf(this,je.prototype),this.customData={appName:t.name,tenantId:null!==(s=t.tenantId)&&void 0!==s?s:void 0,kt:n.customData.kt,operationType:e}}static ie(t,n,e,i){return new je(t,n,e,i)}}function Ve(t,n,e,i){return("reauthenticate"===n?e.Vn(t):e.Fn(t)).catch((e=>{if("auth/multi-factor-auth-required"===e.code)throw je.ie(t,e,n,i);throw e}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function qe(t,n,e=!1){if(Ut(t.app))return Promise.reject(cn(t));const i="signIn",s=await Ve(t,i,n),r=await Fe.Xt(t,i,s);return e||await t.In(r.user),r}function Be(t,n,e){return Ut(t.app)?Promise.reject(cn(t)):async function(t,n){return qe(fe(t),n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(S(t),Re.credential(n,e)).catch((async n=>{throw"auth/password-does-not-meet-requirements"===n.code&&async function(t){const n=fe(t);n.On()&&await n.kn()}(t),n}))}function ze(t,n,e,i){return S(t).onAuthStateChanged(n,e,i)}function Ge(t){return S(t).signOut()}const He="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(t,n){this.storageRetriever=t,this.type=n}Zt(){try{return this.storage?(this.storage.setItem(He,"1"),this.storage.removeItem(He),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}tn(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}nn(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}en(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke extends We{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ae(),this.hn=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const e=this.storage.getItem(n),i=this.localCache[n];e!==i&&t(n,i,e)}}onStorageEvent(t,n=!1){if(!t.key)return void this.forAllChangedKeys(((t,n,e)=>{this.notifyListeners(t,e)}));const e=t.key;n?this.detachListener():this.stopPolling();const i=()=>{const t=this.storage.getItem(e);(n||this.localCache[e]!==t)&&this.notifyListeners(e,t)},s=this.storage.getItem(e);!function(){const t=l();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}()||10!==document.documentMode||s===t.newValue||t.newValue===t.oldValue?i():setTimeout(i,10)}notifyListeners(t,n){this.localCache[t]=n;const e=this.listeners[t];if(e)for(const i of Array.from(e))i(n?JSON.parse(n):n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,n,e)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:e}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}sn(t,n){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}rn(t,n){this.listeners[t]&&(this.listeners[t].delete(n),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async tn(t,n){await super.tn(t,n),this.localCache[t]=JSON.stringify(n)}async nn(t){const n=await super.nn(t);return this.localCache[t]=JSON.stringify(n),n}async en(t){await super.en(t),delete this.localCache[t]}}Ke.type="LOCAL";const Je=Ke;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends We{constructor(){super((()=>window.sessionStorage),"SESSION")}sn(t,n){}rn(t,n){}}Qe.type="SESSION";const Xe=Qe;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static se(t){const n=this.receivers.find((n=>n.isListeningto(t)));if(n)return n;const e=new Ye(t);return this.receivers.push(e),e}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:e,eventType:i,data:s}=n.data,r=this.handlersMap[i];if(!(null==r?void 0:r.size))return;n.ports[0].postMessage({status:"ack",eventId:e,eventType:i});const o=Array.from(r).map((async t=>t(n.origin,s))),a=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}})))}(o);n.ports[0].postMessage({status:"done",eventId:e,eventType:i,response:a})}re(t,n){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}ue(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),n&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ze(t="",n=10){let e="";for(let i=0;i<n;i++)e+=Math.floor(10*Math.random());return t+e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ye.receivers=[];class ti{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _e(t,n,e=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,r;return new Promise(((o,a)=>{const h=Ze("",20);i.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),e);r={messageChannel:i,onMessage(t){const n=t;if(n.data.eventId===h)switch(n.data.status){case"ack":clearTimeout(u),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(n.data.response);break;default:clearTimeout(u),clearTimeout(s),a(new Error("invalid_response"))}}},this.handlers.add(r),i.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:t,eventId:h,data:n},[i.port2])})).finally((()=>{r&&this.removeMessageHandler(r)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ei(){return void 0!==ni().WorkerGlobalScope&&"function"==typeof ni().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ii="firebaseLocalStorageDb",si="firebaseLocalStorage",ri="fbase_key";class oi{constructor(t){this.request=t}toPromise(){return new Promise(((t,n)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{n(this.request.error)}))}))}}function ai(t,n){return t.transaction([si],n?"readwrite":"readonly").objectStore(si)}function hi(){const t=indexedDB.open(ii,1);return new Promise(((n,e)=>{t.addEventListener("error",(()=>{e(t.error)})),t.addEventListener("upgradeneeded",(()=>{const n=t.result;try{n.createObjectStore(si,{keyPath:ri})}catch(i){e(i)}})),t.addEventListener("success",(async()=>{const e=t.result;e.objectStoreNames.contains(si)?n(e):(e.close(),await function(){const t=indexedDB.deleteDatabase(ii);return new oi(t).toPromise()}(),n(await hi()))}))}))}async function ui(t,n,e){const i=ai(t,!0).put({[ri]:n,value:e});return new oi(i).toPromise()}function ci(t,n){const e=ai(t,!0).delete(n);return new oi(e).toPromise()}class li{constructor(){this.type="LOCAL",this.hn=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.ai=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async hi(){return this.db||(this.db=await hi()),this.db}async ui(t){let n=0;for(;;)try{const n=await this.hi();return await t(n)}catch(e){if(n++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ei()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ye.se(ei()?self:null),this.receiver.re("keyChanged",(async(t,n)=>({keyProcessed:(await this.ci()).includes(n.key)}))),this.receiver.re("ping",(async(t,n)=>["keyChanged"]))}async initializeSender(){var t,n;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new ti(this.activeServiceWorker);const e=await this.sender._e("ping",{},800);e&&(null===(t=e[0])||void 0===t?void 0:t.fulfilled)&&(null===(n=e[0])||void 0===n?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){var n;if(this.sender&&this.activeServiceWorker&&((null===(n=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===n?void 0:n.controller)||null)===this.activeServiceWorker)try{await this.sender._e("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(n){}}async Zt(){try{if(!indexedDB)return!1;const t=await hi();return await ui(t,He,"1"),await ci(t,He),!0}catch(t){}return!1}async li(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async tn(t,n){return this.li((async()=>(await this.ui((e=>ui(e,t,n))),this.localCache[t]=n,this.notifyServiceWorker(t))))}async nn(t){const n=await this.ui((n=>async function(t,n){const e=ai(t,!1).get(n),i=await new oi(e).toPromise();return void 0===i?null:i.value}(n,t)));return this.localCache[t]=n,n}async en(t){return this.li((async()=>(await this.ui((n=>ci(n,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async ci(){const t=await this.ui((t=>{const n=ai(t,!1).getAll();return new oi(n).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const n=[],e=new Set;if(0!==t.length)for(const{fbase_key:i,value:s}of t)e.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!e.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const e=this.listeners[t];if(e)for(const i of Array.from(e))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this.ci()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}sn(t,n){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this.nn(t)),this.listeners[t].add(n)}rn(t,n){this.listeners[t]&&(this.listeners[t].delete(n),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}li.type="LOCAL";const fi=li;
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function di(t,n){return n?Wn(n):(fn(t.fn,t,"argument-error"),t.fn)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new vn(3e4,6e4);class wi extends _e{constructor(t){super("custom","custom"),this.params=t}Fn(t){return Oe(t,this.fi())}jn(t,n){return Oe(t,this.fi(n))}Vn(t){return Oe(t,this.fi())}fi(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function pi(t){return qe(t.auth,new wi(t),t.bypassAuthState)}function mi(t){const{auth:n,user:e}=t;return fn(e,n,"internal-error"),
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(t,n,e=!1){const{auth:i}=t;if(Ut(i.app))return Promise.reject(cn(i));const s="reauthenticate";try{const r=await Fn(t,Ve(i,s,n,t),e);fn(r.idToken,i,"internal-error");const o=xn(r.idToken);fn(o,i,"internal-error");const{sub:a}=o;return fn(t.uid===a,i,"user-mismatch"),Fe.ee(t,s,r)}catch(r){throw"auth/user-not-found"===(null==r?void 0:r.code)&&an(i,"user-mismatch"),r}}(e,new wi(t),t.bypassAuthState)}async function vi(t){const{auth:n,user:e}=t;return fn(e,n,"internal-error"),async function(t,n,e=!1){const i=await Fn(t,n.jn(t.auth,await t.getIdToken()),e);return Fe.ee(t,"link",i)}(e,new wi(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(t,n,e,i,s=!1){this.auth=t,this.resolver=e,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise((async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver.bn(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(t){const{urlResponse:n,sessionId:e,postBody:i,tenantId:s,error:r,type:o}=t;if(r)return void this.reject(r);const a={auth:this.auth,requestUri:n,sessionId:e,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(h){this.reject(h)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return pi;case"linkViaPopup":case"linkViaRedirect":return vi;case"reauthViaPopup":case"reauthViaRedirect":return mi;default:an(this.auth,"internal-error")}}resolve(t){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=new vn(2e3,1e4);async function bi(t,n,e){if(Ut(t.app))return Promise.reject(hn(t,"operation-not-supported-in-this-environment"));const i=fe(t);!function(t,n){if(!(n instanceof De))throw De.name!==n.constructor.name&&an(t,"argument-error"),un(t,"argument-error",`Type of ${n.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}(t,n);const s=di(i,e);return new Ei(i,"signInViaPopup",n,s).executeNotNull()}class Ei extends gi{constructor(t,n,e,i,s){super(t,n,i,s),this.provider=e,this.authWindow=null,this.pollId=null,Ei.currentPopupAction&&Ei.currentPopupAction.cancel(),Ei.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return fn(t,this.auth,"internal-error"),t}async onExecution(){wn(1===this.filter.length,"Popup operations only handle one event");const t=Ze();this.authWindow=await this.resolver.di(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver.wi(this.auth).catch((t=>{this.reject(t)})),this.resolver.pi(this.auth,(t=>{t||this.reject(hn(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(hn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ei.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,e;(null===(e=null===(n=this.authWindow)||void 0===n?void 0:n.window)||void 0===e?void 0:e.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(hn(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(t,yi.get())};t()}}Ei.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ii=new Map;class Ti extends gi{constructor(t,n,e=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,e),this.eventId=null}async execute(){let t=Ii.get(this.auth.Pn());if(!t){try{const n=await async function(t,n){const e=function(t){return Qn("pendingRedirect",t.config.apiKey,t.name)}(n),i=function(t){return Wn(t.Rn)}(t);if(!(await i.Zt()))return!1;const s="true"===await i.nn(e);return await i.en(e),s}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(n)}catch(n){t=()=>Promise.reject(n)}Ii.set(this.auth.Pn(),t)}return this.bypassAuthState||Ii.set(this.auth.Pn(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const n=await this.auth.Dn(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function _i(t,n){Ii.set(t.Pn(),n)}async function Ai(t,n,e=!1){if(Ut(t.app))return Promise.reject(cn(t));const i=fe(t),s=di(i,n),r=new Ti(i,s,e),o=await r.execute();return o&&!e&&(delete o.user.Jt,await i.Bt(o.user),await i.Sn(null,n)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach((e=>{this.isEventForConsumer(t,e)&&(n=!0,this.sendToConsumer(t,e),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Oi(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var e;if(t.error&&!Oi(t)){const i=(null===(e=t.error.code)||void 0===e?void 0:e.split("auth/")[1])||"internal-error";n.onError(hn(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const e=null===n.eventId||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&e}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ni(t))}saveEventToCache(t){this.cachedEventUids.add(Ni(t)),this.lastProcessedEventTime=Date.now()}}function Ni(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function Oi({type:t,error:n}){return"unknown"===t&&"auth/no-auth-event"===(null==n?void 0:n.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ki=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ci=/^https?/;function Ri(t){const n=pn(),{protocol:e,hostname:i}=new URL(n);if(t.startsWith("chrome-extension://")){const s=new URL(t);return""===s.hostname&&""===i?"chrome-extension:"===e&&t.replace("chrome-extension://","")===n.replace("chrome-extension://",""):"chrome-extension:"===e&&s.hostname===i}if(!Ci.test(e))return!1;if(ki.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=new vn(3e4,6e4);function Pi(){const t=ni().mi;if(null==t?void 0:t.H)for(const n of Object.keys(t.H))if(t.H[n].r=t.H[n].r||[],t.H[n].L=t.H[n].L||[],t.H[n].r=[...t.H[n].L],t.CP)for(let e=0;e<t.CP.length;e++)t.CP[e]=null}let $i=null;
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Mi=new vn(5e3,15e3),xi={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Li=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fi(t){const n=t.config;fn(n.authDomain,t,"auth-domain-config-required");const e=n.emulator?gn(n,"emulator/auth/iframe"):`https://${t.config.authDomain}/__/auth/iframe`,i={apiKey:n.apiKey,appName:t.name,v:qt},s=Li.get(t.config.apiHost);s&&(i.eid=s);const r=t.xn();return r.length&&(i.fw=r.join(",")),`${e}?${b(i).slice(1)}`}async function Ui(t){const n=await function(t){return $i=$i||function(t){return new Promise(((n,e)=>{var i,s,r;function o(){Pi(),gapi.load("gapi.iframes",{callback:()=>{n(gapi.iframes.getContext())},ontimeout:()=>{Pi(),e(hn(t,"network-request-failed"))},timeout:Di.get()})}if(null===(s=null===(i=ni().gapi)||void 0===i?void 0:i.iframes)||void 0===s?void 0:s.Iframe)n(gapi.iframes.getContext());else{if(!(null===(r=ni().gapi)||void 0===r?void 0:r.load)){const n=`__iframefcb${Math.floor(1e6*Math.random())}`;return ni()[n]=()=>{gapi.load?o():e(hn(t,"network-request-failed"))},pe(`${we.gapiScript}?onload=${n}`).catch((t=>e(t)))}o()}})).catch((t=>{throw $i=null,t}))}(t),$i}(t),e=ni().gapi;return fn(e,t,"internal-error"),n.open({where:document.body,url:Fi(t),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xi,dontclear:!0},(n=>new Promise((async(e,i)=>{await n.restyle({setHideOnLeave:!1});const s=hn(t,"network-request-failed"),r=ni().setTimeout((()=>{i(s)}),Mi.get());function o(){ni().clearTimeout(r),e(n)}n.ping(o).then(o,(()=>{i(s)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Vi{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qi=encodeURIComponent("fac");async function Bi(t,n,e,i,s,r){fn(t.config.authDomain,t,"auth-domain-config-required"),fn(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:e,redirectUrl:i,v:qt,eventId:s};if(n instanceof De){n.setDefaultLanguage(t.languageCode),o.providerId=n.providerId||"",function(t){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n))return!1;return!0}(n.getCustomParameters())||(o.customParameters=JSON.stringify(n.getCustomParameters()));for(const[t,n]of Object.entries({}))o[t]=n}if(n instanceof Pe){const t=n.getScopes().filter((t=>""!==t));t.length>0&&(o.scopes=t.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))void 0===a[c]&&delete a[c];const h=await t.Ln(),u=h?`#${qi}=${encodeURIComponent(h)}`:"";return`${function({config:t}){return t.emulator?gn(t,"emulator/auth/handler"):`https://${t.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)}?${b(a).slice(1)}${u}`}const zi="webStorageSupport",Gi=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this.Rn=Xe,this.An=Ai,this._n=_i}async di(t,n,e,i){var s;return wn(null===(s=this.eventManagers[t.Pn()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()"),function(t,n,e,i=500,s=600){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const h=Object.assign(Object.assign({},ji),{width:i.toString(),height:s.toString(),top:r,left:o}),u=l().toLowerCase();e&&(a=ne(u)?"_blank":e),Zn(u)&&(n=n||"http://localhost",h.scrollbars="yes");const c=Object.entries(h).reduce(((t,[n,e])=>`${t}${n}=${e},`),"");if(function(t=l()){var n;return oe(t)&&!!(null===(n=window.navigator)||void 0===n?void 0:n.standalone)}(u)&&"_self"!==a)return function(t,n){const e=document.createElement("a");e.href=t,e.target=n;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(i)}(n||"",a),new Vi(null);const f=window.open(n||"",a,c);fn(f,t,"popup-blocked");try{f.focus()}catch(d){}return new Vi(f)}(t,await Bi(t,n,e,pn(),i),Ze())}async gi(t,n,e,i){return await this.wi(t),s=await Bi(t,n,e,pn(),i),ni().location.href=s,new Promise((()=>{}));var s}bn(t){const n=t.Pn();if(this.eventManagers[n]){const{manager:t,promise:e}=this.eventManagers[n];return t?Promise.resolve(t):(wn(e,"If manager is not set, promise should be"),e)}const e=this.initAndGetManager(t);return this.eventManagers[n]={promise:e},e.catch((()=>{delete this.eventManagers[n]})),e}async initAndGetManager(t){const n=await Ui(t),e=new Si(t);return n.register("authEvent",(n=>(fn(null==n?void 0:n.authEvent,t,"invalid-auth-event"),{status:e.onEvent(n.authEvent)?"ACK":"ERROR"})),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t.Pn()]={manager:e},this.iframes[t.Pn()]=n,e}pi(t,n){this.iframes[t.Pn()].send(zi,{type:zi},(e=>{var i;const s=null===(i=null==e?void 0:e[0])||void 0===i?void 0:i[zi];void 0!==s&&n(!!s),an(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}wi(t){const n=t.Pn();return this.originValidationPromises[n]||(this.originValidationPromises[n]=async function(t){if(t.config.emulator)return;const{authorizedDomains:n}=await async function(t,n={}){return _n(t,"GET","/v1/projects",n)}(t);for(const i of n)try{if(Ri(i))return}catch(e){}an(t,"unauthorized-domain")}(t)),this.originValidationPromises[n]}get yn(){return ae()||te()||oe()}};var Hi="@firebase/auth",Wi="1.10.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ki{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth.ln,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged((n=>{t((null==n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){fn(this.auth.ln,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth.Ht():this.auth.Wt()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ji=u("authIdTokenMaxAge")||300;let Qi=null;function Xi(t=zt()){const n=Ft(t,"auth");if(n.isInitialized())return n.getImmediate();const e=function(t,n){const e=Ft(t,"auth");if(e.isInitialized()){const t=e.getImmediate();if(g(e.getOptions(),null!=n?n:{}))return t;an(t,"already-initialized")}return e.initialize({options:n})}(t,{popupRedirectResolver:Gi,persistence:[fi,Je,Xe]}),i=u("authTokenSyncURL");if(i&&"boolean"==typeof isSecureContext&&isSecureContext){const t=new URL(i,location.origin);if(location.origin===t.origin){const n=(s=t.toString(),async t=>{const n=t&&await t.getIdTokenResult(),e=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(e&&e>Ji)return;const i=null==n?void 0:n.token;Qi!==i&&(Qi=i,await fetch(s,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))});!function(t,n,e){S(t).beforeAuthStateChanged(n,e)}(e,n,(()=>n(e.currentUser))),function(t){S(t).onIdTokenChanged((t=>n(t)),void 0,void 0)}(e)}}var s;const r=a("auth");return r&&function(t,n){const e=fe(t);fn(/^https?:\/\//.test(n),e,"invalid-emulator-scheme");const i=Ie(n),{host:s,port:r}=function(t){const n=Ie(t),e=/(\/\/)?([^?#/]+)/.exec(t.substr(n.length));if(!e)return{host:"",port:null};const i=e[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const t=s[1];return{host:t,port:Te(i.substr(t.length+1))}}{const[t,n]=i.split(":");return{host:t,port:Te(n)}}}(n),o={url:`${i}//${s}${null===r?"":`:${r}`}/`},a=Object.freeze({host:s,port:r,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:!1})});if(!e.Ot)return fn(e.config.emulator&&e.emulatorConfig,e,"emulator-config-failed"),void fn(g(o,e.config.emulator)&&g(a,e.emulatorConfig),e,"emulator-config-failed");e.config.emulator=o,e.emulatorConfig=a,e.settings.appVerificationDisabledForTesting=!0,function(){function t(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!=typeof console&&console.info,"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}()}(e,`http://${r}`),e}var Yi;we={loadJS:t=>new Promise(((n,e)=>{const i=document.createElement("script");var s,r;i.setAttribute("src",t),i.onload=n,i.onerror=t=>{const n=hn("internal-error");n.customData=t,e(n)},i.type="text/javascript",i.charset="UTF-8",(null!==(r=null===(s=document.getElementsByTagName("head"))||void 0===s?void 0:s[0])&&void 0!==r?r:document).appendChild(i)})),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="},Yi="Browser",Lt(new N("auth",((t,{options:n})=>{const e=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:r,authDomain:o}=e.options;fn(r&&!r.includes(":"),"invalid-api-key",{appName:e.name});const a={apiKey:r,authDomain:o,clientPlatform:Yi,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:he(Yi)},h=new le(e,i,s,a);return function(t,n){const e=(null==n?void 0:n.persistence)||[],i=(Array.isArray(e)?e:[e]).map(Wn);(null==n?void 0:n.errorMap)&&t.Cn(n.errorMap),t.gn(i,null==n?void 0:n.popupRedirectResolver)}(h,n),h}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,n,e)=>{t.getProvider("auth-internal").initialize()}))),Lt(new N("auth-internal",(t=>{const n=fe(t.getProvider("auth").getImmediate());return new Ki(n)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Gt(Hi,Wi,function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(Yi)),Gt(Hi,Wi,"esm2017");const Zi="@firebase/installations",ts="0.6.13",ns=`w:${ts}`,es="FIS_v2",is=new m("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function ss(t){return t instanceof p&&t.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs({projectId:t}){return`https://firebaseinstallations.googleapis.com/v1/projects/${t}/installations`}function os(t){return{token:t.token,requestStatus:2,expiresIn:(n=t.expiresIn,Number(n.replace("s","000"))),creationTime:Date.now()};var n}async function as(t,n){const e=(await n.json()).error;return is.create("request-failed",{requestName:t,serverCode:e.code,serverMessage:e.message,serverStatus:e.status})}function hs({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}async function us(t){const n=await t();return n.status>=500&&n.status<600?t():n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function cs(t){return new Promise((n=>{setTimeout(n,t)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ls=/^[cdef][\w-]{21}$/;function fs(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=function(t){var n;return(n=t,btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);return ls.test(n)?n:""}catch(t){return""}}function ds(t){return`${t.appName}!${t.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=new Map;function ps(t,n){const e=ds(t);ms(e,n),function(t,n){const e=(!vs&&"BroadcastChannel"in self&&(vs=new BroadcastChannel("[Firebase] FID Change"),vs.onmessage=t=>{ms(t.data.key,t.data.fid)}),vs);e&&e.postMessage({key:t,fid:n}),0===ws.size&&vs&&(vs.close(),vs=null)}(e,n)}function ms(t,n){const e=ws.get(t);if(e)for(const i of e)i(n)}let vs=null;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gs="firebase-installations-store";let ys=null;function bs(){return ys||(ys=J("firebase-installations-database",1,{upgrade:(t,n)=>{0===n&&t.createObjectStore(gs)}})),ys}async function Es(t,n){const e=ds(t),i=(await bs()).transaction(gs,"readwrite"),s=i.objectStore(gs),r=await s.get(e);return await s.put(n,e),await i.done,r&&r.fid===n.fid||ps(t,n.fid),n}async function Is(t){const n=ds(t),e=(await bs()).transaction(gs,"readwrite");await e.objectStore(gs).delete(n),await e.done}async function Ts(t,n){const e=ds(t),i=(await bs()).transaction(gs,"readwrite"),s=i.objectStore(gs),r=await s.get(e),o=n(r);return void 0===o?await s.delete(e):await s.put(o,e),await i.done,!o||r&&r.fid===o.fid||ps(t,o.fid),o}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _s(t){let n;const e=await Ts(t.appConfig,(e=>{const i=function(t){return Ns(t||{fid:fs(),registrationStatus:0})}(e),s=function(t,n){if(0===n.registrationStatus){if(!navigator.onLine)return{installationEntry:n,registrationPromise:Promise.reject(is.create("app-offline"))};const e={fid:n.fid,registrationStatus:1,registrationTime:Date.now()},i=async function(t,n){try{const e=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */await async function({appConfig:t,heartbeatServiceProvider:n},{fid:e}){const i=rs(t),s=hs(t),r=n.getImmediate({optional:!0});if(r){const t=await r.getHeartbeatsHeader();t&&s.append("x-firebase-client",t)}const o={fid:e,authVersion:es,appId:t.appId,sdkVersion:ns},a={method:"POST",headers:s,body:JSON.stringify(o)},h=await us((()=>fetch(i,a)));if(h.ok){const t=await h.json();return{fid:t.fid||e,registrationStatus:2,refreshToken:t.refreshToken,authToken:os(t.authToken)}}throw await as("Create Installation",h)}(t,n);return Es(t.appConfig,e)}catch(e){throw ss(e)&&409===e.customData.serverCode?await Is(t.appConfig):await Es(t.appConfig,{fid:n.fid,registrationStatus:0}),e}}(t,e);return{installationEntry:e,registrationPromise:i}}return 1===n.registrationStatus?{installationEntry:n,registrationPromise:As(t)}:{installationEntry:n}}(t,i);return n=s.registrationPromise,s.installationEntry}));return""===e.fid?{installationEntry:await n}:{installationEntry:e,registrationPromise:n}}async function As(t){let n=await Ss(t.appConfig);for(;1===n.registrationStatus;)await cs(100),n=await Ss(t.appConfig);if(0===n.registrationStatus){const{installationEntry:n,registrationPromise:e}=await _s(t);return e||n}return n}function Ss(t){return Ts(t,(t=>{if(!t)throw is.create("installation-not-found");return Ns(t)}))}function Ns(t){return 1===(n=t).registrationStatus&&n.registrationTime+1e4<Date.now()?{fid:t.fid,registrationStatus:0}:t;var n;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}async function Os({appConfig:t,heartbeatServiceProvider:n},e){const i=function(t,{fid:n}){return`${rs(t)}/${n}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,e),s=function(t,{refreshToken:n}){const e=hs(t);return e.append("Authorization",function(t){return`${es} ${t}`}(n)),e}(t,e),r=n.getImmediate({optional:!0});if(r){const t=await r.getHeartbeatsHeader();t&&s.append("x-firebase-client",t)}const o={installation:{sdkVersion:ns,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},h=await us((()=>fetch(i,a)));if(h.ok)return os(await h.json());throw await as("Generate Auth Token",h)}async function ks(t,n=!1){let e;const i=await Ts(t.appConfig,(i=>{if(!Rs(i))throw is.create("not-registered");const s=i.authToken;if(!n&&(2===(r=s).requestStatus&&!function(t){const n=Date.now();return n<t.creationTime||t.creationTime+t.expiresIn<n+36e5}(r)))return i;var r;if(1===s.requestStatus)return e=async function(t,n){let e=await Cs(t.appConfig);for(;1===e.authToken.requestStatus;)await cs(100),e=await Cs(t.appConfig);const i=e.authToken;return 0===i.requestStatus?ks(t,n):i}(t,n),i;{if(!navigator.onLine)throw is.create("app-offline");const n=function(t){const n={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:n})}(i);return e=async function(t,n){try{const e=await Os(t,n),i=Object.assign(Object.assign({},n),{authToken:e});return await Es(t.appConfig,i),e}catch(e){if(!ss(e)||401!==e.customData.serverCode&&404!==e.customData.serverCode){const e=Object.assign(Object.assign({},n),{authToken:{requestStatus:0}});await Es(t.appConfig,e)}else await Is(t.appConfig);throw e}}(t,n),n}}));return e?await e:i.authToken}function Cs(t){return Ts(t,(t=>{if(!Rs(t))throw is.create("not-registered");return 1===(n=t.authToken).requestStatus&&n.requestTime+1e4<Date.now()?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t;var n;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}))}function Rs(t){return void 0!==t&&2===t.registrationStatus}function Ds(t){return is.create("missing-app-config-values",{valueName:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps="installations";Lt(new N(Ps,(t=>{const n=t.getProvider("app").getImmediate(),e=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t){if(!t||!t.options)throw Ds("App Configuration");if(!t.name)throw Ds("App Name");const n=["projectId","apiKey","appId"];for(const e of n)if(!t.options[e])throw Ds(e);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(n);return{app:n,appConfig:e,heartbeatServiceProvider:Ft(n,"heartbeat"),k:()=>Promise.resolve()}}),"PUBLIC")),Lt(new N("installations-internal",(t=>{const n=Ft(t.getProvider("app").getImmediate(),Ps).getImmediate();return{getId:()=>async function(t){const n=t,{installationEntry:e,registrationPromise:i}=await _s(n);return i?i.catch(console.error):ks(n).catch(console.error),e.fid}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n),getToken:t=>async function(t,n=!1){const e=t;return await async function(t){const{registrationPromise:n}=await _s(t);n&&await n}(e),(await ks(e,n)).token}(n,t)}}),"PRIVATE")),Gt(Zi,ts),Gt(Zi,ts,"esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $s="analytics",Ms="https://www.googletagmanager.com/gtag/js",xs=new L("@firebase/analytics"),Ls=new m("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Fs(t){if(!t.startsWith(Ms)){const n=Ls.create("invalid-gtag-resource",{gtagURL:t});return xs.warn(n.message),""}return t}function Us(t){return Promise.all(t.map((t=>t.catch((t=>t)))))}const js=new class{constructor(t={},n=1e3){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}};function Vs(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function qs(t,n=js,e){const{appId:i,apiKey:s,measurementId:r}=t.options;if(!i)throw Ls.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw Ls.create("no-api-key")}const o=n.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new zs;return setTimeout((async()=>{a.abort()}),6e4),Bs({appId:i,apiKey:s,measurementId:r},o,a,n)}async function Bs(t,{throttleEndTimeMillis:n,backoffCount:e},i,s=js){var r;const{appId:o,measurementId:a}=t;try{await function(t,n){return new Promise(((e,i)=>{const s=Math.max(n-Date.now(),0),r=setTimeout(e,s);t.addEventListener((()=>{clearTimeout(r),i(Ls.create("fetch-throttle",{throttleEndTimeMillis:n}))}))}))}(i,n)}catch(h){if(a)return xs.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==h?void 0:h.message}]`),{appId:o,measurementId:a};throw h}try{const n=await async function(t){var n;const{appId:e,apiKey:i}=t,s={method:"GET",headers:Vs(i)},r="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",e),o=await fetch(r,s);if(200!==o.status&&304!==o.status){let t="";try{const e=await o.json();(null===(n=e.error)||void 0===n?void 0:n.message)&&(t=e.error.message)}catch(a){}throw Ls.create("config-fetch-failed",{httpStatus:o.status,responseMessage:t})}return o.json()}(t);return s.deleteThrottleMetadata(o),n}catch(h){const n=h;if(!function(t){if(!(t instanceof p&&t.customData))return!1;const n=Number(t.customData.httpStatus);return 429===n||500===n||503===n||504===n}(n)){if(s.deleteThrottleMetadata(o),a)return xs.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==n?void 0:n.message}]`),{appId:o,measurementId:a};throw h}const u=503===Number(null===(r=null==n?void 0:n.customData)||void 0===r?void 0:r.httpStatus)?A(e,s.intervalMillis,30):A(e,s.intervalMillis),c={throttleEndTimeMillis:Date.now()+u,backoffCount:e+1};return s.setThrottleMetadata(o,c),xs.debug(`Calling attemptFetch again in ${u} millis`),Bs(t,c,i,s)}}class zs{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach((t=>t()))}}async function Gs(t,n,e,i,s,r,o){var a;const h=qs(t);h.then((n=>{e[n.measurementId]=n.appId,t.options.measurementId&&n.measurementId!==t.options.measurementId&&xs.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${n.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((t=>xs.error(t))),n.push(h);const u=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(){if(!d())return xs.warn(Ls.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await w()}catch(t){return xs.warn(Ls.create("indexeddb-unavailable",{errorInfo:null==t?void 0:t.toString()}).message),!1}return!0}().then((t=>t?i.getId():void 0)),[c,l]=await Promise.all([h,u]);(function(t){const n=window.document.getElementsByTagName("script");for(const e of Object.values(n))if(e.src&&e.src.includes(Ms)&&e.src.includes(t))return e;return null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(r)||function(t,n){const e=function(t,n){let e;return window.trustedTypes&&(e=window.trustedTypes.createPolicy("firebase-js-sdk-policy",n)),e}(0,{createScriptURL:Fs}),i=document.createElement("script"),s=`${Ms}?l=${t}&id=${n}`;i.src=e?null==e?void 0:e.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}(r,c.measurementId),s("js",new Date);const f=null!==(a=null==o?void 0:o.config)&&void 0!==a?a:{};return f.origin="firebase",f.update=!0,null!=l&&(f.firebase_id=l),s("config",c.measurementId,f),c.measurementId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(t){this.app=t}k(){return delete Ws[this.app.options.appId],Promise.resolve()}}let Ws={},Ks=[];const Js={};let Qs,Xs,Ys="dataLayer",Zs=!1;function tr(t,n,e){!function(){const t=[];if(f()&&t.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||t.push("Cookies are not available."),t.length>0){const n=t.map(((t,n)=>`(${n+1}) ${t}`)).join(" "),e=Ls.create("invalid-analytics-context",{errorInfo:n});xs.warn(e.message)}}();const i=t.options.appId;if(!i)throw Ls.create("no-app-id");if(!t.options.apiKey){if(!t.options.measurementId)throw Ls.create("no-api-key");xs.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=Ws[i])throw Ls.create("already-exists",{id:i});if(!Zs){!function(t){let n=[];Array.isArray(window[t])?n=window[t]:window[t]=n}(Ys);const{wrappedGtag:t,gtagCore:n}=function(t,n,e,i,s){let r=function(...t){window[i].push(arguments)};return window[s]&&"function"==typeof window[s]&&(r=window[s]),window[s]=function(t,n,e,i){return async function(s,...r){try{if("event"===s){const[i,s]=r;await async function(t,n,e,i,s){try{let r=[];if(s&&s.send_to){let t=s.send_to;Array.isArray(t)||(t=[t]);const i=await Us(e);for(const e of t){const t=i.find((t=>t.measurementId===e)),s=t&&n[t.appId];if(!s){r=[];break}r.push(s)}}0===r.length&&(r=Object.values(n)),await Promise.all(r),t("event",i,s||{})}catch(r){xs.error(r)}}(t,n,e,i,s)}else if("config"===s){const[s,o]=r;await async function(t,n,e,i,s,r){const o=i[s];try{if(o)await n[o];else{const t=(await Us(e)).find((t=>t.measurementId===s));t&&await n[t.appId]}}catch(a){xs.error(a)}t("config",s,r)}(t,n,e,i,s,o)}else if("consent"===s){const[n,e]=r;t("consent",n,e)}else if("get"===s){const[n,e,i]=r;t("get",n,e,i)}else if("set"===s){const[n]=r;t("set",n)}else t(s,...r)}catch(o){xs.error(o)}}}(r,t,n,e),{gtagCore:r,wrappedGtag:window[s]}}(Ws,Ks,Js,Ys,"gtag");Xs=t,Qs=n,Zs=!0}return Ws[i]=Gs(t,Ks,Js,n,Qs,Ys,e),new Hs(t)}function nr(t=zt()){const n=Ft(t=S(t),$s);return n.isInitialized()?n.getImmediate():function(t,n={}){const e=Ft(t,$s);if(e.isInitialized()){const t=e.getImmediate();if(g(n,e.getOptions()))return t;throw Ls.create("already-initialized")}return e.initialize({options:n})}(t)}const er="@firebase/analytics",ir="0.10.12";Lt(new N($s,((t,{options:n})=>tr(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),n)),"PUBLIC")),Lt(new N("analytics-internal",(function(t){try{const n=t.getProvider($s).getImmediate();return{logEvent:(t,e,i)=>function(t,n,e,i){t=S(t),async function(t,n,e,i,s){if(s&&s.global)t("event",e,i);else{const s=await n;t("event",e,Object.assign(Object.assign({},i),{send_to:s}))}}(Xs,Ws[t.app.options.appId],n,e,i).catch((t=>xs.error(t)))}(n,t,e,i)}}catch(n){throw Ls.create("interop-component-reg-failed",{reason:n})}}),"PRIVATE")),Gt(er,ir),Gt(er,ir,"esm2017"),
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Gt("firebase","11.6.0","app");var sr,rr,or="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var t;
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function e(t,n,e){e||(e=0);var i=Array(16);if("string"==typeof n)for(var s=0;16>s;++s)i[s]=n.charCodeAt(e++)|n.charCodeAt(e++)<<8|n.charCodeAt(e++)<<16|n.charCodeAt(e++)<<24;else for(s=0;16>s;++s)i[s]=n[e++]|n[e++]<<8|n[e++]<<16|n[e++]<<24;n=t.g[0],e=t.g[1],s=t.g[2];var r=t.g[3],o=n+(r^e&(s^r))+i[0]+3614090360&4294967295;o=(e=(s=(r=(n=(e=(s=(r=(n=(e=(s=(r=(n=(e=(s=(r=(n=(e=(s=(r=(n=(e=(s=(r=(n=(e=(s=(r=(n=(e=(s=(r=(n=(e=(s=(r=(n=(e=(s=(r=(n=(e=(s=(r=(n=(e=(s=(r=(n=(e=(s=(r=(n=(e=(s=(r=(n=(e=(s=(r=(n=e+(o<<7&4294967295|o>>>25))+((o=r+(s^n&(e^s))+i[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=s+(e^r&(n^e))+i[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=e+(n^s&(r^n))+i[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=n+(r^e&(s^r))+i[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=r+(s^n&(e^s))+i[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=s+(e^r&(n^e))+i[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=e+(n^s&(r^n))+i[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=n+(r^e&(s^r))+i[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=r+(s^n&(e^s))+i[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=s+(e^r&(n^e))+i[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=e+(n^s&(r^n))+i[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=n+(r^e&(s^r))+i[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=r+(s^n&(e^s))+i[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=s+(e^r&(n^e))+i[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=e+(n^s&(r^n))+i[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=n+(s^r&(e^s))+i[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=r+(e^s&(n^e))+i[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=s+(n^e&(r^n))+i[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=e+(r^n&(s^r))+i[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=n+(s^r&(e^s))+i[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=r+(e^s&(n^e))+i[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=s+(n^e&(r^n))+i[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=e+(r^n&(s^r))+i[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=n+(s^r&(e^s))+i[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=r+(e^s&(n^e))+i[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=s+(n^e&(r^n))+i[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=e+(r^n&(s^r))+i[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=n+(s^r&(e^s))+i[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=r+(e^s&(n^e))+i[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=s+(n^e&(r^n))+i[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=e+(r^n&(s^r))+i[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=n+(e^s^r)+i[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=r+(n^e^s)+i[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=s+(r^n^e)+i[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=e+(s^r^n)+i[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=n+(e^s^r)+i[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=r+(n^e^s)+i[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=s+(r^n^e)+i[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=e+(s^r^n)+i[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=n+(e^s^r)+i[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=r+(n^e^s)+i[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=s+(r^n^e)+i[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=e+(s^r^n)+i[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=n+(e^s^r)+i[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=r+(n^e^s)+i[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=s+(r^n^e)+i[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=e+(s^r^n)+i[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=n+(s^(e|~r))+i[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=r+(e^(n|~s))+i[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=s+(n^(r|~e))+i[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=e+(r^(s|~n))+i[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=n+(s^(e|~r))+i[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=r+(e^(n|~s))+i[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=s+(n^(r|~e))+i[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=e+(r^(s|~n))+i[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=n+(s^(e|~r))+i[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=r+(e^(n|~s))+i[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=s+(n^(r|~e))+i[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=e+(r^(s|~n))+i[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((r=(n=e+((o=n+(s^(e|~r))+i[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=r+(e^(n|~s))+i[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((s=r+((o=s+(n^(r|~e))+i[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~n))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+n&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+r&4294967295}function i(t,n){this.h=n;for(var e=[],i=!0,s=t.length-1;0<=s;s--){var r=0|t[s];i&&r==n||(e[s]=r,i=!1)}this.g=e}!function(t,n){function e(){}e.prototype=n.prototype,t.D=n.prototype,t.prototype=new e,t.prototype.constructor=t,t.C=function(t,e,i){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return n.prototype[e].apply(t,s)}}(n,(function(){this.blockSize=-1})),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},n.prototype.u=function(t,n){void 0===n&&(n=t.length);for(var i=n-this.blockSize,s=this.B,r=this.h,o=0;o<n;){if(0==r)for(;o<=i;)e(this,t,o),o+=this.blockSize;if("string"==typeof t){for(;o<n;)if(s[r++]=t.charCodeAt(o++),r==this.blockSize){e(this,s),r=0;break}}else for(;o<n;)if(s[r++]=t[o++],r==this.blockSize){e(this,s),r=0;break}}this.h=r,this.o+=n},n.prototype.v=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var n=1;n<t.length-8;++n)t[n]=0;var e=8*this.o;for(n=t.length-8;n<t.length;++n)t[n]=255&e,e/=256;for(this.u(t),t=Array(16),n=e=0;4>n;++n)for(var i=0;32>i;i+=8)t[e++]=this.g[n]>>>i&255;return t};var s={};function r(t){return-128<=t&&128>t?function(t){var n=s;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=function(t){return new i([0|t],0>t?-1:0)}(t)}(t):new i([0|t],0>t?-1:0)}function o(t){if(isNaN(t)||!isFinite(t))return a;if(0>t)return f(o(-t));for(var n=[],e=1,s=0;t>=e;s++)n[s]=t/e|0,e*=4294967296;return new i(n,0)}var a=r(0),h=r(1),u=r(16777216);function c(t){if(0!=t.h)return!1;for(var n=0;n<t.g.length;n++)if(0!=t.g[n])return!1;return!0}function l(t){return-1==t.h}function f(t){for(var n=t.g.length,e=[],s=0;s<n;s++)e[s]=~t.g[s];return new i(e,~t.h).add(h)}function d(t,n){return t.add(f(n))}function w(t,n){for(;(65535&t[n])!=t[n];)t[n+1]+=t[n]>>>16,t[n]&=65535,n++}function p(t,n){this.g=t,this.h=n}function m(t,n){if(c(n))throw Error("division by zero");if(c(t))return new p(a,a);if(l(t))return n=m(f(t),n),new p(f(n.g),f(n.h));if(l(n))return n=m(t,f(n)),new p(f(n.g),n.h);if(30<t.g.length){if(l(t)||l(n))throw Error("slowDivide_ only works with positive integers.");for(var e=h,i=n;0>=i.l(t);)e=v(e),i=v(i);var s=g(e,1),r=g(i,1);for(i=g(i,2),e=g(e,2);!c(i);){var u=r.add(i);0>=u.l(t)&&(s=s.add(e),r=u),i=g(i,1),e=g(e,1)}return n=d(t,s.j(n)),new p(s,n)}for(s=a;0<=t.l(n);){for(e=Math.max(1,Math.floor(t.m()/n.m())),i=48>=(i=Math.ceil(Math.log(e)/Math.LN2))?1:Math.pow(2,i-48),u=(r=o(e)).j(n);l(u)||0<u.l(t);)u=(r=o(e-=i)).j(n);c(r)&&(r=h),s=s.add(r),t=d(t,u)}return new p(s,t)}function v(t){for(var n=t.g.length+1,e=[],s=0;s<n;s++)e[s]=t.i(s)<<1|t.i(s-1)>>>31;return new i(e,t.h)}function g(t,n){var e=n>>5;n%=32;for(var s=t.g.length-e,r=[],o=0;o<s;o++)r[o]=0<n?t.i(o+e)>>>n|t.i(o+e+1)<<32-n:t.i(o+e);return new i(r,t.h)}(t=i.prototype).m=function(){if(l(this))return-f(this).m();for(var t=0,n=1,e=0;e<this.g.length;e++){var i=this.i(e);t+=(0<=i?i:4294967296+i)*n,n*=4294967296}return t},t.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(c(this))return"0";if(l(this))return"-"+f(this).toString(t);for(var n=o(Math.pow(t,6)),e=this,i="";;){var s=m(e,n).g,r=((0<(e=d(e,s.j(n))).g.length?e.g[0]:e.h)>>>0).toString(t);if(c(e=s))return r+i;for(;6>r.length;)r="0"+r;i=r+i}},t.i=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},t.l=function(t){return l(t=d(this,t))?-1:c(t)?0:1},t.abs=function(){return l(this)?f(this):this},t.add=function(t){for(var n=Math.max(this.g.length,t.g.length),e=[],s=0,r=0;r<=n;r++){var o=s+(65535&this.i(r))+(65535&t.i(r)),a=(o>>>16)+(this.i(r)>>>16)+(t.i(r)>>>16);s=a>>>16,o&=65535,a&=65535,e[r]=a<<16|o}return new i(e,-2147483648&e[e.length-1]?-1:0)},t.j=function(t){if(c(this)||c(t))return a;if(l(this))return l(t)?f(this).j(f(t)):f(f(this).j(t));if(l(t))return f(this.j(f(t)));if(0>this.l(u)&&0>t.l(u))return o(this.m()*t.m());for(var n=this.g.length+t.g.length,e=[],s=0;s<2*n;s++)e[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<t.g.length;r++){var h=this.i(s)>>>16,d=65535&this.i(s),p=t.i(r)>>>16,m=65535&t.i(r);e[2*s+2*r]+=d*m,w(e,2*s+2*r),e[2*s+2*r+1]+=h*m,w(e,2*s+2*r+1),e[2*s+2*r+1]+=d*p,w(e,2*s+2*r+1),e[2*s+2*r+2]+=h*p,w(e,2*s+2*r+2)}for(s=0;s<n;s++)e[s]=e[2*s+1]<<16|e[2*s];for(s=n;s<2*n;s++)e[s]=0;return new i(e,0)},t.A=function(t){return m(this,t).h},t.and=function(t){for(var n=Math.max(this.g.length,t.g.length),e=[],s=0;s<n;s++)e[s]=this.i(s)&t.i(s);return new i(e,this.h&t.h)},t.or=function(t){for(var n=Math.max(this.g.length,t.g.length),e=[],s=0;s<n;s++)e[s]=this.i(s)|t.i(s);return new i(e,this.h|t.h)},t.xor=function(t){for(var n=Math.max(this.g.length,t.g.length),e=[],s=0;s<n;s++)e[s]=this.i(s)^t.i(s);return new i(e,this.h^t.h)},n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,rr=n,i.prototype.add=i.prototype.add,i.prototype.multiply=i.prototype.j,i.prototype.modulo=i.prototype.A,i.prototype.compare=i.prototype.l,i.prototype.toNumber=i.prototype.m,i.prototype.toString=i.prototype.toString,i.prototype.getBits=i.prototype.i,i.fromNumber=o,i.fromString=function t(n,e){if(0==n.length)throw Error("number format error: empty string");if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if("-"==n.charAt(0))return f(t(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var i=o(Math.pow(e,8)),s=a,r=0;r<n.length;r+=8){var h=Math.min(8,n.length-r),u=parseInt(n.substring(r,r+h),e);8>h?(h=o(Math.pow(e,h)),s=s.j(h).add(o(u))):s=(s=s.j(i)).add(o(u))}return s},sr=i}).apply(void 0!==or?or:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var ar,hr,ur,cr,lr,fr,dr,wr,pr="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var t,n="function"==typeof Object.defineProperties?Object.defineProperty:function(t,n,e){return t==Array.prototype||t==Object.prototype||(t[n]=e.value),t},e=function(t){t=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof pr&&pr];for(var n=0;n<t.length;++n){var e=t[n];if(e&&e.Math==Math)return e}throw Error("Cannot find global object")}(this);!function(t,i){if(i)t:{var s=e;t=t.split(".");for(var r=0;r<t.length-1;r++){var o=t[r];if(!(o in s))break t;s=s[o]}(i=i(r=s[t=t[t.length-1]]))!=r&&null!=i&&n(s,t,{configurable:!0,writable:!0,value:i})}}("Array.prototype.values",(function(t){return t||function(){return function(t,n){t instanceof String&&(t+="");var e=0,i=!1,s={next:function(){if(!i&&e<t.length){var s=e++;return{value:n(0,t[s]),done:!1}}return i=!0,{done:!0,value:void 0}}};return s[Symbol.iterator]=function(){return s},s}(this,(function(t,n){return n}))}}));
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
var i=i||{},s=this||self;function r(t){var n=typeof t;return"array"==(n="object"!=n?n:t?Array.isArray(t)?"array":n:"null")||"object"==n&&"number"==typeof t.length}function o(t){var n=typeof t;return"object"==n&&null!=t||"function"==n}function a(t,n,e){return t.call.apply(t.bind,arguments)}function h(t,n,e){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(e,i),t.apply(n,e)}}return function(){return t.apply(n,arguments)}}function u(t,n,e){return(u=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?a:h).apply(null,arguments)}function c(t,n){var e=Array.prototype.slice.call(arguments,1);return function(){var n=e.slice();return n.push.apply(n,arguments),t.apply(this,n)}}function l(t,n){function e(){}e.prototype=n.prototype,t.aa=n.prototype,t.prototype=new e,t.prototype.constructor=t,t.Qb=function(t,e,i){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return n.prototype[e].apply(t,s)}}function f(t){const n=t.length;if(0<n){const e=Array(n);for(let i=0;i<n;i++)e[i]=t[i];return e}return[]}function d(t,n){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(r(n)){const e=t.length||0,i=n.length||0;t.length=e+i;for(let s=0;s<i;s++)t[e+s]=n[s]}else t.push(n)}}function w(t){return/^[\s\xa0]*$/.test(t)}function p(){var t=s.navigator;return t&&(t=t.userAgent)?t:""}function m(t){return m[" "](t),t}m[" "]=function(){};var v=!(-1==p().indexOf("Gecko")||-1!=p().toLowerCase().indexOf("webkit")&&-1==p().indexOf("Edge")||-1!=p().indexOf("Trident")||-1!=p().indexOf("MSIE")||-1!=p().indexOf("Edge"));function g(t,n,e){for(const i in t)n.call(e,t[i],i,t)}function y(t){const n={};for(const e in t)n[e]=t[e];return n}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(t,n){let e,i;for(let s=1;s<arguments.length;s++){for(e in i=arguments[s],i)t[e]=i[e];for(let n=0;n<b.length;n++)e=b[n],Object.prototype.hasOwnProperty.call(i,e)&&(t[e]=i[e])}}function I(t){var n=1;t=t.split(":");const e=[];for(;0<n&&t.length;)e.push(t.shift()),n--;return t.length&&e.push(t.join(":")),e}function T(t){s.setTimeout((()=>{throw t}),0)}function _(){var t=k;let n=null;return t.g&&(n=t.g,t.g=t.g.next,t.g||(t.h=null),n.next=null),n}var A=new class{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new S),(t=>t.reset()));class S{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}let N,O=!1,k=new class{constructor(){this.h=this.g=null}add(t,n){const e=A.get();e.set(t,n),this.h?this.h.next=e:this.g=e,this.h=e}},C=()=>{const t=s.Promise.resolve(void 0);N=()=>{t.then(R)}};var R=()=>{for(var t;t=_();){try{t.h.call(t.g)}catch(e){T(e)}var n=A;n.j(t),100>n.h&&(n.h++,t.next=n.g,n.g=t)}O=!1};function D(){this.s=this.s,this.C=this.C}function P(t,n){this.type=t,this.g=this.target=n,this.defaultPrevented=!1}D.prototype.s=!1,D.prototype.ma=function(){this.s||(this.s=!0,this.N())},D.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},P.prototype.h=function(){this.defaultPrevented=!0};var $=function(){if(!s.addEventListener||!Object.defineProperty)return!1;var t=!1,n=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};s.addEventListener("test",t,n),s.removeEventListener("test",t,n)}catch(e){}return t}();function M(t,n){if(P.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var e=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=n,n=t.relatedTarget){if(v){t:{try{m(n.nodeName);var s=!0;break t}catch(r){}s=!1}s||(n=null)}}else"mouseover"==e?n=t.fromElement:"mouseout"==e&&(n=t.toElement);this.relatedTarget=n,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:x[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&M.aa.h.call(this)}}l(M,P);var x={2:"touch",3:"pen",4:"mouse"};M.prototype.h=function(){M.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var L="closure_listenable_"+(1e6*Math.random()|0),F=0;function U(t,n,e,i,s){this.listener=t,this.proxy=null,this.src=n,this.type=e,this.capture=!!i,this.ha=s,this.key=++F,this.da=this.fa=!1}function j(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function V(t){this.src=t,this.g={},this.h=0}function q(t,n){var e=n.type;if(e in t.g){var i,s=t.g[e],r=Array.prototype.indexOf.call(s,n,void 0);(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(j(n),0==t.g[e].length&&(delete t.g[e],t.h--))}}function B(t,n,e,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.da&&r.listener==n&&r.capture==!!e&&r.ha==i)return s}return-1}V.prototype.add=function(t,n,e,i,s){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var o=B(t,n,i,s);return-1<o?(n=t[o],e||(n.fa=!1)):((n=new U(n,this.src,r,!!i,s)).fa=e,t.push(n)),n};var z="closure_lm_"+(1e6*Math.random()|0),G={};function H(t,n,e,i,s){if(Array.isArray(n)){for(var r=0;r<n.length;r++)H(t,n[r],e,i,s);return null}return e=Z(e),t&&t[L]?t.K(n,e,!!o(i)&&!!i.capture,s):function(t,n,e,i,s,r){if(!n)throw Error("Invalid event type");var a=o(s)?!!s.capture:!!s,h=X(t);if(h||(t[z]=h=new V(t)),(e=h.add(n,e,i,a,r)).proxy)return e;if(i=function(){const t=Q;return function n(e){return t.call(n.src,n.listener,e)}}(),e.proxy=i,i.src=t,i.listener=e,t.addEventListener)$||(s=a),void 0===s&&(s=!1),t.addEventListener(n.toString(),i,s);else if(t.attachEvent)t.attachEvent(J(n.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return e}(t,n,e,!1,i,s)}function W(t,n,e,i,s){if(Array.isArray(n))for(var r=0;r<n.length;r++)W(t,n[r],e,i,s);else i=o(i)?!!i.capture:!!i,e=Z(e),t&&t[L]?(t=t.i,(n=String(n).toString())in t.g&&-1<(e=B(r=t.g[n],e,i,s))&&(j(r[e]),Array.prototype.splice.call(r,e,1),0==r.length&&(delete t.g[n],t.h--))):t&&(t=X(t))&&(n=t.g[n.toString()],t=-1,n&&(t=B(n,e,i,s)),(e=-1<t?n[t]:null)&&K(e))}function K(t){if("number"!=typeof t&&t&&!t.da){var n=t.src;if(n&&n[L])q(n.i,t);else{var e=t.type,i=t.proxy;n.removeEventListener?n.removeEventListener(e,i,t.capture):n.detachEvent?n.detachEvent(J(e),i):n.addListener&&n.removeListener&&n.removeListener(i),(e=X(n))?(q(e,t),0==e.h&&(e.src=null,n[z]=null)):j(t)}}}function J(t){return t in G?G[t]:G[t]="on"+t}function Q(t,n){if(t.da)t=!0;else{n=new M(n,this);var e=t.listener,i=t.ha||t.src;t.fa&&K(t),t=e.call(i,n)}return t}function X(t){return(t=t[z])instanceof V?t:null}var Y="__closure_events_fn_"+(1e9*Math.random()>>>0);function Z(t){return"function"==typeof t?t:(t[Y]||(t[Y]=function(n){return t.handleEvent(n)}),t[Y])}function tt(){D.call(this),this.i=new V(this),this.M=this,this.F=null}function nt(t,n){var e,i=t.F;if(i)for(e=[];i;i=i.F)e.push(i);if(t=t.M,i=n.type||n,"string"==typeof n)n=new P(n,t);else if(n instanceof P)n.target=n.target||t;else{var s=n;E(n=new P(i,t),s)}if(s=!0,e)for(var r=e.length-1;0<=r;r--){var o=n.g=e[r];s=et(o,i,!0,n)&&s}if(s=et(o=n.g=t,i,!0,n)&&s,s=et(o,i,!1,n)&&s,e)for(r=0;r<e.length;r++)s=et(o=n.g=e[r],i,!1,n)&&s}function et(t,n,e,i){if(!(n=t.i.g[String(n)]))return!0;n=n.concat();for(var s=!0,r=0;r<n.length;++r){var o=n[r];if(o&&!o.da&&o.capture==e){var a=o.listener,h=o.ha||o.src;o.fa&&q(t.i,o),s=!1!==a.call(h,i)&&s}}return s&&!i.defaultPrevented}function it(t,n,e){if("function"==typeof t)e&&(t=u(t,e));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=u(t.handleEvent,t)}return 2147483647<Number(n)?-1:s.setTimeout(t,n||0)}function st(t){t.g=it((()=>{t.g=null,t.i&&(t.i=!1,st(t))}),t.l);const n=t.h;t.h=null,t.m.apply(null,n)}l(tt,D),tt.prototype[L]=!0,tt.prototype.removeEventListener=function(t,n,e,i){W(this,t,n,e,i)},tt.prototype.N=function(){if(tt.aa.N.call(this),this.i){var t,n=this.i;for(t in n.g){for(var e=n.g[t],i=0;i<e.length;i++)j(e[i]);delete n.g[t],n.h--}}this.F=null},tt.prototype.K=function(t,n,e,i){return this.i.add(String(t),n,!1,e,i)},tt.prototype.L=function(t,n,e,i){return this.i.add(String(t),n,!0,e,i)};class rt extends D{constructor(t,n){super(),this.m=t,this.l=n,this.h=null,this.i=!1,this.g=null}j(t){this.h=arguments,this.g?this.i=!0:st(this)}N(){super.N(),this.g&&(s.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ot(t){D.call(this),this.h=t,this.g={}}l(ot,D);var at=[];function ht(t){g(t.g,(function(t,n){this.g.hasOwnProperty(n)&&K(t)}),t),t.g={}}ot.prototype.N=function(){ot.aa.N.call(this),ht(this)},ot.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ut=s.JSON.stringify,ct=s.JSON.parse,lt=class{stringify(t){return s.JSON.stringify(t,void 0)}parse(t){return s.JSON.parse(t,void 0)}};function ft(){}function dt(t){return t.h||(t.h=t.i())}function wt(){}ft.prototype.h=null;var pt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function mt(){P.call(this,"d")}function vt(){P.call(this,"c")}l(mt,P),l(vt,P);var gt={},yt=null;function bt(){return yt=yt||new tt}function Et(t){P.call(this,gt.La,t)}function It(t){const n=bt();nt(n,new Et(n))}function Tt(t,n){P.call(this,gt.STAT_EVENT,t),this.stat=n}function _t(t){const n=bt();nt(n,new Tt(n,t))}function At(t,n){P.call(this,gt.Ma,t),this.size=n}function St(t,n){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return s.setTimeout((function(){t()}),n)}function Nt(){this.g=!0}function Ot(t,n,e,i){t.info((function(){return"XMLHTTP TEXT ("+n+"): "+function(t,n){if(!t.g)return n;if(!n)return null;try{var e=JSON.parse(n);if(e)for(t=0;t<e.length;t++)if(Array.isArray(e[t])){var i=e[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<s.length;o++)s[o]=""}}}return ut(e)}catch(a){return n}}(t,e)+(i?" "+i:"")}))}gt.La="serverreachability",l(Et,P),gt.STAT_EVENT="statevent",l(Tt,P),gt.Ma="timingevent",l(At,P),Nt.prototype.xa=function(){this.g=!1},Nt.prototype.info=function(){};var kt,Ct={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Rt={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function Dt(){}function Pt(t,n,e,i){this.j=t,this.i=n,this.l=e,this.R=i||1,this.U=new ot(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new $t}function $t(){this.i=null,this.g="",this.h=!1}l(Dt,ft),Dt.prototype.g=function(){return new XMLHttpRequest},Dt.prototype.i=function(){return{}},kt=new Dt;var Mt={},xt={};function Lt(t,n,e){t.L=1,t.v=cn(rn(n)),t.m=e,t.P=!0,Ft(t,null)}function Ft(t,n){t.F=Date.now(),Vt(t),t.A=rn(t.v);var e=t.A,i=t.R;Array.isArray(i)||(i=[String(i)]),Tn(e.i,"t",i),t.C=0,e=t.j.J,t.h=new $t,t.g=ce(t.j,e?n:null,!t.m),0<t.O&&(t.M=new rt(u(t.Y,t,t.g),t.O)),n=t.U,e=t.g,i=t.ca;var s="readystatechange";Array.isArray(s)||(s&&(at[0]=s.toString()),s=at);for(var r=0;r<s.length;r++){var o=H(e,s[r],i||n.handleEvent,!1,n.h||n);if(!o)break;n.g[o.key]=o}n=t.H?y(t.H):{},t.m?(t.u||(t.u="POST"),n["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,n)):(t.u="GET",t.g.ea(t.A,t.u,null,n)),It(),function(t,n,e,i,s,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),h=0;h<a.length;h++){var u=a[h].split("=");if(1<u.length){var c=u[0];u=u[1];var l=c.split("_");o=2<=l.length&&"type"==l[1]?o+(c+"=")+u+"&":o+(c+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+n+"\n"+e+"\n"+o}))}(t.i,t.u,t.A,t.l,t.R,t.m)}function Ut(t){return!!t.g&&"GET"==t.u&&2!=t.L&&t.j.Ca}function jt(t,n){var e=t.C,i=n.indexOf("\n",e);return-1==i?xt:(e=Number(n.substring(e,i)),isNaN(e)?Mt:(i+=1)+e>n.length?xt:(n=n.slice(i,i+e),t.C=i+e,n))}function Vt(t){t.S=Date.now()+t.I,qt(t,t.I)}function qt(t,n){if(null!=t.B)throw Error("WatchDog timer not null");t.B=St(u(t.ba,t),n)}function Bt(t){t.B&&(s.clearTimeout(t.B),t.B=null)}function zt(t){0==t.j.G||t.J||re(t.j,t)}function Gt(t){Bt(t);var n=t.M;n&&"function"==typeof n.ma&&n.ma(),t.M=null,ht(t.U),t.g&&(n=t.g,t.g=null,n.abort(),n.ma())}function Ht(t,n){try{var e=t.j;if(0!=e.G&&(e.g==t||Xt(e.h,t)))if(!t.K&&Xt(e.h,t)&&3==e.G){try{var i=e.Da.g.parse(n)}catch(c){i=null}if(Array.isArray(i)&&3==i.length){var s=i;if(0==s[0]){t:if(!e.u){if(e.g){if(!(e.g.F+3e3<t.F))break t;se(e),Kn(e)}ne(e),_t(18)}}else e.za=s[1],0<e.za-e.T&&37500>s[2]&&e.F&&0==e.v&&!e.C&&(e.C=St(u(e.Za,e),6e3));if(1>=Qt(e.h)&&e.ca){try{e.ca()}catch(c){}e.ca=void 0}}else ae(e,11)}else if((t.K||e.g==t)&&se(e),!w(n))for(s=e.Da.g.parse(n),n=0;n<s.length;n++){let u=s[n];if(e.T=u[0],u=u[1],2==e.G)if("c"==u[0]){e.K=u[1],e.ia=u[2];const n=u[3];null!=n&&(e.la=n,e.j.info("VER="+e.la));const s=u[4];null!=s&&(e.Aa=s,e.j.info("SVER="+e.Aa));const c=u[5];null!=c&&"number"==typeof c&&0<c&&(i=1.5*c,e.L=i,e.j.info("backChannelRequestTimeoutMs_="+i)),i=e;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=i.h;r.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&(Yt(r,r.h),r.h=null))}if(i.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.ya=t,un(i.I,i.D,t))}}e.G=3,e.l&&e.l.ua(),e.ba&&(e.R=Date.now()-t.F,e.j.info("Handshake RTT: "+e.R+"ms"));var o=t;if((i=e).qa=ue(i,i.J?i.ia:null,i.W),o.K){Zt(i.h,o);var a=o,h=i.L;h&&(a.I=h),a.B&&(Bt(a),Vt(a)),i.g=o}else te(i);0<e.i.length&&Qn(e)}else"stop"!=u[0]&&"close"!=u[0]||ae(e,7);else 3==e.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?ae(e,7):Wn(e):"noop"!=u[0]&&e.l&&e.l.ta(u),e.v=0)}It()}catch(c){}}Pt.prototype.ca=function(t){t=t.target;const n=this.M;n&&3==Bn(t)?n.j():this.Y(t)},Pt.prototype.Y=function(t){try{if(t==this.g)t:{const f=Bn(this.g);var n=this.g.Ba();if(this.g.Z(),!(3>f)&&(3!=f||this.g&&(this.h.h||this.g.oa()||zn(this.g)))){this.J||4!=f||7==n||It(),Bt(this);var e=this.g.Z();this.X=e;n:if(Ut(this)){var i=zn(this.g);t="";var r=i.length,o=4==Bn(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Gt(this),zt(this);var a="";break n}this.h.i=new s.TextDecoder}for(n=0;n<r;n++)this.h.h=!0,t+=this.h.i.decode(i[n],{stream:!(o&&n==r-1)});i.length=0,this.h.g+=t,this.C=0,a=this.h.g}else a=this.g.oa();if(this.o=200==e,function(t,n,e,i,s,r,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+n+"\n"+e+"\n"+r+" "+o}))}(this.i,this.u,this.A,this.l,this.R,f,e),this.o){if(this.T&&!this.K){n:{if(this.g){var h,u=this.g;if((h=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(h)){var c=h;break n}}c=null}if(!(e=c)){this.o=!1,this.s=3,_t(12),Gt(this),zt(this);break t}Ot(this.i,this.l,e,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ht(this,e)}if(this.P){let t;for(e=!0;!this.J&&this.C<a.length;){if(t=jt(this,a),t==xt){4==f&&(this.s=4,_t(14),e=!1),Ot(this.i,this.l,null,"[Incomplete Response]");break}if(t==Mt){this.s=4,_t(15),Ot(this.i,this.l,a,"[Invalid Chunk]"),e=!1;break}Ot(this.i,this.l,t,null),Ht(this,t)}if(Ut(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=f||0!=a.length||this.h.h||(this.s=1,_t(16),e=!1),this.o=this.o&&e,e){if(0<a.length&&!this.W){this.W=!0;var l=this.j;l.g==this&&l.ba&&!l.M&&(l.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),ee(l),l.M=!0,_t(11))}}else Ot(this.i,this.l,a,"[Invalid Chunked Response]"),Gt(this),zt(this)}else Ot(this.i,this.l,a,null),Ht(this,a);4==f&&Gt(this),this.o&&!this.J&&(4==f?re(this.j,this):(this.o=!1,Vt(this)))}else(function(t){const n={};t=(t.g&&2<=Bn(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let i=0;i<t.length;i++){if(w(t[i]))continue;var e=I(t[i]);const s=e[0];if("string"!=typeof(e=e[1]))continue;e=e.trim();const r=n[s]||[];n[s]=r,r.push(e)}!function(t,n){for(const e in t)n.call(void 0,t[e],e,t)}(n,(function(t){return t.join(", ")}))})(this.g),400==e&&0<a.indexOf("Unknown SID")?(this.s=3,_t(12)):(this.s=0,_t(13)),Gt(this),zt(this)}}}catch(f){}},Pt.prototype.cancel=function(){this.J=!0,Gt(this)},Pt.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(function(t,n){t.info((function(){return"TIMEOUT: "+n}))}(this.i,this.A),2!=this.L&&(It(),_t(17)),Gt(this),this.s=2,zt(this)):qt(this,this.S-t)};var Wt=class{constructor(t,n){this.g=t,this.map=n}};function Kt(t){this.l=t||10,t=s.PerformanceNavigationTiming?0<(t=s.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):!!(s.chrome&&s.chrome.loadTimes&&s.chrome.loadTimes()&&s.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Jt(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Qt(t){return t.h?1:t.g?t.g.size:0}function Xt(t,n){return t.h?t.h==n:!!t.g&&t.g.has(n)}function Yt(t,n){t.g?t.g.add(n):t.h=n}function Zt(t,n){t.h&&t.h==n?t.h=null:t.g&&t.g.has(n)&&t.g.delete(n)}function tn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let n=t.i;for(const e of t.g.values())n=n.concat(e.D);return n}return f(t.i)}function nn(t,n){if(t.forEach&&"function"==typeof t.forEach)t.forEach(n,void 0);else if(r(t)||"string"==typeof t)Array.prototype.forEach.call(t,n,void 0);else for(var e=function(t){if(t.na&&"function"==typeof t.na)return t.na();if(!t.V||"function"!=typeof t.V){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(r(t)||"string"==typeof t){var n=[];t=t.length;for(var e=0;e<t;e++)n.push(e);return n}n=[],e=0;for(const i in t)n[e++]=i;return n}}}(t),i=function(t){if(t.V&&"function"==typeof t.V)return t.V();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(r(t)){for(var n=[],e=t.length,i=0;i<e;i++)n.push(t[i]);return n}for(i in n=[],e=0,t)n[e++]=t[i];return n}(t),s=i.length,o=0;o<s;o++)n.call(void 0,i[o],e&&e[o],t)}Kt.prototype.cancel=function(){if(this.i=tn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var en=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sn(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof sn){this.h=t.h,on(this,t.j),this.o=t.o,this.g=t.g,an(this,t.s),this.l=t.l;var n=t.i,e=new yn;e.i=n.i,n.g&&(e.g=new Map(n.g),e.h=n.h),hn(this,e),this.m=t.m}else t&&(n=String(t).match(en))?(this.h=!1,on(this,n[1]||"",!0),this.o=ln(n[2]||""),this.g=ln(n[3]||"",!0),an(this,n[4]),this.l=ln(n[5]||"",!0),hn(this,n[6]||"",!0),this.m=ln(n[7]||"")):(this.h=!1,this.i=new yn(null,this.h))}function rn(t){return new sn(t)}function on(t,n,e){t.j=e?ln(n,!0):n,t.j&&(t.j=t.j.replace(/:$/,""))}function an(t,n){if(n){if(n=Number(n),isNaN(n)||0>n)throw Error("Bad port number "+n);t.s=n}else t.s=null}function hn(t,n,e){n instanceof yn?(t.i=n,function(t,n){n&&!t.j&&(bn(t),t.i=null,t.g.forEach((function(t,n){var e=n.toLowerCase();n!=e&&(En(this,n),Tn(this,e,t))}),t)),t.j=n}(t.i,t.h)):(e||(n=fn(n,vn)),t.i=new yn(n,t.h))}function un(t,n,e){t.i.set(n,e)}function cn(t){return un(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ln(t,n){return t?n?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function fn(t,n,e){return"string"==typeof t?(t=encodeURI(t).replace(n,dn),e&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function dn(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}sn.prototype.toString=function(){var t=[],n=this.j;n&&t.push(fn(n,wn,!0),":");var e=this.g;return(e||"file"==n)&&(t.push("//"),(n=this.o)&&t.push(fn(n,wn,!0),"@"),t.push(encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(e=this.s)&&t.push(":",String(e))),(e=this.l)&&(this.g&&"/"!=e.charAt(0)&&t.push("/"),t.push(fn(e,"/"==e.charAt(0)?mn:pn,!0))),(e=this.i.toString())&&t.push("?",e),(e=this.m)&&t.push("#",fn(e,gn)),t.join("")};var wn=/[#\/\?@]/g,pn=/[#\?:]/g,mn=/[#\?]/g,vn=/[#\?@]/g,gn=/#/g;function yn(t,n){this.h=this.g=null,this.i=t||null,this.j=!!n}function bn(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,n){if(t){t=t.split("&");for(var e=0;e<t.length;e++){var i=t[e].indexOf("="),s=null;if(0<=i){var r=t[e].substring(0,i);s=t[e].substring(i+1)}else r=t[e];n(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(t.i,(function(n,e){t.add(decodeURIComponent(n.replace(/\+/g," ")),e)})))}function En(t,n){bn(t),n=_n(t,n),t.g.has(n)&&(t.i=null,t.h-=t.g.get(n).length,t.g.delete(n))}function In(t,n){return bn(t),n=_n(t,n),t.g.has(n)}function Tn(t,n,e){En(t,n),0<e.length&&(t.i=null,t.g.set(_n(t,n),f(e)),t.h+=e.length)}function _n(t,n){return n=String(n),t.j&&(n=n.toLowerCase()),n}function An(t,n,e,i,s){try{s&&(s.onload=null,s.onerror=null,s.onabort=null,s.ontimeout=null),i(e)}catch(r){}}function Sn(){this.g=new lt}function Nn(t,n,e){const i=e||"";try{nn(t,(function(t,e){let s=t;o(t)&&(s=ut(t)),n.push(i+e+"="+encodeURIComponent(s))}))}catch(s){throw n.push(i+"type="+encodeURIComponent("_badmap")),s}}function On(t){this.l=t.Ub||null,this.j=t.eb||!1}function kn(t,n){tt.call(this),this.D=t,this.o=n,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function Cn(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}function Rn(t){t.readyState=4,t.l=null,t.j=null,t.v=null,Dn(t)}function Dn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function Pn(t){let n="";return g(t,(function(t,e){n+=e,n+=":",n+=t,n+="\r\n"})),n}function $n(t,n,e){t:{for(i in e){var i=!1;break t}i=!0}i||(e=Pn(e),"string"==typeof t?null!=e&&encodeURIComponent(String(e)):un(t,n,e))}function Mn(t){tt.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(t=yn.prototype).add=function(t,n){bn(this),this.i=null,t=_n(this,t);var e=this.g.get(t);return e||this.g.set(t,e=[]),e.push(n),this.h+=1,this},t.forEach=function(t,n){bn(this),this.g.forEach((function(e,i){e.forEach((function(e){t.call(n,e,i,this)}),this)}),this)},t.na=function(){bn(this);const t=Array.from(this.g.values()),n=Array.from(this.g.keys()),e=[];for(let i=0;i<n.length;i++){const s=t[i];for(let t=0;t<s.length;t++)e.push(n[i])}return e},t.V=function(t){bn(this);let n=[];if("string"==typeof t)In(this,t)&&(n=n.concat(this.g.get(_n(this,t))));else{t=Array.from(this.g.values());for(let e=0;e<t.length;e++)n=n.concat(t[e])}return n},t.set=function(t,n){return bn(this),this.i=null,In(this,t=_n(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[n]),this.h+=1,this},t.get=function(t,n){return t&&0<(t=this.V(t)).length?String(t[0]):n},t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],n=Array.from(this.g.keys());for(var e=0;e<n.length;e++){var i=n[e];const r=encodeURIComponent(String(i)),o=this.V(i);for(i=0;i<o.length;i++){var s=r;""!==o[i]&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")},l(On,ft),On.prototype.g=function(){return new kn(this.l,this.j)},On.prototype.i=function(t){return function(){return t}}({}),l(kn,tt),(t=kn.prototype).open=function(t,n){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=n,this.readyState=1,Dn(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const n={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(n.body=t),(this.D||s).fetch(new Request(this.A,n)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Rn(this)),this.readyState=0},t.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Dn(this)),this.g&&(this.readyState=3,Dn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==s.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Cn(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))},t.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var n=t.value?t.value:new Uint8Array(0);(n=this.v.decode(n,{stream:!t.done}))&&(this.response=this.responseText+=n)}t.done?Rn(this):Dn(this),3==this.readyState&&Cn(this)}},t.Ra=function(t){this.g&&(this.response=this.responseText=t,Rn(this))},t.Qa=function(t){this.g&&(this.response=t,Rn(this))},t.ga=function(){this.g&&Rn(this)},t.setRequestHeader=function(t,n){this.u.append(t,n)},t.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],n=this.h.entries();for(var e=n.next();!e.done;)e=e.value,t.push(e[0]+": "+e[1]),e=n.next();return t.join("\r\n")},Object.defineProperty(kn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}}),l(Mn,tt);var xn=/^https?$/i,Ln=["POST","PUT"];function Fn(t,n){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=n,t.m=5,Un(t),Vn(t)}function Un(t){t.A||(t.A=!0,nt(t,"complete"),nt(t,"error"))}function jn(t){if(t.h&&void 0!==i&&(!t.v[1]||4!=Bn(t)||2!=t.Z()))if(t.u&&4==Bn(t))it(t.Ea,0,t);else if(nt(t,"readystatechange"),4==Bn(t)){t.h=!1;try{const i=t.Z();t:switch(i){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var n=!0;break t;default:n=!1}var e;if(!(e=n)){var r;if(r=0===i){var o=String(t.D).match(en)[1]||null;!o&&s.self&&s.self.location&&(o=s.self.location.protocol.slice(0,-1)),r=!xn.test(o?o.toLowerCase():"")}e=r}if(e)nt(t,"complete"),nt(t,"success");else{t.m=6;try{var a=2<Bn(t)?t.g.statusText:""}catch(h){a=""}t.l=a+" ["+t.Z()+"]",Un(t)}}finally{Vn(t)}}}function Vn(t,n){if(t.g){qn(t);const i=t.g,s=t.v[0]?()=>{}:null;t.g=null,t.v=null,n||nt(t,"ready");try{i.onreadystatechange=s}catch(e){}}}function qn(t){t.I&&(s.clearTimeout(t.I),t.I=null)}function Bn(t){return t.g?t.g.readyState:0}function zn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(n){return null}}function Gn(t,n,e){return e&&e.internalChannelParams&&e.internalChannelParams[t]||n}function Hn(t){this.Aa=0,this.i=[],this.j=new Nt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Gn("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Gn("baseRetryDelayMs",5e3,t),this.cb=Gn("retryDelaySeedMs",1e4,t),this.Wa=Gn("forwardChannelMaxRetries",2,t),this.wa=Gn("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new Kt(t&&t.concurrentRequestLimit),this.Da=new Sn,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function Wn(t){if(Jn(t),3==t.G){var n=t.U++,e=rn(t.I);if(un(e,"SID",t.K),un(e,"RID",n),un(e,"TYPE","terminate"),Yn(t,e),(n=new Pt(t,t.j,n)).L=2,n.v=cn(rn(e)),e=!1,s.navigator&&s.navigator.sendBeacon)try{e=s.navigator.sendBeacon(n.v.toString(),"")}catch(i){}!e&&s.Image&&((new Image).src=n.v,e=!0),e||(n.g=ce(n.j,null),n.g.ea(n.v)),n.F=Date.now(),Vt(n)}he(t)}function Kn(t){t.g&&(ee(t),t.g.cancel(),t.g=null)}function Jn(t){Kn(t),t.u&&(s.clearTimeout(t.u),t.u=null),se(t),t.h.cancel(),t.s&&("number"==typeof t.s&&s.clearTimeout(t.s),t.s=null)}function Qn(t){if(!Jt(t.h)&&!t.s){t.s=!0;var n=t.Ga;N||C(),O||(N(),O=!0),k.add(n,t),t.B=0}}function Xn(t,n){var e;e=n?n.l:t.U++;const i=rn(t.I);un(i,"SID",t.K),un(i,"RID",e),un(i,"AID",t.T),Yn(t,i),t.m&&t.o&&$n(i,t.m,t.o),e=new Pt(t,t.j,e,t.B+1),null===t.m&&(e.H=t.o),n&&(t.i=n.D.concat(t.i)),n=Zn(t,e,1e3),e.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),Yt(t.h,e),Lt(e,i,n)}function Yn(t,n){t.H&&g(t.H,(function(t,e){un(n,e,t)})),t.l&&nn({},(function(t,e){un(n,e,t)}))}function Zn(t,n,e){e=Math.min(t.i.length,e);var i=t.l?u(t.l.Na,t.l,t):null;t:{var s=t.i;let n=-1;for(;;){const t=["count="+e];-1==n?0<e?(n=s[0].g,t.push("ofs="+n)):n=0:t.push("ofs="+n);let o=!0;for(let a=0;a<e;a++){let e=s[a].g;const h=s[a].map;if(e-=n,0>e)n=Math.max(0,s[a].g-100),o=!1;else try{Nn(h,t,"req"+e+"_")}catch(r){i&&i(h)}}if(o){i=t.join("&");break t}}}return t=t.i.splice(0,e),n.D=t,i}function te(t){if(!t.g&&!t.u){t.Y=1;var n=t.Fa;N||C(),O||(N(),O=!0),k.add(n,t),t.v=0}}function ne(t){return!(t.g||t.u||3<=t.v||(t.Y++,t.u=St(u(t.Fa,t),oe(t,t.v)),t.v++,0))}function ee(t){null!=t.A&&(s.clearTimeout(t.A),t.A=null)}function ie(t){t.g=new Pt(t,t.j,"rpc",t.Y),null===t.m&&(t.g.H=t.o),t.g.O=0;var n=rn(t.qa);un(n,"RID","rpc"),un(n,"SID",t.K),un(n,"AID",t.T),un(n,"CI",t.F?"0":"1"),!t.F&&t.ja&&un(n,"TO",t.ja),un(n,"TYPE","xmlhttp"),Yn(t,n),t.m&&t.o&&$n(n,t.m,t.o),t.L&&(t.g.I=t.L);var e=t.g;t=t.ia,e.L=1,e.v=cn(rn(n)),e.m=null,e.P=!0,Ft(e,t)}function se(t){null!=t.C&&(s.clearTimeout(t.C),t.C=null)}function re(t,n){var e=null;if(t.g==n){se(t),ee(t),t.g=null;var i=2}else{if(!Xt(t.h,n))return;e=n.D,Zt(t.h,n),i=1}if(0!=t.G)if(n.o)if(1==i){e=n.m?n.m.length:0,n=Date.now()-n.F;var s=t.B;nt(i=bt(),new At(i,e)),Qn(t)}else te(t);else if(3==(s=n.s)||0==s&&0<n.X||!(1==i&&function(t,n){return!(Qt(t.h)>=t.h.j-(t.s?1:0)||(t.s?(t.i=n.D.concat(t.i),0):1==t.G||2==t.G||t.B>=(t.Va?0:t.Wa)||(t.s=St(u(t.Ga,t,n),oe(t,t.B)),t.B++,0)))}(t,n)||2==i&&ne(t)))switch(e&&0<e.length&&(n=t.h,n.i=n.i.concat(e)),s){case 1:ae(t,5);break;case 4:ae(t,10);break;case 3:ae(t,6);break;default:ae(t,2)}}function oe(t,n){let e=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(e*=2),e*n}function ae(t,n){if(t.j.info("Error code "+n),2==n){var e=u(t.fb,t),i=t.Xa;const n=!i;i=new sn(i||"//www.google.com/images/cleardot.gif"),s.location&&"http"==s.location.protocol||on(i,"https"),cn(i),n?function(t,n){const e=new Nt;if(s.Image){const i=new Image;i.onload=c(An,e,"TestLoadImage: loaded",!0,n,i),i.onerror=c(An,e,"TestLoadImage: error",!1,n,i),i.onabort=c(An,e,"TestLoadImage: abort",!1,n,i),i.ontimeout=c(An,e,"TestLoadImage: timeout",!1,n,i),s.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else n(!1)}(i.toString(),e):function(t,n){new Nt;const e=new AbortController,i=setTimeout((()=>{e.abort(),An(0,0,!1,n)}),1e4);fetch(t,{signal:e.signal}).then((t=>{clearTimeout(i),t.ok?An(0,0,!0,n):An(0,0,!1,n)})).catch((()=>{clearTimeout(i),An(0,0,!1,n)}))}(i.toString(),e)}else _t(2);t.G=0,t.l&&t.l.sa(n),he(t),Jn(t)}function he(t){if(t.G=0,t.ka=[],t.l){const n=tn(t.h);0==n.length&&0==t.i.length||(d(t.ka,n),d(t.ka,t.i),t.h.i.length=0,f(t.i),t.i.length=0),t.l.ra()}}function ue(t,n,e){var i=e instanceof sn?rn(e):new sn(e);if(""!=i.g)n&&(i.g=n+"."+i.g),an(i,i.s);else{var r=s.location;i=r.protocol,n=n?n+"."+r.hostname:r.hostname,r=+r.port;var o=new sn(null);i&&on(o,i),n&&(o.g=n),r&&an(o,r),e&&(o.l=e),i=o}return e=t.D,n=t.ya,e&&n&&un(i,e,n),un(i,"VER",t.la),Yn(t,i),i}function ce(t,n,e){if(n&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return(n=t.Ca&&!t.pa?new Mn(new On({eb:e})):new Mn(t.pa)).Ha(t.J),n}function le(){}function fe(){}function de(t,n){tt.call(this),this.g=new Hn(n),this.l=t,this.h=n&&n.messageUrlParams||null,t=n&&n.messageHeaders||null,n&&n.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=n&&n.initMessageHeaders||null,n&&n.messageContentType&&(t?t["X-WebChannel-Content-Type"]=n.messageContentType:t={"X-WebChannel-Content-Type":n.messageContentType}),n&&n.va&&(t?t["X-WebChannel-Client-Profile"]=n.va:t={"X-WebChannel-Client-Profile":n.va}),this.g.S=t,(t=n&&n.Sb)&&!w(t)&&(this.g.m=t),this.v=n&&n.supportsCrossDomainXhr||!1,this.u=n&&n.sendRawJson||!1,(n=n&&n.httpSessionIdParam)&&!w(n)&&(this.g.D=n,null!==(t=this.h)&&n in t&&n in(t=this.h)&&delete t[n]),this.j=new me(this)}function we(t){mt.call(this),t.yi&&(this.headers=t.yi,this.statusCode=t.bi,delete t.yi,delete t.bi);var n=t.Ei;if(n){t:{for(const e in n){t=e;break t}t=void 0}(this.i=t)&&(t=this.i,n=null!==n&&t in n?n[t]:void 0),this.data=n}else this.data=t}function pe(){vt.call(this),this.status=1}function me(t){this.g=t}(t=Mn.prototype).Ha=function(t){this.J=t},t.ea=function(t,n,e,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);n=n?n.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():kt.g(),this.v=this.o?dt(this.o):dt(kt),this.g.onreadystatechange=u(this.Ea,this);try{this.B=!0,this.g.open(n,String(t),!0),this.B=!1}catch(o){return void Fn(this,o)}if(t=e||"",e=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)e.set(r,i[r]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const t of i.keys())e.set(t,i.get(t))}i=Array.from(e.keys()).find((t=>"content-type"==t.toLowerCase())),r=s.FormData&&t instanceof s.FormData,!(0<=Array.prototype.indexOf.call(Ln,n,void 0))||i||r||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,a]of e)this.g.setRequestHeader(s,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{qn(this),this.u=!0,this.g.send(t),this.u=!1}catch(o){Fn(this,o)}},t.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,nt(this,"complete"),nt(this,"abort"),Vn(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Vn(this,!0)),Mn.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?jn(this):this.bb())},t.bb=function(){jn(this)},t.isActive=function(){return!!this.g},t.Z=function(){try{return 2<Bn(this)?this.g.status:-1}catch(t){return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},t.Oa=function(t){if(this.g){var n=this.g.responseText;return t&&0==n.indexOf(t)&&(n=n.substring(t.length)),ct(n)}},t.Ba=function(){return this.m},t.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(t=Hn.prototype).la=8,t.G=1,t.connect=function(t,n,e,i){_t(0),this.W=t,this.H=n||{},e&&void 0!==i&&(this.H.OSID=e,this.H.OAID=i),this.F=this.X,this.I=ue(this,null,this.W),Qn(this)},t.Ga=function(t){if(this.s)if(this.s=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new Pt(this,this.j,t);let r=this.o;if(this.S&&(r?(r=y(r),E(r,this.S)):r=this.S),null!==this.m||this.O||(s.H=r,r=null),this.P)t:{for(var n=0,e=0;e<this.i.length;e++){var i=this.i[e];if(void 0===(i="Ii"in i.map&&"string"==typeof(i=i.map.Ii)?i.length:void 0))break;if(4096<(n+=i)){n=e;break t}if(4096===n||e===this.i.length-1){n=e+1;break t}}n=1e3}else n=1e3;n=Zn(this,s,n),un(e=rn(this.I),"RID",t),un(e,"CVER",22),this.D&&un(e,"X-HTTP-Session-Id",this.D),Yn(this,e),r&&(this.O?n="headers="+encodeURIComponent(String(Pn(r)))+"&"+n:this.m&&$n(e,this.m,r)),Yt(this.h,s),this.Ua&&un(e,"TYPE","init"),this.P?(un(e,"$req",n),un(e,"SID","null"),s.T=!0,Lt(s,e,null)):Lt(s,e,n),this.G=2}}else 3==this.G&&(t?Xn(this,t):0==this.i.length||Jt(this.h)||Xn(this))},t.Fa=function(){if(this.u=null,ie(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=St(u(this.ab,this),t)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,_t(10),Kn(this),ie(this))},t.Za=function(){null!=this.C&&(this.C=null,Kn(this),ne(this),_t(19))},t.fb=function(t){t?(this.j.info("Successfully pinged google.com"),_t(2)):(this.j.info("Failed to ping google.com"),_t(1))},t.isActive=function(){return!!this.l&&this.l.isActive(this)},(t=le.prototype).ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){},fe.prototype.g=function(t,n){return new de(t,n)},l(de,tt),de.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},de.prototype.close=function(){Wn(this.g)},de.prototype.o=function(t){var n=this.g;if("string"==typeof t){var e={};e.Ii=t,t=e}else this.u&&((e={}).Ii=ut(t),t=e);n.i.push(new Wt(n.Ya++,t)),3==n.G&&Qn(n)},de.prototype.N=function(){this.g.l=null,delete this.j,Wn(this.g),delete this.g,de.aa.N.call(this)},l(we,mt),l(pe,vt),l(me,le),me.prototype.ua=function(){nt(this.g,"a")},me.prototype.ta=function(t){nt(this.g,new we(t))},me.prototype.sa=function(t){nt(this.g,new pe)},me.prototype.ra=function(){nt(this.g,"b")},fe.prototype.createWebChannel=fe.prototype.g,de.prototype.send=de.prototype.o,de.prototype.open=de.prototype.m,de.prototype.close=de.prototype.close,wr=function(){return new fe},dr=function(){return bt()},fr=gt,lr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ct.NO_ERROR=0,Ct.TIMEOUT=8,Ct.HTTP_ERROR=6,cr=Ct,Rt.COMPLETE="complete",ur=Rt,wt.EventType=pt,pt.OPEN="a",pt.CLOSE="b",pt.ERROR="c",pt.MESSAGE="d",tt.prototype.listen=tt.prototype.K,hr=wt,Mn.prototype.listenOnce=Mn.prototype.L,Mn.prototype.getLastError=Mn.prototype.Ka,Mn.prototype.getLastErrorCode=Mn.prototype.Ba,Mn.prototype.getStatus=Mn.prototype.Z,Mn.prototype.getResponseJson=Mn.prototype.Oa,Mn.prototype.getResponseText=Mn.prototype.oa,Mn.prototype.send=Mn.prototype.ea,Mn.prototype.setWithCredentials=Mn.prototype.Ha,ar=Mn}).apply(void 0!==pr?pr:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});const mr="@firebase/firestore",vr="4.7.10";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}gr.UNAUTHENTICATED=new gr(null),gr.GOOGLE_CREDENTIALS=new gr("google-credentials-uid"),gr.FIRST_PARTY=new gr("first-party-uid"),gr.MOCK_USER=new gr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let yr="11.5.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=new L("@firebase/firestore");function Er(){return br.logLevel}function Ir(t,...n){if(br.logLevel<=R.DEBUG){const e=n.map(Ar);br.debug(`Firestore (${yr}): ${t}`,...e)}}function Tr(t,...n){if(br.logLevel<=R.ERROR){const e=n.map(Ar);br.error(`Firestore (${yr}): ${t}`,...e)}}function _r(t,...n){if(br.logLevel<=R.WARN){const e=n.map(Ar);br.warn(`Firestore (${yr}): ${t}`,...e)}}function Ar(t){if("string"==typeof t)return t;try{
/**
    * @license
    * Copyright 2020 Google LLC
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *   http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */
return n=t,JSON.stringify(n)}catch(e){return t}var n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sr(t="Unexpected state"){const n=`FIRESTORE (${yr}) INTERNAL ASSERTION FAILED: `+t;throw Tr(n),new Error(n)}function Nr(t,n){t||Sr()}function Or(t,n){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Cr extends p{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(){this.promise=new Promise(((t,n)=>{this.resolve=t,this.reject=n}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Pr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable((()=>n(gr.UNAUTHENTICATED)))}shutdown(){}}class $r{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class Mr{constructor(t){this.t=t,this.currentUser=gr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Nr(void 0===this.o);let e=this.i;const i=t=>this.i!==e?(e=this.i,n(t)):Promise.resolve();let s=new Rr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Rr,t.enqueueRetryable((()=>i(this.currentUser)))};const r=()=>{const n=s;t.enqueueRetryable((async()=>{await n.promise,await i(this.currentUser)}))},o=t=>{Ir("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.o&&(this.auth.addAuthTokenListener(this.o),r())};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Ir("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Rr)}}),0),r()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((n=>this.i!==t?(Ir("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(Nr("string"==typeof n.accessToken),new Dr(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Nr(null===t||"string"==typeof t),new gr(t)}}class xr{constructor(t,n,e){this.l=t,this.h=n,this.P=e,this.type="FirstParty",this.user=gr.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Lr{constructor(t,n,e){this.l=t,this.h=n,this.P=e}getToken(){return Promise.resolve(new xr(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable((()=>n(gr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Fr{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ur{constructor(t,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Ut(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,n){Nr(void 0===this.o);const e=t=>{null!=t.error&&Ir("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const e=t.token!==this.R;return this.R=t.token,Ir("FirebaseAppCheckTokenProvider",`Received ${e?"new":"existing"} token.`),e?n(t.token):Promise.resolve()};this.o=n=>{t.enqueueRetryable((()=>e(n)))};const i=t=>{Ir("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?i(t):Ir("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.V)return Promise.resolve(new Fr(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Nr("string"==typeof t.token),this.R=t.token,new Fr(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(t){const n="undefined"!=typeof self&&(self.crypto||self.msCrypto),e=new Uint8Array(t);if(n&&"function"==typeof n.getRandomValues)n.getRandomValues(e);else for(let i=0;i<t;i++)e[i]=Math.floor(256*Math.random());return e}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(){return new TextEncoder}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{static newId(){const t=62*Math.floor(256/62);let n="";for(;n.length<20;){const e=jr(40);for(let i=0;i<e.length;++i)n.length<20&&e[i]<t&&(n+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(e[i]%62))}return n}}function Br(t,n){return t<n?-1:t>n?1:0}function zr(t,n){let e=0;for(;e<t.length&&e<n.length;){const i=t.codePointAt(e),s=n.codePointAt(e);if(i!==s){if(i<128&&s<128)return Br(i,s);{const r=Vr(),o=Hr(r.encode(Gr(t,e)),r.encode(Gr(n,e)));return 0!==o?o:Br(i,s)}}e+=i>65535?2:1}return Br(t.length,n.length)}function Gr(t,n){return t.codePointAt(n)>65535?t.substring(n,n+2):t.substring(n,n+1)}function Hr(t,n){for(let e=0;e<t.length&&e<n.length;++e)if(t[e]!==n[e])return Br(t[e],n[e]);return Br(t.length,n.length)}function Wr(t,n,e){return t.length===n.length&&t.every(((t,i)=>e(t,n[i])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=-62135596800,Jr=1e6;class Qr{static now(){return Qr.fromMillis(Date.now())}static fromDate(t){return Qr.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),e=Math.floor((t-1e3*n)*Jr);return new Qr(n,e)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new Cr(kr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Cr(kr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<Kr)throw new Cr(kr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Cr(kr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Jr}_i(t){return this.seconds===t.seconds?Br(this.nanoseconds,t.nanoseconds):Br(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Kr;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{static fromTimestamp(t){return new Xr(t)}static min(){return new Xr(new Qr(0,0))}static max(){return new Xr(new Qr(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._i(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr="__name__";class Zr{constructor(t,n,e){void 0===n?n=0:n>t.length&&Sr(),void 0===e?e=t.length-n:e>t.length-n&&Sr(),this.segments=t,this.offset=n,this.len=e}get length(){return this.len}isEqual(t){return 0===Zr.comparator(this,t)}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Zr?t.forEach((t=>{n.push(t)})):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,e=this.limit();n<e;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const e=Math.min(t.length,n.length);for(let i=0;i<e;i++){const e=Zr.compareSegments(t.get(i),n.get(i));if(0!==e)return e}return Br(t.length,n.length)}static compareSegments(t,n){const e=Zr.isNumericId(t),i=Zr.isNumericId(n);return e&&!i?-1:!e&&i?1:e&&i?Zr.extractNumericId(t).compare(Zr.extractNumericId(n)):zr(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return sr.fromString(t.substring(4,t.length-2))}}class to extends Zr{construct(t,n,e){return new to(t,n,e)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const e of t){if(e.indexOf("//")>=0)throw new Cr(kr.INVALID_ARGUMENT,`Invalid segment (${e}). Paths must not contain // in them.`);n.push(...e.split("/").filter((t=>t.length>0)))}return new to(n)}static emptyPath(){return new to([])}}const no=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class eo extends Zr{construct(t,n,e){return new eo(t,n,e)}static isValidIdentifier(t){return no.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),eo.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===Yr}static keyField(){return new eo([Yr])}static fromServerFormat(t){const n=[];let e="",i=0;const s=()=>{if(0===e.length)throw new Cr(kr.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(e),e=""};let r=!1;for(;i<t.length;){const n=t[i];if("\\"===n){if(i+1===t.length)throw new Cr(kr.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const n=t[i+1];if("\\"!==n&&"."!==n&&"`"!==n)throw new Cr(kr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);e+=n,i+=2}else"`"===n?(r=!r,i++):"."!==n||r?(e+=n,i++):(s(),i++)}if(s(),r)throw new Cr(kr.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new eo(n)}static emptyPath(){return new eo([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(t){this.path=t}static fromPath(t){return new io(to.fromString(t))}static fromName(t){return new io(to.fromString(t).popFirst(5))}static empty(){return new io(to.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===to.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,n){return to.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new io(new to(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(t){return new ro(t.readTime,t.key,-1)}class ro{constructor(t,n,e){this.readTime=t,this.documentKey=n,this.largestBatchId=e}static min(){return new ro(Xr.min(),io.empty(),-1)}static max(){return new ro(Xr.max(),io.empty(),-1)}}function oo(t,n){let e=t.readTime.compareTo(n.readTime);return 0!==e?e:(e=io.comparator(t.documentKey,n.documentKey),0!==e?e:Br(t.largestBatchId,n.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}class ao{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ho(t){if(t.code!==kr.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==t.message)throw t;Ir("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&Sr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new uo(((e,i)=>{this.nextCallback=n=>{this.wrapSuccess(t,n).next(e,i)},this.catchCallback=t=>{this.wrapFailure(n,t).next(e,i)}}))}toPromise(){return new Promise(((t,n)=>{this.next(t,n)}))}wrapUserFunction(t){try{const n=t();return n instanceof uo?n:uo.resolve(n)}catch(n){return uo.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction((()=>t(n))):uo.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction((()=>t(n))):uo.reject(n)}static resolve(t){return new uo(((n,e)=>{n(t)}))}static reject(t){return new uo(((n,e)=>{e(t)}))}static waitFor(t){return new uo(((n,e)=>{let i=0,s=0,r=!1;t.forEach((t=>{++i,t.next((()=>{++s,r&&s===i&&n()}),(t=>e(t)))})),r=!0,s===i&&n()}))}static or(t){let n=uo.resolve(!1);for(const e of t)n=n.next((t=>t?uo.resolve(t):e()));return n}static forEach(t,n){const e=[];return t.forEach(((t,i)=>{e.push(n.call(this,t,i))})),this.waitFor(e)}static mapArray(t,n){return new uo(((e,i)=>{const s=t.length,r=new Array(s);let o=0;for(let a=0;a<s;a++){const h=a;n(t[h]).next((t=>{r[h]=t,++o,o===s&&e(r)}),(t=>i(t)))}}))}static doWhile(t,n){return new uo(((e,i)=>{const s=()=>{!0===t()?n().next((()=>{s()}),i):e()};s()}))}}function co(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=t=>this.oe(t),this.Ai=t=>n.writeSequenceNumber(t))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.Ai&&this.Ai(t),t}}function fo(t){return null==t}function wo(t){return 0===t&&1/t==-1/0}function po(t,n){let e=n;const i=t.length;for(let s=0;s<i;s++){const n=t.charAt(s);switch(n){case"\0":e+="";break;case"":e+="";break;default:e+=n}}return e}function mo(t){return t+""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(t){let n=0;for(const e in t)Object.prototype.hasOwnProperty.call(t,e)&&n++;return n}function go(t,n){for(const e in t)Object.prototype.hasOwnProperty.call(t,e)&&n(e,t[e])}function yo(t){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lo.ae=-1;class bo{constructor(t,n){this.comparator=t,this.root=n||Io.EMPTY}insert(t,n){return new bo(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Io.BLACK,null,null))}remove(t){return new bo(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Io.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const e=this.comparator(t,n.key);if(0===e)return n.value;e<0?n=n.left:e>0&&(n=n.right)}return null}indexOf(t){let n=0,e=this.root;for(;!e.isEmpty();){const i=this.comparator(t,e.key);if(0===i)return n+e.left.size;i<0?e=e.left:(n+=e.left.size+1,e=e.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((n,e)=>(t(n,e),!1)))}toString(){const t=[];return this.inorderTraversal(((n,e)=>(t.push(`${n}:${e}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Eo(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Eo(this.root,t,this.comparator,!1)}getReverseIterator(){return new Eo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Eo(this.root,t,this.comparator,!0)}}class Eo{constructor(t,n,e,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?e(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Io{constructor(t,n,e,i,s){this.key=t,this.value=n,this.color=null!=e?e:Io.RED,this.left=null!=i?i:Io.EMPTY,this.right=null!=s?s:Io.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,e,i,s){return new Io(null!=t?t:this.key,null!=n?n:this.value,null!=e?e:this.color,null!=i?i:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,e){let i=this;const s=e(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,e),null):0===s?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,e)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Io.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let e,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===n(t,i.key)){if(i.right.isEmpty())return Io.EMPTY;e=i.right.min(),i=i.copy(e.key,e.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Io.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Io.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Sr();if(this.right.isRed())throw Sr();const t=this.left.check();if(t!==this.right.check())throw Sr();return t+(this.isRed()?0:1)}}Io.EMPTY=null,Io.RED=!0,Io.BLACK=!1,Io.EMPTY=new class{constructor(){this.size=0}get key(){throw Sr()}get value(){throw Sr()}get color(){throw Sr()}get left(){throw Sr()}get right(){throw Sr()}copy(t,n,e,i,s){return this}insert(t,n,e){return new Io(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class To{constructor(t){this.comparator=t,this.data=new bo(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((n,e)=>(t(n),!1)))}forEachInRange(t,n){const e=this.data.getIteratorFrom(t[0]);for(;e.hasNext();){const i=e.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let e;for(e=void 0!==n?this.data.getIteratorFrom(n):this.data.getIterator();e.hasNext();)if(!t(e.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new _o(this.data.getIterator())}getIteratorFrom(t){return new _o(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach((t=>{n=n.add(t)})),n}isEqual(t){if(!(t instanceof To))return!1;if(this.size!==t.size)return!1;const n=this.data.getIterator(),e=t.data.getIterator();for(;n.hasNext();){const t=n.getNext().key,i=e.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((n=>{t.push(n)})),t}toString(){const t=[];return this.forEach((n=>t.push(n))),"SortedSet("+t.toString()+")"}copy(t){const n=new To(this.comparator);return n.data=t,n}}class _o{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(t){this.fields=t,t.sort(eo.comparator)}static empty(){return new Ao([])}unionWith(t){let n=new To(eo.comparator);for(const e of this.fields)n=n.add(e);for(const e of t)n=n.add(e);return new Ao(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Wr(this.fields,t.fields,((t,n)=>t.isEqual(n)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(t){try{return atob(t)}catch(n){throw"undefined"!=typeof DOMException&&n instanceof DOMException?new So("Invalid base64 string: "+n):n}}(t);return new No(n)}static fromUint8Array(t){const n=function(t){let n="";for(let e=0;e<t.length;++e)n+=String.fromCharCode(t[e]);return n}(t);return new No(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let e=0;e<t.length;e++)n[e]=t.charCodeAt(e);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Br(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}No.EMPTY_BYTE_STRING=new No("");const Oo=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ko(t){if(Nr(!!t),"string"==typeof t){let n=0;const e=Oo.exec(t);if(Nr(!!e),e[1]){let t=e[1];t=(t+"000000000").substr(0,9),n=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:n}}return{seconds:Co(t.seconds),nanos:Co(t.nanos)}}function Co(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ro(t){return"string"==typeof t?No.fromBase64String(t):No.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Do="server_timestamp",Po="__type__",$o="__previous_value__",Mo="__local_write_time__";function xo(t){var n,e;return(null===(e=((null===(n=null==t?void 0:t.mapValue)||void 0===n?void 0:n.fields)||{})[Po])||void 0===e?void 0:e.stringValue)===Do}function Lo(t){const n=t.mapValue.fields[$o];return xo(n)?Lo(n):n}function Fo(t){const n=ko(t.mapValue.fields[Mo].timestampValue);return new Qr(n.seconds,n.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(t,n,e,i,s,r,o,a,h){this.databaseId=t,this.appId=n,this.persistenceKey=e,this.host=i,this.ssl=s,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=h}}const jo="(default)";class Vo{constructor(t,n){this.projectId=t,this.database=n||jo}static empty(){return new Vo("","")}get isDefaultDatabase(){return this.database===jo}isEqual(t){return t instanceof Vo&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo="__type__",Bo={},zo="__vector__",Go="value";function Ho(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?xo(t)?4:function(t){return"__max__"===(((t.mapValue||{}).fields||{}).Si||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)?9007199254740991:function(t){var n,e;return(null===(e=((null===(n=null==t?void 0:t.mapValue)||void 0===n?void 0:n.fields)||{})[qo])||void 0===e?void 0:e.stringValue)===zo}(t)?10:11:Sr()}function Wo(t,n){if(t===n)return!0;const e=Ho(t);if(e!==Ho(n))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===n.booleanValue;case 4:return Fo(t).isEqual(Fo(n));case 3:return function(t,n){if("string"==typeof t.timestampValue&&"string"==typeof n.timestampValue&&t.timestampValue.length===n.timestampValue.length)return t.timestampValue===n.timestampValue;const e=ko(t.timestampValue),i=ko(n.timestampValue);return e.seconds===i.seconds&&e.nanos===i.nanos}(t,n);case 5:return t.stringValue===n.stringValue;case 6:return i=n,Ro(t.bytesValue).isEqual(Ro(i.bytesValue));case 7:return t.referenceValue===n.referenceValue;case 8:return function(t,n){return Co(t.geoPointValue.latitude)===Co(n.geoPointValue.latitude)&&Co(t.geoPointValue.longitude)===Co(n.geoPointValue.longitude)}(t,n);case 2:return function(t,n){if("integerValue"in t&&"integerValue"in n)return Co(t.integerValue)===Co(n.integerValue);if("doubleValue"in t&&"doubleValue"in n){const e=Co(t.doubleValue),i=Co(n.doubleValue);return e===i?wo(e)===wo(i):isNaN(e)&&isNaN(i)}return!1}(t,n);case 9:return Wr(t.arrayValue.values||[],n.arrayValue.values||[],Wo);case 10:case 11:return function(t,n){const e=t.mapValue.fields||{},i=n.mapValue.fields||{};if(vo(e)!==vo(i))return!1;for(const s in e)if(e.hasOwnProperty(s)&&(void 0===i[s]||!Wo(e[s],i[s])))return!1;return!0}(t,n);default:return Sr()}var i}function Ko(t,n){return void 0!==(t.values||[]).find((t=>Wo(t,n)))}function Jo(t,n){if(t===n)return 0;const e=Ho(t),i=Ho(n);if(e!==i)return Br(e,i);switch(e){case 0:case 9007199254740991:return 0;case 1:return Br(t.booleanValue,n.booleanValue);case 2:return function(t,n){const e=Co(t.integerValue||t.doubleValue),i=Co(n.integerValue||n.doubleValue);return e<i?-1:e>i?1:e===i?0:isNaN(e)?isNaN(i)?0:-1:1}(t,n);case 3:return Qo(t.timestampValue,n.timestampValue);case 4:return Qo(Fo(t),Fo(n));case 5:return zr(t.stringValue,n.stringValue);case 6:return function(t,n){const e=Ro(t),i=Ro(n);return e.compareTo(i)}(t.bytesValue,n.bytesValue);case 7:return function(t,n){const e=t.split("/"),i=n.split("/");for(let s=0;s<e.length&&s<i.length;s++){const t=Br(e[s],i[s]);if(0!==t)return t}return Br(e.length,i.length)}(t.referenceValue,n.referenceValue);case 8:return function(t,n){const e=Br(Co(t.latitude),Co(n.latitude));return 0!==e?e:Br(Co(t.longitude),Co(n.longitude))}(t.geoPointValue,n.geoPointValue);case 9:return Xo(t.arrayValue,n.arrayValue);case 10:return function(t,n){var e,i,s,r;const o=t.fields||{},a=n.fields||{},h=null===(e=o[Go])||void 0===e?void 0:e.arrayValue,u=null===(i=a[Go])||void 0===i?void 0:i.arrayValue,c=Br((null===(s=null==h?void 0:h.values)||void 0===s?void 0:s.length)||0,(null===(r=null==u?void 0:u.values)||void 0===r?void 0:r.length)||0);return 0!==c?c:Xo(h,u)}(t.mapValue,n.mapValue);case 11:return function(t,n){if(t===Bo&&n===Bo)return 0;if(t===Bo)return 1;if(n===Bo)return-1;const e=t.fields||{},i=Object.keys(e),s=n.fields||{},r=Object.keys(s);i.sort(),r.sort();for(let o=0;o<i.length&&o<r.length;++o){const t=zr(i[o],r[o]);if(0!==t)return t;const n=Jo(e[i[o]],s[r[o]]);if(0!==n)return n}return Br(i.length,r.length)}(t.mapValue,n.mapValue);default:throw Sr()}}function Qo(t,n){if("string"==typeof t&&"string"==typeof n&&t.length===n.length)return Br(t,n);const e=ko(t),i=ko(n),s=Br(e.seconds,i.seconds);return 0!==s?s:Br(e.nanos,i.nanos)}function Xo(t,n){const e=t.values||[],i=n.values||[];for(let s=0;s<e.length&&s<i.length;++s){const t=Jo(e[s],i[s]);if(t)return t}return Br(e.length,i.length)}function Yo(t){return Zo(t)}function Zo(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const n=ko(t);return`time(${n.seconds},${n.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ro(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,io.fromName(n).toString()):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let n="[",e=!0;for(const i of t.values||[])e?e=!1:n+=",",n+=Zo(i);return n+"]"}(t.arrayValue):"mapValue"in t?function(t){const n=Object.keys(t.fields||{}).sort();let e="{",i=!0;for(const s of n)i?i=!1:e+=",",e+=`${s}:${Zo(t.fields[s])}`;return e+"}"}(t.mapValue):Sr();var n}function ta(t){switch(Ho(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const n=Lo(t);return n?16+ta(n):16;case 5:return 2*t.stringValue.length;case 6:return Ro(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(t.arrayValue.values||[]).reduce(((t,n)=>t+ta(n)),0);case 10:case 11:return function(t){let n=0;return go(t.fields,((t,e)=>{n+=t.length+ta(e)})),n}(t.mapValue);default:throw Sr()}}function na(t,n){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${n.path.canonicalString()}`}}function ea(t){return!!t&&"integerValue"in t}function ia(t){return!!t&&"arrayValue"in t}function sa(t){return!!t&&"nullValue"in t}function ra(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function oa(t){return!!t&&"mapValue"in t}function aa(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const n={mapValue:{fields:{}}};return go(t.mapValue.fields,((t,e)=>n.mapValue.fields[t]=aa(e))),n}if(t.arrayValue){const n={arrayValue:{values:[]}};for(let e=0;e<(t.arrayValue.values||[]).length;++e)n.arrayValue.values[e]=aa(t.arrayValue.values[e]);return n}return Object.assign({},t)}class ha{constructor(t){this.value=t}static empty(){return new ha({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let e=0;e<t.length-1;++e)if(n=(n.mapValue.fields||{})[t.get(e)],!oa(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=aa(n)}setAll(t){let n=eo.emptyPath(),e={},i=[];t.forEach(((t,s)=>{if(!n.isImmediateParentOf(s)){const t=this.getFieldsMap(n);this.applyChanges(t,e,i),e={},i=[],n=s.popLast()}t?e[s.lastSegment()]=aa(t):i.push(s.lastSegment())}));const s=this.getFieldsMap(n);this.applyChanges(s,e,i)}delete(t){const n=this.field(t.popLast());oa(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Wo(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let e=0;e<t.length;++e){let i=n.mapValue.fields[t.get(e)];oa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(e)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,e){go(n,((n,e)=>t[n]=e));for(const i of e)delete t[i]}clone(){return new ha(aa(this.value))}}function ua(t){const n=[];return go(t.fields,((t,e)=>{const i=new eo([t]);if(oa(e)){const t=ua(e.mapValue).fields;if(0===t.length)n.push(i);else for(const e of t)n.push(i.child(e))}else n.push(i)})),new Ao(n)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ca{constructor(t,n,e,i,s,r,o){this.key=t,this.documentType=n,this.version=e,this.readTime=i,this.createTime=s,this.data=r,this.documentState=o}static newInvalidDocument(t){return new ca(t,0,Xr.min(),Xr.min(),Xr.min(),ha.empty(),0)}static newFoundDocument(t,n,e,i){return new ca(t,1,n,Xr.min(),e,i,0)}static newNoDocument(t,n){return new ca(t,2,n,Xr.min(),Xr.min(),ha.empty(),0)}static newUnknownDocument(t,n){return new ca(t,3,n,Xr.min(),Xr.min(),ha.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(Xr.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ha.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ha.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Xr.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof ca&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ca(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(t,n){this.position=t,this.inclusive=n}}function fa(t,n,e){let i=0;for(let s=0;s<t.position.length;s++){const r=n[s],o=t.position[s];if(i=r.field.isKeyField()?io.comparator(io.fromName(o.referenceValue),e.key):Jo(o,e.data.field(r.field)),"desc"===r.dir&&(i*=-1),0!==i)break}return i}function da(t,n){if(null===t)return null===n;if(null===n)return!1;if(t.inclusive!==n.inclusive||t.position.length!==n.position.length)return!1;for(let e=0;e<t.position.length;e++)if(!Wo(t.position[e],n.position[e]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(t,n="asc"){this.field=t,this.dir=n}}function pa(t,n){return t.dir===n.dir&&t.field.isEqual(n.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{}class va extends ma{constructor(t,n,e){super(),this.field=t,this.op=n,this.value=e}static create(t,n,e){return t.isKeyField()?"in"===n||"not-in"===n?this.createKeyFieldInFilter(t,n,e):new _a(t,n,e):"array-contains"===n?new Oa(t,e):"in"===n?new ka(t,e):"not-in"===n?new Ca(t,e):"array-contains-any"===n?new Ra(t,e):new va(t,n,e)}static createKeyFieldInFilter(t,n,e){return"in"===n?new Aa(t,e):new Sa(t,e)}matches(t){const n=t.data.field(this.field);return"!="===this.op?null!==n&&this.matchesComparison(Jo(n,this.value)):null!==n&&Ho(this.value)===Ho(n)&&this.matchesComparison(Jo(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Sr()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ga extends ma{constructor(t,n){super(),this.filters=t,this.op=n,this.ce=null}static create(t,n){return new ga(t,n)}matches(t){return ya(this)?void 0===this.filters.find((n=>!n.matches(t))):void 0!==this.filters.find((n=>n.matches(t)))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce(((t,n)=>t.concat(n.getFlattenedFilters())),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function ya(t){return"and"===t.op}function ba(t){return function(t){for(const n of t.filters)if(n instanceof ga)return!1;return!0}(t)&&ya(t)}function Ea(t){if(t instanceof va)return t.field.canonicalString()+t.op.toString()+Yo(t.value);if(ba(t))return t.filters.map((t=>Ea(t))).join(",");{const n=t.filters.map((t=>Ea(t))).join(",");return`${t.op}(${n})`}}function Ia(t,n){return t instanceof va?(e=t,(i=n)instanceof va&&e.op===i.op&&e.field.isEqual(i.field)&&Wo(e.value,i.value)):t instanceof ga?function(t,n){return n instanceof ga&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce(((t,e,i)=>t&&Ia(e,n.filters[i])),!0)}(t,n):void Sr();var e,i}function Ta(t){return t instanceof va?`${(n=t).field.canonicalString()} ${n.op} ${Yo(n.value)}`:t instanceof ga?function(t){return t.op.toString()+" {"+t.getFilters().map(Ta).join(" ,")+"}"}(t):"Filter";var n}class _a extends va{constructor(t,n,e){super(t,n,e),this.key=io.fromName(e.referenceValue)}matches(t){const n=io.comparator(t.key,this.key);return this.matchesComparison(n)}}class Aa extends va{constructor(t,n){super(t,"in",n),this.keys=Na(0,n)}matches(t){return this.keys.some((n=>n.isEqual(t.key)))}}class Sa extends va{constructor(t,n){super(t,"not-in",n),this.keys=Na(0,n)}matches(t){return!this.keys.some((n=>n.isEqual(t.key)))}}function Na(t,n){var e;return((null===(e=n.arrayValue)||void 0===e?void 0:e.values)||[]).map((t=>io.fromName(t.referenceValue)))}class Oa extends va{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return ia(n)&&Ko(n.arrayValue,this.value)}}class ka extends va{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return null!==n&&Ko(this.value.arrayValue,n)}}class Ca extends va{constructor(t,n){super(t,"not-in",n)}matches(t){if(Ko(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return null!==n&&!Ko(this.value.arrayValue,n)}}class Ra extends va{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!ia(n)||!n.arrayValue.values)&&n.arrayValue.values.some((t=>Ko(this.value.arrayValue,t)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(t,n=null,e=[],i=[],s=null,r=null,o=null){this.path=t,this.collectionGroup=n,this.orderBy=e,this.filters=i,this.limit=s,this.startAt=r,this.endAt=o,this.le=null}}function Pa(t,n=null,e=[],i=[],s=null,r=null,o=null){return new Da(t,n,e,i,s,r,o)}function $a(t){const n=Or(t);if(null===n.le){let t=n.path.canonicalString();null!==n.collectionGroup&&(t+="|cg:"+n.collectionGroup),t+="|f:",t+=n.filters.map((t=>Ea(t))).join(","),t+="|ob:",t+=n.orderBy.map((t=>{return(n=t).field.canonicalString()+n.dir;var n})).join(","),fo(n.limit)||(t+="|l:",t+=n.limit),n.startAt&&(t+="|lb:",t+=n.startAt.inclusive?"b:":"a:",t+=n.startAt.position.map((t=>Yo(t))).join(",")),n.endAt&&(t+="|ub:",t+=n.endAt.inclusive?"a:":"b:",t+=n.endAt.position.map((t=>Yo(t))).join(",")),n.le=t}return n.le}function Ma(t,n){if(t.limit!==n.limit)return!1;if(t.orderBy.length!==n.orderBy.length)return!1;for(let e=0;e<t.orderBy.length;e++)if(!pa(t.orderBy[e],n.orderBy[e]))return!1;if(t.filters.length!==n.filters.length)return!1;for(let e=0;e<t.filters.length;e++)if(!Ia(t.filters[e],n.filters[e]))return!1;return t.collectionGroup===n.collectionGroup&&!!t.path.isEqual(n.path)&&!!da(t.startAt,n.startAt)&&da(t.endAt,n.endAt)}function xa(t){return io.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(t,n=null,e=[],i=[],s=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=e,this.filters=i,this.limit=s,this.limitType=r,this.startAt=o,this.endAt=a,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function Fa(t){return new La(t)}function Ua(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function ja(t){return null!==t.collectionGroup}function Va(t){const n=Or(t);if(null===n.he){n.he=[];const t=new Set;for(const i of n.explicitOrderBy)n.he.push(i),t.add(i.field.canonicalString());const e=n.explicitOrderBy.length>0?n.explicitOrderBy[n.explicitOrderBy.length-1].dir:"asc";(function(t){let n=new To(eo.comparator);return t.filters.forEach((t=>{t.getFlattenedFilters().forEach((t=>{t.isInequality()&&(n=n.add(t.field))}))})),n})(n).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||n.he.push(new wa(i,e))})),t.has(eo.keyField().canonicalString())||n.he.push(new wa(eo.keyField(),e))}return n.he}function qa(t){const n=Or(t);return n.Pe||(n.Pe=function(t,n){if("F"===t.limitType)return Pa(t.path,t.collectionGroup,n,t.filters,t.limit,t.startAt,t.endAt);{n=n.map((t=>{const n="desc"===t.dir?"asc":"desc";return new wa(t.field,n)}));const e=t.endAt?new la(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new la(t.startAt.position,t.startAt.inclusive):null;return Pa(t.path,t.collectionGroup,n,t.filters,t.limit,e,i)}}(n,Va(t))),n.Pe}function Ba(t,n){const e=t.filters.concat([n]);return new La(t.path,t.collectionGroup,t.explicitOrderBy.slice(),e,t.limit,t.limitType,t.startAt,t.endAt)}function za(t,n,e){return new La(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),n,e,t.startAt,t.endAt)}function Ga(t,n){return Ma(qa(t),qa(n))&&t.limitType===n.limitType}function Ha(t){return`${$a(qa(t))}|lt:${t.limitType}`}function Wa(t){return`Query(target=${function(t){let n=t.path.canonicalString();return null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map((t=>Ta(t))).join(", ")}]`),fo(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map((t=>{return`${(n=t).field.canonicalString()} (${n.dir})`;var n})).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((t=>Yo(t))).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((t=>Yo(t))).join(",")),`Target(${n})`}(qa(t))}; limitType=${t.limitType})`}function Ka(t,n){return n.isFoundDocument()&&function(t,n){const e=n.key.path;return null!==t.collectionGroup?n.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(e):io.isDocumentKey(t.path)?t.path.isEqual(e):t.path.isImmediateParentOf(e)}(t,n)&&function(t,n){for(const e of Va(t))if(!e.field.isKeyField()&&null===n.data.field(e.field))return!1;return!0}(t,n)&&function(t,n){for(const e of t.filters)if(!e.matches(n))return!1;return!0}(t,n)&&(i=n,!((e=t).startAt&&!function(t,n,e){const i=fa(t,n,e);return t.inclusive?i<=0:i<0}(e.startAt,Va(e),i)||e.endAt&&!function(t,n,e){const i=fa(t,n,e);return t.inclusive?i>=0:i>0}(e.endAt,Va(e),i)));var e,i}function Ja(t){return(n,e)=>{let i=!1;for(const s of Va(t)){const t=Qa(s,n,e);if(0!==t)return t;i=i||s.field.isKeyField()}return 0}}function Qa(t,n,e){const i=t.field.isKeyField()?io.comparator(n.key,e.key):function(t,n,e){const i=n.data.field(t),s=e.data.field(t);return null!==i&&null!==s?Jo(i,s):Sr()}(t.field,n,e);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Sr()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),e=this.inner[n];if(void 0!==e)for(const[i,s]of e)if(this.equalsFn(i,t))return s}has(t){return void 0!==this.get(t)}set(t,n){const e=this.mapKeyFn(t),i=this.inner[e];if(void 0===i)return this.inner[e]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),e=this.inner[n];if(void 0===e)return!1;for(let i=0;i<e.length;i++)if(this.equalsFn(e[i][0],t))return 1===e.length?delete this.inner[n]:e.splice(i,1),this.innerSize--,!0;return!1}forEach(t){go(this.inner,((n,e)=>{for(const[i,s]of e)t(i,s)}))}isEmpty(){return yo(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya=new bo(io.comparator);function Za(){return Ya}const th=new bo(io.comparator);function nh(...t){let n=th;for(const e of t)n=n.insert(e.key,e);return n}function eh(t){let n=th;return t.forEach(((t,e)=>n=n.insert(t,e.overlayedDocument))),n}function ih(){return rh()}function sh(){return rh()}function rh(){return new Xa((t=>t.toString()),((t,n)=>t.isEqual(n)))}const oh=new bo(io.comparator),ah=new To(io.comparator);function hh(...t){let n=ah;for(const e of t)n=n.add(e);return n}const uh=new To(Br);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ch(t,n){if(t.useProto3Json){if(isNaN(n))return{doubleValue:"NaN"};if(n===1/0)return{doubleValue:"Infinity"};if(n===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wo(n)?"-0":n}}function lh(t){return{integerValue:""+t}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fh{constructor(){this.Ni=void 0}}function dh(t,n,e){return t instanceof mh?function(t,n){const e={fields:{[Po]:{stringValue:Do},[Mo]:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return n&&xo(n)&&(n=Lo(n)),n&&(e.fields[$o]=n),{mapValue:e}}(e,n):t instanceof vh?gh(t,n):t instanceof yh?bh(t,n):function(t,n){const e=ph(t,n),i=Ih(e)+Ih(t.Ie);return ea(e)&&ea(t.Ie)?lh(i):ch(t.serializer,i)}(t,n)}function wh(t,n,e){return t instanceof vh?gh(t,n):t instanceof yh?bh(t,n):e}function ph(t,n){return t instanceof Eh?ea(e=n)||(i=e)&&"doubleValue"in i?n:{integerValue:0}:null;var e,i}class mh extends fh{}class vh extends fh{constructor(t){super(),this.elements=t}}function gh(t,n){const e=Th(n);for(const i of t.elements)e.some((t=>Wo(t,i)))||e.push(i);return{arrayValue:{values:e}}}class yh extends fh{constructor(t){super(),this.elements=t}}function bh(t,n){let e=Th(n);for(const i of t.elements)e=e.filter((t=>!Wo(t,i)));return{arrayValue:{values:e}}}class Eh extends fh{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function Ih(t){return Co(t.integerValue||t.doubleValue)}function Th(t){return ia(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(t,n){this.field=t,this.transform=n}}class Ah{constructor(t,n){this.version=t,this.transformResults=n}}class Sh{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Sh}static exists(t){return new Sh(void 0,t)}static updateTime(t){return new Sh(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Nh(t,n){return void 0!==t.updateTime?n.isFoundDocument()&&n.version.isEqual(t.updateTime):void 0===t.exists||t.exists===n.isFoundDocument()}class Oh{}function kh(t,n){if(!t.hasLocalMutations||n&&0===n.fields.length)return null;if(null===n)return t.isNoDocument()?new Uh(t.key,Sh.none()):new $h(t.key,t.data,Sh.none());{const e=t.data,i=ha.empty();let s=new To(eo.comparator);for(let t of n.fields)if(!s.has(t)){let n=e.field(t);null===n&&t.length>1&&(t=t.popLast(),n=e.field(t)),null===n?i.delete(t):i.set(t,n),s=s.add(t)}return new Mh(t.key,i,new Ao(s.toArray()),Sh.none())}}function Ch(t,n,e){var i;t instanceof $h?function(t,n,e){const i=t.value.clone(),s=Lh(t.fieldTransforms,n,e.transformResults);i.setAll(s),n.convertToFoundDocument(e.version,i).setHasCommittedMutations()}(t,n,e):t instanceof Mh?function(t,n,e){if(!Nh(t.precondition,n))return void n.convertToUnknownDocument(e.version);const i=Lh(t.fieldTransforms,n,e.transformResults),s=n.data;s.setAll(xh(t)),s.setAll(i),n.convertToFoundDocument(e.version,s).setHasCommittedMutations()}(t,n,e):(i=e,n.convertToNoDocument(i.version).setHasCommittedMutations())}function Rh(t,n,e,i){return t instanceof $h?function(t,n,e,i){if(!Nh(t.precondition,n))return e;const s=t.value.clone(),r=Fh(t.fieldTransforms,i,n);return s.setAll(r),n.convertToFoundDocument(n.version,s).setHasLocalMutations(),null}(t,n,e,i):t instanceof Mh?function(t,n,e,i){if(!Nh(t.precondition,n))return e;const s=Fh(t.fieldTransforms,i,n),r=n.data;return r.setAll(xh(t)),r.setAll(s),n.convertToFoundDocument(n.version,r).setHasLocalMutations(),null===e?null:e.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,n,e,i):(s=n,r=e,Nh(t.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):r);var s,r}function Dh(t,n){let e=null;for(const i of t.fieldTransforms){const t=n.data.field(i.field),s=ph(i.transform,t||null);null!=s&&(null===e&&(e=ha.empty()),e.set(i.field,s))}return e||null}function Ph(t,n){return t.type===n.type&&!!t.key.isEqual(n.key)&&!!t.precondition.isEqual(n.precondition)&&(e=t.fieldTransforms,i=n.fieldTransforms,!!(void 0===e&&void 0===i||e&&i&&Wr(e,i,((t,n)=>function(t,n){return t.field.isEqual(n.field)&&(e=t.transform,i=n.transform,e instanceof vh&&i instanceof vh||e instanceof yh&&i instanceof yh?Wr(e.elements,i.elements,Wo):e instanceof Eh&&i instanceof Eh?Wo(e.Ie,i.Ie):e instanceof mh&&i instanceof mh);var e,i}(t,n))))&&(0===t.type?t.value.isEqual(n.value):1!==t.type||t.data.isEqual(n.data)&&t.fieldMask.isEqual(n.fieldMask)));var e,i}class $h extends Oh{constructor(t,n,e,i=[]){super(),this.key=t,this.value=n,this.precondition=e,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Mh extends Oh{constructor(t,n,e,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=e,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function xh(t){const n=new Map;return t.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const i=t.data.field(e);n.set(e,i)}})),n}function Lh(t,n,e){const i=new Map;Nr(t.length===e.length);for(let s=0;s<e.length;s++){const r=t[s],o=r.transform,a=n.data.field(r.field);i.set(r.field,wh(o,a,e[s]))}return i}function Fh(t,n,e){const i=new Map;for(const s of t){const t=s.transform,r=e.data.field(s.field);i.set(s.field,dh(t,r,n))}return i}class Uh extends Oh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jh extends Oh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(t,n,e,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=e,this.mutations=i}applyToRemoteDocument(t,n){const e=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const n=this.mutations[i];n.key.isEqual(t.key)&&Ch(n,t,e[i])}}applyToLocalView(t,n){for(const e of this.baseMutations)e.key.isEqual(t.key)&&(n=Rh(e,t,n,this.localWriteTime));for(const e of this.mutations)e.key.isEqual(t.key)&&(n=Rh(e,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const e=sh();return this.mutations.forEach((i=>{const s=t.get(i.key),r=s.overlayedDocument;let o=this.applyToLocalView(r,s.mutatedFields);o=n.has(i.key)?null:o;const a=kh(r,o);null!==a&&e.set(i.key,a),r.isValidDocument()||r.convertToNoDocument(Xr.min())})),e}keys(){return this.mutations.reduce(((t,n)=>t.add(n.key)),hh())}isEqual(t){return this.batchId===t.batchId&&Wr(this.mutations,t.mutations,((t,n)=>Ph(t,n)))&&Wr(this.baseMutations,t.baseMutations,((t,n)=>Ph(t,n)))}}class qh{constructor(t,n,e,i){this.batch=t,this.commitVersion=n,this.mutationResults=e,this.docVersions=i}static from(t,n,e){Nr(t.mutations.length===e.length);let i=function(){return oh}();const s=t.mutations;for(let r=0;r<s.length;r++)i=i.insert(s[r].key,e[r].version);return new qh(t,n,e,i)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bh{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(t,n){this.count=t,this.unchangedNames=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gh,Hh;function Wh(t){if(void 0===t)return Tr("GRPC error has no .code"),kr.UNKNOWN;switch(t){case Gh.OK:return kr.OK;case Gh.CANCELLED:return kr.CANCELLED;case Gh.UNKNOWN:return kr.UNKNOWN;case Gh.DEADLINE_EXCEEDED:return kr.DEADLINE_EXCEEDED;case Gh.RESOURCE_EXHAUSTED:return kr.RESOURCE_EXHAUSTED;case Gh.INTERNAL:return kr.INTERNAL;case Gh.UNAVAILABLE:return kr.UNAVAILABLE;case Gh.UNAUTHENTICATED:return kr.UNAUTHENTICATED;case Gh.INVALID_ARGUMENT:return kr.INVALID_ARGUMENT;case Gh.NOT_FOUND:return kr.NOT_FOUND;case Gh.ALREADY_EXISTS:return kr.ALREADY_EXISTS;case Gh.PERMISSION_DENIED:return kr.PERMISSION_DENIED;case Gh.FAILED_PRECONDITION:return kr.FAILED_PRECONDITION;case Gh.ABORTED:return kr.ABORTED;case Gh.OUT_OF_RANGE:return kr.OUT_OF_RANGE;case Gh.UNIMPLEMENTED:return kr.UNIMPLEMENTED;case Gh.DATA_LOSS:return kr.DATA_LOSS;default:return Sr()}}(Hh=Gh||(Gh={}))[Hh.OK=0]="OK",Hh[Hh.CANCELLED=1]="CANCELLED",Hh[Hh.UNKNOWN=2]="UNKNOWN",Hh[Hh.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Hh[Hh.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Hh[Hh.NOT_FOUND=5]="NOT_FOUND",Hh[Hh.ALREADY_EXISTS=6]="ALREADY_EXISTS",Hh[Hh.PERMISSION_DENIED=7]="PERMISSION_DENIED",Hh[Hh.UNAUTHENTICATED=16]="UNAUTHENTICATED",Hh[Hh.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Hh[Hh.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Hh[Hh.ABORTED=10]="ABORTED",Hh[Hh.OUT_OF_RANGE=11]="OUT_OF_RANGE",Hh[Hh.UNIMPLEMENTED=12]="UNIMPLEMENTED",Hh[Hh.INTERNAL=13]="INTERNAL",Hh[Hh.UNAVAILABLE=14]="UNAVAILABLE",Hh[Hh.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Kh=new sr([4294967295,4294967295],0);function Jh(t){const n=Vr().encode(t),e=new rr;return e.update(n),new Uint8Array(e.digest())}function Qh(t){const n=new DataView(t.buffer),e=n.getUint32(0,!0),i=n.getUint32(4,!0),s=n.getUint32(8,!0),r=n.getUint32(12,!0);return[new sr([e,i],0),new sr([s,r],0)]}class Xh{constructor(t,n,e){if(this.bitmap=t,this.padding=n,this.hashCount=e,n<0||n>=8)throw new Yh(`Invalid padding: ${n}`);if(e<0)throw new Yh(`Invalid hash count: ${e}`);if(t.length>0&&0===this.hashCount)throw new Yh(`Invalid hash count: ${e}`);if(0===t.length&&0!==n)throw new Yh(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*t.length-n,this.de=sr.fromNumber(this.Ee)}Ae(t,n,e){let i=t.add(n.multiply(sr.fromNumber(e)));return 1===i.compare(Kh)&&(i=new sr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.de).toNumber()}Re(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.Ee)return!1;const n=Jh(t),[e,i]=Qh(n);for(let s=0;s<this.hashCount;s++){const t=this.Ae(e,i,s);if(!this.Re(t))return!1}return!0}static create(t,n,e){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),r=new Xh(s,i,n);return e.forEach((t=>r.insert(t))),r}insert(t){if(0===this.Ee)return;const n=Jh(t),[e,i]=Qh(n);for(let s=0;s<this.hashCount;s++){const t=this.Ae(e,i,s);this.Ve(t)}}Ve(t){const n=Math.floor(t/8),e=t%8;this.bitmap[n]|=1<<e}}class Yh extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(t,n,e,i,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=e,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,e){const i=new Map;return i.set(t,tu.createSynthesizedTargetChangeForCurrentChange(t,n,e)),new Zh(Xr.min(),i,new bo(Br),Za(),hh())}}class tu{constructor(t,n,e,i,s){this.resumeToken=t,this.current=n,this.addedDocuments=e,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,e){return new tu(e,n,hh(),hh(),hh())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(t,n,e,i){this.me=t,this.removedTargetIds=n,this.key=e,this.fe=i}}class eu{constructor(t,n){this.targetId=t,this.ge=n}}class iu{constructor(t,n,e=No.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=e,this.cause=i}}class su{constructor(){this.pe=0,this.ye=au(),this.we=No.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return 0!==this.pe}get ve(){return this.be}Ce(t){t.approximateByteSize()>0&&(this.be=!0,this.we=t)}Fe(){let t=hh(),n=hh(),e=hh();return this.ye.forEach(((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:e=e.add(i);break;default:Sr()}})),new tu(this.we,this.Se,t,n,e)}Me(){this.be=!1,this.ye=au()}xe(t,n){this.be=!0,this.ye=this.ye.insert(t,n)}Oe(t){this.be=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1,Nr(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class ru{constructor(t){this.ke=t,this.qe=new Map,this.Qe=Za(),this.$e=ou(),this.Ue=ou(),this.Ke=new bo(Br)}We(t){for(const n of t.me)t.fe&&t.fe.isFoundDocument()?this.Ge(n,t.fe):this.ze(n,t.key,t.fe);for(const n of t.removedTargetIds)this.ze(n,t.key,t.fe)}je(t){this.forEachTarget(t,(n=>{const e=this.He(n);switch(t.state){case 0:this.Je(n)&&e.Ce(t.resumeToken);break;case 1:e.Be(),e.De||e.Me(),e.Ce(t.resumeToken);break;case 2:e.Be(),e.De||this.removeTarget(n);break;case 3:this.Je(n)&&(e.Le(),e.Ce(t.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),e.Ce(t.resumeToken));break;default:Sr()}}))}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.qe.forEach(((t,e)=>{this.Je(e)&&n(e)}))}Ze(t){const n=t.targetId,e=t.ge.count,i=this.Xe(n);if(i){const s=i.target;if(xa(s))if(0===e){const t=new io(s.path);this.ze(n,t,ca.newNoDocument(t,Xr.min()))}else Nr(1===e);else{const i=this.et(n);if(i!==e){const e=this.tt(t),s=e?this.nt(e,t,i):1;if(0!==s){this.Ye(n);const t=2===s?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,t)}}}}}tt(t){const n=t.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:e="",padding:i=0},hashCount:s=0}=n;let r,o;try{r=Ro(e).toUint8Array()}catch(a){if(a instanceof So)return _r("Decoding the base64 bloom filter in existence filter failed ("+a.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw a}try{o=new Xh(r,i,s)}catch(a){return _r(a instanceof Yh?"BloomFilter error: ":"Applying bloom filter failed: ",a),null}return 0===o.Ee?null:o}nt(t,n,e){return n.ge.count===e-this.st(t,n.targetId)?0:2}st(t,n){const e=this.ke.getRemoteKeysForTarget(n);let i=0;return e.forEach((e=>{const s=this.ke.it(),r=`projects/${s.projectId}/databases/${s.database}/documents/${e.path.canonicalString()}`;t.mightContain(r)||(this.ze(n,e,null),i++)})),i}ot(t){const n=new Map;this.qe.forEach(((e,i)=>{const s=this.Xe(i);if(s){if(e.current&&xa(s.target)){const n=new io(s.target.path);this.Oi(n).has(i)||this.ut(i,n)||this.ze(i,n,ca.newNoDocument(n,t))}e.ve&&(n.set(i,e.Fe()),e.Me())}}));let e=hh();this.Ue.forEach(((t,n)=>{let i=!0;n.forEachWhile((t=>{const n=this.Xe(t);return!n||"TargetPurposeLimboResolution"===n.purpose||(i=!1,!1)})),i&&(e=e.add(t))})),this.Qe.forEach(((n,e)=>e.setReadTime(t)));const i=new Zh(t,n,this.Ke,this.Qe,e);return this.Qe=Za(),this.$e=ou(),this.Ue=ou(),this.Ke=new bo(Br),i}Ge(t,n){if(!this.Je(t))return;const e=this.ut(t,n.key)?2:0;this.He(t).xe(n.key,e),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this.Oi(n.key).add(t)),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(t))}ze(t,n,e){if(!this.Je(t))return;const i=this.He(t);this.ut(t,n)?i.xe(n,1):i.Oe(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(t)),this.Ue=this.Ue.insert(n,this.ct(n).add(t)),e&&(this.Qe=this.Qe.insert(n,e))}removeTarget(t){this.qe.delete(t)}et(t){const n=this.He(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ne(t){this.He(t).Ne()}He(t){let n=this.qe.get(t);return n||(n=new su,this.qe.set(t,n)),n}ct(t){let n=this.Ue.get(t);return n||(n=new To(Br),this.Ue=this.Ue.insert(t,n)),n}Oi(t){let n=this.$e.get(t);return n||(n=new To(Br),this.$e=this.$e.insert(t,n)),n}Je(t){const n=null!==this.Xe(t);return n||Ir("WatchChangeAggregator","Detected inactive target",t),n}Xe(t){const n=this.qe.get(t);return n&&n.De?null:this.ke.lt(t)}Ye(t){this.qe.set(t,new su),this.ke.getRemoteKeysForTarget(t).forEach((n=>{this.ze(t,n,null)}))}ut(t,n){return this.ke.getRemoteKeysForTarget(t).has(n)}}function ou(){return new bo(io.comparator)}function au(){return new bo(io.comparator)}const hu=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),uu=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),cu=(()=>({and:"AND",or:"OR"}))();class lu{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function fu(t,n){return t.useProto3Json||fo(n)?n:{value:n}}function du(t,n){return t.useProto3Json?`${new Date(1e3*n.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+n.nanoseconds).slice(-9)}Z`:{seconds:""+n.seconds,nanos:n.nanoseconds}}function wu(t,n){return t.useProto3Json?n.toBase64():n.toUint8Array()}function pu(t,n){return du(t,n.toTimestamp())}function mu(t){return Nr(!!t),Xr.fromTimestamp(function(t){const n=ko(t);return new Qr(n.seconds,n.nanos)}(t))}function vu(t,n){return gu(t,n).canonicalString()}function gu(t,n){const e=(i=t,new to(["projects",i.projectId,"databases",i.database])).child("documents");var i;return void 0===n?e:e.child(n)}function yu(t){const n=to.fromString(t);return Nr(Lu(n)),n}function bu(t,n){return vu(t.databaseId,n.path)}function Eu(t,n){const e=yu(n);if(e.get(1)!==t.databaseId.projectId)throw new Cr(kr.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+t.databaseId.projectId);if(e.get(3)!==t.databaseId.database)throw new Cr(kr.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+t.databaseId.database);return new io(_u(e))}function Iu(t,n){return vu(t.databaseId,n)}function Tu(t){return new to(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function _u(t){return Nr(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Au(t,n,e){return{name:bu(t,n),fields:e.value.mapValue.fields}}function Su(t,n){return{documents:[Iu(t,n.path)]}}function Nu(t,n){const e={structuredQuery:{}},i=n.path;let s;null!==n.collectionGroup?(s=i,e.structuredQuery.from=[{collectionId:n.collectionGroup,allDescendants:!0}]):(s=i.popLast(),e.structuredQuery.from=[{collectionId:i.lastSegment()}]),e.parent=Iu(t,s);const r=function(t){if(0!==t.length)return Mu(ga.create(t,"and"))}(n.filters);r&&(e.structuredQuery.where=r);const o=function(t){if(0!==t.length)return t.map((t=>{return{field:Pu((n=t).field),direction:Cu(n.dir)};var n}))}(n.orderBy);o&&(e.structuredQuery.orderBy=o);const a=fu(t,n.limit);return null!==a&&(e.structuredQuery.limit=a),n.startAt&&(e.structuredQuery.startAt={before:(h=n.startAt).inclusive,values:h.position}),n.endAt&&(e.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(n.endAt)),{ht:e,parent:s};var h}function Ou(t){let n=function(t){const n=yu(t);return 4===n.length?to.emptyPath():_u(n)}(t.parent);const e=t.structuredQuery,i=e.from?e.from.length:0;let s=null;if(i>0){Nr(1===i);const t=e.from[0];t.allDescendants?s=t.collectionId:n=n.child(t.collectionId)}let r=[];e.where&&(r=function(t){const n=ku(t);return n instanceof ga&&ba(n)?n.getFilters():[n]}(e.where));let o=[];e.orderBy&&(o=e.orderBy.map((t=>{return new wa($u((n=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(n.direction));var n})));let a=null;e.limit&&(a=function(t){let n;return n="object"==typeof t?t.value:t,fo(n)?null:n}(e.limit));let h=null;e.startAt&&(h=function(t){const n=!!t.before,e=t.values||[];return new la(e,n)}(e.startAt));let u=null;return e.endAt&&(u=function(t){const n=!t.before,e=t.values||[];return new la(e,n)}(e.endAt)),function(t,n,e,i,s,r,o,a){return new La(t,n,e,i,s,"F",o,a)}(n,s,o,r,a,0,h,u)}function ku(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=$u(t.unaryFilter.field);return va.create(n,"==",{doubleValue:NaN});case"IS_NULL":const e=$u(t.unaryFilter.field);return va.create(e,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=$u(t.unaryFilter.field);return va.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=$u(t.unaryFilter.field);return va.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Sr()}}(t):void 0!==t.fieldFilter?(n=t,va.create($u(n.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Sr()}}(n.fieldFilter.op),n.fieldFilter.value)):void 0!==t.compositeFilter?function(t){return ga.create(t.compositeFilter.filters.map((t=>ku(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return Sr()}}(t.compositeFilter.op))}(t):Sr();var n}function Cu(t){return hu[t]}function Ru(t){return uu[t]}function Du(t){return cu[t]}function Pu(t){return{fieldPath:t.canonicalString()}}function $u(t){return eo.fromServerFormat(t.fieldPath)}function Mu(t){return t instanceof va?function(t){if("=="===t.op){if(ra(t.value))return{unaryFilter:{field:Pu(t.field),op:"IS_NAN"}};if(sa(t.value))return{unaryFilter:{field:Pu(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(ra(t.value))return{unaryFilter:{field:Pu(t.field),op:"IS_NOT_NAN"}};if(sa(t.value))return{unaryFilter:{field:Pu(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pu(t.field),op:Ru(t.op),value:t.value}}}(t):t instanceof ga?function(t){const n=t.getFilters().map((t=>Mu(t)));return 1===n.length?n[0]:{compositeFilter:{op:Du(t.op),filters:n}}}(t):Sr()}function xu(t){const n=[];return t.fields.forEach((t=>n.push(t.canonicalString()))),{fieldPaths:n}}function Lu(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(t,n,e,i,s=Xr.min(),r=Xr.min(),o=No.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=n,this.purpose=e,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new Fu(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Fu(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Fu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Fu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(t){this.Tt=t}}function ju(t){const n=Ou({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?za(n,n.limit,"L"):n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(){this.Tn=new qu}addToCollectionParentIndex(t,n){return this.Tn.add(n),uo.resolve()}getCollectionParents(t,n){return uo.resolve(this.Tn.getEntries(n))}addFieldIndex(t,n){return uo.resolve()}deleteFieldIndex(t,n){return uo.resolve()}deleteAllFieldIndexes(t){return uo.resolve()}createTargetIndexes(t,n){return uo.resolve()}getDocumentsMatchingTarget(t,n){return uo.resolve(null)}getIndexType(t,n){return uo.resolve(0)}getFieldIndexes(t,n){return uo.resolve([])}getNextCollectionGroupToUpdate(t){return uo.resolve(null)}getMinOffset(t,n){return uo.resolve(ro.min())}getMinOffsetFromCollectionGroup(t,n){return uo.resolve(ro.min())}updateCollectionGroup(t,n,e){return uo.resolve()}updateIndexEntries(t,n){return uo.resolve()}}class qu{constructor(){this.index={}}add(t){const n=t.lastSegment(),e=t.popLast(),i=this.index[n]||new To(to.comparator),s=!i.has(e);return this.index[n]=i.add(e),s}has(t){const n=t.lastSegment(),e=t.popLast(),i=this.index[n];return i&&i.has(e)}getEntries(t){return(this.index[t]||new To(to.comparator)).toArray()}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},zu=41943040;class Gu{static withCacheSize(t){return new Gu(t,Gu.DEFAULT_COLLECTION_PERCENTILE,Gu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,e){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gu.DEFAULT_COLLECTION_PERCENTILE=10,Gu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Gu.DEFAULT=new Gu(zu,Gu.DEFAULT_COLLECTION_PERCENTILE,Gu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Gu.DISABLED=new Gu(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hu{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Un(){return new Hu(0)}static Kn(){return new Hu(-1)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu="LruGarbageCollector";function Ku([t,n],[e,i]){const s=Br(t,e);return 0===s?Br(n,i):s}class Ju{constructor(t){this.Hn=t,this.buffer=new To(Ku),this.Jn=0}Yn(){return++this.Jn}Zn(t){const n=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const t=this.buffer.last();Ku(n,t)<0&&(this.buffer=this.buffer.delete(t).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Qu{constructor(t,n,e){this.garbageCollector=t,this.asyncQueue=n,this.localStore=e,this.Xn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return null!==this.Xn}er(t){Ir(Wu,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){co(t)?Ir(Wu,"Ignoring IndexedDB error during garbage collection: ",t):await ho(t)}await this.er(3e5)}))}}class Xu{constructor(t,n){this.tr=t,this.params=n}calculateTargetCount(t,n){return this.tr.nr(t).next((t=>Math.floor(n/100*t)))}nthSequenceNumber(t,n){if(0===n)return uo.resolve(lo.ae);const e=new Ju(n);return this.tr.forEachTarget(t,(t=>e.Zn(t.sequenceNumber))).next((()=>this.tr.rr(t,(t=>e.Zn(t))))).next((()=>e.maxValue))}removeTargets(t,n,e){return this.tr.removeTargets(t,n,e)}removeOrphanedDocuments(t,n){return this.tr.removeOrphanedDocuments(t,n)}collect(t,n){return-1===this.params.cacheSizeCollectionThreshold?(Ir("LruGarbageCollector","Garbage collection skipped; disabled"),uo.resolve(Bu)):this.getCacheSize(t).next((e=>e<this.params.cacheSizeCollectionThreshold?(Ir("LruGarbageCollector",`Garbage collection skipped; Cache size ${e} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Bu):this.ir(t,n)))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,n){let e,i,s,r,o,a,h;const u=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((n=>(n>this.params.maximumSequenceNumbersToCollect?(Ir("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${n}`),i=this.params.maximumSequenceNumbersToCollect):i=n,r=Date.now(),this.nthSequenceNumber(t,i)))).next((i=>(e=i,o=Date.now(),this.removeTargets(t,e,n)))).next((n=>(s=n,a=Date.now(),this.removeOrphanedDocuments(t,e)))).next((t=>(h=Date.now(),Er()<=R.DEBUG&&Ir("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${r-u}ms\n\tDetermined least recently used ${i} in `+(o-r)+`ms\n\tRemoved ${s} targets in `+(a-o)+`ms\n\tRemoved ${t} documents in `+(h-a)+`ms\nTotal Duration: ${h-u}ms`),uo.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:t}))))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yu{constructor(){this.changes=new Xa((t=>t.toString()),((t,n)=>t.isEqual(n))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,ca.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const e=this.changes.get(n);return void 0!==e?uo.resolve(e):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(t,n,e,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=e,this.indexManager=i}getDocument(t,n){let e=null;return this.documentOverlayCache.getOverlay(t,n).next((i=>(e=i,this.remoteDocumentCache.getEntry(t,n)))).next((t=>(null!==e&&Rh(e.mutation,t,Ao.empty(),Qr.now()),t)))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next((n=>this.getLocalViewOfDocuments(t,n,hh()).next((()=>n))))}getLocalViewOfDocuments(t,n,e=hh()){const i=ih();return this.populateOverlays(t,i,n).next((()=>this.computeViews(t,n,i,e).next((t=>{let n=nh();return t.forEach(((t,e)=>{n=n.insert(t,e.overlayedDocument)})),n}))))}getOverlayedDocuments(t,n){const e=ih();return this.populateOverlays(t,e,n).next((()=>this.computeViews(t,n,e,hh())))}populateOverlays(t,n,e){const i=[];return e.forEach((t=>{n.has(t)||i.push(t)})),this.documentOverlayCache.getOverlays(t,i).next((t=>{t.forEach(((t,e)=>{n.set(t,e)}))}))}computeViews(t,n,e,i){let s=Za();const r=rh(),o=rh();return n.forEach(((t,n)=>{const o=e.get(n.key);i.has(n.key)&&(void 0===o||o.mutation instanceof Mh)?s=s.insert(n.key,n):void 0!==o?(r.set(n.key,o.mutation.getFieldMask()),Rh(o.mutation,n,o.mutation.getFieldMask(),Qr.now())):r.set(n.key,Ao.empty())})),this.recalculateAndSaveOverlays(t,s).next((t=>(t.forEach(((t,n)=>r.set(t,n))),n.forEach(((t,n)=>{var e;return o.set(t,new Zu(n,null!==(e=r.get(t))&&void 0!==e?e:null))})),o)))}recalculateAndSaveOverlays(t,n){const e=rh();let i=new bo(((t,n)=>t-n)),s=hh();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next((t=>{for(const s of t)s.keys().forEach((t=>{const r=n.get(t);if(null===r)return;let o=e.get(t)||Ao.empty();o=s.applyToLocalView(r,o),e.set(t,o);const a=(i.get(s.batchId)||hh()).add(t);i=i.insert(s.batchId,a)}))})).next((()=>{const r=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,h=i.value,u=sh();h.forEach((t=>{if(!s.has(t)){const i=kh(n.get(t),e.get(t));null!==i&&u.set(t,i),s=s.add(t)}})),r.push(this.documentOverlayCache.saveOverlays(t,a,u))}return uo.waitFor(r)})).next((()=>e))}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next((n=>this.recalculateAndSaveOverlays(t,n)))}getDocumentsMatchingQuery(t,n,e,i){return s=n,io.isDocumentKey(s.path)&&null===s.collectionGroup&&0===s.filters.length?this.getDocumentsMatchingDocumentQuery(t,n.path):ja(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,e,i):this.getDocumentsMatchingCollectionQuery(t,n,e,i);var s}getNextDocuments(t,n,e,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,e,i).next((s=>{const r=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,e.largestBatchId,i-s.size):uo.resolve(ih());let o=-1,a=s;return r.next((n=>uo.forEach(n,((n,e)=>(o<e.largestBatchId&&(o=e.largestBatchId),s.get(n)?uo.resolve():this.remoteDocumentCache.getEntry(t,n).next((t=>{a=a.insert(n,t)}))))).next((()=>this.populateOverlays(t,n,s))).next((()=>this.computeViews(t,a,n,hh()))).next((t=>({batchId:o,changes:eh(t)})))))}))}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new io(n)).next((t=>{let n=nh();return t.isFoundDocument()&&(n=n.insert(t.key,t)),n}))}getDocumentsMatchingCollectionGroupQuery(t,n,e,i){const s=n.collectionGroup;let r=nh();return this.indexManager.getCollectionParents(t,s).next((o=>uo.forEach(o,(o=>{const a=(h=n,u=o.child(s),new La(u,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt));var h,u;return this.getDocumentsMatchingCollectionQuery(t,a,e,i).next((t=>{t.forEach(((t,n)=>{r=r.insert(t,n)}))}))})).next((()=>r))))}getDocumentsMatchingCollectionQuery(t,n,e,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,e.largestBatchId).next((r=>(s=r,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,e,s,i)))).next((t=>{s.forEach(((n,e)=>{const i=e.getKey();null===t.get(i)&&(t=t.insert(i,ca.newInvalidDocument(i)))}));let e=nh();return t.forEach(((t,i)=>{const r=s.get(t);void 0!==r&&Rh(r.mutation,i,Ao.empty(),Qr.now()),Ka(n,i)&&(e=e.insert(t,i))})),e}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,n){return uo.resolve(this.dr.get(n))}saveBundleMetadata(t,n){return this.dr.set(n.id,{id:(e=n).id,version:e.version,createTime:mu(e.createTime)}),uo.resolve();var e}getNamedQuery(t,n){return uo.resolve(this.Ar.get(n))}saveNamedQuery(t,n){return this.Ar.set(n.name,{name:(e=n).name,query:ju(e.bundledQuery),readTime:mu(e.readTime)}),uo.resolve();var e}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(){this.overlays=new bo(io.comparator),this.Rr=new Map}getOverlay(t,n){return uo.resolve(this.overlays.get(n))}getOverlays(t,n){const e=ih();return uo.forEach(n,(n=>this.getOverlay(t,n).next((t=>{null!==t&&e.set(n,t)})))).next((()=>e))}saveOverlays(t,n,e){return e.forEach(((e,i)=>{this.Et(t,n,i)})),uo.resolve()}removeOverlaysForBatchId(t,n,e){const i=this.Rr.get(e);return void 0!==i&&(i.forEach((t=>this.overlays=this.overlays.remove(t))),this.Rr.delete(e)),uo.resolve()}getOverlaysForCollection(t,n,e){const i=ih(),s=n.length+1,r=new io(n.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!n.isPrefixOf(r.path))break;r.path.length===s&&t.largestBatchId>e&&i.set(t.getKey(),t)}return uo.resolve(i)}getOverlaysForCollectionGroup(t,n,e,i){let s=new bo(((t,n)=>t-n));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===n&&t.largestBatchId>e){let n=s.get(t.largestBatchId);null===n&&(n=ih(),s=s.insert(t.largestBatchId,n)),n.set(t.getKey(),t)}}const o=ih(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,n)=>o.set(t,n))),!(o.size()>=i)););return uo.resolve(o)}Et(t,n,e){const i=this.overlays.get(e.key);if(null!==i){const t=this.Rr.get(i.largestBatchId).delete(e.key);this.Rr.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(e.key,new Bh(n,e));let s=this.Rr.get(n);void 0===s&&(s=hh(),this.Rr.set(n,s)),this.Rr.set(n,s.add(e.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(){this.sessionToken=No.EMPTY_BYTE_STRING}getSessionToken(t){return uo.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,uo.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(){this.Vr=new To(rc.mr),this.gr=new To(rc.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,n){const e=new rc(t,n);this.Vr=this.Vr.add(e),this.gr=this.gr.add(e)}yr(t,n){t.forEach((t=>this.addReference(t,n)))}removeReference(t,n){this.wr(new rc(t,n))}Sr(t,n){t.forEach((t=>this.removeReference(t,n)))}br(t){const n=new io(new to([])),e=new rc(n,t),i=new rc(n,t+1),s=[];return this.gr.forEachInRange([e,i],(t=>{this.wr(t),s.push(t.key)})),s}Dr(){this.Vr.forEach((t=>this.wr(t)))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const n=new io(new to([])),e=new rc(n,t),i=new rc(n,t+1);let s=hh();return this.gr.forEachInRange([e,i],(t=>{s=s.add(t.key)})),s}containsKey(t){const n=new rc(t,0),e=this.Vr.firstAfterOrEqual(n);return null!==e&&t.isEqual(e.key)}}class rc{constructor(t,n){this.key=t,this.Cr=n}static mr(t,n){return io.comparator(t.key,n.key)||Br(t.Cr,n.Cr)}static pr(t,n){return Br(t.Cr,n.Cr)||io.comparator(t.key,n.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new To(rc.mr)}checkEmpty(t){return uo.resolve(0===this.mutationQueue.length)}addMutationBatch(t,n,e,i){const s=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new Vh(s,n,e,i);this.mutationQueue.push(r);for(const o of i)this.Mr=this.Mr.add(new rc(o.key,s)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return uo.resolve(r)}lookupMutationBatch(t,n){return uo.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(t,n){const e=n+1,i=this.Nr(e),s=i<0?0:i;return uo.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return uo.resolve(0===this.mutationQueue.length?-1:this.Fr-1)}getAllMutationBatches(t){return uo.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const e=new rc(n,0),i=new rc(n,Number.POSITIVE_INFINITY),s=[];return this.Mr.forEachInRange([e,i],(t=>{const n=this.Or(t.Cr);s.push(n)})),uo.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let e=new To(Br);return n.forEach((t=>{const n=new rc(t,0),i=new rc(t,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([n,i],(t=>{e=e.add(t.Cr)}))})),uo.resolve(this.Br(e))}getAllMutationBatchesAffectingQuery(t,n){const e=n.path,i=e.length+1;let s=e;io.isDocumentKey(s)||(s=s.child(""));const r=new rc(new io(s),0);let o=new To(Br);return this.Mr.forEachWhile((t=>{const n=t.key.path;return!!e.isPrefixOf(n)&&(n.length===i&&(o=o.add(t.Cr)),!0)}),r),uo.resolve(this.Br(o))}Br(t){const n=[];return t.forEach((t=>{const e=this.Or(t);null!==e&&n.push(e)})),n}removeMutationBatch(t,n){Nr(0===this.Lr(n.batchId,"removed")),this.mutationQueue.shift();let e=this.Mr;return uo.forEach(n.mutations,(i=>{const s=new rc(i.key,n.batchId);return e=e.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.Mr=e}))}qn(t){}containsKey(t,n){const e=new rc(n,0),i=this.Mr.firstAfterOrEqual(e);return uo.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,uo.resolve()}Lr(t,n){return this.Nr(t)}Nr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Or(t){const n=this.Nr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(t){this.kr=t,this.docs=new bo(io.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const e=n.key,i=this.docs.get(e),s=i?i.size:0,r=this.kr(n);return this.docs=this.docs.insert(e,{document:n.mutableCopy(),size:r}),this.size+=r-s,this.indexManager.addToCollectionParentIndex(t,e.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const e=this.docs.get(n);return uo.resolve(e?e.document.mutableCopy():ca.newInvalidDocument(n))}getEntries(t,n){let e=Za();return n.forEach((t=>{const n=this.docs.get(t);e=e.insert(t,n?n.document.mutableCopy():ca.newInvalidDocument(t))})),uo.resolve(e)}getDocumentsMatchingQuery(t,n,e,i){let s=Za();const r=n.path,o=new io(r.child("__id-9223372036854775808__")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!r.isPrefixOf(t.path))break;t.path.length>r.length+1||oo(so(o),e)<=0||(i.has(o.key)||Ka(n,o))&&(s=s.insert(o.key,o.mutableCopy()))}return uo.resolve(s)}getAllFromCollectionGroup(t,n,e,i){Sr()}qr(t,n){return uo.forEach(this.docs,(t=>n(t)))}newChangeBuffer(t){return new hc(this)}getSize(t){return uo.resolve(this.size)}}class hc extends Yu{constructor(t){super(),this.Ir=t}applyChanges(t){const n=[];return this.changes.forEach(((e,i)=>{i.isValidDocument()?n.push(this.Ir.addEntry(t,i)):this.Ir.removeEntry(e)})),uo.waitFor(n)}getFromCache(t,n){return this.Ir.getEntry(t,n)}getAllFromCache(t,n){return this.Ir.getEntries(t,n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(t){this.persistence=t,this.Qr=new Xa((t=>$a(t)),Ma),this.lastRemoteSnapshotVersion=Xr.min(),this.highestTargetId=0,this.$r=0,this.Ur=new sc,this.targetCount=0,this.Kr=Hu.Un()}forEachTarget(t,n){return this.Qr.forEach(((t,e)=>n(e))),uo.resolve()}getLastRemoteSnapshotVersion(t){return uo.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return uo.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Kr.next(),uo.resolve(this.highestTargetId)}setTargetsMetadata(t,n,e){return e&&(this.lastRemoteSnapshotVersion=e),n>this.$r&&(this.$r=n),uo.resolve()}zn(t){this.Qr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Kr=new Hu(n),this.highestTargetId=n),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,n){return this.zn(n),this.targetCount+=1,uo.resolve()}updateTargetData(t,n){return this.zn(n),uo.resolve()}removeTargetData(t,n){return this.Qr.delete(n.target),this.Ur.br(n.targetId),this.targetCount-=1,uo.resolve()}removeTargets(t,n,e){let i=0;const s=[];return this.Qr.forEach(((r,o)=>{o.sequenceNumber<=n&&null===e.get(o.targetId)&&(this.Qr.delete(r),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)})),uo.waitFor(s).next((()=>i))}getTargetCount(t){return uo.resolve(this.targetCount)}getTargetData(t,n){const e=this.Qr.get(n)||null;return uo.resolve(e)}addMatchingKeys(t,n,e){return this.Ur.yr(n,e),uo.resolve()}removeMatchingKeys(t,n,e){this.Ur.Sr(n,e);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach((n=>{s.push(i.markPotentiallyOrphaned(t,n))})),uo.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Ur.br(n),uo.resolve()}getMatchingKeysForTargetId(t,n){const e=this.Ur.vr(n);return uo.resolve(e)}containsKey(t,n){return uo.resolve(this.Ur.containsKey(n))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(t,n){this.Wr={},this.overlays={},this.Gr=new lo(0),this.zr=!1,this.zr=!0,this.jr=new ic,this.referenceDelegate=t(this),this.Hr=new uc(this),this.indexManager=new Vu,this.remoteDocumentCache=new ac((t=>this.referenceDelegate.Jr(t))),this.serializer=new Uu(n),this.Yr=new nc(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new ec,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let e=this.Wr[t.toKey()];return e||(e=new oc(n,this.referenceDelegate),this.Wr[t.toKey()]=e),e}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,n,e){Ir("MemoryPersistence","Starting transaction:",t);const i=new lc(this.Gr.next());return this.referenceDelegate.Zr(),e(i).next((t=>this.referenceDelegate.Xr(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}ei(t,n){return uo.or(Object.values(this.Wr).map((e=>()=>e.containsKey(t,n))))}}class lc extends ao{constructor(t){super(),this.currentSequenceNumber=t}}class fc{constructor(t){this.persistence=t,this.ti=new sc,this.ni=null}static ri(t){return new fc(t)}get ii(){if(this.ni)return this.ni;throw Sr()}addReference(t,n,e){return this.ti.addReference(e,n),this.ii.delete(e.toString()),uo.resolve()}removeReference(t,n,e){return this.ti.removeReference(e,n),this.ii.add(e.toString()),uo.resolve()}markPotentiallyOrphaned(t,n){return this.ii.add(n.toString()),uo.resolve()}removeTarget(t,n){this.ti.br(n.targetId).forEach((t=>this.ii.add(t.toString())));const e=this.persistence.getTargetCache();return e.getMatchingKeysForTargetId(t,n.targetId).next((t=>{t.forEach((t=>this.ii.add(t.toString())))})).next((()=>e.removeTargetData(t,n)))}Zr(){this.ni=new Set}Xr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return uo.forEach(this.ii,(e=>{const i=io.fromPath(e);return this.si(t,i).next((t=>{t||n.removeEntry(i,Xr.min())}))})).next((()=>(this.ni=null,n.apply(t))))}updateLimboDocument(t,n){return this.si(t,n).next((t=>{t?this.ii.delete(n.toString()):this.ii.add(n.toString())}))}Jr(t){return 0}si(t,n){return uo.or([()=>uo.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.ei(t,n)])}}class dc{constructor(t,n){this.persistence=t,this.oi=new Xa((t=>function(t){let n="";for(let e=0;e<t.length;e++)n.length>0&&(n=mo(n)),n=po(t.get(e),n);return mo(n)}(t.path)),((t,n)=>t.isEqual(n))),this.garbageCollector=function(t,n){return new Xu(t,n)}(this,n)}static ri(t,n){return new dc(t,n)}Zr(){}Xr(t){return uo.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}nr(t){const n=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next((t=>n.next((n=>t+n))))}sr(t){let n=0;return this.rr(t,(t=>{n++})).next((()=>n))}rr(t,n){return uo.forEach(this.oi,((e,i)=>this.ar(t,e,i).next((t=>t?uo.resolve():n(i)))))}removeTargets(t,n,e){return this.persistence.getTargetCache().removeTargets(t,n,e)}removeOrphanedDocuments(t,n){let e=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.qr(t,(i=>this.ar(t,i,n).next((t=>{t||(e++,s.removeEntry(i,Xr.min()))})))).next((()=>s.apply(t))).next((()=>e))}markPotentiallyOrphaned(t,n){return this.oi.set(n,t.currentSequenceNumber),uo.resolve()}removeTarget(t,n){const e=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,e)}addReference(t,n,e){return this.oi.set(e,t.currentSequenceNumber),uo.resolve()}removeReference(t,n,e){return this.oi.set(e,t.currentSequenceNumber),uo.resolve()}updateLimboDocument(t,n){return this.oi.set(n,t.currentSequenceNumber),uo.resolve()}Jr(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=ta(t.data.value)),n}ar(t,n,e){return uo.or([()=>this.persistence.ei(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const t=this.oi.get(n);return uo.resolve(void 0!==t&&t>e)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(t,n,e,i){this.targetId=t,this.fromCache=n,this.Hi=e,this.Ji=i}static Yi(t,n){let e=hh(),i=hh();for(const s of n.docChanges)switch(s.type){case 0:e=e.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new wc(t,n.fromCache,e,i)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(){this.ki=0}get documentReadCount(){return this.ki}incrementDocumentReadCount(t){this.ki+=t}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=!function(){var t;const n=null===(t=o())||void 0===t?void 0:t.forceEnvironment;if("node"===n)return!0;if("browser"===n)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(e){return!1}}()&&navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")?8:function(){const t=l().match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}()>0?6:4}initialize(t,n){this.ns=t,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(t,n,e,i){const s={result:null};return this.rs(t,n).next((t=>{s.result=t})).next((()=>{if(!s.result)return this.ss(t,n,i,e).next((t=>{s.result=t}))})).next((()=>{if(s.result)return;const e=new pc;return this.Ci(t,n,e).next((i=>{if(s.result=i,this.Xi)return this.us(t,n,e,i.size)}))})).next((()=>s.result))}us(t,n,e,i){return e.documentReadCount<this.es?(Er()<=R.DEBUG&&Ir("QueryEngine","SDK will not create cache indexes for query:",Wa(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),uo.resolve()):(Er()<=R.DEBUG&&Ir("QueryEngine","Query:",Wa(n),"scans",e.documentReadCount,"local documents and returns",i,"documents as results."),e.documentReadCount>this.ts*i?(Er()<=R.DEBUG&&Ir("QueryEngine","The SDK decides to create cache indexes for query:",Wa(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,qa(n))):uo.resolve())}rs(t,n){if(Ua(n))return uo.resolve(null);let e=qa(n);return this.indexManager.getIndexType(t,e).next((i=>0===i?null:(null!==n.limit&&1===i&&(n=za(n,null,"F"),e=qa(n)),this.indexManager.getDocumentsMatchingTarget(t,e).next((i=>{const s=hh(...i);return this.ns.getDocuments(t,s).next((i=>this.indexManager.getMinOffset(t,e).next((e=>{const r=this.cs(n,i);return this.ls(n,r,s,e.readTime)?this.rs(t,za(n,null,"F")):this.hs(t,r,n,e)}))))})))))}ss(t,n,e,i){return Ua(n)||i.isEqual(Xr.min())?uo.resolve(null):this.ns.getDocuments(t,e).next((s=>{const r=this.cs(n,s);return this.ls(n,r,e,i)?uo.resolve(null):(Er()<=R.DEBUG&&Ir("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Wa(n)),this.hs(t,r,n,function(t){const n=t.toTimestamp().seconds,e=t.toTimestamp().nanoseconds+1,i=Xr.fromTimestamp(1e9===e?new Qr(n+1,0):new Qr(n,e));return new ro(i,io.empty(),-1)}(i)).next((t=>t)))}))}cs(t,n){let e=new To(Ja(t));return n.forEach(((n,i)=>{Ka(t,i)&&(e=e.add(i))})),e}ls(t,n,e,i){if(null===t.limit)return!1;if(e.size!==n.size)return!0;const s="F"===t.limitType?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ci(t,n,e){return Er()<=R.DEBUG&&Ir("QueryEngine","Using full collection scan to execute query:",Wa(n)),this.ns.getDocumentsMatchingQuery(t,n,ro.min(),e)}hs(t,n,e,i){return this.ns.getDocumentsMatchingQuery(t,e,i).next((t=>(n.forEach((n=>{t=t.insert(n.key,n)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc="LocalStore";class gc{constructor(t,n,e,i){this.persistence=t,this.Ps=n,this.serializer=i,this.Ts=new bo(Br),this.Is=new Xa((t=>$a(t)),Ma),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(e)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new tc(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>t.collect(n,this.Ts)))}}async function yc(t,n){const e=Or(t);return await e.persistence.runTransaction("Handle user change","readonly",(t=>{let i;return e.mutationQueue.getAllMutationBatches(t).next((s=>(i=s,e.As(n),e.mutationQueue.getAllMutationBatches(t)))).next((n=>{const s=[],r=[];let o=hh();for(const t of i){s.push(t.batchId);for(const n of t.mutations)o=o.add(n.key)}for(const t of n){r.push(t.batchId);for(const n of t.mutations)o=o.add(n.key)}return e.localDocuments.getDocuments(t,o).next((t=>({Rs:t,removedBatchIds:s,addedBatchIds:r})))}))}))}function bc(t){const n=Or(t);return n.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>n.Hr.getLastRemoteSnapshotVersion(t)))}function Ec(t,n){const e=Or(t);return e.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===n&&(n=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(t,n))))}async function Ic(t,n,e){const i=Or(t),s=i.Ts.get(n),r=e?"readwrite":"readwrite-primary";try{e||await i.persistence.runTransaction("Release target",r,(t=>i.persistence.referenceDelegate.removeTarget(t,s)))}catch(o){if(!co(o))throw o;Ir(vc,`Failed to update sequence numbers for target ${n}: ${o}`)}i.Ts=i.Ts.remove(n),i.Is.delete(s.target)}function Tc(t,n,e){const i=Or(t);let s=Xr.min(),r=hh();return i.persistence.runTransaction("Execute query","readwrite",(t=>function(t,n,e){const i=Or(t),s=i.Is.get(e);return void 0!==s?uo.resolve(i.Ts.get(s)):i.Hr.getTargetData(n,e)}(i,t,qa(n)).next((n=>{if(n)return s=n.lastLimboFreeSnapshotVersion,i.Hr.getMatchingKeysForTargetId(t,n.targetId).next((t=>{r=t}))})).next((()=>i.Ps.getDocumentsMatchingQuery(t,n,e?s:Xr.min(),e?r:hh()))).next((t=>(function(t,n,e){let i=t.Es.get(n)||Xr.min();e.forEach(((t,n)=>{n.readTime.compareTo(i)>0&&(i=n.readTime)})),t.Es.set(n,i)}(i,function(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}(n),t),{documents:t,gs:r})))))}class _c{constructor(){this.activeTargetIds=uh}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}bs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ac{constructor(){this.ho=new _c,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,e){}addLocalQueryTarget(t,n=!0){return n&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,n,e){this.Po[t]=n}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new _c,Promise.resolve()}handleUserChange(t,n,e){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{To(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc="ConnectivityMonitor";class Oc{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){Ir(Nc,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){Ir(Nc,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kc=null;function Cc(){return null===kc?kc=268435456+Math.round(2147483648*Math.random()):kc++,"0x"+kc.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Rc="RestConnection",Dc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Pc{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",e=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.po=n+"://"+t.host,this.yo=`projects/${e}/databases/${i}`,this.wo=this.databaseId.database===jo?`project_id=${e}`:`project_id=${e}&database_id=${i}`}So(t,n,e,i,s){const r=Cc(),o=this.bo(t,n.toUriEncodedString());Ir(Rc,`Sending RPC '${t}' ${r}:`,o,e);const a={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(a,i,s),this.vo(t,o,a,e).then((n=>(Ir(Rc,`Received RPC '${t}' ${r}: `,n),n)),(n=>{throw _r(Rc,`RPC '${t}' ${r} failed with error: `,n,"url: ",o,"request:",e),n}))}Co(t,n,e,i,s,r){return this.So(t,n,e,i,s)}Do(t,n,e){t["X-Goog-Api-Client"]="gl-js/ fire/"+yr,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((n,e)=>t[e]=n)),e&&e.headers.forEach(((n,e)=>t[e]=n))}bo(t,n){const e=Dc[t];return`${this.po}/v1/${n}:${e}`}terminate(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Uo(t){this.ko(t)}Ko(t){this.qo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc="WebChannelConnection";class xc extends Pc{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,n,e,i){const s=Cc();return new Promise(((r,o)=>{const a=new ar;a.setWithCredentials(!0),a.listenOnce(ur.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case cr.NO_ERROR:const n=a.getResponseJson();Ir(Mc,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(n)),r(n);break;case cr.TIMEOUT:Ir(Mc,`RPC '${t}' ${s} timed out`),o(new Cr(kr.DEADLINE_EXCEEDED,"Request time out"));break;case cr.HTTP_ERROR:const e=a.getStatus();if(Ir(Mc,`RPC '${t}' ${s} failed with status:`,e,"response text:",a.getResponseText()),e>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const n=null==t?void 0:t.error;if(n&&n.status&&n.message){const t=function(t){const n=t.toLowerCase().replace(/_/g,"-");return Object.values(kr).indexOf(n)>=0?n:kr.UNKNOWN}(n.status);o(new Cr(t,n.message))}else o(new Cr(kr.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Cr(kr.UNAVAILABLE,"Connection failed."));break;default:Sr()}}finally{Ir(Mc,`RPC '${t}' ${s} completed.`)}}));const h=JSON.stringify(i);Ir(Mc,`RPC '${t}' ${s} sending request:`,i),a.send(n,"POST",h,e,15)}))}Wo(t,n,e){const i=Cc(),s=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=wr(),o=dr(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;void 0!==h&&(a.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Do(a.initMessageHeaders,n,e),a.encodeInitMessageHeaders=!0;const u=s.join("");Ir(Mc,`Creating RPC '${t}' stream ${i}: ${u}`,a);const c=r.createWebChannel(u,a);let l=!1,f=!1;const d=new $c({Fo:n=>{f?Ir(Mc,`Not sending because RPC '${t}' stream ${i} is closed:`,n):(l||(Ir(Mc,`Opening RPC '${t}' stream ${i} transport.`),c.open(),l=!0),Ir(Mc,`RPC '${t}' stream ${i} sending:`,n),c.send(n))},Mo:()=>c.close()}),w=(t,n,e)=>{t.listen(n,(t=>{try{e(t)}catch(n){setTimeout((()=>{throw n}),0)}}))};return w(c,hr.EventType.OPEN,(()=>{f||(Ir(Mc,`RPC '${t}' stream ${i} transport opened.`),d.Qo())})),w(c,hr.EventType.CLOSE,(()=>{f||(f=!0,Ir(Mc,`RPC '${t}' stream ${i} transport closed`),d.Uo())})),w(c,hr.EventType.ERROR,(n=>{f||(f=!0,_r(Mc,`RPC '${t}' stream ${i} transport errored:`,n),d.Uo(new Cr(kr.UNAVAILABLE,"The operation could not be completed")))})),w(c,hr.EventType.MESSAGE,(n=>{var e;if(!f){const s=n.data[0];Nr(!!s);const r=s,o=(null==r?void 0:r.error)||(null===(e=r[0])||void 0===e?void 0:e.error);if(o){Ir(Mc,`RPC '${t}' stream ${i} received error:`,o);const n=o.status;let e=function(t){const n=Gh[t];if(void 0!==n)return Wh(n)}(n),s=o.message;void 0===e&&(e=kr.INTERNAL,s="Unknown error status: "+n+" with message "+o.message),f=!0,d.Uo(new Cr(e,s)),c.close()}else Ir(Mc,`RPC '${t}' stream ${i} received:`,s),d.Ko(s)}})),w(o,fr.STAT_EVENT,(n=>{n.stat===lr.PROXY?Ir(Mc,`RPC '${t}' stream ${i} detected buffering proxy`):n.stat===lr.NOPROXY&&Ir(Mc,`RPC '${t}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{d.$o()}),0),d}}function Lc(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(t){return new lu(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(t,n,e=1e3,i=1.5,s=6e4){this.Ti=t,this.timerId=n,this.Go=e,this.zo=i,this.jo=s,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const n=Math.floor(this.Ho+this.e_()),e=Math.max(0,Date.now()-this.Yo),i=Math.max(0,n-e);i>0&&Ir("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${e} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,i,(()=>(this.Yo=Date.now(),t()))),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){null!==this.Jo&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){null!==this.Jo&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jc="PersistentStream";class Vc{constructor(t,n,e,i,s,r,o,a){this.Ti=t,this.n_=e,this.r_=i,this.connection=s,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.Ri=0,this.a_=new Uc(t,n)}u_(){return 1===this.state||5===this.state||this.c_()}c_(){return 2===this.state||3===this.state}start(){this.Ri=0,4!==this.state?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&null===this.s_&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,(()=>this.T_())))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,4!==t?this.a_.reset():n&&n.code===kr.RESOURCE_EXHAUSTED?(Tr(n.toString()),Tr("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===kr.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,e])=>{this.i_===n&&this.V_(t,e)}),(n=>{t((()=>{const t=new Cr(kr.UNKNOWN,"Fetching auth token failed: "+n.message);return this.m_(t)}))}))}V_(t,n){const e=this.R_(this.i_);this.stream=this.f_(t,n),this.stream.xo((()=>{e((()=>this.listener.xo()))})),this.stream.No((()=>{e((()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,(()=>(this.c_()&&(this.state=3),Promise.resolve()))),this.listener.No())))})),this.stream.Lo((t=>{e((()=>this.m_(t)))})),this.stream.onMessage((t=>{e((()=>1==++this.Ri?this.g_(t):this.onNext(t)))}))}l_(){this.state=5,this.a_.Xo((async()=>{this.state=0,this.start()}))}m_(t){return Ir(jc,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return n=>{this.Ti.enqueueAndForget((()=>this.i_===t?n():(Ir(jc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class qc extends Vc{constructor(t,n,e,i,s,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,e,i,r),this.serializer=s}f_(t,n){return this.connection.Wo("Listen",t,n)}g_(t){return this.onNext(t)}onNext(t){this.a_.reset();const n=function(t,n){let e;if("targetChange"in n){n.targetChange;const s="NO_CHANGE"===(i=n.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===i?1:"REMOVE"===i?2:"CURRENT"===i?3:"RESET"===i?4:Sr(),r=n.targetChange.targetIds||[],o=function(t,n){return t.useProto3Json?(Nr(void 0===n||"string"==typeof n),No.fromBase64String(n||"")):(Nr(void 0===n||n instanceof Buffer||n instanceof Uint8Array),No.fromUint8Array(n||new Uint8Array))}(t,n.targetChange.resumeToken),a=n.targetChange.cause,h=a&&function(t){const n=void 0===t.code?kr.UNKNOWN:Wh(t.code);return new Cr(n,t.message||"")}(a);e=new iu(s,r,o,h||null)}else if("documentChange"in n){n.documentChange;const i=n.documentChange;i.document,i.document.name,i.document.updateTime;const s=Eu(t,i.document.name),r=mu(i.document.updateTime),o=i.document.createTime?mu(i.document.createTime):Xr.min(),a=new ha({mapValue:{fields:i.document.fields}}),h=ca.newFoundDocument(s,r,o,a),u=i.targetIds||[],c=i.removedTargetIds||[];e=new nu(u,c,h.key,h)}else if("documentDelete"in n){n.documentDelete;const i=n.documentDelete;i.document;const s=Eu(t,i.document),r=i.readTime?mu(i.readTime):Xr.min(),o=ca.newNoDocument(s,r),a=i.removedTargetIds||[];e=new nu([],a,o.key,o)}else if("documentRemove"in n){n.documentRemove;const i=n.documentRemove;i.document;const s=Eu(t,i.document),r=i.removedTargetIds||[];e=new nu([],r,s,null)}else{if(!("filter"in n))return Sr();{n.filter;const t=n.filter;t.targetId;const{count:i=0,unchangedNames:s}=t,r=new zh(i,s),o=t.targetId;e=new eu(o,r)}}var i;return e}(this.serializer,t),e=function(t){if(!("targetChange"in t))return Xr.min();const n=t.targetChange;return n.targetIds&&n.targetIds.length?Xr.min():n.readTime?mu(n.readTime):Xr.min()}(t);return this.listener.p_(n,e)}y_(t){const n={};n.database=Tu(this.serializer),n.addTarget=function(t,n){let e;const i=n.target;if(e=xa(i)?{documents:Su(t,i)}:{query:Nu(t,i).ht},e.targetId=n.targetId,n.resumeToken.approximateByteSize()>0){e.resumeToken=wu(t,n.resumeToken);const i=fu(t,n.expectedCount);null!==i&&(e.expectedCount=i)}else if(n.snapshotVersion.compareTo(Xr.min())>0){e.readTime=du(t,n.snapshotVersion.toTimestamp());const i=fu(t,n.expectedCount);null!==i&&(e.expectedCount=i)}return e}(this.serializer,t);const e=function(t,n){const e=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Sr()}}(n.purpose);return null==e?null:{"goog-listen-tags":e}}(this.serializer,t);e&&(n.labels=e),this.I_(n)}w_(t){const n={};n.database=Tu(this.serializer),n.removeTarget=t,this.I_(n)}}class Bc extends Vc{constructor(t,n,e,i,s,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,e,i,r),this.serializer=s}get S_(){return this.Ri>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(t,n){return this.connection.Wo("Write",t,n)}g_(t){return Nr(!!t.streamToken),this.lastStreamToken=t.streamToken,Nr(!t.writeResults||0===t.writeResults.length),this.listener.D_()}onNext(t){Nr(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const n=function(t,n){return t&&t.length>0?(Nr(void 0!==n),t.map((t=>function(t,n){let e=t.updateTime?mu(t.updateTime):mu(n);return e.isEqual(Xr.min())&&(e=mu(n)),new Ah(e,t.transformResults||[])}(t,n)))):[]}(t.writeResults,t.commitTime),e=mu(t.commitTime);return this.listener.v_(e,n)}C_(){const t={};t.database=Tu(this.serializer),this.I_(t)}b_(t){const n={streamToken:this.lastStreamToken,writes:t.map((t=>function(t,n){let e;if(n instanceof $h)e={update:Au(t,n.key,n.value)};else if(n instanceof Uh)e={delete:bu(t,n.key)};else if(n instanceof Mh)e={update:Au(t,n.key,n.data),updateMask:xu(n.fieldMask)};else{if(!(n instanceof jh))return Sr();e={verify:bu(t,n.key)}}return n.fieldTransforms.length>0&&(e.updateTransforms=n.fieldTransforms.map((t=>function(t,n){const e=n.transform;if(e instanceof mh)return{fieldPath:n.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(e instanceof vh)return{fieldPath:n.field.canonicalString(),appendMissingElements:{values:e.elements}};if(e instanceof yh)return{fieldPath:n.field.canonicalString(),removeAllFromArray:{values:e.elements}};if(e instanceof Eh)return{fieldPath:n.field.canonicalString(),increment:e.Ie};throw Sr()}(0,t)))),n.precondition.isNone||(e.currentDocument=(i=t,void 0!==(s=n.precondition).updateTime?{updateTime:pu(i,s.updateTime)}:void 0!==s.exists?{exists:s.exists}:Sr())),e;var i,s}(this.serializer,t)))};this.I_(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{}class Gc extends zc{constructor(t,n,e,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=e,this.serializer=i,this.F_=!1}M_(){if(this.F_)throw new Cr(kr.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,n,e,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,r])=>this.connection.So(t,gu(n,e),i,s,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===kr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Cr(kr.UNKNOWN,t.toString())}))}Co(t,n,e,i,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,o])=>this.connection.Co(t,gu(n,e),i,r,o,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===kr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Cr(kr.UNKNOWN,t.toString())}))}terminate(){this.F_=!0,this.connection.terminate()}}class Hc{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){0===this.x_&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve()))))}q_(t){"Online"===this.state?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,"Online"===t&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const n=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Tr(n),this.N_=!1):Ir("OnlineStateTracker",n)}Q_(){null!==this.O_&&(this.O_.cancel(),this.O_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc="RemoteStore";class Kc{constructor(t,n,e,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=e,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=s,this.z_.To((t=>{e.enqueueAndForget((async()=>{il(this)&&(Ir(Wc,"Restarting streams for network reachability change."),await async function(t){const n=Or(t);n.W_.add(4),await Qc(n),n.j_.set("Unknown"),n.W_.delete(4),await Jc(n)}(this))}))})),this.j_=new Hc(e,i)}}async function Jc(t){if(il(t))for(const n of t.G_)await n(!0)}async function Qc(t){for(const n of t.G_)await n(!1)}function Xc(t,n){const e=Or(t);e.K_.has(n.targetId)||(e.K_.set(n.targetId,n),el(e)?nl(e):El(e).c_()&&Zc(e,n))}function Yc(t,n){const e=Or(t),i=El(e);e.K_.delete(n),i.c_()&&tl(e,n),0===e.K_.size&&(i.c_()?i.P_():il(e)&&e.j_.set("Unknown"))}function Zc(t,n){if(t.H_.Ne(n.targetId),n.resumeToken.approximateByteSize()>0||n.snapshotVersion.compareTo(Xr.min())>0){const e=t.remoteSyncer.getRemoteKeysForTarget(n.targetId).size;n=n.withExpectedCount(e)}El(t).y_(n)}function tl(t,n){t.H_.Ne(n),El(t).w_(n)}function nl(t){t.H_=new ru({getRemoteKeysForTarget:n=>t.remoteSyncer.getRemoteKeysForTarget(n),lt:n=>t.K_.get(n)||null,it:()=>t.datastore.serializer.databaseId}),El(t).start(),t.j_.B_()}function el(t){return il(t)&&!El(t).u_()&&t.K_.size>0}function il(t){return 0===Or(t).W_.size}function sl(t){t.H_=void 0}async function rl(t){t.j_.set("Online")}async function ol(t){t.K_.forEach(((n,e)=>{Zc(t,n)}))}async function al(t,n){sl(t),el(t)?(t.j_.q_(n),nl(t)):t.j_.set("Unknown")}async function hl(t,n,e){if(t.j_.set("Online"),n instanceof iu&&2===n.state&&n.cause)try{await async function(t,n){const e=n.cause;for(const i of n.targetIds)t.K_.has(i)&&(await t.remoteSyncer.rejectListen(i,e),t.K_.delete(i),t.H_.removeTarget(i))}(t,n)}catch(i){Ir(Wc,"Failed to remove targets %s: %s ",n.targetIds.join(","),i),await ul(t,i)}else if(n instanceof nu?t.H_.We(n):n instanceof eu?t.H_.Ze(n):t.H_.je(n),!e.isEqual(Xr.min()))try{const n=await bc(t.localStore);e.compareTo(n)>=0&&await function(t,n){const e=t.H_.ot(n);return e.targetChanges.forEach(((e,i)=>{if(e.resumeToken.approximateByteSize()>0){const s=t.K_.get(i);s&&t.K_.set(i,s.withResumeToken(e.resumeToken,n))}})),e.targetMismatches.forEach(((n,e)=>{const i=t.K_.get(n);if(!i)return;t.K_.set(n,i.withResumeToken(No.EMPTY_BYTE_STRING,i.snapshotVersion)),tl(t,n);const s=new Fu(i.target,n,e,i.sequenceNumber);Zc(t,s)})),t.remoteSyncer.applyRemoteEvent(e)}(t,e)}catch(s){Ir(Wc,"Failed to raise snapshot:",s),await ul(t,s)}}async function ul(t,n,e){if(!co(n))throw n;t.W_.add(1),await Qc(t),t.j_.set("Offline"),e||(e=()=>bc(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Ir(Wc,"Retrying IndexedDB access"),await e(),t.W_.delete(1),await Jc(t)}))}function cl(t,n){return n().catch((e=>ul(t,e,n)))}async function ll(t){const n=Or(t),e=Il(n);let i=n.U_.length>0?n.U_[n.U_.length-1].batchId:-1;for(;fl(n);)try{const t=await Ec(n.localStore,i);if(null===t){0===n.U_.length&&e.P_();break}i=t.batchId,dl(n,t)}catch(s){await ul(n,s)}wl(n)&&pl(n)}function fl(t){return il(t)&&t.U_.length<10}function dl(t,n){t.U_.push(n);const e=Il(t);e.c_()&&e.S_&&e.b_(n.mutations)}function wl(t){return il(t)&&!Il(t).u_()&&t.U_.length>0}function pl(t){Il(t).start()}async function ml(t){Il(t).C_()}async function vl(t){const n=Il(t);for(const e of t.U_)n.b_(e.mutations)}async function gl(t,n,e){const i=t.U_.shift(),s=qh.from(i,n,e);await cl(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await ll(t)}async function yl(t,n){n&&Il(t).S_&&await async function(t,n){if(function(t){switch(t){case kr.OK:return Sr();case kr.CANCELLED:case kr.UNKNOWN:case kr.DEADLINE_EXCEEDED:case kr.RESOURCE_EXHAUSTED:case kr.INTERNAL:case kr.UNAVAILABLE:case kr.UNAUTHENTICATED:return!1;case kr.INVALID_ARGUMENT:case kr.NOT_FOUND:case kr.ALREADY_EXISTS:case kr.PERMISSION_DENIED:case kr.FAILED_PRECONDITION:case kr.ABORTED:case kr.OUT_OF_RANGE:case kr.UNIMPLEMENTED:case kr.DATA_LOSS:return!0;default:return Sr()}}(e=n.code)&&e!==kr.ABORTED){const e=t.U_.shift();Il(t).h_(),await cl(t,(()=>t.remoteSyncer.rejectFailedWrite(e.batchId,n))),await ll(t)}var e}(t,n),wl(t)&&pl(t)}async function bl(t,n){const e=Or(t);e.asyncQueue.verifyOperationInProgress(),Ir(Wc,"RemoteStore received new credentials");const i=il(e);e.W_.add(3),await Qc(e),i&&e.j_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(n),e.W_.delete(3),await Jc(e)}function El(t){return t.J_||(t.J_=function(t,n,e){const i=Or(t);return i.M_(),new qc(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,e)}(t.datastore,t.asyncQueue,{xo:rl.bind(null,t),No:ol.bind(null,t),Lo:al.bind(null,t),p_:hl.bind(null,t)}),t.G_.push((async n=>{n?(t.J_.h_(),el(t)?nl(t):t.j_.set("Unknown")):(await t.J_.stop(),sl(t))}))),t.J_}function Il(t){return t.Y_||(t.Y_=function(t,n,e){const i=Or(t);return i.M_(),new Bc(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,e)}(t.datastore,t.asyncQueue,{xo:()=>Promise.resolve(),No:ml.bind(null,t),Lo:yl.bind(null,t),D_:vl.bind(null,t),v_:gl.bind(null,t)}),t.G_.push((async n=>{n?(t.Y_.h_(),await ll(t)):(await t.Y_.stop(),t.U_.length>0&&(Ir(Wc,`Stopping write stream with ${t.U_.length} pending writes`),t.U_=[]))}))),t.Y_
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Tl{constructor(t,n,e,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=e,this.op=i,this.removalCallback=s,this.deferred=new Rr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,n,e,i,s){const r=Date.now()+e,o=new Tl(t,n,r,i,s);return o.start(e),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Cr(kr.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _l(t,n){if(Tr("AsyncQueue",`${n}: ${t}`),co(t))return new Cr(kr.UNAVAILABLE,`${n}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{static emptySet(t){return new Al(t.comparator)}constructor(t){this.comparator=t?(n,e)=>t(n,e)||io.comparator(n.key,e.key):(t,n)=>io.comparator(t.key,n.key),this.keyedMap=nh(),this.sortedSet=new bo(this.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((n,e)=>(t(n),!1)))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Al))return!1;if(this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),e=t.sortedSet.getIterator();for(;n.hasNext();){const t=n.getNext().key,i=e.getNext().key;if(!t.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((n=>{t.push(n.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,n){const e=new Al;return e.comparator=this.comparator,e.keyedMap=t,e.sortedSet=n,e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(){this.Z_=new bo(io.comparator)}track(t){const n=t.doc.key,e=this.Z_.get(n);e?0!==t.type&&3===e.type?this.Z_=this.Z_.insert(n,t):3===t.type&&1!==e.type?this.Z_=this.Z_.insert(n,{type:e.type,doc:t.doc}):2===t.type&&2===e.type?this.Z_=this.Z_.insert(n,{type:2,doc:t.doc}):2===t.type&&0===e.type?this.Z_=this.Z_.insert(n,{type:0,doc:t.doc}):1===t.type&&0===e.type?this.Z_=this.Z_.remove(n):1===t.type&&2===e.type?this.Z_=this.Z_.insert(n,{type:1,doc:e.doc}):0===t.type&&1===e.type?this.Z_=this.Z_.insert(n,{type:2,doc:t.doc}):Sr():this.Z_=this.Z_.insert(n,t)}X_(){const t=[];return this.Z_.inorderTraversal(((n,e)=>{t.push(e)})),t}}class Nl{constructor(t,n,e,i,s,r,o,a,h){this.query=t,this.docs=n,this.oldDocs=e,this.docChanges=i,this.mutatedKeys=s,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=h}static fromInitialDocuments(t,n,e,i,s){const r=[];return n.forEach((t=>{r.push({type:0,doc:t})})),new Nl(t,n,Al.emptySet(n),r,e,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ga(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,e=t.docChanges;if(n.length!==e.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==e[i].type||!n[i].doc.isEqual(e[i].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some((t=>t.ra()))}}class kl{constructor(){this.queries=Cl(),this.onlineState="Unknown",this.ia=new Set}terminate(){!function(t,n){const e=Or(t),i=e.queries;e.queries=Cl(),i.forEach(((t,e)=>{for(const i of e.ta)i.onError(n)}))}(this,new Cr(kr.ABORTED,"Firestore shutting down"))}}function Cl(){return new Xa((t=>Ha(t)),Ga)}async function Rl(t,n){const e=Or(t);let i=3;const s=n.query;let r=e.queries.get(s);r?!r.na()&&n.ra()&&(i=2):(r=new Ol,i=n.ra()?0:1);try{switch(i){case 0:r.ea=await e.onListen(s,!0);break;case 1:r.ea=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(o){const t=_l(o,`Initialization of query '${Wa(n.query)}' failed`);return void n.onError(t)}e.queries.set(s,r),r.ta.push(n),n.sa(e.onlineState),r.ea&&n.oa(r.ea)&&Ml(e)}async function Dl(t,n){const e=Or(t),i=n.query;let s=3;const r=e.queries.get(i);if(r){const t=r.ta.indexOf(n);t>=0&&(r.ta.splice(t,1),0===r.ta.length?s=n.ra()?0:1:!r.na()&&n.ra()&&(s=2))}switch(s){case 0:return e.queries.delete(i),e.onUnlisten(i,!0);case 1:return e.queries.delete(i),e.onUnlisten(i,!1);case 2:return e.onLastRemoteStoreUnlisten(i);default:return}}function Pl(t,n){const e=Or(t);let i=!1;for(const s of n){const t=s.query,n=e.queries.get(t);if(n){for(const t of n.ta)t.oa(s)&&(i=!0);n.ea=s}}i&&Ml(e)}function $l(t,n,e){const i=Or(t),s=i.queries.get(n);if(s)for(const r of s.ta)r.onError(e);i.queries.delete(n)}function Ml(t){t.ia.forEach((t=>{t.next()}))}var xl,Ll;(Ll=xl||(xl={})).Di="default",Ll.Cache="cache";class Fl{constructor(t,n,e){this.query=t,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=e||{}}oa(t){if(!this.options.includeMetadataChanges){const n=[];for(const e of t.docChanges)3!==e.type&&n.push(e);t=new Nl(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.ua?this.la(t)&&(this.aa.next(t),n=!0):this.ha(t,this.onlineState)&&(this.Pa(t),n=!0),this.ca=t,n}onError(t){this.aa.error(t)}sa(t){this.onlineState=t;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,t)&&(this.Pa(this.ca),n=!0),n}ha(t,n){if(!t.fromCache)return!0;if(!this.ra())return!0;const e="Offline"!==n;return(!this.options.Ta||!e)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===n)}la(t){if(t.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&!0===this.options.includeMetadataChanges}Pa(t){t=Nl.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ua=!0,this.aa.next(t)}ra(){return this.options.source!==xl.Cache}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(t){this.key=t}}class jl{constructor(t){this.key=t}}class Vl{constructor(t,n){this.query=t,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=hh(),this.mutatedKeys=hh(),this.ya=Ja(t),this.wa=new Al(this.ya)}get Sa(){return this.fa}ba(t,n){const e=n?n.Da:new Sl,i=n?n.wa:this.wa;let s=n?n.mutatedKeys:this.mutatedKeys,r=i,o=!1;const a="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,h="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((t,n)=>{const u=i.get(t),c=Ka(this.query,n)?n:null,l=!!u&&this.mutatedKeys.has(u.key),f=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations);let d=!1;u&&c?u.data.isEqual(c.data)?l!==f&&(e.track({type:3,doc:c}),d=!0):this.va(u,c)||(e.track({type:2,doc:c}),d=!0,(a&&this.ya(c,a)>0||h&&this.ya(c,h)<0)&&(o=!0)):!u&&c?(e.track({type:0,doc:c}),d=!0):u&&!c&&(e.track({type:1,doc:u}),d=!0,(a||h)&&(o=!0)),d&&(c?(r=r.add(c),s=f?s.add(t):s.delete(t)):(r=r.delete(t),s=s.delete(t)))})),null!==this.query.limit)for(;r.size>this.query.limit;){const t="F"===this.query.limitType?r.last():r.first();r=r.delete(t.key),s=s.delete(t.key),e.track({type:1,doc:t})}return{wa:r,Da:e,ls:o,mutatedKeys:s}}va(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,e,i){const s=this.wa;this.wa=t.wa,this.mutatedKeys=t.mutatedKeys;const r=t.Da.X_();r.sort(((t,n)=>function(t,n){const e=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Sr()}};return e(t)-e(n)}(t.type,n.type)||this.ya(t.doc,n.doc))),this.Ca(e),i=null!=i&&i;const o=n&&!i?this.Fa():[],a=0===this.pa.size&&this.current&&!i?1:0,h=a!==this.ga;return this.ga=a,0!==r.length||h?{snapshot:new Nl(this.query,t.wa,s,r,t.mutatedKeys,0===a,h,!1,!!e&&e.resumeToken.approximateByteSize()>0),Ma:o}:{Ma:o}}sa(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({wa:this.wa,Da:new Sl,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(t){return!this.fa.has(t)&&!!this.wa.has(t)&&!this.wa.get(t).hasLocalMutations}Ca(t){t&&(t.addedDocuments.forEach((t=>this.fa=this.fa.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.fa=this.fa.delete(t))),this.current=t.current)}Fa(){if(!this.current)return[];const t=this.pa;this.pa=hh(),this.wa.forEach((t=>{this.xa(t.key)&&(this.pa=this.pa.add(t.key))}));const n=[];return t.forEach((t=>{this.pa.has(t)||n.push(new jl(t))})),this.pa.forEach((e=>{t.has(e)||n.push(new Ul(e))})),n}Oa(t){this.fa=t.gs,this.pa=hh();const n=this.ba(t.documents);return this.applyChanges(n,!0)}Na(){return Nl.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,0===this.ga,this.hasCachedResults)}}const ql="SyncEngine";class Bl{constructor(t,n,e){this.query=t,this.targetId=n,this.view=e}}class zl{constructor(t){this.key=t,this.Ba=!1}}class Gl{constructor(t,n,e,i,s,r){this.localStore=t,this.remoteStore=n,this.eventManager=e,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=r,this.La={},this.ka=new Xa((t=>Ha(t)),Ga),this.qa=new Map,this.Qa=new Set,this.$a=new bo(io.comparator),this.Ua=new Map,this.Ka=new sc,this.Wa={},this.Ga=new Map,this.za=Hu.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return!0===this.ja}}async function Hl(t,n,e=!0){const i=wf(t);let s;const r=i.ka.get(n);return r?(i.sharedClientState.addLocalQueryTarget(r.targetId),s=r.view.Na()):s=await Kl(i,n,e,!0),s}async function Wl(t,n){const e=wf(t);await Kl(e,n,!0,!1)}async function Kl(t,n,e,i){const s=await function(t,n){const e=Or(t);return e.persistence.runTransaction("Allocate target","readwrite",(t=>{let i;return e.Hr.getTargetData(t,n).next((s=>s?(i=s,uo.resolve(i)):e.Hr.allocateTargetId(t).next((s=>(i=new Fu(n,s,"TargetPurposeListen",t.currentSequenceNumber),e.Hr.addTargetData(t,i).next((()=>i)))))))})).then((t=>{const i=e.Ts.get(t.targetId);return(null===i||t.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.Ts=e.Ts.insert(t.targetId,t),e.Is.set(n,t.targetId)),t}))}(t.localStore,qa(n)),r=s.targetId,o=t.sharedClientState.addLocalQueryTarget(r,e);let a;return i&&(a=await async function(t,n,e,i,s){t.Ha=(n,e,i)=>async function(t,n,e,i){let s=n.view.ba(e);s.ls&&(s=await Tc(t.localStore,n.query,!1).then((({documents:t})=>n.view.ba(t,s))));const r=i&&i.targetChanges.get(n.targetId),o=i&&null!=i.targetMismatches.get(n.targetId),a=n.view.applyChanges(s,t.isPrimaryClient,r,o);return hf(t,n.targetId,a.Ma),a.snapshot}(t,n,e,i);const r=await Tc(t.localStore,n,!0),o=new Vl(n,r.gs),a=o.ba(r.documents),h=tu.createSynthesizedTargetChangeForCurrentChange(e,i&&"Offline"!==t.onlineState,s),u=o.applyChanges(a,t.isPrimaryClient,h);hf(t,e,u.Ma);const c=new Bl(n,e,o);return t.ka.set(n,c),t.qa.has(e)?t.qa.get(e).push(n):t.qa.set(e,[n]),u.snapshot}(t,n,r,"current"===o,s.resumeToken)),t.isPrimaryClient&&e&&Xc(t.remoteStore,s),a}async function Jl(t,n,e){const i=Or(t),s=i.ka.get(n),r=i.qa.get(s.targetId);if(r.length>1)return i.qa.set(s.targetId,r.filter((t=>!Ga(t,n)))),void i.ka.delete(n);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await Ic(i.localStore,s.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(s.targetId),e&&Yc(i.remoteStore,s.targetId),of(i,s.targetId)})).catch(ho)):(of(i,s.targetId),await Ic(i.localStore,s.targetId,!0))}async function Ql(t,n){const e=Or(t),i=e.ka.get(n),s=e.qa.get(i.targetId);e.isPrimaryClient&&1===s.length&&(e.sharedClientState.removeLocalQueryTarget(i.targetId),Yc(e.remoteStore,i.targetId))}async function Xl(t,n,e){const i=function(t){const n=Or(t);return n.remoteStore.remoteSyncer.applySuccessfulWrite=nf.bind(null,n),n.remoteStore.remoteSyncer.rejectFailedWrite=ef.bind(null,n),n}(t);try{const t=await function(t,n){const e=Or(t),i=Qr.now(),s=n.reduce(((t,n)=>t.add(n.key)),hh());let r,o;return e.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=Za(),h=hh();return e.ds.getEntries(t,s).next((t=>{a=t,a.forEach(((t,n)=>{n.isValidDocument()||(h=h.add(t))}))})).next((()=>e.localDocuments.getOverlayedDocuments(t,a))).next((s=>{r=s;const o=[];for(const t of n){const n=Dh(t,r.get(t.key).overlayedDocument);null!=n&&o.push(new Mh(t.key,n,ua(n.value.mapValue),Sh.exists(!0)))}return e.mutationQueue.addMutationBatch(t,i,o,n)})).next((n=>{o=n;const i=n.applyToLocalDocumentSet(r,h);return e.documentOverlayCache.saveOverlays(t,n.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:eh(r)})))}(i.localStore,n);i.sharedClientState.addPendingMutation(t.batchId),function(t,n,e){let i=t.Wa[t.currentUser.toKey()];i||(i=new bo(Br)),i=i.insert(n,e),t.Wa[t.currentUser.toKey()]=i}(i,t.batchId,e),await lf(i,t.changes),await ll(i.remoteStore)}catch(s){const t=_l(s,"Failed to persist write");e.reject(t)}}async function Yl(t,n){const e=Or(t);try{const t=await function(t,n){const e=Or(t),i=n.snapshotVersion;let s=e.Ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=e.ds.newChangeBuffer({trackRemovals:!0});s=e.Ts;const o=[];n.targetChanges.forEach(((r,a)=>{const h=s.get(a);if(!h)return;o.push(e.Hr.removeMatchingKeys(t,r.removedDocuments,a).next((()=>e.Hr.addMatchingKeys(t,r.addedDocuments,a))));let u=h.withSequenceNumber(t.currentSequenceNumber);var c,l,f;null!==n.targetMismatches.get(a)?u=u.withResumeToken(No.EMPTY_BYTE_STRING,Xr.min()).withLastLimboFreeSnapshotVersion(Xr.min()):r.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(r.resumeToken,i)),s=s.insert(a,u),l=u,f=r,(0===(c=h).resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-c.snapshotVersion.toMicroseconds()>=3e8||f.addedDocuments.size+f.modifiedDocuments.size+f.removedDocuments.size>0)&&o.push(e.Hr.updateTargetData(t,u))}));let a=Za(),h=hh();if(n.documentUpdates.forEach((i=>{n.resolvedLimboDocuments.has(i)&&o.push(e.persistence.referenceDelegate.updateLimboDocument(t,i))})),o.push(function(t,n,e){let i=hh(),s=hh();return e.forEach((t=>i=i.add(t))),n.getEntries(t,i).next((t=>{let i=Za();return e.forEach(((e,r)=>{const o=t.get(e);r.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(e)),r.isNoDocument()&&r.version.isEqual(Xr.min())?(n.removeEntry(e,r.readTime),i=i.insert(e,r)):!o.isValidDocument()||r.version.compareTo(o.version)>0||0===r.version.compareTo(o.version)&&o.hasPendingWrites?(n.addEntry(r),i=i.insert(e,r)):Ir(vc,"Ignoring outdated watch update for ",e,". Current version:",o.version," Watch version:",r.version)})),{Vs:i,fs:s}}))}(t,r,n.documentUpdates).next((t=>{a=t.Vs,h=t.fs}))),!i.isEqual(Xr.min())){const n=e.Hr.getLastRemoteSnapshotVersion(t).next((n=>e.Hr.setTargetsMetadata(t,t.currentSequenceNumber,i)));o.push(n)}return uo.waitFor(o).next((()=>r.apply(t))).next((()=>e.localDocuments.getLocalViewOfDocuments(t,a,h))).next((()=>a))})).then((t=>(e.Ts=s,t)))}(e.localStore,n);n.targetChanges.forEach(((t,n)=>{const i=e.Ua.get(n);i&&(Nr(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?i.Ba=!0:t.modifiedDocuments.size>0?Nr(i.Ba):t.removedDocuments.size>0&&(Nr(i.Ba),i.Ba=!1))})),await lf(e,t,n)}catch(i){await ho(i)}}function Zl(t,n,e){const i=Or(t);if(i.isPrimaryClient&&0===e||!i.isPrimaryClient&&1===e){const t=[];i.ka.forEach(((e,i)=>{const s=i.view.sa(n);s.snapshot&&t.push(s.snapshot)})),function(t,n){const e=Or(t);e.onlineState=n;let i=!1;e.queries.forEach(((t,e)=>{for(const s of e.ta)s.sa(n)&&(i=!0)})),i&&Ml(e)}(i.eventManager,n),t.length&&i.La.p_(t),i.onlineState=n,i.isPrimaryClient&&i.sharedClientState.setOnlineState(n)}}async function tf(t,n,e){const i=Or(t);i.sharedClientState.updateQueryState(n,"rejected",e);const s=i.Ua.get(n),r=s&&s.key;if(r){let t=new bo(io.comparator);t=t.insert(r,ca.newNoDocument(r,Xr.min()));const e=hh().add(r),s=new Zh(Xr.min(),new Map,new bo(Br),t,e);await Yl(i,s),i.$a=i.$a.remove(r),i.Ua.delete(n),cf(i)}else await Ic(i.localStore,n,!1).then((()=>of(i,n,e))).catch(ho)}async function nf(t,n){const e=Or(t),i=n.batch.batchId;try{const t=await function(t,n){const e=Or(t);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const i=n.batch.keys(),s=e.ds.newChangeBuffer({trackRemovals:!0});return function(t,n,e,i){const s=e.batch,r=s.keys();let o=uo.resolve();return r.forEach((t=>{o=o.next((()=>i.getEntry(n,t))).next((n=>{const r=e.docVersions.get(t);Nr(null!==r),n.version.compareTo(r)<0&&(s.applyToRemoteDocument(n,e),n.isValidDocument()&&(n.setReadTime(e.commitVersion),i.addEntry(n)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(n,s)))}(e,t,n,s).next((()=>s.apply(t))).next((()=>e.mutationQueue.performConsistencyCheck(t))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(t,i,n.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let n=hh();for(let e=0;e<t.mutationResults.length;++e)t.mutationResults[e].transformResults.length>0&&(n=n.add(t.batch.mutations[e].key));return n}(n)))).next((()=>e.localDocuments.getDocuments(t,i)))}))}(e.localStore,n);rf(e,i,null),sf(e,i),e.sharedClientState.updateMutationState(i,"acknowledged"),await lf(e,t)}catch(s){await ho(s)}}async function ef(t,n,e){const i=Or(t);try{const t=await function(t,n){const e=Or(t);return e.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let i;return e.mutationQueue.lookupMutationBatch(t,n).next((n=>(Nr(null!==n),i=n.keys(),e.mutationQueue.removeMutationBatch(t,n)))).next((()=>e.mutationQueue.performConsistencyCheck(t))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(t,i,n))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,i))).next((()=>e.localDocuments.getDocuments(t,i)))}))}(i.localStore,n);rf(i,n,e),sf(i,n),i.sharedClientState.updateMutationState(n,"rejected",e),await lf(i,t)}catch(s){await ho(s)}}function sf(t,n){(t.Ga.get(n)||[]).forEach((t=>{t.resolve()})),t.Ga.delete(n)}function rf(t,n,e){const i=Or(t);let s=i.Wa[i.currentUser.toKey()];if(s){const t=s.get(n);t&&(e?t.reject(e):t.resolve(),s=s.remove(n)),i.Wa[i.currentUser.toKey()]=s}}function of(t,n,e=null){t.sharedClientState.removeLocalQueryTarget(n);for(const i of t.qa.get(n))t.ka.delete(i),e&&t.La.Ja(i,e);t.qa.delete(n),t.isPrimaryClient&&t.Ka.br(n).forEach((n=>{t.Ka.containsKey(n)||af(t,n)}))}function af(t,n){t.Qa.delete(n.path.canonicalString());const e=t.$a.get(n);null!==e&&(Yc(t.remoteStore,e),t.$a=t.$a.remove(n),t.Ua.delete(e),cf(t))}function hf(t,n,e){for(const i of e)i instanceof Ul?(t.Ka.addReference(i.key,n),uf(t,i)):i instanceof jl?(Ir(ql,"Document no longer in limbo: "+i.key),t.Ka.removeReference(i.key,n),t.Ka.containsKey(i.key)||af(t,i.key)):Sr()}function uf(t,n){const e=n.key,i=e.path.canonicalString();t.$a.get(e)||t.Qa.has(i)||(Ir(ql,"New document in limbo: "+e),t.Qa.add(i),cf(t))}function cf(t){for(;t.Qa.size>0&&t.$a.size<t.maxConcurrentLimboResolutions;){const n=t.Qa.values().next().value;t.Qa.delete(n);const e=new io(to.fromString(n)),i=t.za.next();t.Ua.set(i,new zl(e)),t.$a=t.$a.insert(e,i),Xc(t.remoteStore,new Fu(qa(Fa(e.path)),i,"TargetPurposeLimboResolution",lo.ae))}}async function lf(t,n,e){const i=Or(t),s=[],r=[],o=[];i.ka.isEmpty()||(i.ka.forEach(((t,a)=>{o.push(i.Ha(a,n,e).then((t=>{var n;if((t||e)&&i.isPrimaryClient){const s=t?!t.fromCache:null===(n=null==e?void 0:e.targetChanges.get(a.targetId))||void 0===n?void 0:n.current;i.sharedClientState.updateQueryState(a.targetId,s?"current":"not-current")}if(t){s.push(t);const n=wc.Yi(a.targetId,t);r.push(n)}})))})),await Promise.all(o),i.La.p_(s),await async function(t,n){const e=Or(t);try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>uo.forEach(n,(n=>uo.forEach(n.Hi,(i=>e.persistence.referenceDelegate.addReference(t,n.targetId,i))).next((()=>uo.forEach(n.Ji,(i=>e.persistence.referenceDelegate.removeReference(t,n.targetId,i)))))))))}catch(i){if(!co(i))throw i;Ir(vc,"Failed to update sequence numbers: "+i)}for(const s of n){const t=s.targetId;if(!s.fromCache){const n=e.Ts.get(t),i=n.snapshotVersion,s=n.withLastLimboFreeSnapshotVersion(i);e.Ts=e.Ts.insert(t,s)}}}(i.localStore,r))}async function ff(t,n){const e=Or(t);if(!e.currentUser.isEqual(n)){Ir(ql,"User change. New user:",n.toKey());const t=await yc(e.localStore,n);e.currentUser=n,(i=e).Ga.forEach((t=>{t.forEach((t=>{t.reject(new Cr(kr.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),i.Ga.clear(),e.sharedClientState.handleUserChange(n,t.removedBatchIds,t.addedBatchIds),await lf(e,t.Rs)}var i}function df(t,n){const e=Or(t),i=e.Ua.get(n);if(i&&i.Ba)return hh().add(i.key);{let t=hh();const i=e.qa.get(n);if(!i)return t;for(const n of i){const i=e.ka.get(n);t=t.unionWith(i.view.Sa)}return t}}function wf(t){const n=Or(t);return n.remoteStore.remoteSyncer.applyRemoteEvent=Yl.bind(null,n),n.remoteStore.remoteSyncer.getRemoteKeysForTarget=df.bind(null,n),n.remoteStore.remoteSyncer.rejectListen=tf.bind(null,n),n.La.p_=Pl.bind(null,n.eventManager),n.La.Ja=$l.bind(null,n.eventManager),n}class pf{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Fc(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,n){return null}nu(t,n){return null}eu(t){return function(t,n,e,i){return new gc(t,n,e,i)}(this.persistence,new mc,t.initialUser,this.serializer)}Xa(t){return new cc(fc.ri,this.serializer)}Za(t){return new Ac}async terminate(){var t,n;null===(t=this.gcScheduler)||void 0===t||t.stop(),null===(n=this.indexBackfillerScheduler)||void 0===n||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}pf.provider={build:()=>new pf};class mf extends pf{constructor(t){super(),this.cacheSizeBytes=t}tu(t,n){Nr(this.persistence.referenceDelegate instanceof dc);const e=this.persistence.referenceDelegate.garbageCollector;return new Qu(e,t.asyncQueue,n)}Xa(t){const n=void 0!==this.cacheSizeBytes?Gu.withCacheSize(this.cacheSizeBytes):Gu.DEFAULT;return new cc((t=>dc.ri(t,n)),this.serializer)}}class vf{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Zl(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=ff.bind(null,this.syncEngine),await async function(t,n){const e=Or(t);n?(e.W_.delete(2),await Jc(e)):n||(e.W_.add(2),await Qc(e),e.j_.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new kl}createDatastore(t){const n=Fc(t.databaseInfo.databaseId),e=(i=t.databaseInfo,new xc(i));var i;return function(t,n,e,i){return new Gc(t,n,e,i)}(t.authCredentials,t.appCheckCredentials,e,n)}createRemoteStore(t){return n=this.localStore,e=this.datastore,i=t.asyncQueue,s=t=>Zl(this.syncEngine,t,0),r=Oc.D()?new Oc:new Sc,new Kc(n,e,i,s,r);var n,e,i,s,r}createSyncEngine(t,n){return function(t,n,e,i,s,r,o){const a=new Gl(t,n,e,i,s,r);return o&&(a.ja=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await async function(t){const n=Or(t);Ir(Wc,"RemoteStore shutting down."),n.W_.add(5),await Qc(n),n.z_.shutdown(),n.j_.set("Unknown")}(this.remoteStore),null===(t=this.datastore)||void 0===t||t.terminate(),null===(n=this.eventManager)||void 0===n||n.terminate()}}vf.provider={build:()=>new vf};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gf{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.iu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.iu(this.observer.error,t):Tr("Uncaught Error in snapshot listener:",t.toString()))}su(){this.muted=!0}iu(t,n){setTimeout((()=>{this.muted||t(n)}),0)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf="FirestoreClient";class bf{constructor(t,n,e,i,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=e,this.databaseInfo=i,this.user=gr.UNAUTHENTICATED,this.clientId=qr.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.Pi=s,this.authCredentials.start(e,(async t=>{Ir(yf,"Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(e,(t=>(Ir(yf,"Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Rr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.$i&&await this.$i.terminate(),this.Mi&&await this.Mi.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const e=_l(n,"Failed to shutdown persistence");t.reject(e)}})),t.promise}}async function Ef(t,n){t.asyncQueue.verifyOperationInProgress(),Ir(yf,"Initializing OfflineComponentProvider");const e=t.configuration;await n.initialize(e);let i=e.initialUser;t.setCredentialChangeListener((async t=>{i.isEqual(t)||(await yc(n.localStore,t),i=t)})),n.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.Mi=n}async function If(t,n){t.asyncQueue.verifyOperationInProgress();const e=await async function(t){if(!t.Mi)if(t.Pi){Ir(yf,"Using user provided OfflineComponentProvider");try{await Ef(t,t.Pi.xi)}catch(n){const s=n;if(!("FirebaseError"===(e=s).name?e.code===kr.FAILED_PRECONDITION||e.code===kr.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code))throw s;_r("Error using user provided cache. Falling back to memory cache: "+s),await Ef(t,new pf)}}else Ir(yf,"Using default OfflineComponentProvider"),await Ef(t,new mf(void 0));var e;return t.Mi}(t);Ir(yf,"Initializing OnlineComponentProvider"),await n.initialize(e,t.configuration),t.setCredentialChangeListener((t=>bl(n.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,e)=>bl(n.remoteStore,e))),t.$i=n}async function Tf(t){return t.$i||(t.Pi?(Ir(yf,"Using user provided OnlineComponentProvider"),await If(t,t.Pi.Li)):(Ir(yf,"Using default OnlineComponentProvider"),await If(t,new vf))),t.$i}async function _f(t){const n=await Tf(t),e=n.eventManager;return e.onListen=Hl.bind(null,n.syncEngine),e.onUnlisten=Jl.bind(null,n.syncEngine),e.onFirstRemoteStoreListen=Wl.bind(null,n.syncEngine),e.onLastRemoteStoreUnlisten=Ql.bind(null,n.syncEngine),e}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Af(t){const n={};return void 0!==t.timeoutSeconds&&(n.timeoutSeconds=t.timeoutSeconds),n
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Sf=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(t,n,e){if(!e)throw new Cr(kr.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${n}.`)}function Of(t){if(!io.isDocumentKey(t))throw new Cr(kr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function kf(t){if(io.isDocumentKey(t))throw new Cr(kr.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Cf(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=(n=t).constructor?n.constructor.name:null;return e?`a custom ${e} object`:"an object"}}var n;return"function"==typeof t?"a function":Sr()}function Rf(t,n){if("_"in t&&(t=t._),!(t instanceof n)){if(n.name===t.constructor.name)throw new Cr(kr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Cf(t);throw new Cr(kr.INVALID_ARGUMENT,`Expected type '${n.name}', but it was: ${e}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df="firestore.googleapis.com",Pf=!0;class $f{constructor(t){var n,e;if(void 0===t.host){if(void 0!==t.ssl)throw new Cr(kr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Df,this.ssl=Pf}else this.host=t.host,this.ssl=null!==(n=t.ssl)&&void 0!==n?n:Pf;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=zu;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Cr(kr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,n,e,i){if(!0===n&&!0===i)throw new Cr(kr.INVALID_ARGUMENT,"experimentalForceLongPolling and experimentalAutoDetectLongPolling cannot be used together.")})(0,t.experimentalForceLongPolling,0,t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Af(null!==(e=t.experimentalLongPollingOptions)&&void 0!==e?e:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new Cr(kr.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new Cr(kr.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new Cr(kr.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,e=t.experimentalLongPollingOptions,n.timeoutSeconds===e.timeoutSeconds)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams;var n,e}}class Mf{constructor(t,n,e,i){this.Fi=t,this.Ui=n,this.ji=e,this.Vi=i,this.type="firestore-lite",this.qi="(lite)",this.Bi=new $f({}),this.zi=!1,this.Gi={},this.Wi="notTerminated"}get app(){if(!this.Vi)throw new Cr(kr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this.Vi}get Ki(){return this.zi}get Qi(){return"notTerminated"!==this.Wi}ws(t){if(this.zi)throw new Cr(kr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this.Bi=new $f(t),this.Gi=t.emulatorOptions||{},void 0!==t.credentials&&(this.Fi=function(t){if(!t)return new Pr;switch(t.type){case"firstParty":return new Lr(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Cr(kr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}ps(){return this.Bi}ys(){return this.Gi}_s(){return this.zi=!0,this.Bi}k(){return"notTerminated"===this.Wi&&(this.Wi=this.Ss()),this.Wi}async Ns(){"notTerminated"===this.Wi?await this.Ss():this.Wi="notTerminated"}toJSON(){return{app:this.Vi,databaseId:this.ji,settings:this.Bi}}Ss(){return function(t){const n=Sf.get(t);n&&(Ir("ComponentProvider","Removing Datastore"),Sf.delete(t),n.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xf{constructor(t,n,e){this.converter=n,this.Os=e,this.type="query",this.firestore=t}withConverter(t){return new xf(this.firestore,t,this.Os)}}class Lf{constructor(t,n,e){this.converter=n,this.Pn=e,this.type="document",this.firestore=t}get ks(){return this.Pn.path}get id(){return this.Pn.path.lastSegment()}get path(){return this.Pn.path.canonicalString()}get parent(){return new Ff(this.firestore,this.converter,this.Pn.path.popLast())}withConverter(t){return new Lf(this.firestore,t,this.Pn)}}class Ff extends xf{constructor(t,n,e){super(t,n,Fa(e)),this.ks=e,this.type="collection"}get id(){return this.Os.path.lastSegment()}get path(){return this.Os.path.canonicalString()}get parent(){const t=this.ks.popLast();return t.isEmpty()?null:new Lf(this.firestore,null,new io(t))}withConverter(t){return new Ff(this.firestore,t,this.ks)}}function Uf(t,n,...e){if(t=S(t),Nf("collection","path",n),t instanceof Mf){const i=to.fromString(n,...e);return kf(i),new Ff(t,null,i)}{if(!(t instanceof Lf||t instanceof Ff))throw new Cr(kr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t.ks.child(to.fromString(n,...e));return kf(i),new Ff(t.firestore,null,i)}}function jf(t,n,...e){if(t=S(t),1===arguments.length&&(n=qr.newId()),Nf("doc","path",n),t instanceof Mf){const i=to.fromString(n,...e);return Of(i),new Lf(t,null,new io(i))}{if(!(t instanceof Lf||t instanceof Ff))throw new Cr(kr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t.ks.child(to.fromString(n,...e));return Of(i),new Lf(t.firestore,t instanceof Ff?t.converter:null,new io(i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf="AsyncQueue";class qf{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Uc(this,"async_queue_retry"),this.Su=()=>{const t=Lc();t&&Ir(Vf,"Visibility state changed to "+t.visibilityState),this.a_.t_()},this.bu=t;const n=Lc();n&&"function"==typeof n.addEventListener&&n.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const n=Lc();n&&"function"==typeof n.removeEventListener&&n.removeEventListener("visibilitychange",this.Su)}}enqueue(t){if(this.Du(),this.mu)return new Promise((()=>{}));const n=new Rr;return this.vu((()=>this.mu&&this.yu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Vu.push(t),this.Cu())))}async Cu(){if(0!==this.Vu.length){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!co(t))throw t;Ir(Vf,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo((()=>this.Cu()))}}vu(t){const n=this.bu.then((()=>(this.pu=!0,t().catch((t=>{throw this.gu=t,this.pu=!1,Tr("INTERNAL UNHANDLED ERROR: ",function(t){let n=t.message||"";return t.stack&&(n=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),n}(t)),t})).then((t=>(this.pu=!1,t))))));return this.bu=n,n}enqueueAfterDelay(t,n,e){this.Du(),this.wu.indexOf(t)>-1&&(n=0);const i=Tl.createAndSchedule(this,t,n,e,(t=>this.Fu(t)));return this.fu.push(i),i}Du(){this.gu&&Sr()}verifyOperationInProgress(){}async Mu(){let t;do{t=this.bu,await t}while(t!==this.bu)}xu(t){for(const n of this.fu)if(n.timerId===t)return!0;return!1}Ou(t){return this.Mu().then((()=>{this.fu.sort(((t,n)=>t.targetTimeMs-n.targetTimeMs));for(const n of this.fu)if(n.skipDelay(),"all"!==t&&n.timerId===t)break;return this.Mu()}))}Nu(t){this.wu.push(t)}Fu(t){const n=this.fu.indexOf(t);this.fu.splice(n,1)}}class Bf extends Mf{constructor(t,n,e,i){super(t,n,e,i),this.type="firestore",this.Cs=new qf,this.qi=(null==i?void 0:i.name)||"[DEFAULT]"}async Ss(){if(this.$s){const t=this.$s.terminate();this.Cs=new qf(t),this.$s=void 0,await t}}}function zf(t,n){const e="object"==typeof t?t:zt(),i="string"==typeof t?t:jo,r=Ft(e,"firestore").getImmediate({identifier:i});if(!r.Ki){const t=(()=>{const t=a("firestore");if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const e=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),e]:[t.substring(0,n),e]})();t&&function(t,n,e,i={}){var r;const o=(t=Rf(t,Mf)).ps(),a=Object.assign(Object.assign({},o),{emulatorOptions:t.ys()}),h=`${n}:${e}`;o.host!==Df&&o.host!==h&&_r("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:h,ssl:!1,emulatorOptions:i});if(!g(u,a)&&(t.ws(u),i.mockUserToken)){let n,e;if("string"==typeof i.mockUserToken)n=i.mockUserToken,e=gr.MOCK_USER;else{n=function(t,n){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e=n||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${e}`,aud:e,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[s(JSON.stringify({alg:"none",type:"JWT"})),s(JSON.stringify(o)),""].join(".")}(i.mockUserToken,null===(r=t.Vi)||void 0===r?void 0:r.options.projectId);const o=i.mockUserToken.sub||i.mockUserToken.user_id;if(!o)throw new Cr(kr.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");e=new gr(o)}t.Fi=new $r(new Dr(n,e))}}(r,...t)}return r}function Gf(t){if(t.Qi)throw new Cr(kr.FAILED_PRECONDITION,"The client has already been terminated.");return t.$s||function(t){var n,e,i;const s=t._s(),r=(o=t.ji,a=(null===(n=t.Vi)||void 0===n?void 0:n.options.appId)||"",h=t.qi,new Uo(o,a,h,(u=s).host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Af(u.experimentalLongPollingOptions),u.useFetchStreams));var o,a,h,u;t.Ms||(null===(e=s.localCache)||void 0===e?void 0:e.xs)&&(null===(i=s.localCache)||void 0===i?void 0:i.Ls)&&(t.Ms={xi:s.localCache.xs,Li:s.localCache.Ls}),t.$s=new bf(t.Fi,t.Ui,t.Cs,r,t.Ms&&function(t){const n=null==t?void 0:t.Li.build();return{xi:null==t?void 0:t.xi.build(n),Li:n}}(t.Ms))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t),t.$s}class Hf{constructor(t){this.Fs=t}static fromBase64String(t){try{return new Hf(No.fromBase64String(t))}catch(n){throw new Cr(kr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Hf(No.fromUint8Array(t))}toBase64(){return this.Fs.toBase64()}toUint8Array(){return this.Fs.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this.Fs.isEqual(t.Fs)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(...t){for(let n=0;n<t.length;++n)if(0===t[n].length)throw new Cr(kr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this.Us=new eo(t)}isEqual(t){return this.Us.isEqual(t.Us)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(t){this.js=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new Cr(kr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new Cr(kr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this.qs=t,this.Bs=n}get latitude(){return this.qs}get longitude(){return this.Bs}isEqual(t){return this.qs===t.qs&&this.Bs===t.Bs}toJSON(){return{latitude:this.qs,longitude:this.Bs}}_i(t){return Br(this.qs,t.qs)||Br(this.Bs,t.Bs)}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(t){this.zs=(t||[]).map((t=>t))}toArray(){return this.zs.map((t=>t))}isEqual(t){return function(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(t[e]!==n[e])return!1;return!0}(this.zs,t.zs)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf=/^__.*__$/;class Yf{constructor(t,n,e){this.data=t,this.fieldMask=n,this.fieldTransforms=e}toMutation(t,n){return null!==this.fieldMask?new Mh(t,this.data,this.fieldMask,n,this.fieldTransforms):new $h(t,this.data,n,this.fieldTransforms)}}class Zf{constructor(t,n,e){this.data=t,this.fieldMask=n,this.fieldTransforms=e}toMutation(t,n){return new Mh(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function td(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Sr()}}class nd{constructor(t,n,e,i,s,r){this.settings=t,this.databaseId=n,this.serializer=e,this.ignoreUndefinedProperties=i,void 0===s&&this.Bu(),this.fieldTransforms=s||[],this.fieldMask=r||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new nd(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var n;const e=null===(n=this.path)||void 0===n?void 0:n.child(t),i=this.ku({path:e,Qu:!1});return i.$u(t),i}Uu(t){var n;const e=null===(n=this.path)||void 0===n?void 0:n.child(t),i=this.ku({path:e,Qu:!1});return i.Bu(),i}Ku(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return md(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return void 0!==this.fieldMask.find((n=>t.isPrefixOf(n)))||void 0!==this.fieldTransforms.find((n=>t.isPrefixOf(n.field)))}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(0===t.length)throw this.Wu("Document fields must not be empty");if(td(this.Lu)&&Xf.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class ed{constructor(t,n,e){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=e||Fc(t)}ju(t,n,e,i=!1){return new nd({Lu:t,methodName:n,zu:e,path:eo.emptyPath(),Qu:!1,Gu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function id(t){const n=t._s(),e=Fc(t.ji);return new ed(t.ji,!!n.ignoreUndefinedProperties,e)}function sd(t,n,e,i,s,r={}){const o=t.ju(r.merge||r.mergeFields?2:0,n,e,s);fd("Data must be an object, but it was:",o,i);const a=cd(i,o);let h,u;if(r.merge)h=new Ao(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const t=[];for(const i of r.mergeFields){const s=dd(n,i,e);if(!o.contains(s))throw new Cr(kr.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);vd(t,s)||t.push(s)}h=new Ao(t),u=o.fieldTransforms.filter((t=>h.covers(t.field)))}else h=null,u=o.fieldTransforms;return new Yf(new ha(a),h,u)}class rd extends Kf{Gs(t){if(2!==t.Lu)throw 1===t.Lu?t.Wu(`${this.js}() can only appear at the top level of your update data`):t.Wu(`${this.js}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof rd}}class od extends Kf{Gs(t){return new _h(t.path,new mh)}isEqual(t){return t instanceof od}}function ad(t,n,e,i){const s=t.ju(1,n,e);fd("Data must be an object, but it was:",s,i);const r=[],o=ha.empty();go(i,((t,i)=>{const a=pd(n,t,e);i=S(i);const h=s.Uu(a);if(i instanceof rd)r.push(a);else{const t=ud(i,h);null!=t&&(r.push(a),o.set(a,t))}}));const a=new Ao(r);return new Zf(o,a,s.fieldTransforms)}function hd(t,n,e,i,s,r){const o=t.ju(1,n,e),a=[dd(n,i,e)],h=[s];if(r.length%2!=0)throw new Cr(kr.INVALID_ARGUMENT,`Function ${n}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<r.length;f+=2)a.push(dd(n,r[f])),h.push(r[f+1]);const u=[],c=ha.empty();for(let f=a.length-1;f>=0;--f)if(!vd(u,a[f])){const t=a[f];let n=h[f];n=S(n);const e=o.Uu(t);if(n instanceof rd)u.push(t);else{const i=ud(n,e);null!=i&&(u.push(t),c.set(t,i))}}const l=new Ao(u);return new Zf(c,l,o.fieldTransforms)}function ud(t,n){if(ld(t=S(t)))return fd("Unsupported field value:",n,t),cd(t,n);if(t instanceof Kf)return function(t,n){if(!td(n.Lu))throw n.Wu(`${t.js}() can only be used with update() and set()`);if(!n.path)throw n.Wu(`${t.js}() is not currently supported inside arrays`);const e=t.Gs(n);e&&n.fieldTransforms.push(e)}(t,n),null;if(void 0===t&&n.ignoreUndefinedProperties)return null;if(n.path&&n.fieldMask.push(n.path),t instanceof Array){if(n.settings.Qu&&4!==n.Lu)throw n.Wu("Nested arrays are not supported");return function(t,n){const e=[];let i=0;for(const s of t){let t=ud(s,n.Ku(i));null==t&&(t={nullValue:"NULL_VALUE"}),e.push(t),i++}return{arrayValue:{values:e}}}(t,n)}return function(t,n){if(null===(t=S(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return function(t,n){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!wo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n)?lh(n):ch(t,n)}(n.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const e=Qr.fromDate(t);return{timestampValue:du(n.serializer,e)}}if(t instanceof Qr){const e=new Qr(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:du(n.serializer,e)}}if(t instanceof Jf)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Hf)return{bytesValue:wu(n.serializer,t.Fs)};if(t instanceof Lf){const e=n.databaseId,i=t.firestore.ji;if(!i.isEqual(e))throw n.Wu(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${e.projectId}/${e.database}`);return{referenceValue:vu(t.firestore.ji||n.databaseId,t.Pn.path)}}if(t instanceof Qf)return e=t,i=n,{mapValue:{fields:{[qo]:{stringValue:zo},[Go]:{arrayValue:{values:e.toArray().map((t=>{if("number"!=typeof t)throw i.Wu("VectorValues must only contain numeric values.");return ch(i.serializer,t)}))}}}}};var e,i;throw n.Wu(`Unsupported field value: ${Cf(t)}`)}(t,n)}function cd(t,n){const e={};return yo(t)?n.path&&n.path.length>0&&n.fieldMask.push(n.path):go(t,((t,i)=>{const s=ud(i,n.qu(t));null!=s&&(e[t]=s)})),{mapValue:{fields:e}}}function ld(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Qr||t instanceof Jf||t instanceof Hf||t instanceof Lf||t instanceof Kf||t instanceof Qf)}function fd(t,n,e){if(!ld(e)||"object"!=typeof(i=e)||null===i||Object.getPrototypeOf(i)!==Object.prototype&&null!==Object.getPrototypeOf(i)){const i=Cf(e);throw"an object"===i?n.Wu(t+" a custom object"):n.Wu(t+" "+i)}var i}function dd(t,n,e){if((n=S(n))instanceof Wf)return n.Us;if("string"==typeof n)return pd(t,n);throw md("Field path arguments must be of type string or ",t,!1,void 0,e)}const wd=new RegExp("[~\\*/\\[\\]]");function pd(t,n,e){if(n.search(wd)>=0)throw md(`Invalid field path (${n}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,e);try{return new Wf(...n.split(".")).Us}catch(i){throw md(`Invalid field path (${n}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,e)}}function md(t,n,e,i,s){const r=i&&!i.isEmpty(),o=void 0!==s;let a=`Function ${n}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let h="";return(r||o)&&(h+=" (found",r&&(h+=` in field ${i}`),o&&(h+=` in document ${s}`),h+=")"),new Cr(kr.INVALID_ARGUMENT,a+t+h)}function vd(t,n){return t.some((t=>t.isEqual(n)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(t,n,e,i,s){this.Hs=t,this.Ws=n,this.Pn=e,this.Ks=i,this.Js=s}get id(){return this.Pn.path.lastSegment()}get ref(){return new Lf(this.Hs,this.Js,this.Pn)}exists(){return null!==this.Ks}data(){if(this.Ks){if(this.Js){const t=new yd(this.Hs,this.Ws,this.Pn,this.Ks,null);return this.Js.fromFirestore(t)}return this.Ws.convertValue(this.Ks.data.value)}}get(t){if(this.Ks){const n=this.Ks.data.field(bd("DocumentSnapshot.get",t));if(null!==n)return this.Ws.convertValue(n)}}}class yd extends gd{data(){return super.data()}}function bd(t,n){return"string"==typeof n?pd(t,n):n instanceof Wf?n.Us:n._.Us}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{}class Id extends Ed{}function Td(t,n,...e){let i=[];n instanceof Ed&&i.push(n),i=i.concat(e),function(t){const n=t.filter((t=>t instanceof Sd)).length,e=t.filter((t=>t instanceof _d)).length;if(n>1||n>0&&e>0)throw new Cr(kr.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const s of i)t=s.Qs(t);return t}class _d extends Id{constructor(t,n,e){super(),this.Xs=t,this.Ys=n,this.Zs=e,this.type="where"}static hr(t,n,e){return new _d(t,n,e)}Qs(t){const n=this.ur(t);return kd(t.Os,n),new xf(t.firestore,t.converter,Ba(t.Os,n))}ur(t){const n=id(t.firestore),e=function(t,n,e,i,s,r,o){let a;if(s.isKeyField()){if("array-contains"===r||"array-contains-any"===r)throw new Cr(kr.INVALID_ARGUMENT,`Invalid Query. You can't perform '${r}' queries on documentId().`);if("in"===r||"not-in"===r){Od(o,r);const n=[];for(const e of o)n.push(Nd(i,t,e));a={arrayValue:{values:n}}}else a=Nd(i,t,o)}else"in"!==r&&"not-in"!==r&&"array-contains-any"!==r||Od(o,r),a=function(t,n,e,i=!1){return ud(e,t.ju(i?4:3,n))}(e,"where",o,"in"===r||"not-in"===r);return va.create(s,r,a)}(t.Os,0,n,t.firestore.ji,this.Xs,this.Ys,this.Zs);return e}}function Ad(t,n,e){const i=n,s=bd("where",t);return _d.hr(s,i,e)}class Sd extends Ed{constructor(t,n){super(),this.type=t,this.cr=n}static hr(t,n){return new Sd(t,n)}ur(t){const n=this.cr.map((n=>n.ur(t))).filter((t=>t.getFilters().length>0));return 1===n.length?n[0]:ga.create(n,this.lr())}Qs(t){const n=this.ur(t);return 0===n.getFilters().length?t:(function(t,n){let e=t;const i=n.getFlattenedFilters();for(const s of i)kd(e,s),e=Ba(e,s)}(t.Os,n),new xf(t.firestore,t.converter,Ba(t.Os,n)))}Er(){return this.cr}lr(){return"and"===this.type?"and":"or"}}function Nd(t,n,e){if("string"==typeof(e=S(e))){if(""===e)throw new Cr(kr.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ja(n)&&-1!==e.indexOf("/"))throw new Cr(kr.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const i=n.path.child(to.fromString(e));if(!io.isDocumentKey(i))throw new Cr(kr.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return na(t,new io(i))}if(e instanceof Lf)return na(t,e.Pn);throw new Cr(kr.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Cf(e)}.`)}function Od(t,n){if(!Array.isArray(t)||0===t.length)throw new Cr(kr.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${n.toString()}' filters.`)}function kd(t,n){const e=function(t,n){for(const e of t)for(const t of e.getFlattenedFilters())if(n.indexOf(t.op)>=0)return t.op;return null}(t.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(n.op));if(null!==e)throw e===n.op?new Cr(kr.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${n.op.toString()}' filter.`):new Cr(kr.INVALID_ARGUMENT,`Invalid query. You cannot use '${n.op.toString()}' filters with '${e.toString()}' filters.`)}class Cd{convertValue(t,n="none"){switch(Ho(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Co(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Ro(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw Sr()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const e={};return go(t,((t,i)=>{e[t]=this.convertValue(i,n)})),e}convertVectorValue(t){var n,e,i;const s=null===(i=null===(e=null===(n=t.fields)||void 0===n?void 0:n[Go].arrayValue)||void 0===e?void 0:e.values)||void 0===i?void 0:i.map((t=>Co(t.doubleValue)));return new Qf(s)}convertGeoPoint(t){return new Jf(Co(t.latitude),Co(t.longitude))}convertArray(t,n){return(t.values||[]).map((t=>this.convertValue(t,n)))}convertServerTimestamp(t,n){switch(n){case"previous":const e=Lo(t);return null==e?null:this.convertValue(e,n);case"estimate":return this.convertTimestamp(Fo(t));default:return null}}convertTimestamp(t){const n=ko(t);return new Qr(n.seconds,n.nanos)}convertDocumentKey(t,n){const e=to.fromString(t);Nr(Lu(e));const i=new Vo(e.get(1),e.get(3)),s=new io(e.popFirst(5));return i.isEqual(n)||Tr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(t,n,e){let i;return i=t?e&&(e.merge||e.mergeFields)?t.toFirestore(n,e):t.toFirestore(n):n,i
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Dd{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Pd extends gd{constructor(t,n,e,i,s,r){super(t,n,e,i,r),this.Hs=t,this.Tr=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this.Ks){if(this.Js){const n=new $d(this.Hs,this.Ws,this.Pn,this.Ks,this.metadata,null);return this.Js.fromFirestore(n,t)}return this.Ws.convertValue(this.Ks.data.value,t.serverTimestamps)}}get(t,n={}){if(this.Ks){const e=this.Ks.data.field(bd("DocumentSnapshot.get",t));if(null!==e)return this.Ws.convertValue(e,n.serverTimestamps)}}}class $d extends Pd{data(t={}){return super.data(t)}}class Md{constructor(t,n,e,i){this.Hs=t,this.Ws=n,this._r=i,this.metadata=new Dd(i.hasPendingWrites,i.fromCache),this.query=e}get docs(){const t=[];return this.forEach((n=>t.push(n))),t}get size(){return this._r.docs.size}get empty(){return 0===this.size}forEach(t,n){this._r.docs.forEach((e=>{t.call(n,new $d(this.Hs,this.Ws,e.key,e,new Dd(this._r.mutatedKeys.has(e.key),this._r.fromCache),this.query.converter))}))}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._r.excludesMetadataChanges)throw new Cr(kr.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this.Pr&&this.no===n||(this.Pr=function(t,n){if(t._r.oldDocs.isEmpty()){let n=0;return t._r.docChanges.map((e=>{const i=new $d(t.Hs,t.Ws,e.doc.key,e.doc,new Dd(t._r.mutatedKeys.has(e.doc.key),t._r.fromCache),t.query.converter);return e.doc,{type:"added",doc:i,oldIndex:-1,newIndex:n++}}))}{let e=t._r.oldDocs;return t._r.docChanges.filter((t=>n||3!==t.type)).map((n=>{const i=new $d(t.Hs,t.Ws,n.doc.key,n.doc,new Dd(t._r.mutatedKeys.has(n.doc.key),t._r.fromCache),t.query.converter);let s=-1,r=-1;return 0!==n.type&&(s=e.indexOf(n.doc.key),e=e.delete(n.doc.key)),1!==n.type&&(e=e.add(n.doc),r=e.indexOf(n.doc.key)),{type:xd(n.type),doc:i,oldIndex:s,newIndex:r}}))}}(this,n),this.no=n),this.Pr}}function xd(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Sr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ld(t){t=Rf(t,Lf);const n=Rf(t.firestore,Bf);return function(t,n,e={}){const i=new Rr;return t.asyncQueue.enqueueAndForget((async()=>function(t,n,e,i,s){const r=new gf({next:a=>{r.su(),n.enqueueAndForget((()=>Dl(t,o)));const h=a.docs.has(e);!h&&a.fromCache?s.reject(new Cr(kr.UNAVAILABLE,"Failed to get document because the client is offline.")):h&&a.fromCache&&i&&"server"===i.source?s.reject(new Cr(kr.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(a)},error:t=>s.reject(t)}),o=new Fl(Fa(e.path),r,{includeMetadataChanges:!0,Ta:!0});return Rl(t,o)}(await _f(t),t.asyncQueue,n,e,i))),i.promise}(Gf(n),t.Pn).then((e=>function(t,n,e){const i=e.docs.get(n.Pn),s=new Fd(t);return new Pd(t,s,n.Pn,i,new Dd(e.hasPendingWrites,e.fromCache),n.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,t,e)))}class Fd extends Cd{constructor(t){super(),this.firestore=t}convertBytes(t){return new Hf(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore.ji);return new Lf(this.firestore,null,n)}}function Ud(t){t=Rf(t,xf);const n=Rf(t.firestore,Bf),e=Gf(n),i=new Fd(n);return function(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new Cr(kr.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(t.Os),function(t,n,e={}){const i=new Rr;return t.asyncQueue.enqueueAndForget((async()=>function(t,n,e,i,s){const r=new gf({next:e=>{r.su(),n.enqueueAndForget((()=>Dl(t,o))),e.fromCache&&"server"===i.source?s.reject(new Cr(kr.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(e)},error:t=>s.reject(t)}),o=new Fl(e,r,{includeMetadataChanges:!0,Ta:!0});return Rl(t,o)}(await _f(t),t.asyncQueue,n,e,i))),i.promise}(e,t.Os).then((e=>new Md(n,i,t,e)))}function jd(t,n,e){t=Rf(t,Lf);const i=Rf(t.firestore,Bf),s=Rd(t.converter,n,e);return zd(i,[sd(id(i),"setDoc",t.Pn,s,null!==t.converter,e).toMutation(t.Pn,Sh.none())])}function Vd(t,n,e,...i){t=Rf(t,Lf);const s=Rf(t.firestore,Bf),r=id(s);let o;return o="string"==typeof(n=S(n))||n instanceof Wf?hd(r,"updateDoc",t.Pn,n,e,i):ad(r,"updateDoc",t.Pn,n),zd(s,[o.toMutation(t.Pn,Sh.exists(!0))])}function qd(t){return zd(Rf(t.firestore,Bf),[new Uh(t.Pn,Sh.none())])}function Bd(t,n){const e=Rf(t.firestore,Bf),i=jf(t),s=Rd(t.converter,n);return zd(e,[sd(id(t.firestore),"addDoc",i.Pn,s,null!==t.converter,{}).toMutation(i.Pn,Sh.exists(!1))]).then((()=>i))}function zd(t,n){return function(t,n){const e=new Rr;return t.asyncQueue.enqueueAndForget((async()=>Xl(await function(t){return Tf(t).then((t=>t.syncEngine))}(t),n,e))),e.promise}(Gf(t),n)}class Gd{constructor(t,n){this.Hs=t,this.eo=n,this.io=[],this.so=!1,this.ro=id(t)}set(t,n,e){this.oo();const i=Hd(t,this.Hs),s=Rd(i.converter,n,e),r=sd(this.ro,"WriteBatch.set",i.Pn,s,null!==i.converter,e);return this.io.push(r.toMutation(i.Pn,Sh.none())),this}update(t,n,e,...i){this.oo();const s=Hd(t,this.Hs);let r;return r="string"==typeof(n=S(n))||n instanceof Wf?hd(this.ro,"WriteBatch.update",s.Pn,n,e,i):ad(this.ro,"WriteBatch.update",s.Pn,n),this.io.push(r.toMutation(s.Pn,Sh.exists(!0))),this}delete(t){this.oo();const n=Hd(t,this.Hs);return this.io=this.io.concat(new Uh(n.Pn,Sh.none())),this}commit(){return this.oo(),this.so=!0,this.io.length>0?this.eo(this.io):Promise.resolve()}oo(){if(this.so)throw new Cr(kr.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Hd(t,n){if((t=S(t)).firestore!==n)throw new Cr(kr.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function Wd(){return new od("serverTimestamp")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(t){return Gf(t=Rf(t,Bf)),new Gd(t,(n=>zd(t,n)))}!function(t,n=!0){yr=qt,Lt(new N("firestore",((t,{instanceIdentifier:e,options:i})=>{const s=t.getProvider("app").getImmediate(),r=new Bf(new Mr(t.getProvider("auth-internal")),new Ur(s,t.getProvider("app-check-internal")),function(t,n){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Cr(kr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Vo(t.options.projectId,n)}(s,e),s);return i=Object.assign({useFetchStreams:n},i),r.ws(i),r}),"PUBLIC").setMultipleInstances(!0)),Gt(mr,vr,t),Gt(mr,vr,"esm2017")}();export{Me as G,zf as a,Xi as b,Uf as c,Ud as d,qd as e,jf as f,nr as g,Wd as h,Bt as i,Bd as j,Kd as k,Ld as l,Be as m,bi as n,ze as o,Ge as p,Td as q,jd as s,Vd as u,Ad as w};
