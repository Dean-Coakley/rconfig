import{a as N,u as k}from"./ViewFunctions-bfcb00a7.js";import{P as x}from"./PageHeader-cfb6d86c.js";import{D as V}from"./DataTable-7d657004.js";import{S as O}from"./SideDrawer-46539071.js";import{b as L}from"./DeleteModal-324e12b3.js";import{_ as C,f as u,g as S,r as c,o as d,c as v,b as g,a as o,n as P,v as F,t as j,h as b,p as B,F as M,e as h,q as R,l as w,w as y}from"./app-8906d496.js";import{L as T}from"./LoadingSpinner-a0d214b0.js";import"./DataTableToolbar-8dad84f3.js";import"./DataTableSpinner-65e30ce1.js";/* empty css            */const q={props:{viewstate:{type:Object}},emits:["closeDrawer","formsubmitted"],components:{LoadingSpinner:T},setup(t,{emit:a}){const l=u(!1),e=u(t.viewstate.editid===0?"add":"edit"),{errors:m,model:r,clearModel:i,updateModel:n,getModel:p,storeModel:f,isLoading:_}=N(t.viewstate.modelName,t.viewstate.modelObject);S(()=>{p(t.viewstate.editid)});const s=async()=>{t.viewstate.editid!=0?await n(r):await f(r),m.value===""&&(a("formsubmitted",t.viewstate.pagenamesingle+" "+e.value+"ed!"),D())};function D(){a("closeDrawer")}return{showRoleOptions:l,close:D,errors:m,model:r,saveModels:s,clearModel:i,isLoading:_}}},K={key:0,novalidate:"",class:"pf-c-form"},z=["value"],E={class:"pf-c-form__group"},H=o("div",{class:"pf-c-form__group-label"},[o("label",{class:"pf-c-form__label",for:"form-demo-basic-name"},[o("span",{class:"pf-c-form__label-text"},"Vendor Name"),o("span",{class:"pf-c-form__label-required","aria-hidden":"true"},"*")])],-1),I={class:"pf-c-form__group-control"},U=["aria-invalid"],A={key:0,class:"pf-c-form__helper-text pf-m-error",id:"form-help-text-address-helper","aria-live":"polite"},G={class:"pf-c-form__group pf-m-action"},J={class:"pf-c-form__group-control"},Q={class:"pf-c-form__actions"};function W(t,a,l,e,m,r){const i=c("loading-spinner");return d(),v(M,null,[g(i,{showSpinner:e.isLoading},null,8,["showSpinner"]),e.isLoading?b("",!0):(d(),v("form",K,[o("input",{id:"editid",name:"editid",type:"hidden",value:l.viewstate.editid},null,8,z),o("div",E,[H,o("div",I,[P(o("input",{class:"pf-c-form-control",required:"",type:"text",id:"vendorName",name:"vendorname","onUpdate:modelValue":a[0]||(a[0]=n=>e.model.vendorName=n),"aria-invalid":!!e.errors.vendorName,autocomplete:"off"},null,8,U),[[F,e.model.vendorName]]),e.errors.vendorName?(d(),v("p",A,j(e.errors.vendorName[0]),1)):b("",!0)])]),o("div",G,[o("div",J,[o("div",Q,[o("button",{class:"pf-c-button pf-m-primary",type:"submit",onClick:a[1]||(a[1]=B((...n)=>e.saveModels&&e.saveModels(...n),["prevent"]))},"Save"),o("button",{class:"pf-c-button pf-m-link",type:"button",onClick:a[2]||(a[2]=(...n)=>e.close&&e.close(...n))},"Cancel")])])])]))],64)}const X=C(q,[["render",W]]),Y={components:{VendorsForm:X,PageHeader:x,DataTable:V,SideDrawer:O,DeleteModal:L},setup(){const t=h({editid:0,pagename:"Vendors",pagedesc:"rConfig system vendors",pagenamesingle:"Vendor",modelName:"vendors",openDrawerState:!1,showDeleteModal:!1,sideDrawerComponentKey:1,pageOptionsState:{page:1,per_page:10},modelObject:{vendorName:""}}),{models:a,isLoading:l,dataTablePageChanged:e,openDrawer:m,closeDrawerState:r,deleteRow:i,formSubmitted:n,confirmDelete:p,destroyModel:f}=k(t,t.modelName,t.modelObject);S(()=>{e(t.pageOptionsState)});const _=h({headers:[{key:"id",label:"ID",sortable:!0,error:"Can't be blank",width:10},{key:"vendorName",label:"Vendor Name",sortable:!0}],data:a,isLoading:l});return{viewstate:t,dataTablePageChanged:e,openDrawer:m,closeDrawerState:r,deleteRow:i,confirmDelete:p,table:_,destroyModel:f,formSubmitted:n}}},Z={class:"pf-c-page__main",tabindex:"-1"},$=o("div",{class:"pf-c-divider",role:"separator"},null,-1),ee={class:"pf-c-page__main-section pf-m-no-padding"},ae={class:"pf-c-drawer__main"},oe=o("div",{class:"pf-l-flex__item"},"Please complete all fields",-1);function te(t,a,l,e,m,r){const i=c("page-header"),n=c("data-table"),p=c("vendors-form"),f=c("side-drawer"),_=c("delete-modal");return d(),v(M,null,[o("main",Z,[g(i,{pagename:e.viewstate.pagename,desc:e.viewstate.pagedesc},null,8,["pagename","desc"]),$,o("section",ee,[o("div",{class:R(["pf-c-drawer",{"pf-m-expanded":e.viewstate.openDrawerState}])},[o("div",ae,[g(n,{pagename:e.viewstate.pagenamesingle,tabledata:e.table,onPagechanged:e.dataTablePageChanged,onOpenDrawer:a[0]||(a[0]=s=>e.openDrawer(s)),onDeleteRow:a[1]||(a[1]=s=>e.deleteRow(s))},null,8,["pagename","tabledata","onPagechanged"]),(d(),w(f,{pagename:e.viewstate.pagenamesingle,drawerState:e.viewstate.openDrawerState,editid:e.viewstate.editid,onCloseDrawer:a[3]||(a[3]=s=>e.viewstate.openDrawerState=!1),key:e.viewstate.sideDrawerComponentKey},{subtext:y(()=>[oe]),form:y(()=>[(d(),w(p,{viewstate:e.viewstate,onCloseDrawer:e.closeDrawerState,onFormsubmitted:a[2]||(a[2]=s=>e.formSubmitted(s)),key:e.viewstate.editid},null,8,["viewstate","onCloseDrawer"]))]),_:1},8,["pagename","drawerState","editid"]))])],2)])]),e.viewstate.showDeleteModal?(d(),w(_,{key:0,editid:e.viewstate.editid,onCloseModal:a[4]||(a[4]=s=>e.viewstate.showDeleteModal=!1),onConfirmDelete:e.confirmDelete},null,8,["editid","onConfirmDelete"])):b("",!0)],64)}const _e=C(Y,[["render",te]]);export{_e as default};
