import{T as m,o as n,c as d,w as t,a as e,u as a,Z as p,b as r,d as f,n as u,e as c}from"./app-481af7cf.js";import{_}from"./GuestLayout-f8862f57.js";import{_ as w,a as b,b as x}from"./TextInput-82ad41e9.js";import{_ as g}from"./PrimaryButton-d80a67e6.js";import"./ApplicationLogo-8a84958b.js";import"./_plugin-vue_export-helper-c27b6911.js";const V={class:"flex justify-end mt-4"},T={__name:"ConfirmPassword",setup(v){const s=m({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return(y,o)=>(n(),d(_,null,{default:t(()=>[e(a(p),{title:"Confirm Password"}),o[2]||(o[2]=r("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1)),r("form",{onSubmit:c(i,["prevent"])},[r("div",null,[e(w,{for:"password",value:"Password"}),e(b,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:a(s).password,"onUpdate:modelValue":o[0]||(o[0]=l=>a(s).password=l),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),e(x,{class:"mt-2",message:a(s).errors.password},null,8,["message"])]),r("div",V,[e(g,{class:u(["ml-4",{"opacity-25":a(s).processing}]),disabled:a(s).processing},{default:t(()=>o[1]||(o[1]=[f(" Confirm ")])),_:1},8,["class","disabled"])])],32)]),_:1}))}};export{T as default};
