(this["webpackJsonpreact-timer"]=this["webpackJsonpreact-timer"]||[]).push([[0],{14:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(3),u=n.n(c),l=(n(14),n(2)),o={increment:function(e){return{type:"timer/increment",payload:{value:e}}},decrement:function(e){return{type:"timer/decrement",payload:{value:e}}},changeStep:function(e){return{type:"timer/changeStep",payload:{step:Number(e)}}}},i={onIncrement:o.increment,onDecrement:o.decrement},m=Object(l.b)((function(e){return{value:e.timer.value,step:e.timer.step}}),i)((function(e){var t=e.value,n=e.step,r=e.onIncrement,c=e.onDecrement;return a.a.createElement("div",{className:"TimerContainer"},a.a.createElement("button",{type:"button",onClick:function(){return c(n)},className:"Btn"},"\u2212"),a.a.createElement("div",{className:"TimerValue"},t," minutes"),a.a.createElement("button",{type:"button",className:"Btn",onClick:function(){return r(n)}},"+"))})),s={onChangeStep:o.changeStep},p=Object(l.b)((function(e){return{step:e.timer.step}}),s)((function(e){var t=e.options,n=e.step,r=e.onChangeStep;return a.a.createElement("label",{className:"Label"},"Select step:",a.a.createElement("select",{className:"Select",value:n,onChange:function(e){return r(e.target.value)}},t.map((function(e){return a.a.createElement("option",{key:e,value:e},e)}))))})),v=[5,10,15,20,25,30],d=function(){return a.a.createElement("div",null,a.a.createElement(m,null),a.a.createElement(p,{options:v}))},E=n(1),f=Object(E.b)({value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case"timer/increment":return e+r.value;case"timer/decrement":return e-r.value<0?e:e-r.value;default:return e}},step:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case"timer/changeStep":return r.step;default:return e}}}),b=Object(E.b)({timer:f}),h=Object(E.c)(b,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());console.log(h),u.a.render(a.a.createElement(l.a,{store:h},a.a.createElement(d,null)),document.getElementById("root"))},9:function(e,t,n){e.exports=n(21)}},[[9,1,2]]]);
//# sourceMappingURL=main.1fa99db4.chunk.js.map