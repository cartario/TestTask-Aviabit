(this.webpackJsonpaviabit=this.webpackJsonpaviabit||[]).push([[0],{197:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(26),r=a.n(l),c=a(10),s=a(15),m=a(72),o=a(19),u=["dateFlight","timeWork","timeFlight","timeBlock","timeNight","timeBiologicalNight","flight","pinType","pin","type","takeoff","landing"],d=function(e,t){return Object.assign({},e,t)},g=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=e.map((function(e){return t?e.dateFlight.getFullYear():e.dateFlight.getMonth()}));return Object(o.a)(new Set(a))},h=function(e){return["\u042f\u041d\u0412","\u0424\u0415\u0412","\u041c\u0410\u0420","\u0410\u041f\u0420","\u041c\u0410\u0419","\u0418\u042e\u041d","\u0418\u042e\u041b","\u0410\u0412\u0413","\u0421\u0415\u041d","\u041e\u041a\u0422","\u041d\u041e\u042f","\u0414\u0415\u041a"][e]},_=function(e,t){return Math.floor(e+Math.random()*(t+1-e))};function f(e,t){return Math.floor(e+Math.random()*(t+1-e))}var E,p=function(){return{dateFlight:(e=new Date(2010,0,1),t=new Date,new Date(e.getTime()+Math.random()*(t.getTime()-e.getTime()))),flight:"AB-33".concat(f(10,80)),pinType:"B-757-".concat(f(100,200)),pin:"XXXAK",timeFlight:f(25e3,26e3),timeBlock:f(27e3,28e3),timeNight:f(15e3,16e3),timeBiologicalNight:f(28e3,29e3),timeWork:f(37e3,38e3),type:f(0,1),takeoff:{name:"\u0422\u043e\u043c\u0441\u043a(\u0411\u043e\u0433\u0430\u0448\u0435\u0432\u043e)-".concat(f(1,9)),lat:56.55,long:85.2},landing:{name:"\u041d\u044f\u0447\u0430\u043d\u0433(\u041a\u0430\u043c\u0440\u0430\u043d\u044c \u0418\u043d\u0442\u043b)",lat:11.99805555,long:109.21944444}};var e,t},N=(E=20,new Array(E).fill("").map(p)).sort((function(e,t){return t.dateFlight-e.dateFlight})),F={flights:N,activeFlight:{year:"",value:"",isFactData:""},sumData:{timeWork:0,timeFlight:0,timeBlock:0,timeNight:0,timeBiologicalNight:0}},v="LOAD_FLIGHTS",k="SET_ACTIVE_FLIGHT",b="SET_SUM_DATA",y=function(e){return{type:"LOAD_FLIGHTS",payload:e}},D=function(e,t,a){return{type:"SET_ACTIVE_FLIGHT",payload:{value:e,year:t,isFactData:a}}},w=function(e){return{type:b,payload:e}},O=function(){return function(e,t,a){return a.get("/users?page=2").then((function(t){e(y((t.data.data,{dateFlight:new Date,flight:"\u041e\u0422\u0412\u0415\u0422_\u0421\u0415\u0420\u0412\u0415\u0420\u0410",pinType:"\u041e\u0422\u0412\u0415\u0422_\u0421\u0415\u0420\u0412\u0415\u0420\u0410",pin:"\u041e\u0422\u0412\u0415\u0422_\u0421\u0415\u0420\u0412\u0415\u0420\u0410",timeFlight:11111,timeBlock:11111,timeNight:11111,timeBiologicalNight:11111,timeWork:11111,type:0,takeoff:{name:"\u041e\u0422\u0412\u0415\u0422_\u0421\u0415\u0420\u0412\u0415\u0420\u0410",lat:56.55,long:85.2},landing:{name:"\u041e\u0422\u0412\u0415\u0422_\u041e\u0422_\u0421\u0415\u0420\u0412\u0415\u0420\u0410",lat:11.99805555,long:109.21944444}})))})).catch((function(e){throw e}))}},S=Object(c.c)({FLIGHTS:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return d(e,{flights:[].concat(Object(o.a)(e.flights),[t.payload])});case k:return d(e,{activeFlight:t.payload});case b:return d(e,{sumData:t.payload});default:return e}}}),T=(a(84),a(14)),H=a(2),B=(a(85),function(){return i.a.createElement("header",{className:"header"},i.a.createElement("nav",{className:"nav"},i.a.createElement("div",{className:"nav__logo"},"[Logo]"),i.a.createElement("div",{className:"nav__menu"},"[Menu]")))}),j=a(28),A=a(29),W=a(13),L=a(31),I=a(30),M=function(e){var t=e.data,a=e.activeYear,n=t.dateFlight,l=t.timeWork,r=t.timeFlight,c=t.timeBlock;return i.a.createElement("ul",{className:"main__card card"},i.a.createElement("li",{className:"card__item"},i.a.createElement(T.b,{onClick:function(t){e.clickHandler(t.target.textContent)},to:"/details"},"\u0412\u0441\u0435 \u0433\u043e\u0434\u0430"===a?n.getFullYear():h(n.getMonth()))),i.a.createElement("li",{className:"card__item"},l),i.a.createElement("li",{className:"card__item"},r),i.a.createElement("li",{className:"card__item"},c))},C=function(e){return i.a.createElement("div",null,i.a.createElement("input",{className:"checkbox",type:"checkbox",id:"checkbox",onChange:e.toggleHandler,autoFocus:!0}),i.a.createElement("label",{className:"checkbox__label",htmlFor:"checkbox"},"\u041f\u043e \u0444\u0430\u043a\u0442\u0443"))},Y=function(e){Object(L.a)(a,e);var t=Object(I.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).state={value:"\u0412\u0441\u0435 \u0433\u043e\u0434\u0430"},n._clickHandler=n._clickHandler.bind(Object(W.a)(n)),n}return Object(A.a)(a,[{key:"_clickHandler",value:function(e){this.props.setActiveFlight(e,this.state.value,this.props.isFactData)}},{key:"render",value:function(){var e=this;return i.a.createElement("main",{className:"main"},i.a.createElement("h1",{className:"main__title"},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043f\u043e \u043d\u0430\u043b\u0435\u0442\u0443 \u043a\u043e\u043c\u0430\u043d\u0434\u0438\u0440\u0430 \u0432\u043e\u0437\u0434\u0443\u0448\u043d\u043e\u0433\u043e \u0441\u0443\u0434\u043d\u0430 \u0437\u0430","\u0412\u0441\u0435 \u0433\u043e\u0434\u0430"===this.state.value?" \u0432\u0441\xeb \u0432\u0440\u0435\u043c\u044f":" ".concat(this.state.value," \u0433\u043e\u0434"),i.a.createElement("div",null,"\u0414\u0430\u043d\u043d\u044b\u0435 \u043f\u043e ",this.props.isFactData?"\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u043c":"\u043f\u043b\u0430\u043d\u043e\u0432\u044b\u043c"," \u0440\u0435\u0439\u0441\u0430\u043c")),i.a.createElement(C,{toggleHandler:this.props.toggleHandler}),i.a.createElement("div",{className:"main__container"},i.a.createElement("select",{value:this.state.value,className:"main__select",onChange:function(t){e.setState({value:t.target.value})}},i.a.createElement("option",null,"\u0412\u0441\u0435 \u0433\u043e\u0434\u0430"),function(e,t){var a=e.filter((function(e){return t?1===e.type:0===e.type})).map((function(e){return e.dateFlight.getFullYear()}));return Object(o.a)(new Set(a))}(this.props.flights,this.props.isFactData).map((function(e){return i.a.createElement("option",{key:e},e)}))),i.a.createElement("ul",{className:"main__list"},i.a.createElement("li",{className:"main__item"},"TimeWork, \u0441"),i.a.createElement("li",{className:"main__item"},"TimeFlight, \u0441"),i.a.createElement("li",{className:"main__item"},"TimeBlock"))),function(e,t,a){var n=e.filter((function(e){return a?1===e.type:0===e.type})),i=n.slice(),l=n.filter((function(e){return e.dateFlight.getFullYear()===Number(t)})),r=function(e,t){return i.filter((function(t){return(e>12?t.dateFlight.getFullYear():t.dateFlight.getMonth())===e})).map((function(e){return e[t]})).reduce((function(e,t){return e+t}))},c=function(){var e,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e=t?i:l,Array.from(g(e,t)).map((function(a){return{dateFlight:e.find((function(e){return(t?e.dateFlight.getFullYear():e.dateFlight.getMonth())===a})).dateFlight,timeWork:r(a,"timeWork"),timeFlight:r(a,"timeFlight"),timeBlock:r(a,"timeBlock")}}))};return"\u0412\u0441\u0435 \u0433\u043e\u0434\u0430"===t?c(!0):c(!1).reverse()}(this.props.flights,this.state.value,this.props.isFactData).sort((function(e,t){return t.dateFlight-e.dateFlight})).map((function(t){return i.a.createElement(M,{key:t.dateFlight,data:t,activeYear:e.state.value,clickHandler:e._clickHandler})})))}}]),a}(i.a.Component),x=function(){return i.a.createElement("footer",{className:"footer"},i.a.createElement("ul",{className:"footer__list"},i.a.createElement("li",{className:"footer__item"},"[Copyright]"),i.a.createElement("li",{className:"footer__item"},"[\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0435\u0442\u0438]"),i.a.createElement("li",{className:"footer__item"},"[\u0410\u0434\u0440\u0435\u0441]")))},G=a(73),X=Object(s.b)((function(e){return{sumData:e.FLIGHTS.sumData}}))((function(e){var t=e.sumData,a={labels:["timeWork","timeFlight","timeBlock","timeNight","timeBiologicalNight"],datasets:[{barPercentage:.5,backgroundColor:"rgba(75,192,192,1)",borderColor:"rgba(0,0,0,1)",borderWidth:1,data:Object.values(t)}]};return i.a.createElement("div",{className:"chart-container"},i.a.createElement(G.Bar,{data:a,options:{title:{display:!0,text:"\u0421\u0432\u043e\u0434\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0437\u0430 \u0442\u0435\u043a\u0443\u0449\u0438\u0439 \u043f\u0435\u0440\u0438\u043e\u0434",fontSize:20},legend:{display:!1}}}))})),U=function(e){var t=e.filteredFlights,a=e.setSumData,n=t.map((function(e){return e.timeWork})).reduce((function(e,t){return e+t}),0),l=t.map((function(e){return e.timeFlight})).reduce((function(e,t){return e+t}),0),r=t.map((function(e){return e.timeBlock})).reduce((function(e,t){return e+t}),0),c=t.map((function(e){return e.timeNight})).reduce((function(e,t){return e+t}),0),s=t.map((function(e){return e.timeBiologicalNight})).reduce((function(e,t){return e+t}),0);return a({timeWork:n,timeFlight:l,timeBlock:r,timeNight:c,timeBiologicalNight:s}),i.a.createElement("tr",{className:"details__row"},i.a.createElement("td",{className:"details__item"},"\u0418\u0442\u043e\u0433\u043e"),i.a.createElement("td",{className:"details__item"},n),i.a.createElement("td",{className:"details__item"},l),i.a.createElement("td",{className:"details__item"},r),i.a.createElement("td",{className:"details__item"},c),i.a.createElement("td",{className:"details__item"},s),i.a.createElement("td",{className:"details__item"},"---"),i.a.createElement("td",{className:"details__item"},"---"),i.a.createElement("td",{className:"details__item"},"---"),i.a.createElement("td",{className:"details__item"},"---"),i.a.createElement("td",{className:"details__item"},"---"),i.a.createElement("td",{className:"details__item"},"---"))},V=function(e){var t,a=e.flight;return i.a.createElement("tr",{className:"details__row"},i.a.createElement("td",{className:"details__item"},(t=a.dateFlight,"".concat(t.getDate()," ").concat(h(t.getMonth())," ").concat(t.getFullYear()))),i.a.createElement("td",{className:"details__item"},a.timeWork),i.a.createElement("td",{className:"details__item"},a.timeFlight),i.a.createElement("td",{className:"details__item"},a.timeBlock),i.a.createElement("td",{className:"details__item"},a.timeNight),i.a.createElement("td",{className:"details__item"},a.timeBiologicalNight),i.a.createElement("td",{className:"details__item"},a.flight),i.a.createElement("td",{className:"details__item"},a.pinType),i.a.createElement("td",{className:"details__item"},a.pin),i.a.createElement("td",{className:"details__item"},a.type),i.a.createElement("td",{className:"details__item"},a.takeoff.name),i.a.createElement("td",{className:"details__item"},a.landing.name))},R=function(e){var t,a=e.flights,n=e.activeFlight,l=e.isFactData,r=e.setSumData,c=e.toggleHandler,s=n.value,m=n.year;return function(e,a){switch(!0){case"\u0412\u0441\u0435 \u0433\u043e\u0434\u0430"===a:return t=e.filter((function(e){return e.dateFlight.getFullYear()===Number(s)&&e.type===(l?1:0)}));default:t=e.filter((function(e){return e.type===(l?1:0)&&e.dateFlight.getFullYear()===Number(a)&&h(e.dateFlight.getMonth())===s}))}}(a,m),i.a.createElement(i.a.Fragment,null,i.a.createElement(T.b,{className:"go-back",to:"/"},"< \u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"),i.a.createElement("h2",{className:"details-header"},"\u0414\u0435\u0442\u0430\u043b\u044c\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f","".concat(s?" \u0437\u0430 ".concat(s):""," ").concat("\u0412\u0441\u0435 \u0433\u043e\u0434\u0430"===m?"":m," . \u0414\u0430\u043d\u043d\u044b\u0435 \u043f\u043e ").concat(l?"\u0444\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u043c":"\u043f\u043b\u0430\u043d\u043e\u0432\u044b\u043c"," \u0440\u0435\u0439\u0441\u0430\u043c")),i.a.createElement(C,{toggleHandler:c}),i.a.createElement(X,null),i.a.createElement("div",{className:"details-container"},i.a.createElement("table",{className:"details",border:"1"},i.a.createElement("tbody",null,i.a.createElement("tr",{className:"details__row"},u.map((function(e){return i.a.createElement("th",{className:"details__title",key:e},e)}))),i.a.createElement("tr",{className:"details__row"},i.a.createElement("td",{className:"details__item details__item--section",colSpan:u.length},"\u041f\u043e \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u043c\u0443")),t.map((function(e){return i.a.createElement(V,{key:_(1,1e6),flight:e})})),i.a.createElement("tr",{className:"details__row"},i.a.createElement("td",{className:"details__item details__item--section",colSpan:u.length},"\u0421\u0443\u043c\u043c\u0430\u0440\u043d\u043e \u0437\u0430 ",s)),i.a.createElement(U,{filteredFlights:t,setSumData:r}),i.a.createElement("tr",{className:"details__row"},i.a.createElement("td",{className:"details__item details__item--section",colSpan:u.length},"\u041f\u043e \u0432\u0441\u0435\u043c \u043f\u043e\u043b\u0435\u0442\u0430\u043c")),a.sort((function(e,t){return t.dateFlight-e.dateFlight})).map((function(e){return i.a.createElement(V,{key:_(1,1e6),flight:e})}))))))},J=function(e){return function(t){Object(L.a)(n,t);var a=Object(I.a)(n);function n(e){var t;return Object(j.a)(this,n),(t=a.call(this,e)).state={value:"\u0412\u0441\u0435 \u0433\u043e\u0434\u0430",isFactData:!1},t._toggleHandler=t._toggleHandler.bind(Object(W.a)(t)),t}return Object(A.a)(n,[{key:"_toggleHandler",value:function(){this.setState({isFactData:!this.state.isFactData})}},{key:"render",value:function(){return i.a.createElement(e,Object.assign({},this.props,{toggleHandler:this._toggleHandler,isFactData:this.state.isFactData}))}}]),n}(i.a.Component)},q=Object(s.b)((function(e){return{flights:e.FLIGHTS.flights,activeFlight:e.FLIGHTS.activeFlight}}),(function(e){return{setActiveFlight:function(t,a,n){e(D(t,a,n))},setSumData:function(t){e(w(t))}}}))(J((function(e){var t=e.flights,a=e.activeFlight,n=e.setActiveFlight,l=e.toggleHandler,r=e.isFactData,c=e.setSumData;return i.a.createElement("div",{className:"App"},i.a.createElement(T.a,null,i.a.createElement(B,null),i.a.createElement(H.a,{exact:!0,path:"/"},i.a.createElement(Y,{setActiveFlight:n,toggleHandler:l,isFactData:r,flights:t})),i.a.createElement(H.a,{path:"/details"},i.a.createElement(R,{flights:t,activeFlight:a,toggleHandler:l,isFactData:r,setSumData:c})),i.a.createElement(x,null)))})));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=a(74),K=a.n(z).a.create({baseURL:"https://reqres.in/api",timeout:5e3,withCredentials:!1}),P=Object(c.e)(S,Object(c.d)(Object(c.a)(m.a.withExtraArgument(K)),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}));P.dispatch(O()),r.a.render(i.a.createElement(s.a,{store:P},i.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},75:function(e,t,a){e.exports=a(197)},84:function(e,t,a){},85:function(e,t,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.1938a78b.chunk.js.map