import{u as v}from"./ViewFunctions-bfcb00a7.js";import{P as h}from"./PageHeader-cfb6d86c.js";import{_ as g,A as w,H as y,g as b,o as _,c as p,a as e,F as S,k as $,q as l,t as u,e as k,r as d,b as m}from"./app-8906d496.js";/* empty css            */const x={props:{viewstate:{type:Object}},setup(i){const s=w(),c=y();b(()=>{Object.entries(i.viewstate.menubar).forEach(([r,a])=>a.pathname===s.path?a.active=!0:a.active=!1)});function n(r,a){Object.entries(i.viewstate.menubar).forEach(([t,o])=>o.active=!1),i.viewstate.menubar[a].active=!0,c.push({path:r.pathname})}return{settingsMenuSelect:n}}},M={class:"pf-c-menu"},C={class:"pf-c-menu__content"},O={class:"pf-c-menu__list"},V=["onClick"],j={class:"pf-c-menu__item-main"},B={class:"pf-c-menu__item-icon"},E={class:"pf-c-menu__item-text"},F={class:"pf-c-menu__item-description",style:{"white-space":"pre-wrap","word-break":"keep-all"}};function N(i,s,c,n,r,a){return _(),p("div",M,[e("div",C,[e("ul",O,[(_(!0),p(S,null,$(c.viewstate.menubar,(t,o)=>(_(),p("li",{class:"pf-c-menu__list-item",key:t.name},[e("button",{class:l(["pf-c-menu__item",t.active?"activeMenuItem":""]),type:"button",onClick:f=>n.settingsMenuSelect(t,o)},[e("span",j,[e("span",B,[e("i",{class:l(t.icon),"aria-hidden":"true"},null,2)]),e("span",E,u(t.name),1)]),e("span",F,[e("span",null,u(t.description),1)])],10,V)]))),128))])])])}const z=g(x,[["render",N]]),A={props:{},components:{PageHeader:h,SettingsMenu:z},setup(i){const s=k({pagename:"System Settings",pagedesc:"Manage system settings and configuration",menubar:{0:{name:"System Overview",pathname:"/settings/overview",icon:"fas fa-fw fa-search",description:"View system information and statistics",active:!1},1:{name:"System Settings",pathname:"/settings/system",icon:"fas fa-fw fa-cogs",description:"Configure system banner, email and timezone settings",active:!1},2:{name:"Security",pathname:"/settings/security",icon:"fas fa-fw fa-shield-alt",description:"View security settings",active:!1},3:{name:"About",pathname:"/settings/about",icon:"pf pf-icon-help",description:"rConfig application information and support",active:!1}}}),{isLoading:c}=v(s,s.modelName,s.modelObject);return{viewstate:s,isLoading:c}}},D={class:"pf-c-page__main",tabindex:"-1"},H=e("div",{class:"pf-c-divider",role:"separator"},null,-1),L={class:"pf-c-page__main-section pf-m-no-padding"},P={class:"pf-c-drawer__main"},R={class:"pf-c-drawer__content pf-m-no-background"},q={class:"pf-c-drawer__body pf-m-padding"},I={class:"pf-l-grid pf-m-gutter"},G={class:"pf-l-grid__item pf-m-3-col"},J={class:"pf-l-grid__item pf-m-9-col"};function K(i,s,c,n,r,a){const t=d("page-header"),o=d("settings-menu"),f=d("router-view");return _(),p("main",D,[m(t,{pagename:n.viewstate.pagename,desc:n.viewstate.pagedesc},null,8,["pagename","desc"]),H,e("section",L,[e("div",{class:l(["pf-c-drawer",{"pf-m-expanded":n.viewstate.openDrawerState}])},[e("div",P,[e("div",R,[e("div",q,[e("div",I,[e("div",G,[m(o,{viewstate:n.viewstate},null,8,["viewstate"])]),e("div",J,[m(f)])])])])])],2)])])}const X=g(A,[["render",K]]);export{X as default};
