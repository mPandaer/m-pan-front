/* empty css                  */import{E as M,a as k,b as L,c as N}from"./el-col.8995c41e.js";import"./el-tooltip.57d5fb8e.js";import"./el-icon.ececf587.js";import{E as U}from"./el-divider.647a5ce0.js";import{P as C}from"./index.ed666537.js";import{Y as D,r as u,Z as F,o as v,g as h,M as s,C as a,t as g,w as i,cb as R,aD as x,am as A,bS as H,V as m,f as O,a0 as T,a1 as Y}from"./index.9cb8c9b9.js";import{_ as Z}from"./_plugin-vue_export-helper.cdc0426e.js";import"./index.74c74cb5.js";import"./index.4e6c0115.js";import"./el-input.442e5724.js";import"./index.fd569633.js";const j=r=>(T("data-v-2914c409"),r=r(),Y(),r),q={class:"pan-video-content"},z={class:"video-name-content"},G={class:"video-name"},J={class:"video-content"},K=["src"],Q={class:"video-list-content"},W=j(()=>a("i",{class:"fa fa-video-camera"},null,-1)),X={slot:"title"},$={__name:"index",setup(r){const f=D(),c=u(""),o=u([]),d=u(""),l=u("0"),E=t=>{o.value=new Array,t.forEach((e,n)=>{e.filename=e.filename.substring(0,e.filename.lastIndexOf(".")),e.filename.length>15&&(e.filename=e.filename.substring(0,16)+"..."),e.fileId===f.params.fileId&&(c.value=e.filename,d.value=m.getPreviewUrl(e.fileId)),o.value.push(e)}),l.value=f.params.fileId},y=()=>{let t="",e=l.value;if(o.value.some((_,p)=>{if(_.fileId===e)return t=p,!0}),t===o.value.length-1)return;let n=o.value[++t];c.value=n.filename,d.value=m.getPreviewUrl(n.fileId),l.value=n.fileId},w=t=>{l.value=t,o.value.some(e=>{if(e.fileId===t)return c.value=e.filename,d.value=m.getPreviewUrl(e.fileId),!0})},S=()=>{document.getElementById("r_pan_video_player").addEventListener("ended",()=>{y()},!1)},P=()=>{R.list({parentId:f.params.parentId,fileTypes:"9"},function(t){t.code===0?(E(t.data),S()):x.error(t.message)},function(t){x.error(t)})};return F(()=>{P()}),(t,e)=>{const n=U,_=M,p=k,V=L,b=N;return v(),h("div",null,[s(C),a("div",q,[a("div",z,[a("p",G,g(c.value),1)]),s(n),s(b,null,{default:i(()=>[s(_,{span:18},{default:i(()=>[a("div",J,[a("video",{id:"r_pan_video_player",src:d.value,autoplay:"true",controls:"true"},null,8,K)])]),_:1}),s(_,{span:6},{default:i(()=>[a("div",Q,[s(V,{class:"video-list","default-active":l.value,onSelect:w},{default:i(()=>[(v(!0),h(A,null,H(o.value,(I,B)=>(v(),O(p,{key:B,index:I.fileId},{default:i(()=>[W,a("span",X,g(I.filename),1)]),_:2},1032,["index"]))),128))]),_:1},8,["default-active"])])]),_:1})]),_:1})])])}}},ue=Z($,[["__scopeId","data-v-2914c409"]]);export{ue as default};
