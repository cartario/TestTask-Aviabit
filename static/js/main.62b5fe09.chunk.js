(this.webpackJsonpaviabit=this.webpackJsonpaviabit||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(2),r=a.n(i),c=(a(13),a(14),a(15),function(){return l.a.createElement("header",{className:"header"},l.a.createElement("nav",{className:"nav"},l.a.createElement("div",{className:"nav__logo"},"[Logo]"),l.a.createElement("div",{className:"nav__menu"},"[Menu]")))}),m=a(3),o=a(4),s=a(7),u=a(5);function h(e,t){return Math.floor(e+Math.random()*(t+1-e))}var f,g=function(){return{dateFlight:(e=new Date(2010,0,1),t=new Date,new Date(e.getTime()+Math.random()*(t.getTime()-e.getTime()))),flight:"AB-33".concat(h(10,80)),pinType:"B-757-".concat(h(100,200)),pin:"XXXAK",timeFlight:h(25e3,26e3),timeBlock:h(27e3,28e3),timeNight:h(15e3,16e3),timeBiologicalNight:h(28e3,29e3),timeWork:h(37e3,38e3),type:h(0,1),takeoff:{name:"\u0422\u043e\u043c\u0441\u043a(\u0411\u043e\u0433\u0430\u0448\u0435\u0432\u043e)-".concat(h(1,20)),lat:56.55,long:85.2},landing:{name:"\u041d\u044f\u0447\u0430\u043d\u0433(\u041a\u0430\u043c\u0440\u0430\u043d\u044c \u0418\u043d\u0442\u043b)",lat:11.99805555,long:109.21944444}};var e,t},_=(f=10,new Array(f).fill("").map(g)).sort((function(e,t){return t.dateFlight-e.dateFlight})),d=a(6),v=function(e){var t=e.map((function(e){return e.dateFlight.getFullYear()}));return Object(d.a)(new Set(t))},E=function(e){var t=e.data,a=e.activeYear,n=t.dateFlight,i=t.timeWork,r=t.timeFlight,c=t.timeBlock;return l.a.createElement("ul",{className:"main__card card"},l.a.createElement("li",{className:"card__item"},"\u0412\u0441\u0435 \u0433\u043e\u0434\u0430"===a?n.getFullYear():["\u042f\u041d\u0412","\u0424\u0415\u0412","\u041c\u0410\u0420","\u0410\u041f\u0420","\u041c\u0410\u0419","\u0418\u042e\u041d","\u0418\u042e\u041b","\u0410\u0412\u0413","\u0421\u0415\u041d","\u041e\u041a\u0422","\u041d\u041e\u042f","\u0414\u0415\u041a"][n.getMonth()]),l.a.createElement("li",{className:"card__item"},c),l.a.createElement("li",{className:"card__item"},i),l.a.createElement("li",{className:"card__item"},r))},N=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={value:"\u0412\u0441\u0435 \u0433\u043e\u0434\u0430"},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("main",{className:"main"},l.a.createElement("h1",{className:"main__title"},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043f\u043e \u043d\u0430\u043b\u0435\u0442\u0443 \u043a\u043e\u043c\u0430\u043d\u0434\u0438\u0440\u0430 \u0432\u043e\u0437\u0434\u0443\u0448\u043d\u043e\u0433\u043e \u0441\u0443\u0434\u043d\u0430 \u0437\u0430","\u0412\u0441\u0435 \u0433\u043e\u0434\u0430"===this.state.value?" \u0432\u0441\xeb \u0432\u0440\u0435\u043c\u044f":" ".concat(this.state.value," \u0433\u043e\u0434")),l.a.createElement("div",{className:"main__input-container"},l.a.createElement("input",{className:"main__input",type:"checkbox",id:"checkbox"}),l.a.createElement("label",{className:"main__label",htmlFor:"checkbox"},"\u041f\u043e \u0444\u0430\u043a\u0442\u0443")),l.a.createElement("div",{className:"main__container"},l.a.createElement("select",{value:this.state.value,className:"main__select",onChange:function(t){e.setState({value:t.target.value})}},l.a.createElement("option",null,"\u0412\u0441\u0435 \u0433\u043e\u0434\u0430"),v(_).map((function(e){return l.a.createElement("option",{key:e},e)}))),l.a.createElement("ul",{className:"main__list"},l.a.createElement("li",{className:"main__item"},"TimeBlock"),l.a.createElement("li",{className:"main__item"},"TimeWork, \u0441"),l.a.createElement("li",{className:"main__item"},"TimeFlight, \u0441"))),function(e,t){var a=e.slice(),n=function(e,t){return a.filter((function(t){return t.dateFlight.getFullYear()===e})).map((function(e){return e[t]})).reduce((function(e,t){return e+t}))},l=Array.from(v(a)).map((function(e){return{dateFlight:a.find((function(t){return t.dateFlight.getFullYear()===e})).dateFlight,timeWork:n(e,"timeWork"),timeFlight:n(e,"timeFlight"),timeBlock:n(e,"timeBlock")}}));return console.log(l),"\u0412\u0441\u0435 \u0433\u043e\u0434\u0430"===t?l:a.filter((function(e){return e.dateFlight.getFullYear()===Number(t)}))}(_,this.state.value).map((function(t){return l.a.createElement(E,{key:t.dateFlight,data:t,activeYear:e.state.value})})))}}]),a}(l.a.Component),p=function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("ul",{className:"footer__list"},l.a.createElement("li",{className:"footer__item"},"[Copyright]"),l.a.createElement("li",{className:"footer__item"},"[\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0435\u0442\u0438]"),l.a.createElement("li",{className:"footer__item"},"[\u0410\u0434\u0440\u0435\u0441]")))},F=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(c,null),l.a.createElement(N,null),l.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.62b5fe09.chunk.js.map