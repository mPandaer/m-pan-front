import{cw as y,s as b,cx as k,cy as C,b as w,d as m,u as $,c as E,o as l,g as a,C as f,j as i,n as t,a as e,h as c,_ as S,f as h,E as B,t as p,p as I}from"./index.9cb8c9b9.js";const n={success:"icon-success",warning:"icon-warning",error:"icon-error",info:"icon-info"},d={[n.success]:y,[n.warning]:b,[n.error]:k,[n.info]:C},R=w({title:{type:String,default:""},subTitle:{type:String,default:""},icon:{type:String,values:["success","warning","info","error"],default:"info"}}),N=m({name:"ElResult"}),T=m({...N,props:R,setup(v){const _=v,o=$("result"),r=E(()=>{const s=_.icon,u=s&&n[s]?n[s]:"icon-info",g=d[u]||d["icon-info"];return{class:u,component:g}});return(s,u)=>(l(),a("div",{class:t(e(o).b())},[f("div",{class:t(e(o).e("icon"))},[i(s.$slots,"icon",{},()=>[e(r).component?(l(),h(B(e(r).component),{key:0,class:t(e(r).class)},null,8,["class"])):c("v-if",!0)])],2),s.title||s.$slots.title?(l(),a("div",{key:0,class:t(e(o).e("title"))},[i(s.$slots,"title",{},()=>[f("p",null,p(s.title),1)])],2)):c("v-if",!0),s.subTitle||s.$slots["sub-title"]?(l(),a("div",{key:1,class:t(e(o).e("subtitle"))},[i(s.$slots,"sub-title",{},()=>[f("p",null,p(s.subTitle),1)])],2)):c("v-if",!0),s.$slots.extra?(l(),a("div",{key:2,class:t(e(o).e("extra"))},[i(s.$slots,"extra")],2)):c("v-if",!0)],2))}});var D=S(T,[["__file","result.vue"]]);const P=I(D);export{P as E};
