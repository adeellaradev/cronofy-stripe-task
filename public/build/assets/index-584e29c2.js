import{E as Vt,G as Mt}from"./app-481af7cf.js";var Ft={},Oe={exports:{}},Et=function(e,o){return function(){for(var i=new Array(arguments.length),u=0;u<i.length;u++)i[u]=arguments[u];return e.apply(o,i)}},Ht=Et,V=Object.prototype.toString;function Pe(t){return V.call(t)==="[object Array]"}function Ce(t){return typeof t>"u"}function $t(t){return t!==null&&!Ce(t)&&t.constructor!==null&&!Ce(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}function _t(t){return V.call(t)==="[object ArrayBuffer]"}function Jt(t){return typeof FormData<"u"&&t instanceof FormData}function Wt(t){var e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&t.buffer instanceof ArrayBuffer,e}function Xt(t){return typeof t=="string"}function Kt(t){return typeof t=="number"}function Ct(t){return t!==null&&typeof t=="object"}function ee(t){if(V.call(t)!=="[object Object]")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}function zt(t){return V.call(t)==="[object Date]"}function Gt(t){return V.call(t)==="[object File]"}function Qt(t){return V.call(t)==="[object Blob]"}function Rt(t){return V.call(t)==="[object Function]"}function Yt(t){return Ct(t)&&Rt(t.pipe)}function Zt(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}function er(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function tr(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function Te(t,e){if(!(t===null||typeof t>"u"))if(typeof t!="object"&&(t=[t]),Pe(t))for(var o=0,a=t.length;o<a;o++)e.call(null,t[o],o,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}function Re(){var t={};function e(i,u){ee(t[u])&&ee(i)?t[u]=Re(t[u],i):ee(i)?t[u]=Re({},i):Pe(i)?t[u]=i.slice():t[u]=i}for(var o=0,a=arguments.length;o<a;o++)Te(arguments[o],e);return t}function rr(t,e,o){return Te(e,function(i,u){o&&typeof i=="function"?t[u]=Ht(i,o):t[u]=i}),t}function nr(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}var k={isArray:Pe,isArrayBuffer:_t,isBuffer:$t,isFormData:Jt,isArrayBufferView:Wt,isString:Xt,isNumber:Kt,isObject:Ct,isPlainObject:ee,isUndefined:Ce,isDate:zt,isFile:Gt,isBlob:Qt,isFunction:Rt,isStream:Yt,isURLSearchParams:Zt,isStandardBrowserEnv:tr,forEach:Te,merge:Re,extend:rr,trim:er,stripBOM:nr},F=k;function Ze(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Ot=function(e,o,a){if(!o)return e;var i;if(a)i=a(o);else if(F.isURLSearchParams(o))i=o.toString();else{var u=[];F.forEach(o,function(b,d){b===null||typeof b>"u"||(F.isArray(b)?d=d+"[]":b=[b],F.forEach(b,function(O){F.isDate(O)?O=O.toISOString():F.isObject(O)&&(O=JSON.stringify(O)),u.push(Ze(d)+"="+Ze(O))}))}),i=u.join("&")}if(i){var f=e.indexOf("#");f!==-1&&(e=e.slice(0,f)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e},ir=k;function re(){this.handlers=[]}re.prototype.use=function(e,o,a){return this.handlers.push({fulfilled:e,rejected:o,synchronous:a?a.synchronous:!1,runWhen:a?a.runWhen:null}),this.handlers.length-1};re.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};re.prototype.forEach=function(e){ir.forEach(this.handlers,function(a){a!==null&&e(a)})};var or=re,ar=k,sr=function(e,o){ar.forEach(e,function(i,u){u!==o&&u.toUpperCase()===o.toUpperCase()&&(e[o]=i,delete e[u])})},Pt=function(e,o,a,i,u){return e.config=o,a&&(e.code=a),e.request=i,e.response=u,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e},se,et;function Tt(){if(et)return se;et=1;var t=Pt;return se=function(o,a,i,u,f){var p=new Error(o);return t(p,a,i,u,f)},se}var ue,tt;function ur(){if(tt)return ue;tt=1;var t=Tt();return ue=function(o,a,i){var u=i.config.validateStatus;!i.status||!u||u(i.status)?o(i):a(t("Request failed with status code "+i.status,i.config,null,i.request,i))},ue}var ce,rt;function cr(){if(rt)return ce;rt=1;var t=k;return ce=t.isStandardBrowserEnv()?function(){return{write:function(a,i,u,f,p,b){var d=[];d.push(a+"="+encodeURIComponent(i)),t.isNumber(u)&&d.push("expires="+new Date(u).toGMTString()),t.isString(f)&&d.push("path="+f),t.isString(p)&&d.push("domain="+p),b===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(a){var i=document.cookie.match(new RegExp("(^|;\\s*)("+a+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove:function(a){this.write(a,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),ce}var le,nt;function lr(){return nt||(nt=1,le=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}),le}var de,it;function dr(){return it||(it=1,de=function(e,o){return o?e.replace(/\/+$/,"")+"/"+o.replace(/^\/+/,""):e}),de}var fe,ot;function fr(){if(ot)return fe;ot=1;var t=lr(),e=dr();return fe=function(a,i){return a&&!t(i)?e(a,i):i},fe}var he,at;function hr(){if(at)return he;at=1;var t=k,e=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return he=function(a){var i={},u,f,p;return a&&t.forEach(a.split(`
`),function(d){if(p=d.indexOf(":"),u=t.trim(d.substr(0,p)).toLowerCase(),f=t.trim(d.substr(p+1)),u){if(i[u]&&e.indexOf(u)>=0)return;u==="set-cookie"?i[u]=(i[u]?i[u]:[]).concat([f]):i[u]=i[u]?i[u]+", "+f:f}}),i},he}var pe,st;function pr(){if(st)return pe;st=1;var t=k;return pe=t.isStandardBrowserEnv()?function(){var o=/(msie|trident)/i.test(navigator.userAgent),a=document.createElement("a"),i;function u(f){var p=f;return o&&(a.setAttribute("href",p),p=a.href),a.setAttribute("href",p),{href:a.href,protocol:a.protocol?a.protocol.replace(/:$/,""):"",host:a.host,search:a.search?a.search.replace(/^\?/,""):"",hash:a.hash?a.hash.replace(/^#/,""):"",hostname:a.hostname,port:a.port,pathname:a.pathname.charAt(0)==="/"?a.pathname:"/"+a.pathname}}return i=u(window.location.href),function(p){var b=t.isString(p)?u(p):p;return b.protocol===i.protocol&&b.host===i.host}}():function(){return function(){return!0}}(),pe}var ve,ut;function ct(){if(ut)return ve;ut=1;var t=k,e=ur(),o=cr(),a=Ot,i=fr(),u=hr(),f=pr(),p=Tt();return ve=function(d){return new Promise(function(O,g){var y=d.data,j=d.headers,A=d.responseType;t.isFormData(y)&&delete j["Content-Type"];var v=new XMLHttpRequest;if(d.auth){var N=d.auth.username||"",W=d.auth.password?unescape(encodeURIComponent(d.auth.password)):"";j.Authorization="Basic "+btoa(N+":"+W)}var X=i(d.baseURL,d.url);v.open(d.method.toUpperCase(),a(X,d.params,d.paramsSerializer),!0),v.timeout=d.timeout;function K(){if(v){var l="getAllResponseHeaders"in v?u(v.getAllResponseHeaders()):null,s=!A||A==="text"||A==="json"?v.responseText:v.response,r={data:s,status:v.status,statusText:v.statusText,headers:l,config:d,request:v};e(O,g,r),v=null}}if("onloadend"in v?v.onloadend=K:v.onreadystatechange=function(){!v||v.readyState!==4||v.status===0&&!(v.responseURL&&v.responseURL.indexOf("file:")===0)||setTimeout(K)},v.onabort=function(){v&&(g(p("Request aborted",d,"ECONNABORTED",v)),v=null)},v.onerror=function(){g(p("Network Error",d,null,v)),v=null},v.ontimeout=function(){var s="timeout of "+d.timeout+"ms exceeded";d.timeoutErrorMessage&&(s=d.timeoutErrorMessage),g(p(s,d,d.transitional&&d.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",v)),v=null},t.isStandardBrowserEnv()){var z=(d.withCredentials||f(X))&&d.xsrfCookieName?o.read(d.xsrfCookieName):void 0;z&&(j[d.xsrfHeaderName]=z)}"setRequestHeader"in v&&t.forEach(j,function(s,r){typeof y>"u"&&r.toLowerCase()==="content-type"?delete j[r]:v.setRequestHeader(r,s)}),t.isUndefined(d.withCredentials)||(v.withCredentials=!!d.withCredentials),A&&A!=="json"&&(v.responseType=d.responseType),typeof d.onDownloadProgress=="function"&&v.addEventListener("progress",d.onDownloadProgress),typeof d.onUploadProgress=="function"&&v.upload&&v.upload.addEventListener("progress",d.onUploadProgress),d.cancelToken&&d.cancelToken.promise.then(function(s){v&&(v.abort(),g(s),v=null)}),y||(y=null),v.send(y)})},ve}var T=k,lt=sr,vr=Pt,mr={"Content-Type":"application/x-www-form-urlencoded"};function dt(t,e){!T.isUndefined(t)&&T.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function gr(){var t;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(t=ct()),t}function yr(t,e,o){if(T.isString(t))try{return(e||JSON.parse)(t),T.trim(t)}catch(a){if(a.name!=="SyntaxError")throw a}return(o||JSON.stringify)(t)}var ne={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:gr(),transformRequest:[function(e,o){return lt(o,"Accept"),lt(o,"Content-Type"),T.isFormData(e)||T.isArrayBuffer(e)||T.isBuffer(e)||T.isStream(e)||T.isFile(e)||T.isBlob(e)?e:T.isArrayBufferView(e)?e.buffer:T.isURLSearchParams(e)?(dt(o,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):T.isObject(e)||o&&o["Content-Type"]==="application/json"?(dt(o,"application/json"),yr(e)):e}],transformResponse:[function(e){var o=this.transitional,a=o&&o.silentJSONParsing,i=o&&o.forcedJSONParsing,u=!a&&this.responseType==="json";if(u||i&&T.isString(e)&&e.length)try{return JSON.parse(e)}catch(f){if(u)throw f.name==="SyntaxError"?vr(f,this,"E_JSON_PARSE"):f}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};ne.headers={common:{Accept:"application/json, text/plain, */*"}};T.forEach(["delete","get","head"],function(e){ne.headers[e]={}});T.forEach(["post","put","patch"],function(e){ne.headers[e]=T.merge(mr)});var xe=ne,wr=k,br=xe,Sr=function(e,o,a){var i=this||br;return wr.forEach(a,function(f){e=f.call(i,e,o)}),e},me,ft;function xt(){return ft||(ft=1,me=function(e){return!!(e&&e.__CANCEL__)}),me}var ht=k,ge=Sr,Er=xt(),Cr=xe;function ye(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var Rr=function(e){ye(e),e.headers=e.headers||{},e.data=ge.call(e,e.data,e.headers,e.transformRequest),e.headers=ht.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),ht.forEach(["delete","get","head","post","put","patch","common"],function(i){delete e.headers[i]});var o=e.adapter||Cr.adapter;return o(e).then(function(i){return ye(e),i.data=ge.call(e,i.data,i.headers,e.transformResponse),i},function(i){return Er(i)||(ye(e),i&&i.response&&(i.response.data=ge.call(e,i.response.data,i.response.headers,e.transformResponse))),Promise.reject(i)})},x=k,At=function(e,o){o=o||{};var a={},i=["url","method","data"],u=["headers","auth","proxy","params"],f=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],p=["validateStatus"];function b(g,y){return x.isPlainObject(g)&&x.isPlainObject(y)?x.merge(g,y):x.isPlainObject(y)?x.merge({},y):x.isArray(y)?y.slice():y}function d(g){x.isUndefined(o[g])?x.isUndefined(e[g])||(a[g]=b(void 0,e[g])):a[g]=b(e[g],o[g])}x.forEach(i,function(y){x.isUndefined(o[y])||(a[y]=b(void 0,o[y]))}),x.forEach(u,d),x.forEach(f,function(y){x.isUndefined(o[y])?x.isUndefined(e[y])||(a[y]=b(void 0,e[y])):a[y]=b(void 0,o[y])}),x.forEach(p,function(y){y in o?a[y]=b(e[y],o[y]):y in e&&(a[y]=b(void 0,e[y]))});var q=i.concat(u).concat(f).concat(p),O=Object.keys(e).concat(Object.keys(o)).filter(function(y){return q.indexOf(y)===-1});return x.forEach(O,d),a};const Or="axios",Pr="0.21.4",Tr="Promise based HTTP client for the browser and node.js",xr="index.js",Ar={test:"grunt test",start:"node ./sandbox/server.js",build:"NODE_ENV=production grunt build",preversion:"npm test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",postversion:"git push && git push --tags",examples:"node ./examples/server.js",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",fix:"eslint --fix lib/**/*.js"},Lr={type:"git",url:"https://github.com/axios/axios.git"},kr=["xhr","http","ajax","promise","node"],jr="Matt Zabriskie",Ir="MIT",qr={url:"https://github.com/axios/axios/issues"},Nr="https://axios-http.com",Ur={coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"},Br={"./lib/adapters/http.js":"./lib/adapters/xhr.js"},Dr="dist/axios.min.js",Vr="dist/axios.min.js",Mr="./index.d.ts",Fr={"follow-redirects":"^1.14.0"},Hr=[{path:"./dist/axios.min.js",threshold:"5kB"}],$r={name:Or,version:Pr,description:Tr,main:xr,scripts:Ar,repository:Lr,keywords:kr,author:jr,license:Ir,bugs:qr,homepage:Nr,devDependencies:Ur,browser:Br,jsdelivr:Dr,unpkg:Vr,typings:Mr,dependencies:Fr,bundlesize:Hr};var Lt=$r,Ae={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){Ae[t]=function(a){return typeof a===t||"a"+(e<1?"n ":" ")+t}});var pt={},_r=Lt.version.split(".");function kt(t,e){for(var o=e?e.split("."):_r,a=t.split("."),i=0;i<3;i++){if(o[i]>a[i])return!0;if(o[i]<a[i])return!1}return!1}Ae.transitional=function(e,o,a){var i=o&&kt(o);function u(f,p){return"[Axios v"+Lt.version+"] Transitional option '"+f+"'"+p+(a?". "+a:"")}return function(f,p,b){if(e===!1)throw new Error(u(p," has been removed in "+o));return i&&!pt[p]&&(pt[p]=!0,console.warn(u(p," has been deprecated since v"+o+" and will be removed in the near future"))),e?e(f,p,b):!0}};function Jr(t,e,o){if(typeof t!="object")throw new TypeError("options must be an object");for(var a=Object.keys(t),i=a.length;i-- >0;){var u=a[i],f=e[u];if(f){var p=t[u],b=p===void 0||f(p,u,t);if(b!==!0)throw new TypeError("option "+u+" must be "+b);continue}if(o!==!0)throw Error("Unknown option "+u)}}var Wr={isOlderVersion:kt,assertOptions:Jr,validators:Ae},jt=k,Xr=Ot,vt=or,mt=Rr,ie=At,It=Wr,H=It.validators;function J(t){this.defaults=t,this.interceptors={request:new vt,response:new vt}}J.prototype.request=function(e){typeof e=="string"?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=ie(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var o=e.transitional;o!==void 0&&It.assertOptions(o,{silentJSONParsing:H.transitional(H.boolean,"1.0.0"),forcedJSONParsing:H.transitional(H.boolean,"1.0.0"),clarifyTimeoutError:H.transitional(H.boolean,"1.0.0")},!1);var a=[],i=!0;this.interceptors.request.forEach(function(g){typeof g.runWhen=="function"&&g.runWhen(e)===!1||(i=i&&g.synchronous,a.unshift(g.fulfilled,g.rejected))});var u=[];this.interceptors.response.forEach(function(g){u.push(g.fulfilled,g.rejected)});var f;if(!i){var p=[mt,void 0];for(Array.prototype.unshift.apply(p,a),p=p.concat(u),f=Promise.resolve(e);p.length;)f=f.then(p.shift(),p.shift());return f}for(var b=e;a.length;){var d=a.shift(),q=a.shift();try{b=d(b)}catch(O){q(O);break}}try{f=mt(b)}catch(O){return Promise.reject(O)}for(;u.length;)f=f.then(u.shift(),u.shift());return f};J.prototype.getUri=function(e){return e=ie(this.defaults,e),Xr(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};jt.forEach(["delete","get","head","options"],function(e){J.prototype[e]=function(o,a){return this.request(ie(a||{},{method:e,url:o,data:(a||{}).data}))}});jt.forEach(["post","put","patch"],function(e){J.prototype[e]=function(o,a,i){return this.request(ie(i||{},{method:e,url:o,data:a}))}});var Kr=J,we,gt;function qt(){if(gt)return we;gt=1;function t(e){this.message=e}return t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,we=t,we}var be,yt;function zr(){if(yt)return be;yt=1;var t=qt();function e(o){if(typeof o!="function")throw new TypeError("executor must be a function.");var a;this.promise=new Promise(function(f){a=f});var i=this;o(function(f){i.reason||(i.reason=new t(f),a(i.reason))})}return e.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},e.source=function(){var a,i=new e(function(f){a=f});return{token:i,cancel:a}},be=e,be}var Se,wt;function Gr(){return wt||(wt=1,Se=function(e){return function(a){return e.apply(null,a)}}),Se}var Ee,bt;function Qr(){return bt||(bt=1,Ee=function(e){return typeof e=="object"&&e.isAxiosError===!0}),Ee}var St=k,Yr=Et,te=Kr,Zr=At,en=xe;function Nt(t){var e=new te(t),o=Yr(te.prototype.request,e);return St.extend(o,te.prototype,e),St.extend(o,e),o}var I=Nt(en);I.Axios=te;I.create=function(e){return Nt(Zr(I.defaults,e))};I.Cancel=qt();I.CancelToken=zr();I.isCancel=xt();I.all=function(e){return Promise.all(e)};I.spread=Gr();I.isAxiosError=Qr();Oe.exports=I;Oe.exports.default=I;var tn=Oe.exports,rn=tn;(function(t){function e(l){return l&&typeof l=="object"&&"default"in l?l.default:l}var o=e(rn),a=Mt,i=e(Vt);function u(){return(u=Object.assign?Object.assign.bind():function(l){for(var s=1;s<arguments.length;s++){var r=arguments[s];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(l[n]=r[n])}return l}).apply(this,arguments)}var f,p={modal:null,listener:null,show:function(l){var s=this;typeof l=="object"&&(l="All Inertia requests must receive a valid Inertia response, however a plain JSON response was received.<hr>"+JSON.stringify(l));var r=document.createElement("html");r.innerHTML=l,r.querySelectorAll("a").forEach(function(c){return c.setAttribute("target","_top")}),this.modal=document.createElement("div"),this.modal.style.position="fixed",this.modal.style.width="100vw",this.modal.style.height="100vh",this.modal.style.padding="50px",this.modal.style.boxSizing="border-box",this.modal.style.backgroundColor="rgba(0, 0, 0, .6)",this.modal.style.zIndex=2e5,this.modal.addEventListener("click",function(){return s.hide()});var n=document.createElement("iframe");if(n.style.backgroundColor="white",n.style.borderRadius="5px",n.style.width="100%",n.style.height="100%",this.modal.appendChild(n),document.body.prepend(this.modal),document.body.style.overflow="hidden",!n.contentWindow)throw new Error("iframe not yet ready.");n.contentWindow.document.open(),n.contentWindow.document.write(r.outerHTML),n.contentWindow.document.close(),this.listener=this.hideOnEscape.bind(this),document.addEventListener("keydown",this.listener)},hide:function(){this.modal.outerHTML="",this.modal=null,document.body.style.overflow="visible",document.removeEventListener("keydown",this.listener)},hideOnEscape:function(l){l.keyCode===27&&this.hide()}};function b(l,s){var r;return function(){var n=arguments,c=this;clearTimeout(r),r=setTimeout(function(){return l.apply(c,[].slice.call(n))},s)}}function d(l,s,r){for(var n in s===void 0&&(s=new FormData),r===void 0&&(r=null),l=l||{})Object.prototype.hasOwnProperty.call(l,n)&&O(s,q(r,n),l[n]);return s}function q(l,s){return l?l+"["+s+"]":s}function O(l,s,r){return Array.isArray(r)?Array.from(r.keys()).forEach(function(n){return O(l,q(s,n.toString()),r[n])}):r instanceof Date?l.append(s,r.toISOString()):r instanceof File?l.append(s,r,r.name):r instanceof Blob?l.append(s,r):typeof r=="boolean"?l.append(s,r?"1":"0"):typeof r=="string"?l.append(s,r):typeof r=="number"?l.append(s,""+r):r==null?l.append(s,""):void d(r,l,s)}function g(l){return new URL(l.toString(),window.location.toString())}function y(l,s,r,n){n===void 0&&(n="brackets");var c=/^https?:\/\//.test(s.toString()),h=c||s.toString().startsWith("/"),E=!h&&!s.toString().startsWith("#")&&!s.toString().startsWith("?"),R=s.toString().includes("?")||l===t.Method.GET&&Object.keys(r).length,S=s.toString().includes("#"),m=new URL(s.toString(),"http://localhost");return l===t.Method.GET&&Object.keys(r).length&&(m.search=a.stringify(i(a.parse(m.search,{ignoreQueryPrefix:!0}),r),{encodeValuesOnly:!0,arrayFormat:n}),r={}),[[c?m.protocol+"//"+m.host:"",h?m.pathname:"",E?m.pathname.substring(1):"",R?m.search:"",S?m.hash:""].join(""),r]}function j(l){return(l=new URL(l.href)).hash="",l}function A(l,s){return document.dispatchEvent(new CustomEvent("inertia:"+l,s))}(f=t.Method||(t.Method={})).GET="get",f.POST="post",f.PUT="put",f.PATCH="patch",f.DELETE="delete";var v=function(l){return A("finish",{detail:{visit:l}})},N=function(l){return A("navigate",{detail:{page:l}})},W=typeof window>"u",X=function(){function l(){this.visitId=null}var s=l.prototype;return s.init=function(r){var n=r.resolveComponent,c=r.swapComponent;this.page=r.initialPage,this.resolveComponent=n,this.swapComponent=c,this.isBackForwardVisit()?this.handleBackForwardVisit(this.page):this.isLocationVisit()?this.handleLocationVisit(this.page):this.handleInitialPageVisit(this.page),this.setupEventListeners()},s.handleInitialPageVisit=function(r){this.page.url+=window.location.hash,this.setPage(r,{preserveState:!0}).then(function(){return N(r)})},s.setupEventListeners=function(){window.addEventListener("popstate",this.handlePopstateEvent.bind(this)),document.addEventListener("scroll",b(this.handleScrollEvent.bind(this),100),!0)},s.scrollRegions=function(){return document.querySelectorAll("[scroll-region]")},s.handleScrollEvent=function(r){typeof r.target.hasAttribute=="function"&&r.target.hasAttribute("scroll-region")&&this.saveScrollPositions()},s.saveScrollPositions=function(){this.replaceState(u({},this.page,{scrollRegions:Array.from(this.scrollRegions()).map(function(r){return{top:r.scrollTop,left:r.scrollLeft}})}))},s.resetScrollPositions=function(){var r;window.scrollTo(0,0),this.scrollRegions().forEach(function(n){typeof n.scrollTo=="function"?n.scrollTo(0,0):(n.scrollTop=0,n.scrollLeft=0)}),this.saveScrollPositions(),window.location.hash&&((r=document.getElementById(window.location.hash.slice(1)))==null||r.scrollIntoView())},s.restoreScrollPositions=function(){var r=this;this.page.scrollRegions&&this.scrollRegions().forEach(function(n,c){var h=r.page.scrollRegions[c];h&&(typeof n.scrollTo=="function"?n.scrollTo(h.left,h.top):(n.scrollTop=h.top,n.scrollLeft=h.left))})},s.isBackForwardVisit=function(){return window.history.state&&window.performance&&window.performance.getEntriesByType("navigation").length>0&&window.performance.getEntriesByType("navigation")[0].type==="back_forward"},s.handleBackForwardVisit=function(r){var n=this;window.history.state.version=r.version,this.setPage(window.history.state,{preserveScroll:!0,preserveState:!0}).then(function(){n.restoreScrollPositions(),N(r)})},s.locationVisit=function(r,n){try{window.sessionStorage.setItem("inertiaLocationVisit",JSON.stringify({preserveScroll:n})),window.location.href=r.href,j(window.location).href===j(r).href&&window.location.reload()}catch{return!1}},s.isLocationVisit=function(){try{return window.sessionStorage.getItem("inertiaLocationVisit")!==null}catch{return!1}},s.handleLocationVisit=function(r){var n,c,h,E,R=this,S=JSON.parse(window.sessionStorage.getItem("inertiaLocationVisit")||"");window.sessionStorage.removeItem("inertiaLocationVisit"),r.url+=window.location.hash,r.rememberedState=(n=(c=window.history.state)==null?void 0:c.rememberedState)!=null?n:{},r.scrollRegions=(h=(E=window.history.state)==null?void 0:E.scrollRegions)!=null?h:[],this.setPage(r,{preserveScroll:S.preserveScroll,preserveState:!0}).then(function(){S.preserveScroll&&R.restoreScrollPositions(),N(r)})},s.isLocationVisitResponse=function(r){return r&&r.status===409&&r.headers["x-inertia-location"]},s.isInertiaResponse=function(r){return r==null?void 0:r.headers["x-inertia"]},s.createVisitId=function(){return this.visitId={},this.visitId},s.cancelVisit=function(r,n){var c=n.cancelled,h=c!==void 0&&c,E=n.interrupted,R=E!==void 0&&E;!r||r.completed||r.cancelled||r.interrupted||(r.cancelToken.cancel(),r.onCancel(),r.completed=!1,r.cancelled=h,r.interrupted=R,v(r),r.onFinish(r))},s.finishVisit=function(r){r.cancelled||r.interrupted||(r.completed=!0,r.cancelled=!1,r.interrupted=!1,v(r),r.onFinish(r))},s.resolvePreserveOption=function(r,n){return typeof r=="function"?r(n):r==="errors"?Object.keys(n.props.errors||{}).length>0:r},s.visit=function(r,n){var c=this,h=n===void 0?{}:n,E=h.method,R=E===void 0?t.Method.GET:E,S=h.data,m=S===void 0?{}:S,L=h.replace,U=L!==void 0&&L,$=h.preserveScroll,B=$!==void 0&&$,G=h.preserveState,Q=G!==void 0&&G,Le=h.only,Y=Le===void 0?[]:Le,ke=h.headers,je=ke===void 0?{}:ke,Ie=h.errorBag,D=Ie===void 0?"":Ie,qe=h.forceFormData,Ne=qe!==void 0&&qe,Ue=h.onCancelToken,Be=Ue===void 0?function(){}:Ue,De=h.onBefore,Ve=De===void 0?function(){}:De,Me=h.onStart,Fe=Me===void 0?function(){}:Me,He=h.onProgress,$e=He===void 0?function(){}:He,_e=h.onFinish,Ut=_e===void 0?function(){}:_e,Je=h.onCancel,Bt=Je===void 0?function(){}:Je,We=h.onSuccess,Xe=We===void 0?function(){}:We,Ke=h.onError,ze=Ke===void 0?function(){}:Ke,Ge=h.queryStringArrayFormat,oe=Ge===void 0?"brackets":Ge,M=typeof r=="string"?g(r):r;if(!function w(C){return C instanceof File||C instanceof Blob||C instanceof FileList&&C.length>0||C instanceof FormData&&Array.from(C.values()).some(function(P){return w(P)})||typeof C=="object"&&C!==null&&Object.values(C).some(function(P){return w(P)})}(m)&&!Ne||m instanceof FormData||(m=d(m)),!(m instanceof FormData)){var Qe=y(R,M,m,oe),Dt=Qe[1];M=g(Qe[0]),m=Dt}var _={url:M,method:R,data:m,replace:U,preserveScroll:B,preserveState:Q,only:Y,headers:je,errorBag:D,forceFormData:Ne,queryStringArrayFormat:oe,cancelled:!1,completed:!1,interrupted:!1};if(Ve(_)!==!1&&function(w){return A("before",{cancelable:!0,detail:{visit:w}})}(_)){this.activeVisit&&this.cancelVisit(this.activeVisit,{interrupted:!0}),this.saveScrollPositions();var Ye=this.createVisitId();this.activeVisit=u({},_,{onCancelToken:Be,onBefore:Ve,onStart:Fe,onProgress:$e,onFinish:Ut,onCancel:Bt,onSuccess:Xe,onError:ze,queryStringArrayFormat:oe,cancelToken:o.CancelToken.source()}),Be({cancel:function(){c.activeVisit&&c.cancelVisit(c.activeVisit,{cancelled:!0})}}),function(w){A("start",{detail:{visit:w}})}(_),Fe(_),o({method:R,url:j(M).href,data:R===t.Method.GET?{}:m,params:R===t.Method.GET?m:{},cancelToken:this.activeVisit.cancelToken.token,headers:u({},je,{Accept:"text/html, application/xhtml+xml","X-Requested-With":"XMLHttpRequest","X-Inertia":!0},Y.length?{"X-Inertia-Partial-Component":this.page.component,"X-Inertia-Partial-Data":Y.join(",")}:{},D&&D.length?{"X-Inertia-Error-Bag":D}:{},this.page.version?{"X-Inertia-Version":this.page.version}:{}),onUploadProgress:function(w){m instanceof FormData&&(w.percentage=Math.round(w.loaded/w.total*100),function(C){A("progress",{detail:{progress:C}})}(w),$e(w))}}).then(function(w){var C;if(!c.isInertiaResponse(w))return Promise.reject({response:w});var P=w.data;Y.length&&P.component===c.page.component&&(P.props=u({},c.page.props,P.props)),B=c.resolvePreserveOption(B,P),(Q=c.resolvePreserveOption(Q,P))&&(C=window.history.state)!=null&&C.rememberedState&&P.component===c.page.component&&(P.rememberedState=window.history.state.rememberedState);var ae=M,Z=g(P.url);return ae.hash&&!Z.hash&&j(ae).href===Z.href&&(Z.hash=ae.hash,P.url=Z.href),c.setPage(P,{visitId:Ye,replace:U,preserveScroll:B,preserveState:Q})}).then(function(){var w=c.page.props.errors||{};if(Object.keys(w).length>0){var C=D?w[D]?w[D]:{}:w;return function(P){A("error",{detail:{errors:P}})}(C),ze(C)}return A("success",{detail:{page:c.page}}),Xe(c.page)}).catch(function(w){if(c.isInertiaResponse(w.response))return c.setPage(w.response.data,{visitId:Ye});if(c.isLocationVisitResponse(w.response)){var C=g(w.response.headers["x-inertia-location"]),P=M;P.hash&&!C.hash&&j(P).href===C.href&&(C.hash=P.hash),c.locationVisit(C,B===!0)}else{if(!w.response)return Promise.reject(w);A("invalid",{cancelable:!0,detail:{response:w.response}})&&p.show(w.response.data)}}).then(function(){c.activeVisit&&c.finishVisit(c.activeVisit)}).catch(function(w){if(!o.isCancel(w)){var C=A("exception",{cancelable:!0,detail:{exception:w}});if(c.activeVisit&&c.finishVisit(c.activeVisit),C)return Promise.reject(w)}})}},s.setPage=function(r,n){var c=this,h=n===void 0?{}:n,E=h.visitId,R=E===void 0?this.createVisitId():E,S=h.replace,m=S!==void 0&&S,L=h.preserveScroll,U=L!==void 0&&L,$=h.preserveState,B=$!==void 0&&$;return Promise.resolve(this.resolveComponent(r.component)).then(function(G){R===c.visitId&&(r.scrollRegions=r.scrollRegions||[],r.rememberedState=r.rememberedState||{},(m=m||g(r.url).href===window.location.href)?c.replaceState(r):c.pushState(r),c.swapComponent({component:G,page:r,preserveState:B}).then(function(){U||c.resetScrollPositions(),m||N(r)}))})},s.pushState=function(r){this.page=r,window.history.pushState(r,"",r.url)},s.replaceState=function(r){this.page=r,window.history.replaceState(r,"",r.url)},s.handlePopstateEvent=function(r){var n=this;if(r.state!==null){var c=r.state,h=this.createVisitId();Promise.resolve(this.resolveComponent(c.component)).then(function(R){h===n.visitId&&(n.page=c,n.swapComponent({component:R,page:c,preserveState:!1}).then(function(){n.restoreScrollPositions(),N(c)}))})}else{var E=g(this.page.url);E.hash=window.location.hash,this.replaceState(u({},this.page,{url:E.href})),this.resetScrollPositions()}},s.get=function(r,n,c){return n===void 0&&(n={}),c===void 0&&(c={}),this.visit(r,u({},c,{method:t.Method.GET,data:n}))},s.reload=function(r){return r===void 0&&(r={}),this.visit(window.location.href,u({},r,{preserveScroll:!0,preserveState:!0}))},s.replace=function(r,n){var c;return n===void 0&&(n={}),console.warn("Inertia.replace() has been deprecated and will be removed in a future release. Please use Inertia."+((c=n.method)!=null?c:"get")+"() instead."),this.visit(r,u({preserveState:!0},n,{replace:!0}))},s.post=function(r,n,c){return n===void 0&&(n={}),c===void 0&&(c={}),this.visit(r,u({preserveState:!0},c,{method:t.Method.POST,data:n}))},s.put=function(r,n,c){return n===void 0&&(n={}),c===void 0&&(c={}),this.visit(r,u({preserveState:!0},c,{method:t.Method.PUT,data:n}))},s.patch=function(r,n,c){return n===void 0&&(n={}),c===void 0&&(c={}),this.visit(r,u({preserveState:!0},c,{method:t.Method.PATCH,data:n}))},s.delete=function(r,n){return n===void 0&&(n={}),this.visit(r,u({preserveState:!0},n,{method:t.Method.DELETE}))},s.remember=function(r,n){var c,h;n===void 0&&(n="default"),W||this.replaceState(u({},this.page,{rememberedState:u({},(c=this.page)==null?void 0:c.rememberedState,(h={},h[n]=r,h))}))},s.restore=function(r){var n,c;if(r===void 0&&(r="default"),!W)return(n=window.history.state)==null||(c=n.rememberedState)==null?void 0:c[r]},s.on=function(r,n){var c=function(h){var E=n(h);h.cancelable&&!h.defaultPrevented&&E===!1&&h.preventDefault()};return document.addEventListener("inertia:"+r,c),function(){return document.removeEventListener("inertia:"+r,c)}},l}(),K={buildDOMElement:function(l){var s=document.createElement("template");s.innerHTML=l;var r=s.content.firstChild;if(!l.startsWith("<script "))return r;var n=document.createElement("script");return n.innerHTML=r.innerHTML,r.getAttributeNames().forEach(function(c){n.setAttribute(c,r.getAttribute(c)||"")}),n},isInertiaManagedElement:function(l){return l.nodeType===Node.ELEMENT_NODE&&l.getAttribute("inertia")!==null},findMatchingElementIndex:function(l,s){var r=l.getAttribute("inertia");return r!==null?s.findIndex(function(n){return n.getAttribute("inertia")===r}):-1},update:b(function(l){var s=this,r=l.map(function(n){return s.buildDOMElement(n)});Array.from(document.head.childNodes).filter(function(n){return s.isInertiaManagedElement(n)}).forEach(function(n){var c=s.findMatchingElementIndex(n,r);if(c!==-1){var h,E=r.splice(c,1)[0];E&&!n.isEqualNode(E)&&(n==null||(h=n.parentNode)==null||h.replaceChild(E,n))}else{var R;n==null||(R=n.parentNode)==null||R.removeChild(n)}}),r.forEach(function(n){return document.head.appendChild(n)})},1)},z=new X;t.Inertia=z,t.createHeadManager=function(l,s,r){var n={},c=0;function h(){var R=Object.values(n).reduce(function(S,m){return S.concat(m)},[]).reduce(function(S,m){if(m.indexOf("<")===-1)return S;if(m.indexOf("<title ")===0){var L=m.match(/(<title [^>]+>)(.*?)(<\/title>)/);return S.title=L?""+L[1]+s(L[2])+L[3]:m,S}var U=m.match(/ inertia="[^"]+"/);return U?S[U[0]]=m:S[Object.keys(S).length]=m,S},{});return Object.values(R)}function E(){l?r(h()):K.update(h())}return{createProvider:function(){var R=function(){var S=c+=1;return n[S]=[],S.toString()}();return{update:function(S){return function(m,L){L===void 0&&(L=[]),m!==null&&Object.keys(n).indexOf(m)>-1&&(n[m]=L),E()}(R,S)},disconnect:function(){return function(S){S!==null&&Object.keys(n).indexOf(S)!==-1&&(delete n[S],E())}(R)}}}}},t.hrefToUrl=g,t.mergeDataIntoQueryString=y,t.shouldIntercept=function(l){var s=l.currentTarget.tagName.toLowerCase()==="a";return!(l.target&&l!=null&&l.target.isContentEditable||l.defaultPrevented||s&&l.which>1||s&&l.altKey||s&&l.ctrlKey||s&&l.metaKey||s&&l.shiftKey)},t.urlWithoutHash=j})(Ft);export{Ft as d};
