"use strict";(self.webpackChunkohjelmointikurssit=self.webpackChunkohjelmointikurssit||[]).push([[6170],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(a),m=i,d=p["".concat(s,".").concat(m)]||p[m]||k[m]||r;return a?n.createElement(d,l(l({ref:t},c),{},{components:a})):n.createElement(d,l({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:i},t)}},6396:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(7462),i=a(7294),r=a(2389),l=a(9443);var o=function(){var e=(0,i.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=a(3616),u=a(6010),c="tabItem_vU9c";function k(e){var t,a,n,r=e.lazy,l=e.block,k=e.defaultValue,p=e.values,m=e.groupId,d=e.className,v=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=p?p:v.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),f=(0,s.lx)(h,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===k?k:null!=(t=null!=k?k:null==(a=v.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(n=v[0])?void 0:n.props.value;if(null!==y&&!h.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=o(),j=b.tabGroupChoices,g=b.setTabGroupChoices,w=(0,i.useState)(y),T=w[0],N=w[1],O=[],x=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=j[m];null!=E&&E!==T&&h.some((function(e){return e.value===E}))&&N(E)}var D=function(e){var t=e.currentTarget,a=O.indexOf(t),n=h[a].value;n!==T&&(x(t),N(n),null!=m&&g(m,n))},R=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=O.indexOf(e.currentTarget)+1;a=O[n]||O[0];break;case"ArrowLeft":var i=O.indexOf(e.currentTarget)-1;a=O[i]||O[O.length-1]}null==(t=a)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":l},d)},h.map((function(e){var t=e.value,a=e.label;return i.createElement("li",{role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,className:(0,u.Z)("tabs__item",c,{"tabs__item--active":T===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:R,onFocus:D,onClick:D},null!=a?a:t)}))),r?(0,i.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function p(e){var t=(0,r.Z)();return i.createElement(k,(0,n.Z)({key:String(t)},e))}},5860:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return h},default:function(){return j},frontMatter:function(){return v},metadata:function(){return f},toc:function(){return y}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),l=a(6396),o=a(8215),s=["components"],u={toc:[]};function c(e){var t=e.components,a=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Deklaratiivisess\xe4 koodissa luotetaan ett\xe4 funktiot hoitavat homman niinkuin on pyydetty, eli lista kurssien nimien pituuksista."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Esimerkki deklaratiivisest\xe4 javascript koodista"',title:'"Esimerkki',"deklaratiivisest\xe4":!0,javascript:!0,'koodista"':!0},"const kurssit = ['Frontend v\xe4yl\xe4','Backend v\xe4yl\xe4','Fullstack v\xe4yl\xe4'];\n\nconst tekstinPituus = tulo => {\n    return tulo.map(kurssi => kurssi.length);\n}\n\ntekstinPituus(kurssit);\n// mit\xe4 tulostaa: \n// => [ 14, 13, 15 ]\n")))}c.isMDXComponent=!0;var k=["components"],p={toc:[]};function m(e){var t=e.components,a=(0,i.Z)(e,k);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Imperatiivisess\xe4 koodissa k\xe4yd\xe4\xe4n tekem\xe4ss\xe4 ja samalla tarkistetaan ett\xe4 se tulostuu, ns k\xe4dest\xe4 pit\xe4en."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Esimerkki imperatiivisesta javascript koodista"',title:'"Esimerkki',imperatiivisesta:!0,javascript:!0,'koodista"':!0},"const kurssit = ['Frontend v\xe4yl\xe4','Backend v\xe4yl\xe4','Fullstack v\xe4yl\xe4'];\n\nconst tekstinPituus = tulo => {\n    let kurssitLaskettuna = [];\n    for (let x = 0; x < tulo.length; x++) {\n        kurssitLaskettuna.push(tulo[x].length)\n    }\n    return kurssitLaskettuna\n}\n\ntekstinPituus(kurssit);\n// mit\xe4 tulostaa: \n// => [ 14, 13, 15 ]\n")))}m.isMDXComponent=!0;var d=["components"],v={title:"React.js",sidebar_position:6},h=void 0,f={unversionedId:"frontend/alkeet/react",id:"frontend/alkeet/react",title:"React.js",description:"React on avoimeen koodil\xe4hteeseen perustuva front-end Javascript kirjasto. Sill\xe4 voidaan rakentaa k\xe4ytt\xf6liittymi\xe4, komponentteja ja erilaisia modulaarisia osia front-end j\xe4rjestelm\xe4\xe4n. Koodia voidaan pilkkoa pienempiin osiin, jolloin koodia on helpompi hallita. Kielen kehitt\xe4jin\xe4 toimivat Facebook ja React-yhteis\xf6.",source:"@site/kurssit/frontend/alkeet/react.mdx",sourceDirName:"frontend/alkeet",slug:"/frontend/alkeet/react",permalink:"/kurssit/frontend/alkeet/react",editUrl:"https://github.com/eync/ohjelmointikurssit/kurssit/frontend/alkeet/react.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"React.js",sidebar_position:6},sidebar:"guideFrontend",previous:{title:"Javascript",permalink:"/kurssit/frontend/alkeet/javascript"},next:{title:"Rest API - arkkitehtuurin alkeet",permalink:"/kurssit/frontend/alkeet/rest-api"}},y=[{value:"Virtual DOM",id:"virtual-dom",children:[],level:2},{value:"JSX",id:"jsx",children:[],level:2},{value:"Deklaratiivinen",id:"deklaratiivinen",children:[{value:"Esimerkkej\xe4",id:"esimerkkej\xe4",children:[],level:3}],level:2},{value:"K\xe4ytt\xf6liittym\xe4n rakentaminen",id:"k\xe4ytt\xf6liittym\xe4n-rakentaminen",children:[],level:2},{value:"Koodin lajittelu",id:"koodin-lajittelu",children:[],level:2},{value:"Create-React-App",id:"create-react-app",children:[],level:2},{value:"Teht\xe4v\xe4t",id:"teht\xe4v\xe4t",children:[{value:"1. Tutustu React dokumentaatioon",id:"1-tutustu-react-dokumentaatioon",children:[],level:3},{value:"2. Teht\xe4v\xe4",id:"2-teht\xe4v\xe4",children:[],level:3},{value:"3. Tee interaktiivinen React kurssi",id:"3-tee-interaktiivinen-react-kurssi",children:[],level:3}],level:2}],b={toc:y};function j(e){var t=e.components,a=(0,i.Z)(e,d);return(0,r.kt)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"React on avoimeen koodil\xe4hteeseen perustuva front-end Javascript kirjasto. Sill\xe4 voidaan rakentaa k\xe4ytt\xf6liittymi\xe4, komponentteja ja erilaisia modulaarisia osia front-end j\xe4rjestelm\xe4\xe4n. Koodia voidaan pilkkoa pienempiin osiin, jolloin koodia on helpompi hallita. Kielen kehitt\xe4jin\xe4 toimivat Facebook ja React-yhteis\xf6.  "),(0,r.kt)("h2",{id:"virtual-dom"},"Virtual DOM"),(0,r.kt)("p",null,"React hy\xf6dynt\xe4\xe4 Virtual DOM tekniikkaa. Ideana on ett\xe4 React rakentaa virtuaalisen DOM:n joka seuraa koodissa tapahtuvia muutoksia, ja tekee ainoastaan tarpeelliset muutokset sitten oikeaan DOM:iin. "),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Katso aiheeseen liittyv\xe4 video"),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/hnQcDtXZC6g",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,r.kt)("h2",{id:"jsx"},"JSX"),(0,r.kt)("p",null,"\ud83c\udfd7\ufe0f\ud83d\udc77\u200d\u2642\ufe0f\ud83d\udea7 TODO"),(0,r.kt)("h2",{id:"deklaratiivinen"},"Deklaratiivinen"),(0,r.kt)("p",null,"Voidaan ilmaista yksinkertaisesti mit\xe4 halutaan tehd\xe4, ilman ett\xe4 asian my\xf6s joutuisi m\xe4\xe4rittelem\xe4\xe4n miten se tulisi tehd\xe4.",(0,r.kt)("br",{parentName:"p"}),"\n","Asiaa voidaan kuvainnollistaa seuraavalla vertauksella. "),(0,r.kt)("h3",{id:"esimerkkej\xe4"},"Esimerkkej\xe4"),(0,r.kt)("p",null,"\ud83c\udfd7\ufe0f\ud83d\udc77\u200d\u2642\ufe0f\ud83d\udea7 TODO"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"1",label:"Deklaratiivinen esimerkki",default:!0,mdxType:"TabItem"},(0,r.kt)(c,{mdxType:"GetFile"})),(0,r.kt)(o.Z,{value:"2",label:"Imperatiivinen esimerkki",mdxType:"TabItem"},(0,r.kt)(m,{mdxType:"GetFile2"}))),(0,r.kt)("h2",{id:"k\xe4ytt\xf6liittym\xe4n-rakentaminen"},"K\xe4ytt\xf6liittym\xe4n rakentaminen"),(0,r.kt)("p",null,"React on juurikin tehty k\xe4ytt\xf6liittym\xe4n rakentamista varten, siin\xe4 on todella monia mahdollisuuksia toteuttaa eri alustoille olevia k\xe4ytt\xf6liittym\xe4 projekteja. "),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Valmiita k\xe4ytt\xf6liittym\xe4- ja komponentti kirjastoja, mit\xe4 voit k\xe4ytt\xe4\xe4 omissa projekteissa."),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"Material UI"),(0,r.kt)("li",{parentName:"ul"},"Semantic UI"),(0,r.kt)("li",{parentName:"ul"},"Chakra UI "),(0,r.kt)("li",{parentName:"ul"},"Ant Design")))),(0,r.kt)("h2",{id:"koodin-lajittelu"},"Koodin lajittelu"),(0,r.kt)("p",null,"Kun projektin koodi m\xe4\xe4r\xe4 kasvaa, niin on normaalia ett\xe4 koodi my\xf6s hidastuu. "),(0,r.kt)("h2",{id:"create-react-app"},"Create-React-App"),(0,r.kt)("p",null,"Create React App (lyh. CRA) on Facebookin luoma ty\xf6kalu joka nopeuttaa applikaation konstruktoimista ja s\xe4\xe4st\xe4\xe4 aikaa react projektin konfiguroimiselta. Pelk\xe4ll\xe4 yhdell\xe4 komennolla saat nopean ty\xf6kalun k\xe4ytt\xf6\xf6si projektia varten. "),(0,r.kt)("h2",{id:"teht\xe4v\xe4t"},"Teht\xe4v\xe4t"),(0,r.kt)("h3",{id:"1-tutustu-react-dokumentaatioon"},"1. Tutustu React dokumentaatioon"),(0,r.kt)("p",null,"Mene seuraavalle sivustolle: ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/getting-started.html#learn-react"},"https://reactjs.org/docs/getting-started.html#learn-react"),(0,r.kt)("br",{parentName:"p"}),"\n",'Lue "Learn React" osio ja t\xe4m\xe4n j\xe4lkeen mene "Main Concepts" kategoriaan ja lue sis\xe4lt\xf6.'),(0,r.kt)("h3",{id:"2-teht\xe4v\xe4"},"2. Teht\xe4v\xe4"),(0,r.kt)("p",null,"Katso FireShipin video reactista."),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/Tn6-PIqc4UM",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.kt)("h3",{id:"3-tee-interaktiivinen-react-kurssi"},"3. Tee interaktiivinen React kurssi"),(0,r.kt)("p",null,"Valitse jokin seuraavista ilmaisista kursseista itsellesi:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://egghead.io/courses/the-beginner-s-guide-to-react"},"https://egghead.io/courses/the-beginner-s-guide-to-react")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.codecademy.com/learn/react-101"},"https://www.codecademy.com/learn/react-101")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://teamtreehouse.com/library/react-basics-2"},"https://teamtreehouse.com/library/react-basics-2"))))}j.isMDXComponent=!0}}]);