webpackJsonp([2],{144:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),f=r(s),p=n(1),d=r(p),m=n(145),h=r(m),y=n(146),v=r(y),b=n(148),g=r(b),_=n(150),E=r(_),O=function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.bg,n=e.children,r=a(e,["bg","children"]);return f.default.createElement("div",i({className:"layout"},r),f.default.createElement(v.default,null),f.default.createElement(E.default,{bg:t}),f.default.createElement(h.default,null,n),f.default.createElement(g.default,null))}}]),t}(s.Component);O.propTypes={bg:d.default.string},t.default=O},145:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(u),c=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),l(t,[{key:"render",value:function(){return i.default.createElement("main",{className:"main",role:"main"},i.default.createElement("div",{className:"main__container"},i.default.createElement("div",{className:"main--content"},this.props.children)))}}]),t}(u.Component);t.default=c},146:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(0),l=r(o),u=n(26),i=n(147),c=r(i),s=function(e){return l.default.createElement("header",a({className:"header",role:"banner"},e),l.default.createElement("div",{className:"header--logo"},l.default.createElement(u.Link,{to:"/"},"navidonskis")),l.default.createElement(c.default,null))};t.default=s},147:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(r),o=n(26),l=function(){return a.default.createElement("nav",{role:"navigation",className:"navigation",itemScope:!0,itemType:"https://schema.org/SiteNavigationElement"},a.default.createElement(o.NavLink,{exact:!0,to:"/",className:"navigation--link"},a.default.createElement("span",{itemProp:"name"},"Home")),a.default.createElement(o.NavLink,{to:"/about",className:"navigation--link"},a.default.createElement("span",{itemProp:"name"},"About")),a.default.createElement(o.NavLink,{to:"/blog",className:"navigation--link"},a.default.createElement("span",{itemProp:"name"},"Writing")))};t.default=l},148:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(0),l=r(o),u=n(149),i=r(u),c=function(e){return l.default.createElement("footer",a({className:"footer",role:"contentinfo"},e),l.default.createElement(i.default,null),l.default.createElement("div",{className:"footer__info"},l.default.createElement("span",{className:"footer__info--col"},"© navidonskis.com"),l.default.createElement("span",{className:"footer__info--col"},l.default.createElement("a",{href:"mailto:donatas@navidonskis.com"},"donatas@navidonskis.com")),l.default.createElement("span",{className:"footer__info--col"},l.default.createElement("a",{href:"tel:+37067078495"},"+370 670 78495"))))};t.default=c},149:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(r),o=[{type:"linkedin",url:"https://www.linkedin.com/in/navidonskis"},{type:"facebook",url:"https://www.facebook.com/donatas.navidonskis"},{type:"twitter",url:"https://twitter.com/navidonskis"},{type:"github",url:"https://github.com/doniz"}],l=function(){return a.default.createElement("nav",{className:"footer__networks",itemScope:!0,itemType:"http://schema.org/Person"},o.map(function(e,t){return a.default.createElement("a",{itemProp:"sameAs",className:"footer__networks--link",href:e.url,key:t},a.default.createElement("i",{className:"icons icons__"+e.type}))}))};t.default=l},150:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),c=r(i),s=n(1),f=r(s),p=n(151),d=r(p),m=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),u(t,[{key:"render",value:function(){var e={backgroundImage:"url("+this.props.bg+")"};return c.default.createElement("section",{className:"landscape"},c.default.createElement("div",{className:"landscape__overlay"},c.default.createElement("div",{className:"landscape--background",style:e})))}}]),t}(i.Component);m.propTypes={bg:f.default.string},m.defaultProps={bg:d.default},t.default=m},151:function(e,t,n){e.exports=n.p+"static/bg-01.3f80f12f.jpg"},152:function(e,t,n){!function(t,r){e.exports=r(n(0))}(0,function(e){"use strict";function t(e){return e.replace(/(-|:)(.)/g,function(e,t,n){return n.toUpperCase()})}function n(e){var n={};return e.split(";").filter(function(e){return""!==e.trim()}).forEach(function(e){var r,a=e.split(":");if(a.length>1){var o=function(e){return/^-ms-/.test(e)&&(e=e.substr(1)),t(e)}(a[0].trim()),l=(r=a.slice(1).join(":").trim(),/^\d+$/.test(r)?Number(r):r.replace(/'/g,'"'));n[o]=l}}),n}function r(i,c,s){var f,p=s.map._;if(i.nodeType===o.COMMENT)return null;if(i.nodeType===o.TEXT){var d=(f=i.textContent,u.innerHTML=f,u.textContent);return p?p(d):d}for(var m=i.tagName.toLowerCase(),h=s.map[m],y={},v=0;v<i.attributes.length;v++){var b=i.attributes[v].name,g=i.attributes[v].value;y[b]=g}y.key=c.toString();for(var _=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).reduce(function(r,o){if(/^on.*/.test(o))return r;var l=o;/^(data|aria)-/.test(o)||(l=t(o));var u=a[l]||l;return r[u]="style"===u?n(e.style):e[o],r},{})}(y),E=[],O=0;O<i.childNodes.length;O++){var w=i.childNodes[O],k=c+"."+O;if(!(l.indexOf(m)>-1&&w.nodeType===o.TEXT&&(w.textContent=w.textContent.trim(),""===w.textContent))){var N=r(w,k,s);null!==N&&E.push(N)}}return"style"!==m||h||p?(0===E.length&&(E=null),h?e.createElement(h,_,E):p?p(m,_,E):e.createElement(m,_,E)):(_.dangerouslySetInnerHTML={__html:E[0]},e.createElement(m,_,null))}e=e&&e.hasOwnProperty("default")?e.default:e;var a={for:"htmlFor",class:"className",acceptcharset:"acceptCharset",accesskey:"accessKey",allowfullscreen:"allowFullScreen",allowtransparency:"allowTransparency",autocomplete:"autoComplete",autofocus:"autoFocus",autoplay:"autoPlay",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",classid:"classID",classname:"className",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",crossorigin:"crossOrigin",datetime:"dateTime",enctype:"encType",formaction:"formAction",formenctype:"formEncType",formmethod:"formMethod",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",htmlfor:"htmlFor",httpequiv:"httpEquiv",inputmode:"inputMode",keyparams:"keyParams",keytype:"keyType",marginheight:"marginHeight",marginwidth:"marginWidth",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",novalidate:"noValidate",radiogroup:"radioGroup",readonly:"readOnly",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",usemap:"useMap"},o={ELEMENT:1,TEXT:3,COMMENT:8},l=["table","tbody","thead","tfoot","tr"],u=document.createElement("div");return function(e){var t={map:(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).map||{}},n=document.createElement("div");n.innerHTML=e.trim();for(var a=[],o=0;o<n.childNodes.length;o++)a.push(n.childNodes[o]);var l=a.map(function(e,n){return r(e,n,t)}).filter(function(e){return null!==e});return 1===l.length?l[0]:l}})},53:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=r(a),l=n(26),u=n(152),i=r(u),c=n(144),s=r(c);t.default=(0,l.withRouteData)(function(e){var t=e.home;return o.default.createElement(s.default,null,(0,i.default)(t.contents))})}});