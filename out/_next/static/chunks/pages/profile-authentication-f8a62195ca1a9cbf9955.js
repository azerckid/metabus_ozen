(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8740],{2167:function(r,o,t){"use strict";var s=t(3848);o.default=void 0;var n,e=(n=t(7294))&&n.__esModule?n:{default:n},i=t(1063),a=t(4651),l=t(7426);var c={};function x(r,o,t,s){if(r&&i.isLocalURL(o)){r.prefetch(o,t,s).catch((function(r){0}));var n=s&&"undefined"!==typeof s.locale?s.locale:r&&r.locale;c[o+"%"+t+(n?"%"+n:"")]=!0}}var m=function(r){var o,t=!1!==r.prefetch,n=a.useRouter(),m=e.default.useMemo((function(){var o=i.resolveHref(n,r.href,!0),t=s(o,2),e=t[0],a=t[1];return{href:e,as:r.as?i.resolveHref(n,r.as):a||e}}),[n,r.href,r.as]),f=m.href,p=m.as,d=r.children,j=r.replace,u=r.shallow,g=r.scroll,h=r.locale;"string"===typeof d&&(d=e.default.createElement("a",null,d));var b=(o=e.default.Children.only(d))&&"object"===typeof o&&o.ref,v=l.useIntersection({rootMargin:"200px"}),w=s(v,2),k=w[0],y=w[1],N=e.default.useCallback((function(r){k(r),b&&("function"===typeof b?b(r):"object"===typeof b&&(b.current=r))}),[b,k]);e.default.useEffect((function(){var r=y&&t&&i.isLocalURL(f),o="undefined"!==typeof h?h:n&&n.locale,s=c[f+"%"+p+(o?"%"+o:"")];r&&!s&&x(n,f,p,{locale:o})}),[p,f,y,h,t,n]);var E={ref:N,onClick:function(r){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(r),r.defaultPrevented||function(r,o,t,s,n,e,a,l){("A"!==r.currentTarget.nodeName||!function(r){var o=r.currentTarget.target;return o&&"_self"!==o||r.metaKey||r.ctrlKey||r.shiftKey||r.altKey||r.nativeEvent&&2===r.nativeEvent.which}(r)&&i.isLocalURL(t))&&(r.preventDefault(),null==a&&s.indexOf("#")>=0&&(a=!1),o[n?"replace":"push"](t,s,{shallow:e,locale:l,scroll:a}))}(r,n,f,p,j,u,g,h)},onMouseEnter:function(r){i.isLocalURL(f)&&(o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(r),x(n,f,p,{priority:!0}))}};if(r.passHref||"a"===o.type&&!("href"in o.props)){var z="undefined"!==typeof h?h:n&&n.locale,_=n&&n.isLocaleDomain&&i.getDomainLocale(p,z,n&&n.locales,n&&n.domainLocales);E.href=_||i.addBasePath(i.addLocale(p,z,n&&n.defaultLocale))}return e.default.cloneElement(o,E)};o.default=m},7426:function(r,o,t){"use strict";var s=t(3848);Object.defineProperty(o,"__esModule",{value:!0}),o.useIntersection=function(r){var o=r.rootMargin,t=r.disabled||!i,l=n.useRef(),c=n.useState(!1),x=s(c,2),m=x[0],f=x[1],p=n.useCallback((function(r){l.current&&(l.current(),l.current=void 0),t||m||r&&r.tagName&&(l.current=function(r,o,t){var s=function(r){var o=r.rootMargin||"",t=a.get(o);if(t)return t;var s=new Map,n=new IntersectionObserver((function(r){r.forEach((function(r){var o=s.get(r.target),t=r.isIntersecting||r.intersectionRatio>0;o&&t&&o(t)}))}),r);return a.set(o,t={id:o,observer:n,elements:s}),t}(t),n=s.id,e=s.observer,i=s.elements;return i.set(r,o),e.observe(r),function(){i.delete(r),e.unobserve(r),0===i.size&&(e.disconnect(),a.delete(n))}}(r,(function(r){return r&&f(r)}),{rootMargin:o}))}),[t,o,m]);return n.useEffect((function(){if(!i&&!m){var r=e.requestIdleCallback((function(){return f(!0)}));return function(){return e.cancelIdleCallback(r)}}}),[m]),[p,m]};var n=t(7294),e=t(3447),i="undefined"!==typeof IntersectionObserver;var a=new Map},6582:function(r,o,t){"use strict";t.r(o),t.d(o,{default:function(){return x}});t(7294);var s=t(6478),n=t(7251),e=t(1646),i=t(5988),a=t(5893),l=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"jsx-2182867686 login-form",children:[(0,a.jsx)("h2",{className:"jsx-2182867686",children:"Login"}),(0,a.jsxs)("form",{className:"jsx-2182867686",children:[(0,a.jsxs)("div",{className:"jsx-2182867686 form-group",children:[(0,a.jsx)("label",{className:"jsx-2182867686",children:"Username"}),(0,a.jsx)("input",{type:"text",placeholder:"Username",className:"jsx-2182867686 form-control"})]}),(0,a.jsxs)("div",{className:"jsx-2182867686 form-group",children:[(0,a.jsx)("label",{className:"jsx-2182867686",children:"Email or Phone"}),(0,a.jsx)("input",{type:"text",placeholder:"Email or phone",className:"jsx-2182867686 form-control"})]}),(0,a.jsxs)("div",{className:"jsx-2182867686 form-group",children:[(0,a.jsx)("label",{className:"jsx-2182867686",children:"Password"}),(0,a.jsx)("input",{type:"text",placeholder:"Password",className:"jsx-2182867686 form-control"})]}),(0,a.jsxs)("div",{className:"jsx-2182867686 row align-items-center",children:[(0,a.jsx)("div",{className:"jsx-2182867686 col-lg-6 col-md-6 col-sm-6",children:(0,a.jsxs)("div",{className:"jsx-2182867686 form-check",children:[(0,a.jsx)("input",{type:"checkbox",id:"checkme",className:"jsx-2182867686 form-check-input"}),(0,a.jsx)("label",{htmlFor:"checkme",className:"jsx-2182867686 form-check-label",children:"Remember me"})]})}),(0,a.jsx)("div",{className:"jsx-2182867686 col-lg-6 col-md-6 col-sm-6 lost-your-password",children:(0,a.jsx)("a",{href:"#",className:"jsx-2182867686 lost-your-password",children:"Forgot your password?"})})]}),(0,a.jsxs)("button",{type:"submit",className:"jsx-2182867686 default-btn",children:["Login ",(0,a.jsx)("span",{className:"jsx-2182867686"})]})]})]}),(0,a.jsx)(i.default,{id:"2182867686",children:[".login-form.jsx-2182867686{padding:35px;border-radius:5px;background-color:var(--white-color);-webkit-box-shadow:0 0 1.25rem rgba(108,118,134,0.1);box-shadow:0 0 1.25rem rgba(108,118,134,0.1);max-width:650px;margin:auto;}",".login-form.jsx-2182867686 h2.jsx-2182867686{font-size:30px;margin-bottom:20px;}",".login-form.jsx-2182867686 form.jsx-2182867686 .form-group.jsx-2182867686{margin-bottom:25px;}",".login-form.jsx-2182867686 form.jsx-2182867686 .form-group.jsx-2182867686 label.jsx-2182867686{display:block;margin-bottom:5px;color:var(--paragraph-color);font-weight:500;font-size:var(--font-size);}",".login-form.jsx-2182867686 form.jsx-2182867686 .form-group.jsx-2182867686 .form-control.jsx-2182867686{height:60px;padding:20px;line-height:initial;color:var(--black-color);background-color:transparent;border:1px solid #eeeeee;border-radius:5px;-webkit-box-shadow:unset;box-shadow:unset;-webkit-transition:var(--transition);-webkit-transition:var(--transition);transition:var(--transition);font-size:15px;font-weight:500;}",".login-form.jsx-2182867686 form.jsx-2182867686 .form-group.jsx-2182867686 .form-control.jsx-2182867686:focus{border:1px solid var(--main-color);background-color:transparent;}",".login-form.jsx-2182867686 form.jsx-2182867686 .form-group.jsx-2182867686 .form-control.jsx-2182867686:focus.jsx-2182867686::-webkit-input-placeholder{color:transparent;-webkit-transition:var(--transition);-webkit-transition:var(--transition);transition:var(--transition);}",".login-form.jsx-2182867686 form.jsx-2182867686 .form-group.jsx-2182867686 .form-control.jsx-2182867686:focus.jsx-2182867686:-ms-input-placeholder{color:transparent;-webkit-transition:var(--transition);-webkit-transition:var(--transition);transition:var(--transition);}",".login-form.jsx-2182867686 form.jsx-2182867686 .form-group.jsx-2182867686 .form-control.jsx-2182867686:focus.jsx-2182867686::-ms-input-placeholder{color:transparent;-webkit-transition:var(--transition);-webkit-transition:var(--transition);transition:var(--transition);}",".login-form.jsx-2182867686 form.jsx-2182867686 .form-group.jsx-2182867686 .form-control.jsx-2182867686:focus.jsx-2182867686::-webkit-input-placeholder{color:transparent;-webkit-transition:var(--transition);-webkit-transition:var(--transition);transition:var(--transition);}",".login-form.jsx-2182867686 form.jsx-2182867686 .form-group.jsx-2182867686 .form-control.jsx-2182867686:focus.jsx-2182867686::-moz-placeholder{color:transparent;-webkit-transition:var(--transition);-webkit-transition:var(--transition);transition:var(--transition);}",".login-form.jsx-2182867686 form.jsx-2182867686 .form-group.jsx-2182867686 .form-control.jsx-2182867686:focus.jsx-2182867686:-ms-input-placeholder{color:transparent;-webkit-transition:var(--transition);-webkit-transition:var(--transition);transition:var(--transition);}",".login-form.jsx-2182867686 form.jsx-2182867686 .form-group.jsx-2182867686 .form-control.jsx-2182867686:focus.jsx-2182867686::placeholder{color:transparent;-webkit-transition:var(--transition);-webkit-transition:var(--transition);transition:var(--transition);}",".login-form.jsx-2182867686 form.jsx-2182867686 .lost-your-password.jsx-2182867686{text-align:right;}",".login-form.jsx-2182867686 form.jsx-2182867686 .lost-your-password.jsx-2182867686 a.jsx-2182867686{display:inline-block;position:relative;font-weight:500;font-size:15px;color:var(--paragraph-color);}",".login-form.jsx-2182867686 form.jsx-2182867686 .lost-your-password.jsx-2182867686 a.jsx-2182867686::before{width:100%;height:1px;position:absolute;left:0;bottom:0;content:'';-webkit-transition:var(--transition);-webkit-transition:var(--transition);transition:var(--transition);background-color:#eeeeee;}",".login-form.jsx-2182867686 form.jsx-2182867686 .lost-your-password.jsx-2182867686 a.jsx-2182867686::after{width:0;height:1px;position:absolute;left:0;-webkit-transition:var(--transition);-webkit-transition:var(--transition);transition:var(--transition);bottom:0;content:'';background-color:var(--main-color);}",".login-form.jsx-2182867686 form.jsx-2182867686 .lost-your-password.jsx-2182867686 a.jsx-2182867686:hover.jsx-2182867686::before{width:0;}",".login-form.jsx-2182867686 form.jsx-2182867686 .lost-your-password.jsx-2182867686 a.jsx-2182867686:hover.jsx-2182867686::after{width:100%;}",".login-form.jsx-2182867686 form.jsx-2182867686 .default-btn.jsx-2182867686{margin-top:25px;padding:15px 35px;width:100%;}","@media only screen and (max-width:767px){.login-form.jsx-2182867686{padding:25px;}.login-form.jsx-2182867686 h2.jsx-2182867686{font-size:25px;margin-bottom:20px;}.login-form.jsx-2182867686 form.jsx-2182867686 .lost-your-password.jsx-2182867686{text-align:left;margin-top:5px;}}","@media only screen and (min-width:576px) and (max-width:767px){.login-form.jsx-2182867686 form.jsx-2182867686 .lost-your-password.jsx-2182867686{text-align:right;margin-top:0;}}","@media only screen and (min-width :768px) and (max-width :991px){.login-form.jsx-2182867686{padding:25px;}.login-form.jsx-2182867686 h2.jsx-2182867686{font-size:25px;margin-bottom:20px;}}","@media only screen and (min-width :992px) and (max-width :1199px){}"]})]})},c=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"jsx-2325625249 register-form",children:[(0,a.jsx)("h2",{className:"jsx-2325625249",children:"Register"}),(0,a.jsxs)("form",{className:"jsx-2325625249",children:[(0,a.jsxs)("div",{className:"jsx-2325625249 form-group",children:[(0,a.jsx)("label",{className:"jsx-2325625249",children:"Username"}),(0,a.jsx)("input",{type:"text",placeholder:"Username",className:"jsx-2325625249 form-control"})]}),(0,a.jsxs)("div",{className:"jsx-2325625249 form-group",children:[(0,a.jsx)("label",{className:"jsx-2325625249",children:"Email or Phone"}),(0,a.jsx)("input",{type:"text",placeholder:"Email or phone",className:"jsx-2325625249 form-control"})]}),(0,a.jsxs)("div",{className:"jsx-2325625249 form-group",children:[(0,a.jsx)("label",{className:"jsx-2325625249",children:"Password"}),(0,a.jsx)("input",{type:"text",placeholder:"Password",className:"jsx-2325625249 form-control"})]}),(0,a.jsx)("p",{className:"jsx-2325625249 description",children:'The password should be at least eight characters long. To make it stronger, use upper and lower case letters, numbers, and symbols like ! " ? $ % ^ & )'}),(0,a.jsxs)("button",{type:"submit",className:"jsx-2325625249 default-btn",children:["Register Now ",(0,a.jsx)("span",{className:"jsx-2325625249"})]})]})]}),(0,a.jsx)(i.default,{id:"2325625249",children:[".register-form.jsx-2325625249{padding:35px;border-radius:5px;background-color:var(--white-color);-webkit-box-shadow:0 0 1.25rem rgba(108,118,134,0.1);box-shadow:0 0 1.25rem rgba(108,118,134,0.1);max-width:650px;margin:auto;}",".register-form.jsx-2325625249 h2.jsx-2325625249{font-size:30px;margin-bottom:20px;}",".register-form.jsx-2325625249 form.jsx-2325625249 .form-group.jsx-2325625249{margin-bottom:25px;}",".register-form.jsx-2325625249 form.jsx-2325625249 .form-group.jsx-2325625249 label.jsx-2325625249{display:block;margin-bottom:5px;color:var(--paragraph-color);font-weight:500;font-size:var(--font-size);}",".register-form.jsx-2325625249 form.jsx-2325625249 .form-group.jsx-2325625249 .form-control.jsx-2325625249{height:60px;padding:20px;line-height:initial;color:var(--black-color);background-color:transparent;border:1px solid #eeeeee;border-radius:5px;-webkit-box-shadow:unset;box-shadow:unset;-webkit-transition:var(--transition);-webkit-transition:var(--transition);transition:var(--transition);font-size:15px;font-weight:500;}",".register-form.jsx-2325625249 form.jsx-2325625249 .form-group.jsx-2325625249 .form-control.jsx-2325625249:focus{border:1px solid var(--main-color);background-color:transparent;}",".register-form.jsx-2325625249 form.jsx-2325625249 .form-group.jsx-2325625249 .form-control.jsx-2325625249:focus.jsx-2325625249::-webkit-input-placeholder{color:transparent;-webkit-transition:var(--transition);-webkit-transition:var(--transition);transition:var(--transition);}",".register-form.jsx-2325625249 form.jsx-2325625249 .form-group.jsx-2325625249 .form-control.jsx-2325625249:focus.jsx-2325625249:-ms-input-placeholder{color:transparent;-webkit-transition:var(--transition);-webkit-transition:var(--transition);transition:var(--transition);}",".register-form.jsx-2325625249 form.jsx-2325625249 .form-group.jsx-2325625249 .form-control.jsx-2325625249:focus.jsx-2325625249::-ms-input-placeholder{color:transparent;-webkit-transition:var(--transition);-webkit-transition:var(--transition);transition:var(--transition);}",".register-form.jsx-2325625249 form.jsx-2325625249 .form-group.jsx-2325625249 .form-control.jsx-2325625249:focus.jsx-2325625249::-webkit-input-placeholder{color:transparent;-webkit-transition:var(--transition);-webkit-transition:var(--transition);transition:var(--transition);}",".register-form.jsx-2325625249 form.jsx-2325625249 .form-group.jsx-2325625249 .form-control.jsx-2325625249:focus.jsx-2325625249::-moz-placeholder{color:transparent;-webkit-transition:var(--transition);-webkit-transition:var(--transition);transition:var(--transition);}",".register-form.jsx-2325625249 form.jsx-2325625249 .form-group.jsx-2325625249 .form-control.jsx-2325625249:focus.jsx-2325625249:-ms-input-placeholder{color:transparent;-webkit-transition:var(--transition);-webkit-transition:var(--transition);transition:var(--transition);}",".register-form.jsx-2325625249 form.jsx-2325625249 .form-group.jsx-2325625249 .form-control.jsx-2325625249:focus.jsx-2325625249::placeholder{color:transparent;-webkit-transition:var(--transition);-webkit-transition:var(--transition);transition:var(--transition);}",".register-form.jsx-2325625249 form.jsx-2325625249 .description.jsx-2325625249{font-style:italic;font-size:14px;margin-top:-5px;margin-bottom:15px;}",".register-form.jsx-2325625249 form.jsx-2325625249 .default-btn.jsx-2325625249{margin-top:10px;padding:15px 35px;width:100%;}","@media only screen and (max-width:767px){.register-form.jsx-2325625249{padding:25px;margin-top:35px;}.register-form.jsx-2325625249 h2.jsx-2325625249{font-size:25px;margin-bottom:20px;}}","@media only screen and (min-width :768px) and (max-width :991px){.register-form.jsx-2325625249{padding:25px;margin-top:35px;}.register-form.jsx-2325625249 h2.jsx-2325625249{font-size:25px;margin-bottom:20px;}}","@media only screen and (min-width :992px) and (max-width :1199px){}"]})]})},x=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.Z,{}),(0,a.jsx)(n.Z,{pageTitle:"Welcome to Ozen",homePageUrl:"/",homePageText:"Home",activePageText:"Welcome to Ozen"}),(0,a.jsx)("div",{className:"profile-authentication-area ptb-100",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-lg-6 col-md-12",children:(0,a.jsx)(l,{})}),(0,a.jsx)("div",{className:"col-lg-6 col-md-12",children:(0,a.jsx)(c,{})})]})})}),(0,a.jsx)(e.Z,{})]})}},3769:function(r,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile-authentication",function(){return t(6582)}])},1664:function(r,o,t){r.exports=t(2167)},1163:function(r,o,t){r.exports=t(4651)},219:function(r,o,t){"use strict";function s(r,o){if(null==r)return{};var t,s,n=function(r,o){if(null==r)return{};var t,s,n={},e=Object.keys(r);for(s=0;s<e.length;s++)t=e[s],o.indexOf(t)>=0||(n[t]=r[t]);return n}(r,o);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);for(s=0;s<e.length;s++)t=e[s],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(n[t]=r[t])}return n}t.d(o,{Z:function(){return s}})}},function(r){r.O(0,[2617,8141,9774,2888,179],(function(){return o=3769,r(r.s=o);var o}));var o=r.O();_N_E=o}]);