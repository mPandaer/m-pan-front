/* empty css                  */import{E as ke}from"./el-result.9f05fb67.js";import{at as B,aJ as Ie,b as me,q as W,cs as pe,J as ce,d as se,cz as ve,cA as ze,cB as Ce,ah as ge,u as ye,bb as Ee,r as k,cC as Le,aX as Se,c as w,a9 as ue,ae as _e,Z as we,o as b,f as de,M as u,w as _,C as h,n as g,a as e,D as fe,al as xe,h as S,F as T,z as Ne,g as L,am as ne,cD as Te,bX as Oe,cE as $e,cF as Re,E as Ae,cG as Be,cH as Ve,bS as Me,S as Xe,T as De,j as ae,a2 as He,be as Ye,_ as be,aa as V,a6 as A,cI as Fe,p as he,c1 as Pe,c0 as We,m as je,au as Ke,B as Je,cJ as Ze,t as qe,cK as Ge,W as Ue,k as Qe,V as et}from"./index.9cb8c9b9.js";import{_ as tt}from"./_plugin-vue_export-helper.cdc0426e.js";import{d as at}from"./debounce.1372f0d8.js";const nt=(r,m)=>{if(!B||!r||!m)return!1;const s=r.getBoundingClientRect();let d;return m instanceof Element?d=m.getBoundingClientRect():d={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},s.top<d.bottom&&s.bottom>d.top&&s.right>d.left&&s.left<d.right};var st="Expected a function";function ie(r,m,s){var d=!0,o=!0;if(typeof r!="function")throw new TypeError(st);return Ie(s)&&(d="leading"in s?!!s.leading:d,o="trailing"in s?!!s.trailing:o),at(r,m,{leading:d,maxWait:m,trailing:o})}const ot=me({urlList:{type:W(Array),default:()=>pe([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:Boolean,teleported:Boolean,closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:W(String)}}),lt={close:()=>!0,switch:r=>ce(r),rotate:r=>ce(r)},rt=["src","crossorigin"],it=se({name:"ElImageViewer"}),ct=se({...it,props:ot,emits:lt,setup(r,{expose:m,emit:s}){var d;const o=r,p={CONTAIN:{name:"contain",icon:ve(ze)},ORIGINAL:{name:"original",icon:ve(Ce)}},{t:M}=ge(),c=ye("image-viewer"),{nextZIndex:X}=Ee(),x=k(),N=k([]),O=Le(),I=k(!0),f=k(o.initialIndex),$=Se(p.CONTAIN),l=k({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),D=k((d=o.zIndex)!=null?d:X()),oe=w(()=>{const{urlList:a}=o;return a.length<=1}),j=w(()=>f.value===0),K=w(()=>f.value===o.urlList.length-1),H=w(()=>o.urlList[f.value]),le=w(()=>[c.e("btn"),c.e("prev"),c.is("disabled",!o.infinite&&j.value)]),J=w(()=>[c.e("btn"),c.e("next"),c.is("disabled",!o.infinite&&K.value)]),Y=w(()=>{const{scale:a,deg:n,offsetX:i,offsetY:z,enableTransition:E}=l.value;let y=i/a,C=z/a;switch(n%360){case 90:case-270:[y,C]=[C,-y];break;case 180:case-180:[y,C]=[-y,-C];break;case 270:case-90:[y,C]=[-C,y];break}const R={transform:`scale(${a}) rotate(${n}deg) translate(${y}px, ${C}px)`,transition:E?"transform .3s":""};return $.value.name===p.CONTAIN.name&&(R.maxWidth=R.maxHeight="100%"),R});function F(){Z(),s("close")}function re(){const a=ie(i=>{switch(i.code){case A.esc:o.closeOnPressEscape&&F();break;case A.space:ee();break;case A.left:te();break;case A.up:v("zoomIn");break;case A.right:t();break;case A.down:v("zoomOut");break}}),n=ie(i=>{const z=i.deltaY||i.deltaX;v(z<0?"zoomIn":"zoomOut",{zoomRate:o.zoomRate,enableTransition:!1})});O.run(()=>{V(document,"keydown",a),V(document,"wheel",n)})}function Z(){O.stop()}function q(){I.value=!1}function G(a){I.value=!1,a.target.alt=M("el.image.error")}function U(a){if(I.value||a.button!==0||!x.value)return;l.value.enableTransition=!1;const{offsetX:n,offsetY:i}=l.value,z=a.pageX,E=a.pageY,y=ie(R=>{l.value={...l.value,offsetX:n+R.pageX-z,offsetY:i+R.pageY-E}}),C=V(document,"mousemove",y);V(document,"mouseup",()=>{C()}),a.preventDefault()}function Q(){l.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function ee(){if(I.value)return;const a=Fe(p),n=Object.values(p),i=$.value.name,E=(n.findIndex(y=>y.name===i)+1)%a.length;$.value=p[a[E]],Q()}function P(a){const n=o.urlList.length;f.value=(a+n)%n}function te(){j.value&&!o.infinite||P(f.value-1)}function t(){K.value&&!o.infinite||P(f.value+1)}function v(a,n={}){if(I.value)return;const{minScale:i,maxScale:z}=o,{zoomRate:E,rotateDeg:y,enableTransition:C}={zoomRate:o.zoomRate,rotateDeg:90,enableTransition:!0,...n};switch(a){case"zoomOut":l.value.scale>i&&(l.value.scale=Number.parseFloat((l.value.scale/E).toFixed(3)));break;case"zoomIn":l.value.scale<z&&(l.value.scale=Number.parseFloat((l.value.scale*E).toFixed(3)));break;case"clockwise":l.value.deg+=y,s("rotate",l.value.deg);break;case"anticlockwise":l.value.deg-=y,s("rotate",l.value.deg);break}l.value.enableTransition=C}return ue(H,()=>{_e(()=>{const a=N.value[0];a!=null&&a.complete||(I.value=!0)})}),ue(f,a=>{Q(),s("switch",a)}),we(()=>{var a,n;re(),(n=(a=x.value)==null?void 0:a.focus)==null||n.call(a)}),m({setActiveItem:P}),(a,n)=>(b(),de(Ye,{to:"body",disabled:!a.teleported},[u(He,{name:"viewer-fade",appear:""},{default:_(()=>[h("div",{ref_key:"wrapper",ref:x,tabindex:-1,class:g(e(c).e("wrapper")),style:fe({zIndex:D.value})},[h("div",{class:g(e(c).e("mask")),onClick:n[0]||(n[0]=xe(i=>a.hideOnClickModal&&F(),["self"]))},null,2),S(" CLOSE "),h("span",{class:g([e(c).e("btn"),e(c).e("close")]),onClick:F},[u(e(T),null,{default:_(()=>[u(e(Ne))]),_:1})],2),S(" ARROW "),e(oe)?S("v-if",!0):(b(),L(ne,{key:0},[h("span",{class:g(e(le)),onClick:te},[u(e(T),null,{default:_(()=>[u(e(Te))]),_:1})],2),h("span",{class:g(e(J)),onClick:t},[u(e(T),null,{default:_(()=>[u(e(Oe))]),_:1})],2)],64)),S(" ACTIONS "),h("div",{class:g([e(c).e("btn"),e(c).e("actions")])},[h("div",{class:g(e(c).e("actions__inner"))},[u(e(T),{onClick:n[1]||(n[1]=i=>v("zoomOut"))},{default:_(()=>[u(e($e))]),_:1}),u(e(T),{onClick:n[2]||(n[2]=i=>v("zoomIn"))},{default:_(()=>[u(e(Re))]),_:1}),h("i",{class:g(e(c).e("actions__divider"))},null,2),u(e(T),{onClick:ee},{default:_(()=>[(b(),de(Ae(e($).icon)))]),_:1}),h("i",{class:g(e(c).e("actions__divider"))},null,2),u(e(T),{onClick:n[3]||(n[3]=i=>v("anticlockwise"))},{default:_(()=>[u(e(Be))]),_:1}),u(e(T),{onClick:n[4]||(n[4]=i=>v("clockwise"))},{default:_(()=>[u(e(Ve))]),_:1})],2)],2),S(" CANVAS "),h("div",{class:g(e(c).e("canvas"))},[(b(!0),L(ne,null,Me(a.urlList,(i,z)=>Xe((b(),L("img",{ref_for:!0,ref:E=>N.value[z]=E,key:i,src:i,style:fe(e(Y)),class:g(e(c).e("img")),crossorigin:a.crossorigin,onLoad:q,onError:G,onMousedown:U},null,46,rt)),[[De,z===f.value]])),128))],2),ae(a.$slots,"default")],6)]),_:3})],8,["disabled"]))}});var ut=be(ct,[["__file","image-viewer.vue"]]);const dt=he(ut),ft=me({hideOnClickModal:Boolean,src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:Boolean,scrollContainer:{type:W([String,Object])},previewSrcList:{type:W(Array),default:()=>pe([])},previewTeleported:Boolean,zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2},minScale:{type:Number,default:.2},maxScale:{type:Number,default:7},crossorigin:{type:W(String)}}),vt={load:r=>r instanceof Event,error:r=>r instanceof Event,switch:r=>ce(r),close:()=>!0,show:()=>!0},mt=["src","loading","crossorigin"],pt={key:0},gt=se({name:"ElImage",inheritAttrs:!1}),yt=se({...gt,props:ft,emits:vt,setup(r,{emit:m}){const s=r;let d="";const{t:o}=ge(),p=ye("image"),M=Pe(),c=We(),X=k(),x=k(!1),N=k(!0),O=k(!1),I=k(),f=k(),$=B&&"loading"in HTMLImageElement.prototype;let l,D;const oe=w(()=>[p.e("inner"),H.value&&p.e("preview"),N.value&&p.is("loading")]),j=w(()=>M.style),K=w(()=>{const{fit:t}=s;return B&&t?{objectFit:t}:{}}),H=w(()=>{const{previewSrcList:t}=s;return Array.isArray(t)&&t.length>0}),le=w(()=>{const{previewSrcList:t,initialIndex:v}=s;let a=v;return v>t.length-1&&(a=0),a}),J=w(()=>s.loading==="eager"?!1:!$&&s.loading==="lazy"||s.lazy),Y=()=>{!B||(N.value=!0,x.value=!1,X.value=s.src)};function F(t){N.value=!1,x.value=!1,m("load",t)}function re(t){N.value=!1,x.value=!0,m("error",t)}function Z(){nt(I.value,f.value)&&(Y(),U())}const q=Ge(Z,200,!0);async function G(){var t;if(!B)return;await _e();const{scrollContainer:v}=s;Ke(v)?f.value=v:Je(v)&&v!==""?f.value=(t=document.querySelector(v))!=null?t:void 0:I.value&&(f.value=Ze(I.value)),f.value&&(l=V(f,"scroll",q),setTimeout(()=>Z(),100))}function U(){!B||!f.value||!q||(l==null||l(),f.value=void 0)}function Q(t){if(!!t.ctrlKey){if(t.deltaY<0)return t.preventDefault(),!1;if(t.deltaY>0)return t.preventDefault(),!1}}function ee(){!H.value||(D=V("wheel",Q,{passive:!1}),d=document.body.style.overflow,document.body.style.overflow="hidden",O.value=!0,m("show"))}function P(){D==null||D(),document.body.style.overflow=d,O.value=!1,m("close")}function te(t){m("switch",t)}return ue(()=>s.src,()=>{J.value?(N.value=!0,x.value=!1,U(),G()):Y()}),we(()=>{J.value?G():Y()}),(t,v)=>(b(),L("div",{ref_key:"container",ref:I,class:g([e(p).b(),t.$attrs.class]),style:fe(e(j))},[x.value?ae(t.$slots,"error",{key:0},()=>[h("div",{class:g(e(p).e("error"))},qe(e(o)("el.image.error")),3)]):(b(),L(ne,{key:1},[X.value!==void 0?(b(),L("img",je({key:0},e(c),{src:X.value,loading:t.loading,style:e(K),class:e(oe),crossorigin:t.crossorigin,onClick:ee,onLoad:F,onError:re}),null,16,mt)):S("v-if",!0),N.value?(b(),L("div",{key:1,class:g(e(p).e("wrapper"))},[ae(t.$slots,"placeholder",{},()=>[h("div",{class:g(e(p).e("placeholder"))},null,2)])],2)):S("v-if",!0)],64)),e(H)?(b(),L(ne,{key:2},[O.value?(b(),de(e(dt),{key:0,"z-index":t.zIndex,"initial-index":e(le),infinite:t.infinite,"zoom-rate":t.zoomRate,"min-scale":t.minScale,"max-scale":t.maxScale,"url-list":t.previewSrcList,"hide-on-click-modal":t.hideOnClickModal,teleported:t.previewTeleported,"close-on-press-escape":t.closeOnPressEscape,onClose:P,onSwitch:te},{default:_(()=>[t.$slots.viewer?(b(),L("div",pt,[ae(t.$slots,"viewer")])):S("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","min-scale","max-scale","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):S("v-if",!0)],64)):S("v-if",!0)],6))}});var _t=be(yt,[["__file","image.vue"]]);const wt=he(_t);const bt={class:"page-404-content"},ht={__name:"index",setup(r){const m=()=>{et.goHome()};return(s,d)=>{const o=wt,p=Ue,M=ke;return b(),L("div",bt,[u(M,{title:"\u9875\u9762\u4E22\u5931","sub-title":"\u554A\u6B27\uFF0C\u9875\u9762\u88AB\u706B\u661F\u4EBA\u5077\u8D70\u5566~~~"},{icon:_(()=>[u(o,{class:"img-content",src:"/src/assets/imgs/404.png"})]),extra:_(()=>[u(p,{type:"primary",onClick:m},{default:_(()=>[Qe("Back")]),_:1})]),_:1})])}}},Lt=tt(ht,[["__scopeId","data-v-26e29878"]]);export{Lt as default};
