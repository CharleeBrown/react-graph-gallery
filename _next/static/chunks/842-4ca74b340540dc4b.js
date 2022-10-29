(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[842],{33:function(t,e,r){"use strict";r.d(e,{$:function(){return l}});var i=r(5893),n=r(7294),o=r(217),s=r(4893),c=r(5380),a=r(7975),l=function(t){var e=t.VizComponent,r=t.vizName,l=t.height,d=void 0===l?400:l,h=t.maxWidth,u=void 0===h?800:h,f=t.caption,x=(0,n.useState)(!1),m=x[0],p=x[1],v=(0,n.useRef)(null),j=(0,o.B)(v);return(0,i.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:m?(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,i.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,i.jsx)(a.X,{vizName:r})}),(0,i.jsx)("div",{className:"flex justify-center mt-2",children:(0,i.jsx)(s.z,{size:"sm",onClick:function(){return p(!m)},children:"Hide Sandbox"})})]}):(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,i.jsx)("div",{className:"bg-gray-50 w-screen flex justify-center",children:(0,i.jsx)("div",{style:{height:d,width:"100%",maxWidth:u},ref:v,children:(0,i.jsx)(e,{height:d,width:j.width})})}),(0,i.jsx)(c.Y,{children:f}),(0,i.jsx)("div",{className:"flex justify-center",children:(0,i.jsx)(s.z,{size:"sm",onClick:function(){return p(!m)},children:"Show code"})})]})})}},7975:function(t,e,r){"use strict";r.d(e,{X:function(){return n}});var i=r(5893),n=(r(7294),function(t){var e="https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t.vizName+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0";return(0,i.jsx)("iframe",{src:e,style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})})},1884:function(t,e,r){"use strict";r.d(e,{A:function(){return u}});var i=r(5893),n=r(3185),o=r(1261),s=r(7294),c=r(3924),a=r.n(c);function l(){var t=(0,s.useState)([]),e=t[0],r=t[1],n=(0,s.useState)(0),o=n[0],c=n[1];return(0,s.useEffect)((function(){var t=Array.from(document.querySelectorAll("h2"));r(t)}),[]),(0,s.useEffect)((function(){var t=function(){var t=e.map((function(t){return t.offsetTop-t.scrollTop+t.clientTop})),r=window.scrollY+150,i=t.reduce((function(t,e){return Math.abs(e-r)<Math.abs(t-r)?e:t}),0),n=t.findIndex((function(t){return t===i}));c(-1===n?0:n)};return window.addEventListener("scroll",t),function(){return window.removeEventListener("scroll",t)}}),[e]),(0,i.jsx)("div",{className:a().tableOfContent,children:e.map((function(t,r){return(0,i.jsx)("p",{className:o===r?"".concat(a().tocItem," ").concat(a().tocItemActive):a().tocItem,onClick:function(t){t.preventDefault(),e[r].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:t.id.charAt(0).toUpperCase()+t.id.slice(1)},t.id)}))})}var d=r(8171),h=r(6978),u=function(t){var e=t.children,r=t.title,s=t.seoDescription;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.A,{title:r,seoDescription:s}),(0,i.jsxs)("div",{className:"wrapper",children:[(0,i.jsx)(n.Z,{}),e]}),(0,i.jsx)(h.Z,{}),(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsx)(o.Z,{})}),(0,i.jsx)(l,{})]})}},1687:function(t,e,r){"use strict";r.d(e,{J:function(){return o}});var i=r(5893),n=r(1664),o=function(t){var e=t.children,r=t.href,o=t.isFilled,s=t.size,c=void 0===s?"md":s,a=t.isFaded,l=r.startsWith("www")||r.startsWith("http"),d="font-normal rounded mr-1 cursor-pointer border-reactGallery border ";d+=o?" bg-reactGallery hover:bg-reactGallery text-white ":" bg-white hover:bg-reactGallery hover:text-white text-reactGallery ","sm"===c&&(d+="text-sm py-1 px-2 "),"md"===c&&(d+="text-md py-2 px-4 "),a&&(d+="opacity-60");var h=(0,i.jsx)("span",{className:d,children:e});return l?(0,i.jsx)("a",{href:r,children:h}):(0,i.jsx)(n.default,{href:r,passHref:!0,children:(0,i.jsx)("a",{children:h})})}},8807:function(t,e,r){"use strict";r.d(e,{Z:function(){return h}});var i=r(5893),n=(r(7294),r(1878)),o=r(3414),s=r(3919),c=r(1687),a=r(3187),l=r.n(a),d=function(t){var e=t.direction,r=t.text,n=t.children;return(0,i.jsx)("span",{className:l().tooltip+" "+l()[e],id:r,children:n})};function h(t){var e=t.title,r=t.description,a=t.chartType,l=t.showSectionLink,h=void 0!==l&&l,u=t.showInspirationLink,f=void 0===u||u,x=t.showD3GalleryLink,m=void 0===x||x,p=n.c.filter((function(t){return t.id===a}))[0];return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"w-full pt-1 sm:pt-28 pb-20 ",children:[(0,i.jsx)("h1",{children:e}),(0,i.jsx)(s.r,{}),(0,i.jsx)("div",{className:"max-w-xxl py-2",children:(0,i.jsx)("p",{children:r})}),a&&(0,i.jsx)("span",{className:"text-gray-400 text-sm font-light",children:"Useful links"}),a&&(0,i.jsxs)("div",{className:"flex flex-row flex-wrap",children:[h&&(0,i.jsx)(d,{text:"kkkk",direction:"bottom",children:(0,i.jsx)(c.J,{href:(0,o.y)(p.reactURL),size:"sm",children:p.label+" section"})}),f&&(0,i.jsx)(d,{text:"Hundreds of stunning dataviz projects to gather inspiration",direction:"bottom",children:(0,i.jsx)(c.J,{href:"https://www.dataviz-inspiration.com/"+p.id,size:"sm",children:"inspiration"})}),m&&(0,i.jsx)(d,{text:"Pure d3 implementation, no React",direction:"bottom",children:(0,i.jsx)(c.J,{href:p.d3URL,size:"sm",children:"d3 gallery"})}),(0,i.jsx)(d,{text:"Dataviz theory about this chart",direction:"bottom",children:(0,i.jsx)(c.J,{href:p.dataToVizURL,isFilled:!0,size:"sm",children:"About this chart"})})]})]})})}},4893:function(t,e,r){"use strict";r.d(e,{z:function(){return n}});var i=r(5893),n=function(t){var e=t.children,r=t.onClick,n=t.isFilled,o=t.size,s=void 0===o?"md":o,c="rounded m-1 cursor-pointer border-reactGallery border ";return"sm"===s&&(c+="text-sm py-1 px-2"),"md"===s&&(c+="text-md py-2 px-4"),c+=n?" bg-reactGallery hover:bg-reactGallery text-white":" bg-white hover:bg-reactGallery hover:text-white text-reactGallery",(0,i.jsx)("button",{className:c,onClick:r,children:e})}},5380:function(t,e,r){"use strict";r.d(e,{Y:function(){return n}});var i=r(5893),n=function(t){var e=t.children;return(0,i.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:e})}},217:function(t,e,r){"use strict";r.d(e,{B:function(){return n}});var i=r(7294),n=function(t){var e=function(){return{width:t.current?t.current.offsetWidth:0,height:t.current?t.current.offsetHeight:0}},r=(0,i.useState)(e),n=r[0],o=r[1],s=function(){o(e())};return(0,i.useEffect)((function(){return window.addEventListener("resize",s),function(){return window.removeEventListener("resize",s)}}),[]),(0,i.useLayoutEffect)((function(){s()}),[]),n}},633:function(t,e,r){"use strict";r.d(e,{d:function(){return l}});var i=r(5893),n=r(7294),o=r(2535),s=function(t){var e=t.width,r=t.height;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("defs",{children:(0,i.jsx)("pattern",{id:"pattern_rkDsm",patternUnits:"userSpaceOnUse",width:"9.5",height:"2.5",patternTransform:"rotate(41)",children:(0,i.jsx)("line",{x1:"0",y:"0",x2:"0",y2:"9.5",stroke:"#D9B9F3",strokeWidth:"1"})})}),(0,i.jsx)("rect",{width:e,height:r,fill:"url(#pattern_rkDsm)",opacity:"1"})]})},c={top:30,right:30,bottom:50,left:50},a=function(t){var e=t.width,r=t.height,a=(0,n.useRef)(null),l=e-c.right-c.left,d=r-c.top-c.bottom,h=(0,n.useMemo)((function(){return o.BYU().domain([0,10]).range([0,l])}),[e]),u=(0,n.useMemo)((function(){return o.BYU().domain([0,10]).range([d,0])}),[r]);return(0,n.useEffect)((function(){var t=o.Ys(a.current);t.selectAll("*").remove();var e=o.LLu(h);t.append("g").attr("transform","translate(0,"+d+")").call(e);var r=o.y4O(u);t.append("g").call(r)}),[h,u,d]),(0,i.jsx)("div",{children:(0,i.jsxs)("svg",{width:e,height:r,style:{display:"inline-block"},children:[(0,i.jsx)("g",{width:l,height:d,transform:"translate(".concat([c.left,c.top].join(","),")"),children:(0,i.jsx)(s,{width:l,height:d})}),(0,i.jsx)("g",{width:l,height:d,ref:a,transform:"translate(".concat([c.left,c.top].join(","),")")})]})})},l=function(t){var e=t.width,r=void 0===e?700:e,n=t.height,o=void 0===n?400:n;return(0,i.jsx)(a,{width:r,height:o})}},3187:function(t){t.exports={tooltip:"tooltip_tooltip__Fv96Y",right:"tooltip_right__lXq9G",left:"tooltip_left__hUc5l",bottom:"tooltip_bottom__Qzoh5",top:"tooltip_top__qDz28"}},3924:function(t){t.exports={tableOfContent:"table-of-content_tableOfContent__oi0XB",tocItem:"table-of-content_tocItem__fZBSX",tocItemActive:"table-of-content_tocItemActive__kiClt"}}}]);