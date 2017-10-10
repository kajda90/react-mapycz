!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("prop-types")):"function"==typeof define&&define.amd?define(["react","prop-types"],t):"object"==typeof exports?exports["react-mapycz"]=t(require("react"),require("prop-types")):e["react-mapycz"]=t(e.react,e["prop-types"])}(this,function(e,t){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};return t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=13)}([function(t,o){t.exports=e},function(e,o){e.exports=t},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,o,n){Object.keys(o).map(function(r){var u=e[r],a=n[r];a!==u&&o[r](t,u,a,e)})},r=function(e,t,o){n(e,t,o,{})},u=function(e,t,o,r){n(e.props,t,o,r)};t.componentConstruct=r,t.componentDidUpdate=u},,,function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"container";return function(o,n){o._dom[t].style[e]=n+"px"}},r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"container";return function(o,n){o._dom[t].setAttribute(e,n)}};t.positionUpdater=n,t.domAttrUpdater=r},,,,,,,,function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(14);Object.defineProperty(t,"ZoomControl",{enumerable:!0,get:function(){return n(r).default}});var u=o(15);Object.defineProperty(t,"CompassControl",{enumerable:!0,get:function(){return n(u).default}});var a=o(16);Object.defineProperty(t,"SyncControl",{enumerable:!0,get:function(){return n(a).default}});var i=o(17);Object.defineProperty(t,"MouseControl",{enumerable:!0,get:function(){return n(i).default}});var l=o(18);Object.defineProperty(t,"KeyboardControl",{enumerable:!0,get:function(){return n(l).default}})},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){var o=[],n=!0,r=!1,u=void 0;try{for(var a,i=e[Symbol.iterator]();!(n=(a=i.next()).done)&&(o.push(a.value),!t||o.length!==t);n=!0);}catch(e){r=!0,u=e}finally{try{!n&&i.return&&i.return()}finally{if(r)throw u}}return o}return function(t,o){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),p=o(0),c=n(p),f=o(1),s=n(f),d=o(2),b=o(5),y=function(e){function t(e,o){r(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,o)),a=new SMap.Control.Zoom;return o.sMap.addControl(a),n.sControl=a,(0,d.componentConstruct)(e,a,t.updaterMap),n}return a(t,e),l(t,[{key:"componentDidUpdate",value:function(e){(0,d.componentDidUpdate)(this,this.sControl,t.updaterMap,e)}},{key:"componentWillUnmount",value:function(){this.context.sMap.removeControl(this.sControl)}},{key:"render",value:function(){return null}}]),t}(c.default.Component);y.displayName="ZoomControl",y.contextTypes={sMap:s.default.object},y.propTypes={labels:s.default.object,title:s.default.arrayOf(s.default.string),showZoomMenu:s.default.bool,sliderHeight:s.default.number,left:s.default.number,top:s.default.number,bottom:s.default.number,right:s.default.number},y.defaultProps={showZoomMenu:!0,labels:{},title:["Přiblížit","Oddálit"],right:10,top:10},y.updaterMap={left:(0,b.positionUpdater)("left"),right:(0,b.positionUpdater)("right"),top:(0,b.positionUpdater)("top"),bottom:(0,b.positionUpdater)("bottom"),title:function(e,t){var o=i(t,2),n=o[0],r=o[1],u=e._dom,a=u.plus,l=u.minus;a.setAttribute("title",n),l.setAttribute("title",r)},showZoomMenu:function(e,t){e._options.showZoomMenu=t,t?e.addZoomMenu():e.removeZoomMenu()},labels:function(e,t){e._labels=t,e.removeZoomMenu(),e._options.showZoomMenu&&e.addZoomMenu()}},y.DEFAULT_LABELS={2:"Svět",5:"Státy",8:"Kraje",11:"Města",14:"Obce",17:"Ulice",20:"Domy",21:"Ptačí pohled"},t.default=y},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),l=o(0),p=n(l),c=o(1),f=n(c),s=o(2),d=o(5),b=function(e){function t(e,o){r(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,o)),a=new SMap.Control.Compass;return o.sMap.addControl(a),n.sControl=a,(0,s.componentConstruct)(e,a,t.updaterMap),n}return a(t,e),i(t,[{key:"componentDidUpdate",value:function(e){(0,s.componentDidUpdate)(this,this.sControl,t.updaterMap,e)}},{key:"componentWillUnmount",value:function(){this.context.sMap.removeControl(this.sControl)}},{key:"render",value:function(){return null}}]),t}(p.default.Component);b.displayName="CompassControl",b.contextTypes={sMap:f.default.object},b.propTypes={title:f.default.string,left:f.default.number,top:f.default.number,bottom:f.default.number,right:f.default.number},b.defaultProps={title:"Posun mapy",left:10,top:10},b.updaterMap={title:(0,d.domAttrUpdater)("title"),left:(0,d.positionUpdater)("left"),right:(0,d.positionUpdater)("right"),top:(0,d.positionUpdater)("top"),bottom:(0,d.positionUpdater)("bottom")},t.default=b},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),l=o(0),p=n(l),c=o(1),f=n(c),s=function(e){function t(e,o){r(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,o)),a=new SMap.Control.Sync;return o.sMap.addControl(a),n.sControl=a,n}return a(t,e),i(t,[{key:"componentWillUnmount",value:function(){this.context.sMap.removeControl(this.sControl)}},{key:"render",value:function(){return null}}]),t}(p.default.Component);s.displayName="SyncControl",s.contextTypes={sMap:f.default.object},t.default=s},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),l=o(0),p=n(l),c=o(1),f=n(c),s=o(2),d=function(e,t,o,n){var r=n.pan,u=n.wheel,a=n.zoom,i=0;i|=r&&SMap.MOUSE_PAN,i|=a&&SMap.MOUSE_ZOOM,i|=u&&SMap.MOUSE_WHEEL,e.configure(i)},b=function(e){function t(e,o){r(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,o)),a=new SMap.Control.Mouse;return o.sMap.addControl(a),n.sControl=a,(0,s.componentConstruct)(e,a,t.updaterMap),n}return a(t,e),i(t,[{key:"componentDidUpdate",value:function(e){(0,s.componentDidUpdate)(this,this.sControl,t.updaterMap,e)}},{key:"componentWillUnmount",value:function(){this.context.sMap.removeControl(this.sControl)}},{key:"render",value:function(){return null}}]),t}(p.default.Component);b.displayName="MouseControl",b.contextTypes={sMap:f.default.object},b.propTypes={pan:f.default.bool,wheel:f.default.bool,zoom:f.default.bool},b.defaultProps={pan:!0,wheel:!0,zoom:!0},b.updaterMap={pan:d,wheel:d,zoom:d},t.default=b},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),l=o(0),p=n(l),c=o(1),f=n(c),s=o(2),d=function(e,t,o,n){var r=n.pan,u=n.zoom,a=0;a|=r&&SMap.KB_PAN,a|=u&&SMap.KB_ZOOM,e.configure(a)},b=function(e){function t(e,o){r(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,o)),a=new SMap.Control.Keyboard;return o.sMap.addControl(a),n.sControl=a,(0,s.componentConstruct)(e,a,t.updaterMap),n}return a(t,e),i(t,[{key:"componentDidUpdate",value:function(e){(0,s.componentDidUpdate)(this,this.sControl,t.updaterMap,e)}},{key:"componentWillUnmount",value:function(){this.context.sMap.removeControl(this.sControl)}},{key:"render",value:function(){return null}}]),t}(p.default.Component);b.displayName="KeyboardControl",b.contextTypes={sMap:f.default.object},b.propTypes={pan:f.default.bool,zoom:f.default.bool},b.defaultProps={pan:!0,zoom:!0},b.updaterMap={pan:d,zoom:d},t.default=b}])});