(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2167:function(e,s,a){"use strict";var i=a(3848);s.default=void 0;var t,n=(t=a(7294))&&t.__esModule?t:{default:t},o=a(1063),r=a(4651),c=a(7426);var l={};function x(e,s,a,i){if(e&&o.isLocalURL(s)){e.prefetch(s,a,i).catch((function(e){0}));var t=i&&"undefined"!==typeof i.locale?i.locale:e&&e.locale;l[s+"%"+a+(t?"%"+t:"")]=!0}}var m=function(e){var s,a=!1!==e.prefetch,t=r.useRouter(),m=n.default.useMemo((function(){var s=o.resolveHref(t,e.href,!0),a=i(s,2),n=a[0],r=a[1];return{href:n,as:e.as?o.resolveHref(t,e.as):r||n}}),[t,e.href,e.as]),d=m.href,f=m.as,j=e.children,u=e.replace,p=e.shallow,g=e.scroll,h=e.locale;"string"===typeof j&&(j=n.default.createElement("a",null,j));var v=(s=n.default.Children.only(j))&&"object"===typeof s&&s.ref,b=c.useIntersection({rootMargin:"200px"}),w=i(b,2),N=w[0],y=w[1],k=n.default.useCallback((function(e){N(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,N]);n.default.useEffect((function(){var e=y&&a&&o.isLocalURL(d),s="undefined"!==typeof h?h:t&&t.locale,i=l[d+"%"+f+(s?"%"+s:"")];e&&!i&&x(t,d,f,{locale:s})}),[f,d,y,h,a,t]);var z={ref:k,onClick:function(e){s.props&&"function"===typeof s.props.onClick&&s.props.onClick(e),e.defaultPrevented||function(e,s,a,i,t,n,r,c){("A"!==e.currentTarget.nodeName||!function(e){var s=e.currentTarget.target;return s&&"_self"!==s||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(a))&&(e.preventDefault(),null==r&&i.indexOf("#")>=0&&(r=!1),s[t?"replace":"push"](a,i,{shallow:n,locale:c,scroll:r}))}(e,t,d,f,u,p,g,h)},onMouseEnter:function(e){o.isLocalURL(d)&&(s.props&&"function"===typeof s.props.onMouseEnter&&s.props.onMouseEnter(e),x(t,d,f,{priority:!0}))}};if(e.passHref||"a"===s.type&&!("href"in s.props)){var _="undefined"!==typeof h?h:t&&t.locale,C=t&&t.isLocaleDomain&&o.getDomainLocale(f,_,t&&t.locales,t&&t.domainLocales);z.href=C||o.addBasePath(o.addLocale(f,_,t&&t.defaultLocale))}return n.default.cloneElement(s,z)};s.default=m},7426:function(e,s,a){"use strict";var i=a(3848);Object.defineProperty(s,"__esModule",{value:!0}),s.useIntersection=function(e){var s=e.rootMargin,a=e.disabled||!o,c=t.useRef(),l=t.useState(!1),x=i(l,2),m=x[0],d=x[1],f=t.useCallback((function(e){c.current&&(c.current(),c.current=void 0),a||m||e&&e.tagName&&(c.current=function(e,s,a){var i=function(e){var s=e.rootMargin||"",a=r.get(s);if(a)return a;var i=new Map,t=new IntersectionObserver((function(e){e.forEach((function(e){var s=i.get(e.target),a=e.isIntersecting||e.intersectionRatio>0;s&&a&&s(a)}))}),e);return r.set(s,a={id:s,observer:t,elements:i}),a}(a),t=i.id,n=i.observer,o=i.elements;return o.set(e,s),n.observe(e),function(){o.delete(e),n.unobserve(e),0===o.size&&(n.disconnect(),r.delete(t))}}(e,(function(e){return e&&d(e)}),{rootMargin:s}))}),[a,s,m]);return t.useEffect((function(){if(!o&&!m){var e=n.requestIdleCallback((function(){return d(!0)}));return function(){return n.cancelIdleCallback(e)}}}),[m]),[f,m]};var t=a(7294),n=a(3447),o="undefined"!==typeof IntersectionObserver;var r=new Map},7456:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return l}});var i=a(5988),t=(a(7294),a(6478)),n=a(7251),o=a(5893),r=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"jsx-3306431471 case-details-information",children:[(0,o.jsxs)("ul",{className:"jsx-3306431471 information-list",children:[(0,o.jsxs)("li",{className:"jsx-3306431471",children:[(0,o.jsx)("span",{className:"jsx-3306431471",children:"Share On :"}),(0,o.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",className:"jsx-3306431471",children:(0,o.jsx)("i",{className:"jsx-3306431471 ri-facebook-fill"})}),(0,o.jsx)("a",{href:"https://twitter.com/",target:"_blank",className:"jsx-3306431471",children:(0,o.jsx)("i",{className:"jsx-3306431471 ri-twitter-fill"})}),(0,o.jsx)("a",{href:"https://www.linkedin.com/",target:"_blank",className:"jsx-3306431471",children:(0,o.jsx)("i",{className:"jsx-3306431471 ri-linkedin-fill"})}),(0,o.jsx)("a",{href:"https://www.messenger.com/",target:"_blank",className:"jsx-3306431471",children:(0,o.jsx)("i",{className:"jsx-3306431471 ri-messenger-fill"})})]}),(0,o.jsxs)("li",{className:"jsx-3306431471",children:[(0,o.jsx)("span",{className:"jsx-3306431471",children:"Category :"})," Finance & Management"]}),(0,o.jsxs)("li",{className:"jsx-3306431471",children:[(0,o.jsx)("span",{className:"jsx-3306431471",children:"Client :"})," ",(0,o.jsx)("a",{href:"https://themeforest.net/",target:"_blank",className:"jsx-3306431471",children:"ThemeForest.com"})]}),(0,o.jsxs)("li",{className:"jsx-3306431471",children:[(0,o.jsx)("span",{className:"jsx-3306431471",children:"Website :"})," ",(0,o.jsx)("a",{href:"https://envytheme.com/",target:"_blank",className:"jsx-3306431471",children:"EnvyTheme.com"})]}),(0,o.jsxs)("li",{className:"jsx-3306431471",children:[(0,o.jsx)("span",{className:"jsx-3306431471",children:"Date :"})," 24 March 2021"]})]}),(0,o.jsxs)("div",{className:"jsx-3306431471 case-contact-info",children:[(0,o.jsx)("h3",{className:"jsx-3306431471",children:"Let's Make Something Amazing Together!"}),(0,o.jsxs)("div",{className:"jsx-3306431471 info-box-one",children:[(0,o.jsx)("i",{className:"jsx-3306431471 ri-customer-service-line"}),(0,o.jsx)("a",{href:"tel:3128959800",className:"jsx-3306431471",children:"(312) 895-9800"})]}),(0,o.jsxs)("div",{className:"jsx-3306431471 info-box-two",children:[(0,o.jsx)("i",{className:"jsx-3306431471 ri-earth-line"}),(0,o.jsx)("a",{href:"mailto:hello.me@ozen.com",className:"jsx-3306431471",children:"hello.me@ozen.com"})]})]})]}),(0,o.jsx)(i.default,{id:"3306431471",children:[".case-details-information.jsx-3306431471 .information-list.jsx-3306431471{padding-left:0;margin-bottom:0;}",".case-details-information.jsx-3306431471 .information-list.jsx-3306431471 li.jsx-3306431471{list-style-type:none;font-size:15px;font-weight:400;color:#79798D;margin-bottom:20px;}",".case-details-information.jsx-3306431471 .information-list.jsx-3306431471 li.jsx-3306431471:last-child{margin-bottom:0;}",".case-details-information.jsx-3306431471 .information-list.jsx-3306431471 li.jsx-3306431471 span.jsx-3306431471{font-size:var(--font-size);font-weight:500;color:var(--paragraph-color);margin-right:15px;}",".case-details-information.jsx-3306431471 .information-list.jsx-3306431471 li.jsx-3306431471 a.jsx-3306431471{color:#79798D;margin-right:5px;}",".case-details-information.jsx-3306431471 .information-list.jsx-3306431471 li.jsx-3306431471 a.jsx-3306431471:last-child{margin-right:0;}",".case-details-information.jsx-3306431471 .information-list.jsx-3306431471 li.jsx-3306431471 a.jsx-3306431471:hover{color:var(--main-color);-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;}",".case-details-information.jsx-3306431471 .information-list.jsx-3306431471 li.jsx-3306431471 a.jsx-3306431471 i.jsx-3306431471{display:inline-block;height:30px;width:30px;line-height:30px;background-color:#eeeeee;color:var(--main-color);border-radius:50px;text-align:center;font-size:13px;-webkit-transition:var(--transition);-webkit-transition:var(--transition);transition:var(--transition);}",".case-details-information.jsx-3306431471 .information-list.jsx-3306431471 li.jsx-3306431471 a.jsx-3306431471 i.jsx-3306431471:hover{background-color:var(--main-color);color:var(--white-color);-webkit-transform:translateY(-5px);-webkit-transform:translateY(-5px);-ms-transform:translateY(-5px);transform:translateY(-5px);}",".case-details-information.jsx-3306431471 .case-contact-info.jsx-3306431471{background-color:#F4F8FC;padding:40px 35px;margin-top:30px;text-align:center;}",".case-details-information.jsx-3306431471 .case-contact-info.jsx-3306431471 h3.jsx-3306431471{font-size:22px;font-weight:400;margin-bottom:0;line-height:1.5;}",".case-details-information.jsx-3306431471 .case-contact-info.jsx-3306431471 .info-box-one.jsx-3306431471{background-color:var(--main-color);padding:30px;border-radius:5px;margin-top:25px;}",".case-details-information.jsx-3306431471 .case-contact-info.jsx-3306431471 .info-box-one.jsx-3306431471 i.jsx-3306431471{display:block;color:var(--white-color);font-size:30px;margin-bottom:15px;}",".case-details-information.jsx-3306431471 .case-contact-info.jsx-3306431471 .info-box-one.jsx-3306431471 a.jsx-3306431471{color:var(--white-color);font-size:var(--font-size);font-weight:500;}",".case-details-information.jsx-3306431471 .case-contact-info.jsx-3306431471 .info-box-two.jsx-3306431471{background-color:#36CC72;padding:30px;border-radius:5px;margin-top:25px;}",".case-details-information.jsx-3306431471 .case-contact-info.jsx-3306431471 .info-box-two.jsx-3306431471 i.jsx-3306431471{display:block;color:var(--white-color);font-size:30px;margin-bottom:15px;}",".case-details-information.jsx-3306431471 .case-contact-info.jsx-3306431471 .info-box-two.jsx-3306431471 a.jsx-3306431471{color:var(--white-color);font-size:var(--font-size);font-weight:500;}","@media only screen and (max-width:767px){.case-details-information.jsx-3306431471{margin-top:30px;}.case-details-information.jsx-3306431471 .information-list.jsx-3306431471{border:1px solid #eee;padding:10px 15px;}.case-details-information.jsx-3306431471 .information-list.jsx-3306431471 li.jsx-3306431471{font-size:14px;margin-bottom:15px;}}","@media only screen and (min-width :768px) and (max-width :991px){.case-details-information.jsx-3306431471{margin-top:30px;}.case-details-information.jsx-3306431471 .information-list.jsx-3306431471{border:1px solid #eee;padding:30px 35px;}.case-details-information.jsx-3306431471 .information-list.jsx-3306431471 li.jsx-3306431471{margin-bottom:20px;}}","@media only screen and (min-width :992px) and (max-width :1199px){.case-details-information.jsx-3306431471 .case-contact-info.jsx-3306431471{padding:25px 15px;}.case-details-information.jsx-3306431471 .information-list.jsx-3306431471 li.jsx-3306431471{font-size:14px;margin-bottom:10px;}.case-details-information.jsx-3306431471 .information-list.jsx-3306431471 li.jsx-3306431471 span.jsx-3306431471{margin-right:5px;}.case-details-information.jsx-3306431471 .case-contact-info.jsx-3306431471 .info-box-one.jsx-3306431471{padding:20px;}.case-details-information.jsx-3306431471 .case-contact-info.jsx-3306431471 .info-box-one.jsx-3306431471 a.jsx-3306431471{font-size:14px;}.case-details-information.jsx-3306431471 .case-contact-info.jsx-3306431471 .info-box-two.jsx-3306431471{padding:20px;}.case-details-information.jsx-3306431471 .case-contact-info.jsx-3306431471 .info-box-two.jsx-3306431471 a.jsx-3306431471{font-size:14px;}.case-details-information.jsx-3306431471 .information-list.jsx-3306431471 li.jsx-3306431471 a.jsx-3306431471 i.jsx-3306431471{height:28px;width:28px;line-height:28px;font-size:12px;}}"]})]})},c=a(1646),l=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.Z,{}),(0,o.jsx)(n.Z,{pageTitle:"Case Study Details",homePageUrl:"/",homePageText:"Home",activePageText:"Case Study Details"}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"jsx-4237619375 case-details-area ptb-100",children:(0,o.jsxs)("div",{className:"jsx-4237619375 container",children:[(0,o.jsx)("div",{className:"jsx-4237619375 case-details-image",children:(0,o.jsx)("img",{src:"/images/cases-details/cases-details-1.jpg",alt:"image",className:"jsx-4237619375"})}),(0,o.jsxs)("div",{className:"jsx-4237619375 row",children:[(0,o.jsxs)("div",{className:"jsx-4237619375 col-lg-9 col-md-12",children:[(0,o.jsxs)("div",{className:"jsx-4237619375 case-details-content",children:[(0,o.jsx)("h3",{className:"jsx-4237619375",children:"Design and Development for IT Startups"}),(0,o.jsx)("p",{className:"jsx-4237619375",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus elit bibendum adipiscing tincidunt mattis orci consequat egestas mattis. Convallis massa feugiat sapien urna egestas elit vitae, ipsum. In pulvinar urna, viverra quam habitasse blandit eget. Quis semper consectetur sed a purus id ac, auctor. Sem sed eleifend eu iaculis enim."}),(0,o.jsx)("p",{className:"jsx-4237619375",children:"Urna tellus, duis nec consectetur tempor venenatis risus volutpat. Sit sem ornare eget auctor amet vitae. Eu nulla facilisi posuere tellus massa dignissim. Ut amet viverra non amet enim at venenatis viverra mauris. Malesuada"}),(0,o.jsx)("br",{className:"jsx-4237619375"}),(0,o.jsx)("h3",{className:"jsx-4237619375",children:"Project Description"}),(0,o.jsx)("p",{className:"jsx-4237619375",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus elit bibendum adipiscing tincidunt mattis orci consequat egestas mattis. Convallis massa feugiat sapien urna egestas elit vitae, ipsum. In pulvinar urna, viverra quam habitasse blandit eget. Quis semper consectetur sed a purus id ac, auctor. Sem sed eleifend eu iaculis enim."}),(0,o.jsx)("p",{className:"jsx-4237619375",children:"Urna tellus, duis nec consectetur tempor venenatis risus volutpat. Sit sem ornare eget auctor amet vitae. Eu nulla facilisi posuere tellus massa dignissim. Ut amet viverra non amet enim at venenatis viverra mauris. Malesuada Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus elit bibendum adipiscing tincidunt mattis orci consequat egestas mattis. Convallis massa feugiat sapien urna egestas elit vitae, ipsum. In pulvinar urna, viverra quam habitasse blandit eget. Quis semper consectetur sed a purus id ac, auctor. Sem sed eleifend eu iaculis enim."}),(0,o.jsx)("p",{className:"jsx-4237619375",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus elit bibendum adipiscing tincidunt mattis orci consequat egestas mattis. Convallis massa feugiat sapien urna egestas elit vitae, ipsum. In pulvinar urna,"})]}),(0,o.jsx)("div",{className:"jsx-4237619375 case-details-overview-image",children:(0,o.jsx)("img",{src:"/images/cases-details/cases-details-2.jpg",alt:"image",className:"jsx-4237619375"})}),(0,o.jsx)("div",{className:"jsx-4237619375 case-details-overview-image",children:(0,o.jsx)("img",{src:"/images/cases-details/cases-details-3.jpg",alt:"image",className:"jsx-4237619375"})})]}),(0,o.jsx)("div",{className:"jsx-4237619375 col-lg-3 col-md-12",children:(0,o.jsx)(r,{})})]})]})}),(0,o.jsx)(i.default,{id:"4237619375",children:[".case-details-image.jsx-4237619375{text-align:center;margin-bottom:40px;}",".case-details-content.jsx-4237619375{margin-right:50px;}",".case-details-content.jsx-4237619375 h3.jsx-4237619375{font-size:28px;margin-bottom:15px;}",".case-details-content.jsx-4237619375 p.jsx-4237619375{font-size:15px;}",".case-details-overview-image.jsx-4237619375{margin-top:35px;}","@media only screen and (max-width:767px){.case-details-image.jsx-4237619375{margin-bottom:25px;}.case-details-content.jsx-4237619375{margin-right:0;}.case-details-content.jsx-4237619375 h3.jsx-4237619375{font-size:22px;}}","@media only screen and (min-width :768px) and (max-width :991px){.case-details-content.jsx-4237619375{margin-right:0;}}","@media only screen and (min-width :992px) and (max-width :1199px){.case-details-content.jsx-4237619375{margin-right:0;}}"]})]}),(0,o.jsx)(c.Z,{})]})}},7916:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/case-study-details",function(){return a(7456)}])},1664:function(e,s,a){e.exports=a(2167)},1163:function(e,s,a){e.exports=a(4651)},219:function(e,s,a){"use strict";function i(e,s){if(null==e)return{};var a,i,t=function(e,s){if(null==e)return{};var a,i,t={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],s.indexOf(a)>=0||(t[a]=e[a]);return t}(e,s);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],s.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}a.d(s,{Z:function(){return i}})}},function(e){e.O(0,[2617,8141,9774,2888,179],(function(){return s=7916,e(e.s=s);var s}));var s=e.O();_N_E=s}]);