import{_ as k}from"./AuthenticatedLayout-98a4df14.js";import{k as g,l as m,o as a,f as r,b as e,F as x,m as b,t as n,g as p,d as c,p as y,a as f,u as C,w as _,Z as $}from"./app-481af7cf.js";import{_ as P}from"./DangerButton-e28b9134.js";import{d as S}from"./index-584e29c2.js";import"./ApplicationLogo-8a84958b.js";import"./_plugin-vue_export-helper-c27b6911.js";const M={key:0,class:"justify-between items-right mb-4"},I={class:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"},F={scope:"col",class:"px-6 py-3"},L={scope:"col",class:"px-6 py-3"},j={scope:"col",class:"px-6 py-3"},B={scope:"col",class:"px-6 py-3"},D={scope:"col",class:"px-6 py-3"},N=["href"],V={class:"px-6 py-4"},z={key:1,class:"text-gray-500"},A={key:2,class:"text-red-500"},Z={key:3},R={__name:"StripeInvoices",setup(h){const o=g([]),l=g(null),i=g(!0),v=async()=>{try{const u=await y.get("/stripe/invoices");u.data.success?u.data.invoices.length>0?o.value=u.data.invoices:l.value="No invoices found.":l.value=u.data.error||"Failed to fetch invoices."}catch{l.value="Failed to fetch invoices. Please try again later."}finally{i.value=!1}};return m(()=>{v()}),(u,t)=>(a(),r(x,null,[t[3]||(t[3]=e("div",{class:"flex justify-between items-center mb-4 mt-3"},[e("h2",{class:"text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl dark:text-white"}," Invoices ")],-1)),o.value.length>0?(a(),r("div",M,[e("table",I,[t[0]||(t[0]=e("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3"}," Invoice ID # "),e("th",{scope:"col",class:"px-6 py-3"}," Amount "),e("th",{scope:"col",class:"px-6 py-3"}," Billing Reason "),e("th",{scope:"col",class:"px-6 py-3"}," Status "),e("th",{scope:"col",class:"px-6 py-3"}," Hosted URL "),e("th",{scope:"col",class:"px-6 py-3"}," Created ")])],-1)),e("tbody",null,[(a(!0),r(x,null,b(o.value,s=>(a(),r("tr",{key:s.id},[e("td",F,n(s.id),1),e("td",L," $ "+n(s.amount_due/100|u.currency)+" - ",1),e("td",j,n(s.billing_reason),1),e("td",B,n(s.status),1),e("td",D,[e("a",{href:s.hosted_invoice_url,target:"_blank"}," View Invoice ",8,N)]),e("td",V,n(new Date(s.created).toLocaleString()),1)]))),128))])])])):!i.value&&!l.value&&o.value.length===0?(a(),r("div",z,t[1]||(t[1]=[e("p",null,"No invoices found.",-1)]))):p("",!0),l.value?(a(),r("div",A,n(l.value),1)):p("",!0),i.value?(a(),r("div",Z,t[2]||(t[2]=[e("div",{class:"flex justify-center my-4"},[e("svg",{class:"animate-spin h-5 w-5 text-gray-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 118 8v2a10 10 0 100-20v2a8 8 0 010 16z"})]),c("    "),e("strong",null," Loading Invoices. .. ")],-1)]))):p("",!0)],64))}},U={class:"flex justify-between items-center mb-4"},E={class:"text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl dark:text-white"},T={class:"text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-1xl dark:text-white"},H={key:0,class:"justify-between items-right mb-4"},J={class:"text-left"},Y={key:1,class:"text-red-500"},q={key:2},G={key:3,class:"mb-3 bg-white overflow-hidden shadow-sm sm:rounded-lg"},K={class:"text-center p-6 text-gray-900 d-flex"},O={__name:"StripeProfile",setup(h){const o=g(null),l=g(null),i=g(!1),v=async()=>{try{const u=await y.get("/stripe/profile");u.data.success?o.value=u.data.profile:l.value=u.data.error||"Failed to fetch profile details."}catch{l.value="Failed to fetch user Stripe profile. Please try again later."}};return m(()=>{v()}),(u,t)=>(a(),r(x,null,[e("div",U,[e("h2",E,n(u.$page.props.auth.user.name)+"'s Stripe Profile ",1),e("h2",T,[e("button",{onClick:t[0]||(t[0]=s=>i.value=!i.value),class:"relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"},t[1]||(t[1]=[e("span",{class:"relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"}," View Invoices ",-1)]))])]),o.value?(a(),r("div",H,[e("ul",J,[e("li",null,[t[2]||(t[2]=e("strong",null,"Name:",-1)),c(" "+n(o.value.name),1)]),e("li",null,[t[3]||(t[3]=e("strong",null,"Email:",-1)),c(" "+n(o.value.email),1)]),e("li",null,[t[4]||(t[4]=e("strong",null,"Invoice Prefix:",-1)),c(" "+n(o.value.invoice_prefix),1)]),e("li",null,[t[5]||(t[5]=e("strong",null,"Address:",-1)),c(" "+n(o.value.address),1)]),e("li",null,[t[6]||(t[6]=e("strong",null,"Current Balance:",-1)),c(" "+n(o.value.balance),1)]),e("li",null,[t[7]||(t[7]=e("strong",null,"Created:",-1)),c(" "+n(new Date(o.value.created*1e3).toLocaleString()),1)])])])):p("",!0),l.value?(a(),r("div",Y,n(l.value),1)):!o.value&&!l.value?(a(),r("div",q,t[8]||(t[8]=[e("div",{class:"flex justify-center my-4"},[e("svg",{class:"animate-spin h-5 w-5 text-gray-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 118 8v2a10 10 0 100-20v2a8 8 0 010 16z"})]),c("    "),e("strong",null," Loading Profile .. ")],-1)]))):p("",!0),u.$page.props.auth.user.stripe_customer_id&&i.value?(a(),r("div",G,[e("div",K,[f(R)])])):p("",!0)],64))}},Q={key:0,class:"justify-between items-right mb-4"},W={class:"text-left"},X={key:1},ee={key:2,class:"text-left mb-4"},te={key:3,class:"text-red-500"},se={__name:"StripePaymentDetails",setup(h){const o=g(null),l=g(null),i=g(!1),v=g(null),u=async()=>{i.value=!0;try{const s=await y.get("/stripe/payments");s.data.success?(console.log(s.data),s.data.payment_methods.length>0?o.value=s.data.payment_methods:l.value="No payment methods found."):l.value=s.data.error||"Failed to fetch payment methods.",i.value=!1}catch{l.value="Failed to fetch payment methods. Please try again later."}finally{i.value=!1}},t=async()=>{i.value=!0;try{const s=await y.get("/stripe/recent/payment");s.data.success?v.value=s.data.invoice:l.value=s.data.error}catch(s){console.log(s),l.value="An error occurred while fetching the payment details. Please try again later."}finally{i.value=!1}};return m(()=>{u(),t()}),(s,d)=>(a(),r(x,null,[d[6]||(d[6]=e("div",{class:"flex justify-between items-center mb-4 mt-3 mb-3"},[e("h2",{class:"text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl dark:text-white"}," Payment Methods ")],-1)),o.value?(a(),r("div",Q,[e("ul",W,[(a(!0),r(x,null,b(o.value,w=>(a(),r("li",{key:w.id},[d[0]||(d[0]=e("strong",null,"Card:",-1)),c(" "+n(w.card.brand)+" ending in "+n(w.card.last4),1)]))),128))])])):p("",!0),i.value?(a(),r("div",X,d[1]||(d[1]=[e("div",{class:"flex justify-center my-4"},[e("svg",{class:"animate-spin h-5 w-5 text-gray-600",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 118 8v2a10 10 0 100-20v2a8 8 0 010 16z"})]),c("    "),e("strong",null," Loading payment methods. .. ")],-1)]))):p("",!0),d[7]||(d[7]=e("div",{class:"flex justify-between items-center mb-4 mt-8"},[e("h2",{class:"text-1xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl dark:text-white text-center"}," Most Recent Payments ")],-1)),v.value?(a(),r("div",ee,[e("p",null,[d[2]||(d[2]=e("strong",null,"Invoice ID:",-1)),c(" "+n(v.value.id),1)]),e("p",null,[d[3]||(d[3]=e("strong",null,"Amount:",-1)),c(" "+n((v.value.amount_paid/100).toFixed(2)|s.currency),1)]),e("p",null,[d[4]||(d[4]=e("strong",null,"Date:",-1)),c(" "+n(new Date(v.value.created*1e3).toLocaleDateString()),1)]),e("p",null,[d[5]||(d[5]=e("strong",null,"Status:",-1)),c(" "+n(v.value.status),1)])])):p("",!0),l.value?(a(),r("div",te,n(l.value),1)):p("",!0)],64))}},le={class:"py-12"},ae={class:"max-w-7xl mx-auto sm:px-6"},re={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},oe={key:0,class:"text-center p-6 text-gray-900 d-flex"},ne={key:1,class:"text-center p-6 text-gray-900 d-flex"},ie={key:2,class:"text-center p-6 text-gray-900 d-flex text-red"},ue={key:3,class:"text-center p-6 text-gray-900 d-flex text-red"},de={key:0,class:"mb-3 bg-white overflow-hidden shadow-sm sm:rounded-lg"},ce={class:"text-center p-6 text-gray-900 d-flex"},pe={key:1,class:"mb-3 bg-white overflow-hidden shadow-sm sm:rounded-lg"},ge={class:"text-center p-6 text-gray-900 d-flex"},we={__name:"Subscription",setup(h){const o=g(!1),l=g(null),i=g(null),v=g(null),u=async()=>{o.value=!0,l.value=null,i.value=null;try{const t=await y.get("/stripe/auth");t.data.success?(i.value=t.data.message,v.value=t.data.user,setTimeout(()=>{S.Inertia.reload()},1e3)):l.value="Failed to fetch user profile. Please try again later."}catch{l.value="Failed to fetch user profile. Please try again later."}finally{o.value=!1}};return m(()=>{}),(t,s)=>(a(),r(x,null,[f(C($),{title:"Subscription"}),f(k,null,{header:_(()=>s[0]||(s[0]=[e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"Stripe",-1)])),default:_(()=>[e("div",le,[e("div",ae,[e("div",re,[!t.$page.props.auth.user.stripe_id&&!o.value?(a(),r("div",oe,[f(P,{onClick:u},{default:_(()=>s[1]||(s[1]=[c("Please Complete Your Stripe Profile ")])),_:1})])):p("",!0),o.value?(a(),r("div",ne,s[2]||(s[2]=[e("button",{disabled:"",type:"button",class:"p-6 py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"},[e("svg",{"aria-hidden":"true",role:"status",class:"inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),e("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"#1C64F2"})]),c(" Just a moment, we're checking your Stripe profile... ")],-1)]))):p("",!0),l.value?(a(),r("div",ie,n(l.value),1)):p("",!0),i.value?(a(),r("div",ue,n(i.value),1)):p("",!0)]),t.$page.props.auth.user.stripe_id?(a(),r("div",de,[e("div",ce,[f(O)])])):p("",!0),t.$page.props.auth.user.stripe_id?(a(),r("div",pe,[e("div",ge,[f(se)])])):p("",!0)])])]),_:1})],64))}};export{we as default};
