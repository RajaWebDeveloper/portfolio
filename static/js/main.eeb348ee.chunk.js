(this.webpackJsonpmyApp=this.webpackJsonpmyApp||[]).push([[1],{57:function(e,t,n){var r={"./ion-action-sheet.entry.js":[82,5],"./ion-alert.entry.js":[83,6],"./ion-app_8.entry.js":[84,7],"./ion-avatar_3.entry.js":[85,17],"./ion-back-button.entry.js":[86,18],"./ion-backdrop.entry.js":[87,43],"./ion-button_2.entry.js":[88,19],"./ion-card_5.entry.js":[89,20],"./ion-checkbox.entry.js":[90,21],"./ion-chip.entry.js":[91,22],"./ion-col_3.entry.js":[92,44],"./ion-datetime_3.entry.js":[93,10],"./ion-fab_3.entry.js":[94,23],"./ion-img.entry.js":[95,45],"./ion-infinite-scroll_2.entry.js":[96,46],"./ion-input.entry.js":[97,24],"./ion-item-option_3.entry.js":[98,25],"./ion-item_8.entry.js":[99,26],"./ion-loading.entry.js":[100,27],"./ion-menu_3.entry.js":[101,28],"./ion-modal.entry.js":[102,8],"./ion-nav_2.entry.js":[103,14],"./ion-popover.entry.js":[104,9],"./ion-progress-bar.entry.js":[105,29],"./ion-radio_2.entry.js":[106,30],"./ion-range.entry.js":[107,31],"./ion-refresher_2.entry.js":[108,11],"./ion-reorder_2.entry.js":[109,16],"./ion-ripple-effect.entry.js":[110,47],"./ion-route_4.entry.js":[111,32],"./ion-searchbar.entry.js":[112,33],"./ion-segment_2.entry.js":[113,34],"./ion-select_3.entry.js":[114,35],"./ion-slide_2.entry.js":[115,48],"./ion-spinner.entry.js":[116,13],"./ion-split-pane.entry.js":[117,49],"./ion-tab-bar_2.entry.js":[118,36],"./ion-tab_2.entry.js":[119,15],"./ion-text.entry.js":[120,37],"./ion-textarea.entry.js":[121,38],"./ion-toast.entry.js":[122,39],"./ion-toggle.entry.js":[123,12],"./ion-virtual-scroll.entry.js":[124,50]};function c(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],c=t[0];return n.e(t[1]).then((function(){return n(c)}))}c.keys=function(){return Object.keys(r)},c.id=57,e.exports=c},59:function(e,t,n){var r={"./ion-icon.entry.js":[125,57]};function c(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],c=t[0];return n.e(t[1]).then((function(){return n(c)}))}c.keys=function(){return Object.keys(r)},c.id=59,e.exports=c},78:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(26),i=n.n(s),o=n(20),j=n(2),a=n(19),l=n(14),d=n(36),b=n(6),h=n.n(b),x=n(13),O=n(0),u=function(){var e=Object(r.useState)(),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)(Object(x.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("./project.json").then((function(e){return e.json()})).then((function(e){c(e)}),(function(e){console.log(e)}));case 2:document.getElementById("slides").options={spaceBetween:40,autoplay:{delay:2e3}};case 4:case"end":return e.stop()}}),e)}))),[]),Object(O.jsxs)(j.C,{pager:"true",id:"slides",children:[Object(O.jsx)(j.B,{children:Object(O.jsx)(j.o,{src:"/portfolio/assets/banner.png",className:"slider"})}),void 0!=n&&n.map((function(e,t){return Object(O.jsx)(j.B,{children:Object(O.jsx)(j.o,{src:"/portfolio"+"/assets/".concat(e.img),className:"slider"})},t)}))]})},m=function(){return Object(O.jsx)(y,{})},p=[{text:"Magnet Multi Operation Pvt ltd, Chennai\t",date:"July 2018 - November 2019",category:{tag:"Junior Developer",color:"rgb(46 148 33)"},work_line:["Cooperate with German customers and providing the best solutions for them.","Complete detailed programming and development tasks for front end, payment option websites and as well as challenging back-end server code","Carry out quality assurance tests to discover errors and optimize usability.","Cooperate with German customers and providing the best solutions for them."]},{text:"Auditics Pvt ltd, Chennai",date:"December 2019 - December 2020",category:{tag:"Web Developer",color:"#e17b77"},work_line:["Developed various websites with the help of Laravel Framework.","Created web automation to download monthly reports with the help of Python & Selenium (Web drive)."]},{text:"Royal Next International Academy, Chennai",date:"May 2021 - Present",category:{tag:"Web Developer - FullStack",color:"#1DA1F2"},work_line:["Developed various websites with the help of Laravel Framework And React js"]}],f=function(e){var t=e.data;return Object(O.jsx)("div",{className:"timeline-item",children:Object(O.jsxs)("div",{className:"timeline-item-content",children:[Object(O.jsx)("span",{className:"tag",style:{background:t.category.color},children:t.category.tag}),Object(O.jsx)("time",{children:t.date}),Object(O.jsx)("p",{children:t.text}),t.work_line.map((function(e,n){return Object(O.jsx)("p",{style:{color:t.category.color},children:e},n)})),Object(O.jsx)("span",{className:"circle"})]})})},y=function(){return p.length>0&&Object(O.jsx)("div",{className:"timeline-container",children:p.map((function(e,t){return Object(O.jsx)(f,{data:e},t)}))})},g=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(j.l,{children:Object(O.jsx)(j.A,{className:"progress",children:Object(O.jsx)(j.i,{"size-lg":"6","size-md":"12","size-sm":"12",size:"12",children:Object(O.jsxs)(j.d,{children:[Object(O.jsxs)(j.f,{children:[Object(O.jsx)(j.g,{}),Object(O.jsx)(j.h,{children:"Skills"})]}),Object(O.jsxs)(j.e,{children:[Object(O.jsxs)(j.r,{children:[Object(O.jsx)(j.s,{children:Object(O.jsx)(j.q,{children:"Html - 80%"})}),Object(O.jsx)(j.x,{value:"0.8"})]}),Object(O.jsxs)(j.r,{children:[Object(O.jsx)(j.s,{children:Object(O.jsx)(j.q,{children:"Css - 70%"})}),Object(O.jsx)(j.x,{value:"0.7"})]}),Object(O.jsxs)(j.r,{children:[Object(O.jsx)(j.s,{children:Object(O.jsx)(j.q,{children:"PHP - 75%"})}),Object(O.jsx)(j.x,{value:"0.75"})]}),Object(O.jsxs)(j.r,{children:[Object(O.jsx)(j.s,{children:Object(O.jsx)(j.q,{children:"Laravel Framework - 75%"})}),Object(O.jsx)(j.x,{value:"0.75"})]}),Object(O.jsxs)(j.r,{children:[Object(O.jsx)(j.s,{children:Object(O.jsx)(j.q,{children:"React JS - 80%"})}),Object(O.jsx)(j.x,{value:"0.8"})]}),Object(O.jsxs)(j.r,{children:[Object(O.jsx)(j.s,{children:Object(O.jsx)(j.q,{children:"Node js & Express js (Api And Seo only) - 80%"})}),Object(O.jsx)(j.x,{value:"0.8"})]})]})]})})})})})},v=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(j.j,{children:[Object(O.jsx)(u,{}),Object(O.jsx)(j.I,{isOpen:!0,message:"Welcome To My Profile",duration:700}),Object(O.jsx)(j.G,{color:"danger",children:Object(O.jsx)("h1",{children:"Let me introduce myself."})}),Object(O.jsx)(j.G,{children:Object(O.jsx)("h1",{children:"specializing in Front end development and Backend development. Experienced with all stages of the development cycle for dynamic web projects. Well-versed in numerous programming languages and Strong background in project management and customer relations."})}),Object(O.jsx)(g,{}),Object(O.jsx)(j.G,{color:"danger",children:Object(O.jsxs)("h1",{children:["More of my credentials.",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Work Experience"]})}),Object(O.jsx)(m,{}),Object(O.jsx)(j.G,{color:"danger",children:Object(O.jsxs)("h1",{children:[Object(O.jsx)("lord-icon",{src:"https://cdn.lordicon.com/wloilxuq.json",trigger:"loop",colors:"primary:#121331,secondary:#08a88a",style:{width:"250px",height:"250px"}}),Object(O.jsx)(j.b,{href:"/works",children:"Click Here To See My Works"}),Object(O.jsx)("lord-icon",{src:"https://cdn.lordicon.com/gqzfzudq.json",trigger:"loop",colors:"primary:#121331,secondary:#08a88a",style:{width:"250px",height:"250px"}})]})})]})})},w=(n(68),n(69),n(70),n(71),n(72),n(73),n(74),n(75),n(76),n(77),n(78),function(){var e=Object(r.useState)(),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(r.useEffect)(Object(x.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("./project.json").then((function(e){return e.json()})).then((function(e){c(e)}),(function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)}))),[]),Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(j.j,{className:"my_work",fullscreen:!0,children:Object(O.jsx)(j.l,{children:Object(O.jsx)(j.A,{children:void 0!=n&&n.map((function(e,t){return Object(O.jsx)(j.i,{"size-lg":"4","size-md":"12","size-sm":"12",size:"12",children:Object(O.jsxs)(j.d,{children:[Object(O.jsx)("img",{src:"/portfolio"+"/assets/".concat(e.img)}),Object(O.jsxs)(j.f,{children:[Object(O.jsx)(j.g,{}),Object(O.jsx)(j.h,{children:e.title})]}),Object(O.jsx)(j.e,{children:Object(O.jsx)(j.b,{href:e.link,target:"_blank",children:"Website Link"})})]})},t)}))})})})})}),k=function(){return Object(O.jsxs)(j.t,{side:"start",contentId:"main",children:[Object(O.jsx)(j.m,{children:Object(O.jsx)(j.J,{color:"light",children:Object(O.jsx)(j.H,{children:Object(O.jsx)("img",{src:"/portfolio/logo.png",style:{width:95}})})})}),Object(O.jsx)(j.j,{children:Object(O.jsxs)(j.r,{children:[Object(O.jsx)(j.v,{"auto-hide":"false",children:Object(O.jsx)(j.p,{button:!0,routerLink:"/",routerDirection:"none",children:Object(O.jsx)(j.q,{children:"Home"})})}),Object(O.jsxs)(j.v,{"auto-hide":"false",children:[Object(O.jsx)(j.p,{button:!0,routerLink:"/works",routerDirection:"none",children:Object(O.jsx)(j.q,{children:"My Work"})}),Object(O.jsx)(j.p,{button:!0,routerLink:"/resume",routerDirection:"none",children:Object(O.jsx)(j.q,{children:"Resume"})})]})]})})]})},_=function(){return Object(O.jsx)(j.j,{fullscreen:!0,children:Object(O.jsx)(j.l,{children:Object(O.jsxs)(j.A,{className:"resume",children:[Object(O.jsx)(j.i,{"size-lg":"3","size-md":"12","size-sm":"12",size:"12",children:Object(O.jsxs)("h1",{children:[Object(O.jsx)("lord-icon",{src:"https://cdn.lordicon.com/puvaffet.json",trigger:"loop",colors:"primary:#121331,secondary:#08a88a",style:{width:"250px",height:"250px"}}),Object(O.jsx)(j.b,{href:"/portfolio/assets/raja.pdf",download:"Raja Chokkarvel",children:"Download CV"})]})}),Object(O.jsx)(j.i,{"size-lg":"9","size-md":"12","size-sm":"12",size:"12",children:Object(O.jsxs)("ion-text",{color:"secondary",children:[Object(O.jsxs)("h1",{children:["* This Application was developed in ",Object(O.jsx)("b",{children:"Ionic React"})]}),Object(O.jsxs)("h1",{children:["* Version ",Object(O.jsx)("b",{children:"1.0.0"})]})]})}),Object(O.jsx)(j.i,{"size-lg":"12","size-md":"12","size-sm":"12",size:"12",children:Object(O.jsx)(g,{})})]})})})},z=n(32),F=n(49),C=(n(79),function(e){var t=c.a.useState({matches:window.innerWidth>768}),n=Object(o.a)(t,2),s=n[0],i=n[1];return Object(r.useEffect)((function(){var e=window.matchMedia("(min-width: 768px)");return e.addListener(i),function(){return e.removeListener(i)}}),[]),Object(O.jsx)("div",{children:s&&!s.matches?Object(O.jsx)(j.u,{}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(j.b,{routerLink:"/",children:"Home "}),Object(O.jsx)(j.b,{routerLink:"/works",children:"My Work"}),Object(O.jsx)(j.b,{routerLink:"/resume",children:"Resume"})]})})}),D=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(j.k,{children:Object(O.jsx)(j.J,{children:Object(O.jsx)(j.H,{style:{textAlign:"center"},children:"Copyright \xa9 2021, Raja Web Developer"})})})})},L=function(e){var t=e.children;return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(j.w,{children:[Object(O.jsx)(j.m,{children:Object(O.jsxs)(j.J,{children:[Object(O.jsx)(j.H,{children:Object(O.jsx)("img",{src:"/portfolio/logo.png",style:{width:95}})}),Object(O.jsx)(j.c,{slot:"end",children:Object(O.jsx)(C,{})})]})}),t,Object(O.jsx)(D,{})]})})},N=["component"],q=function(e){var t=e.component,n=Object(F.a)(e,N);return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(a.b,Object(z.a)(Object(z.a)({},n),{},{render:function(e){return Object(O.jsx)(L,{children:Object(O.jsx)(t,Object(z.a)({},e))})}}))})},E=function(){return Object(O.jsx)(j.a,{children:Object(O.jsxs)(d.a,{children:[Object(O.jsx)(k,{}),Object(O.jsxs)(j.z,{id:"main",children:[Object(O.jsx)(q,{path:"/home",component:v,exact:!0}),Object(O.jsx)(q,{path:"/works",component:w,exact:!0}),Object(O.jsx)(q,{path:"/resume",component:_,exact:!0}),Object(O.jsx)(a.a,{to:"/home"})]})]})})},W=function(){return Object(O.jsx)(j.a,{children:Object(O.jsx)(d.a,{children:Object(O.jsxs)(j.F,{children:[Object(O.jsxs)(j.z,{children:[Object(O.jsx)(a.b,{path:"/:tab(home)",component:v,exact:!0}),Object(O.jsx)(a.b,{path:"/:tab(works)",component:w,exact:!0}),Object(O.jsx)(a.b,{path:"/:tab(resume)",component:_}),Object(O.jsx)(a.a,{to:"/home"})]}),Object(O.jsxs)(j.D,{slot:"bottom",children:[Object(O.jsxs)(j.E,{tab:"home",href:"/home",children:[Object(O.jsx)(j.n,{icon:l.i}),Object(O.jsx)(j.q,{children:"Home"})]}),Object(O.jsxs)(j.E,{tab:"works",href:"/works",children:[Object(O.jsx)(j.n,{icon:l.j}),Object(O.jsx)(j.q,{children:"My Work"})]}),Object(O.jsxs)(j.E,{tab:"resume",href:"/resume",children:[Object(O.jsx)(j.n,{icon:l.b}),Object(O.jsx)(j.q,{children:"Resume"})]})]})]})})})},M=function(){var e=c.a.useState({matches:"desktop"===Object(j.S)()[0]}),t=Object(o.a)(e,2),n=t[0],s=t[1];return Object(r.useEffect)((function(){var e=window.matchMedia("(min-width: 1024px)");return e.addListener(s),function(){return e.removeListener(s)}}),[]),Object(O.jsx)(O.Fragment,{children:n&&!0===n.matches?Object(O.jsx)(E,{}):Object(O.jsx)(W,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=function(e){e&&e instanceof Function&&n.e(58).then(n.bind(null,142)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),s(e),i(e)}))};i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(M,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),S()}},[[80,3,4]]]);
//# sourceMappingURL=main.eeb348ee.chunk.js.map