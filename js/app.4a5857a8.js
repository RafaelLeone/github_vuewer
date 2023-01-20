(function(){"use strict";var t={8568:function(t,e,n){var o=n(144),r=n(1096),i=n(3250),s=n(6715),a=n(5057),u=n(2469),l=n(3551),c=n(5234),p=function(){var t=this,e=t._self._c;return e(r.Z,[e(i.Z,{attrs:{app:"",color:"primary",dark:""}},[e("div",{staticClass:"d-flex align-center"},[e(u.Z,{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),e("h1",[t._v(" Busca Pokémon ")])],1),e(c.Z),e(s.Z,{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[e("span",{staticClass:"mr-2"},[t._v("Latest Release")]),e(a.Z,[t._v("mdi-open-in-new")])],1)],1),e(l.Z,[e("GithubVuewer")],1)],1)},h=[],f=n(6035),v=function(){var t=this,e=t._self._c;return e(f.Z,[e("GithubRepo")],1)},d=[],m=n(4177),b=n(4437),g=n(5294),y=n(6069),_=function(){var t=this,e=t._self._c;return e("div",[e(g.Z,{staticClass:"text-center"},[e(b.Z,{attrs:{cols:"6"}},[e(m.Z,{attrs:{items:t.userlist,loading:t.userloading,"search-input":t.usersearch,"item-text":"login",label:"Digite o nome de um pokémon"},on:{"update:searchInput":function(e){t.usersearch=e},"update:search-input":function(e){t.usersearch=e}},model:{value:t.user,callback:function(e){t.user=e},expression:"user"}})],1),e(b.Z,{attrs:{cols:"6"}},[e(y.Z,{attrs:{items:t.repolist,loading:t.repoloading,disabled:!this.user,"item-text":"name",label:"Selecione um movimento","return-object":"","single-line":""},model:{value:t.repo,callback:function(e){t.repo=e},expression:"repo"}})],1)],1),e("br"),e("div",{staticClass:"board"},[e("div",[e(s.Z,{on:{click:t.vai}},[t._v("Usar movimento")])],1),e("br"),this.photo?e("div",[e("img",{attrs:{src:this.photo,width:"180px"}}),e("br"),t._v(" "+t._s(this.typelist)+" ")]):e("div",[t._v(" Sprite indisponível ")]),e("br"),this.movimento?e("div",[e("h1",[t._v(t._s(this.user.toUpperCase())+" usou "+t._s(this.repo)+"!!")])]):e("div")])],1)},w=[],Z=(n(7658),n(3279)),k=n.n(Z);const x={async search_users(t){const e=await fetch(`https://pokeapi.co/api/v2/pokemon/?q=${t}/?offset=2000&limit=2000`);return await e.json()},async procura_poke(t){const e=await fetch(`https://pokeapi.co/api/v2/pokemon/${t}`);return await e.json()}};var j={data:()=>({user:null,repo:null,movimento:null,typelist:[],usersearch:null,userlist:[],repolist:[],userloading:!1,repoloading:!1,photo:null}),methods:{procuraUsuariosGithub:k()((async function(){this.userloading=!0;const t=await x.search_users(this.usersearch);for(let e of t.results)this.userlist.push(e.name);this.userloading=!1}),1e3),async listaRepositorios(){this.repoloading=!0,this.repolist=[],this.typelist=[];const t=await x.procura_poke(this.user);for(let e of t.moves)this.repolist.push(e.move.name);for(let e of t.types)this.typelist.push(e.type.name);this.photo=t.sprites.front_default,this.repoloading=!1},async vai(){this.movimento=this.repo}},watch:{usersearch(){0===this.userlist.length&&this.procuraUsuariosGithub()},user(){this.listaRepositorios()}}},O=j,C=n(1001),P=(0,C.Z)(O,_,w,!1,null,"701a8f32",null),S=P.exports,G={components:{GithubRepo:S},data:()=>({})},R=G,T=(0,C.Z)(R,v,d,!1,null,null,null),U=T.exports,M={name:"App",components:{GithubVuewer:U},data:()=>({})},V=M,$=(0,C.Z)(V,p,h,!1,null,null,null),L=$.exports,q=n(2250);o.ZP.use(q.Z);var A=new q.Z({});o.ZP.config.productionTip=!1,new o.ZP({vuetify:A,render:t=>t(L)}).$mount("#app")}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,i){if(!o){var s=1/0;for(c=0;c<t.length;c++){o=t[c][0],r=t[c][1],i=t[c][2];for(var a=!0,u=0;u<o.length;u++)(!1&i||s>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[u])}))?o.splice(u--,1):(a=!1,i<s&&(s=i));if(a){t.splice(c--,1);var l=r();void 0!==l&&(e=l)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[o,r,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,i,s=o[0],a=o[1],u=o[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(u)var c=u(n)}for(e&&e(o);l<s.length;l++)i=s[l],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(c)},o=self["webpackChunkgithub_vuewer"]=self["webpackChunkgithub_vuewer"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(8568)}));o=n.O(o)})();
//# sourceMappingURL=app.4a5857a8.js.map