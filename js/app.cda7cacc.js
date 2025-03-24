(function(){"use strict";var e={1666:function(e,t,n){var o=n(5130),s=n(6768);function r(e,t,n,o,r,a){const i=(0,s.g2)("navbarEl");return(0,s.uX)(),(0,s.Wv)(i)}function a(e,t,n,o,r,a){const i=(0,s.g2)("router-link"),d=(0,s.g2)("router-view");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("nav",null,[(0,s.bF)(i,{class:"link",to:"/"},{default:(0,s.k6)((()=>t[0]||(t[0]=[(0,s.eW)("Home")]))),_:1}),(0,s.bF)(i,{class:"link",to:"/addnew"},{default:(0,s.k6)((()=>t[1]||(t[1]=[(0,s.eW)("Add New")]))),_:1})]),(0,s.bF)(d)],64)}var i={},d=n(1241);const c=(0,d.A)(i,[["render",a],["__scopeId","data-v-6010d7cd"]]);var l=c,u={name:"App",components:{navbarEl:l}};const h=(0,d.A)(u,[["render",r]]);var m=h,p=n(1387),f=n(4232);function g(e,t,n,o,r,a){const i=(0,s.g2)("pageHeader"),d=(0,s.g2)("form-Input"),c=(0,s.g2)("cardList");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(i,{name:r.name,desc:r.desc},null,8,["name","desc"]),(0,s.Lk)("div",null,[(0,s.Lk)("h1",null,(0,f.v_)(a.getMessege),1),(0,s.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>a.change1&&a.change1(...e))},"change massege 1"),(0,s.Lk)("button",{onClick:t[1]||(t[1]=(...e)=>a.change2&&a.change2(...e))},"change massege 2"),(0,s.Lk)("button",{onClick:t[2]||(t[2]=(...e)=>a.change3&&a.change3(...e))},"change massege 3"),((0,s.uX)(),(0,s.Wv)(d,{key:r.newkey})),(0,s.bF)(c,{onKeyOnClick:t[3]||(t[3]=e=>r.newkey=Math.random())})])],64)}function v(e,t,n,o,r,a){return(0,s.uX)(),(0,s.CE)("header",null,[(0,s.Lk)("h1",null,(0,f.v_)(n.name),1),(0,s.Lk)("p",null,(0,f.v_)(n.desc),1)])}var k={name:"pageHeader",props:["name","desc"]};const b=(0,d.A)(k,[["render",v],["__scopeId","data-v-38f63f17"]]);var I=b;const y={class:"cards"},C=["onClick"],w=["onClick"];function L(e,t,n,o,r,a){const i=(0,s.g2)("CardEl");return(0,s.uX)(),(0,s.CE)("div",y,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(a.items,((e,t)=>((0,s.uX)(),(0,s.Wv)(i,{background:e.color,showMedia:!1,key:t},{header:(0,s.k6)((()=>[(0,s.Lk)("h3",null,(0,f.v_)(e.header),1)])),text:(0,s.k6)((()=>[(0,s.Lk)("p",null,(0,f.v_)(e.content),1)])),btns:(0,s.k6)((()=>[(0,s.Lk)("button",{class:"edit",onClick:t=>a.editItem(e)},"Edit",8,C),(0,s.Lk)("button",{class:"delete",onClick:t=>a.deleteItem(e)},"Delete",8,w)])),_:2},1032,["background"])))),128))])}const E={class:"card-media"},_={class:"card-body"},$={class:"card-header"},x={class:"card-text"},O={class:"card-btns"};function A(e,t,n,r,a,i){return(0,s.uX)(),(0,s.CE)("div",{class:"card",style:(0,f.Tr)({backgroundColor:n.background})},[(0,s.bo)((0,s.Lk)("div",E,[(0,s.RG)(e.$slots,"media",{},void 0,!0)],512),[[o.aG,n.showMedia]]),(0,s.Lk)("div",_,[(0,s.bo)((0,s.Lk)("div",$,[(0,s.RG)(e.$slots,"header",{},void 0,!0)],512),[[o.aG,n.showHeader]]),(0,s.bo)((0,s.Lk)("div",x,[(0,s.RG)(e.$slots,"text",{},void 0,!0)],512),[[o.aG,n.showText]]),(0,s.bo)((0,s.Lk)("div",O,[(0,s.RG)(e.$slots,"btns",{},void 0,!0)],512),[[o.aG,n.showBtns]])])],4)}var S={name:"CardEl",data(){return{}},props:{background:{type:String},showMedia:{type:Boolean,default(){return!0}},showHeader:{type:Boolean,default(){return!0}},showText:{type:Boolean,default(){return!0}},showBtns:{type:Boolean,default(){return!0}}}};const H=(0,d.A)(S,[["render",A],["__scopeId","data-v-02741cdc"]]);var M=H,X={components:{CardEl:M},data(){return{index:0}},computed:{items(){return this.$store.state.items}},methods:{deleteItem(e){this.$store.dispatch("deleteItem",e)},editItem(e){this.$store.dispatch("editItem",e),this.$emit("keyOnClick",Math.random())}}};const G=(0,d.A)(X,[["render",L],["__scopeId","data-v-75b26160"]]);var j=G;const F={class:"form"},T={class:"title"},B={class:"btns"};function P(e,t,n,r,a,i){return(0,s.uX)(),(0,s.CE)("div",F,[(0,s.Lk)("div",T,[t[5]||(t[5]=(0,s.Lk)("span",null,"Title:",-1)),(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>a.title=e),type:"text",placeholder:"memo title",ref:"title"},null,512),[[o.Jo,a.title]])]),(0,s.bo)((0,s.Lk)("textarea",{"onUpdate:modelValue":t[1]||(t[1]=e=>a.desc=e),placeholder:"memo details",ref:"desc"},null,512),[[o.Jo,a.desc]]),t[6]||(t[6]=(0,s.Lk)("label",{for:"color"},"Choose Color:",-1)),(0,s.bo)((0,s.Lk)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>a.color=e),type:"color",class:"color",id:"color"},null,512),[[o.Jo,a.color]]),(0,s.Lk)("div",B,[(0,s.Lk)("button",{onClick:t[3]||(t[3]=(...e)=>i.addItem&&i.addItem(...e))},"Save"),(0,s.Lk)("button",{onClick:t[4]||(t[4]=(...e)=>i.editItem&&i.editItem(...e))},"Edit")])])}var R={data(){return{id:"",title:"",desc:"",color:"#dddddd",oldItem:""}},created(){this.id=this.getId,this.title=this.getHeader,this.desc=this.getContent,this.color=this.getColor,this.oldItem={id:this.id,title:this.getHeader,desc:this.getContent,color:this.getColor}},computed:{getItem(){return this.$store.state.tempSave},getId(){if(0===this.$store.state.items.length)return 0;const e=this.$store.state.items[this.$store.state.items.length-1];return e.id+1},getHeader(){return this.$store.state.tempSave.header},getContent(){return this.$store.state.tempSave.content},getColor(){return this.$store.state.tempSave.color}},methods:{addItem(){this.$store.dispatch("addItem",{id:this.id,header:this.title,content:this.desc,color:this.color}),this.title="",this.desc=""},editItem(){this.$store.dispatch("editExistItem",[this.oldItem,{id:this.id,header:this.title,content:this.desc,color:this.color}]),this.title="",this.desc=""}}};const W=(0,d.A)(R,[["render",P],["__scopeId","data-v-394e6779"]]);var K=W,D={data(){return{name:"Home Page",desc:"Hey this is the home page in my project",newkey:1}},components:{cardList:j,pageHeader:I,formInput:K},methods:{change1(){this.$store.dispatch("setMessege","changed 1")},change2(){this.$store.dispatch("setMessege","changed 2")},change3(){this.$store.dispatch("setMessege","changed 3")}},computed:{getMessege(){return this.$store.state.messege}}};const J=(0,d.A)(D,[["render",g],["__scopeId","data-v-c46ea116"]]);var U=J;function V(e,t){return(0,s.uX)(),(0,s.CE)("h1",null,"add new page")}const N={},q=(0,d.A)(N,[["render",V]]);var Q=q;const z=[{path:"/",name:"home",component:U},{path:"/addnew",name:"addnew",component:Q}],Y=(0,p.aE)({history:(0,p.LA)("/diary-app/"),routes:z});var Z=Y,ee=(n(4114),n(782));const te=(0,ee.y$)({state:{items:[{id:1,header:"Geologist I",content:"Struck by golf ball",color:"#93cda3"},{id:2,header:"Research Nurse",content:"Other specified dorsopathies, site unspecified",color:"#4a3a9c"},{id:3,header:"Senior Quality Engineer",content:"Partial retinal artery occlusion, right eye",color:"#34807f"},{id:4,header:"Accountant II",content:"Sprain of super tibiofibul joint and ligmt, unsp knee, sqla",color:"#7ed19d"},{id:5,header:"Dental Hygienist",content:"Burn of third degree of head, face, and neck, unsp site",color:"#1541c6"},{id:6,header:"Actuary",content:"Laceration of blood vessels at shldr/up arm, unsp arm",color:"#ede2ec"},{id:7,header:"Senior Editor",content:"Stress fracture, right ulna, subs for fx w routn heal",color:"#0ca526"},{id:8,header:"Occupational Therapist",content:"Open bite of back wall of thorax w/o penet thoracic cavity",color:"#9691f1"},{id:9,header:"Assistant Professor",content:"Inj unsp musc/tend at lower leg level, unsp leg",color:"#4a994b"},{id:10,header:"Graphic Designer",content:"Transplanted organ and tissue status",color:"#e287df"}],tempSave:[],messege:"hello osama"},mutations:{setItems(e,t){e.messege=t},addItems(e,t){e.items.push(t)},deleteItem(e,t){const n=e.items.findIndex((e=>e.content===t.content));e.items.splice(n,1)},editItem(e,t){e.tempSave=t},editExistItem(e,t){const n=e.items.findIndex((e=>e.id===t[1].id));e.items.splice(n,1,t[1])}},actions:{setMessege(e,t){this.commit("setItems",t)},addItem(e,t){this.commit("addItems",t)},deleteItem(e,t){this.commit("deleteItem",t)},editItem(e,t){this.commit("editItem",t)},editExistItem(e,t){this.commit("editExistItem",t)}}});var ne=te;(0,o.Ef)(m).use(Z).use(ne).mount("#app")}},t={};function n(o){var s=t[o];if(void 0!==s)return s.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,s,r){if(!o){var a=1/0;for(l=0;l<e.length;l++){o=e[l][0],s=e[l][1],r=e[l][2];for(var i=!0,d=0;d<o.length;d++)(!1&r||a>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[d])}))?o.splice(d--,1):(i=!1,r<a&&(a=r));if(i){e.splice(l--,1);var c=s();void 0!==c&&(t=c)}}return t}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[o,s,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var s,r,a=o[0],i=o[1],d=o[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(s in i)n.o(i,s)&&(n.m[s]=i[s]);if(d)var l=d(n)}for(t&&t(o);c<a.length;c++)r=a[c],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(l)},o=self["webpackChunkdiary_app"]=self["webpackChunkdiary_app"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(1666)}));o=n.O(o)})();
//# sourceMappingURL=app.cda7cacc.js.map