/*! For license information please see 463.b7102f69.chunk.js.LICENSE.txt */
(self.webpackChunkreact_auth=self.webpackChunkreact_auth||[]).push([[463],{1363:function(t,e,r){"use strict";r.d(e,{G:function(){return x}});var n=r(6307),o=r(2007),a=r.n(o),i=r(2791);function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function p(t){return function(t){if(Array.isArray(t))return b(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return b(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function y(t){return e=t,(e-=0)===e?t:(t=t.replace(/[\-_\s]+(.)?/g,(function(t,e){return e?e.toUpperCase():""}))).substr(0,1).toLowerCase()+t.substr(1);var e}var d=["style"];function v(t){return t.split(";").map((function(t){return t.trim()})).filter((function(t){return t})).reduce((function(t,e){var r,n=e.indexOf(":"),o=y(e.slice(0,n)),a=e.slice(n+1).trim();return o.startsWith("webkit")?t[(r=o,r.charAt(0).toUpperCase()+r.slice(1))]=a:t[o]=a,t}),{})}var m=!1;try{m=!0}catch(w){}function h(t){return t&&"object"===u(t)&&t.prefix&&t.iconName&&t.icon?t:n.Qc.icon?n.Qc.icon(t):null===t?null:t&&"object"===u(t)&&t.prefix&&t.iconName?t:Array.isArray(t)&&2===t.length?{prefix:t[0],iconName:t[1]}:"string"===typeof t?{prefix:"fas",iconName:t}:void 0}function O(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?f({},t,e):{}}var g=["forwardedRef"];function x(t){var e=t.forwardedRef,r=c(t,g),o=r.icon,a=r.mask,i=r.symbol,l=r.className,u=r.title,b=r.titleId,y=h(o),d=O("classes",[].concat(p(function(t){var e,r=t.beat,n=t.fade,o=t.flash,a=t.spin,i=t.spinPulse,l=t.spinReverse,s=t.pulse,u=t.fixedWidth,c=t.inverse,p=t.border,b=t.listItem,y=t.flip,d=t.size,v=t.rotation,m=t.pull,h=(f(e={"fa-beat":r,"fa-fade":n,"fa-flash":o,"fa-spin":a,"fa-spin-reverse":l,"fa-spin-pulse":i,"fa-pulse":s,"fa-fw":u,"fa-inverse":c,"fa-border":p,"fa-li":b,"fa-flip-horizontal":"horizontal"===y||"both"===y,"fa-flip-vertical":"vertical"===y||"both"===y},"fa-".concat(d),"undefined"!==typeof d&&null!==d),f(e,"fa-rotate-".concat(v),"undefined"!==typeof v&&null!==v&&0!==v),f(e,"fa-pull-".concat(m),"undefined"!==typeof m&&null!==m),f(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(h).map((function(t){return h[t]?t:null})).filter((function(t){return t}))}(r)),p(l.split(" ")))),v=O("transform","string"===typeof r.transform?n.Qc.transform(r.transform):r.transform),w=O("mask",h(a)),P=(0,n.qv)(y,s(s(s(s({},d),v),w),{},{symbol:i,title:u,titleId:b}));if(!P)return function(){var t;!m&&console&&"function"===typeof console.error&&(t=console).error.apply(t,arguments)}("Could not find icon",y),null;var S=P.abstract,k={ref:e};return Object.keys(r).forEach((function(t){x.defaultProps.hasOwnProperty(t)||(k[t]=r[t])})),j(S[0],k)}x.displayName="FontAwesomeIcon",x.propTypes={beat:a().bool,border:a().bool,className:a().string,fade:a().bool,flash:a().bool,mask:a().oneOfType([a().object,a().array,a().string]),fixedWidth:a().bool,inverse:a().bool,flip:a().oneOf(["horizontal","vertical","both"]),icon:a().oneOfType([a().object,a().array,a().string]),listItem:a().bool,pull:a().oneOf(["right","left"]),pulse:a().bool,rotation:a().oneOf([0,90,180,270]),size:a().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:a().bool,spinPulse:a().bool,spinReverse:a().bool,symbol:a().oneOfType([a().bool,a().string]),title:a().string,transform:a().oneOfType([a().string,a().object]),swapOpacity:a().bool},x.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var j=function t(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"===typeof r)return r;var o=(r.children||[]).map((function(r){return t(e,r)})),a=Object.keys(r.attributes||{}).reduce((function(t,e){var n=r.attributes[e];switch(e){case"class":t.attrs.className=n,delete r.attributes.class;break;case"style":t.attrs.style=v(n);break;default:0===e.indexOf("aria-")||0===e.indexOf("data-")?t.attrs[e.toLowerCase()]=n:t.attrs[y(e)]=n}return t}),{attrs:{}}),i=n.style,l=void 0===i?{}:i,u=c(n,d);return a.attrs.style=s(s({},a.attrs.style),l),e.apply(void 0,[r.tag,s(s({},a.attrs),u)].concat(p(o)))}.bind(null,i.createElement)},5341:function(t,e,r){"use strict";r.d(e,{FT:function(){return l}});var n=r(885),o=r(2791),a=r(184),i=["as","disabled"];function l(t){var e=t.tagName,r=t.disabled,n=t.href,o=t.target,a=t.rel,i=t.onClick,l=t.tabIndex,s=void 0===l?0:l,u=t.type;e||(e=null!=n||null!=o||null!=a?"a":"button");var f={tagName:e};if("button"===e)return[{type:u||"button",disabled:r},f];var c=function(t){(r||"a"===e&&function(t){return!t||"#"===t.trim()}(n))&&t.preventDefault(),r?t.stopPropagation():null==i||i(t)};return"a"===e&&(n||(n="#"),r&&(n=void 0)),[{role:"button",disabled:void 0,tabIndex:r?void 0:s,href:n,target:"a"===e?o:void 0,"aria-disabled":r||void 0,rel:"a"===e?a:void 0,onClick:c,onKeyDown:function(t){" "===t.key&&(t.preventDefault(),c(t))}},f]}var s=o.forwardRef((function(t,e){var r=t.as,o=t.disabled,s=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,i),u=l(Object.assign({tagName:r,disabled:o},s)),f=(0,n.Z)(u,2),c=f[0],p=f[1].tagName;return(0,a.jsx)(p,Object.assign({},s,c,{ref:e}))}));s.displayName="Button"},1694:function(t,e){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var a=typeof r;if("string"===a||"number"===a)t.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&t.push(i)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var l in r)n.call(r,l)&&r[l]&&t.push(l);else t.push(r.toString())}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},3360:function(t,e,r){"use strict";var n=r(1413),o=r(885),a=r(5987),i=r(1694),l=r.n(i),s=r(2791),u=r(5341),f=r(162),c=r(184),p=["as","bsPrefix","variant","size","active","className"],b=s.forwardRef((function(t,e){var r=t.as,i=t.bsPrefix,s=t.variant,b=t.size,y=t.active,d=t.className,v=(0,a.Z)(t,p),m=(0,f.vE)(i,"btn"),h=(0,u.FT)((0,n.Z)({tagName:r},v)),O=(0,o.Z)(h,2),g=O[0],x=O[1].tagName;return(0,c.jsx)(x,(0,n.Z)((0,n.Z)((0,n.Z)({},g),v),{},{ref:e,className:l()(d,m,y&&"active",s&&"".concat(m,"-").concat(s),b&&"".concat(m,"-").concat(b),v.href&&v.disabled&&"disabled")}))}));b.displayName="Button",b.defaultProps={variant:"primary",active:!1,disabled:!1},e.Z=b},162:function(t,e,r){"use strict";r.d(e,{vE:function(){return a}});var n=r(2791),o=(r(184),n.createContext({prefixes:{}}));o.Consumer,o.Provider;function a(t,e){var r=(0,n.useContext)(o).prefixes;return t||r[e]||e}},5987:function(t,e,r){"use strict";r.d(e,{Z:function(){return o}});var n=r(3366);function o(t,e){if(null==t)return{};var r,o,a=(0,n.Z)(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)r=i[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}},885:function(t,e,r){"use strict";r.d(e,{Z:function(){return o}});var n=r(181);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a=[],i=!0,l=!1;try{for(r=r.call(t);!(i=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(s){l=!0,o=s}finally{try{i||null==r.return||r.return()}finally{if(l)throw o}}return a}}(t,e)||(0,n.Z)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=463.b7102f69.chunk.js.map