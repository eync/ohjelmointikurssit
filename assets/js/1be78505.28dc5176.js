"use strict";(self.webpackChunkohjelmointikurssit=self.webpackChunkohjelmointikurssit||[]).push([[514,181],{8704:function(e,t,a){a.r(t),a.d(t,{default:function(){return ee}});var n=a(7294),r=a(3905),l=a(2263),o=a(6291),i=a(5992),c=a(6010),s=a(3018),m=a(3783),d=a(7898),u=a(5537),p=a(7462),f=function(e){return n.createElement("svg",(0,p.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},h=a(4973),b=a(3366),E=a(6742),v=a(3919),_=a(8617),g="menuLinkText_1J2g",k=["items"],Z=["item"],N=["item","onItemClick","activePath"],C=["item","onItemClick","activePath"],S=function e(t,a){return"link"===t.type?(0,s.Mg)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))},T=(0,n.memo)((function(e){var t=e.items,a=(0,b.Z)(e,k);return n.createElement(n.Fragment,null,t.map((function(e,t){return n.createElement(y,(0,p.Z)({key:t,item:e},a))})))}));function y(e){var t=e.item,a=(0,b.Z)(e,Z);switch(t.type){case"category":return 0===t.items.length?null:n.createElement(I,(0,p.Z)({item:t},a));case"link":default:return n.createElement(M,(0,p.Z)({item:t},a))}}function I(e){var t,a=e.item,r=e.onItemClick,l=e.activePath,o=(0,b.Z)(e,N),i=a.items,m=a.label,d=a.collapsible,u=S(a,l),f=(0,s.uR)({initialState:function(){return!!d&&(!u&&a.collapsed)}}),h=f.collapsed,E=f.setCollapsed,v=f.toggleCollapsed;return function(e){var t=e.isActive,a=e.collapsed,r=e.setCollapsed,l=(0,s.D9)(t);(0,n.useEffect)((function(){t&&!l&&a&&r(!1)}),[t,l,a])}({isActive:u,collapsed:h,setCollapsed:E}),n.createElement("li",{className:(0,c.Z)("menu__list-item",{"menu__list-item--collapsed":h})},n.createElement("a",(0,p.Z)({className:(0,c.Z)("menu__link",(t={"menu__link--sublist":d,"menu__link--active":d&&u},t[g]=!d,t)),onClick:d?function(e){e.preventDefault(),v()}:void 0,href:d?"#":void 0},o),m),n.createElement(s.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:h},n.createElement(T,{items:i,tabIndex:h?-1:0,onItemClick:r,activePath:l})))}function M(e){var t=e.item,a=e.onItemClick,r=e.activePath,l=(0,b.Z)(e,C),o=t.href,i=t.label,s=S(t,r);return n.createElement("li",{className:"menu__list-item",key:i},n.createElement(E.Z,(0,p.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":s}),to:o},(0,v.Z)(o)&&{isNavLink:!0,exact:!0,onClick:a},l),(0,v.Z)(o)?i:n.createElement("span",null,i,n.createElement(_.Z,null))))}var w="sidebar_15mo",L="sidebarWithHideableNavbar_267A",x="sidebarHidden_2kNb",A="sidebarLogo_3h0W",B="menu_Bmed",P="menuWithAnnouncementBar_2WvA",H="collapseSidebarButton_1CGd",F="collapseSidebarButtonIcon_3E-R";function D(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,h.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,h.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",H),onClick:t},n.createElement(f,{className:F}))}function W(e){var t,a,r=e.path,l=e.sidebar,o=e.onCollapse,i=e.isHidden,m=function(){var e=(0,s.nT)().isClosed,t=(0,n.useState)(!e),a=t[0],r=t[1];return(0,d.Z)((function(t){var a=t.scrollY;e||r(0===a)})),a}(),p=(0,s.LU)(),f=p.navbar.hideOnScroll,h=p.hideableSidebar,b=(0,s.nT)().isClosed;return n.createElement("div",{className:(0,c.Z)(w,(t={},t[L]=f,t[x]=i,t))},f&&n.createElement(u.Z,{tabIndex:-1,className:A}),n.createElement("nav",{className:(0,c.Z)("menu thin-scrollbar",B,(a={},a[P]=!b&&m,a))},n.createElement("ul",{className:"menu__list"},n.createElement(T,{items:l,activePath:r}))),h&&n.createElement(D,{onClick:o}))}var R=function(e){var t=e.toggleSidebar,a=e.sidebar,r=e.path;return n.createElement("ul",{className:"menu__list"},n.createElement(T,{items:a,activePath:r,onItemClick:function(){return t()}}))};function U(e){return n.createElement(s.Cv,{component:R,props:e})}var z=n.memo(W),Y=n.memo(U);function J(e){var t=(0,m.Z)(),a="desktop"===t||"ssr"===t,r="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(z,e),r&&n.createElement(Y,e))}var j=a(8938),q=a(4608),K="backToTopButton_35hR",G="backToTopButtonShow_18ls";function O(){var e=(0,n.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var a=document.documentElement.scrollTop;a>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*a)))}(),function(){t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var Q=function(){var e,t=O(),a=t.smoothScrollTop,r=t.cancelScrollToTop,l=(0,n.useState)(!1),o=l[0],i=l[1];return(0,d.Z)((function(e,t){var a=e.scrollY;if(t){var n=a<t.scrollY;if(n||r(),a<300)i(!1);else if(n){var l=document.documentElement.scrollHeight;a+window.innerHeight<l&&i(!0)}else i(!1)}}),[]),n.createElement("button",{className:(0,c.Z)("clean-btn",K,(e={},e[G]=o,e)),type:"button",title:"Scroll to top",onClick:function(){return a()}},n.createElement("svg",{viewBox:"0 0 24 24",width:"28"},n.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",fill:"currentColor"})))},X=a(5977),V={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docSidebarContainer:"docSidebarContainer_3Kbt",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"};function $(e){var t,a,o,m=e.currentDocRoute,d=e.versionMetadata,u=e.children,p=(0,l.Z)().isClient,b=d.pluginId,E=d.version,v=m.sidebar,_=v?d.docsSidebars[v]:void 0,g=(0,n.useState)(!1),k=g[0],Z=g[1],N=(0,n.useState)(!1),C=N[0],S=N[1],T=(0,n.useCallback)((function(){C&&S(!1),Z(!k)}),[C]);return n.createElement(i.Z,{key:p,wrapperClassName:s.kM.wrapper.docPages,pageClassName:s.kM.page.docPage,searchMetadatas:{version:E,tag:(0,s.os)(b,E)}},n.createElement("div",{className:V.docPage},n.createElement(Q,null),_&&n.createElement("aside",{className:(0,c.Z)(V.docSidebarContainer,(t={},t[V.docSidebarContainerHidden]=k,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(V.docSidebarContainer)&&k&&S(!0)}},n.createElement(J,{key:v,sidebar:_,path:m.path,onCollapse:T,isHidden:C}),C&&n.createElement("div",{className:V.collapsedDocSidebar,title:(0,h.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,h.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:T,onClick:T},n.createElement(f,{className:V.expandSidebarButtonIcon}))),n.createElement("main",{className:(0,c.Z)(V.docMainContainer,(a={},a[V.docMainContainerEnhanced]=k||!_,a))},n.createElement("div",{className:(0,c.Z)("container padding-top--md padding-bottom--lg",V.docItemWrapper,(o={},o[V.docItemWrapperEnhanced]=k,o))},n.createElement(r.Zo,{components:j.Z},u)))))}var ee=function(e){var t=e.route.routes,a=e.versionMetadata,r=e.location,l=t.find((function(e){return(0,X.LX)(r.pathname,e)}));return l?n.createElement($,{currentDocRoute:l,versionMetadata:a},(0,o.Z)(t,{versionMetadata:a})):n.createElement(q.default,e)}},4608:function(e,t,a){a.r(t);var n=a(7294),r=a(5992),l=a(4973);t.default=function(){return n.createElement(r.Z,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},546:function(e,t,a){a.d(t,{Z:function(){return h}});var n=a(7462),r=a(3366),l=a(7294),o=a(6010),i=a(6742),c=a(3018),s=a(4996),m="footerLogoLink_qW4Z",d=a(8465),u=(a(412),["to","href","label","prependBaseUrlToHref"]);function p(e){var t=e.to,a=e.href,o=e.label,c=e.prependBaseUrlToHref,m=(0,r.Z)(e,u),d=(0,s.Z)(t),p=(0,s.Z)(a,{forcePrependBaseUrl:!0});return l.createElement(i.Z,(0,n.Z)({className:"footer__link-item"},a?{href:c?p:a}:{to:d},m),o)}var f=function(e){var t=e.sources,a=e.alt;return l.createElement(d.Z,{className:"footer__logo",alt:a,sources:t})};var h=function(){var e=(0,c.LU)().footer,t=e||{},a=t.copyright,n=t.links,r=void 0===n?[]:n,d=t.logo,u=void 0===d?{}:d,h={light:(0,s.Z)(u.src),dark:(0,s.Z)(u.srcDark||u.src)};return e?l.createElement(l.Fragment,null,l.createElement("footer",{className:(0,o.Z)("footer",{"footer--dark":"dark"===e.style})},l.createElement("div",{className:"container"},r&&r.length>0&&l.createElement("div",{className:"row footer__links"},r.map((function(e,t){return l.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?l.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):l.createElement("li",{key:e.href||e.to,className:"footer__item"},l.createElement(p,e))}))):null)}))),(u||a)&&l.createElement("div",{className:"footer__bottom text--center"},u&&(u.src||u.srcDark)&&l.createElement("div",{className:"margin-bottom--sm"},u.href?l.createElement(i.Z,{href:u.href,className:m},l.createElement(f,{alt:u.alt,sources:h})):l.createElement(f,{alt:u.alt,sources:h})),a?l.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null)))):null}}}]);