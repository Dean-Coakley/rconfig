import{D as b}from"./DataTable-7d657004.js";import{D as w}from"./DevicesBreadcrumbs-c820a746.js";import{L as D}from"./LoadingSpinner-a0d214b0.js";import{P as y}from"./PageHeader-cfb6d86c.js";import{u as h}from"./ViewFunctions-bfcb00a7.js";import{b as u}from"./DeleteModal-324e12b3.js";import{_ as C,f,A as L,i as k,e as v,g as B,r as i,c as M,b as p,w as E,a as s,q as N,l as O,h as P,o as _}from"./app-8906d496.js";import"./DataTableToolbar-8dad84f3.js";import"./DataTableSpinner-65e30ce1.js";/* empty css            */const S={props:{},components:{PageHeader:y,DevicesBreadcrumbs:w,LoadingSpinner:D,DataTable:b,DeleteModal:u},setup(){const d=f("Device Event Log");f("Event log history for this device");const a=L(),r=a.query.id,e=a.query.devicename;k("create-notification");const t=v({editid:0,pagename:"Activity Log",pagedesc:"rConfig system activity log",pagenamesingle:"Activity Log",modelName:"activitylogs",openDrawerState:!1,showDeleteModal:!1,sideDrawerComponentKey:1,pageOptionsState:{page:1,per_page:10,filters:JSON.stringify({device_id:r})},modelObject:{log_name:"",description:"",created_at:""}}),{models:g,isLoading:l,dataTablePageChanged:n,deleteRow:c,confirmDelete:m,destroyModel:o}=h(t,t.modelName,t.modelObject);return B(()=>{n(t.pageOptionsState)}),{table:v({headers:[{key:"log_name",label:"Type",sortable:!0},{key:"description",label:"Description",sortable:!1},{key:"created_at",label:"Created",sortable:!1}],data:g,isLoading:l}),pagename:d,deviceid:r,devicename:e,viewstate:t,dataTablePageChanged:n,deleteRow:c,confirmDelete:m,destroyModel:o}}},x={class:"pf-c-page__main",tabindex:"-1"},R=s("div",{class:"pf-c-divider",role:"separator"},null,-1),T={class:"pf-c-page__main-section pf-m-no-padding"},V={class:"pf-c-drawer__main"};function j(d,a,r,e,t,g){const l=i("devices-breadcrumbs"),n=i("page-header"),c=i("data-table"),m=i("delete-modal");return _(),M("main",x,[p(n,{pagename:e.pagename},{breadcrumbs:E(()=>[p(l,{devicename:e.devicename,deviceId:e.deviceid},null,8,["devicename","deviceId"])]),_:1},8,["pagename"]),R,s("section",T,[s("div",{class:N(["pf-c-drawer",{"pf-m-expanded":e.viewstate.openDrawerState}])},[s("div",V,[p(c,{pagename:e.viewstate.pagenamesingle,tabledata:e.table,onPagechanged:e.dataTablePageChanged,onOpenDrawer:a[0]||(a[0]=o=>d.openDrawer(o)),onDeleteRow:a[1]||(a[1]=o=>e.deleteRow(o)),newBtnEnabled:!1,editBtnEnabled:!1},null,8,["pagename","tabledata","onPagechanged"])])],2)]),e.viewstate.showDeleteModal?(_(),O(m,{key:0,editid:e.viewstate.editid,onCloseModal:a[2]||(a[2]=o=>e.viewstate.showDeleteModal=!1),onConfirmDelete:e.confirmDelete},null,8,["editid","onConfirmDelete"])):P("",!0)])}const W=C(S,[["render",j]]);export{W as default};
