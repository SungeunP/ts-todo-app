(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{104:function(t,e,n){"use strict";n.r(e);var o,c=n(0),a=n.n(c),i=n(11),r=n.n(i),s=(n(95),n(14)),l=n(10),d=n(45),u=n(24),j=n.n(u),b=n(5),f=n(139),_=Object(b.a)({root:{borderRadius:"0px",boxShadow:"none"}})(f.a),O=n(156),h=n(144),p=n(145),v=n(141),x=n(155),m=n(146),C=n(55),g=n(78),T=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"\ud83d\udcc3",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"\uadf8\ub8f9 \uc774\ub984 \uc5c6\uc74c",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];Object(C.a)(this,t),this.id=void 0,this.icon=void 0,this.title=void 0,this.todos=void 0,this.id=E(),this.icon=e,this.title=n,this.todos=o}return Object(g.a)(t,[{key:"setTitle",value:function(t){return this.title=t,this}}]),t}(),k=0,E=function(){return k++},y=T,w=n(57),S=n.n(w),N=n(140),I=n(143),D=n(25),L=n.n(D),F=n(2),B=["\ud83d\udcaa","\ud83d\udcd6","\ud83c\udfae","\ud83c\udfa8","\ud83d\udcc8","\ud83d\ude25","\u26bd","\ud83d\udcf7","\ud83e\udd7c","\ud83c\udf88","\u2728","\ud83c\udf83"],A=function(t){var e=t.open,n=t.anchorEl,o=void 0===n?null:n,a=t.defaultIcon,i=void 0===a?"":a,r=t.onClose,s=t.onConfirm,d=Object(c.useState)([]),u=Object(l.a)(d,2),j=u[0],b=u[1],f=Object(c.useState)(i),O=Object(l.a)(f,2),h=O[0],p=O[1],m=Object(c.useState)(""),C=Object(l.a)(m,2),g=C[0],T=C[1];Object(c.useEffect)((function(){setTimeout((function(){b(B)}),300)}),[]),Object(c.useEffect)((function(){p(i)}),[i]),Object(c.useEffect)((function(){if(g){var t=null===j||void 0===j?void 0:j.find((function(t){return t===g}));t&&p(t)}else p(i)}),[g]);var k=function(){r(),p(i)},E=function(){s(""!==g.trim()?g:h),k(),!(null===j||void 0===j?void 0:j.find((function(t){return t===g})))&&b([g].concat(j))};return Object(F.jsx)(N.a,{className:L.a.popover_content,open:e,marginThreshold:0,onClose:k,anchorEl:o,transformOrigin:{vertical:"bottom",horizontal:"left"},children:Object(F.jsxs)("div",{className:L.a.popover_wrap,children:[Object(F.jsx)("div",{className:L.a.icon_picker,children:null===j||void 0===j?void 0:j.map((function(t){return Object(F.jsx)(v.a,{className:"".concat(L.a.icon," ").concat(t===h?L.a.selected:""),onClick:function(){return p(e=t),s(e),void k();var e},children:t})}))}),Object(F.jsxs)("div",{className:L.a.input_icon,children:[Object(F.jsx)(x.a,{className:L.a.input,placeholder:"Input emoji !",value:g,onInput:function(t){var e=t.target.value;e.length<=2&&T(e)},onKeyPress:function(t){"Enter"===t.key&&""!==g.trim()&&E()}}),Object(F.jsx)(_,{className:L.a.confirm_button,variant:"contained",color:"primary",onClick:E,children:Object(F.jsx)(I.a,{})})]})]})})},U=function(t){var e=t.open,n=t.onClose,o=t.onCreate,a=Object(c.useState)(null),i=Object(l.a)(a,2),r=i[0],s=i[1],d=Object(c.useState)("\ud83d\udda4"),u=Object(l.a)(d,2),j=u[0],b=u[1],_=Object(c.useState)(""),C=Object(l.a)(_,2),g=C[0],T=C[1],k=function(){if(""!==g.trim()){var t=new y(j,g,[]);o(t)}},E=Boolean(r);return Object(F.jsxs)(O.a,{open:e,fullWidth:!0,onClose:n,children:[Object(F.jsx)(h.a,{style:{paddingBottom:"12px"},children:"Add tab"})," ",Object(F.jsxs)(p.a,{className:S.a.dialog_content,children:[Object(F.jsx)(v.a,{className:S.a.icon,color:"primary",onClick:function(t){s(t.target)},children:j}),Object(F.jsx)(x.a,{autoFocus:!0,className:S.a.title,label:"Tab title",variant:"standard",value:g,onInput:function(t){var e=t.target.value;T(e)},onKeyPress:function(t){"Enter"===t.key&&k()}}),Object(F.jsx)(A,{open:E,anchorEl:r,onClose:function(){s(null)},onConfirm:function(t){b(t),b("\ud83d\udda4"),T("")}})]}),Object(F.jsx)(m.a,{children:Object(F.jsx)(f.a,{variant:"contained",color:"primary",onClick:k,children:"CREATE"})})]})},M=function(t){var e=t.id,n=t.icon,o=t.title,a=t.onClick,i=Object(c.useState)(!1),r=Object(l.a)(i,2),s=r[0],u=r[1];return Object(F.jsx)(_,{className:"".concat(j.a.tab," ").concat(s?j.a.hover:""),variant:"contained",color:"primary",onClick:function(){return a(e)},onMouseEnter:function(){return u(!0)},onMouseLeave:function(){return u(!1)},children:Object(F.jsxs)("div",{className:j.a.label_wrap,children:[Object(F.jsx)("div",{className:j.a.icon,children:n}),Object(F.jsx)(d.a,{className:j.a.title,variant:"h5",children:o})]})})},P=function(t){var e=t.open,n=t.tabs,o=t.onTabClick,a=t.onTabCreate,i=Object(c.useState)(!1),r=Object(l.a)(i,2),u=r[0],b=r[1],f=function(t){var e=n.find((function(e){return e.id===t}));e&&o(e)};return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(_,{className:j.a.add_tab,variant:"contained",color:"primary",onClick:function(t){t.stopPropagation(),b(!0)},children:Object(F.jsx)(d.a,{variant:"h5",children:"\u2795 add tab"})}),Object(F.jsx)("ul",{className:"".concat(j.a.tabs," ").concat(e?j.a.open:""),children:null===n||void 0===n?void 0:n.map((function(t){return Object(F.jsx)(M,Object(s.a)(Object(s.a)({},t),{},{onClick:f}))}))}),Object(F.jsx)(U,{open:u,onClose:function(){b(!1)},onCreate:function(t){a(t),b(!1)}})]})},z=n(58),K=n.n(z),R=function(t){var e=t.children,n=t.open,o=t.onClose,a=Object(c.useState)(!1),i=Object(l.a)(a,2),r=i[0],s=i[1],d=Object(c.useState)(!1),u=Object(l.a)(d,2),j=u[0],b=u[1];Object(c.useEffect)((function(){n?s(!0):(b(!1),setTimeout((function(){s(!1)}),200))}),[n]),Object(c.useEffect)((function(){r&&b(!0)}),[r]);return r?Object(F.jsx)("div",{className:"".concat(K.a.side_bar," ").concat(r?K.a.show:""," ").concat(j?K.a.open:""),onClick:function(t){t.target===t.currentTarget&&o&&o()},children:e}):null},W=0,q=function(){return W++},G=function t(e,n){Object(C.a)(this,t),this.id=void 0,this.title=void 0,this.completed=void 0,this.id=q(),this.title=e,this.completed=n},Y=n(79),H=n.n(Y),J=n(142),Q=n(147),V=n(148),X=n(149),Z=n(150),$=n(44),tt=n.n($),et={minWidth:"50px",width:"50px",height:"50px",padding:"0px",borderRadius:"50%"},nt=function(t){var e=t.checked,n=t.onChange;return Object(F.jsxs)(_,{disableRipple:!0,className:tt.a.checkbox_btn,style:et,onClick:function(t){t.stopPropagation(),n&&n(!e)},children:[Object(F.jsx)("div",{className:tt.a.circle}),Object(F.jsx)(I.a,{className:"".concat(tt.a.check," ").concat(e?tt.a.show:""),color:"primary"})]})},ot=n(59),ct=n.n(ot),at=n(151),it=function(t){var e=t.id,n=t.title,o=t.completed,c=t.onClick,a=t.onCheckChange,i=t.onDelete;return Object(F.jsxs)(Q.a,{onClick:function(){c(e)},button:!0,children:[Object(F.jsx)(V.a,{children:Object(F.jsx)(nt,{onChange:function(t){a(e,t)},checked:o})}),Object(F.jsx)(X.a,{primary:Object(F.jsx)(rt,{text:n})}),Object(F.jsx)(Z.a,{children:Object(F.jsx)(v.a,{onClick:function(){i(e)},color:"primary",children:Object(F.jsx)(at.a,{className:ct.a.item_secondary_icon})})})]})},rt=Object(b.a)({})((function(t){var e=t.text;return Object(F.jsx)(d.a,{className:ct.a.item_content,variant:"h5",color:"primary",children:e})})),st=function(t){var e=t.items,n=t.onEdit,o=t.onCheckChange,c=t.onDelete,a=e.length>0;return Object(F.jsx)(J.a,{className:ct.a.list,children:a?e.map((function(t){return Object(F.jsx)(it,Object(s.a)(Object(s.a)({},t),{},{onClick:n,onCheckChange:o,onDelete:c}))})):Object(F.jsx)(d.a,{variant:"h4",children:"Try create todo !"})})},lt=n(80),dt=n.n(lt),ut=n(153),jt=n(81),bt=n.n(jt),ft=n(152),_t=function(t){var e=t.onClick;return Object(F.jsx)(ft.a,{className:bt.a.add_button,onClick:function(){e()},"aria-label":"create todo",children:Object(F.jsx)(ut.a,{})})},Ot=n(157),ht=n(65),pt=n.n(ht);!function(t){t.Create="CREATE",t.Edit="EDIT"}(o||(o={}));var vt=function(t){var e=t.show,n=t.type,a=void 0===n?o.Create:n,i=t.todo,r=t.defaultText,d=void 0===r?"":r,u=t.onCreate,j=t.onUpdate,b=t.onCancel,_=Object(c.useState)(d),v=Object(l.a)(_,2),C=v[0],g=v[1],T=Object(c.useState)(!1),k=Object(l.a)(T,2),E=k[0],y=k[1];Object(c.useEffect)((function(){g(d)}),[d]);var w=function(t){if(""!==t){if(i)j&&j(Object(s.a)(Object(s.a)({},i),{},{title:t}));else{var e=new G(t,!1);u&&u(e)}S()}else y(!0)},S=function(t){b&&b()},N=a===o.Create?"Create":"Edit",I=a===o.Create?"Create":"Update";return Object(F.jsxs)(O.a,{className:pt.a.add_todo,fullWidth:!0,open:e,onClose:S,children:[Object(F.jsxs)(h.a,{children:[N," todo"]}),Object(F.jsxs)(p.a,{style:{padding:"0px 24px 8px"},children:[" ",Object(F.jsx)(x.a,{autoFocus:!0,className:pt.a.input_todo,label:"Title",placeholder:"Write todo!",value:C,defaultValue:d,onKeyDown:function(t){"Enter"===t.key&&w(C)},onChange:function(t){var e=t.target.value;g(e)}})]}),Object(F.jsx)(m.a,{children:Object(F.jsx)(f.a,{variant:"contained",color:"primary",onClick:function(t){w(C)},children:I})}),Object(F.jsx)(Ot.a,{open:E,message:"Todo is empty!",autoHideDuration:2e3,onClose:function(){y(!1)}})]})},xt=function(t){var e=t.todos,n=t.onTodoDeleted,a=t.onTodoEdited,i=t.onTodoCreated,r=Object(c.useState)(null),d=Object(l.a)(r,2),u=d[0],j=d[1],b=Object(c.useState)(!1),f=Object(l.a)(b,2),_=f[0],O=f[1],h=Object(c.useState)(!1),p=Object(l.a)(h,2),v=p[0],x=p[1],m=u?o.Edit:o.Create,C=u?u.title:void 0;return Object(F.jsxs)("div",{className:dt.a.body,children:[Object(F.jsx)(st,{items:e,onEdit:function(t){if(e){var n=e.find((function(e){return e.id===t}));n?(j(n),O(!0)):x(!0)}},onCheckChange:function(t,n){if(e){var o=e.find((function(e){return e.id===t}));if(!o)return void console.error("onTodoChecked - todo not finded!!");var c=Object(s.a)(Object(s.a)({},o),{},{completed:n});a(c)}},onDelete:n}),Object(F.jsx)(_t,{onClick:function(){j(null),O(!0)}}),Object(F.jsx)(vt,{show:_,type:m,todo:u,onUpdate:function(t){a(t)},defaultText:C,onCreate:function(t){i(t),setTimeout((function(){O(!1)}),100)},onCancel:function(){O(!1)}}),Object(F.jsx)(Ot.a,{open:v,message:"Oops, somethings wrong",autoHideDuration:2e3,onClose:function(){x(!1)}})]})},mt=n(82),Ct=n.n(mt),gt=n(41),Tt=n.n(gt),kt=n(158),Et=n(60),yt=n.n(Et),wt=function(t){var e=t.open,n=t.anchorEl,o=void 0===n?null:n,a=t.defaultTitle,i=void 0===a?"":a,r=t.onClose,s=t.onConfirm,d=Object(c.useState)(i),u=Object(l.a)(d,2),j=u[0],b=u[1];Object(c.useEffect)((function(){b(i)}),[i]);var f=function(){r()},O=function(){s(j),f()},h=j||"Input text to update!";return Object(F.jsxs)(N.a,{className:yt.a.popover_content,open:e,marginThreshold:0,onClose:f,anchorEl:o,transformOrigin:{vertical:"bottom",horizontal:"left"},children:[Object(F.jsx)(kt.a,{autoFocus:!0,value:j,onChange:function(t){var e=t.currentTarget.value;b(e)},onKeyPress:function(t){"Enter"===t.key&&O()},className:yt.a.edit_title,placeholder:h}),Object(F.jsx)(_,{className:yt.a.confirm_button,onClick:O,children:Object(F.jsx)(I.a,{color:"primary",style:{fontSize:"36px"}})})]})},St=function(t){var e=t.tab,n=t.onTabClick,o=t.onEditTitle,a=t.onEditIcon,i=Object(c.useState)(null),r=Object(l.a)(i,2),s=r[0],d=r[1],u=Object(c.useState)(null),j=Object(l.a)(u,2),b=j[0],f=j[1],O=null!==e&&void 0!==e?e:{},h=O.icon,p=O.title,x=Boolean(s),m=Boolean(b);return Object(F.jsxs)("div",{className:Tt.a.header,children:[Object(F.jsx)(_,{className:Tt.a.menu,variant:"contained",color:"primary",onClick:n,children:Object(F.jsx)(Ct.a,{style:{fontSize:"36px"}})}),e?Object(F.jsxs)("div",{className:Tt.a.title_wrap,children:[Object(F.jsx)(v.a,{className:Tt.a.icon,color:"primary",onClick:function(t){f(t.currentTarget)},children:h}),Object(F.jsx)(A,{open:m,defaultIcon:h,anchorEl:b,onClose:function(){f(null)},onConfirm:a}),Object(F.jsx)(_,{className:Tt.a.title,onClick:function(t){d(t.currentTarget)},children:p}),Object(F.jsx)(wt,{open:x,defaultTitle:p,anchorEl:s,onClose:function(){d(null)},onConfirm:o})]}):Object(F.jsx)("p",{children:" Try create group! "})]})},Nt=[new G("\uc800\ub141\uc5d0 \uc6b4\ub3d9\ud558\uae30",!1),new G("\uc720\ud29c\ube0c \uc601\uc0c1 \ubcf4\uae30",!1),new G("\ubc29 \uccad\uc18c\ud558\uae30",!1),new G("\uc800\ub141\uc5d0 \uc6b4\ub3d9\ud558\uae30",!1),new G("\uc720\ud29c\ube0c \uc601\uc0c1 \ubcf4\uae30",!1),new G("\ubc29 \uccad\uc18c\ud558\uae30",!1)],It=[new G("\uac15\uc758 \ub4e3\uae30",!1)],Dt=[new G("Marvel's Spider-Man",!1),new G("Last of us",!1),new G("\ub864 \uadf8\ub9c8",!1),new G("\ubaac\ud5cc",!1)],Lt=[new y("\ud83d\udcaa","Daily tasks",Nt),new y("\ud83d\udcd6","Study",It),new y("\ud83c\udfae","Games",Dt)];var Ft=function(){var t,e=Object(c.useState)(!1),n=Object(l.a)(e,2),o=n[0],a=n[1],i=Object(c.useState)(null),r=Object(l.a)(i,2),u=r[0],j=r[1],b=Object(c.useState)(null),f=Object(l.a)(b,2),_=f[0],O=f[1],h=function(t){_&&O(Object(s.a)(Object(s.a)({},_),{},{todos:t}))};Object(c.useEffect)((function(){u||setTimeout((function(){j(Lt),Lt[0]&&O(Lt[0])}),300)}),[]),Object(c.useEffect)((function(){}),[u]);var p=null!==(t=null===_||void 0===_?void 0:_.todos)&&void 0!==t?t:[];return Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)("div",{className:H.a.App,children:[u?Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(St,{tab:_,onTabClick:function(){a(!0)},onEditTitle:function(t){if(u&&_){var e=Object(s.a)(Object(s.a)({},_),{},{title:t});j(u.map((function(t){return t.id===_.id?e:t}))),O(e)}},onEditIcon:function(t){if(u&&_){var e=Object(s.a)(Object(s.a)({},_),{},{icon:t});j(u.map((function(t){return t.id===_.id?e:t}))),O(e)}}}),p&&Object(F.jsx)(xt,{todos:p,onTodoCreated:function(t){if(_){var e=_.todos;h([t].concat(e))}},onTodoDeleted:function(t){!function(t){if(_){var e=_.todos;h(e.filter((function(e){return e.id!==t})))}}(t)},onTodoEdited:function(t){if(_){var e=_.todos.map((function(e){return e.id===t.id?t:e}));h(e)}}})]}):Object(F.jsx)(d.a,{variant:"h4",color:"primary",children:"Loading .."}),Object(F.jsx)(R,{open:o,onClose:function(){a(!1)},children:u?Object(F.jsx)(P,{open:o,tabs:u,onTabClick:function(t){if(u){var e=(null!==_&&void 0!==_?_:{}).id,n=u.map((function(t){return t.id===e&&null!==_&&void 0!==_?_:t}));j(n),O(t)}a(!1)},onTabCreate:function(t){j([t].concat(null!==u&&void 0!==u?u:[])),O(t)}}):o?Object(F.jsx)(d.a,{children:"Loading .."}):Object(F.jsx)(F.Fragment,{})})]})})},Bt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,159)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),o(t),c(t),a(t),i(t)}))},At=n(154),Ut=n(83),Mt=Object(Ut.a)({palette:{primary:{main:"#3F4F50"}}});r.a.render(Object(F.jsx)(At.a,{theme:Mt,children:Object(F.jsx)(a.a.StrictMode,{children:Object(F.jsx)(Ft,{})})}),document.getElementById("root")),Bt()},24:function(t,e,n){t.exports={add_tab:"TabList_add_tab__1KvMb",tabs:"TabList_tabs__3Jkgq",open:"TabList_open__11GgD",tab:"TabList_tab__3fgE5",label_wrap:"TabList_label_wrap__2Us2_",icon:"TabList_icon__1PS2E",title:"TabList_title__2BOSh"}},25:function(t,e,n){t.exports={popover_content:"IconEditor_popover_content__-FvIv",popover_wrap:"IconEditor_popover_wrap__27UTa",icon_picker:"IconEditor_icon_picker__yncGF",icon:"IconEditor_icon__wxiU7",selected:"IconEditor_selected__2iQIx",input_icon:"IconEditor_input_icon__3lUd2",input:"IconEditor_input__1nfUr",confirm_button:"IconEditor_confirm_button__C6cvd"}},41:function(t,e,n){t.exports={header:"header_header__17T4t",menu:"header_menu__191km",title_wrap:"header_title_wrap__1jYM2",icon:"header_icon__3Lb2m",title:"header_title__38zi_"}},44:function(t,e,n){t.exports={checkbox_btn:"CheckboxButton_checkbox_btn__A0Vfu",circle:"CheckboxButton_circle__xqcKC",check:"CheckboxButton_check___OOOS",show:"CheckboxButton_show__2WeYA"}},57:function(t,e,n){t.exports={dialog_content:"CreateTabDialog_dialog_content__3dqYf",icon:"CreateTabDialog_icon__11bSz",title:"CreateTabDialog_title__1XXMF"}},58:function(t,e,n){t.exports={side_bar:"SideBar_side_bar__1KyUU",show:"SideBar_show__Yqbgx",open:"SideBar_open__1-wSF"}},59:function(t,e,n){t.exports={list:"todoList_list__3Q0Ds",item_content:"todoList_item_content__1tEVm",item_secondary_icon:"todoList_item_secondary_icon__3AG4b"}},60:function(t,e,n){t.exports={popover_content:"TitleEditor_popover_content__21Feh",edit_title:"TitleEditor_edit_title__1ZzOu",confirm_button:"TitleEditor_confirm_button__SHRdf"}},65:function(t,e,n){t.exports={add_todo:"TodoDialog_add_todo__B4QSh",input_todo:"TodoDialog_input_todo__2TnTk"}},79:function(t,e,n){t.exports={App:"app_App__13EnN"}},80:function(t,e,n){t.exports={body:"body_body__1jaDL"}},81:function(t,e,n){t.exports={add_button:"AddTodoButton_add_button__vLuI4"}},95:function(t,e,n){}},[[104,1,2]]]);
//# sourceMappingURL=main.f224d07d.chunk.js.map