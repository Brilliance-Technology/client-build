(this.webpackJsonpstudentmanagement=this.webpackJsonpstudentmanagement||[]).push([[0],{23:function(e,t,a){},67:function(e,t,a){},72:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),s=a.n(c),i=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,78)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))},l=a(5),o=a(14),d=a(3),j=a(4),b=a.n(j),m=a(6),u=a(7),p=a(2),h=a(23),O=a.n(h),x=a(24),g=a(77),f=a(16),N=a.n(f),y=(a(65),a(67),a(1)),v=function(e){var t,a=Object(n.useState)([]),r=Object(p.a)(a,2),c=r[0],s=r[1],i=Object(n.useState)(!1),l=Object(p.a)(i,2),d=l[0],j=l[1],u=Object(n.useState)(!1),h=Object(p.a)(u,2),O=h[0],x=h[1],f=Object(n.useRef)(""),v=Object(n.useState)(""),S=Object(p.a)(v,2),F=S[0],w=S[1],E=Object(n.useState)([]),C=Object(p.a)(E,2),k=C[0],P=C[1],_=Object(n.useState)({}),L=Object(p.a)(_,2),M=(L[0],L[1],function(){var e=Object(m.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t),!window.confirm("Are you sure to delete ?")){e.next=7;break}return e.next=5,N.a.delete("https://student-management01.herokuapp.com/student/delete/".concat(t)).then((function(e){e?(console.log(e),j(!0)):x(!0)}));case 5:e.next=8;break;case 7:x(!0);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());Object(n.useEffect)(Object(m.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("https://student-management01.herokuapp.com/student/getAll").then((function(e){var t=e.data.res;s(t)}));case 2:case"end":return e.stop()}}),e)}))),[c]);var R=function(e){if(w(e),""!==e){var t=c.filter((function(t){return Object.values(t).join("").toLowerCase().includes(e.toLowerCase())}));P(t)}else P(c)};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("input",{style:{height:"50px",width:"400px",borderRadius:"0%,30%,0%,30%",border:"6px solid lightgrey",boxShadow:"0px 2px 6px grey",marginLeft:"130px"},ref:f,type:"text",placeholder:"Search by Name,Percentage",value:F,onChange:function(){R(f.current.value)}}),Object(y.jsxs)("div",{children:[Object(y.jsx)(g.a,{show:d,dismissable:!0,variant:"success",children:"Deleted SuccessFully"}),Object(y.jsx)(g.a,{show:O,dismissable:!0,variant:"danger",children:"somethiing went wrong"})]}),Object(y.jsxs)("table",{className:"table",children:[Object(y.jsx)("thead",{className:"thead-dark",children:Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{children:"S.No."}),Object(y.jsx)("th",{scope:"col",children:"Name"}),Object(y.jsx)("th",{scope:"col",children:"Last Name"}),Object(y.jsx)("th",{scope:"col",children:"Date Of Birth"}),Object(y.jsx)("th",{scope:"col",children:"Percentage"}),Object(y.jsx)("th",{scope:"col",children:"Profile Picture"}),Object(y.jsx)("th",{scope:"col",children:"Actions"})]})}),Object(y.jsx)("tbody",{children:k.length>1||c.length>1?null===(t=F.length<1?c:k)||void 0===t?void 0:t.map((function(e,t){return Object(y.jsxs)("tr",{children:[Object(y.jsx)("th",{className:"snumber",scope:"row",children:e.id}),Object(y.jsx)("td",{scope:"col",children:e.firstname}),Object(y.jsx)("td",{scope:"col",children:e.lastname}),Object(y.jsx)("td",{scope:"col",children:e.dob}),Object(y.jsx)("td",{scope:"col",children:e.percentage}),Object(y.jsx)("td",{scope:"col",children:Object(y.jsx)("img",{src:"http://"+e.profile_picture,alt:"profilePic",style:{height:"100px",width:"100px",borderRadius:"50%",border:"6px solid lightgrey",boxShadow:"0px 2px 6px grey"}})}),Object(y.jsxs)("td",{children:[Object(y.jsx)(o.b,{to:"/edit/".concat(e._id),children:Object(y.jsx)("button",{className:"edit_button",id:e.id,children:Object(y.jsx)("i",{class:"far fa-edit"})})}),Object(y.jsx)("button",{className:"delete_button",onClick:function(){return M(e._id)},children:Object(y.jsx)("i",{class:"far fa-trash-alt"})})]})]},t)})):"No orders Found"})]})]})},S=a(76),F=function(){var e=Object(n.useState)(null),t=Object(p.a)(e,2),a=(t[0],t[1],Object(d.f)(),Object(n.useState)()),r=Object(p.a)(a,2),c=r[0],s=(r[1],Object(n.useRef)(""),Object(n.useState)("")),i=Object(p.a)(s,2),l=(i[0],i[1],Object(n.useState)([])),j=Object(p.a)(l,2),b=(j[0],j[1],Object(n.useState)({})),m=Object(p.a)(b,2);m[0],m[1];return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(y.jsx)("div",{className:"col-10",children:Object(y.jsx)("a",{className:"navbar-brand font",href:"/",children:"Student Management System"})}),Object(y.jsxs)("div",{className:"col-2",children:[Object(y.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(y.jsx)("span",{className:"navbar-toggler-icon"})}),Object(y.jsx)(S.a,{children:Object(y.jsx)("button",{style:{backgroundColor:"none",boxShadow:"2px 2px 7px grey",border:"none",width:"150px",color:"darkgreen",borderRadius:"20px",height:"40px"},children:Object(y.jsx)(o.b,{className:"nav-link active","aria-current":"page",to:"/register",children:"+ Create"})})})]})]}),Object(y.jsxs)("div",{className:"table_container",children:[Object(y.jsx)("h5",{style:{textAlign:"center"},children:"User Information"}),Object(y.jsx)(v,{data:c})]})]})},w=function(){var e=Object(x.a)(),t=(e.register,e.handleSubmit,e.formState.errors),a=Object(d.f)(),r=Object(n.useState)(),c=Object(p.a)(r,2),s=(c[0],c[1],Object(n.useState)({firstname:"",lastname:"",dob:"",percentage:""})),i=Object(p.a)(s,2),j=i[0],h=i[1],f=Object(n.useState)({profile_picture:""}),v=Object(p.a)(f,2),S=v[0],F=v[1],w=Object(n.useState)(!1),E=Object(p.a)(w,2),C=E[0],k=E[1],P=Object(n.useState)(!1),_=Object(p.a)(P,2),L=_[0],M=_[1],R=function(e){e.preventDefault(),h(Object(l.a)(Object(l.a)({},j),{},Object(u.a)({},e.target.name,e.target.value))),console.log(j)},D=(j.firstname,j.lastname,j.dob,j.percentage,S.profile_picture,function(){var e=Object(m.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("firstname",j.firstname),n.append("lastname",j.lastname),n.append("dob",j.dob),n.append("percentage",j.percentage),n.append("profile_picture",S.profile_picture),t.preventDefault(),e.next=9,N.a.post("https://student-management01.herokuapp.com/student/create",n).then((function(e){e?(k(!0),a("/")):(console.log(e),M(!0))}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return Object(y.jsx)("div",{className:"".concat(O.a.container," container-fluid d-flex align-items-center justify-content-center"),children:Object(y.jsxs)("div",{className:"registrationFormContainer",children:[Object(y.jsx)(g.a,{show:C,variant:"success",children:"Registerd SuccessFully"}),Object(y.jsx)(g.a,{show:L,variant:"danger",children:"Registeration Failed"}),Object(y.jsxs)("fieldset",{className:" p-3",children:[Object(y.jsx)("legend",{className:"registrationFormLegend text-center",children:"Registration Form"}),Object(y.jsxs)("form",{onSubmit:D,noValidate:!0,autoComplete:"off",children:[Object(y.jsxs)("div",{className:"form-group",children:[Object(y.jsx)("label",{htmlFor:"inputForName",children:"Student Name"}),Object(y.jsx)("span",{className:"mandatory",children:"*"}),Object(y.jsx)("input",{name:"firstname",type:"text",className:"form-control","aria-describedby":"Enter your name",placeholder:"Enter your name",value:j.firstname,onChange:R}),t.name&&Object(y.jsx)("span",{className:"errorMessage mandatory",children:t.firstname.message})]}),Object(y.jsxs)("div",{className:"form-group",children:[Object(y.jsx)("label",{htmlFor:"inputForName",children:"Student Lastname"}),Object(y.jsx)("span",{className:"mandatory",children:"*"}),Object(y.jsx)("input",{name:"lastname",type:"text",className:"form-control","aria-describedby":"Enter your Lastname",placeholder:"Enter your Lastname",value:j.lastname,onChange:R}),t.lastname&&Object(y.jsx)("span",{className:"errorMessage mandatory",children:t.lastname.message})]}),Object(y.jsxs)("div",{className:"form-group ",children:[Object(y.jsx)("label",{htmlFor:"inputForEmail",children:"Enter Date of Birth"}),Object(y.jsx)("span",{className:"mandatory",children:"*"}),Object(y.jsx)("input",{id:"inputFordob",name:"dob",type:"date",className:"form-control","aria-describedby":"Enter date of birth",placeholder:"Enter date of birth",value:j.dob,onChange:R}),t.dob&&Object(y.jsx)("span",{className:"errorMessage mandatory",children:t.dob.message})]}),Object(y.jsxs)("div",{className:"form-group ",children:[Object(y.jsx)("label",{htmlFor:"inputForEmail",children:"Enter Percentage"}),Object(y.jsx)("span",{className:"mandatory",children:"*"}),Object(y.jsx)("input",{id:"inputForPercentage",name:"percentage",type:"text",className:"form-control","aria-describedby":"Enter Percentage",placeholder:"Enter Percentage ",value:j.percentage,onChange:R}),t.percentage&&Object(y.jsx)("span",{className:"errorMessage mandatory",children:t.email.message})]}),Object(y.jsxs)("div",{className:"form-group",children:[Object(y.jsx)("label",{htmlFor:"inputForPassword",children:"Uplode Profile Image"}),Object(y.jsx)("span",{className:"mandatory",children:"*"}),Object(y.jsx)("input",{type:"file",name:"profile_picture",className:"form-control",placeholder:"Enter Profile Picture",accept:"image/*",defaultValue:S.profile_picture.name,onChange:function(e){F({profile_picture:e.target.files[0]})}}),t.profile_picture&&Object(y.jsx)("span",{className:"errorMessage mandatory",children:t.profile_picture.message})]}),Object(y.jsxs)("div",{className:"d-flex pt-4 align-items-center justify-content-center",children:[Object(y.jsx)("button",{type:"submit",className:"register_btn",children:"Submit"}),Object(y.jsx)("button",{className:"login-btn",children:Object(y.jsx)(o.b,{to:"/",children:"Back"})})]})]})]})]})})},E=function(){return Object(y.jsx)("div",{children:"404 Not FOund"})},C=function(){var e=Object(d.g)([]).id,t=Object(n.useState)(""),a=Object(p.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(""),i=Object(p.a)(s,2),l=i[0],j=i[1],h=Object(n.useState)(!1),f=Object(p.a)(h,2),v=(f[0],f[1],Object(d.f)()),S=Object(n.useState)(!1),F=Object(p.a)(S,2),w=F[0],E=F[1],C=Object(n.useState)(!1),k=Object(p.a)(C,2),P=k[0],_=k[1],L=function(e){e.preventDefault(),j(Object(u.a)({},e.target.name,e.target.value))},M={firstname:l.firstname,lastname:l.lastname,dob:l.dob,percentage:l.percentage},R=Object(x.a)(),D=(R.register,R.handleSubmit),B=R.formState.errors,V=Object(n.useState)(),I=Object(p.a)(V,2),T=I[0],A=I[1],U=function(){var t=Object(m.a)(b.a.mark((function t(a,n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(M),t.next=3,N.a.put("https://student-management01.herokuapp.com/student/edit/".concat(e),M).then((function(e){e?(E(!0),v("/")):_(!0)}));case 3:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}();return Object(n.useEffect)(Object(m.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.a.get("https://student-management01.herokuapp.com/student/get/".concat(e)).then((function(e){var t=e.data.res;console.log(t),c(t)}));case 2:case"end":return t.stop()}}),t)}))),[r]),Object(y.jsxs)("div",{className:"".concat(O.a.container," container-fluid d-flex align-items-center justify-content-center"),children:[Object(y.jsx)(g.a,{show:w,variant:"success",children:"Registerd SuccessFully"}),Object(y.jsx)(g.a,{show:P,variant:"danger",children:"Registeration Failed"}),Object(y.jsxs)("div",{className:"registrationFormContainer",children:[T&&Object(y.jsxs)("div",{className:"alert fade show d-flex ".concat(T.type),role:"alert",children:[T.data,Object(y.jsx)("span",{"aria-hidden":"true",className:"ml-auto cursor-pointer",onClick:function(){return A(null)},children:"\xd7"})]}),Object(y.jsxs)("fieldset",{className:" p-3",children:[Object(y.jsx)("legend",{className:"registrationFormLegend text-center",children:"Edit User Details"}),Object(y.jsxs)("form",{onSubmit:D(U),noValidate:!0,autoComplete:"off",children:[Object(y.jsxs)("div",{className:"form-group",children:[Object(y.jsx)("label",{htmlFor:"inputForName",children:"Student Name"}),Object(y.jsx)("span",{className:"mandatory",children:"*"}),Object(y.jsx)("input",{name:"firstname",type:"text",className:"form-control","aria-describedby":"Enter your name",placeholder:"Enter your name",defaultValue:r.firstname,onChange:L})]}),Object(y.jsxs)("div",{className:"form-group",children:[Object(y.jsx)("label",{htmlFor:"inputForName",children:"Student Lastname"}),Object(y.jsx)("span",{className:"mandatory",children:"*"}),Object(y.jsx)("input",{name:"lastname",type:"text",className:"form-control","aria-describedby":"Enter your Lastname",placeholder:"Enter your Lastname",defaultValue:r.lastname,onChange:L}),B.lastname&&Object(y.jsx)("span",{className:"errorMessage mandatory",children:B.lastname.message})]}),Object(y.jsxs)("div",{className:"form-group ",children:[Object(y.jsx)("label",{htmlFor:"inputForEmail",children:"Enter Date of Birth"}),Object(y.jsx)("span",{className:"mandatory",children:"*"}),Object(y.jsx)("input",{id:"inputFordob",name:"dob",type:"date",className:"form-control","aria-describedby":"Enter date of birth",placeholder:"Enter date of birth",defaultValue:r.dob,onChange:L}),B.dob&&Object(y.jsx)("span",{className:"errorMessage mandatory",children:B.dob.message})]}),Object(y.jsxs)("div",{className:"form-group ",children:[Object(y.jsx)("label",{htmlFor:"inputForEmail",children:"Enter Percentage"}),Object(y.jsx)("span",{className:"mandatory",children:"*"}),Object(y.jsx)("input",{id:"inputForPercentage",name:"percentage",type:"text",className:"form-control","aria-describedby":"Enter Percentage",placeholder:"Enter Percentage ",defaultValue:r.percentage,onChange:L}),B.percentage&&Object(y.jsx)("span",{className:"errorMessage mandatory",children:B.email.message})]}),Object(y.jsxs)("div",{className:"form-group",children:[Object(y.jsx)("label",{htmlFor:"inputForPassword",children:"Uplode Profile Image"}),Object(y.jsx)("span",{className:"mandatory",children:"*"}),Object(y.jsx)("img",{src:"http://"+r.profile_picture,alt:"profilePic",style:{height:"100px",width:"100px",borderRadius:"50%",border:"6px solid lightgrey",boxShadow:"0px 2px 6px grey"}}),B.profile_picture&&Object(y.jsx)("span",{className:"errorMessage mandatory",children:B.profile_picture.message})]}),Object(y.jsxs)("div",{className:"d-flex pt-4 align-items-center justify-content-center",children:[Object(y.jsx)("button",{type:"submit",className:"register_btn",children:"Submit"}),Object(y.jsx)("button",{className:"login-btn",children:Object(y.jsx)(o.b,{to:"/",children:"Back"})})]})]})]})]})]})},k=function(e){return Object(y.jsx)(o.a,Object(l.a)(Object(l.a)({},e),{},{children:Object(y.jsxs)(d.c,{children:[Object(y.jsx)(d.a,{path:"/register",element:Object(y.jsx)(w,{})}),Object(y.jsx)(d.a,{exact:!0,path:"/",element:Object(y.jsx)(F,{})}),Object(y.jsx)(d.a,{path:"/edit/:id",element:Object(y.jsx)(C,{})}),Object(y.jsx)(d.a,{path:"*",element:Object(y.jsx)(E,{})})]})}))};a(72),a(73);s.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(k,{})}),document.getElementById("root")),i()}},[[74,1,2]]]);
//# sourceMappingURL=main.070132b5.chunk.js.map