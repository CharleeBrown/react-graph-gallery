(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6546],{7197:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var i=r(5893),n=(r(7294),r(6761)),s=r(1878),o=r(1664),l=s.c.filter((function(e){return"general"===e.family})).map((function(e){return e.logo}));function c(e){var t=e.chartLogo,r=e.caption,s=e.link,c=e.isAvailable,d=e.size,u=l.includes(t),h=c?"opacity-100":"opacity-20",f=c?"cursor-pointer":"cursor-not-allowed";return(0,i.jsx)(o.default,{href:c?s:"subscribe",children:(0,i.jsxs)("div",{className:"flex flex-col items-center",children:[(0,i.jsxs)("div",{style:{width:d,height:d},className:"relative mr-2 rounded-full "+h+" "+f,children:[(0,i.jsx)("div",{className:"absolute",children:(0,i.jsx)(n.Z,{chartLogo:t})}),u?(0,i.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,i.jsx)(a,{size:d})}):(0,i.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full z-30",children:(0,i.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,i.jsx)("p",{className:"font-light text-sm text-gray-600 "+h,children:r})]})})}var a=function(e){var t=e.size;return(0,i.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,i.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})},d=r(3414),u={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function h(e){var t=e.chartFamily,r=s.c.filter((function(e){return e.family===t})).map((function(e,t){var r=(0,d.y)(e.reactURL);return(0,i.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,i.jsx)(c,{link:r,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:129})},t)}));return(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null===u||void 0===u?void 0:u[t]}),(0,i.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:r})]})}},33:function(e,t,r){"use strict";r.d(t,{$:function(){return a}});var i=r(5893),n=r(7294),s=r(217),o=r(4893),l=r(5380),c=r(7975),a=function(e){var t=e.VizComponent,r=e.vizName,a=e.height,d=void 0===a?400:a,u=e.maxWidth,h=void 0===u?800:u,f=e.caption,x=(0,n.useState)(!1),m=x[0],v=x[1],p=(0,n.useRef)(null),j=(0,s.B)(p);return(0,i.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:m?(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,i.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,i.jsx)(c.X,{vizName:r})}),(0,i.jsx)("div",{className:"flex justify-center mt-2",children:(0,i.jsx)(o.z,{size:"sm",onClick:function(){return v(!m)},children:"Hide Sandbox"})})]}):(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,i.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,i.jsx)("div",{style:{height:d,width:"100%",maxWidth:h},ref:p,className:"pointer-events-auto",children:(0,i.jsx)(t,{height:d,width:j.width})})}),(0,i.jsx)(l.Y,{children:f}),(0,i.jsx)("div",{className:"flex justify-center",children:(0,i.jsx)(o.z,{size:"sm",onClick:function(){return v(!m)},children:"Show code"})})]})})}},7975:function(e,t,r){"use strict";r.d(t,{X:function(){return n}});var i=r(5893),n=(r(7294),function(e){var t="https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+e.vizName+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0";return(0,i.jsx)("iframe",{src:t,style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})})},1884:function(e,t,r){"use strict";r.d(t,{A:function(){return h}});var i=r(5893),n=r(3185),s=r(1261),o=r(7294),l=r(3924),c=r.n(l);function a(){var e=(0,o.useState)([]),t=e[0],r=e[1],n=(0,o.useState)(0),s=n[0],l=n[1];return(0,o.useEffect)((function(){var e=Array.from(document.querySelectorAll("h2"));r(e)}),[]),(0,o.useEffect)((function(){var e=function(){var e=t.map((function(e){return e.offsetTop-e.scrollTop+e.clientTop})),r=window.scrollY+150,i=e.reduce((function(e,t){return Math.abs(t-r)<Math.abs(e-r)?t:e}),0),n=e.findIndex((function(e){return e===i}));l(-1===n?0:n)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[t]),(0,i.jsx)("div",{className:c().tableOfContent,children:t.map((function(e,r){return(0,i.jsx)("p",{className:s===r?"".concat(c().tocItem," ").concat(c().tocItemActive):c().tocItem,onClick:function(e){e.preventDefault(),t[r].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:e.id.charAt(0).toUpperCase()+e.id.slice(1)},e.id)}))})}var d=r(8171),u=r(6978),h=function(e){var t=e.children,r=e.title,o=e.seoDescription;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.A,{title:r,seoDescription:o}),(0,i.jsxs)("div",{className:"wrapper",children:[(0,i.jsx)(n.Z,{}),t]}),(0,i.jsx)(u.Z,{}),(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsx)(s.Z,{})}),(0,i.jsx)(a,{})]})}},1687:function(e,t,r){"use strict";r.d(t,{J:function(){return s}});var i=r(5893),n=r(1664),s=function(e){var t=e.children,r=e.href,s=e.isFilled,o=e.size,l=void 0===o?"md":o,c=e.isFaded,a=r.startsWith("www")||r.startsWith("http"),d="font-normal rounded mr-1 cursor-pointer border-reactGallery border ";d+=s?" bg-reactGallery hover:bg-reactGallery text-white ":" bg-white hover:bg-reactGallery hover:text-white text-reactGallery ","sm"===l&&(d+="text-sm py-1 px-2 "),"md"===l&&(d+="text-md py-2 px-4 "),c&&(d+="opacity-60");var u=(0,i.jsx)("span",{className:d,children:t});return a?(0,i.jsx)("a",{href:r,target:"_blank",children:u}):(0,i.jsx)(n.default,{href:r,passHref:!0,children:(0,i.jsx)("a",{children:u})})}},8807:function(e,t,r){"use strict";r.d(t,{Z:function(){return h}});var i=r(5893),n=(r(7294),r(1878)),s=r(3414),o=r(3919),l=r(1687),c=r(3187),a=r.n(c),d=function(e){var t=e.direction,r=e.text,n=e.children;return(0,i.jsx)("span",{className:a().tooltip+" "+a()[t],id:r,children:n})},u=r(6761);function h(e){var t=e.title,r=e.description,c=e.chartType,a=e.showSectionLink,h=void 0!==a&&a,f=e.showInspirationLink,x=void 0===f||f,m=e.showD3GalleryLink,v=void 0===m||m,p=n.c.find((function(e){return e.id===c}));return p?(0,i.jsxs)("div",{className:"w-full pt-1 sm:pt-28 pb-20 ",children:[(0,i.jsxs)("div",{className:"flex justify-start items-center",children:[(0,i.jsx)("h1",{children:t}),(0,i.jsx)("div",{className:"w-20 ml-4",children:(0,i.jsx)(u.Z,{chartLogo:null===p||void 0===p?void 0:p.logo})})]}),(0,i.jsx)(o.r,{}),(0,i.jsx)("div",{className:"max-w-xxl py-2",children:r}),c&&(0,i.jsx)("span",{className:"text-gray-400 text-sm font-light",children:"Useful links"}),c&&(0,i.jsxs)("div",{className:"flex flex-row flex-wrap",children:[h&&(0,i.jsx)(d,{text:"kkkk",direction:"bottom",children:(0,i.jsx)(l.J,{href:(0,s.y)(p.reactURL),size:"sm",children:p.label+" section"})}),x&&(0,i.jsx)(d,{text:"Hundreds of stunning dataviz projects to gather inspiration",direction:"bottom",children:(0,i.jsx)(l.J,{href:"https://www.dataviz-inspiration.com/"+p.id,size:"sm",children:"inspiration"})}),v&&(0,i.jsx)(d,{text:"Pure d3 implementation, no React",direction:"bottom",children:(0,i.jsx)(l.J,{href:p.d3URL,size:"sm",children:"d3 gallery"})}),(0,i.jsx)(d,{text:"Dataviz theory about this chart",direction:"bottom",children:(0,i.jsx)(l.J,{href:p.dataToVizURL,isFilled:!0,size:"sm",children:"About this chart"})})]})]}):null}},4893:function(e,t,r){"use strict";r.d(t,{z:function(){return n}});var i=r(5893),n=function(e){var t=e.children,r=e.onClick,n=e.isFilled,s=e.size,o=void 0===s?"md":s,l="rounded m-1 cursor-pointer border-reactGallery border ";return"sm"===o&&(l+="text-sm py-1 px-2"),"md"===o&&(l+="text-md py-2 px-4"),l+=n?" bg-reactGallery hover:bg-reactGallery text-white":" bg-white hover:bg-reactGallery hover:text-white text-reactGallery",(0,i.jsx)("button",{className:l,onClick:r,children:t})}},5380:function(e,t,r){"use strict";r.d(t,{Y:function(){return n}});var i=r(5893),n=function(e){var t=e.children;return(0,i.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},217:function(e,t,r){"use strict";r.d(t,{B:function(){return n}});var i=r(7294),n=function(e){var t=function(){return{width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}},r=(0,i.useState)(t),n=r[0],s=r[1],o=function(){s(t())};return(0,i.useEffect)((function(){return window.addEventListener("resize",o),function(){return window.removeEventListener("resize",o)}}),[]),(0,i.useLayoutEffect)((function(){o()}),[]),n}},3187:function(e){e.exports={tooltip:"tooltip_tooltip__Fv96Y",right:"tooltip_right__lXq9G",left:"tooltip_left__hUc5l",bottom:"tooltip_bottom__Qzoh5",top:"tooltip_top__qDz28"}},3924:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__oi0XB",tocItem:"table-of-content_tocItem__fZBSX",tocItemActive:"table-of-content_tocItemActive__kiClt"}}}]);