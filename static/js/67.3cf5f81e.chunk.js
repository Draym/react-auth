/*! For license information please see 67.3cf5f81e.chunk.js.LICENSE.txt */
(self.webpackChunkreact_auth=self.webpackChunkreact_auth||[]).push([[67],{2067:function(t,r,n){"use strict";n.r(r);var e=n(5671),a=n(3144),i=n(7326),o=n(136),u=n(8347),s=n(2791),c=n(9271),l=n(3360),f=n(184),d=function(t){(0,o.Z)(n,t);var r=(0,u.Z)(n);function n(t){var a;return(0,e.Z)(this,n),(a=r.call(this,t)).backToMain=function(){a.props.history.push("/")},a.backToMain=a.backToMain.bind((0,i.Z)(a)),a}return(0,a.Z)(n,[{key:"render",value:function(){return(0,f.jsx)("div",{className:"content",children:(0,f.jsxs)("div",{className:"container-fluid",children:[(0,f.jsx)("h2",{children:"oups you are lost"}),(0,f.jsx)(l.Z,{variant:"info",onClick:this.backToMain,children:"Bring me back"})]})})}}]),n}(s.Component);r.default=(0,c.EN)(d)},5341:function(t,r,n){"use strict";n.d(r,{FT:function(){return u}});var e=n(885),a=n(2791),i=n(184),o=["as","disabled"];function u(t){var r=t.tagName,n=t.disabled,e=t.href,a=t.target,i=t.rel,o=t.onClick,u=t.tabIndex,s=void 0===u?0:u,c=t.type;r||(r=null!=e||null!=a||null!=i?"a":"button");var l={tagName:r};if("button"===r)return[{type:c||"button",disabled:n},l];var f=function(t){(n||"a"===r&&function(t){return!t||"#"===t.trim()}(e))&&t.preventDefault(),n?t.stopPropagation():null==o||o(t)};return"a"===r&&(e||(e="#"),n&&(e=void 0)),[{role:"button",disabled:void 0,tabIndex:n?void 0:s,href:e,target:"a"===r?a:void 0,"aria-disabled":n||void 0,rel:"a"===r?i:void 0,onClick:f,onKeyDown:function(t){" "===t.key&&(t.preventDefault(),f(t))}},l]}var s=a.forwardRef((function(t,r){var n=t.as,a=t.disabled,s=function(t,r){if(null==t)return{};var n,e,a={},i=Object.keys(t);for(e=0;e<i.length;e++)n=i[e],r.indexOf(n)>=0||(a[n]=t[n]);return a}(t,o),c=u(Object.assign({tagName:n,disabled:a},s)),l=(0,e.Z)(c,2),f=l[0],d=l[1].tagName;return(0,i.jsx)(d,Object.assign({},s,f,{ref:r}))}));s.displayName="Button"},1694:function(t,r){var n;!function(){"use strict";var e={}.hasOwnProperty;function a(){for(var t=[],r=0;r<arguments.length;r++){var n=arguments[r];if(n){var i=typeof n;if("string"===i||"number"===i)t.push(n);else if(Array.isArray(n)){if(n.length){var o=a.apply(null,n);o&&t.push(o)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var u in n)e.call(n,u)&&n[u]&&t.push(u);else t.push(n.toString())}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):void 0===(n=function(){return a}.apply(r,[]))||(t.exports=n)}()},3360:function(t,r,n){"use strict";var e=n(1413),a=n(885),i=n(5987),o=n(1694),u=n.n(o),s=n(2791),c=n(5341),l=n(162),f=n(184),d=["as","bsPrefix","variant","size","active","className"],v=s.forwardRef((function(t,r){var n=t.as,o=t.bsPrefix,s=t.variant,v=t.size,b=t.active,p=t.className,y=(0,i.Z)(t,d),h=(0,l.vE)(o,"btn"),m=(0,c.FT)((0,e.Z)({tagName:n},y)),g=(0,a.Z)(m,2),x=g[0],Z=g[1].tagName;return(0,f.jsx)(Z,(0,e.Z)((0,e.Z)((0,e.Z)({},x),y),{},{ref:r,className:u()(p,h,b&&"active",s&&"".concat(h,"-").concat(s),v&&"".concat(h,"-").concat(v),y.href&&y.disabled&&"disabled")}))}));v.displayName="Button",v.defaultProps={variant:"primary",active:!1,disabled:!1},r.Z=v},162:function(t,r,n){"use strict";n.d(r,{vE:function(){return i}});var e=n(2791),a=(n(184),e.createContext({prefixes:{}}));a.Consumer,a.Provider;function i(t,r){var n=(0,e.useContext)(a).prefixes;return t||n[r]||r}},5987:function(t,r,n){"use strict";n.d(r,{Z:function(){return a}});var e=n(3366);function a(t,r){if(null==t)return{};var n,a,i=(0,e.Z)(t,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}},885:function(t,r,n){"use strict";n.d(r,{Z:function(){return a}});var e=n(181);function a(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var e,a,i=[],o=!0,u=!1;try{for(n=n.call(t);!(o=(e=n.next()).done)&&(i.push(e.value),!r||i.length!==r);o=!0);}catch(s){u=!0,a=s}finally{try{o||null==n.return||n.return()}finally{if(u)throw a}}return i}}(t,r)||(0,e.Z)(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=67.3cf5f81e.chunk.js.map