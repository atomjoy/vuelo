import{f as b,r as o,u as k,i as S,o as c,c as $,a as r,j as h,k as f,w as m,F as P,T,d as s,q as V,l as p,t as i,m as C,p as A,g as B}from"../js/index.c2e56a80.js";import{_ as D,T as I,P as N}from"./Topbar.711f3d7f.js";import{A as F}from"./Alert.7ae0d6c2.js";import{L as K}from"./Loader.4d566ee9.js";const _=t=>(A("data-v-699d8fd3"),t=t(),B(),t),L={class:"full"},j=["onSubmit"],q={for:"password_current"},E=_(()=>s("i",{class:"fas fa-key"},null,-1)),M=["placeholder"],U={for:"password"},x=_(()=>s("i",{class:"fas fa-key"},null,-1)),z=["placeholder"],G={for:"password_confirmation"},H=_(()=>s("i",{class:"fas fa-key"},null,-1)),J=["placeholder"],O=["value"],Q={__name:"ChangePasswordView",setup(t){const d=o(1),l=o(!1),n=o(""),u=o("success"),a=k();function g(){d.value++}async function w(e){l.value=!0,await a.changePassUser(new FormData(e.target)),a.scrollTop(),n.value=a.alert.message,u.value=a.alert.type,a.alert.type=="success"&&e.target.reset(),a.log("onSubmit",a.alert),g(),l.value=!1}function v(e){a.log("Keyup event",e.target.value)}return(e,R)=>{const y=S("focus");return c(),$(P,null,[r(T,{title:"change_pass.title"}),l.value?(c(),h(K,{key:0})):f("",!0),r(D,null,{topbar:m(()=>[r(I)]),content:m(()=>[r(N,{msg:"change_pass.page_title",text:"change_pass.page_message"}),s("div",L,[s("form",{method:"post",class:"form margin-top",onSubmit:V(w,["prevent"])},[n.value?(c(),h(F,{msg:n.value,type:u.value,key:d.value},null,8,["msg","type"])):f("",!0),s("label",q,[p(i(e.$t("change_pass.password_current"))+" ",1),E]),C(s("input",{type:"password",name:"password_current",placeholder:e.$t("change_pass.password_current_placeholder")},null,8,M),[[y]]),s("label",U,[p(i(e.$t("change_pass.password"))+" ",1),x]),s("input",{type:"password",name:"password",placeholder:e.$t("change_pass.password_placeholder"),onKeyup:v},null,40,z),s("label",G,[p(i(e.$t("change_pass.password_confirmation"))+" ",1),H]),s("input",{type:"password",name:"password_confirmation",placeholder:e.$t("change_pass.password_confirmation_placeholder")},null,8,J),s("input",{type:"submit",value:e.$t("change_pass.button")},null,8,O)],40,j)])]),_:1})],64)}}},ee=b(Q,[["__scopeId","data-v-699d8fd3"]]);export{ee as default};