(this.webpackJsonpfitnesstrackr=this.webpackJsonpfitnesstrackr||[]).push([[0],{61:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r(30),a=r.n(c),s=r(8),i=r(14),o=r(4),u=r(2),l=r.n(u),j=r(3),b=r(7),d=r.n(b),p="https://guarded-sands-24074.herokuapp.com/api";function h(e){localStorage.setItem("currentUser",JSON.stringify(e.user)),localStorage.setItem("currentUsername",JSON.stringify(e.user.username)),localStorage.setItem("currentUserID",JSON.stringify(e.user.id)),localStorage.setItem("currentToken",JSON.stringify(e.token))}function O(){localStorage.removeItem("currentUser"),localStorage.removeItem("currentUsername"),localStorage.removeItem("currentUserID"),localStorage.removeItem("currentToken")}function x(){return JSON.parse(localStorage.getItem("currentUsername"))}function m(){return JSON.parse(localStorage.getItem("currentToken"))}function v(e,t){return f.apply(this,arguments)}function f(){return(f=Object(j.a)(l.a.mark((function e(t,r){var n,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(p,"/users/register"),e.prev=1,e.next=4,d.a.post("".concat(n),{username:t,password:r});case 4:return c=e.sent,h(a=c.data),e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function w(e,t){return g.apply(this,arguments)}function g(){return(g=Object(j.a)(l.a.mark((function e(t,r){var n,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(p,"/users/login"),e.prev=1,e.next=4,d.a.post("".concat(n),{username:t,password:r});case 4:return c=e.sent,h(a=c.data),e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function y(){return k.apply(this,arguments)}function k(){return(k=Object(j.a)(l.a.mark((function e(){var t,r,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(p,"/activities"),e.prev=1,e.next=4,d.a.get("".concat(t));case 4:return r=e.sent,n=r.data,e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function N(e,t){return R.apply(this,arguments)}function R(){return(R=Object(j.a)(l.a.mark((function e(t,r){var n,c,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(p,"/activities"),e.prev=1,e.next=4,d.a.post("".concat(n),{name:t,description:r},{headers:{Authorization:"Bearer "+m()}});case 4:return c=e.sent,a=c.data,e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function S(){return(S=Object(j.a)(l.a.mark((function e(){var t,r,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(p,"/routines"),e.prev=1,e.next=4,d.a.get("".concat(t));case 4:return r=e.sent,n=r.data,e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function I(e){return C.apply(this,arguments)}function C(){return(C=Object(j.a)(l.a.mark((function e(t){var r,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(p,"/users/").concat(t,"/routines"),e.prev=1,e.next=4,d.a.get("".concat(r),{headers:{Authorization:"Bearer "+m()}});case 4:return n=e.sent,c=n.data,e.abrupt("return",c);case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function P(e,t,r){return U.apply(this,arguments)}function U(){return(U=Object(j.a)(l.a.mark((function e(t,r,n){var c,a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(p,"/routines"),e.prev=1,e.next=4,d.a.post("".concat(c),{name:t,goal:r,isPublic:n},{headers:{Authorization:"Bearer "+m()}});case 4:return a=e.sent,s=a.data,e.abrupt("return",s);case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function A(e,t,r,n){return D.apply(this,arguments)}function D(){return(D=Object(j.a)(l.a.mark((function e(t,r,n,c){var a,s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(p,"/routines/").concat(t),e.prev=1,e.next=4,d.a.patch("".concat(a),{id:t,name:r,goal:n,isPublic:c},{headers:{Authorization:"Bearer "+m()}});case 4:return s=e.sent,i=s.data,e.abrupt("return",i);case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function F(e){return E.apply(this,arguments)}function E(){return(E=Object(j.a)(l.a.mark((function e(t){var r,n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(p,"/routines/").concat(t),e.prev=1,e.next=4,d.a.delete("".concat(r),{headers:{Authorization:"Bearer "+m()}});case 4:return n=e.sent,c=n.data,e.abrupt("return",c);case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}var B=r(0),W=function(e){var t=e.setUser,r=e.user;return Object(B.jsxs)("header",{id:"title",children:[Object(B.jsx)("h1",{children:"YourFitnessTracker"}),Object(B.jsx)(J,{user:r,setUser:t})]})},J=function(e){var t=e.user,r=e.setUser,n=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,O();case 4:e.sent,r(null),window.location.assign("/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(B.jsx)("div",{id:"NavBar",children:Object(B.jsxs)("div",{className:"menu",children:[Object(B.jsx)(i.b,{to:"/#",className:"button",children:"Home"}),Object(B.jsx)(i.b,{to:"/routines",className:"button",children:"Check out the Routines "}),Object(B.jsx)(i.b,{to:"/activities",className:"button",children:"Activities Browser "}),t?Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)(i.b,{to:"/myroutines",className:"button",children:"Work on my Routines "}),Object(B.jsxs)("h3",{children:["Welcome, ",x(),"!"]}),Object(B.jsx)("form",{id:"LogOutNav",onSubmit:n,children:Object(B.jsx)("button",{className:"button",type:"Submit",children:"Log Out"})})]}):Object(B.jsx)("button",{className:"button",children:"Login"})]})})},M=function(e){var t=e.routines;return Object(B.jsxs)("div",{className:"routines",children:[Object(B.jsx)("h1",{children:"Routines"}),t.map((function(e){var t=e.id,r=(e.creatorId,e.creatorName),n=e.goal,c=(e.isPublic,e.name),a=e.activities;return Object(B.jsxs)("div",{className:"RoutineCard card",children:[Object(B.jsxs)("h3",{children:["Routine: ",c]}),Object(B.jsxs)("em",{children:["Created by ",r]}),Object(B.jsx)("em",{children:"Goal: "}),n,Object(B.jsx)("br",{}),a.length?Object(B.jsxs)("table",{className:"routineActivityList",children:[Object(B.jsx)("thead",{children:Object(B.jsxs)("tr",{children:[Object(B.jsx)("th",{children:"Name"}),Object(B.jsx)("th",{children:"Description"}),Object(B.jsx)("th",{children:"Count"}),Object(B.jsx)("th",{children:"Duration"})]})}),Object(B.jsx)("tbody",{children:a.map((function(e){var t=e.id,r=e.name,n=e.description,c=e.count,a=e.duration;return Object(B.jsxs)("tr",{children:[Object(B.jsx)("td",{children:r}),Object(B.jsx)("td",{children:n}),Object(B.jsxs)("td",{children:[c,"x"]}),Object(B.jsx)("td",{children:a})]},t)}))})]}):""]},t)}))]})},G=function(e){var t=e.activities,r=e.setActivities;return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsxs)("div",{className:"activities",children:[Object(B.jsx)("h1",{children:"Activities"}),t.map((function(e){var t=e.id,r=e.name,n=e.description;return Object(B.jsxs)("div",{className:"ActivityCard card",children:[Object(B.jsxs)("h3",{children:["Activity: ",r]}),Object(B.jsxs)("h4",{children:["Description: ",n]})]},t)}))]}),Object(B.jsx)(Y,{activities:t,setActivities:r})]})},L=r(5),q=function(e){var t=e.myroutines,r=e.setMyRoutines,n=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,e.prev=1,e.next=4,F(n);case 4:return e.sent,e.next=7,I(x());case 7:c=e.sent,r(c),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0),alert("Error Creating Routine",e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(B.jsx)(B.Fragment,{children:Object(B.jsxs)("div",{className:"Routines",children:[Object(B.jsx)("h1",{children:"My Routines"}),Object(B.jsx)(H,{myroutines:t,setMyRoutines:r}),t.map((function(e){var t,c=e.id,a=(e.creatorId,e.creatorName),s=e.goal,i=e.isPublic,o=void 0===i||i,u=e.name,l=e.activities;return Object(B.jsxs)("div",{className:"RoutineCard card",children:[Object(B.jsxs)("h3",{children:["Routine: ",u]}),Object(B.jsxs)("em",{children:["Created by ",a]}),Object(B.jsx)("em",{children:"Goal: "}),s,Object(B.jsx)("br",{}),l.length?Object(B.jsxs)("table",{className:"routineActivityList",children:[Object(B.jsx)("thead",{children:Object(B.jsxs)("tr",{children:[Object(B.jsx)("th",{children:"Name"}),Object(B.jsx)("th",{children:"Description"}),Object(B.jsx)("th",{children:"Count"}),Object(B.jsx)("th",{children:"Duration"})]})}),Object(B.jsx)("tbody",{children:l.map((function(e){var t=e.id,r=e.name,n=e.description,c=e.count,a=e.duration;return Object(B.jsxs)("tr",{children:[Object(B.jsx)("td",{children:r}),Object(B.jsx)("td",{children:n}),Object(B.jsxs)("td",{children:[c,"x"]}),Object(B.jsx)("td",{children:a})]},t)}))})]}):"",Object(B.jsx)(K,(t={setMyRoutines:r,id:c},Object(L.a)(t,"setMyRoutines",r),Object(L.a)(t,"name",u),Object(L.a)(t,"goal",s),Object(L.a)(t,"isPublic",o),t)),Object(B.jsx)("button",{onClick:function(){return n({id:c})},children:"Delete"},"delete".concat(c))]},c)}))]})})},z=r(9),T=function(e){var t=e.setUser,r=e.user,c=Object(n.useState)({username:"",password:""}),a=Object(s.a)(c,2),i=a[0],o=a[1],u=function(e){o(Object(z.a)(Object(z.a)({},i),{},Object(L.a)({},e.target.name,e.target.value)))},b=function(){var e=Object(j.a)(l.a.mark((function e(r){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,w(i.lusername,i.lpassword);case 4:n=e.sent,t(n.user),window.location.assign("/myroutines"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(j.a)(l.a.mark((function e(r){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),e.prev=1,i.rpassword!==i.rpassword2){e.next=10;break}return e.next=5,v(i.rusername,i.rpassword);case 5:n=e.sent,t(n.user),window.location.assign("/myroutines"),e.next=11;break;case 10:console.error("Passwords must match");case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(B.jsx)("div",{id:"UserPage",children:r?"":Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("h3",{children:"Login with an existing account"}),Object(B.jsxs)("form",{onSubmit:b,className:"loginForm",children:[Object(B.jsx)("label",{children:"UserName"}),Object(B.jsx)("input",{name:"lusername",value:i.lusername,onInput:u}),Object(B.jsx)("label",{children:"Password"}),Object(B.jsx)("input",{name:"lpassword",value:i.lpassword,onInput:u,type:"password",autoComplete:"current-password"}),Object(B.jsx)("button",{type:"Submit",children:"Login"})]}),Object(B.jsx)("h3",{children:"Create a new account"}),Object(B.jsxs)("form",{onSubmit:d,className:"loginForm",children:[Object(B.jsx)("label",{children:"UserName"}),Object(B.jsx)("input",{name:"rusername",value:i.rusername,onInput:u}),Object(B.jsx)("label",{children:"Password"}),Object(B.jsx)("input",{name:"rpassword",value:i.rpassword,onInput:u,type:"password",autoComplete:"new-password"}),Object(B.jsx)("label",{children:"Re-Enter Password"}),Object(B.jsx)("input",{name:"rpassword2",value:i.rpassword2,onInput:u,type:"password",autoComplete:"new-password"}),Object(B.jsx)("button",{type:"Submit",children:"Create New User"})]})]})})},H=function(e){var t=e.setMyRoutines,r=Object(n.useState)({isPublic:"true",name:"",goal:""}),c=Object(s.a)(r,2),a=c[0],i=c[1],o=function(e){i(Object(z.a)(Object(z.a)({},a),{},Object(L.a)({},e.target.name,e.target.value)))},u=function(){var e=Object(j.a)(l.a.mark((function e(r){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,P(a.name,a.goal,a.isPublic);case 4:return e.sent,e.next=7,I(x());case 7:n=e.sent,t(n),i({isPublic:"true",name:"",goal:""}),document.getElementById(CreateRoutineWrapperNew).checked=!1,e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("label",{className:"button CreateRoutine success",htmlFor:"CreateRoutineWrapperNew",children:"New Routine..."}),Object(B.jsxs)("div",{className:"modal CreateRoutine card",children:[Object(B.jsx)("input",{id:"CreateRoutineWrapperNew",type:"checkbox"}),Object(B.jsx)("h4",{children:"Please enter the name and goal of your new routine."}),Object(B.jsxs)("form",{htmlFor:"CreateRoutineWrapperNew",className:"card",onSubmit:u,children:[Object(B.jsx)("input",Object(L.a)({type:"checkbox",value:"true",name:"isPublic"},"type","hidden"))," ",Object(B.jsx)("br",{}),Object(B.jsx)("label",{children:"Name:"}),Object(B.jsx)("input",{required:!0,name:"name",value:a.name,onChange:o})," ",Object(B.jsx)("br",{}),Object(B.jsx)("label",{children:"Goal:"}),Object(B.jsx)("input",{required:!0,name:"goal",value:a.goal,onChange:o})," ",Object(B.jsx)("br",{}),Object(B.jsx)("button",{type:"submit",className:"success",children:"Create Routine"})]})]})]})},Y=function(e){var t=e.setActivities,r=Object(n.useState)({name:"",description:""}),c=Object(s.a)(r,2),a=c[0],i=c[1],o=function(e){i(Object(z.a)(Object(z.a)({},a),{},Object(L.a)({},e.target.name,e.target.value)))},u=function(){var e=Object(j.a)(l.a.mark((function e(r){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,N(a.name,a.description);case 4:return e.sent,e.next=7,y();case 7:n=e.sent,t(n),i({name:"",description:""}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(B.jsxs)("div",{id:"CreateActivityForm",children:[Object(B.jsx)("h3",{children:"Please enter the name and description of your new activity."}),Object(B.jsxs)("form",{onSubmit:u,children:[Object(B.jsx)("label",{children:"Name:"}),Object(B.jsx)("input",{required:!0,name:"name",value:a.name,onInput:o})," ",Object(B.jsx)("br",{}),Object(B.jsx)("label",{children:"Description:"}),Object(B.jsx)("input",{required:!0,name:"description",value:a.description,onInput:o})," ",Object(B.jsx)("br",{}),Object(B.jsx)("button",{type:"submit",children:"Create Activity"})]})]})},K=function(e){var t,r=e.setMyRoutines,c=e.id,a=e.name,i=e.goal,o=(e.isPublic,Object(n.useState)({isPublic:"true",name:a,goal:i,id:c})),u=Object(s.a)(o,2),b=u[0],d=u[1],p=function(e){d(Object(z.a)(Object(z.a)({},b),{},Object(L.a)({},e.target.name,e.target.value)))},h=function(){var e=Object(j.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,A(b.id,b.name,b.goal,b.isPublic);case 4:return e.sent,e.next=7,I(x());case 7:n=e.sent,r(n),document.getElementById("EditRoutineWrapper".concat(c)).checked=!1,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("label",{className:"button",htmlFor:"EditRoutineWrapper".concat(c),children:"Edit Routine"}),Object(B.jsxs)("div",{className:"modal",children:[Object(B.jsx)("input",{id:"EditRoutineWrapper".concat(c),type:"checkbox"}),Object(B.jsx)("h4",{children:'If you would like to make a change, update the information and click "Update Routine"'}),Object(B.jsxs)("form",{htmlFor:"EditRoutineWrapper".concat(c),onSubmit:h,children:[Object(B.jsx)("input",(t={type:"checkbox",value:"true",name:"isPublic"},Object(L.a)(t,"type","hidden"),Object(L.a)(t,"defaultChecked",!0),t))," ",Object(B.jsx)("br",{}),Object(B.jsx)("label",{children:"Name:"}),Object(B.jsx)("input",{required:!0,name:"name",value:b.name,onInput:p})," ",Object(B.jsx)("br",{}),Object(B.jsx)("label",{children:"Goal:"}),Object(B.jsx)("input",{required:!0,name:"goal",value:b.goal,onInput:p})," ",Object(B.jsx)("br",{}),Object(B.jsx)("input",{name:"routineId",value:b.id,type:"hidden"}),Object(B.jsx)("button",{type:"submit",children:"Update Routine"})]})]})]})},Q=function(){var e=Object(n.useState)(JSON.parse(localStorage.getItem("currentUser"))),t=Object(s.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)([]),u=Object(s.a)(a,2),l=u[0],j=u[1],b=Object(n.useState)([]),d=Object(s.a)(b,2),p=d[0],h=d[1],O=Object(n.useState)([]),m=Object(s.a)(O,2),v=m[0],f=m[1];return Object(n.useEffect)((function(){(function(){return S.apply(this,arguments)})().then((function(e){j(e)})).catch((function(e){throw"Error Getting all Routines"}),[]),y().then((function(e){f(e)})).catch((function(e){throw"Error Getting all Activities"}),[]),I(x()).then((function(e){h(e)})).catch((function(e){throw"Error Getting my Routines"}),[])}),[]),Object(B.jsx)(B.Fragment,{children:Object(B.jsx)(i.a,{children:Object(B.jsxs)("div",{id:"app",children:[Object(B.jsx)(W,{setUser:c,user:r}),Object(B.jsx)(T,{setUser:c,user:r}),Object(B.jsxs)(o.d,{children:[Object(B.jsx)(o.b,{path:"/routines",children:Object(B.jsx)(M,{routines:l})}),Object(B.jsx)(o.b,{path:"/myroutines",children:Object(B.jsx)(q,{myroutines:p,setMyRoutines:h})}),Object(B.jsx)(o.b,{path:"/activities",children:Object(B.jsx)(G,{activities:v,setActivities:f})}),Object(B.jsx)(o.b,{exact:!0,path:"/",children:Object(B.jsx)("div",{id:"dashboard"})}),Object(B.jsx)(o.a,{to:"/"})]})]})})})};a.a.render(Object(B.jsx)(Q,{}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.1a3d2807.chunk.js.map