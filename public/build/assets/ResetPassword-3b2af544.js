import{T as c,o as f,c as w,w as n,a as o,u as e,Z as _,b as t,d as V,n as g,e as b}from"./app-481af7cf.js";import{_ as k}from"./GuestLayout-f8862f57.js";import{_ as l,a as i,b as m}from"./TextInput-82ad41e9.js";import{_ as v}from"./PrimaryButton-d80a67e6.js";import"./ApplicationLogo-8a84958b.js";import"./_plugin-vue_export-helper-c27b6911.js";const x={class:"mt-4"},y={class:"mt-4"},P={class:"flex items-center justify-end mt-4"},U={__name:"ResetPassword",props:{email:String,token:String},setup(p){const d=p,s=c({token:d.token,email:d.email,password:"",password_confirmation:""}),u=()=>{s.post(route("password.store"),{onFinish:()=>s.reset("password","password_confirmation")})};return($,a)=>(f(),w(k,null,{default:n(()=>[o(e(_),{title:"Reset Password"}),t("form",{onSubmit:b(u,["prevent"])},[t("div",null,[o(l,{for:"email",value:"Email"}),o(i,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(s).email,"onUpdate:modelValue":a[0]||(a[0]=r=>e(s).email=r),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),o(m,{class:"mt-2",message:e(s).errors.email},null,8,["message"])]),t("div",x,[o(l,{for:"password",value:"Password"}),o(i,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:e(s).password,"onUpdate:modelValue":a[1]||(a[1]=r=>e(s).password=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(m,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),t("div",y,[o(l,{for:"password_confirmation",value:"Confirm Password"}),o(i,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:e(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=r=>e(s).password_confirmation=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),o(m,{class:"mt-2",message:e(s).errors.password_confirmation},null,8,["message"])]),t("div",P,[o(v,{class:g({"opacity-25":e(s).processing}),disabled:e(s).processing},{default:n(()=>a[3]||(a[3]=[V(" Reset Password ")])),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{U as default};
