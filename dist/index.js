!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("prop-types"),require("react")):"function"==typeof define&&define.amd?define(["prop-types","react"],t):"object"==typeof exports?exports["react-mapycz"]=t(require("prop-types"),require("react")):e["react-mapycz"]=t(e["prop-types"],e.react)}(this,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(1),c=r(f),l=n(0),p=r(l),s=function(e){function t(){o(this,t);var e=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={control:null},e}return i(t,e),a(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.smap;if(!this.state.smap&&t){var n=this.createControl(t,e);this.setState({control:n}),t.addControl(n,e)}}},{key:"createControl",value:function(){throw new Error("Unimplemented method createControl")}},{key:"componentWillUnmount",value:function(){this.state.smap&&smap.removeControl(this.state.control)}},{key:"render",value:function(){return null}}]),t}(c.default.Component);s.propTypes={smap:p.default.object},t.default=s},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(4);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(o).default}});var u=n(6);Object.defineProperty(t,"ControlPane",{enumerable:!0,get:function(){return r(u).default}});var i=n(7);Object.keys(i).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(1),c=r(f),l=n(0),p=r(l),s=n(5),d=r(s),y="_map-component-",b=function(e){function t(e,n){o(this,t);var r=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.mapId=y+t.COUNTER++,r.state={smap:null},r}return i(t,e),a(t,[{key:"componentDidMount",value:function(){d.default.then(this.initiateMap.bind(this))}},{key:"initiateMap",value:function(e){var t=e.Coords.fromWGS84(14.4179,50.12655),n=new e(document.getElementById(this.mapId),t,this.props.zoomLevel);n.addDefaultLayer(e[this.props.layer]).enable(),this.setState({smap:n})}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,n=t.width,r=t.height,o=t.children;return c.default.createElement("div",{style:{width:n,height:r},id:this.mapId},c.default.Children.map(o,function(t,n){return c.default.cloneElement(t,{smap:e.state.smap,key:t.type.name+n})}))}}]),t}(c.default.Component);b.COUNTER=1,b.Layers={TOURIST:"DEF_TURIST",PHOTO:"DEF_OPHOTO",BASE:"DEF_BASE",HYBRID:"DEF_HYBRID"},b.defaultProps={width:"100%",height:"300px",zoomLevel:13,layer:b.Layers.BASE},b.propTypes={children:p.default.node,width:p.default.string,height:p.default.PropTypes.string,zoomLevel:p.default.number,layer:p.default.oneOf(Object.keys(b.Layers).map(function(e){return b.Layers[e]}))},t.default=b},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return function(){Loader.async=!0,Loader.load(null,{},function(){e(window.SMap)})}},o=new Promise(function(e,t){if("undefined"==typeof document&&t(),!document.getElementById("_apiMapyCzScript")||!window.SMap){var n=document.createElement("script");return n.setAttribute("src","https://api.mapy.cz/loader.js"),n.setAttribute("id","_apiMapyCzScript"),n.addEventListener("load",r(e)),void document.head.appendChild(n)}e(window.SMap)});t.default=o},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(1),c=r(f),l=n(0),p=r(l),s=function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"render",value:function(){var e=this;return this.props.children?c.default.createElement("div",null,c.default.Children.map(this.props.children,function(t){return c.default.cloneElement(t,{smap:e.props.smap,key:t.type.name})})):null}}]),t}(c.default.Component);s.propTypes={children:p.default.node,smap:p.default.object},t.default=s},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(8);Object.defineProperty(t,"ZoomControl",{enumerable:!0,get:function(){return r(o).default}});var u=n(9);Object.defineProperty(t,"CompassControl",{enumerable:!0,get:function(){return r(u).default}});var i=n(10);Object.defineProperty(t,"SyncControl",{enumerable:!0,get:function(){return r(i).default}})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(0),c=r(f),l=n(2),p=r(l),s=function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"createControl",value:function(e){return new e.constructor.Control.Zoom}}]),t}(p.default);s.propTypes=Object.assign({},p.default.propTypes,{showZoomMenu:c.default.bool,left:c.default.number,top:c.default.number,bottom:c.default.number,right:c.default.number}),s.defaultProps=Object.assign({},p.default.defaultProps,{right:10,top:10,showZoomMenu:!1}),t.default=s},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(2),c=r(f),l=n(0),p=r(l),s=function(e){function t(){return o(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"createControl",value:function(e){return new e.constructor.Control.Compass({})}}]),t}(c.default);s.propTypes=Object.assign({},c.default.propTypes,{left:p.default.number,top:p.default.number,bottom:p.default.number,right:p.default.number}),s.defaultProps={left:10,top:10},t.default=s},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(2),f=function(e){return e&&e.__esModule?e:{default:e}}(a),c=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),i(t,[{key:"createControl",value:function(e){return new e.constructor.Control.Sync}}]),t}(f.default);t.default=c}])});