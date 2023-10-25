import{D as K}from"./DeviceCategoryField-ca0cd58b.js";import{_ as T,f as m,m as E,g as A,D as R,o as i,c as r,a as l,t as v,n as G,v as X,p as k,E as H,F as D,k as j,j as O,h as p,q,r as w,l as V,w as C,e as U,B as F,b as N,G as I}from"./app-8906d496.js";import{M as Y,u as z}from"./MultiSelect-9ea02f7f.js";import{u as B,a as J}from"./ViewFunctions-bfcb00a7.js";const Q={props:{modelValue:{type:String},errors:""},setup(n,{emit:t}){const o=m(!1),e=m(null),d=m(""),c=m([]),a=m(!1),_=m([]),b=m("");E(e,g=>L()),A(()=>{y()});const h=R(()=>{if(d.value==="")return c.value;let g=0;return c.value.filter(M=>{if(M.toLowerCase().includes(d.value.toLowerCase())&&g<10)return g++,M})});function f(){u(d.value),o.value=!0}function y(){a.value=!0,axios.get("/api/get-device-models").then(g=>{c.value=g.data.data,_.value=c,a.value=!1}).catch(g=>{console.log(g.response.data.errors)})}function u(g){d.value=g,t("update:modelValue",g),L()}function s(){o.value===!1&&y(),o.value=!o.value}function x(){d.value="",o.value=!1}function P(){L()}function L(){o.value=!1}return n.modelValue?d.value=n.modelValue:d.value="",{searchTerm:d,clickOutsidetarget:e,selected:b,makeSelection:u,toggleSelect:s,showSelect:o,models:c,results:_,searchModels:h,onChange:f,clearall:x,isLoading:a,onEsc:P}}},W={class:"pf-c-form__group"},Z=l("div",{class:"pf-c-form__group-label"},[l("label",{class:"pf-c-form__label",for:"device_category"},[l("span",{class:"pf-c-form__label-text"},"Model"),l("span",{class:"pf-c-form__label-required","aria-hidden":"true"},"*")])],-1),$={id:"select-single-typeahead-expanded-label",hidden:""},ee={class:"pf-c-select__toggle pf-m-typeahead"},te={class:"pf-c-select__toggle-wrapper"},le=l("i",{class:"fas fa-times-circle","aria-hidden":"true"},null,-1),oe=[le],ae=l("i",{class:"fas fa-caret-down pf-c-select__toggle-arrow","aria-hidden":"true"},null,-1),se=[ae],ie={key:0,class:"pf-c-select__menu multi-select-dropdown-overflow","aria-labelledby":"select-single-typeahead-expanded-label",role:"listbox"},de={key:0},ne=["onClick"],re={key:0,class:"pf-c-select__menu-item-icon"},ce=l("i",{class:"fas fa-check","aria-hidden":"true"},null,-1),_e=[ce],pe={key:1,role:"presentation",class:"pf-c-select__list-item pf-m-loading"},me=l("span",{class:"pf-c-spinner pf-m-lg",role:"progressbar","aria-label":"Loading item"},[l("span",{class:"pf-c-spinner__clipper"}),l("span",{class:"pf-c-spinner__lead-ball"}),l("span",{class:"pf-c-spinner__tail-ball"})],-1),fe=[me],ue={key:0,class:"pf-c-form__helper-text pf-m-error",id:"device_model_error","aria-live":"polite"};function ve(n,t,o,e,d,c){return i(),r("div",W,[Z,l("div",{class:q(["pf-c-select pf-m-expanded",o.errors.device_model?"pf-m-invalid":""]),ref:"clickOutsidetarget"},[l("span",$,v(e.searchTerm?e.searchTerm:"Select model"),1),l("div",ee,[l("div",te,[G(l("input",{class:"pf-c-form-control pf-c-select__toggle-typeahead",type:"text",id:"select-single-typeahead-expanded-typeahead","aria-label":"Type to filter",placeholder:"Select a model or type to create a new one...","onUpdate:modelValue":t[0]||(t[0]=a=>e.searchTerm=a),onInput:t[1]||(t[1]=(...a)=>e.onChange&&e.onChange(...a)),autocomplete:"off"},null,544),[[X,e.searchTerm]])]),l("button",{tabindex:"-1",class:"pf-c-button pf-m-plain pf-c-select__toggle-clear",type:"button","aria-label":"Clear all",onClick:t[2]||(t[2]=k((...a)=>e.clearall&&e.clearall(...a),["prevent"]))},oe),l("button",{tabindex:"-1",class:"pf-c-button pf-m-plain pf-c-select__toggle-button",type:"button",id:"select-single-typeahead-expanded-toggle","aria-haspopup":"true","aria-expanded":"true","aria-labelledby":"select-single-typeahead-expanded-label select-single-typeahead-expanded-toggle","aria-label":"Select",onClick:t[3]||(t[3]=k((...a)=>e.toggleSelect&&e.toggleSelect(...a),["prevent"])),onKeydown:t[4]||(t[4]=H((...a)=>e.onEsc&&e.onEsc(...a),["esc"]))},se,32)]),e.showSelect||""?(i(),r("ul",ie,[e.isLoading?p("",!0):(i(),r("div",de,[(i(!0),r(D,null,j(e.searchModels,a=>(i(),r("li",{role:"presentation",key:a.id},[l("button",{class:"pf-c-select__menu-item",role:"option",onClick:k(_=>e.makeSelection(a),["prevent"])},[O(v(a)+" ",1),a===e.searchTerm?(i(),r("span",re,_e)):p("",!0)],8,ne)]))),128))])),e.isLoading?(i(),r("li",pe,fe)):p("",!0)])):p("",!0)],2),o.errors.device_model?(i(),r("p",ue,v(o.errors.device_model[0]),1)):p("",!0)])}const ge=T(Q,[["render",ve]]),be={props:{modelValue:{type:Object},fieldname:{type:String,required:!0},errors:""},components:{MultiSelect:Y},setup(n,{emit:t}){const{results:o,isLoading:e}=z("tags"),d=m([]);function c(a){t("update:updateValue",a)}if(d.value=n.modelValue.tag,d.value){let a=[];d.value.forEach(_=>{a.push(_)}),t("update:updateValue",a)}return{getTags:o,updateOptions:c,isLoading:e,modelOptions:d}}},he=["id"],ye={key:1};function we(n,t,o,e,d,c){const a=w("multi-select");return i(),V(a,{options:e.getTags,modelOptions:e.modelOptions,msLabel:"tagname",msValue:"id",errors:o.errors.hasOwnProperty("device_tags"),onOptionsUpdated:t[0]||(t[0]=_=>e.updateOptions(_)),isLoading:e.isLoading,fieldType:"tags"},{"multi-select-label":C(()=>[O("Choose tags")]),"multi-select-subtext":C(()=>[o.errors.device_tags?(i(),r("p",{key:0,class:"pf-c-form__helper-text pf-m-error",id:o.fieldname+"_error","aria-live":"polite"},v(o.errors.device_tags[0]),9,he)):(i(),r("span",ye,"You must associate one or multiple tags."))]),_:1},8,["options","modelOptions","errors","isLoading"])}const Ve=T(be,[["render",we]]),ke={props:{modelValue:{type:Object},errors:""},setup(n,{emit:t}){const o=m(!1),e=m(null);E(e,s=>u());const d=U({id:"",templateName:""}),c=U({modelName:"templates",pageOptionsState:{page:1,per_page:1e4},modelObject:{templateName:""}}),{models:a,isLoading:_,dataTablePageChanged:b}=B(c,c.modelName,c.modelObject);function h(s){Object.assign(d,a.data.find(x=>x.id===s)),t("update:updateValue",s),u()}function f(){o.value===!1&&b(c.pageOptionsState),o.value=!o.value}function y(){u()}function u(){o.value=!1}return"template"in n.modelValue?(d.id=n.modelValue.template[0].id,d.templateName=n.modelValue.template[0].templateName):(d.id="",d.templateName="Select a template"),{clickOutsidetarget:e,selected:d,makeSelection:h,toggleSelect:f,showSelect:o,models:a,isLoading:_,onEsc:y}}},xe={class:"pf-c-form__group"},Se=l("div",{class:"pf-c-form__group-label"},[l("label",{class:"pf-c-form__label",for:"device_template"},[l("span",{class:"pf-c-form__label-text"},"Template "),l("span",{class:"pf-c-form__label-required","aria-hidden":"true"},"*")])],-1),Ce={class:"pf-c-input-group"},Te={class:"pf-c-select__toggle-wrapper"},Oe={key:0,class:"pf-c-select__toggle-text"},Ue={key:1,class:"pf-c-select__toggle-text"},Le=l("span",{class:"pf-c-select__toggle-arrow"},[l("i",{class:"fas fa-caret-down","aria-hidden":"true"})],-1),Ne={key:0,class:"pf-c-select__menu multi-select-dropdown-overflow",role:"listbox","aria-labelledby":"device_template-label",style:{width:"auto"}},Me=l("div",{class:"pf-c-select__menu-group-title","aria-hidden":"true",id:"select-checkbox-expanded-selected-group-template"}," Select Template ",-1),Ee={key:0},De=["onClick"],Pe={key:0,class:"pf-c-select__menu-item-icon"},Fe=l("i",{class:"fas fa-check","aria-hidden":"true"},null,-1),He=[Fe],je={class:"pf-c-select__menu-item-description"},qe={key:1,role:"presentation",class:"pf-c-select__list-item pf-m-loading"},Ie=l("span",{class:"pf-c-spinner pf-m-lg",role:"progressbar","aria-label":"Loading item"},[l("span",{class:"pf-c-spinner__clipper"}),l("span",{class:"pf-c-spinner__lead-ball"}),l("span",{class:"pf-c-spinner__tail-ball"})],-1),Ae=[Ie],Be={key:0,class:"pf-c-form__helper-text pf-m-error",id:"device_template_error","aria-live":"polite"};function Ke(n,t,o,e,d,c){return i(),r("div",xe,[Se,l("div",Ce,[l("div",{class:q(["pf-c-select",o.errors.device_template?"pf-m-invalid":""]),ref:"clickOutsidetarget"},[l("button",{class:"pf-c-select__toggle",type:"button",id:"device_template-toggle","aria-haspopup":"true","aria-expanded":"false","aria-labelledby":"device_template-label device_template-toggle",onClick:t[0]||(t[0]=k((...a)=>e.toggleSelect&&e.toggleSelect(...a),["prevent"])),onKeydown:t[1]||(t[1]=H((...a)=>e.onEsc&&e.onEsc(...a),["esc"]))},[l("div",Te,[e.selected.id?(i(),r("span",Ue,v(e.selected.templateName),1)):(i(),r("span",Oe,"Select a template"))]),Le],32),e.showSelect||""?(i(),r("ul",Ne,[Me,e.isLoading?p("",!0):(i(),r("div",Ee,[(i(!0),r(D,null,j(e.models.data,a=>(i(),r("li",{role:"presentation",key:a.id},[l("button",{class:"pf-c-select__menu-item",role:"option",onClick:k(_=>e.makeSelection(a.id),["prevent"])},[O(v(a.templateName)+" ",1),a.id===e.selected.id?(i(),r("span",Pe,He)):p("",!0),l("span",je,v(a.templateDescription),1)],8,De)]))),128))])),e.isLoading?(i(),r("li",qe,Ae)):p("",!0)])):p("",!0)],2)]),o.errors.device_template?(i(),r("p",Be,v(o.errors.device_template[0]),1)):p("",!0)])}const Re=T(ke,[["render",Ke]]),Ge={props:{fieldlabel:{type:String,required:!0},fieldname:{type:String,required:!0},fieldtype:{type:String,required:!0},btnHelperTxt:{type:String,default:""},cred_id:{type:Number,default:0},errors:"",modelValue:""},emit:["update:modelValue","setCreds"],setup(n,{emit:t}){const o=m(!1),e=m(!1),d=m({}),c=m(null);E(c,f=>h());const a=U({device_username:"",device_username:""});function _(){o.value=!0,axios.get("/api/settings/credentials?page=1&perPage=100").then(f=>{d.value=f.data.data,o.value=!1}),e.value=!e.value}function b(f){t("setCreds",f),h()}function h(){e.value=!1}return{clickOutsidetargetCreds:c,creds:d,isLoadingCreds:o,model:a,setCreds:b,showCredsSelect:e,toggleCreds:_}}},Xe={class:"pf-c-form__group"},Ye=l("div",{class:"pf-c-form__group-label"},[l("label",{class:"pf-c-form__label",for:"device_username"},[l("span",{class:"pf-c-form__label-text"},"Username"),l("span",{class:"pf-c-form__label-required","aria-hidden":"true"},"*")])],-1),ze={class:"pf-c-input-group"},Je=["type","id","name","value","alt","title","aria-invalid"],Qe={key:0,class:"pf-c-form__helper-text pf-m-error",id:"device_username_error","aria-live":"polite"};function We(n,t,o,e,d,c){return i(),r("div",Xe,[Ye,l("div",ze,[l("input",{class:"pf-c-form-control",type:o.fieldtype,id:o.fieldname,name:o.fieldname,value:o.modelValue,alt:o.btnHelperTxt,title:o.btnHelperTxt,onChange:t[0]||(t[0]=a=>n.$emit("update:modelValue",a.target.value)),spellcheck:"false","data-ms-editor":"true","aria-label":"Device Username","aria-invalid":!!o.errors[o.fieldname]},null,40,Je)]),o.errors.device_username?(i(),r("p",Qe,v(o.errors.device_username[0]),1)):p("",!0)])}const Ze=T(Ge,[["render",We]]),$e={props:{modelValue:{type:Object},errors:""},setup(n,{emit:t}){const o=m(!1),e=m(null);E(e,s=>u());const d=U({id:"",vendorName:""}),c=U({modelName:"vendors",pageOptionsState:{page:1,per_page:1e4},modelObject:{templateName:""}}),{models:a,isLoading:_,dataTablePageChanged:b}=B(c,c.modelName,c.modelObject);function h(s){Object.assign(d,a.data.find(x=>x.id===s)),t("update:updateValue",d.id),u()}function f(){o.value===!1&&b(c.pageOptionsState),o.value=!o.value}function y(){u()}function u(){o.value=!1}return"vendor"in n.modelValue?(d.id=n.modelValue.vendor[0].id,d.vendorName=n.modelValue.vendor[0].vendorName,t("update:updateValue",d.id)):(d.id="",d.vendorName="Select a vendor"),{clickOutsidetarget:e,selected:d,makeSelection:h,toggleSelect:f,showSelect:o,models:a,isLoading:_,onEsc:y}}},et={class:"pf-c-form__group"},tt=l("div",{class:"pf-c-form__group-label"},[l("label",{class:"pf-c-form__label",for:"device_vendor"},[l("span",{class:"pf-c-form__label-text"},"Vendor"),l("span",{class:"pf-c-form__label-required","aria-hidden":"true"},"*")])],-1),lt={class:"pf-c-input-group"},ot={class:"pf-c-select__toggle-wrapper"},at={class:"pf-c-select__toggle-text"},st=l("span",{class:"pf-c-select__toggle-arrow"},[l("i",{class:"fas fa-caret-down","aria-hidden":"true"})],-1),it={key:0,class:"pf-c-select__menu multi-select-dropdown-overflow",role:"listbox","aria-labelledby":"device_vendor-label",style:{width:"auto"}},dt=l("div",{class:"pf-c-select__menu-group-title","aria-hidden":"true",id:"select-checkbox-expanded-selected-group-vendor"}," Select Vendor ",-1),nt={key:0},rt=["onClick"],ct={key:0,class:"pf-c-select__menu-item-icon"},_t=l("i",{class:"fas fa-check","aria-hidden":"true"},null,-1),pt=[_t],mt={key:1,role:"presentation",class:"pf-c-select__list-item pf-m-loading"},ft=l("span",{class:"pf-c-spinner pf-m-lg",role:"progressbar","aria-label":"Loading item"},[l("span",{class:"pf-c-spinner__clipper"}),l("span",{class:"pf-c-spinner__lead-ball"}),l("span",{class:"pf-c-spinner__tail-ball"})],-1),ut=[ft],vt={key:0,class:"pf-c-form__helper-text pf-m-error",id:"device_vendor_error","aria-live":"polite"};function gt(n,t,o,e,d,c){return i(),r("div",et,[tt,l("div",lt,[l("div",{class:q(["pf-c-select",o.errors.device_vendor?"pf-m-invalid":""]),ref:"clickOutsidetarget"},[l("button",{class:"pf-c-select__toggle",type:"button",id:"device_vendor-toggle","aria-haspopup":"true","aria-expanded":"false","aria-labelledby":"device_vendor-label device_vendor-toggle",onClick:t[0]||(t[0]=k((...a)=>e.toggleSelect&&e.toggleSelect(...a),["prevent"])),onKeydown:t[1]||(t[1]=H((...a)=>e.onEsc&&e.onEsc(...a),["esc"]))},[l("div",ot,[l("span",at,v(e.selected.vendorName),1)]),st],32),e.showSelect||""?(i(),r("ul",it,[dt,e.isLoading?p("",!0):(i(),r("div",nt,[(i(!0),r(D,null,j(e.models.data,a=>(i(),r("li",{role:"presentation",key:a.id},[l("button",{class:"pf-c-select__menu-item",role:"option",onClick:k(_=>e.makeSelection(a.id),["prevent"])},[O(v(a.vendorName)+" ",1),a.id===e.selected.id?(i(),r("span",ct,pt)):p("",!0)],8,rt)]))),128))])),e.isLoading?(i(),r("li",mt,ut)):p("",!0)])):p("",!0)],2)]),o.errors.device_vendor?(i(),r("p",vt,v(o.errors.device_vendor[0]),1)):p("",!0)])}const bt=T($e,[["render",gt]]),ht={props:{fieldlabel:{type:String,required:!0},fieldname:{type:String,required:!0},fieldtype:{type:String,required:!0},btnHelperTxt:{type:String,default:""},errors:"",modelValue:"",tooltip:!1},setup(n,{emit:t}){return{tooltipShow:m(!1)}}},yt={class:"pf-c-form__group"},wt={class:"pf-c-form__group-label",style:{position:"relative"}},Vt=["for"],kt={class:"pf-c-form__label-text"},xt=l("i",{class:"pficon pf-icon-help","aria-hidden":"true"},null,-1),St=[xt],Ct={key:1,class:"pf-c-tooltip pf-m-bottom-left",role:"tooltip",style:{position:"absolute"}},Tt=l("div",{class:"pf-c-tooltip__arrow"},null,-1),Ot={class:"pf-c-tooltip__content",id:"tooltip-top-content"},Ut={class:"pf-c-input-group"},Lt=["type","id","name","value","alt","title","aria-invalid"],Nt={class:"pf-c-form__helper-text"},Mt=["id"];function Et(n,t,o,e,d,c){return i(),r("div",yt,[l("div",wt,[l("label",{class:"pf-c-form__label",for:o.fieldname},[l("span",kt,v(o.fieldlabel),1)],8,Vt),o.tooltip?(i(),r("button",{key:0,class:"pf-c-form__group-label-help",onMouseover:t[0]||(t[0]=a=>e.tooltipShow=!0),onMouseleave:t[1]||(t[1]=a=>e.tooltipShow=!1),tabindex:"-1"},St,32)):p("",!0),e.tooltipShow?(i(),r("div",Ct,[Tt,l("div",Ot,[F(n.$slots,"tooltip-text")])])):p("",!0)]),l("div",Ut,[l("input",{class:"pf-c-form-control",type:o.fieldtype,id:o.fieldname,name:o.fieldname,value:o.modelValue,alt:o.btnHelperTxt,title:o.btnHelperTxt,onChange:t[2]||(t[2]=a=>n.$emit("update:modelValue",a.target.value)),spellcheck:"false","data-ms-editor":"true","aria-label":"Device Username","aria-invalid":!!o.errors[o.fieldname]},null,40,Lt),F(n.$slots,"btnIcon")]),l("div",Nt,[F(n.$slots,"helper-text")]),o.errors[o.fieldname]?(i(),r("p",{key:0,class:"pf-c-form__helper-text pf-m-error",id:o.fieldname+"_error","aria-live":"polite"},v(o.errors[o.fieldname][0]),9,Mt)):p("",!0)])}const Dt=T(ht,[["render",Et]]),Pt={props:{viewstate:{type:Object}},emits:["closeDrawer","formsubmitted"],components:{DeviceVendorField:bt,DeviceModelField:ge,DeviceCategoryField:K,DeviceTagField:Ve,DeviceUsernameField:Ze,DeviceTemplateField:Re,ReusableInputField:Dt},setup(n,{emit:t}){const o=m(!1),e=U({1:"password",2:"password"});if(n.viewstate.isClone)var d="clon";else var d=n.viewstate.editid===0?"add":"edit";const c=m(d),{errors:a,model:_,clearModel:b,updateModel:h,getModel:f,getModelClone:y,storeModel:u,isLoading:s}=J(n.viewstate.modelName,n.viewstate.modelObject);A(()=>{n.viewstate.isClone?y(n.viewstate.editid):f(n.viewstate.editid)});function x(S){this.passwordFieldType[S]=this.passwordFieldType[S]==="password"?"text":"password"}const P=async()=>{n.viewstate.editid!=0&&!n.viewstate.isClone?await h(_):await u(_),a.value===""&&(t("formsubmitted",n.viewstate.pagenamesingle+" "+c.value+"ed!"),b(),g())};function L(S){_.device_username=S.cred_username,_.device_password=S.cred_password,_.device_enable_password=S.cred_enable_password,_.device_cred_id=S.id}function g(){t("closeDrawer")}function M(){_.device_main_prompt=_.device_name+"#",_.device_enable_prompt=_.device_name+">"}return{clearModel:b,close:g,errors:a,generatePrompts:M,isLoading:s,model:_,passwordFieldType:e,saveModels:P,setCreds:L,showRoleOptions:o,switchVisibility:x}}},Ft=["value"],Ht={class:"pf-l-grid pf-m-gutter"},jt={key:0,class:"pf-c-spinner pf-m-xl",role:"progressbar","aria-label":"Loading items",style:{margin:"0 auto",display:"table"}},qt=l("span",{class:"pf-c-spinner__clipper"},null,-1),It=l("span",{class:"pf-c-spinner__lead-ball"},null,-1),At=l("span",{class:"pf-c-spinner__tail-ball"},null,-1),Bt=[qt,It,At],Kt={class:"pf-l-grid__item pf-m-12-col pf-m-6-col-on-md"},Rt={key:0,novalidate:"",class:"pf-c-form"},Gt=l("div",{class:"pf-u-color-300"},"Device Information",-1),Xt={class:"pf-l-grid__item pf-m-12-col pf-m-6-col-on-md"},Yt={key:0,novalidate:"",class:"pf-c-form"},zt=l("div",{class:"pf-u-color-300"},"Connection Information",-1),Jt=l("i",{class:"fas fa-eye","aria-hidden":"true"},null,-1),Qt=[Jt],Wt=l("i",{class:"fas fa-eye","aria-hidden":"true"},null,-1),Zt=[Wt],$t={key:0,class:"pf-c-form__group pf-m-action"},el={class:"pf-c-form__group-control"},tl={class:"pf-c-form__actions"};function ll(n,t,o,e,d,c){const a=w("reusable-input-field"),_=w("device-vendor-field"),b=w("device-model-field"),h=w("device-category-field"),f=w("device-tag-field"),y=w("device-username-field"),u=w("device-template-field");return i(),r(D,null,[l("input",{id:"editid",name:"editid",type:"hidden",value:o.viewstate.editid,autocomplete:"off"},null,8,Ft),l("div",Ht,[e.isLoading?(i(),r("span",jt,Bt)):p("",!0),l("div",Kt,[e.isLoading?p("",!0):(i(),r("form",Rt,[Gt,(i(),V(a,{tabindex:"1",modelValue:e.model.device_name,"onUpdate:modelValue":t[0]||(t[0]=s=>e.model.device_name=s),fieldlabel:"Device Name",fieldname:"device_name",fieldtype:"text",btnHelperTxt:"Username",errors:e.errors,key:"device_name"},null,8,["modelValue","errors"])),(i(),V(a,{tabindex:"1",modelValue:e.model.device_ip,"onUpdate:modelValue":t[1]||(t[1]=s=>e.model.device_ip=s),fieldlabel:"IP Address",fieldname:"device_ip",fieldtype:"text",btnHelperTxt:"IP Address",errors:e.errors,key:"device_ip"},null,8,["modelValue","errors"])),N(_,{modelValue:e.model,"onUpdate:modelValue":t[2]||(t[2]=s=>e.model=s),updateValue:e.model.device_vendor,"onUpdate:updateValue":t[3]||(t[3]=s=>e.model.device_vendor=s),errors:e.errors},null,8,["modelValue","updateValue","errors"]),N(b,{modelValue:e.model.device_model,"onUpdate:modelValue":t[4]||(t[4]=s=>e.model.device_model=s),errors:e.errors},null,8,["modelValue","errors"]),N(h,{modelValue:e.model,"onUpdate:modelValue":t[5]||(t[5]=s=>e.model=s),updateValue:e.model.device_category_id,"onUpdate:updateValue":t[6]||(t[6]=s=>e.model.device_category_id=s),errors:e.errors},null,8,["modelValue","updateValue","errors"]),N(f,{modelValue:e.model,"onUpdate:modelValue":t[7]||(t[7]=s=>e.model=s),fieldname:"device_tag",updateValue:e.model.device_tags,"onUpdate:updateValue":t[8]||(t[8]=s=>e.model.device_tags=s),errors:e.errors},null,8,["modelValue","updateValue","errors"])]))]),l("div",Xt,[e.isLoading?p("",!0):(i(),r("form",Yt,[zt,(i(),V(y,{modelValue:e.model.device_username,"onUpdate:modelValue":t[9]||(t[9]=s=>e.model.device_username=s),onSetCreds:t[10]||(t[10]=s=>e.setCreds(s)),fieldlabel:"Username",fieldname:"device_username",fieldtype:"text",cred_id:e.model.device_cred_id,btnHelperTxt:"Username",errors:e.errors,key:"device_username"},null,8,["modelValue","cred_id","errors"])),(i(),V(a,{tabindex:"1",modelValue:e.model.device_password,"onUpdate:modelValue":t[12]||(t[12]=s=>e.model.device_password=s),fieldlabel:"Password",fieldname:"device_password",fieldtype:e.passwordFieldType[1],btnHelperTxt:"Main Password",errors:e.errors,key:"device_password"},I({_:2},[n.$userName==="admin"?{name:"btnIcon",fn:C(()=>[l("button",{tabindex:"-1",class:"pf-c-button pf-m-control",type:"button",onClick:t[11]||(t[11]=s=>e.switchVisibility(1))},Qt)]),key:"0"}:void 0]),1032,["modelValue","fieldtype","errors"])),(i(),V(a,{tabindex:"1",modelValue:e.model.device_enable_password,"onUpdate:modelValue":t[14]||(t[14]=s=>e.model.device_enable_password=s),fieldlabel:"Enable Password",fieldname:"device_enable_password",fieldtype:e.passwordFieldType[2],btnHelperTxt:"Enable Password",errors:e.errors,key:"device_enable_password"},I({_:2},[n.$userName==="admin"?{name:"btnIcon",fn:C(()=>[l("button",{tabindex:"-1",class:"pf-c-button pf-m-control",type:"button",onClick:t[13]||(t[13]=s=>e.switchVisibility(2))},Zt)]),key:"0"}:void 0]),1032,["modelValue","fieldtype","errors"])),N(u,{modelValue:e.model,"onUpdate:modelValue":t[15]||(t[15]=s=>e.model=s),updateValue:e.model.device_template,"onUpdate:updateValue":t[16]||(t[16]=s=>e.model.device_template=s),errors:e.errors},null,8,["modelValue","updateValue","errors"]),(i(),V(a,{tabindex:"1",modelValue:e.model.device_main_prompt,"onUpdate:modelValue":t[17]||(t[17]=s=>e.model.device_main_prompt=s),fieldlabel:"Main Prompt",fieldname:"device_main_prompt",fieldtype:"text",btnHelperTxt:"Main Prompt",errors:e.errors,key:"device_main_prompt",tooltip:!0},{"tooltip-text":C(()=>[O(" This is the 'Privileged EXEC' prompt. You will run show commands from this prompt and you can access configure mode. Usually 'router1#' ")]),_:1},8,["modelValue","errors"])),(i(),V(a,{tabindex:"1",modelValue:e.model.device_enable_prompt,"onUpdate:modelValue":t[19]||(t[19]=s=>e.model.device_enable_prompt=s),fieldlabel:"Enable Prompt",fieldname:"device_enable_prompt",fieldtype:"text",btnHelperTxt:"Enable Prompt",errors:e.errors,key:"device_enable_prompt",tooltip:!0},{"tooltip-text":C(()=>[O(" This is the 'User EXEC' prompt. The first level of access prompt. Usually 'router1>' ")]),"helper-text":C(()=>[l("button",{class:"pf-c-button pf-m-link pf-m-inline",type:"button",onClick:t[18]||(t[18]=s=>e.generatePrompts())},"Auto generate prompts from device name")]),_:1},8,["modelValue","errors"]))]))])]),e.isLoading?p("",!0):(i(),r("div",$t,[l("div",el,[l("div",tl,[l("button",{class:"pf-c-button pf-m-primary",type:"submit",onClick:t[20]||(t[20]=k((...s)=>e.saveModels&&e.saveModels(...s),["prevent"]))},"Save"),l("button",{class:"pf-c-button pf-m-link",type:"button",onClick:t[21]||(t[21]=(...s)=>e.close&&e.close(...s))},"Cancel")])])]))],64)}const dl=T(Pt,[["render",ll]]);export{dl as D};
