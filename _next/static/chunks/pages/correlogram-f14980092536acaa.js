(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7542],{4101:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/correlogram",function(){return i(3254)}])},3485:function(e,t,i){"use strict";i.d(t,{U:function(){return l}});var a=i(5893),s=i(7294),l=function(e){var t=e.startOpen,i=e.title,l=e.children,n=e.toc,r=(0,s.useState)(t),p=r[0],h=r[1],c=p?"max-h-full":"max-h-0",o=p?"overflow-visible":"overflow-hidden";return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("h2",{className:"cursor-pointer",onClick:function(){return h(!p)},id:n,children:[p?(0,a.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"-"}):(0,a.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"+"}),i]}),(0,a.jsx)("div",{className:"transition-max-height ease-in duration-300  "+c+" "+o,children:l})]})}},7197:function(e,t,i){"use strict";i.d(t,{Z:function(){return d}});var a=i(5893),s=(i(7294),i(6761)),l=i(1878),n=i(1664),r=l.c.filter((function(e){return"general"===e.family})).map((function(e){return e.logo}));function p(e){var t=e.chartLogo,i=e.caption,l=e.link,p=e.isAvailable,c=e.size,o=r.includes(t),d=p?"opacity-100":"opacity-20",g=p?"cursor-pointer":"cursor-not-allowed";return(0,a.jsx)(n.default,{href:p?l:"subscribe",children:(0,a.jsxs)("div",{className:"flex flex-col items-center",children:[(0,a.jsxs)("div",{style:{width:c,height:c},className:"relative mr-2 rounded-full "+d+" "+g,children:[(0,a.jsx)("div",{className:"absolute",children:(0,a.jsx)(s.Z,{chartLogo:t})}),o?(0,a.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,a.jsx)(h,{size:c})}):(0,a.jsx)("div",{className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full bg-purple-800 z-30",children:(0,a.jsx)("p",{className:"text-white text-4xl",children:"+"})})]}),(0,a.jsx)("p",{className:"font-light text-sm text-gray-600 "+d,children:i})]})})}var h=function(e){var t=e.size;return(0,a.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,a.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})},c=i(3414),o={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function d(e){var t=e.chartFamily,i=l.c.filter((function(e){return e.family===t})).map((function(e,t){var i=(0,c.y)(e.reactURL);return(0,a.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,a.jsx)(p,{link:i,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:129})},t)}));return(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null===o||void 0===o?void 0:o[t]}),(0,a.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:i})]})}},33:function(e,t,i){"use strict";i.d(t,{$:function(){return h}});var a=i(5893),s=i(7294),l=i(217),n=i(4893),r=i(5380),p=i(7975),h=function(e){var t=e.VizComponent,i=e.vizName,h=e.height,c=void 0===h?400:h,o=e.maxWidth,d=void 0===o?800:o,g=e.caption,u=(0,s.useState)(!1),L=u[0],W=u[1],f=(0,s.useRef)(null),v=(0,l.B)(f);return(0,a.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:L?(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,a.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,a.jsx)(p.X,{vizName:i})}),(0,a.jsx)("div",{className:"flex justify-center mt-2",children:(0,a.jsx)(n.z,{size:"sm",onClick:function(){return W(!L)},children:"Hide Sandbox"})})]}):(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,a.jsx)("div",{className:"bg-gray-50 w-screen flex justify-center",children:(0,a.jsx)("div",{style:{height:c,width:"100%",maxWidth:d},ref:f,children:(0,a.jsx)(t,{height:c,width:v.width})})}),(0,a.jsx)(r.Y,{children:g}),(0,a.jsx)("div",{className:"flex justify-center",children:(0,a.jsx)(n.z,{size:"sm",onClick:function(){return W(!L)},children:"Show code"})})]})})}},7975:function(e,t,i){"use strict";i.d(t,{X:function(){return s}});var a=i(5893),s=(i(7294),function(e){var t="https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+e.vizName+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0";return(0,a.jsx)("iframe",{src:t,style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})})},1884:function(e,t,i){"use strict";i.d(t,{A:function(){return d}});var a=i(5893),s=i(3185),l=i(1261),n=i(7294),r=i(3924),p=i.n(r);function h(){var e=(0,n.useState)([]),t=e[0],i=e[1],s=(0,n.useState)(0),l=s[0],r=s[1];return(0,n.useEffect)((function(){var e=Array.from(document.querySelectorAll("h2"));i(e)}),[]),(0,n.useEffect)((function(){var e=function(){var e=t.map((function(e){return e.offsetTop-e.scrollTop+e.clientTop})),i=window.scrollY+150,a=e.reduce((function(e,t){return Math.abs(t-i)<Math.abs(e-i)?t:e}),0),s=e.findIndex((function(e){return e===a}));r(-1===s?0:s)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[t]),(0,a.jsx)("div",{className:p().tableOfContent,children:t.map((function(e,i){return(0,a.jsx)("p",{className:l===i?"".concat(p().tocItem," ").concat(p().tocItemActive):p().tocItem,onClick:function(e){e.preventDefault(),t[i].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:e.id.charAt(0).toUpperCase()+e.id.slice(1)},e.id)}))})}var c=i(8171),o=i(6978),d=function(e){var t=e.children,i=e.title,n=e.seoDescription;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.A,{title:i,seoDescription:n}),(0,a.jsxs)("div",{className:"wrapper",children:[(0,a.jsx)(s.Z,{}),t]}),(0,a.jsx)(o.Z,{}),(0,a.jsx)("div",{className:"wrapper",children:(0,a.jsx)(l.Z,{})}),(0,a.jsx)(h,{})]})}},1687:function(e,t,i){"use strict";i.d(t,{J:function(){return l}});var a=i(5893),s=i(1664),l=function(e){var t=e.children,i=e.href,l=e.isFilled,n=e.size,r=void 0===n?"md":n,p=e.isFaded,h=i.startsWith("www")||i.startsWith("http"),c="font-normal rounded mr-1 cursor-pointer border-reactGallery border ";c+=l?" bg-reactGallery hover:bg-reactGallery text-white ":" bg-white hover:bg-reactGallery hover:text-white text-reactGallery ","sm"===r&&(c+="text-sm py-1 px-2 "),"md"===r&&(c+="text-md py-2 px-4 "),p&&(c+="opacity-60");var o=(0,a.jsx)("span",{className:c,children:t});return h?(0,a.jsx)("a",{href:i,children:o}):(0,a.jsx)(s.default,{href:i,passHref:!0,children:(0,a.jsx)("a",{children:o})})}},8807:function(e,t,i){"use strict";i.d(t,{Z:function(){return o}});var a=i(5893),s=(i(7294),i(1878)),l=i(3414),n=i(3919),r=i(1687),p=i(3187),h=i.n(p),c=function(e){var t=e.direction,i=e.text,s=e.children;return(0,a.jsx)("span",{className:h().tooltip+" "+h()[t],id:i,children:s})};function o(e){var t=e.title,i=e.description,p=e.chartType,h=e.showSectionLink,o=void 0!==h&&h,d=e.showInspirationLink,g=void 0===d||d,u=e.showD3GalleryLink,L=void 0===u||u,W=s.c.filter((function(e){return e.id===p}))[0];return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"w-full pt-1 sm:pt-28 pb-20 ",children:[(0,a.jsx)("h1",{children:t}),(0,a.jsx)(n.r,{}),(0,a.jsx)("div",{className:"max-w-xxl py-2",children:(0,a.jsx)("p",{children:i})}),p&&(0,a.jsx)("span",{className:"text-gray-400 text-sm font-light",children:"Useful links"}),p&&(0,a.jsxs)("div",{className:"flex flex-row flex-wrap",children:[o&&(0,a.jsx)(c,{text:"kkkk",direction:"bottom",children:(0,a.jsx)(r.J,{href:(0,l.y)(W.reactURL),size:"sm",children:W.label+" section"})}),g&&(0,a.jsx)(c,{text:"Hundreds of stunning dataviz projects to gather inspiration",direction:"bottom",children:(0,a.jsx)(r.J,{href:"https://www.dataviz-inspiration.com/"+W.id,size:"sm",children:"inspiration"})}),L&&(0,a.jsx)(c,{text:"Pure d3 implementation, no React",direction:"bottom",children:(0,a.jsx)(r.J,{href:W.d3URL,size:"sm",children:"d3 gallery"})}),(0,a.jsx)(c,{text:"Dataviz theory about this chart",direction:"bottom",children:(0,a.jsx)(r.J,{href:W.dataToVizURL,isFilled:!0,size:"sm",children:"About this chart"})})]})]})})}},4893:function(e,t,i){"use strict";i.d(t,{z:function(){return s}});var a=i(5893),s=function(e){var t=e.children,i=e.onClick,s=e.isFilled,l=e.size,n=void 0===l?"md":l,r="rounded m-1 cursor-pointer border-reactGallery border ";return"sm"===n&&(r+="text-sm py-1 px-2"),"md"===n&&(r+="text-md py-2 px-4"),r+=s?" bg-reactGallery hover:bg-reactGallery text-white":" bg-white hover:bg-reactGallery hover:text-white text-reactGallery",(0,a.jsx)("button",{className:r,onClick:i,children:t})}},5380:function(e,t,i){"use strict";i.d(t,{Y:function(){return s}});var a=i(5893),s=function(e){var t=e.children;return(0,a.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},8193:function(e,t,i){"use strict";i.d(t,{d:function(){return r}});var a=i(5893),s=i(4725),l=i.n(s),n=i(7294),r=function(e){var t=e.code,i=(0,n.useRef)(null);return(0,n.useEffect)((function(){i.current&&l().highlightElement(i.current)}),[i,t]),(0,a.jsx)("div",{className:"mb-6",children:(0,a.jsx)("pre",{className:"rounded-md line-numbers",children:(0,a.jsx)("code",{ref:i,className:"p-0 language-js",children:t})})})}},217:function(e,t,i){"use strict";i.d(t,{B:function(){return s}});var a=i(7294),s=function(e){var t=function(){return{width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}},i=(0,a.useState)(t),s=i[0],l=i[1],n=function(){l(t())};return(0,a.useEffect)((function(){return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[]),(0,a.useLayoutEffect)((function(){n()}),[]),s}},3254:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return S}});var a=i(5893),s=i(7294),l=i(1884),n=i(8807),r=i(7197),p=i(6978),h=i(3485),c=i(8193),o=i(33),d=[{sepalLength:5.1,sepalWidth:3.5,petalLength:1.4,petalWidth:.2,species:"setosa"},{sepalLength:4.9,sepalWidth:3,petalLength:1.4,petalWidth:.2,species:"setosa"},{sepalLength:4.7,sepalWidth:3.2,petalLength:1.3,petalWidth:.2,species:"setosa"},{sepalLength:4.6,sepalWidth:3.1,petalLength:1.5,petalWidth:.2,species:"setosa"},{sepalLength:5,sepalWidth:3.6,petalLength:1.4,petalWidth:.2,species:"setosa"},{sepalLength:5.4,sepalWidth:3.9,petalLength:1.7,petalWidth:.4,species:"setosa"},{sepalLength:4.6,sepalWidth:3.4,petalLength:1.4,petalWidth:.3,species:"setosa"},{sepalLength:5,sepalWidth:3.4,petalLength:1.5,petalWidth:.2,species:"setosa"},{sepalLength:4.4,sepalWidth:2.9,petalLength:1.4,petalWidth:.2,species:"setosa"},{sepalLength:4.9,sepalWidth:3.1,petalLength:1.5,petalWidth:.1,species:"setosa"},{sepalLength:5.4,sepalWidth:3.7,petalLength:1.5,petalWidth:.2,species:"setosa"},{sepalLength:4.8,sepalWidth:3.4,petalLength:1.6,petalWidth:.2,species:"setosa"},{sepalLength:4.8,sepalWidth:3,petalLength:1.4,petalWidth:.1,species:"setosa"},{sepalLength:4.3,sepalWidth:3,petalLength:1.1,petalWidth:.1,species:"setosa"},{sepalLength:5.8,sepalWidth:4,petalLength:1.2,petalWidth:.2,species:"setosa"},{sepalLength:5.7,sepalWidth:4.4,petalLength:1.5,petalWidth:.4,species:"setosa"},{sepalLength:5.4,sepalWidth:3.9,petalLength:1.3,petalWidth:.4,species:"setosa"},{sepalLength:5.1,sepalWidth:3.5,petalLength:1.4,petalWidth:.3,species:"setosa"},{sepalLength:5.7,sepalWidth:3.8,petalLength:1.7,petalWidth:.3,species:"setosa"},{sepalLength:5.1,sepalWidth:3.8,petalLength:1.5,petalWidth:.3,species:"setosa"},{sepalLength:5.4,sepalWidth:3.4,petalLength:1.7,petalWidth:.2,species:"setosa"},{sepalLength:5.1,sepalWidth:3.7,petalLength:1.5,petalWidth:.4,species:"setosa"},{sepalLength:4.6,sepalWidth:3.6,petalLength:1,petalWidth:.2,species:"setosa"},{sepalLength:5.1,sepalWidth:3.3,petalLength:1.7,petalWidth:.5,species:"setosa"},{sepalLength:4.8,sepalWidth:3.4,petalLength:1.9,petalWidth:.2,species:"setosa"},{sepalLength:5,sepalWidth:3,petalLength:1.6,petalWidth:.2,species:"setosa"},{sepalLength:5,sepalWidth:3.4,petalLength:1.6,petalWidth:.4,species:"setosa"},{sepalLength:5.2,sepalWidth:3.5,petalLength:1.5,petalWidth:.2,species:"setosa"},{sepalLength:5.2,sepalWidth:3.4,petalLength:1.4,petalWidth:.2,species:"setosa"},{sepalLength:4.7,sepalWidth:3.2,petalLength:1.6,petalWidth:.2,species:"setosa"},{sepalLength:4.8,sepalWidth:3.1,petalLength:1.6,petalWidth:.2,species:"setosa"},{sepalLength:5.4,sepalWidth:3.4,petalLength:1.5,petalWidth:.4,species:"setosa"},{sepalLength:5.2,sepalWidth:4.1,petalLength:1.5,petalWidth:.1,species:"setosa"},{sepalLength:5.5,sepalWidth:4.2,petalLength:1.4,petalWidth:.2,species:"setosa"},{sepalLength:4.9,sepalWidth:3.1,petalLength:1.5,petalWidth:.2,species:"setosa"},{sepalLength:5,sepalWidth:3.2,petalLength:1.2,petalWidth:.2,species:"setosa"},{sepalLength:5.5,sepalWidth:3.5,petalLength:1.3,petalWidth:.2,species:"setosa"},{sepalLength:4.9,sepalWidth:3.6,petalLength:1.4,petalWidth:.1,species:"setosa"},{sepalLength:4.4,sepalWidth:3,petalLength:1.3,petalWidth:.2,species:"setosa"},{sepalLength:5.1,sepalWidth:3.4,petalLength:1.5,petalWidth:.2,species:"setosa"},{sepalLength:5,sepalWidth:3.5,petalLength:1.3,petalWidth:.3,species:"setosa"},{sepalLength:4.5,sepalWidth:2.3,petalLength:1.3,petalWidth:.3,species:"setosa"},{sepalLength:4.4,sepalWidth:3.2,petalLength:1.3,petalWidth:.2,species:"setosa"},{sepalLength:5,sepalWidth:3.5,petalLength:1.6,petalWidth:.6,species:"setosa"},{sepalLength:5.1,sepalWidth:3.8,petalLength:1.9,petalWidth:.4,species:"setosa"},{sepalLength:4.8,sepalWidth:3,petalLength:1.4,petalWidth:.3,species:"setosa"},{sepalLength:5.1,sepalWidth:3.8,petalLength:1.6,petalWidth:.2,species:"setosa"},{sepalLength:4.6,sepalWidth:3.2,petalLength:1.4,petalWidth:.2,species:"setosa"},{sepalLength:5.3,sepalWidth:3.7,petalLength:1.5,petalWidth:.2,species:"setosa"},{sepalLength:5,sepalWidth:3.3,petalLength:1.4,petalWidth:.2,species:"setosa"},{sepalLength:7,sepalWidth:3.2,petalLength:4.7,petalWidth:1.4,species:"versicolor"},{sepalLength:6.4,sepalWidth:3.2,petalLength:4.5,petalWidth:1.5,species:"versicolor"},{sepalLength:6.9,sepalWidth:3.1,petalLength:4.9,petalWidth:1.5,species:"versicolor"},{sepalLength:5.5,sepalWidth:2.3,petalLength:4,petalWidth:1.3,species:"versicolor"},{sepalLength:6.5,sepalWidth:2.8,petalLength:4.6,petalWidth:1.5,species:"versicolor"},{sepalLength:5.7,sepalWidth:2.8,petalLength:4.5,petalWidth:1.3,species:"versicolor"},{sepalLength:6.3,sepalWidth:3.3,petalLength:4.7,petalWidth:1.6,species:"versicolor"},{sepalLength:4.9,sepalWidth:2.4,petalLength:3.3,petalWidth:1,species:"versicolor"},{sepalLength:6.6,sepalWidth:2.9,petalLength:4.6,petalWidth:1.3,species:"versicolor"},{sepalLength:5.2,sepalWidth:2.7,petalLength:3.9,petalWidth:1.4,species:"versicolor"},{sepalLength:5,sepalWidth:2,petalLength:3.5,petalWidth:1,species:"versicolor"},{sepalLength:5.9,sepalWidth:3,petalLength:4.2,petalWidth:1.5,species:"versicolor"},{sepalLength:6,sepalWidth:2.2,petalLength:4,petalWidth:1,species:"versicolor"},{sepalLength:6.1,sepalWidth:2.9,petalLength:4.7,petalWidth:1.4,species:"versicolor"},{sepalLength:5.6,sepalWidth:2.9,petalLength:3.6,petalWidth:1.3,species:"versicolor"},{sepalLength:6.7,sepalWidth:3.1,petalLength:4.4,petalWidth:1.4,species:"versicolor"},{sepalLength:5.6,sepalWidth:3,petalLength:4.5,petalWidth:1.5,species:"versicolor"},{sepalLength:5.8,sepalWidth:2.7,petalLength:4.1,petalWidth:1,species:"versicolor"},{sepalLength:6.2,sepalWidth:2.2,petalLength:4.5,petalWidth:1.5,species:"versicolor"},{sepalLength:5.6,sepalWidth:2.5,petalLength:3.9,petalWidth:1.1,species:"versicolor"},{sepalLength:5.9,sepalWidth:3.2,petalLength:4.8,petalWidth:1.8,species:"versicolor"},{sepalLength:6.1,sepalWidth:2.8,petalLength:4,petalWidth:1.3,species:"versicolor"},{sepalLength:6.3,sepalWidth:2.5,petalLength:4.9,petalWidth:1.5,species:"versicolor"},{sepalLength:6.1,sepalWidth:2.8,petalLength:4.7,petalWidth:1.2,species:"versicolor"},{sepalLength:6.4,sepalWidth:2.9,petalLength:4.3,petalWidth:1.3,species:"versicolor"},{sepalLength:6.6,sepalWidth:3,petalLength:4.4,petalWidth:1.4,species:"versicolor"},{sepalLength:6.8,sepalWidth:2.8,petalLength:4.8,petalWidth:1.4,species:"versicolor"},{sepalLength:6.7,sepalWidth:3,petalLength:5,petalWidth:1.7,species:"versicolor"},{sepalLength:6,sepalWidth:2.9,petalLength:4.5,petalWidth:1.5,species:"versicolor"},{sepalLength:5.7,sepalWidth:2.6,petalLength:3.5,petalWidth:1,species:"versicolor"},{sepalLength:5.5,sepalWidth:2.4,petalLength:3.8,petalWidth:1.1,species:"versicolor"},{sepalLength:5.5,sepalWidth:2.4,petalLength:3.7,petalWidth:1,species:"versicolor"},{sepalLength:5.8,sepalWidth:2.7,petalLength:3.9,petalWidth:1.2,species:"versicolor"},{sepalLength:6,sepalWidth:2.7,petalLength:5.1,petalWidth:1.6,species:"versicolor"},{sepalLength:5.4,sepalWidth:3,petalLength:4.5,petalWidth:1.5,species:"versicolor"},{sepalLength:6,sepalWidth:3.4,petalLength:4.5,petalWidth:1.6,species:"versicolor"},{sepalLength:6.7,sepalWidth:3.1,petalLength:4.7,petalWidth:1.5,species:"versicolor"},{sepalLength:6.3,sepalWidth:2.3,petalLength:4.4,petalWidth:1.3,species:"versicolor"},{sepalLength:5.6,sepalWidth:3,petalLength:4.1,petalWidth:1.3,species:"versicolor"},{sepalLength:5.5,sepalWidth:2.5,petalLength:4,petalWidth:1.3,species:"versicolor"},{sepalLength:5.5,sepalWidth:2.6,petalLength:4.4,petalWidth:1.2,species:"versicolor"},{sepalLength:6.1,sepalWidth:3,petalLength:4.6,petalWidth:1.4,species:"versicolor"},{sepalLength:5.8,sepalWidth:2.6,petalLength:4,petalWidth:1.2,species:"versicolor"},{sepalLength:5,sepalWidth:2.3,petalLength:3.3,petalWidth:1,species:"versicolor"},{sepalLength:5.6,sepalWidth:2.7,petalLength:4.2,petalWidth:1.3,species:"versicolor"},{sepalLength:5.7,sepalWidth:3,petalLength:4.2,petalWidth:1.2,species:"versicolor"},{sepalLength:5.7,sepalWidth:2.9,petalLength:4.2,petalWidth:1.3,species:"versicolor"},{sepalLength:6.2,sepalWidth:2.9,petalLength:4.3,petalWidth:1.3,species:"versicolor"},{sepalLength:5.1,sepalWidth:2.5,petalLength:3,petalWidth:1.1,species:"versicolor"},{sepalLength:5.7,sepalWidth:2.8,petalLength:4.1,petalWidth:1.3,species:"versicolor"},{sepalLength:6.3,sepalWidth:3.3,petalLength:6,petalWidth:2.5,species:"virginica"},{sepalLength:5.8,sepalWidth:2.7,petalLength:5.1,petalWidth:1.9,species:"virginica"},{sepalLength:7.1,sepalWidth:3,petalLength:5.9,petalWidth:2.1,species:"virginica"},{sepalLength:6.3,sepalWidth:2.9,petalLength:5.6,petalWidth:1.8,species:"virginica"},{sepalLength:6.5,sepalWidth:3,petalLength:5.8,petalWidth:2.2,species:"virginica"},{sepalLength:7.6,sepalWidth:3,petalLength:6.6,petalWidth:2.1,species:"virginica"},{sepalLength:4.9,sepalWidth:2.5,petalLength:4.5,petalWidth:1.7,species:"virginica"},{sepalLength:7.3,sepalWidth:2.9,petalLength:6.3,petalWidth:1.8,species:"virginica"},{sepalLength:6.7,sepalWidth:2.5,petalLength:5.8,petalWidth:1.8,species:"virginica"},{sepalLength:7.2,sepalWidth:3.6,petalLength:6.1,petalWidth:2.5,species:"virginica"},{sepalLength:6.5,sepalWidth:3.2,petalLength:5.1,petalWidth:2,species:"virginica"},{sepalLength:6.4,sepalWidth:2.7,petalLength:5.3,petalWidth:1.9,species:"virginica"},{sepalLength:6.8,sepalWidth:3,petalLength:5.5,petalWidth:2.1,species:"virginica"},{sepalLength:5.7,sepalWidth:2.5,petalLength:5,petalWidth:2,species:"virginica"},{sepalLength:5.8,sepalWidth:2.8,petalLength:5.1,petalWidth:2.4,species:"virginica"},{sepalLength:6.4,sepalWidth:3.2,petalLength:5.3,petalWidth:2.3,species:"virginica"},{sepalLength:6.5,sepalWidth:3,petalLength:5.5,petalWidth:1.8,species:"virginica"},{sepalLength:7.7,sepalWidth:3.8,petalLength:6.7,petalWidth:2.2,species:"virginica"},{sepalLength:7.7,sepalWidth:2.6,petalLength:6.9,petalWidth:2.3,species:"virginica"},{sepalLength:6,sepalWidth:2.2,petalLength:5,petalWidth:1.5,species:"virginica"},{sepalLength:6.9,sepalWidth:3.2,petalLength:5.7,petalWidth:2.3,species:"virginica"},{sepalLength:5.6,sepalWidth:2.8,petalLength:4.9,petalWidth:2,species:"virginica"},{sepalLength:7.7,sepalWidth:2.8,petalLength:6.7,petalWidth:2,species:"virginica"},{sepalLength:6.3,sepalWidth:2.7,petalLength:4.9,petalWidth:1.8,species:"virginica"},{sepalLength:6.7,sepalWidth:3.3,petalLength:5.7,petalWidth:2.1,species:"virginica"},{sepalLength:7.2,sepalWidth:3.2,petalLength:6,petalWidth:1.8,species:"virginica"},{sepalLength:6.2,sepalWidth:2.8,petalLength:4.8,petalWidth:1.8,species:"virginica"},{sepalLength:6.1,sepalWidth:3,petalLength:4.9,petalWidth:1.8,species:"virginica"},{sepalLength:6.4,sepalWidth:2.8,petalLength:5.6,petalWidth:2.1,species:"virginica"},{sepalLength:7.2,sepalWidth:3,petalLength:5.8,petalWidth:1.6,species:"virginica"},{sepalLength:7.4,sepalWidth:2.8,petalLength:6.1,petalWidth:1.9,species:"virginica"},{sepalLength:7.9,sepalWidth:3.8,petalLength:6.4,petalWidth:2,species:"virginica"},{sepalLength:6.4,sepalWidth:2.8,petalLength:5.6,petalWidth:2.2,species:"virginica"},{sepalLength:6.3,sepalWidth:2.8,petalLength:5.1,petalWidth:1.5,species:"virginica"},{sepalLength:6.1,sepalWidth:2.6,petalLength:5.6,petalWidth:1.4,species:"virginica"},{sepalLength:7.7,sepalWidth:3,petalLength:6.1,petalWidth:2.3,species:"virginica"},{sepalLength:6.3,sepalWidth:3.4,petalLength:5.6,petalWidth:2.4,species:"virginica"},{sepalLength:6.4,sepalWidth:3.1,petalLength:5.5,petalWidth:1.8,species:"virginica"},{sepalLength:6,sepalWidth:3,petalLength:4.8,petalWidth:1.8,species:"virginica"},{sepalLength:6.9,sepalWidth:3.1,petalLength:5.4,petalWidth:2.1,species:"virginica"},{sepalLength:6.7,sepalWidth:3.1,petalLength:5.6,petalWidth:2.4,species:"virginica"},{sepalLength:6.9,sepalWidth:3.1,petalLength:5.1,petalWidth:2.3,species:"virginica"},{sepalLength:5.8,sepalWidth:2.7,petalLength:5.1,petalWidth:1.9,species:"virginica"},{sepalLength:6.8,sepalWidth:3.2,petalLength:5.9,petalWidth:2.3,species:"virginica"},{sepalLength:6.7,sepalWidth:3.3,petalLength:5.7,petalWidth:2.5,species:"virginica"},{sepalLength:6.7,sepalWidth:3,petalLength:5.2,petalWidth:2.3,species:"virginica"},{sepalLength:6.3,sepalWidth:2.5,petalLength:5,petalWidth:1.9,species:"virginica"},{sepalLength:6.5,sepalWidth:3,petalLength:5.2,petalWidth:2,species:"virginica"},{sepalLength:6.2,sepalWidth:3.4,petalLength:5.4,petalWidth:2.3,species:"virginica"},{sepalLength:5.9,sepalWidth:3,petalLength:5.1,petalWidth:1.8,species:"virginica"}],g=["#e0ac2b","#e85252","#6689c6","#9a6fb0","#a53253","#69b3a2"],u={top:20,right:20,bottom:20,left:20},L=i(2535),W=i(6920),f=i.n(W),v=function(e){var t=e.xScale,i=e.pixelsPerTick,l=e.label,n=t.range(),r=(0,s.useMemo)((function(){var e=n[1]-n[0],a=Math.floor(e/i);return t.ticks(a).map((function(e){return{value:e,xOffset:t(e)}}))}),[t]);return(0,a.jsxs)("g",{className:f().axisContainer,children:[(0,a.jsx)("path",{d:["M",n[0],0,"L",n[1],0].join(" "),fill:"none",stroke:"currentColor",className:f().line}),r.map((function(e){var t=e.value,i=e.xOffset;return(0,a.jsxs)("g",{transform:"translate(".concat(i,", 0)"),children:[(0,a.jsx)("line",{y2:3,stroke:"currentColor"}),(0,a.jsx)("text",{className:f().label,style:{transform:"translateY(12px)"},children:t})]},t)})),(0,a.jsx)("text",{className:f().title,x:n[1],y:30,textAnchor:"end",children:l})]})};function m(e){return function(e){if(Array.isArray(e)){for(var t=0,i=new Array(e.length);t<e.length;t++)i[t]=e[t];return i}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var x=function(e){var t=e.width,i=e.height,l=e.data,n=e.limits,r=t-u.right-u.left,p=i-u.top-u.bottom,h=m(new Set(l.map((function(e){return e.group})))).sort(),c=L.PKp().domain(h).range(g),o=(0,s.useMemo)((function(){return L.BYU().domain(n).range([10,r]).nice()}),[l,t]),d=(0,s.useMemo)((function(){return L.Ly_().value((function(e){return e})).domain(o.domain()).thresholds(o.ticks(40))}),[o]),W=(0,s.useMemo)((function(){return l.map((function(e){return{group:e,buckets:d(e.values)}}))}),[l]),f=(0,s.useMemo)((function(){var e,t=(e=Math).max.apply(e,m(W.map((function(e){var t;return(t=Math).max.apply(t,m(e.buckets.map((function(e){return null===e||void 0===e?void 0:e.length}))))}))));return L.BYU().range([p,0]).domain([0,t]).nice()}),[l,i]),x=W.map((function(e,t){return e.buckets.map((function(i,s){return(0,a.jsx)("rect",{x:o(i.x0)+0,width:o(i.x1)-o(i.x0)-0,y:f(i.length),height:p-f(i.length),fill:c(e.group.group),opacity:1},t+"_"+s)}))}));return(0,a.jsx)("svg",{width:t,height:i,children:(0,a.jsxs)("g",{width:r,height:p,transform:"translate(".concat([u.left,u.top].join(","),")"),children:[x,(0,a.jsx)("g",{transform:"translate(0, ".concat(p,")"),children:(0,a.jsx)(v,{xScale:o,pixelsPerTick:20})})]})})},j=function(e){var t=e.yScale,i=e.pixelsPerTick,l=e.label,n=t.range(),r=(0,s.useMemo)((function(){var e=n[0]-n[1],a=Math.floor(e/i);return t.ticks(a).map((function(e){return{value:e,yOffset:t(e)}}))}),[t]);return(0,a.jsxs)("g",{className:f().axisContainer,children:[(0,a.jsx)("path",{d:["M",0,n[0],"L",0,n[1]].join(" "),fill:"none",stroke:"black",strokeWidth:.5,className:f().line}),r.map((function(e){var t=e.value,i=e.yOffset;return(0,a.jsxs)("g",{transform:"translate(0, ".concat(i,")"),children:[(0,a.jsx)("line",{x2:-3,stroke:"currentColor"}),(0,a.jsx)("text",{style:{transform:"translateX(-20px)"},className:f().label,x:10,children:t},t)]},t)})),(0,a.jsx)("text",{className:f().title,x:0,y:-30,textAnchor:"end",transform:"rotate(-90)",children:l})]})};function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=[],a=!0,s=!1,l=void 0;try{for(var n,r=e[Symbol.iterator]();!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(p){s=!0,l=p}finally{try{a||null==r.return||r.return()}finally{if(s)throw l}}return i}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function w(e){return function(e){if(Array.isArray(e)){for(var t=0,i=new Array(e.length);t<e.length;t++)i[t]=e[t];return i}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var y=function(e){var t=e.width,i=e.height,l=e.data,n=e.xLabel,r=e.yLabel,p=t-u.right-u.left,h=i-u.top-u.bottom,c=(0,s.useMemo)((function(){var e=b(L.Wem(l.map((function(e){return e.y}))),2),t=e[0],i=e[1];return L.BYU().domain([t,i]).range([h,0]).nice()}),[l,i]),o=(0,s.useMemo)((function(){var e=b(L.Wem(l.map((function(e){return e.x}))),2),t=(e[0],e[1]);return L.BYU().domain([0,t]).range([0,p]).nice()}),[l,t]),d=w(new Set(l.map((function(e){return e.group})))).sort(),W=L.PKp().domain(d).range(g);console.log("scatter",W("setosa"));var f=l.map((function(e,t){return(0,a.jsx)("circle",{r:3,cx:o(e.x),cy:c(e.y),opacity:1,stroke:W(e.group),fill:W(e.group),fillOpacity:.8,strokeWidth:1},t)}));return(0,a.jsx)("svg",{width:t,height:i,style:{overflow:"visible"},children:(0,a.jsxs)("g",{width:p,height:h,transform:"translate(".concat([u.left,u.top].join(","),")"),children:[f,(0,a.jsx)(j,{yScale:c,pixelsPerTick:20,label:r}),(0,a.jsx)("g",{transform:"translate(0, ".concat(h,")"),children:(0,a.jsx)(v,{xScale:o,pixelsPerTick:20,label:n})})]})})};function N(e){return function(e){if(Array.isArray(e)){for(var t=0,i=new Array(e.length);t<e.length;t++)i[t]=e[t];return i}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var k=function(e){var t=e.width,i=e.height,s=e.data,l=t-u.right-u.left,n=i-u.top-u.bottom,r=["sepalLength","sepalWidth","petalLength","petalWidth"],p=N(new Set(s.map((function(e){return e.species})))),h=l/r.length,c=n/r.length,o=r.map((function(e,t){return r.map((function(i,l){if(i===e){var n=p.map((function(e){return{group:e,values:s.filter((function(t){return t.species===e})).map((function(e){return e[i]}))}}));return(0,a.jsx)(x,{width:h,height:c,data:n,limits:[0,8]})}var o=s.map((function(t){return{x:t[i],y:t[e],group:t.species}}));return(0,a.jsx)("div",{children:(0,a.jsx)(y,{width:h,height:c,data:o,yLabel:0===l?r[t]:void 0,xLabel:t===r.length-1?r[l]:void 0})},t+"-"+l)}))}));return(0,a.jsx)("div",{style:{width:t,height:i},children:(0,a.jsx)("div",{style:{width:l,height:n,display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",transform:"translate(".concat(u.left,"px, ").concat(u.top,"px)")},children:o})})},_=function(e){var t=e.width,i=void 0===t?700:t,s=e.height,l=void 0===s?400:s;return(0,a.jsx)(k,{data:d,width:i,height:l})},A=(0,a.jsxs)("p",{children:["A"," ",(0,a.jsx)("a",{href:"https://www.data-to-viz.com/graph/correlogram.html",children:"correlogram"})," ","allows to study the relationship between many numeric variables. It is challenging to build one using react and d3.js. This page shows various example and provide explanations about the code."]}),z='\nconst data = [\n  {\n    "country": "Afghanistan",\n    "continent": "Asia",\n    "lifeExp": 43.828,\n    "pop": 31889923,\n    "gdpPercap": 974.5803384\n  },\n  {\n    "country": "Albania",\n    "continent": "Europe",\n    "lifeExp": 76.423,\n    "pop": 3600523,\n    "gdpPercap": 5937.029526\n  },\n  ...\n]\n'.trim();function S(){return(0,a.jsxs)(l.A,{title:"Correlogram with React",seoDescription:"How to build a correlogram with React and D3.js. A set of re-usable components",children:[(0,a.jsx)(n.Z,{title:"Correlogram",description:A,chartType:"correlogram"}),(0,a.jsxs)(h.U,{title:"The data",startOpen:!0,toc:"input data",children:[(0,a.jsx)("p",{children:"Todo. Still not sure what's the best data input for this kind of chart. Should check open source viz libraries for what they suggest."}),(0,a.jsx)(c.d,{code:z})]}),(0,a.jsxs)(h.U,{title:"Most basic correlogram",startOpen:!0,toc:"basic correlogram",children:[(0,a.jsx)("p",{children:"The following correlogram is built with a set of scatterplots and a few histograms for the diagonal. Graphs are made with the same 2 components that are called multiple times."}),(0,a.jsxs)("p",{children:["I find this react code much more readable than the pure"," ",(0,a.jsx)("a",{href:"https://d3-graph-gallery.com/graph/correlogram_histo.html",children:"d3 alternative"}),"."]}),(0,a.jsx)("p",{}),(0,a.jsx)(o.$,{VizComponent:_,vizName:"CorrelogramBasic",maxWidth:700,height:700,caption:"A correlogram built with react and d3.js. It shows the relationship between the 4 numeric variables of the famous iris dataset."})]}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 my-3"}),(0,a.jsx)(r.Z,{chartFamily:"correlation"}),(0,a.jsx)("div",{className:"mt-20"}),(0,a.jsx)(p.Z,{})]})}},3187:function(e){e.exports={tooltip:"tooltip_tooltip__Fv96Y",right:"tooltip_right__lXq9G",left:"tooltip_left__hUc5l",bottom:"tooltip_bottom__Qzoh5",top:"tooltip_top__qDz28"}},3924:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__oi0XB",tocItem:"table-of-content_tocItem__fZBSX",tocItemActive:"table-of-content_tocItemActive__kiClt"}},6920:function(e){e.exports={axisContainer:"axis_axisContainer__eTDfN",label:"axis_label__v_Sb0",title:"axis_title__DtsyP"}}},function(e){e.O(0,[3888,5660,358,9774,2888,179],(function(){return t=4101,e(e.s=t);var t}));var t=e.O();_N_E=t}]);