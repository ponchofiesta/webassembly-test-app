(this["webpackJsonpwebassembly-test-app"]=this["webpackJsonpwebassembly-test-app"]||[]).push([[3],{357:function(n,t,e){"use strict";e.r(t),function(n){e.d(t,"strings_dynamic",(function(){return d})),e.d(t,"strings_static",(function(){return a})),e.d(t,"hanoi",(function(){return g})),e.d(t,"sort",(function(){return h})),e.d(t,"prime",(function(){return p})),e.d(t,"sha256",(function(){return v})),e.d(t,"sha512",(function(){return C})),e.d(t,"aes",(function(){return x})),e.d(t,"deflate",(function(){return D})),e.d(t,"exif",(function(){return A})),e.d(t,"convolve",(function(){return E})),e.d(t,"convolve_video",(function(){return S})),e.d(t,"dom",(function(){return U})),e.d(t,"prepare_test_data",(function(){return J})),e.d(t,"reset_test_data",(function(){return M})),e.d(t,"clear_test_data",(function(){return R})),e.d(t,"iterate",(function(){return F})),e.d(t,"fibonacci",(function(){return H})),e.d(t,"sum",(function(){return W})),e.d(t,"__wbindgen_object_drop_ref",(function(){return K})),e.d(t,"__wbindgen_string_new",(function(){return P})),e.d(t,"__wbindgen_json_serialize",(function(){return Q})),e.d(t,"__widl_instanceof_Window",(function(){return V})),e.d(t,"__widl_instanceof_CanvasRenderingContext2D",(function(){return X})),e.d(t,"__widl_f_get_image_data_CanvasRenderingContext2D",(function(){return Y})),e.d(t,"__widl_f_put_image_data_CanvasRenderingContext2D",(function(){return Z})),e.d(t,"__widl_f_create_element_Document",(function(){return $})),e.d(t,"__widl_f_body_Document",(function(){return nn})),e.d(t,"__widl_f_get_context_HTMLCanvasElement",(function(){return tn})),e.d(t,"__widl_f_width_HTMLCanvasElement",(function(){return en})),e.d(t,"__widl_f_height_HTMLCanvasElement",(function(){return rn})),e.d(t,"__widl_f_new_with_u8_clamped_array_and_sh_ImageData",(function(){return un})),e.d(t,"__widl_f_width_ImageData",(function(){return on})),e.d(t,"__widl_f_height_ImageData",(function(){return cn})),e.d(t,"__widl_f_data_ImageData",(function(){return fn})),e.d(t,"__widl_f_append_child_Node",(function(){return _n})),e.d(t,"__widl_f_remove_child_Node",(function(){return dn})),e.d(t,"__widl_f_set_text_content_Node",(function(){return an})),e.d(t,"__widl_f_document_Window",(function(){return ln})),e.d(t,"__wbindgen_object_clone_ref",(function(){return sn})),e.d(t,"__widl_f_debug_1_",(function(){return bn})),e.d(t,"__wbg_call_11f5c018dea16986",(function(){return wn})),e.d(t,"__wbg_newnoargs_8effd2c0e33a9e83",(function(){return gn})),e.d(t,"__wbg_globalThis_b8da724777cacbb6",(function(){return hn})),e.d(t,"__wbg_self_78670bf6333531d2",(function(){return yn})),e.d(t,"__wbg_window_b19864ecbde8d123",(function(){return mn})),e.d(t,"__wbg_global_c6db5ff079ba98ed",(function(){return pn})),e.d(t,"__wbindgen_is_undefined",(function(){return vn})),e.d(t,"__wbg_buffer_cdcb54e9871fd20a",(function(){return Cn})),e.d(t,"__wbg_length_deb426bb35063224",(function(){return xn})),e.d(t,"__wbg_new_8f74bcd603e235c0",(function(){return Dn})),e.d(t,"__wbg_set_662b22f1b4008ab7",(function(){return An})),e.d(t,"__wbg_instanceof_Uint8Array_7d7ec1a262a2de7d",(function(){return In})),e.d(t,"__wbg_byteLength_66504bf17d7a1c5a",(function(){return jn})),e.d(t,"__wbindgen_debug_string",(function(){return En})),e.d(t,"__wbindgen_throw",(function(){return Tn})),e.d(t,"__wbindgen_rethrow",(function(){return kn})),e.d(t,"__wbindgen_memory",(function(){return On}));var r=e(358);let u=0,o=new TextEncoder("utf-8");const c="function"===typeof o.encodeInto?function(n,t){return o.encodeInto(n,t)}:function(n,t){const e=o.encode(n);return t.set(e),{read:n.length,written:e.length}};let i=null;function f(){return null!==i&&i.buffer===r.o.buffer||(i=new Uint8Array(r.o.buffer)),i}function _(n){let t=n.length,e=r.c(t);const o=f();let i=0;for(;i<t;i++){const t=n.charCodeAt(i);if(t>127)break;o[e+i]=t}if(i!==t){0!==i&&(n=n.slice(i)),e=r.d(e,t,t=i+3*n.length);const u=f().subarray(e+i,e+t);i+=c(n,u).written}return u=i,e}function d(n,t){return 0!==r.v(_(n),u,_(t),u)}function a(n){r.w(n)}let l=null;function s(){return null!==l&&l.buffer===r.o.buffer||(l=new Int32Array(r.o.buffer)),l}let b=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});function w(n,t){return b.decode(f().subarray(n,n+t))}function g(n,t,e,o){r.m(8,n,_(t),u,_(e),u,_(o),u);const c=s(),i=w(c[2],c[3]).slice();return r.b(c[2],1*c[3]),i}function h(){r.u()}let y=null;function m(n,t){return(null!==y&&y.buffer===r.o.buffer||(y=new Uint32Array(r.o.buffer)),y).subarray(n/4,n/4+t)}function p(n){r.q(8,n);const t=s(),e=m(t[2],t[3]).slice();return r.b(t[2],4*t[3]),e}function v(){r.s(8);const n=s(),t=w(n[2],n[3]).slice();return r.b(n[2],1*n[3]),t}function C(){r.t(8);const n=s(),t=w(n[2],n[3]).slice();return r.b(n[2],1*n[3]),t}function x(){r.e()}function D(){r.i()}function A(){r.k(8);const n=s(),t=w(n[2],n[3]).slice();return r.b(n[2],1*n[3]),t}const I=new Array(32);I.fill(void 0),I.push(void 0,null,!0,!1);let j=32;function E(n){try{r.g(function(n){if(1==j)throw new Error("out of js stack");return I[--j]=n,j}(n))}finally{I[j++]=void 0}}function T(n){const t=r.c(1*n.length);return f().set(n,t/1),u=n.length,t}let k=null;function O(n,t){return(null!==k&&k.buffer===r.o.buffer||(k=new Uint8ClampedArray(r.o.buffer)),k).subarray(n/1,n/1+t)}function S(n,t,e,o,c){r.h(8,T(n),u,t,e,o,c);const i=s(),f=O(i[2],i[3]).slice();return r.b(i[2],1*i[3]),f}function U(n){r.j(n)}let L=I.length;function N(n){L===I.length&&I.push(I.length+1);const t=L;return L=I[t],I[t]=n,t}function J(n,t){r.p(_(n),u,N(t))}function M(n){r.r(_(n),u)}function R(n){r.f(_(n),u)}function F(n){return r.n(n)}function H(n){return r.l(n)}function W(n){r.x(n)}function q(n){return I[n]}function z(n){const t=q(n);return function(n){n<36||(I[n]=L,L=n)}(n),t}function B(n){r.a(N(n))}function G(n){return void 0===n||null===n}const K=function(n){z(n)},P=function(n,t){return N(w(n,t))},Q=function(n,t){const e=q(t),r=_(JSON.stringify(void 0===e?null:e)),o=u;s()[n/4+0]=r,s()[n/4+1]=o},V=function(n){return q(n)instanceof Window},X=function(n){return q(n)instanceof CanvasRenderingContext2D},Y=function(n,t,e,r,u){try{return N(q(n).getImageData(t,e,r,u))}catch(o){B(o)}},Z=function(n,t,e,r){try{q(n).putImageData(q(t),e,r)}catch(u){B(u)}},$=function(n,t,e){try{return N(q(n).createElement(w(t,e)))}catch(r){B(r)}},nn=function(n){const t=q(n).body;return G(t)?0:N(t)},tn=function(n,t,e){try{const r=q(n).getContext(w(t,e));return G(r)?0:N(r)}catch(r){B(r)}},en=function(n){return q(n).width},rn=function(n){return q(n).height},un=function(n,t,e,r){try{return N(new ImageData(O(n,t),e>>>0,r>>>0))}catch(u){B(u)}},on=function(n){return q(n).width},cn=function(n){return q(n).height},fn=function(n,t){const e=T(q(t).data),r=u;s()[n/4+0]=e,s()[n/4+1]=r},_n=function(n,t){try{return N(q(n).appendChild(q(t)))}catch(e){B(e)}},dn=function(n,t){try{return N(q(n).removeChild(q(t)))}catch(e){B(e)}},an=function(n,t,e){q(n).textContent=0===t?void 0:w(t,e)},ln=function(n){const t=q(n).document;return G(t)?0:N(t)},sn=function(n){return N(q(n))},bn=function(n){console.debug(q(n))},wn=function(n,t){try{return N(q(n).call(q(t)))}catch(e){B(e)}},gn=function(n,t){return N(new Function(w(n,t)))},hn=function(){try{return N(globalThis.globalThis)}catch(n){B(n)}},yn=function(){try{return N(self.self)}catch(n){B(n)}},mn=function(){try{return N(window.window)}catch(n){B(n)}},pn=function(){try{return N(n.global)}catch(t){B(t)}},vn=function(n){return void 0===q(n)},Cn=function(n){return N(q(n).buffer)},xn=function(n){return q(n).length},Dn=function(n){return N(new Uint8Array(q(n)))},An=function(n,t,e){q(n).set(q(t),e>>>0)},In=function(n){return q(n)instanceof Uint8Array},jn=function(n){return q(n).byteLength},En=function(n,t){const e=_(function n(t){const e=typeof t;if("number"==e||"boolean"==e||null==t)return"".concat(t);if("string"==e)return'"'.concat(t,'"');if("symbol"==e){const n=t.description;return null==n?"Symbol":"Symbol(".concat(n,")")}if("function"==e){const n=t.name;return"string"==typeof n&&n.length>0?"Function(".concat(n,")"):"Function"}if(Array.isArray(t)){const e=t.length;let r="[";e>0&&(r+=n(t[0]));for(let u=1;u<e;u++)r+=", "+n(t[u]);return r+="]"}const r=/\[object ([^\]]+)\]/.exec(toString.call(t));let u;if(!(r.length>1))return toString.call(t);if("Object"==(u=r[1]))try{return"Object("+JSON.stringify(t)+")"}catch(o){return"Object"}return t instanceof Error?"".concat(t.name,": ").concat(t.message,"\n").concat(t.stack):u}(q(t))),r=u;s()[n/4+0]=e,s()[n/4+1]=r},Tn=function(n,t){throw new Error(w(n,t))},kn=function(n){throw z(n)},On=function(){return N(r.o)}}.call(this,e(43))},358:function(n,t,e){"use strict";var r=e.w[n.i];n.exports=r;e(357);r.y()}}]);
//# sourceMappingURL=3.c0eeec29.chunk.js.map