(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"3XHS":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return T}));var a=t("q1tI"),r=t.n(a),i=(t("q4sD"),t("3Z9Z")),o=t("JI6e"),l=t("wx14"),c=t("zLVn"),u=(t("BO/t"),t("y8DL")),s=t("+YzT"),m=t("iKII"),d=t("Mj5q"),E=t("Qdst"),b=t("ILyh"),f=function(e){var n=Object(u.a)(e,{activeKey:"onSelect"}),t=n.id,i=n.generateChildId,o=n.onSelect,l=n.activeKey,c=n.transition,s=n.mountOnEnter,m=n.unmountOnExit,d=n.children,f=Object(a.useMemo)((function(){return i||function(e,n){return t?t+"-"+n+"-"+e:null}}),[t,i]),v=Object(a.useMemo)((function(){return{onSelect:o,activeKey:l,transition:c,mountOnEnter:s||!1,unmountOnExit:m||!1,getControlledId:function(e){return f(e,"tabpane")},getControllerId:function(e){return f(e,"tab")}}}),[o,l,c,s,m,f]);return r.a.createElement(E.a.Provider,{value:v},r.a.createElement(b.a.Provider,{value:o||null},d))},v=t("TSYQ"),p=t.n(v),h=t("vUet"),O=r.a.forwardRef((function(e,n){var t=e.bsPrefix,a=e.as,i=void 0===a?"div":a,o=e.className,u=Object(c.a)(e,["bsPrefix","as","className"]),s=Object(h.a)(t,"tab-content");return r.a.createElement(i,Object(l.a)({ref:n},u,{className:p()(o,s)}))})),y=t("7xGa");var x=r.a.forwardRef((function(e,n){var t=function(e){var n=Object(a.useContext)(E.a);if(!n)return e;var t=n.activeKey,r=n.getControlledId,i=n.getControllerId,o=Object(c.a)(n,["activeKey","getControlledId","getControllerId"]),u=!1!==e.transition&&!1!==o.transition,s=Object(b.b)(e.eventKey);return Object(l.a)({},e,{active:null==e.active&&null!=s?Object(b.b)(t)===s:e.active,id:r(e.eventKey),"aria-labelledby":i(e.eventKey),transition:u&&(e.transition||o.transition||y.a),mountOnEnter:null!=e.mountOnEnter?e.mountOnEnter:o.mountOnEnter,unmountOnExit:null!=e.unmountOnExit?e.unmountOnExit:o.unmountOnExit})}(e),i=t.bsPrefix,o=t.className,u=t.active,s=t.onEnter,m=t.onEntering,d=t.onEntered,f=t.onExit,v=t.onExiting,O=t.onExited,x=t.mountOnEnter,g=t.unmountOnExit,w=t.transition,j=t.as,C=void 0===j?"div":j,I=(t.eventKey,Object(c.a)(t,["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"])),K=Object(h.a)(i,"tab-pane");if(!u&&!w&&g)return null;var N=r.a.createElement(C,Object(l.a)({},I,{ref:n,role:"tabpanel","aria-hidden":!u,className:p()(o,K,{active:u})}));return w&&(N=r.a.createElement(w,{in:u,onEnter:s,onEntering:m,onEntered:d,onExit:f,onExiting:v,onExited:O,mountOnEnter:x,unmountOnExit:g},N)),r.a.createElement(E.a.Provider,{value:null},r.a.createElement(b.a.Provider,{value:null},N))}));x.displayName="TabPane";var g=x;function w(e,n){var t=0;return r.a.Children.map(e,(function(e){return r.a.isValidElement(e)?n(e,t++):e}))}function j(e){var n;return function(e,n){var t=0;r.a.Children.forEach(e,(function(e){r.a.isValidElement(e)&&n(e,t++)}))}(e,(function(e){null==n&&(n=e.props.eventKey)})),n}function C(e){var n=e.props,t=n.title,a=n.eventKey,i=n.disabled,o=n.tabClassName,l=n.id;return null==t?null:r.a.createElement(d.a,{as:m.a,eventKey:a,disabled:i,id:l,className:o},t)}var I=function(e){var n=Object(u.a)(e,{activeKey:"onSelect"}),t=n.id,a=n.onSelect,i=n.transition,o=n.mountOnEnter,m=n.unmountOnExit,d=n.children,E=n.activeKey,b=void 0===E?j(d):E,v=Object(c.a)(n,["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"]);return r.a.createElement(f,{id:t,activeKey:b,onSelect:a,transition:i,mountOnEnter:o,unmountOnExit:m},r.a.createElement(s.a,Object(l.a)({},v,{role:"tablist",as:"nav"}),w(d,C)),r.a.createElement(O,null,w(d,(function(e){var n=Object(l.a)({},e.props);return delete n.title,delete n.disabled,delete n.tabClassName,r.a.createElement(g,n)}))))};I.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},I.displayName="Tabs";var K=I,N=t("dI71"),S=function(e){function n(){return e.apply(this,arguments)||this}return Object(N.a)(n,e),n.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},n}(r.a.Component);S.Container=f,S.Content=O,S.Pane=g;var k=S;t("fdgq");function P(){return r.a.createElement(i.a,{xs:1,id:"personal"},r.a.createElement(o.a,{style:{maxWidth:"800px"}},r.a.createElement(K,null,r.a.createElement(k,{eventKey:"home",title:"Me"},r.a.createElement("p",null,"I am an Honours Mathematics student at the University of Waterloo, with experience in Computer Science.",r.a.createElement("br",null),"In terms of my niche within Computer Science, I prefer creating interactive applications, whether they be websites, games, organizational tools, or just fun projects to learn new technologies. In terms of hobbies, I thoroughly enjoy all things history, particularly concerning the eastern world.",r.a.createElement("br",null),"I am also a big fan of music, especially a mix of western and eastern instruments and vocals, examples including ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Coldplay",target:"_blank"},"Coldplay"),", ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Shafqat_Amanat_Ali",target:"_blank"},"Shafqat Amanat Ali"),", ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Strings_(band)"},"Strings"),", and ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/A._R._Rahman",target:"_blank"},"A.R.Rahman"),".")),r.a.createElement(k,{eventKey:"hobbies",title:"Hobbies"},"N/A , please see previous tab 😊",r.a.createElement("br",null),r.a.createElement("br",null),"In all seriousness I will be updating this very soon"))))}var q=t("Bl7J");function T(){return r.a.createElement(q.a,null,r.a.createElement(P,null))}},"7xGa":function(e,n,t){"use strict";var a,r=t("wx14"),i=t("zLVn"),o=t("TSYQ"),l=t.n(o),c=t("q1tI"),u=t.n(c),s=t("dRu9"),m=t("wsUu"),d=t("z+q/"),E=((a={})[s.b]="show",a[s.a]="show",a),b=u.a.forwardRef((function(e,n){var t=e.className,a=e.children,o=Object(i.a)(e,["className","children"]),b=Object(c.useCallback)((function(e){Object(d.a)(e),o.onEnter&&o.onEnter(e)}),[o]);return u.a.createElement(s.e,Object(r.a)({ref:n,addEndListener:m.a},o,{onEnter:b}),(function(e,n){return u.a.cloneElement(a,Object(r.a)({},n,{className:l()("fade",t,a.props.className,E[e])}))}))}));b.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},b.displayName="Fade",n.a=b},"BO/t":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return function(n,t,a,r,i){var o=a||"<<anonymous>>",l=i||t;if(null==n[t])return new Error("The "+r+" `"+l+"` is required to make `"+o+"` accessible for users of assistive technologies such as screen readers.");for(var c=arguments.length,u=Array(c>5?c-5:0),s=5;s<c;s++)u[s-5]=arguments[s];return e.apply(void 0,[n,t,a,r,i].concat(u))}},e.exports=n.default},fdgq:function(e,n,t){},q4sD:function(e,n,t){}}]);
//# sourceMappingURL=component---src-pages-about-js-b92d7aa9769f331f9c05.js.map