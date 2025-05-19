var e={};
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
 */const t=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},n={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,h=(3&t)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(l=64)),r.push(n[u],n[h],n[l],n[d])}return r.join("")},encodeString(e,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(e):this.encodeByteArray(t(e),n)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<e.length;){const t=n[e.charAt(s++)],o=s<e.length?n[e.charAt(s)]:0;++s;const a=s<e.length?n[e.charAt(s)]:64;++s;const c=s<e.length?n[e.charAt(s)]:64;if(++s,null==t||null==o||null==a||null==c)throw new r;const u=t<<2|o>>4;if(i.push(u),64!==a){const e=o<<4&240|a>>2;if(i.push(e),64!==c){const e=a<<6&192|c;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class r extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const i=function(e){return function(e){const r=t(e);return n.encodeByteArray(r,!0)}(e).replace(/\./g,"")},s=function(e){try{return n.decodeString(e,!0)}catch(t){}return null},o=()=>{try{
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
 */().__FIREBASE_DEFAULTS__||(()=>{if("undefined"==typeof process)return;const t=e.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&s(e[1]);return t&&JSON.parse(t)})()}catch(t){return}},a=e=>{var t,n;return null===(n=null===(t=o())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},c=()=>{var e;return null===(e=o())||void 0===e?void 0:e.config},u=e=>{var t;return null===(t=o())||void 0===t?void 0:t[`_${e}`]};
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
class h{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
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
function l(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function d(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function f(){try{return"object"==typeof indexedDB}catch(e){return!1}}function p(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}class g extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,g.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,m.prototype.create)}}class m{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(y,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new g(r,o,n)}}const y=/\{\$([^}]+)}/g;function v(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(w(n)&&w(s)){if(!v(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function w(e){return null!==e&&"object"==typeof e}
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
 */function _(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function I(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function T(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}class b{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e){if("object"!=typeof e||null===e)return!1;for(const t of["next","error","complete"])if(t in e&&"function"==typeof e[t])return!0;return!1}(e)?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=E),void 0===r.error&&(r.error=E),void 0===r.complete&&(r.complete=E);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!=typeof console&&console.error}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function E(){}
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
 */function S(e,t=1e3,n=2){const r=t*Math.pow(n,e),i=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(144e5,r+i)}
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
 */function C(e){return e&&e._delegate?e._delegate:e}class k{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */const A="[DEFAULT]";
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
 */class N{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new h;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:A})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=A){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=A){return this.instances.has(e)}getOptions(e=A){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries())n===this.normalizeInstanceIdentifier(i)&&s.resolve(r);return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===A?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}var r;return n||null}normalizeInstanceIdentifier(e=A){return this.component?this.component.multipleInstances?e:A:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class D{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new N(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
 */var R,O;(O=R||(R={}))[O.DEBUG=0]="DEBUG",O[O.VERBOSE=1]="VERBOSE",O[O.INFO=2]="INFO",O[O.WARN=3]="WARN",O[O.ERROR=4]="ERROR",O[O.SILENT=5]="SILENT";const P={debug:R.DEBUG,verbose:R.VERBOSE,info:R.INFO,warn:R.WARN,error:R.ERROR,silent:R.SILENT},L=R.INFO,M={[R.DEBUG]:"log",[R.VERBOSE]:"log",[R.INFO]:"info",[R.WARN]:"warn",[R.ERROR]:"error"},x=(e,t,...n)=>{if(!(t<e.logLevel||((new Date).toISOString(),M[t])))throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class U{constructor(e){this.name=e,this._logLevel=L,this._logHandler=x,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in R))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?P[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,R.DEBUG,...e),this._logHandler(this,R.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,R.VERBOSE,...e),this._logHandler(this,R.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,R.INFO,...e),this._logHandler(this,R.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,R.WARN,...e),this._logHandler(this,R.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,R.ERROR,...e),this._logHandler(this,R.ERROR,...e)}}let F,V;const j=new WeakMap,q=new WeakMap,B=new WeakMap,$=new WeakMap,z=new WeakMap;let H={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return q.get(e);if("objectStoreNames"===t)return e.objectStoreNames||B.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return G(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function K(e){return"function"==typeof e?(t=e)!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(V||(V=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(W(this),e),G(j.get(this))}:function(...e){return G(t.apply(W(this),e))}:function(e,...n){const r=t.call(W(this),e,...n);return B.set(r,e.sort?e.sort():[e]),G(r)}:(e instanceof IDBTransaction&&function(e){if(q.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));q.set(e,t)}(e),n=e,(F||(F=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>n instanceof e))?new Proxy(e,H):e);var t,n}function G(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(G(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&j.set(t,e)})).catch((()=>{})),z.set(t,e),t}(e);if($.has(e))return $.get(e);const t=K(e);return t!==e&&($.set(e,t),z.set(t,e)),t}const W=e=>z.get(e);function Q(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=G(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(G(o.result),e.oldVersion,e.newVersion,G(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const J=["get","getKey","getAll","getAllKeys","count"],X=["put","add","delete","clear"],Y=new Map;function Z(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Y.get(t))return Y.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=X.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!J.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return Y.set(t,s),s}var ee;ee=H,H={...ee,get:(e,t,n)=>Z(e,t)||ee.get(e,t,n),has:(e,t)=>!!Z(e,t)||ee.has(e,t)};
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
class te{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const ne="@firebase/app",re="0.11.4",ie=new U("@firebase/app"),se="@firebase/app-compat",oe="@firebase/analytics-compat",ae="@firebase/analytics",ce="@firebase/app-check-compat",ue="@firebase/app-check",he="@firebase/auth",le="@firebase/auth-compat",de="@firebase/database",fe="@firebase/data-connect",pe="@firebase/database-compat",ge="@firebase/functions",me="@firebase/functions-compat",ye="@firebase/installations",ve="@firebase/installations-compat",we="@firebase/messaging",_e="@firebase/messaging-compat",Ie="@firebase/performance",Te="@firebase/performance-compat",be="@firebase/remote-config",Ee="@firebase/remote-config-compat",Se="@firebase/storage",Ce="@firebase/storage-compat",ke="@firebase/firestore",Ae="@firebase/vertexai",Ne="@firebase/firestore-compat",De="firebase",Re="[DEFAULT]",Oe={[ne]:"fire-core",[se]:"fire-core-compat",[ae]:"fire-analytics",[oe]:"fire-analytics-compat",[ue]:"fire-app-check",[ce]:"fire-app-check-compat",[he]:"fire-auth",[le]:"fire-auth-compat",[de]:"fire-rtdb",[fe]:"fire-data-connect",[pe]:"fire-rtdb-compat",[ge]:"fire-fn",[me]:"fire-fn-compat",[ye]:"fire-iid",[ve]:"fire-iid-compat",[we]:"fire-fcm",[_e]:"fire-fcm-compat",[Ie]:"fire-perf",[Te]:"fire-perf-compat",[be]:"fire-rc",[Ee]:"fire-rc-compat",[Se]:"fire-gcs",[Ce]:"fire-gcs-compat",[ke]:"fire-fst",[Ne]:"fire-fst-compat",[Ae]:"fire-vertex","fire-js":"fire-js",[De]:"fire-js-all"},Pe=new Map,Le=new Map,Me=new Map;function xe(e,t){try{e.container.addComponent(t)}catch(n){ie.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ue(e){const t=e.name;if(Me.has(t))return ie.debug(`There were multiple attempts to register component ${t}.`),!1;Me.set(t,e);for(const n of Pe.values())xe(n,e);for(const n of Le.values())xe(n,e);return!0}function Fe(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Ve(e){return null!=e&&void 0!==e.settings}
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
 */const je=new m("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
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
class qe{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new k("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw je.create("app-deleted",{appName:this._name})}}
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
 */const Be="11.6.0";function $e(e,t={}){let n=e;"object"!=typeof t&&(t={name:t});const r=Object.assign({name:Re,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw je.create("bad-app-name",{appName:String(i)});if(n||(n=c()),!n)throw je.create("no-options");const s=Pe.get(i);if(s){if(v(n,s.options)&&v(r,s.config))return s;throw je.create("duplicate-app",{appName:i})}const o=new D(i);for(const c of Me.values())o.addComponent(c);const a=new qe(n,r,o);return Pe.set(i,a),a}function ze(e=Re){const t=Pe.get(e);if(!t&&e===Re&&c())return $e();if(!t)throw je.create("no-app",{appName:e});return t}function He(e,t,n){var r;let i=null!==(r=Oe[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void ie.warn(e.join(" "))}Ue(new k(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
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
 */const Ke="firebase-heartbeat-store";let Ge=null;function We(){return Ge||(Ge=Q("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(Ke)}catch(n){}}}).catch((e=>{throw je.create("idb-open",{originalErrorMessage:e.message})}))),Ge}async function Qe(e,t){try{const n=(await We()).transaction(Ke,"readwrite"),r=n.objectStore(Ke);await r.put(t,Je(e)),await n.done}catch(n){if(n instanceof g)ie.warn(n.message);else{const e=je.create("idb-set",{originalErrorMessage:null==n?void 0:n.message});ie.warn(e.message)}}}function Je(e){return`${e.name}!${e.options.appId}`}
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
 */class Xe{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ze(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ye();if(null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some((e=>e.date===r)))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>30){const e=function(e){if(0===e.length)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}
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
 */(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){ie.warn(n)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=Ye(),{heartbeatsToSend:n,unsentEntries:r}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),et(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),et(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),s=i(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return ie.warn(t),""}}}function Ye(){return(new Date).toISOString().substring(0,10)}class Ze{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!f()&&p().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await We()).transaction(Ke),n=await t.objectStore(Ke).get(Je(e));return await t.done,n}catch(t){if(t instanceof g)ie.warn(t.message);else{const e=je.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});ie.warn(e.message)}}}(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Qe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Qe(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function et(e){return i(JSON.stringify({version:2,heartbeats:e})).length}function tt(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Ue(new k("platform-logger",(e=>new te(e)),"PRIVATE")),Ue(new k("heartbeat",(e=>new Xe(e)),"PRIVATE")),He(ne,re,""),He(ne,re,"esm2017"),He("fire-js",""),"function"==typeof SuppressedError&&SuppressedError;const nt=function(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}},rt=new m("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),it=new U("@firebase/auth");function st(e,...t){it.logLevel<=R.ERROR&&it.error(`Auth (${Be}): ${e}`,...t)}
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
 */function ot(e,...t){throw ht(e,...t)}function at(e,...t){return ht(e,...t)}function ct(e,t,n){const r=Object.assign(Object.assign({},nt()),{[t]:n});return new m("auth","Firebase",r).create(t,{appName:e.name})}function ut(e){return ct(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ht(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return rt.create(e,...t)}function lt(e,t,...n){if(!e)throw ht(t,...n)}function dt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw st(t),new Error(t)}function ft(e,t){e||dt(t)}
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
 */function pt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function gt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
class mt{constructor(e,t){this.shortDelay=e,this.longDelay=t,ft(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(l())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===gt()||"https:"===gt()||d()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
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
 */function yt(e,t){ft(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class vt{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void dt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void dt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void dt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const wt={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},_t=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],It=new mt(3e4,6e4);
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
 */function Tt(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function bt(e,t,n,r,i={}){return Et(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=_(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode);const c=Object.assign({method:t,headers:a},i);return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent||(c.referrerPolicy="no-referrer"),vt.fetch()(await Ct(e,e.config.apiHost,n,o),c)}))}async function Et(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},wt),t);try{const t=new At(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Nt(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Nt(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Nt(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw Nt(e,"user-disabled",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw ct(e,a,o);ot(e,a)}}catch(i){if(i instanceof g)throw i;ot(e,"network-request-failed",{message:String(i)})}}async function St(e,t,n,r,i={}){const s=await bt(e,t,n,r,i);return"mfaPendingCredential"in s&&ot(e,"multi-factor-auth-required",{_serverResponse:s}),s}async function Ct(e,t,n,r){const i=`${t}${n}?${r}`,s=e,o=s.config.emulator?yt(e.config,i):`${e.config.apiScheme}://${i}`;return _t.includes(n)&&(await s._persistenceManagerAvailable,"COOKIE"===s._getPersistenceType())?s._getPersistence()._getFinalTarget(o).toString():o}function kt(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class At{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(at(this.auth,"network-request-failed"))),It.get())}))}}function Nt(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=at(e,t,r);return i.customData._tokenResponse=n,i}function Dt(e){return void 0!==e&&void 0!==e.enterprise}class Rt{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return kt(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Ot(e,t){return bt(e,"POST","/v1/accounts:lookup",t)}
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
 */function Pt(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}function Lt(e){return 1e3*Number(e)}function Mt(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return st("JWT malformed, contained fewer than 3 sections"),null;try{const e=s(n);return e?JSON.parse(e):(st("Failed to decode base64 JWT payload"),null)}catch(i){return st("Caught error parsing JWT payload as JSON",null==i?void 0:i.toString()),null}}function xt(e){const t=Mt(e);return lt(t,"internal-error"),lt(void 0!==t.exp,"internal-error"),lt(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
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
 */async function Ut(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof g&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}class Ft{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
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
 */class Vt{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pt(this.lastLoginAt),this.creationTime=Pt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function jt(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Ut(e,Ot(n,{idToken:r}));lt(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?qt(s.providerUserInfo):[],a=(c=e.providerData,u=o,[...c.filter((e=>!u.some((t=>t.providerId===e.providerId)))),...u]);var c,u;const h=e.isAnonymous,l=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!h&&l,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Vt(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}function qt(e){return e.map((e=>{var{providerId:t}=e,n=tt(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
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
class Bt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){lt(e.idToken,"internal-error"),lt(void 0!==e.idToken,"internal-error"),lt(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):xt(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){lt(0!==e.length,"internal-error");const t=xt(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(lt(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await async function(e,t){const n=await Et(e,{},(async()=>{const n=_({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=await Ct(e,r,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",vt.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new Bt;return n&&(lt("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(lt("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(lt("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Bt,this.toJSON())}_performRefresh(){return dt("not implemented")}}
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
 */function $t(e,t){lt("string"==typeof e||void 0===e,"internal-error",{appName:t})}class zt{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=tt(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ft(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Vt(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Ut(this,this.stsTokenManager.getToken(this.auth,e));return lt(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=C(e),r=await n.getIdToken(t),i=Mt(r);lt(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Pt(Lt(i.auth_time)),issuedAtTime:Pt(Lt(i.iat)),expirationTime:Pt(Lt(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=C(e);await jt(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(lt(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new zt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){lt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await jt(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ve(this.auth.app))return Promise.reject(ut(this.auth));const e=await this.getIdToken();return await Ut(this,
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
async function(e,t){return bt(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,c,u;const h=null!==(n=t.displayName)&&void 0!==n?n:void 0,l=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:_,providerData:I,stsTokenManager:T}=t;lt(v&&T,e,"internal-error");const b=Bt.fromJSON(this.name,T);lt("string"==typeof v,e,"internal-error"),$t(h,e.name),$t(l,e.name),lt("boolean"==typeof w,e,"internal-error"),lt("boolean"==typeof _,e,"internal-error"),$t(d,e.name),$t(f,e.name),$t(p,e.name),$t(g,e.name),$t(m,e.name),$t(y,e.name);const E=new zt({uid:v,auth:e,email:l,emailVerified:w,displayName:h,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:b,createdAt:m,lastLoginAt:y});return I&&Array.isArray(I)&&(E.providerData=I.map((e=>Object.assign({},e)))),g&&(E._redirectEventId=g),E}static async _fromIdTokenResponse(e,t,n=!1){const r=new Bt;r.updateFromServerResponse(t);const i=new zt({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await jt(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];lt(void 0!==r.localId,"internal-error");const i=void 0!==r.providerUserInfo?qt(r.providerUserInfo):[],s=!(r.email&&r.passwordHash||(null==i?void 0:i.length)),o=new Bt;o.updateFromIdToken(n);const a=new zt({uid:r.localId,auth:e,stsTokenManager:o,isAnonymous:s}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Vt(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash||(null==i?void 0:i.length))};return Object.assign(a,c),a}}
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
 */const Ht=new Map;function Kt(e){ft(e instanceof Function,"Expected a class definition");let t=Ht.get(e);return t?(ft(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ht.set(e,t),t)}
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
 */class Gt{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Gt.type="NONE";const Wt=Gt;
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
 */function Qt(e,t,n){return`firebase:${e}:${t}:${n}`}class Jt{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Qt(this.userKey,r.apiKey,i),this.fullPersistenceKey=Qt("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if("string"==typeof e){const t=await Ot(this.auth,{idToken:e}).catch((()=>{}));return t?zt._fromGetAccountInfoResponse(this.auth,t,e):null}return zt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Jt(Kt(Wt),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||Kt(Wt);const s=Qt(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){let n;if("string"==typeof t){const r=await Ot(e,{idToken:t}).catch((()=>{}));if(!r)break;n=await zt._fromGetAccountInfoResponse(e,r,t)}else n=zt._fromJSON(e,t);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(c){}}))),new Jt(i,e,n)):new Jt(i,e,n)}}
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
 */function Xt(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(tn(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Yt(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(rn(t))return"Blackberry";if(sn(t))return"Webos";if(Zt(t))return"Safari";if((t.includes("chrome/")||en(t))&&!t.includes("edge/"))return"Chrome";if(nn(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Yt(e=l()){return/firefox\//i.test(e)}function Zt(e=l()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function en(e=l()){return/crios\//i.test(e)}function tn(e=l()){return/iemobile/i.test(e)}function nn(e=l()){return/android/i.test(e)}function rn(e=l()){return/blackberry/i.test(e)}function sn(e=l()){return/webos/i.test(e)}function on(e=l()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function an(e=l()){return on(e)||nn(e)||sn(e)||rn(e)||/windows phone/i.test(e)||tn(e)}
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
 */function cn(e,t=[]){let n;switch(e){case"Browser":n=Xt(l());break;case"Worker":n=`${Xt(l())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Be}/${r}`}
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
 */class un{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==n?void 0:n.message})}}}
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
 */class hn{constructor(e){var t,n,r,i;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:6,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,i,s,o;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=null===(t=a.meetsMinPasswordLength)||void 0===t||t),a.isValid&&(a.isValid=null===(n=a.meetsMaxPasswordLength)||void 0===n||n),a.isValid&&(a.isValid=null===(r=a.containsLowercaseLetter)||void 0===r||r),a.isValid&&(a.isValid=null===(i=a.containsUppercaseLetter)||void 0===i||i),a.isValid&&(a.isValid=null===(s=a.containsNumericCharacter)||void 0===s||s),a.isValid&&(a.isValid=null===(o=a.containsNonAlphanumericCharacter)||void 0===o||o),a}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}
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
 */class ln{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fn(this),this.idTokenSubscription=new fn(this),this.beforeStateQueue=new un(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rt,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise((e=>this._resolvePersistenceManagerAvailable=e))}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Kt(t)),this._initializationPromise=this.queue((async()=>{var n,r,i;if(!this._deleted&&(this.persistenceManager=await Jt.create(this,e),null===(n=this._resolvePersistenceManagerAvailable)||void 0===n||n.call(this),!this._deleted)){if(null===(r=this._popupRedirectResolver)||void 0===r?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(s){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e,!0)):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await Ot(this,{idToken:e}),n=await zt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ve(this.app)){const e=this.app.settings.authIdToken;return e?new Promise((t=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(e).then(t,t)))})):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return lt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await jt(e)}catch(t){if("auth/network-request-failed"!==(null==t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ve(this.app))return Promise.reject(ut(this));const t=e?C(e):null;return t&&lt(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&lt(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return Ve(this.app)?Promise.reject(ut(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ve(this.app)?Promise.reject(ut(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(Kt(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return bt(e,"GET","/v2/passwordPolicy",Tt(e,t))}
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
 */(this),t=new hn(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new m("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return bt(e,"POST","/v2/accounts:revokeToken",Tt(e,t))}(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Kt(e)||this._popupRedirectResolver;lt(t,this,"argument-error"),this.redirectPersistenceManager=await Jt.create(this,[Kt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t);let s=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(lt(o,this,"internal-error"),o.then((()=>{s||i(this.currentUser)})),"function"==typeof t){const i=e.addObserver(t,n,r);return()=>{s=!0,i()}}{const n=e.addObserver(t);return()=>{s=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return lt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;if(Ve(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){it.logLevel<=R.WARN&&it.warn(`Auth (${Be}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function dn(e){return C(e)}class fn{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e){const t=new b(e,void 0);return t.subscribe.bind(t)}((e=>this.observer=e))}get next(){return lt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
 */let pn={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function gn(e){return pn.loadJS(e)}class mn{constructor(){this.enterprise=new yn}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class yn{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const vn="NO_RECAPTCHA";class wn{constructor(e){this.type="recaptcha-enterprise",this.auth=dn(e)}async verify(e="verify",t=!1){function n(t,n,r){const i=window.grecaptcha;Dt(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n(vn)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?(new mn).execute("siteKey",{action:"verify"}):new Promise(((e,r)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{(async function(e){return bt(e,"GET","/v2/recaptchaConfig",Tt(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}))})(e).then((r=>{if(void 0!==r.recaptchaKey){const n=new Rt(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))})(this.auth).then((i=>{if(!t&&Dt(window.grecaptcha))n(i,e,r);else{if("undefined"==typeof window)return void r(new Error("RecaptchaVerifier is only supported in browser"));let t=pn.recaptchaEnterpriseScript;0!==t.length&&(t+=i),gn(t).then((()=>{n(i,e,r)})).catch((e=>{r(e)}))}})).catch((e=>{r(e)}))}))}}async function _n(e,t,n,r=!1,i=!1){const s=new wn(e);let o;if(i)o=vn;else try{o=await s.verify(n)}catch(c){o=await s.verify(n,!0)}const a=Object.assign({},t);if("mfaSmsEnrollment"===n||"mfaSmsSignIn"===n){if("phoneEnrollmentInfo"in a){const e=a.phoneEnrollmentInfo.phoneNumber,t=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:t,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const e=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:e,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function In(e,t,n,r,i){var s;if(null===(s=e._getRecaptchaConfig())||void 0===s?void 0:s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await _n(e,t,n,"getOobCode"===n);return r(e,i)}return r(e,t).catch((async i=>{if("auth/missing-recaptcha-token"===i.code){const i=await _n(e,t,n,"getOobCode"===n);return r(e,i)}return Promise.reject(i)}))}
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
 */function Tn(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function bn(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}
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
class En{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return dt("not implemented")}_getIdTokenResponse(e){return dt("not implemented")}_linkToIdToken(e,t){return dt("not implemented")}_getReauthenticationResolver(e){return dt("not implemented")}}async function Sn(e,t){return bt(e,"POST","/v1/accounts:signUp",t)}
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
 */async function Cn(e,t){return St(e,"POST","/v1/accounts:signInWithPassword",Tt(e,t))}
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
class kn extends En{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new kn(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new kn(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return In(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",Cn);case"emailLink":return async function(e,t){return St(e,"POST","/v1/accounts:signInWithEmailLink",Tt(e,t))}(e,{email:this._email,oobCode:this._password});default:ot(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return In(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Sn);case"emailLink":return async function(e,t){return St(e,"POST","/v1/accounts:signInWithEmailLink",Tt(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:ot(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
 */async function An(e,t){return St(e,"POST","/v1/accounts:signInWithIdp",Tt(e,t))}
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
 */class Nn extends En{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Nn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ot("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=tt(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Nn(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return An(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,An(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,An(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=_(t)}return e}}
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
 */class Dn{constructor(e){var t,n,r,i,s,o;const a=I(T(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,u=null!==(n=a.oobCode)&&void 0!==n?n:null,h=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);lt(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=I(T(e)).link,n=t?I(T(t)).deep_link_id:null,r=I(T(e)).deep_link_id;return(r?I(T(r)).link:null)||r||n||t||e}(e);try{return new Dn(t)}catch(n){return null}}}
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
 */class Rn{constructor(){this.providerId=Rn.PROVIDER_ID}static credential(e,t){return kn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Dn.parseLink(t);return lt(n,"argument-error"),kn._fromEmailAndCode(e,n.code,n.tenantId)}}Rn.PROVIDER_ID="password",Rn.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Rn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class On{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class Pn extends On{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
 */class Ln extends Pn{constructor(){super("facebook.com")}static credential(e){return Nn._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch(t){return null}}}Ln.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ln.PROVIDER_ID="facebook.com";
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
class Mn extends Pn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Nn._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Mn.credential(t,n)}catch(r){return null}}}Mn.GOOGLE_SIGN_IN_METHOD="google.com",Mn.PROVIDER_ID="google.com";
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
class xn extends Pn{constructor(){super("github.com")}static credential(e){return Nn._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch(t){return null}}}xn.GITHUB_SIGN_IN_METHOD="github.com",xn.PROVIDER_ID="github.com";
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
class Un extends Pn{constructor(){super("twitter.com")}static credential(e,t){return Nn._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Un.credential(t,n)}catch(r){return null}}}Un.TWITTER_SIGN_IN_METHOD="twitter.com",Un.PROVIDER_ID="twitter.com";
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
class Fn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await zt._fromIdTokenResponse(e,n,r),s=Vn(n);return new Fn({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Vn(n);return new Fn({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Vn(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
 */class jn extends g{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,jn.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new jn(e,t,n,r)}}function qn(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw jn._fromErrorAndOperation(e,n,t,r);throw n}))}
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
async function Bn(e,t,n=!1){if(Ve(e.app))return Promise.reject(ut(e));const r="signIn",i=await qn(e,r,t),s=await Fn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}function $n(e,t,n){return Ve(e.app)?Promise.reject(ut(e)):async function(e,t){return Bn(dn(e),t)}
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
 */(C(e),Rn.credential(t,n)).catch((async t=>{throw"auth/password-does-not-meet-requirements"===t.code&&async function(e){const t=dn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}(e),t}))}function zn(e,t,n,r){return C(e).onAuthStateChanged(t,n,r)}function Hn(e){return C(e).signOut()}const Kn="__sak";
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
 */class Gn{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Kn,"1"),this.storage.removeItem(Kn),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */class Wn extends Gn{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=an(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);!function(){const e=l();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()||10!==document.documentMode||i===e.newValue||e.newValue===e.oldValue?r():setTimeout(r,10)}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Wn.type="LOCAL";const Qn=Wn;
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
 */class Jn extends Gn{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Jn.type="SESSION";const Xn=Jn;
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
class Yn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Yn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function Zn(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
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
 */Yn.receivers=[];class er{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Zn("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
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
 */function tr(){return window}
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
function nr(){return void 0!==tr().WorkerGlobalScope&&"function"==typeof tr().importScripts}
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
const rr="firebaseLocalStorageDb",ir="firebaseLocalStorage",sr="fbase_key";class or{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function ar(e,t){return e.transaction([ir],t?"readwrite":"readonly").objectStore(ir)}function cr(){const e=indexedDB.open(rr,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(ir,{keyPath:sr})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(ir)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(rr);return new or(e).toPromise()}(),t(await cr()))}))}))}async function ur(e,t,n){const r=ar(e,!0).put({[sr]:t,value:n});return new or(r).toPromise()}function hr(e,t){const n=ar(e,!0).delete(t);return new or(n).toPromise()}class lr{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await cr()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>3)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nr()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yn._getInstance(nr()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new er(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await cr();return await ur(e,Kn,"1"),await hr(e,Kn),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>ur(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=ar(e,!1).get(t),r=await new or(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>hr(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=ar(e,!1).getAll();return new or(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}lr.type="LOCAL";const dr=lr;
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
function fr(e,t){return t?Kt(t):(lt(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */new mt(3e4,6e4);class pr extends En{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return An(e,this._buildIdpRequest())}_linkToIdToken(e,t){return An(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return An(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function gr(e){return Bn(e.auth,new pr(e),e.bypassAuthState)}function mr(e){const{auth:t,user:n}=e;return lt(n,t,"internal-error"),
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
async function(e,t,n=!1){const{auth:r}=e;if(Ve(r.app))return Promise.reject(ut(r));const i="reauthenticate";try{const s=await Ut(e,qn(r,i,t,e),n);lt(s.idToken,r,"internal-error");const o=Mt(s.idToken);lt(o,r,"internal-error");const{sub:a}=o;return lt(e.uid===a,r,"user-mismatch"),Fn._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null==s?void 0:s.code)&&ot(r,"user-mismatch"),s}}(n,new pr(e),e.bypassAuthState)}async function yr(e){const{auth:t,user:n}=e;return lt(n,t,"internal-error"),async function(e,t,n=!1){const r=await Ut(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Fn._forOperation(e,"link",r)}(n,new pr(e),e.bypassAuthState)}
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
 */class vr{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gr;case"linkViaPopup":case"linkViaRedirect":return yr;case"reauthViaPopup":case"reauthViaRedirect":return mr;default:ot(this.auth,"internal-error")}}resolve(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const wr=new mt(2e3,1e4);async function _r(e,t,n){if(Ve(e.app))return Promise.reject(at(e,"operation-not-supported-in-this-environment"));const r=dn(e);!function(e,t){if(!(t instanceof On))throw On.name!==t.constructor.name&&ot(e,"argument-error"),ct(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}(e,t);const i=fr(r,n);return new Ir(r,"signInViaPopup",t,i).executeNotNull()}class Ir extends vr{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Ir.currentPopupAction&&Ir.currentPopupAction.cancel(),Ir.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return lt(e,this.auth,"internal-error"),e}async onExecution(){ft(1===this.filter.length,"Popup operations only handle one event");const e=Zn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(at(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(at(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ir.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(at(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,wr.get())};e()}}Ir.currentPopupAction=null;
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
const Tr=new Map;class br extends vr{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Tr.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return Qt("pendingRedirect",e.config.apiKey,e.name)}(t),r=function(e){return Kt(e._redirectPersistence)}(e);if(!(await r._isAvailable()))return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Tr.set(this.auth._key(),e)}return this.bypassAuthState||Tr.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Er(e,t){Tr.set(e._key(),t)}async function Sr(e,t,n=!1){if(Ve(e.app))return Promise.reject(ut(e));const r=dn(e),i=fr(r,t),s=new br(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
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
 */class Cr{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ar(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Ar(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(at(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(kr(e))}saveEventToCache(e){this.cachedEventUids.add(kr(e)),this.lastProcessedEventTime=Date.now()}}function kr(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Ar({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const Nr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Dr=/^https?/;function Rr(e){const t=pt(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Dr.test(n))return!1;if(Nr.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
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
 */const Or=new mt(3e4,6e4);function Pr(){const e=tr().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}let Lr=null;
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
const Mr=new mt(5e3,15e3),xr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ur=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fr(e){const t=e.config;lt(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?yt(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:Be},i=Ur.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${_(r).slice(1)}`}async function Vr(e){const t=await function(e){return Lr=Lr||function(e){return new Promise(((t,n)=>{var r,i,s;function o(){Pr(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Pr(),n(at(e,"network-request-failed"))},timeout:Or.get()})}if(null===(i=null===(r=tr().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=tr().gapi)||void 0===s?void 0:s.load)){const t=`__iframefcb${Math.floor(1e6*Math.random())}`;return tr()[t]=()=>{gapi.load?o():n(at(e,"network-request-failed"))},gn(`${pn.gapiScript}?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Lr=null,e}))}(e),Lr}(e),n=tr().gapi;return lt(n,e,"internal-error"),t.open({where:document.body,url:Fr(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xr,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=at(e,"network-request-failed"),s=tr().setTimeout((()=>{r(i)}),Mr.get());function o(){tr().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
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
 */const jr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class qr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}
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
const Br=encodeURIComponent("fac");async function $r(e,t,n,r,i,s){lt(e.config.authDomain,e,"auth-domain-config-required"),lt(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Be,eventId:i};if(t instanceof On){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries({}))o[e]=t}if(t instanceof Pn){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const h of Object.keys(a))void 0===a[h]&&delete a[h];const c=await e._getAppCheckToken(),u=c?`#${Br}=${encodeURIComponent(c)}`:"";return`${function({config:e}){return e.emulator?yt(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
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
 */(e)}?${_(a).slice(1)}${u}`}const zr="webStorageSupport",Hr=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xn,this._completeRedirectFn=Sr,this._overrideRedirectResult=Er}async _openPopup(e,t,n,r){var i;return ft(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()"),function(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},jr),{width:r.toString(),height:i.toString(),top:s,left:o}),u=l().toLowerCase();n&&(a=en(u)?"_blank":n),Yt(u)&&(t=t||"http://localhost",c.scrollbars="yes");const h=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=l()){var t;return on(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}(t||"",a),new qr(null);const d=window.open(t||"",a,h);lt(d,e,"popup-blocked");try{d.focus()}catch(f){}return new qr(d)}(e,await $r(e,t,n,pt(),r),Zn())}async _openRedirect(e,t,n,r){return await this._originValidation(e),i=await $r(e,t,n,pt(),r),tr().location.href=i,new Promise((()=>{}));var i}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(ft(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Vr(e),n=new Cr(e);return t.register("authEvent",(t=>(lt(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:n.onEvent(t.authEvent)?"ACK":"ERROR"})),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(zr,{type:zr},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[zr];void 0!==i&&t(!!i),ot(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=async function(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return bt(e,"GET","/v1/projects",t)}(e);for(const r of t)try{if(Rr(r))return}catch(n){}ot(e,"unauthorized-domain")}(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return an()||Zt()||on()}};var Kr="@firebase/auth",Gr="1.10.0";
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
class Wr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){lt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
const Qr=u("authIdTokenMaxAge")||300;let Jr=null;function Xr(e=ze()){const t=Fe(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=Fe(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(v(n.getOptions(),null!=t?t:{}))return e;ot(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Hr,persistence:[dr,Qn,Xn]}),r=u("authTokenSyncURL");if(r&&"boolean"==typeof isSecureContext&&isSecureContext){const e=new URL(r,location.origin);if(location.origin===e.origin){const t=(i=e.toString(),async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>Qr)return;const r=null==t?void 0:t.token;Jr!==r&&(Jr=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){C(e).beforeAuthStateChanged(t,n)}(n,t,(()=>t(n.currentUser))),function(e){C(e).onIdTokenChanged((e=>t(e)),void 0,void 0)}(n)}}var i;const s=a("auth");return s&&function(e,t){const n=dn(e);lt(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");const r=Tn(t),{host:i,port:s}=function(e){const t=Tn(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:bn(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:bn(t)}}}(t),o={url:`${r}//${i}${null===s?"":`:${s}`}/`},a=Object.freeze({host:i,port:s,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:!1})});if(!n._canInitEmulator)return lt(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),void lt(v(o,n.config.emulator)&&v(a,n.emulatorConfig),n,"emulator-config-failed");n.config.emulator=o,n.emulatorConfig=a,n.settings.appVerificationDisabledForTesting=!0,function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&console.info,"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}(n,`http://${s}`),n}var Yr;pn={loadJS:e=>new Promise(((t,n)=>{const r=document.createElement("script");var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=at("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)})),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="},Yr="Browser",Ue(new k("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=n.options;lt(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:s,authDomain:o,clientPlatform:Yr,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cn(Yr)},c=new ln(n,r,i,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Kt);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(c,t),c}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Ue(new k("auth-internal",(e=>{const t=dn(e.getProvider("auth").getImmediate());return new Wr(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),He(Kr,Gr,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(Yr)),He(Kr,Gr,"esm2017");const Zr="@firebase/installations",ei="0.6.13",ti=`w:${ei}`,ni="FIS_v2",ri=new m("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function ii(e){return e instanceof g&&e.code.includes("request-failed")}
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
 */function si({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function oi(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function ai(e,t){const n=(await t.json()).error;return ri.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function ci({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}async function ui(e){const t=await e();return t.status>=500&&t.status<600?e():t}
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
function hi(e){return new Promise((t=>{setTimeout(t,e)}))}
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
const li=/^[cdef][\w-]{21}$/;function di(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){var t;return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22)}
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
 */(e);return li.test(t)?t:""}catch(e){return""}}function fi(e){return`${e.appName}!${e.appId}`}
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
 */const pi=new Map;function gi(e,t){const n=fi(e);mi(n,t),function(e,t){const n=(!yi&&"BroadcastChannel"in self&&(yi=new BroadcastChannel("[Firebase] FID Change"),yi.onmessage=e=>{mi(e.data.key,e.data.fid)}),yi);n&&n.postMessage({key:e,fid:t}),0===pi.size&&yi&&(yi.close(),yi=null)}(n,t)}function mi(e,t){const n=pi.get(e);if(n)for(const r of n)r(t)}let yi=null;
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
const vi="firebase-installations-store";let wi=null;function _i(){return wi||(wi=Q("firebase-installations-database",1,{upgrade:(e,t)=>{0===t&&e.createObjectStore(vi)}})),wi}async function Ii(e,t){const n=fi(e),r=(await _i()).transaction(vi,"readwrite"),i=r.objectStore(vi),s=await i.get(n);return await i.put(t,n),await r.done,s&&s.fid===t.fid||gi(e,t.fid),t}async function Ti(e){const t=fi(e),n=(await _i()).transaction(vi,"readwrite");await n.objectStore(vi).delete(t),await n.done}async function bi(e,t){const n=fi(e),r=(await _i()).transaction(vi,"readwrite"),i=r.objectStore(vi),s=await i.get(n),o=t(s);return void 0===o?await i.delete(n):await i.put(o,n),await r.done,!o||s&&s.fid===o.fid||gi(e,o.fid),o}
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
 */async function Ei(e){let t;const n=await bi(e.appConfig,(n=>{const r=function(e){return ki(e||{fid:di(),registrationStatus:0})}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(ri.create("app-offline"))};const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(e,t){try{const n=
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
 */await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=si(e),i=ci(e),s=t.getImmediate({optional:!0});if(s){const e=await s.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const o={fid:n,authVersion:ni,appId:e.appId,sdkVersion:ti},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await ui((()=>fetch(r,a)));if(c.ok){const e=await c.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:oi(e.authToken)}}throw await ai("Create Installation",c)}(e,t);return Ii(e.appConfig,n)}catch(n){throw ii(n)&&409===n.customData.serverCode?await Ti(e.appConfig):await Ii(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Si(e)}:{installationEntry:t}}(e,r);return t=i.registrationPromise,i.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function Si(e){let t=await Ci(e.appConfig);for(;1===t.registrationStatus;)await hi(100),t=await Ci(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await Ei(e);return n||t}return t}function Ci(e){return bi(e,(e=>{if(!e)throw ri.create("installation-not-found");return ki(e)}))}function ki(e){return 1===(t=e).registrationStatus&&t.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
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
 */}async function Ai({appConfig:e,heartbeatServiceProvider:t},n){const r=function(e,{fid:t}){return`${si(e)}/${t}/authTokens:generate`}
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
 */(e,n),i=function(e,{refreshToken:t}){const n=ci(e);return n.append("Authorization",function(e){return`${ni} ${e}`}(t)),n}(e,n),s=t.getImmediate({optional:!0});if(s){const e=await s.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const o={installation:{sdkVersion:ti,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await ui((()=>fetch(r,a)));if(c.ok)return oi(await c.json());throw await ai("Generate Auth Token",c)}async function Ni(e,t=!1){let n;const r=await bi(e.appConfig,(r=>{if(!Ri(r))throw ri.create("not-registered");const i=r.authToken;if(!t&&(2===(s=i).requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(s)))return r;var s;if(1===i.requestStatus)return n=async function(e,t){let n=await Di(e.appConfig);for(;1===n.authToken.requestStatus;)await hi(100),n=await Di(e.appConfig);const r=n.authToken;return 0===r.requestStatus?Ni(e,t):r}(e,t),r;{if(!navigator.onLine)throw ri.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=async function(e,t){try{const n=await Ai(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Ii(e.appConfig,r),n}catch(n){if(!ii(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Ii(e.appConfig,n)}else await Ti(e.appConfig);throw n}}(e,t),t}}));return n?await n:r.authToken}function Di(e){return bi(e,(e=>{if(!Ri(e))throw ri.create("not-registered");return 1===(t=e.authToken).requestStatus&&t.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var t;
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
 */}))}function Ri(e){return void 0!==e&&2===e.registrationStatus}function Oi(e){return ri.create("missing-app-config-values",{valueName:e})}
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
 */const Pi="installations";Ue(new k(Pi,(e=>{const t=e.getProvider("app").getImmediate(),n=
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
function(e){if(!e||!e.options)throw Oi("App Configuration");if(!e.name)throw Oi("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Oi(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:Fe(t,"heartbeat"),_delete:()=>Promise.resolve()}}),"PUBLIC")),Ue(new k("installations-internal",(e=>{const t=Fe(e.getProvider("app").getImmediate(),Pi).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:r}=await Ei(t);return r?r.catch(console.error):Ni(t).catch(console.error),n.fid}
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
 */(t),getToken:e=>async function(e,t=!1){const n=e;return await async function(e){const{registrationPromise:t}=await Ei(e);t&&await t}(n),(await Ni(n,t)).token}(t,e)}}),"PRIVATE")),He(Zr,ei),He(Zr,ei,"esm2017");
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
const Li="analytics",Mi="https://www.googletagmanager.com/gtag/js",xi=new U("@firebase/analytics"),Ui=new m("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});
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
function Fi(e){if(!e.startsWith(Mi)){const t=Ui.create("invalid-gtag-resource",{gtagURL:e});return xi.warn(t.message),""}return e}function Vi(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}const ji=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function qi(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Bi(e,t=ji,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw Ui.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Ui.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new zi;return setTimeout((async()=>{a.abort()}),6e4),$i({appId:r,apiKey:i,measurementId:s},o,a,t)}async function $i(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=ji){var s;const{appId:o,measurementId:a}=e;try{await function(e,t){return new Promise(((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener((()=>{clearTimeout(s),r(Ui.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(r,t)}catch(c){if(a)return xi.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==c?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const t=await async function(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:qi(r)},s="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(s,i);if(200!==o.status&&304!==o.status){let e="";try{const n=await o.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(a){}throw Ui.create("config-fetch-failed",{httpStatus:o.status,responseMessage:e})}return o.json()}(e);return i.deleteThrottleMetadata(o),t}catch(c){const t=c;if(!function(e){if(!(e instanceof g&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(t)){if(i.deleteThrottleMetadata(o),a)return xi.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==t?void 0:t.message}]`),{appId:o,measurementId:a};throw c}const u=503===Number(null===(s=null==t?void 0:t.customData)||void 0===s?void 0:s.httpStatus)?S(n,i.intervalMillis,30):S(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(o,h),xi.debug(`Calling attemptFetch again in ${u} millis`),$i(e,h,r,i)}}class zi{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}async function Hi(e,t,n,r,i,s,o){var a;const c=Bi(e);c.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&xi.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>xi.error(e))),t.push(c);const u=
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
async function(){if(!f())return xi.warn(Ui.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await p()}catch(e){return xi.warn(Ui.create("indexeddb-unavailable",{errorInfo:null==e?void 0:e.toString()}).message),!1}return!0}().then((e=>e?r.getId():void 0)),[h,l]=await Promise.all([c,u]);(function(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Mi)&&n.src.includes(e))return n;return null}
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
 */)(s)||function(e,t){const n=function(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy("firebase-js-sdk-policy",t)),n}(0,{createScriptURL:Fi}),r=document.createElement("script"),i=`${Mi}?l=${e}&id=${t}`;r.src=n?null==n?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}(s,h.measurementId),i("js",new Date);const d=null!==(a=null==o?void 0:o.config)&&void 0!==a?a:{};return d.origin="firebase",d.update=!0,null!=l&&(d.firebase_id=l),i("config",h.measurementId,d),h.measurementId}
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
 */class Ki{constructor(e){this.app=e}_delete(){return delete Gi[this.app.options.appId],Promise.resolve()}}let Gi={},Wi=[];const Qi={};let Ji,Xi,Yi="dataLayer",Zi=!1;function es(e,t,n){!function(){const e=[];if(d()&&e.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=Ui.create("invalid-analytics-context",{errorInfo:t});xi.warn(n.message)}}();const r=e.options.appId;if(!r)throw Ui.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw Ui.create("no-api-key");xi.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=Gi[r])throw Ui.create("already-exists",{id:r});if(!Zi){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(Yi);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,r,i){let s=function(...e){window[r].push(arguments)};return window[i]&&"function"==typeof window[i]&&(s=window[i]),window[i]=function(e,t,n,r){return async function(i,...s){try{if("event"===i){const[r,i]=s;await async function(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let e=i.send_to;Array.isArray(e)||(e=[e]);const r=await Vi(n);for(const n of e){const e=r.find((e=>e.measurementId===n)),i=e&&t[e.appId];if(!i){s=[];break}s.push(i)}}0===s.length&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){xi.error(s)}}(e,t,n,r,i)}else if("config"===i){const[i,o]=s;await async function(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const e=(await Vi(n)).find((e=>e.measurementId===i));e&&await t[e.appId]}}catch(a){xi.error(a)}e("config",i,s)}(e,t,n,r,i,o)}else if("consent"===i){const[t,n]=s;e("consent",t,n)}else if("get"===i){const[t,n,r]=s;e("get",t,n,r)}else if("set"===i){const[t]=s;e("set",t)}else e(i,...s)}catch(o){xi.error(o)}}}(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}(Gi,Wi,Qi,Yi,"gtag");Xi=e,Ji=t,Zi=!0}return Gi[r]=Hi(e,Wi,Qi,t,Ji,Yi,n),new Ki(e)}function ts(e=ze()){const t=Fe(e=C(e),Li);return t.isInitialized()?t.getImmediate():function(e,t={}){const n=Fe(e,Li);if(n.isInitialized()){const e=n.getImmediate();if(v(t,n.getOptions()))return e;throw Ui.create("already-initialized")}return n.initialize({options:t})}(e)}const ns="@firebase/analytics",rs="0.10.12";Ue(new k(Li,((e,{options:t})=>es(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t)),"PUBLIC")),Ue(new k("analytics-internal",(function(e){try{const t=e.getProvider(Li).getImmediate();return{logEvent:(e,n,r)=>function(e,t,n,r){e=C(e),async function(e,t,n,r,i){if(i&&i.global)e("event",n,r);else{const i=await t;e("event",n,Object.assign(Object.assign({},r),{send_to:i}))}}(Xi,Gi[e.app.options.appId],t,n,r).catch((e=>xi.error(e)))}(t,e,n,r)}}catch(t){throw Ui.create("interop-component-reg-failed",{reason:t})}}),"PRIVATE")),He(ns,rs),He(ns,rs,"esm2017"),
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
He("firebase","11.6.0","app");var is,ss,os="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e;
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */function t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function n(e,t,n){n||(n=0);var r=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;o=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=n+(o<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(i^s))+r[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(i^s))+r[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^n&(i^s))+r[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^t&(n^i))+r[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(t^n))+r[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(s^t))+r[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=t+(i^s&(n^i))+r[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(n^i))+r[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(n^i))+r[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^s&(n^i))+r[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(t^n))+r[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(s^t))+r[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^t&(i^s))+r[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=t+(n^i^s)+r[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^s)+r[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^s)+r[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^s)+r[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=s+(t^n^i)+r[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^t^n)+r[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^t)+r[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=t+(i^(n|~s))+r[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~n))+r[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~t))+r[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=t+(i^(n|~s))+r[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~n))+r[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~t))+r[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=t+(i^(n|~s))+r[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(s|~n))+r[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~t))+r[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((s=(t=n+((o=t+(i^(n|~s))+r[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(t|~i))+r[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((i=s+((o=i+(t^(s|~n))+r[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function r(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}!function(e,t){function n(){}n.prototype=t.prototype,e.D=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.C=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}(t,(function(){this.blockSize=-1})),t.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},t.prototype.u=function(e,t){void 0===t&&(t=e.length);for(var r=t-this.blockSize,i=this.B,s=this.h,o=0;o<t;){if(0==s)for(;o<=r;)n(this,e,o),o+=this.blockSize;if("string"==typeof e){for(;o<t;)if(i[s++]=e.charCodeAt(o++),s==this.blockSize){n(this,i),s=0;break}}else for(;o<t;)if(i[s++]=e[o++],s==this.blockSize){n(this,i),s=0;break}}this.h=s,this.o+=t},t.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.u(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var i={};function s(e){return-128<=e&&128>e?function(e){var t=i;return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=function(e){return new r([0|e],0>e?-1:0)}(e)}(e):new r([0|e],0>e?-1:0)}function o(e){if(isNaN(e)||!isFinite(e))return a;if(0>e)return d(o(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=4294967296;return new r(t,0)}var a=s(0),c=s(1),u=s(16777216);function h(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function l(e){return-1==e.h}function d(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new r(n,~e.h).add(c)}function f(e,t){return e.add(d(t))}function p(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function g(e,t){this.g=e,this.h=t}function m(e,t){if(h(t))throw Error("division by zero");if(h(e))return new g(a,a);if(l(e))return t=m(d(e),t),new g(d(t.g),d(t.h));if(l(t))return t=m(e,d(t)),new g(d(t.g),t.h);if(30<e.g.length){if(l(e)||l(t))throw Error("slowDivide_ only works with positive integers.");for(var n=c,r=t;0>=r.l(e);)n=y(n),r=y(r);var i=v(n,1),s=v(r,1);for(r=v(r,2),n=v(n,2);!h(r);){var u=s.add(r);0>=u.l(e)&&(i=i.add(n),s=u),r=v(r,1),n=v(n,1)}return t=f(e,i.j(t)),new g(i,t)}for(i=a;0<=e.l(t);){for(n=Math.max(1,Math.floor(e.m()/t.m())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),u=(s=o(n)).j(t);l(u)||0<u.l(e);)u=(s=o(n-=r)).j(t);h(s)&&(s=c),i=i.add(s),e=f(e,u)}return new g(i,e)}function y(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.i(i)<<1|e.i(i-1)>>>31;return new r(n,e.h)}function v(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,s=[],o=0;o<i;o++)s[o]=0<t?e.i(o+n)>>>t|e.i(o+n+1)<<32-t:e.i(o+n);return new r(s,e.h)}(e=r.prototype).m=function(){if(l(this))return-d(this).m();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.i(n);e+=(0<=r?r:4294967296+r)*t,t*=4294967296}return e},e.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(h(this))return"0";if(l(this))return"-"+d(this).toString(e);for(var t=o(Math.pow(e,6)),n=this,r="";;){var i=m(n,t).g,s=((0<(n=f(n,i.j(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(h(n=i))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},e.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return l(e=f(this,e))?-1:h(e)?0:1},e.abs=function(){return l(this)?d(this):this},e.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,s=0;s<=t;s++){var o=i+(65535&this.i(s))+(65535&e.i(s)),a=(o>>>16)+(this.i(s)>>>16)+(e.i(s)>>>16);i=a>>>16,o&=65535,a&=65535,n[s]=a<<16|o}return new r(n,-2147483648&n[n.length-1]?-1:0)},e.j=function(e){if(h(this)||h(e))return a;if(l(this))return l(e)?d(this).j(d(e)):d(d(this).j(e));if(l(e))return d(this.j(d(e)));if(0>this.l(u)&&0>e.l(u))return o(this.m()*e.m());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<e.g.length;s++){var c=this.i(i)>>>16,f=65535&this.i(i),g=e.i(s)>>>16,m=65535&e.i(s);n[2*i+2*s]+=f*m,p(n,2*i+2*s),n[2*i+2*s+1]+=c*m,p(n,2*i+2*s+1),n[2*i+2*s+1]+=f*g,p(n,2*i+2*s+1),n[2*i+2*s+2]+=c*g,p(n,2*i+2*s+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new r(n,0)},e.A=function(e){return m(this,e).h},e.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)&e.i(i);return new r(n,this.h&e.h)},e.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)|e.i(i);return new r(n,this.h|e.h)},e.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)^e.i(i);return new r(n,this.h^e.h)},t.prototype.digest=t.prototype.v,t.prototype.reset=t.prototype.s,t.prototype.update=t.prototype.u,ss=t,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.A,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=o,r.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return d(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=o(Math.pow(n,8)),i=a,s=0;s<t.length;s+=8){var c=Math.min(8,t.length-s),u=parseInt(t.substring(s,s+c),n);8>c?(c=o(Math.pow(n,c)),i=i.j(c).add(o(u))):i=(i=i.j(r)).add(o(u))}return i},is=r}).apply(void 0!==os?os:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var as,cs,us,hs,ls,ds,fs,ps,gs="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e,t="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){return e==Array.prototype||e==Object.prototype||(e[t]=n.value),e},n=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof gs&&gs];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);!function(e,r){if(r)e:{var i=n;e=e.split(".");for(var s=0;s<e.length-1;s++){var o=e[s];if(!(o in i))break e;i=i[o]}(r=r(s=i[e=e[e.length-1]]))!=s&&null!=r&&t(i,e,{configurable:!0,writable:!0,value:r})}}("Array.prototype.values",(function(e){return e||function(){return function(e,t){e instanceof String&&(e+="");var n=0,r=!1,i={next:function(){if(!r&&n<e.length){var i=n++;return{value:t(0,e[i]),done:!1}}return r=!0,{done:!0,value:void 0}}};return i[Symbol.iterator]=function(){return i},i}(this,(function(e,t){return t}))}}));
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
var r=r||{},i=this||self;function s(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function o(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function a(e,t,n){return e.call.apply(e.bind,arguments)}function c(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function u(e,t,n){return(u=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?a:c).apply(null,arguments)}function h(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function l(e,t){function n(){}n.prototype=t.prototype,e.aa=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Qb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function d(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function f(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(s(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function p(e){return/^[\s\xa0]*$/.test(e)}function g(){var e=i.navigator;return e&&(e=e.userAgent)?e:""}function m(e){return m[" "](e),e}m[" "]=function(){};var y=!(-1==g().indexOf("Gecko")||-1!=g().toLowerCase().indexOf("webkit")&&-1==g().indexOf("Edge")||-1!=g().indexOf("Trident")||-1!=g().indexOf("MSIE")||-1!=g().indexOf("Edge"));function v(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function w(e){const t={};for(const n in e)t[n]=e[n];return t}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<_.length;t++)n=_[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function T(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function b(e){i.setTimeout((()=>{throw e}),0)}function E(){var e=N;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var S=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new C),(e=>e.reset()));class C{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let k,A=!1,N=new class{constructor(){this.h=this.g=null}add(e,t){const n=S.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},D=()=>{const e=i.Promise.resolve(void 0);k=()=>{e.then(R)}};var R=()=>{for(var e;e=E();){try{e.h.call(e.g)}catch(n){b(n)}var t=S;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}A=!1};function O(){this.s=this.s,this.C=this.C}function P(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}O.prototype.s=!1,O.prototype.ma=function(){this.s||(this.s=!0,this.N())},O.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},P.prototype.h=function(){this.defaultPrevented=!0};var L=function(){if(!i.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};i.addEventListener("test",e,t),i.removeEventListener("test",e,t)}catch(n){}return e}();function M(e,t){if(P.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(y){e:{try{m(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:x[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&M.aa.h.call(this)}}l(M,P);var x={2:"touch",3:"pen",4:"mouse"};M.prototype.h=function(){M.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var U="closure_listenable_"+(1e6*Math.random()|0),F=0;function V(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++F,this.da=this.fa=!1}function j(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function q(e){this.src=e,this.g={},this.h=0}function B(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=Array.prototype.indexOf.call(i,t,void 0);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(j(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function $(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.da&&s.listener==t&&s.capture==!!n&&s.ha==r)return i}return-1}q.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=$(e,t,r,i);return-1<o?(t=e[o],n||(t.fa=!1)):((t=new V(t,this.src,s,!!r,i)).fa=n,e.push(t)),t};var z="closure_lm_"+(1e6*Math.random()|0),H={};function K(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)K(e,t[s],n,r,i);return null}return n=Z(n),e&&e[U]?e.K(t,n,!!o(r)&&!!r.capture,i):function(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var a=o(i)?!!i.capture:!!i,c=X(e);if(c||(e[z]=c=new q(e)),(n=c.add(t,n,r,a,s)).proxy)return n;if(r=function(){const e=J;return function t(n){return e.call(t.src,t.listener,n)}}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)L||(i=a),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Q(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}(e,t,n,!1,r,i)}function G(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)G(e,t[s],n,r,i);else r=o(r)?!!r.capture:!!r,n=Z(n),e&&e[U]?(e=e.i,(t=String(t).toString())in e.g&&-1<(n=$(s=e.g[t],n,r,i))&&(j(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--))):e&&(e=X(e))&&(t=e.g[t.toString()],e=-1,t&&(e=$(t,n,r,i)),(n=-1<e?t[e]:null)&&W(n))}function W(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[U])B(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Q(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=X(t))?(B(n,e),0==n.h&&(n.src=null,t[z]=null)):j(e)}}}function Q(e){return e in H?H[e]:H[e]="on"+e}function J(e,t){if(e.da)e=!0;else{t=new M(t,this);var n=e.listener,r=e.ha||e.src;e.fa&&W(e),e=n.call(r,t)}return e}function X(e){return(e=e[z])instanceof q?e:null}var Y="__closure_events_fn_"+(1e9*Math.random()>>>0);function Z(e){return"function"==typeof e?e:(e[Y]||(e[Y]=function(t){return e.handleEvent(t)}),e[Y])}function ee(){O.call(this),this.i=new q(this),this.M=this,this.F=null}function te(e,t){var n,r=e.F;if(r)for(n=[];r;r=r.F)n.push(r);if(e=e.M,r=t.type||t,"string"==typeof t)t=new P(t,e);else if(t instanceof P)t.target=t.target||e;else{var i=t;I(t=new P(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=ne(o,r,!0,t)&&i}if(i=ne(o=t.g=e,r,!0,t)&&i,i=ne(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=ne(o=t.g=n[s],r,!1,t)&&i}function ne(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.da&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.fa&&B(e.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}function re(e,t,n){if("function"==typeof e)n&&(e=u(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=u(e.handleEvent,e)}return 2147483647<Number(t)?-1:i.setTimeout(e,t||0)}function ie(e){e.g=re((()=>{e.g=null,e.i&&(e.i=!1,ie(e))}),e.l);const t=e.h;e.h=null,e.m.apply(null,t)}l(ee,O),ee.prototype[U]=!0,ee.prototype.removeEventListener=function(e,t,n,r){G(this,e,t,n,r)},ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)j(n[r]);delete t.g[e],t.h--}}this.F=null},ee.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ee.prototype.L=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};class se extends O{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:ie(this)}N(){super.N(),this.g&&(i.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oe(e){O.call(this),this.h=e,this.g={}}l(oe,O);var ae=[];function ce(e){v(e.g,(function(e,t){this.g.hasOwnProperty(t)&&W(e)}),e),e.g={}}oe.prototype.N=function(){oe.aa.N.call(this),ce(this)},oe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ue=i.JSON.stringify,he=i.JSON.parse,le=class{stringify(e){return i.JSON.stringify(e,void 0)}parse(e){return i.JSON.parse(e,void 0)}};function de(){}function fe(e){return e.h||(e.h=e.i())}function pe(){}de.prototype.h=null;var ge={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function me(){P.call(this,"d")}function ye(){P.call(this,"c")}l(me,P),l(ye,P);var ve={},we=null;function _e(){return we=we||new ee}function Ie(e){P.call(this,ve.La,e)}function Te(e){const t=_e();te(t,new Ie(t))}function be(e,t){P.call(this,ve.STAT_EVENT,e),this.stat=t}function Ee(e){const t=_e();te(t,new be(t,e))}function Se(e,t){P.call(this,ve.Ma,e),this.size=t}function Ce(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return i.setTimeout((function(){e()}),t)}function ke(){this.g=!0}function Ae(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return ue(n)}catch(a){return t}}(e,n)+(r?" "+r:"")}))}ve.La="serverreachability",l(Ie,P),ve.STAT_EVENT="statevent",l(be,P),ve.Ma="timingevent",l(Se,P),ke.prototype.xa=function(){this.g=!1},ke.prototype.info=function(){};var Ne,De={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Re={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function Oe(){}function Pe(e,t,n,r){this.j=e,this.i=t,this.l=n,this.R=r||1,this.U=new oe(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Le}function Le(){this.i=null,this.g="",this.h=!1}l(Oe,de),Oe.prototype.g=function(){return new XMLHttpRequest},Oe.prototype.i=function(){return{}},Ne=new Oe;var Me={},xe={};function Ue(e,t,n){e.L=1,e.v=ut(it(t)),e.m=n,e.P=!0,Fe(e,null)}function Fe(e,t){e.F=Date.now(),qe(e),e.A=it(e.v);var n=e.A,r=e.R;Array.isArray(r)||(r=[String(r)]),Tt(n.i,"t",r),e.C=0,n=e.j.J,e.h=new Le,e.g=hn(e.j,n?t:null,!e.m),0<e.O&&(e.M=new se(u(e.Y,e,e.g),e.O)),t=e.U,n=e.g,r=e.ca;var i="readystatechange";Array.isArray(i)||(i&&(ae[0]=i.toString()),i=ae);for(var s=0;s<i.length;s++){var o=K(n,i[s],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}t=e.H?w(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Te(),function(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}(e.i,e.u,e.A,e.l,e.R,e.m)}function Ve(e){return!!e.g&&"GET"==e.u&&2!=e.L&&e.j.Ca}function je(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?xe:(n=Number(t.substring(n,r)),isNaN(n)?Me:(r+=1)+n>t.length?xe:(t=t.slice(r,r+n),e.C=r+n,t))}function qe(e){e.S=Date.now()+e.I,Be(e,e.I)}function Be(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Ce(u(e.ba,e),t)}function $e(e){e.B&&(i.clearTimeout(e.B),e.B=null)}function ze(e){0==e.j.G||e.J||sn(e.j,e)}function He(e){$e(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,ce(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function Ke(e,t){try{var n=e.j;if(0!=n.G&&(n.g==e||Xe(n.h,e)))if(!e.K&&Xe(n.h,e)&&3==n.G){try{var r=n.Da.g.parse(t)}catch(h){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;rn(n),Gt(n)}en(n),Ee(18)}}else n.za=i[1],0<n.za-n.T&&37500>i[2]&&n.F&&0==n.v&&!n.C&&(n.C=Ce(u(n.Za,n),6e3));if(1>=Je(n.h)&&n.ca){try{n.ca()}catch(h){}n.ca=void 0}}else an(n,11)}else if((e.K||n.g==e)&&rn(n),!p(t))for(i=n.Da.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.K=u[1],n.ia=u[2];const t=u[3];null!=t&&(n.la=t,n.j.info("VER="+n.la));const i=u[4];null!=i&&(n.Aa=i,n.j.info("SVER="+n.Aa));const h=u[5];null!=h&&"number"==typeof h&&0<h&&(r=1.5*h,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const l=e.g;if(l){const e=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Ye(s,s.h),s.h=null))}if(r.D){const e=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.ya=e,ct(r.I,r.D,e))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-e.F,n.j.info("Handshake RTT: "+n.R+"ms"));var o=e;if((r=n).qa=un(r,r.J?r.ia:null,r.W),o.K){Ze(r.h,o);var a=o,c=r.L;c&&(a.I=c),a.B&&($e(a),qe(a)),r.g=o}else Zt(r);0<n.i.length&&Qt(n)}else"stop"!=u[0]&&"close"!=u[0]||an(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?an(n,7):Kt(n):"noop"!=u[0]&&n.l&&n.l.ta(u),n.v=0)}Te()}catch(h){}}Pe.prototype.ca=function(e){e=e.target;const t=this.M;t&&3==Bt(e)?t.j():this.Y(e)},Pe.prototype.Y=function(e){try{if(e==this.g)e:{const d=Bt(this.g);var t=this.g.Ba();if(this.g.Z(),!(3>d)&&(3!=d||this.g&&(this.h.h||this.g.oa()||$t(this.g)))){this.J||4!=d||7==t||Te(),$e(this);var n=this.g.Z();this.X=n;t:if(Ve(this)){var r=$t(this.g);e="";var s=r.length,o=4==Bt(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){He(this),ze(this);var a="";break t}this.h.i=new i.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:!(o&&t==s-1)});r.length=0,this.h.g+=e,this.C=0,a=this.h.g}else a=this.g.oa();if(this.o=200==n,function(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}(this.i,this.u,this.A,this.l,this.R,d,n),this.o){if(this.T&&!this.K){t:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!p(c)){var h=c;break t}}h=null}if(!(n=h)){this.o=!1,this.s=3,Ee(12),He(this),ze(this);break e}Ae(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ke(this,n)}if(this.P){let e;for(n=!0;!this.J&&this.C<a.length;){if(e=je(this,a),e==xe){4==d&&(this.s=4,Ee(14),n=!1),Ae(this.i,this.l,null,"[Incomplete Response]");break}if(e==Me){this.s=4,Ee(15),Ae(this.i,this.l,a,"[Invalid Chunk]"),n=!1;break}Ae(this.i,this.l,e,null),Ke(this,e)}if(Ve(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=d||0!=a.length||this.h.h||(this.s=1,Ee(16),n=!1),this.o=this.o&&n,n){if(0<a.length&&!this.W){this.W=!0;var l=this.j;l.g==this&&l.ba&&!l.M&&(l.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),tn(l),l.M=!0,Ee(11))}}else Ae(this.i,this.l,a,"[Invalid Chunked Response]"),He(this),ze(this)}else Ae(this.i,this.l,a,null),Ke(this,a);4==d&&He(this),this.o&&!this.J&&(4==d?sn(this.j,this):(this.o=!1,qe(this)))}else(function(e){const t={};e=(e.g&&2<=Bt(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(p(e[r]))continue;var n=T(e[r]);const i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,(function(e){return e.join(", ")}))})(this.g),400==n&&0<a.indexOf("Unknown SID")?(this.s=3,Ee(12)):(this.s=0,Ee(13)),He(this),ze(this)}}}catch(d){}},Pe.prototype.cancel=function(){this.J=!0,He(this)},Pe.prototype.ba=function(){this.B=null;const e=Date.now();0<=e-this.S?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.i,this.A),2!=this.L&&(Te(),Ee(17)),He(this),this.s=2,ze(this)):Be(this,this.S-e)};var Ge=class{constructor(e,t){this.g=e,this.map=t}};function We(e){this.l=e||10,e=i.PerformanceNavigationTiming?0<(e=i.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(i.chrome&&i.chrome.loadTimes&&i.chrome.loadTimes()&&i.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Qe(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Je(e){return e.h?1:e.g?e.g.size:0}function Xe(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Ye(e,t){e.g?e.g.add(t):e.h=t}function Ze(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function et(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return d(e.i)}function tt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(s(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(s(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}(e),r=function(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(s(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,o=0;o<i;o++)t.call(void 0,r[o],n&&n[o],e)}We.prototype.cancel=function(){if(this.i=et(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var nt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rt(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof rt){this.h=e.h,st(this,e.j),this.o=e.o,this.g=e.g,ot(this,e.s),this.l=e.l;var t=e.i,n=new vt;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),at(this,n),this.m=e.m}else e&&(t=String(e).match(nt))?(this.h=!1,st(this,t[1]||"",!0),this.o=ht(t[2]||""),this.g=ht(t[3]||"",!0),ot(this,t[4]),this.l=ht(t[5]||"",!0),at(this,t[6]||"",!0),this.m=ht(t[7]||"")):(this.h=!1,this.i=new vt(null,this.h))}function it(e){return new rt(e)}function st(e,t,n){e.j=n?ht(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function ot(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function at(e,t,n){t instanceof vt?(e.i=t,function(e,t){t&&!e.j&&(wt(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(_t(this,t),Tt(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=lt(t,mt)),e.i=new vt(t,e.h))}function ct(e,t,n){e.i.set(t,n)}function ut(e){return ct(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ht(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function lt(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,dt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function dt(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}rt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(lt(t,ft,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(lt(t,ft,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.s)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(lt(n,"/"==n.charAt(0)?gt:pt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",lt(n,yt)),e.join("")};var ft=/[#\/\?@]/g,pt=/[#\?:]/g,gt=/[#\?]/g,mt=/[#\?@]/g,yt=/#/g;function vt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function wt(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function _t(e,t){wt(e),t=bt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function It(e,t){return wt(e),t=bt(e,t),e.g.has(t)}function Tt(e,t,n){_t(e,t),0<n.length&&(e.i=null,e.g.set(bt(e,t),d(n)),e.h+=n.length)}function bt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Et(e,t,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(s){}}function St(){this.g=new le}function Ct(e,t,n){const r=n||"";try{tt(e,(function(e,n){let i=e;o(e)&&(i=ue(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function kt(e){this.l=e.Ub||null,this.j=e.eb||!1}function At(e,t){ee.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function Nt(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function Dt(e){e.readyState=4,e.l=null,e.j=null,e.v=null,Rt(e)}function Rt(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function Ot(e){let t="";return v(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Pt(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Ot(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):ct(e,t,n))}function Lt(e){ee.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(e=vt.prototype).add=function(e,t){wt(this),this.i=null,e=bt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},e.forEach=function(e,t){wt(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},e.na=function(){wt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},e.V=function(e){wt(this);let t=[];if("string"==typeof e)It(this,e)&&(t=t.concat(this.g.get(bt(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},e.set=function(e,t){return wt(this),this.i=null,It(this,e=bt(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e&&0<(e=this.V(e)).length?String(e[0]):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.V(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")},l(kt,de),kt.prototype.g=function(){return new At(this.l,this.j)},kt.prototype.i=function(e){return function(){return e}}({}),l(At,ee),(e=At.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,Rt(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||i).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Dt(this)),this.readyState=0},e.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Rt(this)),this.g&&(this.readyState=3,Rt(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==i.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Nt(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))},e.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Dt(this):Rt(this),3==this.readyState&&Nt(this)}},e.Ra=function(e){this.g&&(this.response=this.responseText=e,Dt(this))},e.Qa=function(e){this.g&&(this.response=e,Dt(this))},e.ga=function(){this.g&&Dt(this)},e.setRequestHeader=function(e,t){this.u.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(At.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),l(Lt,ee);var Mt=/^https?$/i,xt=["POST","PUT"];function Ut(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,Ft(e),jt(e)}function Ft(e){e.A||(e.A=!0,te(e,"complete"),te(e,"error"))}function Vt(e){if(e.h&&void 0!==r&&(!e.v[1]||4!=Bt(e)||2!=e.Z()))if(e.u&&4==Bt(e))re(e.Ea,0,e);else if(te(e,"readystatechange"),4==Bt(e)){e.h=!1;try{const r=e.Z();e:switch(r){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var s;if(s=0===r){var o=String(e.D).match(nt)[1]||null;!o&&i.self&&i.self.location&&(o=i.self.location.protocol.slice(0,-1)),s=!Mt.test(o?o.toLowerCase():"")}n=s}if(n)te(e,"complete"),te(e,"success");else{e.m=6;try{var a=2<Bt(e)?e.g.statusText:""}catch(c){a=""}e.l=a+" ["+e.Z()+"]",Ft(e)}}finally{jt(e)}}}function jt(e,t){if(e.g){qt(e);const r=e.g,i=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||te(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function qt(e){e.I&&(i.clearTimeout(e.I),e.I=null)}function Bt(e){return e.g?e.g.readyState:0}function $t(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function zt(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Ht(e){this.Aa=0,this.i=[],this.j=new ke,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=zt("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=zt("baseRetryDelayMs",5e3,e),this.cb=zt("retryDelaySeedMs",1e4,e),this.Wa=zt("forwardChannelMaxRetries",2,e),this.wa=zt("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new We(e&&e.concurrentRequestLimit),this.Da=new St,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function Kt(e){if(Wt(e),3==e.G){var t=e.U++,n=it(e.I);if(ct(n,"SID",e.K),ct(n,"RID",t),ct(n,"TYPE","terminate"),Xt(e,n),(t=new Pe(e,e.j,t)).L=2,t.v=ut(it(n)),n=!1,i.navigator&&i.navigator.sendBeacon)try{n=i.navigator.sendBeacon(t.v.toString(),"")}catch(r){}!n&&i.Image&&((new Image).src=t.v,n=!0),n||(t.g=hn(t.j,null),t.g.ea(t.v)),t.F=Date.now(),qe(t)}cn(e)}function Gt(e){e.g&&(tn(e),e.g.cancel(),e.g=null)}function Wt(e){Gt(e),e.u&&(i.clearTimeout(e.u),e.u=null),rn(e),e.h.cancel(),e.s&&("number"==typeof e.s&&i.clearTimeout(e.s),e.s=null)}function Qt(e){if(!Qe(e.h)&&!e.s){e.s=!0;var t=e.Ga;k||D(),A||(k(),A=!0),N.add(t,e),e.B=0}}function Jt(e,t){var n;n=t?t.l:e.U++;const r=it(e.I);ct(r,"SID",e.K),ct(r,"RID",n),ct(r,"AID",e.T),Xt(e,r),e.m&&e.o&&Pt(r,e.m,e.o),n=new Pe(e,e.j,n,e.B+1),null===e.m&&(n.H=e.o),t&&(e.i=t.D.concat(e.i)),t=Yt(e,n,1e3),n.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),Ye(e.h,n),Ue(n,r,t)}function Xt(e,t){e.H&&v(e.H,(function(e,n){ct(t,n,e)})),e.l&&tt({},(function(e,n){ct(t,n,e)}))}function Yt(e,t,n){n=Math.min(e.i.length,n);var r=e.l?u(e.l.Na,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=i[a].g;const c=i[a].map;if(n-=t,0>n)t=Math.max(0,i[a].g-100),o=!1;else try{Ct(c,e,"req"+n+"_")}catch(s){r&&r(c)}}if(o){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function Zt(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;k||D(),A||(k(),A=!0),N.add(t,e),e.v=0}}function en(e){return!(e.g||e.u||3<=e.v||(e.Y++,e.u=Ce(u(e.Fa,e),on(e,e.v)),e.v++,0))}function tn(e){null!=e.A&&(i.clearTimeout(e.A),e.A=null)}function nn(e){e.g=new Pe(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=it(e.qa);ct(t,"RID","rpc"),ct(t,"SID",e.K),ct(t,"AID",e.T),ct(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&ct(t,"TO",e.ja),ct(t,"TYPE","xmlhttp"),Xt(e,t),e.m&&e.o&&Pt(t,e.m,e.o),e.L&&(e.g.I=e.L);var n=e.g;e=e.ia,n.L=1,n.v=ut(it(t)),n.m=null,n.P=!0,Fe(n,e)}function rn(e){null!=e.C&&(i.clearTimeout(e.C),e.C=null)}function sn(e,t){var n=null;if(e.g==t){rn(e),tn(e),e.g=null;var r=2}else{if(!Xe(e.h,t))return;n=t.D,Ze(e.h,t),r=1}if(0!=e.G)if(t.o)if(1==r){n=t.m?t.m.length:0,t=Date.now()-t.F;var i=e.B;te(r=_e(),new Se(r,n)),Qt(e)}else Zt(e);else if(3==(i=t.s)||0==i&&0<t.X||!(1==r&&function(e,t){return!(Je(e.h)>=e.h.j-(e.s?1:0)||(e.s?(e.i=t.D.concat(e.i),0):1==e.G||2==e.G||e.B>=(e.Va?0:e.Wa)||(e.s=Ce(u(e.Ga,e,t),on(e,e.B)),e.B++,0)))}(e,t)||2==r&&en(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:an(e,5);break;case 4:an(e,10);break;case 3:an(e,6);break;default:an(e,2)}}function on(e,t){let n=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(n*=2),n*t}function an(e,t){if(e.j.info("Error code "+t),2==t){var n=u(e.fb,e),r=e.Xa;const t=!r;r=new rt(r||"//www.google.com/images/cleardot.gif"),i.location&&"http"==i.location.protocol||st(r,"https"),ut(r),t?function(e,t){const n=new ke;if(i.Image){const r=new Image;r.onload=h(Et,n,"TestLoadImage: loaded",!0,t,r),r.onerror=h(Et,n,"TestLoadImage: error",!1,t,r),r.onabort=h(Et,n,"TestLoadImage: abort",!1,t,r),r.ontimeout=h(Et,n,"TestLoadImage: timeout",!1,t,r),i.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(r.toString(),n):function(e,t){new ke;const n=new AbortController,r=setTimeout((()=>{n.abort(),Et(0,0,!1,t)}),1e4);fetch(e,{signal:n.signal}).then((e=>{clearTimeout(r),e.ok?Et(0,0,!0,t):Et(0,0,!1,t)})).catch((()=>{clearTimeout(r),Et(0,0,!1,t)}))}(r.toString(),n)}else Ee(2);e.G=0,e.l&&e.l.sa(t),cn(e),Wt(e)}function cn(e){if(e.G=0,e.ka=[],e.l){const t=et(e.h);0==t.length&&0==e.i.length||(f(e.ka,t),f(e.ka,e.i),e.h.i.length=0,d(e.i),e.i.length=0),e.l.ra()}}function un(e,t,n){var r=n instanceof rt?it(n):new rt(n);if(""!=r.g)t&&(r.g=t+"."+r.g),ot(r,r.s);else{var s=i.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var o=new rt(null);r&&st(o,r),t&&(o.g=t),s&&ot(o,s),n&&(o.l=n),r=o}return n=e.D,t=e.ya,n&&t&&ct(r,n,t),ct(r,"VER",e.la),Xt(e,r),r}function hn(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=e.Ca&&!e.pa?new Lt(new kt({eb:n})):new Lt(e.pa)).Ha(e.J),t}function ln(){}function dn(){}function fn(e,t){ee.call(this),this.g=new Ht(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!p(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!p(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new mn(this)}function pn(e){me.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function gn(){ye.call(this),this.status=1}function mn(e){this.g=e}(e=Lt.prototype).Ha=function(e){this.J=e},e.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ne.g(),this.v=this.o?fe(this.o):fe(Ne),this.g.onreadystatechange=u(this.Ea,this);try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(o){return void Ut(this,o)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),s=i.FormData&&e instanceof i.FormData,!(0<=Array.prototype.indexOf.call(xt,t,void 0))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,a]of n)this.g.setRequestHeader(i,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{qt(this),this.u=!0,this.g.send(e),this.u=!1}catch(o){Ut(this,o)}},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,te(this,"complete"),te(this,"abort"),jt(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),jt(this,!0)),Lt.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?Vt(this):this.bb())},e.bb=function(){Vt(this)},e.isActive=function(){return!!this.g},e.Z=function(){try{return 2<Bt(this)?this.g.status:-1}catch(e){return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},e.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),he(t)}},e.Ba=function(){return this.m},e.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(e=Ht.prototype).la=8,e.G=1,e.connect=function(e,t,n,r){Ee(0),this.W=e,this.H=t||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=un(this,null,this.W),Qt(this)},e.Ga=function(e){if(this.s)if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new Pe(this,this.j,e);let s=this.o;if(this.S&&(s?(s=w(s),I(s,this.S)):s=this.S),null!==this.m||this.O||(i.H=s,s=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Yt(this,i,t),ct(n=it(this.I),"RID",e),ct(n,"CVER",22),this.D&&ct(n,"X-HTTP-Session-Id",this.D),Xt(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Ot(s)))+"&"+t:this.m&&Pt(n,this.m,s)),Ye(this.h,i),this.Ua&&ct(n,"TYPE","init"),this.P?(ct(n,"$req",t),ct(n,"SID","null"),i.T=!0,Ue(i,n,null)):Ue(i,n,t),this.G=2}}else 3==this.G&&(e?Jt(this,e):0==this.i.length||Qe(this.h)||Jt(this))},e.Fa=function(){if(this.u=null,nn(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=Ce(u(this.ab,this),e)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ee(10),Gt(this),nn(this))},e.Za=function(){null!=this.C&&(this.C=null,Gt(this),en(this),Ee(19))},e.fb=function(e){e?(this.j.info("Successfully pinged google.com"),Ee(2)):(this.j.info("Failed to ping google.com"),Ee(1))},e.isActive=function(){return!!this.l&&this.l.isActive(this)},(e=ln.prototype).ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){},dn.prototype.g=function(e,t){return new fn(e,t)},l(fn,ee),fn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},fn.prototype.close=function(){Kt(this.g)},fn.prototype.o=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.u&&((n={}).__data__=ue(e),e=n);t.i.push(new Ge(t.Ya++,e)),3==t.G&&Qt(t)},fn.prototype.N=function(){this.g.l=null,delete this.j,Kt(this.g),delete this.g,fn.aa.N.call(this)},l(pn,me),l(gn,ye),l(mn,ln),mn.prototype.ua=function(){te(this.g,"a")},mn.prototype.ta=function(e){te(this.g,new pn(e))},mn.prototype.sa=function(e){te(this.g,new gn)},mn.prototype.ra=function(){te(this.g,"b")},dn.prototype.createWebChannel=dn.prototype.g,fn.prototype.send=fn.prototype.o,fn.prototype.open=fn.prototype.m,fn.prototype.close=fn.prototype.close,ps=function(){return new dn},fs=function(){return _e()},ds=ve,ls={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},De.NO_ERROR=0,De.TIMEOUT=8,De.HTTP_ERROR=6,hs=De,Re.COMPLETE="complete",us=Re,pe.EventType=ge,ge.OPEN="a",ge.CLOSE="b",ge.ERROR="c",ge.MESSAGE="d",ee.prototype.listen=ee.prototype.K,cs=pe,Lt.prototype.listenOnce=Lt.prototype.L,Lt.prototype.getLastError=Lt.prototype.Ka,Lt.prototype.getLastErrorCode=Lt.prototype.Ba,Lt.prototype.getStatus=Lt.prototype.Z,Lt.prototype.getResponseJson=Lt.prototype.Oa,Lt.prototype.getResponseText=Lt.prototype.oa,Lt.prototype.send=Lt.prototype.ea,Lt.prototype.setWithCredentials=Lt.prototype.Ha,as=Lt}).apply(void 0!==gs?gs:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});const ms="@firebase/firestore",ys="4.7.10";
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
 */class vs{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}vs.UNAUTHENTICATED=new vs(null),vs.GOOGLE_CREDENTIALS=new vs("google-credentials-uid"),vs.FIRST_PARTY=new vs("first-party-uid"),vs.MOCK_USER=new vs("mock-user");
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
let ws="11.5.0";
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
 */const _s=new U("@firebase/firestore");function Is(){return _s.logLevel}function Ts(e,...t){if(_s.logLevel<=R.DEBUG){const n=t.map(Ss);_s.debug(`Firestore (${ws}): ${e}`,...n)}}function bs(e,...t){if(_s.logLevel<=R.ERROR){const n=t.map(Ss);_s.error(`Firestore (${ws}): ${e}`,...n)}}function Es(e,...t){if(_s.logLevel<=R.WARN){const n=t.map(Ss);_s.warn(`Firestore (${ws}): ${e}`,...n)}}function Ss(e){if("string"==typeof e)return e;try{
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
return t=e,JSON.stringify(t)}catch(n){return e}var t}
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
 */function Cs(e="Unexpected state"){const t=`FIRESTORE (${ws}) INTERNAL ASSERTION FAILED: `+e;throw bs(t),new Error(t)}function ks(e,t){e||Cs()}function As(e,t){return e}
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
 */const Ns={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ds extends g{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class Rs{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
 */class Os{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ps{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(vs.UNAUTHENTICATED)))}shutdown(){}}class Ls{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Ms{constructor(e){this.t=e,this.currentUser=vs.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ks(void 0===this.o);let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new Rs;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Rs,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{Ts("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Ts("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Rs)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Ts("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(ks("string"==typeof t.accessToken),new Os(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ks(null===e||"string"==typeof e),new vs(e)}}class xs{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=vs.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Us{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new xs(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(vs.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Fs{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Vs{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Ve(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){ks(void 0===this.o);const n=e=>{null!=e.error&&Ts("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.R;return this.R=e.token,Ts("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{Ts("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.A.getImmediate({optional:!0});e?r(e):Ts("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.V)return Promise.resolve(new Fs(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(ks("string"==typeof e.token),this.R=e.token,new Fs(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
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
 */function js(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
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
 */function qs(){return new TextEncoder}
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
 */class Bs{static newId(){const e=62*Math.floor(256/62);let t="";for(;t.length<20;){const n=js(40);for(let r=0;r<n.length;++r)t.length<20&&n[r]<e&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n[r]%62))}return t}}function $s(e,t){return e<t?-1:e>t?1:0}function zs(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=e.codePointAt(n),i=t.codePointAt(n);if(r!==i){if(r<128&&i<128)return $s(r,i);{const s=qs(),o=Ks(s.encode(Hs(e,n)),s.encode(Hs(t,n)));return 0!==o?o:$s(r,i)}}n+=r>65535?2:1}return $s(e.length,t.length)}function Hs(e,t){return e.codePointAt(t)>65535?e.substring(t,t+2):e.substring(t,t+1)}function Ks(e,t){for(let n=0;n<e.length&&n<t.length;++n)if(e[n]!==t[n])return $s(e[n],t[n]);return $s(e.length,t.length)}function Gs(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
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
 */const Ws=-62135596800,Qs=1e6;class Js{static now(){return Js.fromMillis(Date.now())}static fromDate(e){return Js.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*Qs);return new Js(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Ds(Ns.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Ds(Ns.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ws)throw new Ds(Ns.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Ds(Ns.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Qs}_compareTo(e){return this.seconds===e.seconds?$s(this.nanoseconds,e.nanoseconds):$s(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Ws;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class Xs{static fromTimestamp(e){return new Xs(e)}static min(){return new Xs(new Js(0,0))}static max(){return new Xs(new Js(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */const Ys="__name__";class Zs{constructor(e,t,n){void 0===t?t=0:t>e.length&&Cs(),void 0===n?n=e.length-t:n>e.length-t&&Cs(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Zs.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Zs?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=Zs.compareSegments(e.get(r),t.get(r));if(0!==n)return n}return $s(e.length,t.length)}static compareSegments(e,t){const n=Zs.isNumericId(e),r=Zs.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?Zs.extractNumericId(e).compare(Zs.extractNumericId(t)):zs(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return is.fromString(e.substring(4,e.length-2))}}class eo extends Zs{construct(e,t,n){return new eo(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Ds(Ns.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new eo(t)}static emptyPath(){return new eo([])}}const to=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class no extends Zs{construct(e,t,n){return new no(e,t,n)}static isValidIdentifier(e){return to.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),no.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===Ys}static keyField(){return new no([Ys])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Ds(Ns.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new Ds(Ns.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Ds(Ns.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new Ds(Ns.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new no(t)}static emptyPath(){return new no([])}}
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
 */class ro{constructor(e){this.path=e}static fromPath(e){return new ro(eo.fromString(e))}static fromName(e){return new ro(eo.fromString(e).popFirst(5))}static empty(){return new ro(eo.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===eo.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return eo.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ro(new eo(e.slice()))}}
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
 */function io(e){return new so(e.readTime,e.key,-1)}class so{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new so(Xs.min(),ro.empty(),-1)}static max(){return new so(Xs.max(),ro.empty(),-1)}}function oo(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=ro.comparator(e.documentKey,t.documentKey),0!==n?n:$s(e.largestBatchId,t.largestBatchId)
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
 */)}class ao{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
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
 */async function co(e){if(e.code!==Ns.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;Ts("LocalStore","Unexpectedly lost primary lease")}
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
 */class uo{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Cs(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new uo(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof uo?t:uo.resolve(t)}catch(t){return uo.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):uo.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):uo.reject(t)}static resolve(e){return new uo(((t,n)=>{t(e)}))}static reject(e){return new uo(((t,n)=>{n(e)}))}static waitFor(e){return new uo(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=uo.resolve(!1);for(const n of e)t=t.next((e=>e?uo.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new uo(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next((e=>{s[c]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new uo(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}function ho(e){return"IndexedDbTransactionError"===e.name}
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
 */class lo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.oe(e),this._e=e=>t.writeSequenceNumber(e))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}function fo(e){return null==e}function po(e){return 0===e&&1/e==-1/0}function go(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function mo(e){return e+""}
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
 */function yo(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function vo(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function wo(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
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
 */lo.ae=-1;class _o{constructor(e,t){this.comparator=e,this.root=t||To.EMPTY}insert(e,t){return new _o(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,To.BLACK,null,null))}remove(e){return new _o(this.comparator,this.root.remove(e,this.comparator).copy(null,null,To.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Io(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Io(this.root,e,this.comparator,!1)}getReverseIterator(){return new Io(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Io(this.root,e,this.comparator,!0)}}class Io{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class To{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:To.RED,this.left=null!=r?r:To.EMPTY,this.right=null!=i?i:To.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new To(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return To.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return To.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,To.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,To.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Cs();if(this.right.isRed())throw Cs();const e=this.left.check();if(e!==this.right.check())throw Cs();return e+(this.isRed()?0:1)}}To.EMPTY=null,To.RED=!0,To.BLACK=!1,To.EMPTY=new class{constructor(){this.size=0}get key(){throw Cs()}get value(){throw Cs()}get color(){throw Cs()}get left(){throw Cs()}get right(){throw Cs()}copy(e,t,n,r,i){return this}insert(e,t,n){return new To(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class bo{constructor(e){this.comparator=e,this.data=new _o(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Eo(this.data.getIterator())}getIteratorFrom(e){return new Eo(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof bo))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new bo(this.comparator);return t.data=e,t}}class Eo{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
 */class So{constructor(e){this.fields=e,e.sort(no.comparator)}static empty(){return new So([])}unionWith(e){let t=new bo(no.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new So(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Gs(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
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
 */class Co extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
 */class ko{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Co("Invalid base64 string: "+t):t}}(e);return new ko(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new ko(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return $s(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ko.EMPTY_BYTE_STRING=new ko("");const Ao=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function No(e){if(ks(!!e),"string"==typeof e){let t=0;const n=Ao.exec(e);if(ks(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Do(e.seconds),nanos:Do(e.nanos)}}function Do(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Ro(e){return"string"==typeof e?ko.fromBase64String(e):ko.fromUint8Array(e)}
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
 */const Oo="server_timestamp",Po="__type__",Lo="__previous_value__",Mo="__local_write_time__";function xo(e){var t,n;return(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{})[Po])||void 0===n?void 0:n.stringValue)===Oo}function Uo(e){const t=e.mapValue.fields[Lo];return xo(t)?Uo(t):t}function Fo(e){const t=No(e.mapValue.fields[Mo].timestampValue);return new Js(t.seconds,t.nanos)}
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
 */class Vo{constructor(e,t,n,r,i,s,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}const jo="(default)";class qo{constructor(e,t){this.projectId=e,this.database=t||jo}static empty(){return new qo("","")}get isDefaultDatabase(){return this.database===jo}isEqual(e){return e instanceof qo&&e.projectId===this.projectId&&e.database===this.database}}
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
 */const Bo="__type__",$o={},zo="__vector__",Ho="value";function Ko(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?xo(e)?4:function(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
 */(e)?9007199254740991:function(e){var t,n;return(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{})[Bo])||void 0===n?void 0:n.stringValue)===zo}(e)?10:11:Cs()}function Go(e,t){if(e===t)return!0;const n=Ko(e);if(n!==Ko(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Fo(e).isEqual(Fo(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=No(e.timestampValue),r=No(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return r=t,Ro(e.bytesValue).isEqual(Ro(r.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Do(e.geoPointValue.latitude)===Do(t.geoPointValue.latitude)&&Do(e.geoPointValue.longitude)===Do(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Do(e.integerValue)===Do(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Do(e.doubleValue),r=Do(t.doubleValue);return n===r?po(n)===po(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Gs(e.arrayValue.values||[],t.arrayValue.values||[],Go);case 10:case 11:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(yo(n)!==yo(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Go(n[i],r[i])))return!1;return!0}(e,t);default:return Cs()}var r}function Wo(e,t){return void 0!==(e.values||[]).find((e=>Go(e,t)))}function Qo(e,t){if(e===t)return 0;const n=Ko(e),r=Ko(t);if(n!==r)return $s(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return $s(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Do(e.integerValue||e.doubleValue),r=Do(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Jo(e.timestampValue,t.timestampValue);case 4:return Jo(Fo(e),Fo(t));case 5:return zs(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Ro(e),r=Ro(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=$s(n[i],r[i]);if(0!==e)return e}return $s(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=$s(Do(e.latitude),Do(t.latitude));return 0!==n?n:$s(Do(e.longitude),Do(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return Xo(e.arrayValue,t.arrayValue);case 10:return function(e,t){var n,r,i,s;const o=e.fields||{},a=t.fields||{},c=null===(n=o[Ho])||void 0===n?void 0:n.arrayValue,u=null===(r=a[Ho])||void 0===r?void 0:r.arrayValue,h=$s((null===(i=null==c?void 0:c.values)||void 0===i?void 0:i.length)||0,(null===(s=null==u?void 0:u.values)||void 0===s?void 0:s.length)||0);return 0!==h?h:Xo(c,u)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===$o&&t===$o)return 0;if(e===$o)return 1;if(t===$o)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=zs(r[o],s[o]);if(0!==e)return e;const t=Qo(n[r[o]],i[s[o]]);if(0!==t)return t}return $s(r.length,s.length)}(e.mapValue,t.mapValue);default:throw Cs()}}function Jo(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return $s(e,t);const n=No(e),r=No(t),i=$s(n.seconds,r.seconds);return 0!==i?i:$s(n.nanos,r.nanos)}function Xo(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=Qo(n[i],r[i]);if(e)return e}return $s(n.length,r.length)}function Yo(e){return Zo(e)}function Zo(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=No(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Ro(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,ro.fromName(t).toString()):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Zo(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${Zo(e.fields[i])}`;return n+"}"}(e.mapValue):Cs();var t}function ea(e){switch(Ko(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Uo(e);return t?16+ea(t):16;case 5:return 2*e.stringValue.length;case 6:return Ro(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return(e.arrayValue.values||[]).reduce(((e,t)=>e+ea(t)),0);case 10:case 11:return function(e){let t=0;return vo(e.fields,((e,n)=>{t+=e.length+ea(n)})),t}(e.mapValue);default:throw Cs()}}function ta(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function na(e){return!!e&&"integerValue"in e}function ra(e){return!!e&&"arrayValue"in e}function ia(e){return!!e&&"nullValue"in e}function sa(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function oa(e){return!!e&&"mapValue"in e}function aa(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return vo(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=aa(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=aa(e.arrayValue.values[n]);return t}return Object.assign({},e)}class ca{constructor(e){this.value=e}static empty(){return new ca({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!oa(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=aa(t)}setAll(e){let t=no.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=aa(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());oa(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Go(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];oa(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){vo(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new ca(aa(this.value))}}function ua(e){const t=[];return vo(e.fields,((e,n)=>{const r=new no([e]);if(oa(n)){const e=ua(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new So(t)
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
 */}class ha{constructor(e,t,n,r,i,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new ha(e,0,Xs.min(),Xs.min(),Xs.min(),ca.empty(),0)}static newFoundDocument(e,t,n,r){return new ha(e,1,t,Xs.min(),n,r,0)}static newNoDocument(e,t){return new ha(e,2,t,Xs.min(),Xs.min(),ca.empty(),0)}static newUnknownDocument(e,t){return new ha(e,3,t,Xs.min(),Xs.min(),ca.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Xs.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ca.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ca.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Xs.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof ha&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ha(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class la{constructor(e,t){this.position=e,this.inclusive=t}}function da(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?ro.comparator(ro.fromName(o.referenceValue),n.key):Qo(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function fa(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Go(e.position[n],t.position[n]))return!1;return!0}
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
 */class pa{constructor(e,t="asc"){this.field=e,this.dir=t}}function ga(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
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
 */class ma{}class ya extends ma{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Ea(e,t,n):"array-contains"===t?new Aa(e,n):"in"===t?new Na(e,n):"not-in"===t?new Da(e,n):"array-contains-any"===t?new Ra(e,n):new ya(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Sa(e,n):new Ca(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Qo(t,this.value)):null!==t&&Ko(this.value)===Ko(t)&&this.matchesComparison(Qo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Cs()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class va extends ma{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new va(e,t)}matches(e){return wa(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function wa(e){return"and"===e.op}function _a(e){return function(e){for(const t of e.filters)if(t instanceof va)return!1;return!0}(e)&&wa(e)}function Ia(e){if(e instanceof ya)return e.field.canonicalString()+e.op.toString()+Yo(e.value);if(_a(e))return e.filters.map((e=>Ia(e))).join(",");{const t=e.filters.map((e=>Ia(e))).join(",");return`${e.op}(${t})`}}function Ta(e,t){return e instanceof ya?(n=e,(r=t)instanceof ya&&n.op===r.op&&n.field.isEqual(r.field)&&Go(n.value,r.value)):e instanceof va?function(e,t){return t instanceof va&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&Ta(n,t.filters[r])),!0)}(e,t):void Cs();var n,r}function ba(e){return e instanceof ya?`${(t=e).field.canonicalString()} ${t.op} ${Yo(t.value)}`:e instanceof va?function(e){return e.op.toString()+" {"+e.getFilters().map(ba).join(" ,")+"}"}(e):"Filter";var t}class Ea extends ya{constructor(e,t,n){super(e,t,n),this.key=ro.fromName(n.referenceValue)}matches(e){const t=ro.comparator(e.key,this.key);return this.matchesComparison(t)}}class Sa extends ya{constructor(e,t){super(e,"in",t),this.keys=ka(0,t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Ca extends ya{constructor(e,t){super(e,"not-in",t),this.keys=ka(0,t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function ka(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>ro.fromName(e.referenceValue)))}class Aa extends ya{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ra(t)&&Wo(t.arrayValue,this.value)}}class Na extends ya{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Wo(this.value.arrayValue,t)}}class Da extends ya{constructor(e,t){super(e,"not-in",t)}matches(e){if(Wo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Wo(this.value.arrayValue,t)}}class Ra extends ya{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ra(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Wo(this.value.arrayValue,e)))}}
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
 */class Oa{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.le=null}}function Pa(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Oa(e,t,n,r,i,s,o)}function La(e){const t=As(e);if(null===t.le){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>Ia(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>{return(t=e).field.canonicalString()+t.dir;var t})).join(","),fo(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Yo(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Yo(e))).join(",")),t.le=e}return t.le}function Ma(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!ga(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Ta(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!fa(e.startAt,t.startAt)&&fa(e.endAt,t.endAt)}function xa(e){return ro.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
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
 */class Ua{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function Fa(e){return new Ua(e)}function Va(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function ja(e){return null!==e.collectionGroup}function qa(e){const t=As(e);if(null===t.he){t.he=[];const e=new Set;for(const r of t.explicitOrderBy)t.he.push(r),e.add(r.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(e){let t=new bo(no.comparator);return e.filters.forEach((e=>{e.getFlattenedFilters().forEach((e=>{e.isInequality()&&(t=t.add(e.field))}))})),t})(t).forEach((r=>{e.has(r.canonicalString())||r.isKeyField()||t.he.push(new pa(r,n))})),e.has(no.keyField().canonicalString())||t.he.push(new pa(no.keyField(),n))}return t.he}function Ba(e){const t=As(e);return t.Pe||(t.Pe=function(e,t){if("F"===e.limitType)return Pa(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map((e=>{const t="desc"===e.dir?"asc":"desc";return new pa(e.field,t)}));const n=e.endAt?new la(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new la(e.startAt.position,e.startAt.inclusive):null;return Pa(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(t,qa(e))),t.Pe}function $a(e,t){const n=e.filters.concat([t]);return new Ua(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function za(e,t,n){return new Ua(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Ha(e,t){return Ma(Ba(e),Ba(t))&&e.limitType===t.limitType}function Ka(e){return`${La(Ba(e))}|lt:${e.limitType}`}function Ga(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>ba(e))).join(", ")}]`),fo(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t})).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Yo(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Yo(e))).join(",")),`Target(${t})`}(Ba(e))}; limitType=${e.limitType})`}function Wa(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):ro.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of qa(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(r=t,!((n=e).startAt&&!function(e,t,n){const r=da(e,t,n);return e.inclusive?r<=0:r<0}(n.startAt,qa(n),r)||n.endAt&&!function(e,t,n){const r=da(e,t,n);return e.inclusive?r>=0:r>0}(n.endAt,qa(n),r)));var n,r}function Qa(e){return(t,n)=>{let r=!1;for(const i of qa(e)){const e=Ja(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Ja(e,t,n){const r=e.field.isKeyField()?ro.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?Qo(r,i):Cs()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Cs()}}
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
 */class Xa{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){vo(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return wo(this.inner)}size(){return this.innerSize}}
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
 */const Ya=new _o(ro.comparator);function Za(){return Ya}const ec=new _o(ro.comparator);function tc(...e){let t=ec;for(const n of e)t=t.insert(n.key,n);return t}function nc(e){let t=ec;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function rc(){return sc()}function ic(){return sc()}function sc(){return new Xa((e=>e.toString()),((e,t)=>e.isEqual(t)))}const oc=new _o(ro.comparator),ac=new bo(ro.comparator);function cc(...e){let t=ac;for(const n of e)t=t.add(n);return t}const uc=new bo($s);
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
function hc(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:po(t)?"-0":t}}function lc(e){return{integerValue:""+e}}
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
class dc{constructor(){this._=void 0}}function fc(e,t,n){return e instanceof mc?function(e,t){const n={fields:{[Po]:{stringValue:Oo},[Mo]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&xo(t)&&(t=Uo(t)),t&&(n.fields[Lo]=t),{mapValue:n}}(n,t):e instanceof yc?vc(e,t):e instanceof wc?_c(e,t):function(e,t){const n=gc(e,t),r=Tc(n)+Tc(e.Ie);return na(n)&&na(e.Ie)?lc(r):hc(e.serializer,r)}(e,t)}function pc(e,t,n){return e instanceof yc?vc(e,t):e instanceof wc?_c(e,t):n}function gc(e,t){return e instanceof Ic?na(n=t)||(r=n)&&"doubleValue"in r?t:{integerValue:0}:null;var n,r}class mc extends dc{}class yc extends dc{constructor(e){super(),this.elements=e}}function vc(e,t){const n=bc(t);for(const r of e.elements)n.some((e=>Go(e,r)))||n.push(r);return{arrayValue:{values:n}}}class wc extends dc{constructor(e){super(),this.elements=e}}function _c(e,t){let n=bc(t);for(const r of e.elements)n=n.filter((e=>!Go(e,r)));return{arrayValue:{values:n}}}class Ic extends dc{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function Tc(e){return Do(e.integerValue||e.doubleValue)}function bc(e){return ra(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
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
 */class Ec{constructor(e,t){this.field=e,this.transform=t}}class Sc{constructor(e,t){this.version=e,this.transformResults=t}}class Cc{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Cc}static exists(e){return new Cc(void 0,e)}static updateTime(e){return new Cc(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function kc(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Ac{}function Nc(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Vc(e.key,Cc.none()):new Lc(e.key,e.data,Cc.none());{const n=e.data,r=ca.empty();let i=new bo(no.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new Mc(e.key,r,new So(i.toArray()),Cc.none())}}function Dc(e,t,n){var r;e instanceof Lc?function(e,t,n){const r=e.value.clone(),i=Uc(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Mc?function(e,t,n){if(!kc(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Uc(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(xc(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):(r=n,t.convertToNoDocument(r.version).setHasCommittedMutations())}function Rc(e,t,n,r){return e instanceof Lc?function(e,t,n,r){if(!kc(e.precondition,t))return n;const i=e.value.clone(),s=Fc(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof Mc?function(e,t,n,r){if(!kc(e.precondition,t))return n;const i=Fc(e.fieldTransforms,r,t),s=t.data;return s.setAll(xc(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):(i=t,s=n,kc(e.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):s);var i,s}function Oc(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=gc(r.transform,e||null);null!=i&&(null===n&&(n=ca.empty()),n.set(r.field,i))}return n||null}function Pc(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&Gs(n,r,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof yc&&r instanceof yc||n instanceof wc&&r instanceof wc?Gs(n.elements,r.elements,Go):n instanceof Ic&&r instanceof Ic?Go(n.Ie,r.Ie):n instanceof mc&&r instanceof mc);var n,r}(e,t))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask)));var n,r}class Lc extends Ac{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Mc extends Ac{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function xc(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function Uc(e,t,n){const r=new Map;ks(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,pc(o,a,n[i]))}return r}function Fc(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,fc(e,s,t))}return r}class Vc extends Ac{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jc extends Ac{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
 */class qc{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&Dc(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Rc(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Rc(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=ic();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=Nc(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(Xs.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),cc())}isEqual(e){return this.batchId===e.batchId&&Gs(this.mutations,e.mutations,((e,t)=>Pc(e,t)))&&Gs(this.baseMutations,e.baseMutations,((e,t)=>Pc(e,t)))}}class Bc{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){ks(e.mutations.length===n.length);let r=function(){return oc}();const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Bc(e,t,n,r)}}
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
 */class $c{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
 */class zc{constructor(e,t){this.count=e,this.unchangedNames=t}}
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
 */var Hc,Kc;function Gc(e){if(void 0===e)return bs("GRPC error has no .code"),Ns.UNKNOWN;switch(e){case Hc.OK:return Ns.OK;case Hc.CANCELLED:return Ns.CANCELLED;case Hc.UNKNOWN:return Ns.UNKNOWN;case Hc.DEADLINE_EXCEEDED:return Ns.DEADLINE_EXCEEDED;case Hc.RESOURCE_EXHAUSTED:return Ns.RESOURCE_EXHAUSTED;case Hc.INTERNAL:return Ns.INTERNAL;case Hc.UNAVAILABLE:return Ns.UNAVAILABLE;case Hc.UNAUTHENTICATED:return Ns.UNAUTHENTICATED;case Hc.INVALID_ARGUMENT:return Ns.INVALID_ARGUMENT;case Hc.NOT_FOUND:return Ns.NOT_FOUND;case Hc.ALREADY_EXISTS:return Ns.ALREADY_EXISTS;case Hc.PERMISSION_DENIED:return Ns.PERMISSION_DENIED;case Hc.FAILED_PRECONDITION:return Ns.FAILED_PRECONDITION;case Hc.ABORTED:return Ns.ABORTED;case Hc.OUT_OF_RANGE:return Ns.OUT_OF_RANGE;case Hc.UNIMPLEMENTED:return Ns.UNIMPLEMENTED;case Hc.DATA_LOSS:return Ns.DATA_LOSS;default:return Cs()}}(Kc=Hc||(Hc={}))[Kc.OK=0]="OK",Kc[Kc.CANCELLED=1]="CANCELLED",Kc[Kc.UNKNOWN=2]="UNKNOWN",Kc[Kc.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Kc[Kc.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Kc[Kc.NOT_FOUND=5]="NOT_FOUND",Kc[Kc.ALREADY_EXISTS=6]="ALREADY_EXISTS",Kc[Kc.PERMISSION_DENIED=7]="PERMISSION_DENIED",Kc[Kc.UNAUTHENTICATED=16]="UNAUTHENTICATED",Kc[Kc.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Kc[Kc.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Kc[Kc.ABORTED=10]="ABORTED",Kc[Kc.OUT_OF_RANGE=11]="OUT_OF_RANGE",Kc[Kc.UNIMPLEMENTED=12]="UNIMPLEMENTED",Kc[Kc.INTERNAL=13]="INTERNAL",Kc[Kc.UNAVAILABLE=14]="UNAVAILABLE",Kc[Kc.DATA_LOSS=15]="DATA_LOSS";
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
const Wc=new is([4294967295,4294967295],0);function Qc(e){const t=qs().encode(e),n=new ss;return n.update(t),new Uint8Array(n.digest())}function Jc(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new is([n,r],0),new is([i,s],0)]}class Xc{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Yc(`Invalid padding: ${t}`);if(n<0)throw new Yc(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new Yc(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new Yc(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=is.fromNumber(this.Ee)}Ae(e,t,n){let r=e.add(t.multiply(is.fromNumber(n)));return 1===r.compare(Wc)&&(r=new is([r.getBits(0),r.getBits(1)],0)),r.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ee)return!1;const t=Qc(e),[n,r]=Jc(t);for(let i=0;i<this.hashCount;i++){const e=this.Ae(n,r,i);if(!this.Re(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),s=new Xc(i,r,t);return n.forEach((e=>s.insert(e))),s}insert(e){if(0===this.Ee)return;const t=Qc(e),[n,r]=Jc(t);for(let i=0;i<this.hashCount;i++){const e=this.Ae(n,r,i);this.Ve(e)}}Ve(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Yc extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
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
 */class Zc{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,eu.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Zc(Xs.min(),r,new _o($s),Za(),cc())}}class eu{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new eu(n,t,cc(),cc(),cc())}}
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
 */class tu{constructor(e,t,n,r){this.me=e,this.removedTargetIds=t,this.key=n,this.fe=r}}class nu{constructor(e,t){this.targetId=e,this.ge=t}}class ru{constructor(e,t,n=ko.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class iu{constructor(){this.pe=0,this.ye=au(),this.we=ko.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return 0!==this.pe}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=cc(),t=cc(),n=cc();return this.ye.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Cs()}})),new eu(this.we,this.Se,e,t,n)}Me(){this.be=!1,this.ye=au()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,ks(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class su{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Za(),this.$e=ou(),this.Ue=ou(),this.Ke=new _o($s)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,(t=>{const n=this.He(t);switch(e.state){case 0:this.Je(t)&&n.Ce(e.resumeToken);break;case 1:n.Be(),n.De||n.Me(),n.Ce(e.resumeToken);break;case 2:n.Be(),n.De||this.removeTarget(t);break;case 3:this.Je(t)&&(n.Le(),n.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),n.Ce(e.resumeToken));break;default:Cs()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach(((e,n)=>{this.Je(n)&&t(n)}))}Ze(e){const t=e.targetId,n=e.ge.count,r=this.Xe(t);if(r){const i=r.target;if(xa(i))if(0===n){const e=new ro(i.path);this.ze(t,e,ha.newNoDocument(e,Xs.min()))}else ks(1===n);else{const r=this.et(t);if(r!==n){const n=this.tt(e),i=n?this.nt(n,e,r):1;if(0!==i){this.Ye(t);const e=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,e)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=t;let s,o;try{s=Ro(n).toUint8Array()}catch(a){if(a instanceof Co)return Es("Decoding the base64 bloom filter in existence filter failed ("+a.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw a}try{o=new Xc(s,r,i)}catch(a){return Es(a instanceof Yc?"BloomFilter error: ":"Applying bloom filter failed: ",a),null}return 0===o.Ee?null:o}nt(e,t,n){return t.ge.count===n-this.st(e,t.targetId)?0:2}st(e,t){const n=this.ke.getRemoteKeysForTarget(t);let r=0;return n.forEach((n=>{const i=this.ke.it(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.ze(t,n,null),r++)})),r}ot(e){const t=new Map;this.qe.forEach(((n,r)=>{const i=this.Xe(r);if(i){if(n.current&&xa(i.target)){const t=new ro(i.target.path);this._t(t).has(r)||this.ut(r,t)||this.ze(r,t,ha.newNoDocument(t,e))}n.ve&&(t.set(r,n.Fe()),n.Me())}}));let n=cc();this.Ue.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Xe(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.Qe.forEach(((t,n)=>n.setReadTime(e)));const r=new Zc(e,t,this.Ke,this.Qe,n);return this.Qe=Za(),this.$e=ou(),this.Ue=ou(),this.Ke=new _o($s),r}Ge(e,t){if(!this.Je(e))return;const n=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,n),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}ze(e,t,n){if(!this.Je(e))return;const r=this.He(e);this.ut(e,t)?r.xe(t,1):r.Oe(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),this.Ue=this.Ue.insert(t,this.ct(t).add(e)),n&&(this.Qe=this.Qe.insert(t,n))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new iu,this.qe.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new bo($s),this.Ue=this.Ue.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new bo($s),this.$e=this.$e.insert(e,t)),t}Je(e){const t=null!==this.Xe(e);return t||Ts("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new iu),this.ke.getRemoteKeysForTarget(e).forEach((t=>{this.ze(e,t,null)}))}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function ou(){return new _o(ro.comparator)}function au(){return new _o(ro.comparator)}const cu=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),uu=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),hu=(()=>({and:"AND",or:"OR"}))();class lu{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function du(e,t){return e.useProto3Json||fo(t)?t:{value:t}}function fu(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function pu(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function gu(e,t){return fu(e,t.toTimestamp())}function mu(e){return ks(!!e),Xs.fromTimestamp(function(e){const t=No(e);return new Js(t.seconds,t.nanos)}(e))}function yu(e,t){return vu(e,t).canonicalString()}function vu(e,t){const n=(r=e,new eo(["projects",r.projectId,"databases",r.database])).child("documents");var r;return void 0===t?n:n.child(t)}function wu(e){const t=eo.fromString(e);return ks(Uu(t)),t}function _u(e,t){return yu(e.databaseId,t.path)}function Iu(e,t){const n=wu(t);if(n.get(1)!==e.databaseId.projectId)throw new Ds(Ns.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Ds(Ns.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new ro(Eu(n))}function Tu(e,t){return yu(e.databaseId,t)}function bu(e){return new eo(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Eu(e){return ks(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Su(e,t,n){return{name:_u(e,t),fields:n.value.mapValue.fields}}function Cu(e,t){return{documents:[Tu(e,t.path)]}}function ku(e,t){const n={structuredQuery:{}},r=t.path;let i;null!==t.collectionGroup?(i=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Tu(e,i);const s=function(e){if(0!==e.length)return Mu(va.create(e,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const o=function(e){if(0!==e.length)return e.map((e=>{return{field:Pu((t=e).field),direction:Du(t.dir)};var t}))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=du(e,t.limit);return null!==a&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt={before:(c=t.startAt).inclusive,values:c.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{ht:n,parent:i};var c}function Au(e){let t=function(e){const t=wu(e);return 4===t.length?eo.emptyPath():Eu(t)}(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ks(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=Nu(e);return t instanceof va&&_a(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>{return new pa(Lu((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,fo(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new la(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new la(n,t)}(n.endAt)),function(e,t,n,r,i,s,o,a){return new Ua(e,t,n,r,i,"F",o,a)}(t,i,o,s,a,0,c,u)}function Nu(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Lu(e.unaryFilter.field);return ya.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Lu(e.unaryFilter.field);return ya.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Lu(e.unaryFilter.field);return ya.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Lu(e.unaryFilter.field);return ya.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Cs()}}(e):void 0!==e.fieldFilter?(t=e,ya.create(Lu(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Cs()}}(t.fieldFilter.op),t.fieldFilter.value)):void 0!==e.compositeFilter?function(e){return va.create(e.compositeFilter.filters.map((e=>Nu(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return Cs()}}(e.compositeFilter.op))}(e):Cs();var t}function Du(e){return cu[e]}function Ru(e){return uu[e]}function Ou(e){return hu[e]}function Pu(e){return{fieldPath:e.canonicalString()}}function Lu(e){return no.fromServerFormat(e.fieldPath)}function Mu(e){return e instanceof ya?function(e){if("=="===e.op){if(sa(e.value))return{unaryFilter:{field:Pu(e.field),op:"IS_NAN"}};if(ia(e.value))return{unaryFilter:{field:Pu(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(sa(e.value))return{unaryFilter:{field:Pu(e.field),op:"IS_NOT_NAN"}};if(ia(e.value))return{unaryFilter:{field:Pu(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pu(e.field),op:Ru(e.op),value:e.value}}}(e):e instanceof va?function(e){const t=e.getFilters().map((e=>Mu(e)));return 1===t.length?t[0]:{compositeFilter:{op:Ou(e.op),filters:t}}}(e):Cs()}function xu(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Uu(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
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
 */class Fu{constructor(e,t,n,r,i=Xs.min(),s=Xs.min(),o=ko.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new Fu(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Fu(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Fu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Fu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
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
 */class Vu{constructor(e){this.Tt=e}}function ju(e){const t=Au({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?za(t,t.limit,"L"):t}
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
 */class qu{constructor(){this.Tn=new Bu}addToCollectionParentIndex(e,t){return this.Tn.add(t),uo.resolve()}getCollectionParents(e,t){return uo.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return uo.resolve()}deleteFieldIndex(e,t){return uo.resolve()}deleteAllFieldIndexes(e){return uo.resolve()}createTargetIndexes(e,t){return uo.resolve()}getDocumentsMatchingTarget(e,t){return uo.resolve(null)}getIndexType(e,t){return uo.resolve(0)}getFieldIndexes(e,t){return uo.resolve([])}getNextCollectionGroupToUpdate(e){return uo.resolve(null)}getMinOffset(e,t){return uo.resolve(so.min())}getMinOffsetFromCollectionGroup(e,t){return uo.resolve(so.min())}updateCollectionGroup(e,t,n){return uo.resolve()}updateIndexEntries(e,t){return uo.resolve()}}class Bu{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new bo(eo.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new bo(eo.comparator)).toArray()}}
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
 */const $u={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},zu=41943040;class Hu{static withCacheSize(e){return new Hu(e,Hu.DEFAULT_COLLECTION_PERCENTILE,Hu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}
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
 */Hu.DEFAULT_COLLECTION_PERCENTILE=10,Hu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Hu.DEFAULT=new Hu(zu,Hu.DEFAULT_COLLECTION_PERCENTILE,Hu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Hu.DISABLED=new Hu(-1,0,0);
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
class Ku{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new Ku(0)}static Kn(){return new Ku(-1)}}
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
 */const Gu="LruGarbageCollector";function Wu([e,t],[n,r]){const i=$s(e,n);return 0===i?$s(t,r):i}class Qu{constructor(e){this.Hn=e,this.buffer=new bo(Wu),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();Wu(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Ju{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Xn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return null!==this.Xn}er(e){Ts(Gu,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ho(e)?Ts(Gu,"Ignoring IndexedDB error during garbage collection: ",e):await co(e)}await this.er(3e5)}))}}class Xu{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return uo.resolve(lo.ae);const n=new Qu(t);return this.tr.forEachTarget(e,(e=>n.Zn(e.sequenceNumber))).next((()=>this.tr.rr(e,(e=>n.Zn(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.tr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(Ts("LruGarbageCollector","Garbage collection skipped; disabled"),uo.resolve($u)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(Ts("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),$u):this.ir(e,t)))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let n,r,i,s,o,a,c;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(Ts("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r)))).next((r=>(n=r,o=Date.now(),this.removeTargets(e,n,t)))).next((t=>(i=t,a=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(c=Date.now(),Is()<=R.DEBUG&&Ts("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-u}ms\n\tDetermined least recently used ${r} in `+(o-s)+`ms\n\tRemoved ${i} targets in `+(a-o)+`ms\n\tRemoved ${e} documents in `+(c-a)+`ms\nTotal Duration: ${c-u}ms`),uo.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e}))))}}
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
class Yu{constructor(){this.changes=new Xa((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ha.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?uo.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
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
 */class Zu{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
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
 */class eh{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&Rc(n.mutation,e,So.empty(),Js.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,cc()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=cc()){const r=rc();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=tc();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=rc();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,cc())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=Za();const s=sc(),o=sc();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof Mc)?i=i.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),Rc(o.mutation,t,o.mutation.getFieldMask(),Js.now())):s.set(t.key,So.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Zu(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=sc();let r=new _o(((e,t)=>e-t)),i=cc();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||So.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||cc()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=ic();c.forEach((e=>{if(!i.has(e)){const r=Nc(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return uo.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n,r){return i=t,ro.isDocumentKey(i.path)&&null===i.collectionGroup&&0===i.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):ja(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r);var i}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):uo.resolve(rc());let o=-1,a=i;return s.next((t=>uo.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?uo.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,cc()))).next((e=>({batchId:o,changes:nc(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ro(t)).next((e=>{let t=tc();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const i=t.collectionGroup;let s=tc();return this.indexManager.getCollectionParents(e,i).next((o=>uo.forEach(o,(o=>{const a=(c=t,u=o.child(i),new Ua(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt));var c,u;return this.getDocumentsMatchingCollectionQuery(e,a,n,r).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r)))).next((e=>{i.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,ha.newInvalidDocument(r)))}));let n=tc();return e.forEach(((e,r)=>{const s=i.get(e);void 0!==s&&Rc(s.mutation,r,So.empty(),Js.now()),Wa(t,r)&&(n=n.insert(e,r))})),n}))}}
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
 */class th{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return uo.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,{id:(n=t).id,version:n.version,createTime:mu(n.createTime)}),uo.resolve();var n}getNamedQuery(e,t){return uo.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,{name:(n=t).name,query:ju(n.bundledQuery),readTime:mu(n.readTime)}),uo.resolve();var n}}
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
 */class nh{constructor(){this.overlays=new _o(ro.comparator),this.Rr=new Map}getOverlay(e,t){return uo.resolve(this.overlays.get(t))}getOverlays(e,t){const n=rc();return uo.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.Et(e,t,r)})),uo.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Rr.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.Rr.delete(n)),uo.resolve()}getOverlaysForCollection(e,t,n){const r=rc(),i=t.length+1,s=new ro(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return uo.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new _o(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=rc(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=rc(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>o.set(e,t))),!(o.size()>=r)););return uo.resolve(o)}Et(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.Rr.get(r.largestBatchId).delete(n.key);this.Rr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new $c(t,n));let i=this.Rr.get(t);void 0===i&&(i=cc(),this.Rr.set(t,i)),this.Rr.set(t,i.add(n.key))}}
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
 */class rh{constructor(){this.sessionToken=ko.EMPTY_BYTE_STRING}getSessionToken(e){return uo.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,uo.resolve()}}
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
 */class ih{constructor(){this.Vr=new bo(sh.mr),this.gr=new bo(sh.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const n=new sh(e,t);this.Vr=this.Vr.add(n),this.gr=this.gr.add(n)}yr(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.wr(new sh(e,t))}Sr(e,t){e.forEach((e=>this.removeReference(e,t)))}br(e){const t=new ro(new eo([])),n=new sh(t,e),r=new sh(t,e+1),i=[];return this.gr.forEachInRange([n,r],(e=>{this.wr(e),i.push(e.key)})),i}Dr(){this.Vr.forEach((e=>this.wr(e)))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new ro(new eo([])),n=new sh(t,e),r=new sh(t,e+1);let i=cc();return this.gr.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new sh(e,0),n=this.Vr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class sh{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return ro.comparator(e.key,t.key)||$s(e.Cr,t.Cr)}static pr(e,t){return $s(e.Cr,t.Cr)||ro.comparator(e.key,t.key)}}
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
 */class oh{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new bo(sh.mr)}checkEmpty(e){return uo.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new qc(i,t,n,r);this.mutationQueue.push(s);for(const o of r)this.Mr=this.Mr.add(new sh(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return uo.resolve(s)}lookupMutationBatch(e,t){return uo.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.Nr(n),i=r<0?0:r;return uo.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return uo.resolve(0===this.mutationQueue.length?-1:this.Fr-1)}getAllMutationBatches(e){return uo.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new sh(t,0),r=new sh(t,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([n,r],(e=>{const t=this.Or(e.Cr);i.push(t)})),uo.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new bo($s);return t.forEach((e=>{const t=new sh(e,0),r=new sh(e,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([t,r],(e=>{n=n.add(e.Cr)}))})),uo.resolve(this.Br(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;ro.isDocumentKey(i)||(i=i.child(""));const s=new sh(new ro(i),0);let o=new bo($s);return this.Mr.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.Cr)),!0)}),s),uo.resolve(this.Br(o))}Br(e){const t=[];return e.forEach((e=>{const n=this.Or(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){ks(0===this.Lr(t.batchId,"removed")),this.mutationQueue.shift();let n=this.Mr;return uo.forEach(t.mutations,(r=>{const i=new sh(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Mr=n}))}qn(e){}containsKey(e,t){const n=new sh(t,0),r=this.Mr.firstAfterOrEqual(n);return uo.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,uo.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
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
 */class ah{constructor(e){this.kr=e,this.docs=new _o(ro.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.kr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return uo.resolve(n?n.document.mutableCopy():ha.newInvalidDocument(t))}getEntries(e,t){let n=Za();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():ha.newInvalidDocument(e))})),uo.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=Za();const s=t.path,o=new ro(s.child("__id-9223372036854775808__")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||oo(io(o),n)<=0||(r.has(o.key)||Wa(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return uo.resolve(i)}getAllFromCollectionGroup(e,t,n,r){Cs()}qr(e,t){return uo.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new ch(this)}getSize(e){return uo.resolve(this.size)}}class ch extends Yu{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Ir.addEntry(e,r)):this.Ir.removeEntry(n)})),uo.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}
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
 */class uh{constructor(e){this.persistence=e,this.Qr=new Xa((e=>La(e)),Ma),this.lastRemoteSnapshotVersion=Xs.min(),this.highestTargetId=0,this.$r=0,this.Ur=new ih,this.targetCount=0,this.Kr=Ku.Un()}forEachTarget(e,t){return this.Qr.forEach(((e,n)=>t(n))),uo.resolve()}getLastRemoteSnapshotVersion(e){return uo.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return uo.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),uo.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.$r&&(this.$r=t),uo.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Kr=new Ku(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,uo.resolve()}updateTargetData(e,t){return this.zn(t),uo.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Ur.br(t.targetId),this.targetCount-=1,uo.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Qr.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Qr.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),uo.waitFor(i).next((()=>r))}getTargetCount(e){return uo.resolve(this.targetCount)}getTargetData(e,t){const n=this.Qr.get(t)||null;return uo.resolve(n)}addMatchingKeys(e,t,n){return this.Ur.yr(t,n),uo.resolve()}removeMatchingKeys(e,t,n){this.Ur.Sr(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),uo.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Ur.br(t),uo.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Ur.vr(t);return uo.resolve(n)}containsKey(e,t){return uo.resolve(this.Ur.containsKey(t))}}
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
 */class hh{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new lo(0),this.zr=!1,this.zr=!0,this.jr=new rh,this.referenceDelegate=e(this),this.Hr=new uh(this),this.indexManager=new qu,this.remoteDocumentCache=new ah((e=>this.referenceDelegate.Jr(e))),this.serializer=new Vu(t),this.Yr=new th(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new nh,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Wr[e.toKey()];return n||(n=new oh(t,this.referenceDelegate),this.Wr[e.toKey()]=n),n}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,n){Ts("MemoryPersistence","Starting transaction:",e);const r=new lh(this.Gr.next());return this.referenceDelegate.Zr(),n(r).next((e=>this.referenceDelegate.Xr(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}ei(e,t){return uo.or(Object.values(this.Wr).map((n=>()=>n.containsKey(e,t))))}}class lh extends ao{constructor(e){super(),this.currentSequenceNumber=e}}class dh{constructor(e){this.persistence=e,this.ti=new ih,this.ni=null}static ri(e){return new dh(e)}get ii(){if(this.ni)return this.ni;throw Cs()}addReference(e,t,n){return this.ti.addReference(n,t),this.ii.delete(n.toString()),uo.resolve()}removeReference(e,t,n){return this.ti.removeReference(n,t),this.ii.add(n.toString()),uo.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),uo.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach((e=>this.ii.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.ii.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return uo.forEach(this.ii,(n=>{const r=ro.fromPath(n);return this.si(e,r).next((e=>{e||t.removeEntry(r,Xs.min())}))})).next((()=>(this.ni=null,t.apply(e))))}updateLimboDocument(e,t){return this.si(e,t).next((e=>{e?this.ii.delete(t.toString()):this.ii.add(t.toString())}))}Jr(e){return 0}si(e,t){return uo.or([()=>uo.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class fh{constructor(e,t){this.persistence=e,this.oi=new Xa((e=>function(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=mo(t)),t=go(e.get(n),t);return mo(t)}(e.path)),((e,t)=>e.isEqual(t))),this.garbageCollector=function(e,t){return new Xu(e,t)}(this,t)}static ri(e,t){return new fh(e,t)}Zr(){}Xr(e){return uo.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}sr(e){let t=0;return this.rr(e,(e=>{t++})).next((()=>t))}rr(e,t){return uo.forEach(this.oi,((n,r)=>this.ar(e,n,r).next((e=>e?uo.resolve():t(r)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.qr(e,(r=>this.ar(e,r,t).next((e=>{e||(n++,i.removeEntry(r,Xs.min()))})))).next((()=>i.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),uo.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.oi.set(n,e.currentSequenceNumber),uo.resolve()}removeReference(e,t,n){return this.oi.set(n,e.currentSequenceNumber),uo.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),uo.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ea(e.data.value)),t}ar(e,t,n){return uo.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const e=this.oi.get(t);return uo.resolve(void 0!==e&&e>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}
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
 */class ph{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Hi=n,this.Ji=r}static Yi(e,t){let n=cc(),r=cc();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new ph(e,t.fromCache,n,r)}}
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
 */class gh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
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
 */class mh{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=!function(){var e;const t=null===(e=o())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(n){return!1}}()&&navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")?8:function(){const e=l().match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}()>0?6:4}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,n,r){const i={result:null};return this.rs(e,t).next((e=>{i.result=e})).next((()=>{if(!i.result)return this.ss(e,t,r,n).next((e=>{i.result=e}))})).next((()=>{if(i.result)return;const n=new gh;return this._s(e,t,n).next((r=>{if(i.result=r,this.Xi)return this.us(e,t,n,r.size)}))})).next((()=>i.result))}us(e,t,n,r){return n.documentReadCount<this.es?(Is()<=R.DEBUG&&Ts("QueryEngine","SDK will not create cache indexes for query:",Ga(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),uo.resolve()):(Is()<=R.DEBUG&&Ts("QueryEngine","Query:",Ga(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.ts*r?(Is()<=R.DEBUG&&Ts("QueryEngine","The SDK decides to create cache indexes for query:",Ga(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ba(t))):uo.resolve())}rs(e,t){if(Va(t))return uo.resolve(null);let n=Ba(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=za(t,null,"F"),n=Ba(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=cc(...r);return this.ns.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.cs(t,r);return this.ls(t,s,i,n.readTime)?this.rs(e,za(t,null,"F")):this.hs(e,s,t,n)}))))})))))}ss(e,t,n,r){return Va(t)||r.isEqual(Xs.min())?uo.resolve(null):this.ns.getDocuments(e,n).next((i=>{const s=this.cs(t,i);return this.ls(t,s,n,r)?uo.resolve(null):(Is()<=R.DEBUG&&Ts("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ga(t)),this.hs(e,s,t,function(e){const t=e.toTimestamp().seconds,n=e.toTimestamp().nanoseconds+1,r=Xs.fromTimestamp(1e9===n?new Js(t+1,0):new Js(t,n));return new so(r,ro.empty(),-1)}(r)).next((e=>e)))}))}cs(e,t){let n=new bo(Qa(e));return t.forEach(((t,r)=>{Wa(e,r)&&(n=n.add(r))})),n}ls(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}_s(e,t,n){return Is()<=R.DEBUG&&Ts("QueryEngine","Using full collection scan to execute query:",Ga(t)),this.ns.getDocumentsMatchingQuery(e,t,so.min(),n)}hs(e,t,n,r){return this.ns.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
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
 */const yh="LocalStore";class vh{constructor(e,t,n,r){this.persistence=e,this.Ps=t,this.serializer=r,this.Ts=new _o($s),this.Is=new Xa((e=>La(e)),Ma),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(n)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new eh(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ts)))}}async function wh(e,t){const n=As(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.As(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=cc();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({Rs:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function _h(e){const t=As(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Hr.getLastRemoteSnapshotVersion(e)))}function Ih(e,t){const n=As(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}async function Th(e,t,n){const r=As(e),i=r.Ts.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(o){if(!ho(o))throw o;Ts(yh,`Failed to update sequence numbers for target ${t}: ${o}`)}r.Ts=r.Ts.remove(t),r.Is.delete(i.target)}function bh(e,t,n){const r=As(e);let i=Xs.min(),s=cc();return r.persistence.runTransaction("Execute query","readwrite",(e=>function(e,t,n){const r=As(e),i=r.Is.get(n);return void 0!==i?uo.resolve(r.Ts.get(i)):r.Hr.getTargetData(t,n)}(r,e,Ba(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Ps.getDocumentsMatchingQuery(e,t,n?i:Xs.min(),n?s:cc()))).next((e=>(function(e,t,n){let r=e.Es.get(t)||Xs.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Es.set(t,r)}(r,function(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}(t),e),{documents:e,gs:s})))))}class Eh{constructor(){this.activeTargetIds=uc}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Sh{constructor(){this.ho=new Eh,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,n){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new Eh,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
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
 */class Ch{To(e){}shutdown(){}}
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
 */const kh="ConnectivityMonitor";class Ah{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){Ts(kh,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){Ts(kh,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */let Nh=null;function Dh(){return null===Nh?Nh=268435456+Math.round(2147483648*Math.random()):Nh++,"0x"+Nh.toString(16)
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
 */}const Rh="RestConnection",Oh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Ph{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${n}/databases/${r}`,this.wo=this.databaseId.database===jo?`project_id=${n}`:`project_id=${n}&database_id=${r}`}So(e,t,n,r,i){const s=Dh(),o=this.bo(e,t.toUriEncodedString());Ts(Rh,`Sending RPC '${e}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(a,r,i),this.vo(e,o,a,n).then((t=>(Ts(Rh,`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw Es(Rh,`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t}))}Co(e,t,n,r,i,s){return this.So(e,t,n,r,i)}Do(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+ws,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}bo(e,t){const n=Oh[e];return`${this.po}/v1/${t}:${n}`}terminate(){}}
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
 */class Lh{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}
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
 */const Mh="WebChannelConnection";class xh extends Ph{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,n,r){const i=Dh();return new Promise(((s,o)=>{const a=new as;a.setWithCredentials(!0),a.listenOnce(us.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case hs.NO_ERROR:const t=a.getResponseJson();Ts(Mh,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case hs.TIMEOUT:Ts(Mh,`RPC '${e}' ${i} timed out`),o(new Ds(Ns.DEADLINE_EXCEEDED,"Request time out"));break;case hs.HTTP_ERROR:const n=a.getStatus();if(Ts(Mh,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Ns).indexOf(t)>=0?t:Ns.UNKNOWN}(t.status);o(new Ds(e,t.message))}else o(new Ds(Ns.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Ds(Ns.UNAVAILABLE,"Connection failed."));break;default:Cs()}}finally{Ts(Mh,`RPC '${e}' ${i} completed.`)}}));const c=JSON.stringify(r);Ts(Mh,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",c,n,15)}))}Wo(e,t,n){const r=Dh(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=ps(),o=fs(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Do(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const u=i.join("");Ts(Mh,`Creating RPC '${e}' stream ${r}: ${u}`,a);const h=s.createWebChannel(u,a);let l=!1,d=!1;const f=new Lh({Fo:t=>{d?Ts(Mh,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(l||(Ts(Mh,`Opening RPC '${e}' stream ${r} transport.`),h.open(),l=!0),Ts(Mh,`RPC '${e}' stream ${r} sending:`,t),h.send(t))},Mo:()=>h.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(h,cs.EventType.OPEN,(()=>{d||(Ts(Mh,`RPC '${e}' stream ${r} transport opened.`),f.Qo())})),p(h,cs.EventType.CLOSE,(()=>{d||(d=!0,Ts(Mh,`RPC '${e}' stream ${r} transport closed`),f.Uo())})),p(h,cs.EventType.ERROR,(t=>{d||(d=!0,Es(Mh,`RPC '${e}' stream ${r} transport errored:`,t),f.Uo(new Ds(Ns.UNAVAILABLE,"The operation could not be completed")))})),p(h,cs.EventType.MESSAGE,(t=>{var n;if(!d){const i=t.data[0];ks(!!i);const s=i,o=(null==s?void 0:s.error)||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){Ts(Mh,`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=Hc[e];if(void 0!==t)return Gc(t)}(t),i=o.message;void 0===n&&(n=Ns.INTERNAL,i="Unknown error status: "+t+" with message "+o.message),d=!0,f.Uo(new Ds(n,i)),h.close()}else Ts(Mh,`RPC '${e}' stream ${r} received:`,i),f.Ko(i)}})),p(o,ds.STAT_EVENT,(t=>{t.stat===ls.PROXY?Ts(Mh,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===ls.NOPROXY&&Ts(Mh,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{f.$o()}),0),f}}function Uh(){return"undefined"!=typeof document?document:null}
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
 */function Fh(e){return new lu(e,!0)}
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
 */class Vh{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Ti=e,this.timerId=t,this.Go=n,this.zo=r,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),n=Math.max(0,Date.now()-this.Yo),r=Math.max(0,t-n);r>0&&Ts("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,r,(()=>(this.Yo=Date.now(),e()))),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){null!==this.Jo&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){null!==this.Jo&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}
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
 */const jh="PersistentStream";class qh{constructor(e,t,n,r,i,s,o,a){this.Ti=e,this.n_=n,this.r_=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Vh(e,t)}u_(){return 1===this.state||5===this.state||this.c_()}c_(){return 2===this.state||3===this.state}start(){this.__=0,4!==this.state?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&null===this.s_&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,(()=>this.T_())))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,4!==e?this.a_.reset():t&&t.code===Ns.RESOURCE_EXHAUSTED?(bs(t.toString()),bs("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===Ns.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.i_===t&&this.V_(e,n)}),(t=>{e((()=>{const e=new Ds(Ns.UNKNOWN,"Fetching auth token failed: "+t.message);return this.m_(e)}))}))}V_(e,t){const n=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo((()=>{n((()=>this.listener.xo()))})),this.stream.No((()=>{n((()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,(()=>(this.c_()&&(this.state=3),Promise.resolve()))),this.listener.No())))})),this.stream.Lo((e=>{n((()=>this.m_(e)))})),this.stream.onMessage((e=>{n((()=>1==++this.__?this.g_(e):this.onNext(e)))}))}l_(){this.state=5,this.a_.Xo((async()=>{this.state=0,this.start()}))}m_(e){return Ts(jh,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget((()=>this.i_===e?t():(Ts(jh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Bh extends qh{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const i="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:Cs(),s=t.targetChange.targetIds||[],o=function(e,t){return e.useProto3Json?(ks(void 0===t||"string"==typeof t),ko.fromBase64String(t||"")):(ks(void 0===t||t instanceof Buffer||t instanceof Uint8Array),ko.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(e){const t=void 0===e.code?Ns.UNKNOWN:Gc(e.code);return new Ds(t,e.message||"")}(a);n=new ru(i,s,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Iu(e,r.document.name),s=mu(r.document.updateTime),o=r.document.createTime?mu(r.document.createTime):Xs.min(),a=new ca({mapValue:{fields:r.document.fields}}),c=ha.newFoundDocument(i,s,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new tu(u,h,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Iu(e,r.document),s=r.readTime?mu(r.readTime):Xs.min(),o=ha.newNoDocument(i,s),a=r.removedTargetIds||[];n=new tu([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Iu(e,r.document),s=r.removedTargetIds||[];n=new tu([],s,i,null)}else{if(!("filter"in t))return Cs();{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,s=new zc(r,i),o=e.targetId;n=new nu(o,s)}}var r;return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return Xs.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Xs.min():t.readTime?mu(t.readTime):Xs.min()}(e);return this.listener.p_(t,n)}y_(e){const t={};t.database=bu(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=xa(r)?{documents:Cu(e,r)}:{query:ku(e,r).ht},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=pu(e,t.resumeToken);const r=du(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(Xs.min())>0){n.readTime=fu(e,t.snapshotVersion.toTimestamp());const r=du(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Cs()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.I_(t)}w_(e){const t={};t.database=bu(this.serializer),t.removeTarget=e,this.I_(t)}}class $h extends qh{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return ks(!!e.streamToken),this.lastStreamToken=e.streamToken,ks(!e.writeResults||0===e.writeResults.length),this.listener.D_()}onNext(e){ks(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=function(e,t){return e&&e.length>0?(ks(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?mu(e.updateTime):mu(t);return n.isEqual(Xs.min())&&(n=mu(t)),new Sc(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=mu(e.commitTime);return this.listener.v_(n,t)}C_(){const e={};e.database=bu(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>function(e,t){let n;if(t instanceof Lc)n={update:Su(e,t.key,t.value)};else if(t instanceof Vc)n={delete:_u(e,t.key)};else if(t instanceof Mc)n={update:Su(e,t.key,t.data),updateMask:xu(t.fieldMask)};else{if(!(t instanceof jc))return Cs();n={verify:_u(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof mc)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof yc)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof wc)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Ic)return{fieldPath:t.field.canonicalString(),increment:n.Ie};throw Cs()}(0,e)))),t.precondition.isNone||(n.currentDocument=(r=e,void 0!==(i=t.precondition).updateTime?{updateTime:gu(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:Cs())),n;var r,i}(this.serializer,e)))};this.I_(t)}}
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
 */class zh{}class Hh extends zh{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.F_=!1}M_(){if(this.F_)throw new Ds(Ns.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,n,r){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.So(e,vu(t,n),r,i,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Ns.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Ds(Ns.UNKNOWN,e.toString())}))}Co(e,t,n,r,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.Co(e,vu(t,n),r,s,o,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Ns.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Ds(Ns.UNKNOWN,e.toString())}))}terminate(){this.F_=!0,this.connection.terminate()}}class Kh{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){0===this.x_&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve()))))}q_(e){"Online"===this.state?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,"Online"===e&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(bs(t),this.N_=!1):Ts("OnlineStateTracker",t)}Q_(){null!==this.O_&&(this.O_.cancel(),this.O_=null)}}
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
 */const Gh="RemoteStore";class Wh{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To((e=>{n.enqueueAndForget((async()=>{rl(this)&&(Ts(Gh,"Restarting streams for network reachability change."),await async function(e){const t=As(e);t.W_.add(4),await Jh(t),t.j_.set("Unknown"),t.W_.delete(4),await Qh(t)}(this))}))})),this.j_=new Kh(n,r)}}async function Qh(e){if(rl(e))for(const t of e.G_)await t(!0)}async function Jh(e){for(const t of e.G_)await t(!1)}function Xh(e,t){const n=As(e);n.K_.has(t.targetId)||(n.K_.set(t.targetId,t),nl(n)?tl(n):Il(n).c_()&&Zh(n,t))}function Yh(e,t){const n=As(e),r=Il(n);n.K_.delete(t),r.c_()&&el(n,t),0===n.K_.size&&(r.c_()?r.P_():rl(n)&&n.j_.set("Unknown"))}function Zh(e,t){if(e.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Xs.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Il(e).y_(t)}function el(e,t){e.H_.Ne(t),Il(e).w_(t)}function tl(e){e.H_=new su({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>e.K_.get(t)||null,it:()=>e.datastore.serializer.databaseId}),Il(e).start(),e.j_.B_()}function nl(e){return rl(e)&&!Il(e).u_()&&e.K_.size>0}function rl(e){return 0===As(e).W_.size}function il(e){e.H_=void 0}async function sl(e){e.j_.set("Online")}async function ol(e){e.K_.forEach(((t,n)=>{Zh(e,t)}))}async function al(e,t){il(e),nl(e)?(e.j_.q_(t),tl(e)):e.j_.set("Unknown")}async function cl(e,t,n){if(e.j_.set("Online"),t instanceof ru&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.K_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.K_.delete(r),e.H_.removeTarget(r))}(e,t)}catch(r){Ts(Gh,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await ul(e,r)}else if(t instanceof tu?e.H_.We(t):t instanceof nu?e.H_.Ze(t):e.H_.je(t),!n.isEqual(Xs.min()))try{const t=await _h(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.H_.ot(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.K_.get(r);i&&e.K_.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const r=e.K_.get(t);if(!r)return;e.K_.set(t,r.withResumeToken(ko.EMPTY_BYTE_STRING,r.snapshotVersion)),el(e,t);const i=new Fu(r.target,t,n,r.sequenceNumber);Zh(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(i){Ts(Gh,"Failed to raise snapshot:",i),await ul(e,i)}}async function ul(e,t,n){if(!ho(t))throw t;e.W_.add(1),await Jh(e),e.j_.set("Offline"),n||(n=()=>_h(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Ts(Gh,"Retrying IndexedDB access"),await n(),e.W_.delete(1),await Qh(e)}))}function hl(e,t){return t().catch((n=>ul(e,n,t)))}async function ll(e){const t=As(e),n=Tl(t);let r=t.U_.length>0?t.U_[t.U_.length-1].batchId:-1;for(;dl(t);)try{const e=await Ih(t.localStore,r);if(null===e){0===t.U_.length&&n.P_();break}r=e.batchId,fl(t,e)}catch(i){await ul(t,i)}pl(t)&&gl(t)}function dl(e){return rl(e)&&e.U_.length<10}function fl(e,t){e.U_.push(t);const n=Tl(e);n.c_()&&n.S_&&n.b_(t.mutations)}function pl(e){return rl(e)&&!Tl(e).u_()&&e.U_.length>0}function gl(e){Tl(e).start()}async function ml(e){Tl(e).C_()}async function yl(e){const t=Tl(e);for(const n of e.U_)t.b_(n.mutations)}async function vl(e,t,n){const r=e.U_.shift(),i=Bc.from(r,t,n);await hl(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await ll(e)}async function wl(e,t){t&&Tl(e).S_&&await async function(e,t){if(function(e){switch(e){case Ns.OK:return Cs();case Ns.CANCELLED:case Ns.UNKNOWN:case Ns.DEADLINE_EXCEEDED:case Ns.RESOURCE_EXHAUSTED:case Ns.INTERNAL:case Ns.UNAVAILABLE:case Ns.UNAUTHENTICATED:return!1;case Ns.INVALID_ARGUMENT:case Ns.NOT_FOUND:case Ns.ALREADY_EXISTS:case Ns.PERMISSION_DENIED:case Ns.FAILED_PRECONDITION:case Ns.ABORTED:case Ns.OUT_OF_RANGE:case Ns.UNIMPLEMENTED:case Ns.DATA_LOSS:return!0;default:return Cs()}}(n=t.code)&&n!==Ns.ABORTED){const n=e.U_.shift();Tl(e).h_(),await hl(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await ll(e)}var n}(e,t),pl(e)&&gl(e)}async function _l(e,t){const n=As(e);n.asyncQueue.verifyOperationInProgress(),Ts(Gh,"RemoteStore received new credentials");const r=rl(n);n.W_.add(3),await Jh(n),r&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.W_.delete(3),await Qh(n)}function Il(e){return e.J_||(e.J_=function(e,t,n){const r=As(e);return r.M_(),new Bh(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{xo:sl.bind(null,e),No:ol.bind(null,e),Lo:al.bind(null,e),p_:cl.bind(null,e)}),e.G_.push((async t=>{t?(e.J_.h_(),nl(e)?tl(e):e.j_.set("Unknown")):(await e.J_.stop(),il(e))}))),e.J_}function Tl(e){return e.Y_||(e.Y_=function(e,t,n){const r=As(e);return r.M_(),new $h(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{xo:()=>Promise.resolve(),No:ml.bind(null,e),Lo:wl.bind(null,e),D_:yl.bind(null,e),v_:vl.bind(null,e)}),e.G_.push((async t=>{t?(e.Y_.h_(),await ll(e)):(await e.Y_.stop(),e.U_.length>0&&(Ts(Gh,`Stopping write stream with ${e.U_.length} pending writes`),e.U_=[]))}))),e.Y_
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
 */}class bl{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Rs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new bl(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Ds(Ns.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function El(e,t){if(bs("AsyncQueue",`${t}: ${e}`),ho(e))return new Ds(Ns.UNAVAILABLE,`${t}: ${e}`);throw e}
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
 */class Sl{static emptySet(e){return new Sl(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||ro.comparator(t.key,n.key):(e,t)=>ro.comparator(e.key,t.key),this.keyedMap=tc(),this.sortedSet=new _o(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Sl))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Sl;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
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
 */class Cl{constructor(){this.Z_=new _o(ro.comparator)}track(e){const t=e.doc.key,n=this.Z_.get(t);n?0!==e.type&&3===n.type?this.Z_=this.Z_.insert(t,e):3===e.type&&1!==n.type?this.Z_=this.Z_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Z_=this.Z_.remove(t):1===e.type&&2===n.type?this.Z_=this.Z_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):Cs():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal(((t,n)=>{e.push(n)})),e}}class kl{constructor(e,t,n,r,i,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new kl(e,t,Sl.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ha(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
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
 */class Al{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some((e=>e.ra()))}}class Nl{constructor(){this.queries=Dl(),this.onlineState="Unknown",this.ia=new Set}terminate(){!function(e,t){const n=As(e),r=n.queries;n.queries=Dl(),r.forEach(((e,n)=>{for(const r of n.ta)r.onError(t)}))}(this,new Ds(Ns.ABORTED,"Firestore shutting down"))}}function Dl(){return new Xa((e=>Ka(e)),Ha)}async function Rl(e,t){const n=As(e);let r=3;const i=t.query;let s=n.queries.get(i);s?!s.na()&&t.ra()&&(r=2):(s=new Al,r=t.ra()?0:1);try{switch(r){case 0:s.ea=await n.onListen(i,!0);break;case 1:s.ea=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const e=El(o,`Initialization of query '${Ga(t.query)}' failed`);return void t.onError(e)}n.queries.set(i,s),s.ta.push(t),t.sa(n.onlineState),s.ea&&t.oa(s.ea)&&Ml(n)}async function Ol(e,t){const n=As(e),r=t.query;let i=3;const s=n.queries.get(r);if(s){const e=s.ta.indexOf(t);e>=0&&(s.ta.splice(e,1),0===s.ta.length?i=t.ra()?0:1:!s.na()&&t.ra()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Pl(e,t){const n=As(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.ta)e.oa(i)&&(r=!0);t.ea=i}}r&&Ml(n)}function Ll(e,t,n){const r=As(e),i=r.queries.get(t);if(i)for(const s of i.ta)s.onError(n);r.queries.delete(t)}function Ml(e){e.ia.forEach((e=>{e.next()}))}var xl,Ul;(Ul=xl||(xl={}))._a="default",Ul.Cache="cache";class Fl{constructor(e,t,n){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=n||{}}oa(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new kl(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache)return!0;if(!this.ra())return!0;const n="Offline"!==t;return(!this.options.Ta||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Pa(e){e=kl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==xl.Cache}}
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
 */class Vl{constructor(e){this.key=e}}class jl{constructor(e){this.key=e}}class ql{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=cc(),this.mutatedKeys=cc(),this.ya=Qa(e),this.wa=new Sl(this.ya)}get Sa(){return this.fa}ba(e,t){const n=t?t.Da:new Cl,r=t?t.wa:this.wa;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),h=Wa(this.query,t)?t:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.va(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.ya(h,a)>0||c&&this.ya(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(s=s.add(h),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{wa:s,Da:n,ls:o,mutatedKeys:i}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const s=e.Da.X_();s.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Cs()}};return n(e)-n(t)}(e.type,t.type)||this.ya(e.doc,t.doc))),this.Ca(n),r=null!=r&&r;const o=t&&!r?this.Fa():[],a=0===this.pa.size&&this.current&&!r?1:0,c=a!==this.ga;return this.ga=a,0!==s.length||c?{snapshot:new kl(this.query,e.wa,i,s,e.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ma:o}:{Ma:o}}sa(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({wa:this.wa,Da:new Cl,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach((e=>this.fa=this.fa.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.fa=this.fa.delete(e))),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=cc(),this.wa.forEach((e=>{this.xa(e.key)&&(this.pa=this.pa.add(e.key))}));const t=[];return e.forEach((e=>{this.pa.has(e)||t.push(new jl(e))})),this.pa.forEach((n=>{e.has(n)||t.push(new Vl(n))})),t}Oa(e){this.fa=e.gs,this.pa=cc();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return kl.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,0===this.ga,this.hasCachedResults)}}const Bl="SyncEngine";class $l{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class zl{constructor(e){this.key=e,this.Ba=!1}}class Hl{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.La={},this.ka=new Xa((e=>Ka(e)),Ha),this.qa=new Map,this.Qa=new Set,this.$a=new _o(ro.comparator),this.Ua=new Map,this.Ka=new ih,this.Wa={},this.Ga=new Map,this.za=Ku.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return!0===this.ja}}async function Kl(e,t,n=!0){const r=fd(e);let i;const s=r.ka.get(t);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Na()):i=await Wl(r,t,n,!0),i}async function Gl(e,t){const n=fd(e);await Wl(n,t,!0,!1)}async function Wl(e,t,n,r){const i=await function(e,t){const n=As(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Hr.getTargetData(e,t).next((i=>i?(r=i,uo.resolve(r)):n.Hr.allocateTargetId(e).next((i=>(r=new Fu(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.Hr.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.Ts.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(e.targetId,e),n.Is.set(t,e.targetId)),e}))}(e.localStore,Ba(t)),s=i.targetId,o=e.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await async function(e,t,n,r,i){e.Ha=(t,n,r)=>async function(e,t,n,r){let i=t.view.ba(n);i.ls&&(i=await bh(e.localStore,t.query,!1).then((({documents:e})=>t.view.ba(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=r&&null!=r.targetMismatches.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s,o);return ad(e,t.targetId,a.Ma),a.snapshot}(e,t,n,r);const s=await bh(e.localStore,t,!0),o=new ql(t,s.gs),a=o.ba(s.documents),c=eu.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=o.applyChanges(a,e.isPrimaryClient,c);ad(e,n,u.Ma);const h=new $l(t,n,o);return e.ka.set(t,h),e.qa.has(n)?e.qa.get(n).push(t):e.qa.set(n,[t]),u.snapshot}(e,t,s,"current"===o,i.resumeToken)),e.isPrimaryClient&&n&&Xh(e.remoteStore,i),a}async function Ql(e,t,n){const r=As(e),i=r.ka.get(t),s=r.qa.get(i.targetId);if(s.length>1)return r.qa.set(i.targetId,s.filter((e=>!Ha(e,t)))),void r.ka.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Th(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Yh(r.remoteStore,i.targetId),sd(r,i.targetId)})).catch(co)):(sd(r,i.targetId),await Th(r.localStore,i.targetId,!0))}async function Jl(e,t){const n=As(e),r=n.ka.get(t),i=n.qa.get(r.targetId);n.isPrimaryClient&&1===i.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Yh(n.remoteStore,r.targetId))}async function Xl(e,t,n){const r=function(e){const t=As(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=td.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=nd.bind(null,t),t}(e);try{const e=await function(e,t){const n=As(e),r=Js.now(),i=t.reduce(((e,t)=>e.add(t.key)),cc());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=Za(),c=cc();return n.ds.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=Oc(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new Mc(e.key,t,ua(t.value.mapValue),Cc.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:nc(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Wa[e.currentUser.toKey()];r||(r=new _o($s)),r=r.insert(t,n),e.Wa[e.currentUser.toKey()]=r}(r,e.batchId,n),await hd(r,e.changes),await ll(r.remoteStore)}catch(i){const e=El(i,"Failed to persist write");n.reject(e)}}async function Yl(e,t){const n=As(e);try{const e=await function(e,t){const n=As(e),r=t.snapshotVersion;let i=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.ds.newChangeBuffer({trackRemovals:!0});i=n.Ts;const o=[];t.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Hr.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Hr.addMatchingKeys(e,s.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);var h,l,d;null!==t.targetMismatches.get(a)?u=u.withResumeToken(ko.EMPTY_BYTE_STRING,Xs.min()).withLastLimboFreeSnapshotVersion(Xs.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),l=u,d=s,(0===(h=c).resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-h.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.Hr.updateTargetData(e,u))}));let a=Za(),c=cc();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(function(e,t,n){let r=cc(),i=cc();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=Za();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(Xs.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):Ts(yh,"Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{Vs:r,fs:i}}))}(e,s,t.documentUpdates).next((e=>{a=e.Vs,c=e.fs}))),!r.isEqual(Xs.min())){const t=n.Hr.getLastRemoteSnapshotVersion(e).next((t=>n.Hr.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return uo.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.Ts=i,e)))}(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Ua.get(t);r&&(ks(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.Ba=!0:e.modifiedDocuments.size>0?ks(r.Ba):e.removedDocuments.size>0&&(ks(r.Ba),r.Ba=!1))})),await hd(n,e,t)}catch(r){await co(r)}}function Zl(e,t,n){const r=As(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.ka.forEach(((n,r)=>{const i=r.view.sa(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=As(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.ta)i.sa(t)&&(r=!0)})),r&&Ml(n)}(r.eventManager,t),e.length&&r.La.p_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function ed(e,t,n){const r=As(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Ua.get(t),s=i&&i.key;if(s){let e=new _o(ro.comparator);e=e.insert(s,ha.newNoDocument(s,Xs.min()));const n=cc().add(s),i=new Zc(Xs.min(),new Map,new _o($s),e,n);await Yl(r,i),r.$a=r.$a.remove(s),r.Ua.delete(t),ud(r)}else await Th(r.localStore,t,!1).then((()=>sd(r,t,n))).catch(co)}async function td(e,t){const n=As(e),r=t.batch.batchId;try{const e=await function(e,t){const n=As(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.ds.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=uo.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);ks(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=cc();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(n.localStore,t);id(n,r,null),rd(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await hd(n,e)}catch(i){await co(i)}}async function nd(e,t,n){const r=As(e);try{const e=await function(e,t){const n=As(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(ks(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);id(r,t,n),rd(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await hd(r,e)}catch(i){await co(i)}}function rd(e,t){(e.Ga.get(t)||[]).forEach((e=>{e.resolve()})),e.Ga.delete(t)}function id(e,t,n){const r=As(e);let i=r.Wa[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Wa[r.currentUser.toKey()]=i}}function sd(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.qa.get(t))e.ka.delete(r),n&&e.La.Ja(r,n);e.qa.delete(t),e.isPrimaryClient&&e.Ka.br(t).forEach((t=>{e.Ka.containsKey(t)||od(e,t)}))}function od(e,t){e.Qa.delete(t.path.canonicalString());const n=e.$a.get(t);null!==n&&(Yh(e.remoteStore,n),e.$a=e.$a.remove(t),e.Ua.delete(n),ud(e))}function ad(e,t,n){for(const r of n)r instanceof Vl?(e.Ka.addReference(r.key,t),cd(e,r)):r instanceof jl?(Ts(Bl,"Document no longer in limbo: "+r.key),e.Ka.removeReference(r.key,t),e.Ka.containsKey(r.key)||od(e,r.key)):Cs()}function cd(e,t){const n=t.key,r=n.path.canonicalString();e.$a.get(n)||e.Qa.has(r)||(Ts(Bl,"New document in limbo: "+n),e.Qa.add(r),ud(e))}function ud(e){for(;e.Qa.size>0&&e.$a.size<e.maxConcurrentLimboResolutions;){const t=e.Qa.values().next().value;e.Qa.delete(t);const n=new ro(eo.fromString(t)),r=e.za.next();e.Ua.set(r,new zl(n)),e.$a=e.$a.insert(n,r),Xh(e.remoteStore,new Fu(Ba(Fa(n.path)),r,"TargetPurposeLimboResolution",lo.ae))}}async function hd(e,t,n){const r=As(e),i=[],s=[],o=[];r.ka.isEmpty()||(r.ka.forEach(((e,a)=>{o.push(r.Ha(a,t,n).then((e=>{var t;if((e||n)&&r.isPrimaryClient){const i=e?!e.fromCache:null===(t=null==n?void 0:n.targetChanges.get(a.targetId))||void 0===t?void 0:t.current;r.sharedClientState.updateQueryState(a.targetId,i?"current":"not-current")}if(e){i.push(e);const t=ph.Yi(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.La.p_(i),await async function(e,t){const n=As(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>uo.forEach(t,(t=>uo.forEach(t.Hi,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>uo.forEach(t.Ji,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(r){if(!ho(r))throw r;Ts(yh,"Failed to update sequence numbers: "+r)}for(const i of t){const e=i.targetId;if(!i.fromCache){const t=n.Ts.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.Ts=n.Ts.insert(e,i)}}}(r.localStore,s))}async function ld(e,t){const n=As(e);if(!n.currentUser.isEqual(t)){Ts(Bl,"User change. New user:",t.toKey());const e=await wh(n.localStore,t);n.currentUser=t,(r=n).Ga.forEach((e=>{e.forEach((e=>{e.reject(new Ds(Ns.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),r.Ga.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await hd(n,e.Rs)}var r}function dd(e,t){const n=As(e),r=n.Ua.get(t);if(r&&r.Ba)return cc().add(r.key);{let e=cc();const r=n.qa.get(t);if(!r)return e;for(const t of r){const r=n.ka.get(t);e=e.unionWith(r.view.Sa)}return e}}function fd(e){const t=As(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Yl.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=dd.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ed.bind(null,t),t.La.p_=Pl.bind(null,t.eventManager),t.La.Ja=Ll.bind(null,t.eventManager),t}class pd{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Fh(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return function(e,t,n,r){return new vh(e,t,n,r)}(this.persistence,new mh,e.initialUser,this.serializer)}Xa(e){return new hh(dh.ri,this.serializer)}Za(e){return new Sh}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}pd.provider={build:()=>new pd};class gd extends pd{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){ks(this.persistence.referenceDelegate instanceof fh);const n=this.persistence.referenceDelegate.garbageCollector;return new Ju(n,e.asyncQueue,t)}Xa(e){const t=void 0!==this.cacheSizeBytes?Hu.withCacheSize(this.cacheSizeBytes):Hu.DEFAULT;return new hh((e=>fh.ri(e,t)),this.serializer)}}class md{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Zl(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=ld.bind(null,this.syncEngine),await async function(e,t){const n=As(e);t?(n.W_.delete(2),await Qh(n)):t||(n.W_.add(2),await Jh(n),n.j_.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Nl}createDatastore(e){const t=Fh(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new xh(r));var r;return function(e,t,n,r){return new Hh(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>Zl(this.syncEngine,e,0),s=Ah.D()?new Ah:new Ch,new Wh(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new Hl(e,t,n,r,i,s);return o&&(a.ja=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){const t=As(e);Ts(Gh,"RemoteStore shutting down."),t.W_.add(5),await Jh(t),t.z_.shutdown(),t.j_.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}md.provider={build:()=>new md};
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
class yd{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):bs("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}
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
 */const vd="FirestoreClient";class wd{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=vs.UNAUTHENTICATED,this.clientId=Bs.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async e=>{Ts(vd,"Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Ts(vd,"Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Rs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=El(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function _d(e,t){e.asyncQueue.verifyOperationInProgress(),Ts(vd,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await wh(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function Id(e,t){e.asyncQueue.verifyOperationInProgress();const n=await async function(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Ts(vd,"Using user provided OfflineComponentProvider");try{await _d(e,e._uninitializedComponentsProvider._offline)}catch(t){const i=t;if(!("FirebaseError"===(n=i).name?n.code===Ns.FAILED_PRECONDITION||n.code===Ns.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&n instanceof DOMException)||22===n.code||20===n.code||11===n.code))throw i;Es("Error using user provided cache. Falling back to memory cache: "+i),await _d(e,new pd)}}else Ts(vd,"Using default OfflineComponentProvider"),await _d(e,new gd(void 0));var n;return e._offlineComponents}(e);Ts(vd,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener((e=>_l(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>_l(t.remoteStore,n))),e._onlineComponents=t}async function Td(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Ts(vd,"Using user provided OnlineComponentProvider"),await Id(e,e._uninitializedComponentsProvider._online)):(Ts(vd,"Using default OnlineComponentProvider"),await Id(e,new md))),e._onlineComponents}async function bd(e){const t=await Td(e),n=t.eventManager;return n.onListen=Kl.bind(null,t.syncEngine),n.onUnlisten=Ql.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=Gl.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=Jl.bind(null,t.syncEngine),n}
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
function Ed(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
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
 */}const Sd=new Map;
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
 */function Cd(e,t,n){if(!n)throw new Ds(Ns.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function kd(e){if(!ro.isDocumentKey(e))throw new Ds(Ns.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ad(e){if(ro.isDocumentKey(e))throw new Ds(Ns.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Nd(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":Cs()}function Dd(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Ds(Ns.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Nd(e);throw new Ds(Ns.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
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
 */const Rd="firestore.googleapis.com",Od=!0;class Pd{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new Ds(Ns.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Rd,this.ssl=Od}else this.host=e.host,this.ssl=null!==(t=e.ssl)&&void 0!==t?t:Od;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=zu;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Ds(Ns.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new Ds(Ns.INVALID_ARGUMENT,"experimentalForceLongPolling and experimentalAutoDetectLongPolling cannot be used together.")})(0,e.experimentalForceLongPolling,0,e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ed(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new Ds(Ns.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new Ds(Ns.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new Ds(Ns.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,n}}class Ld{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Ds(Ns.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Ds(Ns.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pd(e),this._emulatorOptions=e.emulatorOptions||{},void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Ps;switch(e.type){case"firstParty":return new Us(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new Ds(Ns.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Sd.get(e);t&&(Ts("ComponentProvider","Removing Datastore"),Sd.delete(e),t.terminate())}(this),Promise.resolve()}}
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
class Md{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Md(this.firestore,e,this._query)}}class xd{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ud(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xd(this.firestore,e,this._key)}}class Ud extends Md{constructor(e,t,n){super(e,t,Fa(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xd(this.firestore,null,new ro(e))}withConverter(e){return new Ud(this.firestore,e,this._path)}}function Fd(e,t,...n){if(e=C(e),Cd("collection","path",t),e instanceof Ld){const r=eo.fromString(t,...n);return Ad(r),new Ud(e,null,r)}{if(!(e instanceof xd||e instanceof Ud))throw new Ds(Ns.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(eo.fromString(t,...n));return Ad(r),new Ud(e.firestore,null,r)}}function Vd(e,t,...n){if(e=C(e),1===arguments.length&&(t=Bs.newId()),Cd("doc","path",t),e instanceof Ld){const r=eo.fromString(t,...n);return kd(r),new xd(e,null,new ro(r))}{if(!(e instanceof xd||e instanceof Ud))throw new Ds(Ns.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(eo.fromString(t,...n));return kd(r),new xd(e.firestore,e instanceof Ud?e.converter:null,new ro(r))}}
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
 */const jd="AsyncQueue";class qd{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Vh(this,"async_queue_retry"),this.Su=()=>{const e=Uh();e&&Ts(jd,"Visibility state changed to "+e.visibilityState),this.a_.t_()},this.bu=e;const t=Uh();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=Uh();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise((()=>{}));const t=new Rs;return this.vu((()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Vu.push(e),this.Cu())))}async Cu(){if(0!==this.Vu.length){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!ho(e))throw e;Ts(jd,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo((()=>this.Cu()))}}vu(e){const t=this.bu.then((()=>(this.pu=!0,e().catch((e=>{throw this.gu=e,this.pu=!1,bs("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e)),e})).then((e=>(this.pu=!1,e))))));return this.bu=t,t}enqueueAfterDelay(e,t,n){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const r=bl.createAndSchedule(this,e,t,n,(e=>this.Fu(e)));return this.fu.push(r),r}Du(){this.gu&&Cs()}verifyOperationInProgress(){}async Mu(){let e;do{e=this.bu,await e}while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then((()=>{this.fu.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.fu)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Mu()}))}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}class Bd extends Ld{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new qd,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new qd(e),this._firestoreClient=void 0,await e}}}function $d(e,t){const n="object"==typeof e?e:ze(),r="string"==typeof e?e:jo,s=Fe(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const e=(()=>{const e=a("firestore");if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return"["===e[0]?[e.substring(1,t-1),n]:[e.substring(0,t),n]})();e&&function(e,t,n,r={}){var s;const o=(e=Dd(e,Ld))._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:e._getEmulatorOptions()}),c=`${t}:${n}`;o.host!==Rd&&o.host!==c&&Es("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:c,ssl:!1,emulatorOptions:r});if(!v(u,a)&&(e._setSettings(u),r.mockUserToken)){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=vs.MOCK_USER;else{t=function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[i(JSON.stringify({alg:"none",type:"JWT"})),i(JSON.stringify(o)),""].join(".")}(r.mockUserToken,null===(s=e._app)||void 0===s?void 0:s.options.projectId);const o=r.mockUserToken.sub||r.mockUserToken.user_id;if(!o)throw new Ds(Ns.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new vs(o)}e._authCredentials=new Ls(new Os(t,n))}}(s,...e)}return s}function zd(e){if(e._terminated)throw new Ds(Ns.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){var t,n,r;const i=e._freezeSettings(),s=(o=e._databaseId,a=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",c=e._persistenceKey,new Vo(o,a,c,(u=i).host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Ed(u.experimentalLongPollingOptions),u.useFetchStreams));var o,a,c,u;e._componentsProvider||(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),e._firestoreClient=new wd(e._authCredentials,e._appCheckCredentials,e._queue,s,e._componentsProvider&&function(e){const t=null==e?void 0:e._online.build();return{_offline:null==e?void 0:e._offline.build(t),_online:t}}(e._componentsProvider))}
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
 */(e),e._firestoreClient}class Hd{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Hd(ko.fromBase64String(e))}catch(t){throw new Ds(Ns.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Hd(ko.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
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
 */class Kd{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Ds(Ns.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new no(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
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
 */class Gd{constructor(e){this._methodName=e}}
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
 */class Wd{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Ds(Ns.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Ds(Ns.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return $s(this._lat,e._lat)||$s(this._long,e._long)}}
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
 */class Qd{constructor(e){this._values=(e||[]).map((e=>e))}toArray(){return this._values.map((e=>e))}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}}
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
 */const Jd=/^__.*__$/;class Xd{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Mc(e,this.data,this.fieldMask,t,this.fieldTransforms):new Lc(e,this.data,t,this.fieldTransforms)}}class Yd{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Mc(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Zd(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Cs()}}class ef{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new ef(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ku({path:n,Qu:!1});return r.$u(e),r}Uu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ku({path:n,Qu:!1});return r.Bu(),r}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return mf(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(0===e.length)throw this.Wu("Document fields must not be empty");if(Zd(this.Lu)&&Jd.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class tf{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Fh(e)}ju(e,t,n,r=!1){return new ef({Lu:e,methodName:t,zu:n,path:no.emptyPath(),Qu:!1,Gu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function nf(e){const t=e._freezeSettings(),n=Fh(e._databaseId);return new tf(e._databaseId,!!t.ignoreUndefinedProperties,n)}function rf(e,t,n,r,i,s={}){const o=e.ju(s.merge||s.mergeFields?2:0,t,n,i);df("Data must be an object, but it was:",o,r);const a=hf(r,o);let c,u;if(s.merge)c=new So(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=ff(t,r,n);if(!o.contains(i))throw new Ds(Ns.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);yf(e,i)||e.push(i)}c=new So(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new Xd(new ca(a),c,u)}class sf extends Gd{_toFieldTransform(e){if(2!==e.Lu)throw 1===e.Lu?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof sf}}class of extends Gd{_toFieldTransform(e){return new Ec(e.path,new mc)}isEqual(e){return e instanceof of}}function af(e,t,n,r){const i=e.ju(1,t,n);df("Data must be an object, but it was:",i,r);const s=[],o=ca.empty();vo(r,((e,r)=>{const a=gf(t,e,n);r=C(r);const c=i.Uu(a);if(r instanceof sf)s.push(a);else{const e=uf(r,c);null!=e&&(s.push(a),o.set(a,e))}}));const a=new So(s);return new Yd(o,a,i.fieldTransforms)}function cf(e,t,n,r,i,s){const o=e.ju(1,t,n),a=[ff(t,r,n)],c=[i];if(s.length%2!=0)throw new Ds(Ns.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(ff(t,s[d])),c.push(s[d+1]);const u=[],h=ca.empty();for(let d=a.length-1;d>=0;--d)if(!yf(u,a[d])){const e=a[d];let t=c[d];t=C(t);const n=o.Uu(e);if(t instanceof sf)u.push(e);else{const r=uf(t,n);null!=r&&(u.push(e),h.set(e,r))}}const l=new So(u);return new Yd(h,l,o.fieldTransforms)}function uf(e,t){if(lf(e=C(e)))return df("Unsupported field value:",t,e),hf(e,t);if(e instanceof Gd)return function(e,t){if(!Zd(t.Lu))throw t.Wu(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Wu(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Qu&&4!==t.Lu)throw t.Wu("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=uf(i,t.Ku(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=C(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return function(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!po(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
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
 */(t)?lc(t):hc(e,t)}(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Js.fromDate(e);return{timestampValue:fu(t.serializer,n)}}if(e instanceof Js){const n=new Js(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:fu(t.serializer,n)}}if(e instanceof Wd)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Hd)return{bytesValue:pu(t.serializer,e._byteString)};if(e instanceof xd){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Wu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:yu(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof Qd)return n=e,r=t,{mapValue:{fields:{[Bo]:{stringValue:zo},[Ho]:{arrayValue:{values:n.toArray().map((e=>{if("number"!=typeof e)throw r.Wu("VectorValues must only contain numeric values.");return hc(r.serializer,e)}))}}}}};var n,r;throw t.Wu(`Unsupported field value: ${Nd(e)}`)}(e,t)}function hf(e,t){const n={};return wo(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):vo(e,((e,r)=>{const i=uf(r,t.qu(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function lf(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Js||e instanceof Wd||e instanceof Hd||e instanceof xd||e instanceof Gd||e instanceof Qd)}function df(e,t,n){if(!lf(n)||"object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r)){const r=Nd(n);throw"an object"===r?t.Wu(e+" a custom object"):t.Wu(e+" "+r)}var r}function ff(e,t,n){if((t=C(t))instanceof Kd)return t._internalPath;if("string"==typeof t)return gf(e,t);throw mf("Field path arguments must be of type string or ",e,!1,void 0,n)}const pf=new RegExp("[~\\*/\\[\\]]");function gf(e,t,n){if(t.search(pf)>=0)throw mf(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Kd(...t.split("."))._internalPath}catch(r){throw mf(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function mf(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new Ds(Ns.INVALID_ARGUMENT,a+e+c)}function yf(e,t){return e.some((e=>e.isEqual(t)))}
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
 */class vf{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new xd(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new wf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(_f("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class wf extends vf{data(){return super.data()}}function _f(e,t){return"string"==typeof t?gf(e,t):t instanceof Kd?t._internalPath:t._delegate._internalPath}
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
 */class If{}class Tf extends If{}function bf(e,t,...n){let r=[];t instanceof If&&r.push(t),r=r.concat(n),function(e){const t=e.filter((e=>e instanceof Cf)).length,n=e.filter((e=>e instanceof Ef)).length;if(t>1||t>0&&n>0)throw new Ds(Ns.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)e=i._apply(e);return e}class Ef extends Tf{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Ef(e,t,n)}_apply(e){const t=this._parse(e);return Nf(e._query,t),new Md(e.firestore,e.converter,$a(e._query,t))}_parse(e){const t=nf(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new Ds(Ns.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){Af(o,s);const t=[];for(const n of o)t.push(kf(r,e,n));a={arrayValue:{values:t}}}else a=kf(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Af(o,s),a=function(e,t,n,r=!1){return uf(n,e.ju(r?4:3,t))}(n,"where",o,"in"===s||"not-in"===s);return ya.create(i,s,a)}(e._query,0,t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function Sf(e,t,n){const r=t,i=_f("where",e);return Ef._create(i,r,n)}class Cf extends If{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Cf(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:va.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const i of r)Nf(n,i),n=$a(n,i)}(e._query,t),new Md(e.firestore,e.converter,$a(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function kf(e,t,n){if("string"==typeof(n=C(n))){if(""===n)throw new Ds(Ns.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ja(t)&&-1!==n.indexOf("/"))throw new Ds(Ns.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(eo.fromString(n));if(!ro.isDocumentKey(r))throw new Ds(Ns.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ta(e,new ro(r))}if(n instanceof xd)return ta(e,n._key);throw new Ds(Ns.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Nd(n)}.`)}function Af(e,t){if(!Array.isArray(e)||0===e.length)throw new Ds(Ns.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Nf(e,t){const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new Ds(Ns.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new Ds(Ns.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class Df{convertValue(e,t="none"){switch(Ko(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Do(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ro(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Cs()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return vo(e,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertVectorValue(e){var t,n,r;const i=null===(r=null===(n=null===(t=e.fields)||void 0===t?void 0:t[Ho].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map((e=>Do(e.doubleValue)));return new Qd(i)}convertGeoPoint(e){return new Wd(Do(e.latitude),Do(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Uo(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Fo(e));default:return null}}convertTimestamp(e){const t=No(e);return new Js(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=eo.fromString(e);ks(Uu(n));const r=new qo(n.get(1),n.get(3)),i=new ro(n.popFirst(5));return r.isEqual(t)||bs(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
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
 */function Rf(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r
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
 */}class Of{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Pf extends vf{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Lf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(_f("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Lf extends Pf{data(e={}){return super.data(e)}}class Mf{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Of(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Lf(this._firestore,this._userDataWriter,n.key,n,new Of(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Ds(Ns.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new Lf(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Of(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new Lf(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Of(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:xf(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function xf(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Cs()}}
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
 */function Uf(e){e=Dd(e,xd);const t=Dd(e.firestore,Bd);return function(e,t,n={}){const r=new Rs;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new yd({next:a=>{s.su(),t.enqueueAndForget((()=>Ol(e,o)));const c=a.docs.has(n);!c&&a.fromCache?i.reject(new Ds(Ns.UNAVAILABLE,"Failed to get document because the client is offline.")):c&&a.fromCache&&r&&"server"===r.source?i.reject(new Ds(Ns.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(a)},error:e=>i.reject(e)}),o=new Fl(Fa(n.path),s,{includeMetadataChanges:!0,Ta:!0});return Rl(e,o)}(await bd(e),e.asyncQueue,t,n,r))),r.promise}(zd(t),e._key).then((n=>function(e,t,n){const r=n.docs.get(t._key),i=new Ff(e);return new Pf(e,i,t._key,r,new Of(n.hasPendingWrites,n.fromCache),t.converter)}
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
 */(t,e,n)))}class Ff extends Df{constructor(e){super(),this.firestore=e}convertBytes(e){return new Hd(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new xd(this.firestore,null,t)}}function Vf(e){e=Dd(e,Md);const t=Dd(e.firestore,Bd),n=zd(t),r=new Ff(t);return function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new Ds(Ns.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),function(e,t,n={}){const r=new Rs;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new yd({next:n=>{s.su(),t.enqueueAndForget((()=>Ol(e,o))),n.fromCache&&"server"===r.source?i.reject(new Ds(Ns.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new Fl(n,s,{includeMetadataChanges:!0,Ta:!0});return Rl(e,o)}(await bd(e),e.asyncQueue,t,n,r))),r.promise}(n,e._query).then((n=>new Mf(t,r,e,n)))}function jf(e,t,n){e=Dd(e,xd);const r=Dd(e.firestore,Bd),i=Rf(e.converter,t,n);return zf(r,[rf(nf(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,Cc.none())])}function qf(e,t,n,...r){e=Dd(e,xd);const i=Dd(e.firestore,Bd),s=nf(i);let o;return o="string"==typeof(t=C(t))||t instanceof Kd?cf(s,"updateDoc",e._key,t,n,r):af(s,"updateDoc",e._key,t),zf(i,[o.toMutation(e._key,Cc.exists(!0))])}function Bf(e){return zf(Dd(e.firestore,Bd),[new Vc(e._key,Cc.none())])}function $f(e,t){const n=Dd(e.firestore,Bd),r=Vd(e),i=Rf(e.converter,t);return zf(n,[rf(nf(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,Cc.exists(!1))]).then((()=>r))}function zf(e,t){return function(e,t){const n=new Rs;return e.asyncQueue.enqueueAndForget((async()=>Xl(await function(e){return Td(e).then((e=>e.syncEngine))}(e),t,n))),n.promise}(zd(e),t)}class Hf{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=nf(e)}set(e,t,n){this._verifyNotCommitted();const r=Kf(e,this._firestore),i=Rf(r.converter,t,n),s=rf(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,Cc.none())),this}update(e,t,n,...r){this._verifyNotCommitted();const i=Kf(e,this._firestore);let s;return s="string"==typeof(t=C(t))||t instanceof Kd?cf(this._dataReader,"WriteBatch.update",i._key,t,n,r):af(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(s.toMutation(i._key,Cc.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Kf(e,this._firestore);return this._mutations=this._mutations.concat(new Vc(t._key,Cc.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new Ds(Ns.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Kf(e,t){if((e=C(e)).firestore!==t)throw new Ds(Ns.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}function Gf(){return new of("serverTimestamp")}
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
 */function Wf(e){return zd(e=Dd(e,Bd)),new Hf(e,(t=>zf(e,t)))}!function(e,t=!0){ws=Be,Ue(new k("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new Bd(new Ms(e.getProvider("auth-internal")),new Vs(i,e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Ds(Ns.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qo(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),He(ms,ys,e),He(ms,ys,"esm2017")}();export{Mn as G,$d as a,Xr as b,Fd as c,Vf as d,Bf as e,Vd as f,ts as g,Gf as h,$e as i,$f as j,Wf as k,Uf as l,$n as m,_r as n,zn as o,Hn as p,bf as q,jf as s,qf as u,Sf as w};
