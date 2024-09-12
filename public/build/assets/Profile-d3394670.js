import{_}from"./AuthenticatedLayout-98a4df14.js";import{k as d,l as v,o,f as n,b as t,d as i,t as r,g as p,F as m,p as y,a as u,u as c,w as x,Z as w}from"./app-481af7cf.js";import"./ApplicationLogo-8a84958b.js";import"./_plugin-vue_export-helper-c27b6911.js";const b={key:0},k={key:1,class:"text-red-500"},P={key:2},h={__name:"SystemProfile",setup(g){const l=d(null),s=d(null),f=async()=>{try{const a=await y.get("/get-profile");l.value=a.data}catch{s.value="Failed to fetch user profile. Please try again later."}};return v(()=>{f()}),(a,e)=>(o(),n(m,null,[e[4]||(e[4]=t("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," System Profile ",-1)),e[5]||(e[5]=t("hr",null,null,-1)),e[6]||(e[6]=t("br",null,null,-1)),l.value?(o(),n("div",b,[t("p",null,[e[0]||(e[0]=t("strong",null,"Name:",-1)),i(" "+r(l.value.name),1)]),t("p",null,[e[1]||(e[1]=t("strong",null,"Email:",-1)),i(" "+r(l.value.email),1)]),t("p",null,[e[2]||(e[2]=t("strong",null,"Member Since:",-1)),i(" "+r(new Date(l.value.created_at).toLocaleDateString()),1)])])):p("",!0),s.value?(o(),n("div",k,r(s.value),1)):!l.value&&!s.value?(o(),n("div",P,e[3]||(e[3]=[t("p",null,"Loading profile...",-1)]))):p("",!0)],64))}},$={key:0},N={key:1,class:"text-red-500"},S={key:2},C={__name:"CronofyProfile",setup(g){const l=d(null),s=d(null),f=async()=>{try{const a=await y.get("/get-cronofy-profile");l.value=a.data.profile}catch{s.value="Failed to fetch user profile. Please try again later."}};return v(()=>{f()}),(a,e)=>(o(),n(m,null,[e[4]||(e[4]=t("div",{class:"flex justify-between items-center mb-4"},[t("h2",{class:"text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl dark:text-white"}," Cronofy Profile "),t("h2",{class:"text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-1xl dark:text-white"},[t("a",{href:"dashboard"}," Event Details ")])],-1)),e[5]||(e[5]=t("br",null,null,-1)),l.value?(o(),n("div",$,[t("p",null,[e[0]||(e[0]=t("strong",null,"Name:",-1)),i(" "+r(l.value.name),1)]),t("p",null,[e[1]||(e[1]=t("strong",null,"Email:",-1)),i(" "+r(l.value.email),1)]),t("p",null,[e[2]||(e[2]=t("strong",null,"Time Zone:",-1)),i(" "+r(l.value.default_tzid),1)])])):p("",!0),s.value?(o(),n("div",N,r(s.value),1)):!l.value&&!s.value?(o(),n("div",S,e[3]||(e[3]=[t("p",null,"Loading profile...",-1)]))):p("",!0)],64))}},D={class:"py-12"},E={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6"},F={class:"p-4 sm:p-8 bg-white shadow sm:rounded-lg"},M={class:"p-4 sm:p-8 bg-white shadow sm:rounded-lg"},U={__name:"Profile",props:{},setup(g){return(l,s)=>(o(),n(m,null,[u(c(w),{title:"Profile"}),u(_,null,{header:x(()=>s[0]||(s[0]=[t("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"Profile",-1)])),default:x(()=>[t("div",D,[t("div",E,[t("div",F,[u(h,{class:"max-w-xl"})]),t("div",M,[u(C,{class:"max-w-xl"})])])])]),_:1})],64))}};export{U as default};
