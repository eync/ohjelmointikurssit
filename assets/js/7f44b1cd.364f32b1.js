"use strict";(self.webpackChunkohjelmointikurssit=self.webpackChunkohjelmointikurssit||[]).push([[3822,3409],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(a),d=i,k=m["".concat(l,".").concat(d)]||m[d]||p[d]||r;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:i},t)}},5064:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7294),i=a(9443);var r=function(){var e=(0,n.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=a(6010),s="tabItem_1uMI",l="tabItemActive_2DSg";var u=function(e){var t,a=e.lazy,i=e.block,u=e.defaultValue,c=e.values,p=e.groupId,m=e.className,d=n.Children.toArray(e.children),k=null!=c?c:d.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=u?u:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,h=r(),f=h.tabGroupChoices,j=h.setTabGroupChoices,y=(0,n.useState)(v),b=y[0],g=y[1],w=[];if(null!=p){var N=f[p];null!=N&&N!==b&&k.some((function(e){return e.value===N}))&&g(N)}var O=function(e){var t=e.currentTarget,a=w.indexOf(t),n=k[a].value;g(n),null!=p&&(j(p,n),setTimeout((function(){var e,a,n,i,r,o,s,u;(e=t.getBoundingClientRect(),a=e.top,n=e.left,i=e.bottom,r=e.right,o=window,s=o.innerHeight,u=o.innerWidth,a>=0&&r<=u&&i<=s&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},T=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=w.indexOf(e.target)+1;a=w[n]||w[0];break;case"ArrowLeft":var i=w.indexOf(e.target)-1;a=w[i]||w[w.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},m)},k.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,o.Z)("tabs__item",s,{"tabs__item--active":b===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:T,onFocus:O,onClick:O},null!=a?a:t)}))),a?(0,n.cloneElement)(d.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,a){var n=(0,a(7294).createContext)(void 0);t.Z=n},3568:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o=a(3614),s=["components"],l={id:"javascript",title:"Javascript",sidebar_position:2},u=void 0,c={unversionedId:"backend/javascript/alkeet/javascript",id:"backend/javascript/alkeet/javascript",isDocsHomePage:!1,title:"Javascript",description:"export const toc = GetFileTOC;",source:"@site/kurssit/backend/javascript/alkeet/javascript.mdx",sourceDirName:"backend/javascript/alkeet",slug:"/backend/javascript/alkeet/javascript",permalink:"/kurssit/backend/javascript/alkeet/javascript",editUrl:"https://github.com/eync/ohjelmointikurssit/kurssit/backend/javascript/alkeet/javascript.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"javascript",title:"Javascript",sidebar_position:2},sidebar:"guideBackendJavascript",previous:{title:"Git - hajautettu versionhallinta",permalink:"/kurssit/backend/javascript/alkeet/git-perusteet"},next:{title:"Johdanto",permalink:"/kurssit/backend/javascript/alkeet/nodejs/johdanto"}},p=o.toc,m={toc:p};function d(e){var t=e.components,a=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.default,{mdxType:"GetFile"}))}d.isMDXComponent=!0},3614:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return h},default:function(){return b},frontMatter:function(){return v},metadata:function(){return f},toc:function(){return j}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),o=a(5064),s=a(8215),l=["components"],u={toc:[]};function c(e){var t=e.components,a=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-HTML",metastring:'title="index.html"',title:'"index.html"'},'<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Document</title>\n</head>\n\n<body>\n\n</body>\n\n</html>\n')))}c.isMDXComponent=!0;var p=["components"],m={toc:[]};function d(e){var t=e.components,a=(0,i.Z)(e,p);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dom",metastring:'title="Kuinka verkkoselain n\xe4kee HTML-dokumentin"',title:'"Kuinka',verkkoselain:!0,"n\xe4kee":!0,'HTML-dokumentin"':!0},"    \u251c\u2500DOCTYPE: html\n    \u2514\u2500HTML\n        \u251c\u2500HEAD\n        \u2502    \u2514\u2500TITLE\n        \u2514\u2500BODY\n")))}d.isMDXComponent=!0;var k=["components"],v={},h=void 0,f={unversionedId:"javascript/perusteet",id:"javascript/perusteet",isDocsHomePage:!1,title:"perusteet",description:"Javascript on web-ymp\xe4rist\xf6ss\xe4 py\xf6ritett\xe4v\xe4 skriptikieli. Alkuper\xe4inen tarkoitus kielelle oli tuoda lis\xe4toiminallisuutta verkkosivuille.",source:"@site/kurssit/javascript/perusteet.mdx",sourceDirName:"javascript",slug:"/javascript/perusteet",permalink:"/kurssit/javascript/perusteet",editUrl:"https://github.com/eync/ohjelmointikurssit/kurssit/javascript/perusteet.mdx",tags:[],version:"current",frontMatter:{}},j=[{value:"Kirjastot",id:"kirjastot",children:[]},{value:"Document Object Model (DOM) standardi",id:"document-object-model-dom-standardi",children:[{value:"Manipulointi",id:"manipulointi",children:[]}]},{value:"Teht\xe4v\xe4t",id:"teht\xe4v\xe4t",children:[{value:"1. Javascriptin alkeet",id:"1-javascriptin-alkeet",children:[]},{value:"2. Mit\xe4 eroa on Var, Let ja Const muuttujilla",id:"2-mit\xe4-eroa-on-var-let-ja-const-muuttujilla",children:[]},{value:"3. Mik\xe4 on Arrow Function",id:"3-mik\xe4-on-arrow-function",children:[]},{value:"4. Javascript.info",id:"4-javascriptinfo",children:[]}]},{value:"Frontend",id:"frontend",children:[{value:"5. Document Object Model (DOM) standardi",id:"5-document-object-model-dom-standardi",children:[]},{value:"6. Hyv\xe4 tiet\xe4\xe4 ennen Reactiin siirtymist\xe4",id:"6-hyv\xe4-tiet\xe4\xe4-ennen-reactiin-siirtymist\xe4",children:[]}]}],y={toc:j};function b(e){var t=e.components,a=(0,i.Z)(e,k);return(0,r.kt)("wrapper",(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Javascript on web-ymp\xe4rist\xf6ss\xe4 py\xf6ritett\xe4v\xe4 skriptikieli. Alkuper\xe4inen tarkoitus kielelle oli tuoda lis\xe4toiminallisuutta verkkosivuille.\nSit\xe4 voidaan k\xe4ytt\xe4\xe4 esimerkiksi: HTML-pohjaisten verkkosivujen dokumenttipuun manipulointiin, py\xf6ritt\xe4\xe4 palvelinpuolen verkko-ohjelmoinnissa Node.js avustuksella ilman tarvetta erilliselle verkkoselaimelle, mobiilikehityksess\xe4 ja pelikehityksess\xe4."),(0,r.kt)("h2",{id:"kirjastot"},"Kirjastot"),(0,r.kt)("p",null,"Vaikka javascriptill\xe4 itsess\xe4\xe4n voi saada paljon aikaiseksi, niin samaan aikaan javascript kirjastojen ja kehysohjelmistojen suosio on noussut yl\xf6sp\xe4in.",(0,r.kt)("br",{parentName:"p"}),"\n","T\xe4ss\xe4 muutama t\xe4rke\xe4 Javascript kirjasto:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"React.js"),(0,r.kt)("li",{parentName:"ol"},"Node.js "),(0,r.kt)("li",{parentName:"ol"},"Vue.js"),(0,r.kt)("li",{parentName:"ol"},"jQuery")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Huomioitavaa")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"jQuery on otettu listalle koska se on mainitsemisen arvoinen ja yh\xe4 suuri j\xe4ttil\xe4inen Javascript markkinoilla. Vaikka sen onkin jo moni yritt\xe4nyt korvata muilla uudemmilla ja paremmilla kirjastoilla tai kielill\xe4, niin on se onnistunut pit\xe4m\xe4\xe4n pintansa. Sill\xe4 onkin yh\xe4 viikottainen latausm\xe4\xe4r\xe4 n. 4+ miljoonaa kertaa (",(0,r.kt)("a",{href:"https://www.npmjs.com/package/jquery"},"L\xe4hde"),").",(0,r.kt)("br",{parentName:"p"}),"\n","Toivottavaa onkin ett\xe4 kaikki siirtyisiv\xe4t k\xe4ytt\xe4m\xe4\xe4n parempia vaihtoehtoja kuten esimerkiksi natiivia javascripti\xe4, Vue.js- tai React.js kirjastoa.",(0,r.kt)("br",{parentName:"p"}),"\n","2021 oli selke\xe4sti muutoksen vuosi ja t\xe4ll\xf6in jQuery tipahti toiselle sijalle web-kehitt\xe4jille tehdyss\xe4 kyselyss\xe4, React.js ottaessa ensimm\xe4isen paikan (",(0,r.kt)("a",{href:"https://insights.stackoverflow.com/survey/2021#section-most-popular-technologies-web-frameworks"},"L\xe4hde"),").",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Kurssilla ei tulla panostautumaan kyseiseen Javascript-kirjastoon lainkaan."))))),(0,r.kt)("h2",{id:"document-object-model-dom-standardi"},"Document Object Model (DOM) standardi"),(0,r.kt)("p",null,"Luodessasi HTML-dokumentti\xe4 sis\xe4llyt\xe4t siihen valitsemasi HTML-merkinn\xe4t ja -elementit. N\xe4in tehdess\xe4si luot tietynlaisen hierarkian jota kutsutaan my\xf6s puuksi (engl. tree) (vaihtoehtoisesti: dokumentti puu ","[engl. document tree]",")."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"1",label:"HTML esimerkki",default:!0,mdxType:"TabItem"},(0,r.kt)(c,{mdxType:"GetFile"})),(0,r.kt)(s.Z,{value:"2",label:"DOM puu",mdxType:"TabItem"},(0,r.kt)(d,{mdxType:"GetFile2"})),(0,r.kt)(s.Z,{value:"3",label:"Selaimen Javascript Objekti",mdxType:"TabItem"},(0,r.kt)("img",{src:"/img/esimerkki_firefox.png"}),(0,r.kt)("i",null,"Kuvassa n\xe4et DOM puu:n javascriptiin sopivassa muodossa."))),(0,r.kt)("h3",{id:"manipulointi"},"Manipulointi"),(0,r.kt)("p",null,"\ud83c\udfd7\ufe0f\ud83d\udc77\u200d\u2642\ufe0f\ud83d\udea7 TODO"),(0,r.kt)("h2",{id:"teht\xe4v\xe4t"},"Teht\xe4v\xe4t"),(0,r.kt)("h3",{id:"1-javascriptin-alkeet"},"1. Javascriptin alkeet"),(0,r.kt)("p",null,"Tee seuraava kurssi liittyen javascriptin alkeisiin"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/"},"https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/"))),(0,r.kt)("h3",{id:"2-mit\xe4-eroa-on-var-let-ja-const-muuttujilla"},"2. Mit\xe4 eroa on Var, Let ja Const muuttujilla"),(0,r.kt)("p",null,"Lue seuraava kirjoitus siit\xe4 mit\xe4 eroa n\xe4ill\xe4 muuttujilla on kesken\xe4\xe4n"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dzone.com/articles/javascript-difference-between-var-let-and-const-ke"},"https://dzone.com/articles/javascript-difference-between-var-let-and-const-ke"))),(0,r.kt)("h3",{id:"3-mik\xe4-on-arrow-function"},"3. Mik\xe4 on Arrow Function"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/24900875/whats-the-meaning-of-an-arrow-formed-from-equals-greater-than-in-javas/24900924#24900924"},"https://stackoverflow.com/questions/24900875/whats-the-meaning-of-an-arrow-formed-from-equals-greater-than-in-javas/24900924#24900924"))),(0,r.kt)("h3",{id:"4-javascriptinfo"},"4. Javascript.info"),(0,r.kt)("p",null,"K\xe4y l\xe4pi kaikki seuraavat kappaleet : 1.1 - 2.18, ja tee teht\xe4v\xe4t."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://javascript.info/"},"https://javascript.info/")," ")),(0,r.kt)("h2",{id:"frontend"},"Frontend"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Huom.")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Seuraavat teht\xe4v\xe4t on tarkoitettu Frontend v\xe4yl\xe4\xe4 opiskeleville henkil\xf6ille."))),(0,r.kt)("h3",{id:"5-document-object-model-dom-standardi"},"5. Document Object Model (DOM) standardi"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MDN dokumentaatio DOM standardista",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model"},"https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model"))))),(0,r.kt)("p",null,"Katso seuraava videosarja ja tee per\xe4ss\xe4  "),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/FIORjGvT0kk",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.kt)("h3",{id:"6-hyv\xe4-tiet\xe4\xe4-ennen-reactiin-siirtymist\xe4"},"6. Hyv\xe4 tiet\xe4\xe4 ennen Reactiin siirtymist\xe4"),(0,r.kt)("p",null,"Ennenkuin siirryt React osioon niin lue seuraava artikkeli  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.robinwieruch.de/javascript-fundamentals-react-requirements"},"https://www.robinwieruch.de/javascript-fundamentals-react-requirements"))))}b.isMDXComponent=!0},6010:function(e,t,a){function n(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}a.d(t,{Z:function(){return i}})}}]);