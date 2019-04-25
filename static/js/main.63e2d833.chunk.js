(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{153:function(t,e,a){t.exports=a(297)},296:function(t,e,a){},297:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),s=a(44),o=a.n(s),c=a(8),i=a(9),u=a(11),l=a(4),p=a(12),h=a(304),b=a(312),f=a(311),m=a(27),j=a.n(m),O=a(37),y=a(309),d=a(305),g=a(301),w=a(310),v=a(308),k=a(306),x=a(142),E=a(307),D=a(38),R=a.n(D),S=a(20),C=a(10),A=function(){function t(){Object(c.a)(this,t),this.result=null,this.startTime=null,this.stopTime=null}return Object(i.a)(t,[{key:"prepareTestData",value:function(t){console.warn(this.constuctor.name+" not implemented.")}},{key:"resetTestData",value:function(t){console.warn(this.constuctor.name+" not implemented.")}},{key:"run",value:function(){console.warn(this.constuctor.name+" not implemented.")}},{key:"start",value:function(){this.startTime=new Date}},{key:"stop",value:function(){this.stopTime=new Date,this.result=this.stopTime-this.startTime}},{key:"results",value:function(){return this.result}}]),t}(),T=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(i.a)(e,[{key:"fibonacci",value:function(t){for(var e,a=0,n=1;t-- >0;)e=a,a=n,n+=e;return a}},{key:"run",value:function(t){console.debug("start "+this.constructor.name),Object(C.a)(Object(l.a)(e.prototype),"start",this).call(this),this.fibonacci.apply(this,Object(S.a)(t)),Object(C.a)(Object(l.a)(e.prototype),"stop",this).call(this),console.debug("stop "+this.constructor.name)}}]),e}(A),_=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(i.a)(e,[{key:"run",value:function(t){var a;console.debug("start "+this.constructor.name),Object(C.a)(Object(l.a)(e.prototype),"start",this).call(this),(a=window.wasm.rust).fibonacci.apply(a,Object(S.a)(t)),Object(C.a)(Object(l.a)(e.prototype),"stop",this).call(this),console.debug("stop "+this.constructor.name)}}]),e}(A),B=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(i.a)(e,[{key:"run",value:function(t){var a;console.debug("start "+this.constructor.name),Object(C.a)(Object(l.a)(e.prototype),"start",this).call(this),(a=window.wasm.go).fibonacci.apply(a,Object(S.a)(t)),Object(C.a)(Object(l.a)(e.prototype),"stop",this).call(this),console.debug("stop "+this.constructor.name)}}]),e}(A),P=function(t){function e(){var t;return Object(c.a)(this,e),(t=Object(u.a)(this,Object(l.a)(e).call(this))).moves="",t}return Object(p.a)(e,t),Object(i.a)(e,[{key:"hanoi",value:function(t,e,a,n){return t>0&&(this.hanoi(t-1,e,n,a),this.moves+=e+"->"+n+"\n",this.hanoi(t-1,a,e,n)),this.moves}},{key:"run",value:function(t){console.debug("start "+this.constructor.name),Object(C.a)(Object(l.a)(e.prototype),"start",this).call(this),this.hanoi.apply(this,Object(S.a)(t)),Object(C.a)(Object(l.a)(e.prototype),"stop",this).call(this),console.debug("stop "+this.constructor.name)}}]),e}(A),I=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(i.a)(e,[{key:"run",value:function(t){var a;console.debug("start "+this.constructor.name),Object(C.a)(Object(l.a)(e.prototype),"start",this).call(this),(a=window.wasm.rust).hanoi.apply(a,Object(S.a)(t)),Object(C.a)(Object(l.a)(e.prototype),"stop",this).call(this),console.debug("stop "+this.constructor.name)}}]),e}(A),J=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(i.a)(e,[{key:"run",value:function(t){var a;console.debug("start "+this.constructor.name),Object(C.a)(Object(l.a)(e.prototype),"start",this).call(this),(a=window.wasm.go).hanoi.apply(a,Object(S.a)(t)),Object(C.a)(Object(l.a)(e.prototype),"stop",this).call(this),console.debug("stop "+this.constructor.name)}}]),e}(A),F=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(i.a)(e,[{key:"sort",value:function(t){return t.sort(function(t,e){return t.name<e.name?-1:t.name>e.name?1:0})}},{key:"run",value:function(t,a){console.debug("start "+this.constructor.name);var n=JSON.parse(JSON.stringify(a.data));Object(C.a)(Object(l.a)(e.prototype),"start",this).call(this),this.sort(n),Object(C.a)(Object(l.a)(e.prototype),"stop",this).call(this),console.debug("stop "+this.constructor.name)}}]),e}(A),L=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(i.a)(e,[{key:"run",value:function(t,a){var n;console.debug("start "+this.constructor.name),Object(C.a)(Object(l.a)(e.prototype),"start",this).call(this),(n=window.wasm.rust).sort.apply(n,Object(S.a)(t)),Object(C.a)(Object(l.a)(e.prototype),"stop",this).call(this),console.debug("stop "+this.constructor.name)}}]),e}(A),M=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(i.a)(e,[{key:"run",value:function(t,a){var n;console.debug("start "+this.constructor.name),Object(C.a)(Object(l.a)(e.prototype),"start",this).call(this),(n=window.wasm.go).sort.apply(n,Object(S.a)(t)),Object(C.a)(Object(l.a)(e.prototype),"stop",this).call(this),console.debug("stop "+this.constructor.name)}}]),e}(A),W=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(i.a)(e,[{key:"prime",value:function(t){var e=[];t>2&&e.push(2),t>3&&e.push(3);for(var a=Array(t).fill(!1),n=1;n*n<t;n++)for(var r=1;r*r<t;r++){var s=4*n*n+r*r;s<=t&&(s%12===1||s%12===5)&&(a[s]^=!0),(s=3*n*n+r*r)<=t&&s%12===7&&(a[s]^=!0),s=3*n*n-r*r,n>r&&s<=t&&s%12===11&&(a[s]^=!0)}for(var o=5;o*o<t;o++)if(a[o])for(var c=o*o;c<t;c+=o*o)a[c]=!1;for(var i=5;i<t;i++)a[i]&&e.push(i);return e}},{key:"run",value:function(t,e){console.debug("start "+this.constructor.name),this.start(),this.prime.apply(this,Object(S.a)(t)),this.stop(),console.debug("stop "+this.constructor.name)}}]),e}(A),q=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(i.a)(e,[{key:"run",value:function(t,e){var a;console.debug("start "+this.constructor.name),this.start(),(a=window.wasm.rust).prime.apply(a,Object(S.a)(t)),this.stop(),console.debug("stop "+this.constructor.name)}}]),e}(A),z=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(i.a)(e,[{key:"run",value:function(t,e){var a;console.debug("start "+this.constructor.name),this.start(),(a=window.wasm.go).prime.apply(a,Object(S.a)(t)),this.stop(),console.debug("stop "+this.constructor.name)}}]),e}(A),G=a(46),H=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(i.a)(e,[{key:"aes_encrypt",value:function(t,e,a){return new G.ModeOfOperation.cbc(t,e).encrypt(a)}},{key:"aes_decrypt",value:function(t,e,a){return new G.ModeOfOperation.cbc(t,e).decrypt(a)}},{key:"run",value:function(t,a){console.debug("start "+this.constructor.name);var n=G.utils.utf8.toBytes(a.data);Object(C.a)(Object(l.a)(e.prototype),"start",this).call(this),this.aes_encrypt.apply(this,Object(S.a)(t).concat([n])),Object(C.a)(Object(l.a)(e.prototype),"stop",this).call(this),console.debug("stop "+this.constructor.name)}}]),e}(A),N=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(i.a)(e,[{key:"run",value:function(t,a){console.debug("start "+this.constructor.name),Object(C.a)(Object(l.a)(e.prototype),"start",this).call(this),window.wasm.rust.aes(),Object(C.a)(Object(l.a)(e.prototype),"stop",this).call(this),console.debug("stop "+this.constructor.name)}}]),e}(A),$=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(i.a)(e,[{key:"run",value:function(t,a){console.debug("start "+this.constructor.name),Object(C.a)(Object(l.a)(e.prototype),"start",this).call(this),window.wasm.go.aes(),Object(C.a)(Object(l.a)(e.prototype),"stop",this).call(this),console.debug("stop "+this.constructor.name)}}]),e}(A),K=a(131),Q=a.n(K),U=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(i.a)(e,[{key:"deflate",value:function(t){return Q.a.deflate(t,{raw:!0})}},{key:"run",value:function(t,a){console.debug("start "+this.constructor.name);var n=G.utils.utf8.toBytes(a.data);Object(C.a)(Object(l.a)(e.prototype),"start",this).call(this),this.deflate(n),Object(C.a)(Object(l.a)(e.prototype),"stop",this).call(this),console.debug("stop "+this.constructor.name)}}]),e}(A),V=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(i.a)(e,[{key:"run",value:function(t,a){console.debug("start "+this.constructor.name),Object(C.a)(Object(l.a)(e.prototype),"start",this).call(this),window.wasm.rust.deflate(),Object(C.a)(Object(l.a)(e.prototype),"stop",this).call(this),console.debug("stop "+this.constructor.name)}}]),e}(A),X=function(t){function e(){return Object(c.a)(this,e),Object(u.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(i.a)(e,[{key:"run",value:function(t,a){console.debug("start "+this.constructor.name),Object(C.a)(Object(l.a)(e.prototype),"start",this).call(this),window.wasm.go.deflate(),Object(C.a)(Object(l.a)(e.prototype),"stop",this).call(this),console.debug("stop "+this.constructor.name)}}]),e}(A),Y={chart:{width:"100%",height:16,type:"line"},markers:{size:7},dataLabels:{enabled:!0},xaxis:{title:{text:"Iterations"},categories:[]},yaxis:{title:{text:"Duration in ms"}},legend:{show:!0},title:{text:"Time taken to run the tests",align:"left"},tooltip:{y:{formatter:function(t){return t+" ms"}}}},Z={players:{js:{logo:"logos/es-ecmascript-logo.svg",color:"rgb(248,220,61)"},rust:{logo:"logos/rust-logo-blk.svg",color:"black"},go:{logo:"logos/Go-Logo_Aqua.svg",color:"#2DBCAF"}},tests:[{name:"Fibunacci sequence",description:"Some number algo",runners:[{name:"Iterative 100m",type:"js",factory:function(){return new T}},{name:"Iterative 100m",type:"rust",factory:function(){return new _}},{name:"Iterative 100m",type:"go",factory:function(){return new B}}],parameters:[1e8],repeat:5,chart:{component:R.a,options:Y}},{name:"Towers of Hanoi",description:"Some number algo",runners:[{name:"Recursive 20",type:"js",factory:function(){return new P}},{name:"Recursive 20",type:"rust",factory:function(){return new I}},{name:"Recursive 20",type:"go",factory:function(){return new J}}],parameters:[20,"A","B","C"],repeat:5,chart:{component:R.a,options:Y}},{name:"Sort",description:"Sort a list of elements containing multiple fields",runners:[{name:"Sort",type:"js",factory:function(){return new F}},{name:"Sort",type:"rust",factory:function(){return new L}},{name:"Sort",type:"go",factory:function(){return new M}}],parameters:[],externalData:{type:"sort",path:"data/users.json",repeat:100},repeat:5,chart:{component:R.a,options:Y}},{name:"Prime numbers",description:"Sieve of Atkin",runners:[{name:"Prime",type:"js",factory:function(){return new W}},{name:"Prime",type:"rust",factory:function(){return new q}},{name:"Prime",type:"go",factory:function(){return new z}}],parameters:[3e6],repeat:5,chart:{component:R.a,options:Y}},{name:"Encryption",description:"Encryption",runners:[{name:"AES CBC",type:"js",factory:function(){return new H}},{name:"AES CBC",type:"rust",factory:function(){return new N}},{name:"AES CBC",type:"go",factory:function(){return new $}}],parameters:[[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],[17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]],externalData:{type:"bytes",path:"data/random.txt",repeat:100},repeat:5,chart:{component:R.a,options:Y}},{name:"Compression Deflate",description:"Deflate",runners:[{name:"Deflate",type:"js",factory:function(){return new U}},{name:"Deflate",type:"rust",factory:function(){return new V}},{name:"Deflate",type:"go",factory:function(){return new X}}],parameters:[],externalData:{type:"bytes",path:"data/random.txt",repeat:500},repeat:5,chart:{component:R.a,options:Y}}]},tt=function(t){return new Promise(function(e){return setTimeout(Object(O.a)(j.a.mark(function a(){var n;return j.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t();case 2:n=a.sent,e(n);case 4:case"end":return a.stop()}},a,this)})),1)})},et=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(u.a)(this,Object(l.a)(e).call(this,t))).startRun=function(){return new Promise(function(t,e){a.setState({running:!0,errors:[]}),tt(Object(O.a)(j.a.mark(function n(){return j.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",a.run().then(function(e){a.finishRun(e),t(e)}).catch(function(t){a.setState({errors:[t.message?t.message:t],running:!1}),e(t)}));case 1:case"end":return n.stop()}},n,this)}))),console.debug("all tests started")})},a.run=Object(O.a)(j.a.mark(function t(){var e,n,r,s,o;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=[],n=[],r=[],s=null,!a.props.externalData){t.next=20;break}return t.next=7,fetch(a.props.externalData.path);case 7:return o=t.sent,t.prev=8,t.next=11,o.clone().json();case 11:s=t.sent,t.next=19;break;case 14:return t.prev=14,t.t0=t.catch(8),t.next=18,o.text();case 18:s=t.sent;case 19:a.props.externalData&&a.props.externalData.repeat>1&&(s="object"==typeof s?Array(a.props.externalData.repeat).fill(s).flat():String(s).repeat(a.props.externalData.repeat));case 20:return null!==s&&(a.props.externalData.data=s),a.props.externalData&&a.props.externalData.type&&(a.props.runners.some(function(t){return"rust"===t.type})&&window.wasm.rust.prepare_test_data(a.props.externalData.type,a.props.externalData.data),a.props.runners.some(function(t){return"go"===t.type})&&window.wasm.go.prepare_test_data(a.props.externalData.type,a.props.externalData.data)),a.props.runners.forEach(function(t,s){r.push(Z.players[t.type].color);for(var o=0;o<a.props.repeat;o++){a.props.externalData&&a.props.externalData.type&&("rust"===t.type&&window.wasm.rust.reset_test_data(a.props.externalData.type),"go"===t.type&&window.wasm.go.reset_test_data(a.props.externalData.type));var c=t.factory();c.run(a.props.parameters,a.props.externalData),e.length<a.props.repeat&&e.push(o+1),n[s]||(n[s]={name:t.type+": "+t.name,data:[]}),n[s].data.push(c.results())}}),t.abrupt("return",{categories:e,series:n,colors:r});case 24:case"end":return t.stop()}},t,this,[[8,14]])})),a.finishRun=function(t){return a.setState(function(e){return console.debug("all tests finished"),e.chart.options.xaxis.categories=t.categories,e.series=t.series,e.chart.options.colors=t.colors,e.running=!1,e})},a.state={chart:t.chart,series:[{data:[]}],running:!1,errors:[]},a}return Object(p.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return r.a.createElement(y.a,null,r.a.createElement(d.a,{inverted:!0,active:this.state.running},r.a.createElement(g.a,{disabled:!this.state.running},"Running")),r.a.createElement(w.a,{as:"h2",floated:"left"},this.props.name,r.a.createElement(w.a.Subheader,null,this.props.description)),r.a.createElement(v.a,{circular:!0,basic:!0,color:"teal",icon:"play circle",content:"Run",onClick:this.startRun,floated:"right"}),r.a.createElement(w.a,{as:"h3",style:{clear:"both"}},"Runners"),r.a.createElement(k.a,{horizontal:!0,divided:!0},this.props.runners.map(function(t){return r.a.createElement(k.a.Item,{key:t.name+"-"+t.type},r.a.createElement(x.a,{avatar:!0,src:Z.players[t.type].logo,alt:t.type}),r.a.createElement(k.a.Content,null,r.a.createElement(k.a.Header,null,t.name)))})),this.state.series[0].data.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{as:"h3"},"Results"),r.a.createElement(this.state.chart.component,Object.assign({options:this.state.chart.options,series:this.state.series},this.state.chart.options.chart,{height:this.state.chart.options.chart.height*this.state.series.length*this.state.series[0].data.length+100}))):null,this.state.errors.length?r.a.createElement(E.a,{error:!0,header:"Some tests had errors",list:this.state.errors}):null)}}]),e}(n.Component),at=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(u.a)(this,Object(l.a)(e).call(this,t))).testRefs=[],a}return Object(p.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this;return this.testRefs=this.props.tests.map(function(e){return r.a.createElement(et,Object.assign({key:e.name},e,{ref:function(e){return t.testRefs.push(e)}}))}),r.a.createElement("div",{style:{clear:"both"}},this.testRefs)}}]),e}(n.Component),nt=a(302),rt=a(303),st=function(t){function e(t){var a;return Object(c.a)(this,e),(a=Object(u.a)(this,Object(l.a)(e).call(this,t))).runAll=Object(O.a)(j.a.mark(function t(){var e;return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a.setState({running:!0}),e=0;case 2:if(!(e<a.testsRef.current.testRefs.length)){t.next=15;break}return t.prev=3,t.next=6,a.testsRef.current.testRefs[e].startRun();case 6:t.sent,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(3),console.error(t.t0);case 12:e++,t.next=2;break;case 15:a.setState({running:!1});case 16:case"end":return t.stop()}},t,this,[[3,9]])})),a.state={running:!1},a.testsRef=r.a.createRef(),a}return Object(p.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement(nt.a,null,r.a.createElement(rt.a,{hidden:!0}),r.a.createElement(w.a,{as:"h1",floated:"left"},"Tests"),r.a.createElement(v.a,{circular:!0,color:"teal",icon:"play circle",content:"Run all tests",floated:"right",loading:this.state.running,onClick:function(){return t.runAll()}}),r.a.createElement(at,{tests:this.props.tests,ref:this.testsRef}),r.a.createElement(rt.a,{hidden:!0}))}}]),e}(n.Component),ot=function(t){function e(t){var a;return Object(c.a)(this,e),a=Object(u.a)(this,Object(l.a)(e).call(this,t)),window.wasm={},a.state={loading:!0,error:!1},a}return Object(p.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=new window.Go;Promise.all([a.e(3).then(a.bind(null,313)),WebAssembly.instantiateStreaming(fetch("go/webassembly-tests-go.wasm"),e.importObject)]).then(function(a){window.wasm.rust=a[0],e.run(a[1].instance),t.setState({loading:!1})}).catch(function(e){return t.setState({error:e.message})})}},{key:"render",value:function(){return this.state.error?r.a.createElement(E.a,{error:!0},"Could not load configuration: ",this.state.error):this.state.loading?r.a.createElement("div",null,"Loading..."):r.a.createElement("main",null,r.a.createElement(h.a,null,r.a.createElement(b.a,null,r.a.createElement(f.a,{path:"/",render:function(){return r.a.createElement(st,{tests:Z.tests})}}),r.a.createElement(f.a,{path:"/test/:id",component:et}))))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(295),a(296);o.a.render(r.a.createElement(ot,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[153,1,2]]]);
//# sourceMappingURL=main.63e2d833.chunk.js.map