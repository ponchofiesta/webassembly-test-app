!function(e){function n(n){for(var r,o,a=n[0],u=n[1],s=n[2],f=0,d=[];f<a.length;f++)o=a[f],_[o]&&d.push(_[o][0]),_[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(l&&l(n);d.length;)d.shift()();return i.push.apply(i,s||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,o=1;o<t.length;o++){var a=t[o];0!==_[a]&&(r=!1)}r&&(i.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},_={1:0},i=[];var o={};var a={320:function(){return{"./webassembly_benchmarks_rust":{__wbindgen_json_serialize:function(e,n){return r[319].exports.__wbindgen_json_serialize(e,n)},__wbindgen_string_new:function(e,n){return r[319].exports.__wbindgen_string_new(e,n)},__wbindgen_object_drop_ref:function(e){return r[319].exports.__wbindgen_object_drop_ref(e)},__widl_instanceof_CanvasRenderingContext2D:function(e){return r[319].exports.__widl_instanceof_CanvasRenderingContext2D(e)},__widl_f_create_image_data_with_sw_and_sh_CanvasRenderingContext2D:function(e,n,t,_){return r[319].exports.__widl_f_create_image_data_with_sw_and_sh_CanvasRenderingContext2D(e,n,t,_)},__widl_f_get_image_data_CanvasRenderingContext2D:function(e,n,t,_,i,o){return r[319].exports.__widl_f_get_image_data_CanvasRenderingContext2D(e,n,t,_,i,o)},__widl_f_put_image_data_CanvasRenderingContext2D:function(e,n,t,_,i){return r[319].exports.__widl_f_put_image_data_CanvasRenderingContext2D(e,n,t,_,i)},__widl_f_get_context_HTMLCanvasElement:function(e,n,t,_){return r[319].exports.__widl_f_get_context_HTMLCanvasElement(e,n,t,_)},__widl_f_width_HTMLCanvasElement:function(e){return r[319].exports.__widl_f_width_HTMLCanvasElement(e)},__widl_f_height_HTMLCanvasElement:function(e){return r[319].exports.__widl_f_height_HTMLCanvasElement(e)},__widl_f_width_ImageData:function(e){return r[319].exports.__widl_f_width_ImageData(e)},__widl_f_height_ImageData:function(e){return r[319].exports.__widl_f_height_ImageData(e)},__widl_f_data_ImageData:function(e,n){return r[319].exports.__widl_f_data_ImageData(e,n)},__widl_f_debug_1_:function(e){return r[319].exports.__widl_f_debug_1_(e)},__wbindgen_string_get:function(e,n){return r[319].exports.__wbindgen_string_get(e,n)},__wbindgen_debug_string:function(e,n){return r[319].exports.__wbindgen_debug_string(e,n)},__wbindgen_throw:function(e,n){return r[319].exports.__wbindgen_throw(e,n)}}}}};function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t=_[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise(function(n,r){t=_[e]=[n,r]});n.push(t[2]=r);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=function(e){return u.p+"static/js/"+({}[e]||e)+"."+{3:"7fd9d754"}[e]+".chunk.js"}(e),i=function(n){s.onerror=s.onload=null,clearTimeout(f);var t=_[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src,o=new Error("Loading chunk "+e+" failed.\n("+r+": "+i+")");o.type=r,o.request=i,t[1](o)}_[e]=void 0}};var f=setTimeout(function(){i({type:"timeout",target:s})},12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return({3:[320]}[e]||[]).forEach(function(e){var t=o[e];if(t)n.push(t);else{var r,_=a[e](),i=fetch(u.p+""+{320:"59f9b6ffe90fdf76c542"}[e]+".module.wasm");if(_ instanceof Promise&&"function"===typeof WebAssembly.compileStreaming)r=Promise.all([WebAssembly.compileStreaming(i),_]).then(function(e){return WebAssembly.instantiate(e[0],e[1])});else if("function"===typeof WebAssembly.instantiateStreaming)r=WebAssembly.instantiateStreaming(i,_);else{r=i.then(function(e){return e.arrayBuffer()}).then(function(e){return WebAssembly.instantiate(e,_)})}n.push(o[e]=r.then(function(n){return u.w[e]=(n.instance||n).exports}))}}),Promise.all(n)},u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/webassembly-test-app/",u.oe=function(e){throw console.error(e),e},u.w={};var s=window.webpackJsonp=window.webpackJsonp||[],f=s.push.bind(s);s.push=n,s=s.slice();for(var d=0;d<s.length;d++)n(s[d]);var l=f;t()}([]);
//# sourceMappingURL=runtime~main.6d350017.js.map