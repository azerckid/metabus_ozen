(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9939],{2167:function(e,n,t){"use strict";var r=t(3848);n.default=void 0;var o,a=(o=t(7294))&&o.__esModule?o:{default:o},c=t(1063),u=t(4651),i=t(7426);var l={};function f(e,n,t,r){if(e&&c.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var s=function(e){var n,t=!1!==e.prefetch,o=u.useRouter(),s=a.default.useMemo((function(){var n=c.resolveHref(o,e.href,!0),t=r(n,2),a=t[0],u=t[1];return{href:a,as:e.as?c.resolveHref(o,e.as):u||a}}),[o,e.href,e.as]),d=s.href,p=s.as,v=e.children,h=e.replace,g=e.shallow,y=e.scroll,b=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var m=(n=a.default.Children.only(v))&&"object"===typeof n&&n.ref,_=i.useIntersection({rootMargin:"200px"}),E=r(_,2),x=E[0],j=E[1],w=a.default.useCallback((function(e){x(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,x]);a.default.useEffect((function(){var e=j&&t&&c.isLocalURL(d),n="undefined"!==typeof b?b:o&&o.locale,r=l[d+"%"+p+(n?"%"+n:"")];e&&!r&&f(o,d,p,{locale:n})}),[p,d,j,b,t,o]);var O={ref:w,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,u,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(t))&&(e.preventDefault(),null==u&&r.indexOf("#")>=0&&(u=!1),n[o?"replace":"push"](t,r,{shallow:a,locale:i,scroll:u}))}(e,o,d,p,h,g,y,b)},onMouseEnter:function(e){c.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),f(o,d,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var L="undefined"!==typeof b?b:o&&o.locale,k=o&&o.isLocaleDomain&&c.getDomainLocale(p,L,o&&o.locales,o&&o.domainLocales);O.href=k||c.addBasePath(c.addLocale(p,L,o&&o.defaultLocale))}return a.default.cloneElement(n,O)};n.default=s},7426:function(e,n,t){"use strict";var r=t(3848);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,i=o.useRef(),l=o.useState(!1),f=r(l,2),s=f[0],d=f[1],p=o.useCallback((function(e){i.current&&(i.current(),i.current=void 0),t||s||e&&e.tagName&&(i.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=u.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return u.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,c=r.elements;return c.set(e,n),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,s]);return o.useEffect((function(){if(!c&&!s){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[s]),[p,s]};var o=t(7294),a=t(3447),c="undefined"!==typeof IntersectionObserver;var u=new Map},8703:function(e,n,t){"use strict";t.r(n);t(7294);var r=t(6478),o=t(7251),a=(t(1664),t(1646)),c=t(4276),u=t(2020),i=t(5893);n.default=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Z,{}),(0,i.jsx)(o.Z,{pageTitle:"Pricing",homePageUrl:"/",homePageText:"Home",activePageText:"Pricing"}),(0,i.jsx)(c.Z,{}),(0,i.jsx)("div",{className:"ptb-100",children:(0,i.jsx)(u.Z,{})}),(0,i.jsx)(a.Z,{})]})}},9650:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pricing",function(){return t(8703)}])},1664:function(e,n,t){e.exports=t(2167)},1163:function(e,n,t){e.exports=t(4651)},219:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}t.d(n,{Z:function(){return r}})}},function(e){e.O(0,[9774,117,2617,8141,7687,2888,179],(function(){return n=9650,e(e.s=n);var n}));var n=e.O();_N_E=n}]);