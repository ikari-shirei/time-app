(this["webpackJsonptime-app"]=this["webpackJsonptime-app"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(6),a=c.n(s),r=c(2),m=c(3),j=c.n(m),o=(c(13),c(0));var d=function(){var e=Object(n.useState)(j()().format("HH:mm:ss")),t=Object(r.a)(e,2),c=t[0],i=t[1];return Object(n.useEffect)((function(){setInterval((function(){i(j()().format("HH:mm:ss"))}),1e3)}),[]),Object(o.jsxs)("div",{className:"currentTime",children:[Object(o.jsx)("div",{className:"todays-date",children:Object(o.jsx)("h2",{children:j()().format("DD/MM/YYYY")})}),Object(o.jsx)("div",{className:"current-time-dashboard",children:Object(o.jsx)("h1",{children:c})})]})},l=c(5);c(15),c(16);var u=function(e){var t=e.name,c=e.children,n=e.onClick,i="primary"===t?"primaryButton":"secondaryButton";return Object(o.jsx)("button",{onClick:n,className:"".concat(i," button"),children:c})};var b=function(e){var t=e.selectedTime,c=e.setSelectedTime,i=e.setIsStarted,s=Object(n.useState)([{min:10,name:"10 Min",selected:!0},{min:20,name:"20 Min",selected:!1},{min:30,name:"30 Min",selected:!1},{min:40,name:"40 Min",selected:!1}]),a=Object(r.a)(s,2),m=a[0],j=a[1],d=function(e){c(e),function(e){var t=m.map((function(e){return Object(l.a)(Object(l.a)({},e),{},{selected:!1})})),c=t.find((function(t){return t.min===e}));c.selected=!0,t=t.map((function(e){return e.min===c.min?c:e})),j(t)}(e)};return Object(o.jsxs)("div",{className:"timeOptions",children:[Object(o.jsx)("h3",{children:"Select Time"}),Object(o.jsx)("div",{className:"time-options-container",children:m.map((function(e){return Object(o.jsx)("div",{className:"".concat(!0===e.selected?"active":""," time-options-cell"),children:Object(o.jsx)("button",{onClick:function(){return d(e.min)},children:e.name})})}))}),Object(o.jsx)("div",{className:"start-button-container",children:Object(o.jsx)(u,{name:"primary",selectedTime:t,onClick:function(){i(!0)},children:"Start"})})]})},O=(c(17),c(7)),f=c.p+"static/media/alert-evangelion.d675b919.mp3";var h=function(e){var t=e.selectedTime,c=e.setSelectedTime,i=e.setIsStarted,s=Object(n.useState)(j()().format("HH:mm:ss")),a=Object(r.a)(s,2),m=a[0],d=a[1],l=Object(n.useState)({min:t,sec:0}),b=Object(r.a)(l,2),h=b[0],v=b[1],x=Object(n.useState)(!1),p=Object(r.a)(x,2),S=p[0],k=p[1],N=Object(n.useState)(!1),T=Object(r.a)(N,2),y=T[0],C=T[1],H=Object(O.a)(f),I=Object(r.a)(H,2),M=I[0],B=I[1].stop;Object(n.useEffect)((function(){setInterval((function(){d(j()().format("HH:mm:ss"))}),1e3)}),[]),Object(n.useEffect)((function(){0===h.min&&0===h.sec||y||function(){var e=0===h.sec?{min:h.min-1,sec:59}:{min:h.min,sec:h.sec-1};v(e)}()}),[m]),Object(n.useEffect)((function(){0===h.min&&0===h.sec&&(M(),k(!0))}),[h]);var E=function(){i(!1),c(10),B()};return Object(o.jsxs)("div",{className:"meter",children:[Object(o.jsx)("h3",{children:"Time"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"clock-container",children:Object(o.jsxs)("h4",{children:[h.min<=9?"0"+String(h.min):h.min," :"," ",h.sec<=9?"0"+String(h.sec):h.sec]})}),Object(o.jsxs)("div",{className:"buttons-container",children:[S?Object(o.jsx)(u,{name:"primary",onClick:E,children:"Go Back"}):Object(o.jsx)(u,{name:"primary",onClick:function(){C(!y)},children:y?"Continue":"Pause"}),y?Object(o.jsx)(u,{name:"secondary",onClick:E,children:"Go Back"}):""]})]})]})};var v=function(){var e=Object(n.useState)(10),t=Object(r.a)(e,2),c=t[0],i=t[1],s=Object(n.useState)(!1),a=Object(r.a)(s,2),m=a[0],j=a[1];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(d,{}),m?Object(o.jsx)(h,{selectedTime:c,setSelectedTime:i,setIsStarted:j}):Object(o.jsx)(b,{selectedTime:c,setSelectedTime:i,setIsStarted:j})]})};c(18);a.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.8d595951.chunk.js.map