webpackJsonp([3],{144:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(0),s=r(f),p=n(1),d=r(p),m=n(145),b=r(m),y=n(146),_=r(y),v=n(148),h=r(v),g=n(150),E=r(g),O=function(e){function t(){return o(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.bg,n=e.children,r=a(e,["bg","children"]);return s.default.createElement("div",i({className:"layout"},r),s.default.createElement(_.default,null),s.default.createElement(E.default,{bg:t}),s.default.createElement(b.default,null,n),s.default.createElement(h.default,null))}}]),t}(f.Component);O.propTypes={bg:d.default.string},t.default=O},145:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(u),c=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),l(t,[{key:"render",value:function(){return i.default.createElement("main",{className:"main",role:"main"},i.default.createElement("div",{className:"main__container"},i.default.createElement("div",{className:"main--content"},this.props.children)))}}]),t}(u.Component);t.default=c},146:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(0),l=r(o),u=n(26),i=n(147),c=r(i),f=function(e){return l.default.createElement("header",a({className:"header",role:"banner"},e),l.default.createElement("div",{className:"header--logo"},l.default.createElement(u.Link,{to:"/"},"navidonskis")),l.default.createElement(c.default,null))};t.default=f},147:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(r),o=n(26),l=function(){return a.default.createElement("nav",{role:"navigation",className:"navigation",itemScope:!0,itemType:"https://schema.org/SiteNavigationElement"},a.default.createElement(o.NavLink,{exact:!0,to:"/",className:"navigation--link"},a.default.createElement("span",{itemProp:"name"},"Home")),a.default.createElement(o.NavLink,{to:"/about",className:"navigation--link"},a.default.createElement("span",{itemProp:"name"},"About")),a.default.createElement(o.NavLink,{to:"/blog",className:"navigation--link"},a.default.createElement("span",{itemProp:"name"},"Writing")))};t.default=l},148:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(0),l=r(o),u=n(149),i=r(u),c=function(e){return l.default.createElement("footer",a({className:"footer",role:"contentinfo"},e),l.default.createElement(i.default,null),l.default.createElement("div",{className:"footer__info"},l.default.createElement("span",{className:"footer__info--col"},"© navidonskis.com"),l.default.createElement("span",{className:"footer__info--col"},l.default.createElement("a",{href:"mailto:donatas@navidonskis.com"},"donatas@navidonskis.com")),l.default.createElement("span",{className:"footer__info--col"},l.default.createElement("a",{href:"tel:+37067078495"},"+370 670 78495"))))};t.default=c},149:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),a=function(e){return e&&e.__esModule?e:{default:e}}(r),o=[{type:"linkedin",url:"https://www.linkedin.com/in/navidonskis"},{type:"facebook",url:"https://www.facebook.com/donatas.navidonskis"},{type:"twitter",url:"https://twitter.com/navidonskis"},{type:"github",url:"https://github.com/doniz"}],l=function(){return a.default.createElement("nav",{className:"footer__networks",itemScope:!0,itemType:"http://schema.org/Person"},o.map(function(e,t){return a.default.createElement("a",{itemProp:"sameAs",className:"footer__networks--link",href:e.url,key:t},a.default.createElement("i",{className:"icons icons__"+e.type}))}))};t.default=l},150:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),c=r(i),f=n(1),s=r(f),p=n(151),d=r(p),m=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),u(t,[{key:"render",value:function(){var e={backgroundImage:"url("+this.props.bg+")"};return c.default.createElement("section",{className:"landscape"},c.default.createElement("div",{className:"landscape__overlay"},c.default.createElement("div",{className:"landscape--background",style:e})))}}]),t}(i.Component);m.propTypes={bg:s.default.string},m.defaultProps={bg:d.default},t.default=m},151:function(e,t,n){e.exports=n.p+"static/bg-01.3f80f12f.jpg"},55:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=r(a),l=n(26),u=n(144),i=r(u);t.default=(0,l.withRouteData)(function(e){var t=e.posts;return o.default.createElement(i.default,null,o.default.createElement("h1",null,"It's blog time."),o.default.createElement("br",null),"All Posts:",o.default.createElement("ul",null,t.map(function(e){return o.default.createElement("li",{key:e.slug},o.default.createElement(l.Link,{to:"/blog/post/"+e.slug+"/"},e.title))})))})}});