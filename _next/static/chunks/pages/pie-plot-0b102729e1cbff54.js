(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3053],{6350:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pie-plot",function(){return n(2741)}])},3485:function(e,t,n){"use strict";n.d(t,{U:function(){return a}});var r=n(5893),i=n(7294),a=function(e){var t=e.startOpen,n=e.title,a=e.children,s=e.toc,o=(0,i.useState)(t),c=o[0],l=o[1],d=c?"max-h-full":"max-h-0",u=c?"overflow-visible":"overflow-hidden";return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("h2",{className:"cursor-pointer",onClick:function(){return l(!c)},id:s,children:[c?(0,r.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"-"}):(0,r.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"+"}),n]}),(0,r.jsx)("div",{className:"transition-max-height ease-in duration-300  "+d+" "+u,children:a})]})}},7197:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(5893),i=(n(7294),n(6761)),a=n(1878),s=n(1664),o=a.c.filter((function(e){return"general"===e.family})).map((function(e){return e.logo}));function c(e){var t=e.chartLogo,n=e.caption,a=e.link,c=e.isAvailable,d=e.size,u=o.includes(t),h=c?"opacity-100":"opacity-20",f=c?"cursor-pointer":"cursor-not-allowed";return(0,r.jsx)(s.default,{href:c?a:"subscribe",children:(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[(0,r.jsxs)("div",{style:{width:d,height:d},className:"relative mr-2 rounded-full "+h+" "+f,children:[(0,r.jsx)("div",{className:"absolute",children:(0,r.jsx)(i.Z,{chartLogo:t})}),u?(0,r.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,r.jsx)(l,{size:d})}):(0,r.jsx)("div",{className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full bg-purple-800 z-30",children:(0,r.jsx)("p",{className:"text-white text-4xl",children:"+"})})]}),(0,r.jsx)("p",{className:"font-light text-sm text-gray-600 "+h,children:n})]})})}var l=function(e){var t=e.size;return(0,r.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,r.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})},d=n(3414),u={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function h(e){var t=e.chartFamily,n=a.c.filter((function(e){return e.family===t})).map((function(e,t){var n=(0,d.y)(e.reactURL);return(0,r.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,r.jsx)(c,{link:n,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:129})},t)}));return(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null===u||void 0===u?void 0:u[t]}),(0,r.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:n})]})}},33:function(e,t,n){"use strict";n.d(t,{$:function(){return l}});var r=n(5893),i=n(7294),a=n(217),s=n(4893),o=n(5380),c=n(7975),l=function(e){var t=e.VizComponent,n=e.vizName,l=e.height,d=void 0===l?400:l,u=e.maxWidth,h=void 0===u?800:u,f=e.caption,m=(0,i.useState)(!1),p=m[0],x=m[1],v=(0,i.useRef)(null),j=(0,a.B)(v);return(0,r.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:p?(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,r.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,r.jsx)(c.X,{vizName:n})}),(0,r.jsx)("div",{className:"flex justify-center mt-2",children:(0,r.jsx)(s.z,{size:"sm",onClick:function(){return x(!p)},children:"Hide Sandbox"})})]}):(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,r.jsx)("div",{className:"bg-gray-50 w-screen flex justify-center",children:(0,r.jsx)("div",{style:{height:d,width:"100%",maxWidth:h},ref:v,children:(0,r.jsx)(t,{height:d,width:j.width})})}),(0,r.jsx)(o.Y,{children:f}),(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsx)(s.z,{size:"sm",onClick:function(){return x(!p)},children:"Show code"})})]})})}},7975:function(e,t,n){"use strict";n.d(t,{X:function(){return i}});var r=n(5893),i=(n(7294),function(e){var t="https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+e.vizName+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0";return(0,r.jsx)("iframe",{src:t,style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})})},1884:function(e,t,n){"use strict";n.d(t,{A:function(){return h}});var r=n(5893),i=n(3185),a=n(1261),s=n(7294),o=n(3924),c=n.n(o);function l(){var e=(0,s.useState)([]),t=e[0],n=e[1],i=(0,s.useState)(0),a=i[0],o=i[1];return(0,s.useEffect)((function(){var e=Array.from(document.querySelectorAll("h2"));n(e)}),[]),(0,s.useEffect)((function(){var e=function(){var e=t.map((function(e){return e.offsetTop-e.scrollTop+e.clientTop})),n=window.scrollY+150,r=e.reduce((function(e,t){return Math.abs(t-n)<Math.abs(e-n)?t:e}),0),i=e.findIndex((function(e){return e===r}));o(-1===i?0:i)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[t]),(0,r.jsx)("div",{className:c().tableOfContent,children:t.map((function(e,n){return(0,r.jsx)("p",{className:a===n?"".concat(c().tocItem," ").concat(c().tocItemActive):c().tocItem,onClick:function(e){e.preventDefault(),t[n].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:e.id.charAt(0).toUpperCase()+e.id.slice(1)},e.id)}))})}var d=n(8171),u=n(6978),h=function(e){var t=e.children,n=e.title,s=e.seoDescription;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.A,{title:n,seoDescription:s}),(0,r.jsxs)("div",{className:"wrapper",children:[(0,r.jsx)(i.Z,{}),t]}),(0,r.jsx)(u.Z,{}),(0,r.jsx)("div",{className:"wrapper",children:(0,r.jsx)(a.Z,{})}),(0,r.jsx)(l,{})]})}},1687:function(e,t,n){"use strict";n.d(t,{J:function(){return a}});var r=n(5893),i=n(1664),a=function(e){var t=e.children,n=e.href,a=e.isFilled,s=e.size,o=void 0===s?"md":s,c=e.isFaded,l=n.startsWith("www")||n.startsWith("http"),d="font-normal rounded mr-1 cursor-pointer border-reactGallery border ";d+=a?" bg-reactGallery hover:bg-reactGallery text-white ":" bg-white hover:bg-reactGallery hover:text-white text-reactGallery ","sm"===o&&(d+="text-sm py-1 px-2 "),"md"===o&&(d+="text-md py-2 px-4 "),c&&(d+="opacity-60");var u=(0,r.jsx)("span",{className:d,children:t});return l?(0,r.jsx)("a",{href:n,children:u}):(0,r.jsx)(i.default,{href:n,passHref:!0,children:(0,r.jsx)("a",{children:u})})}},8807:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(5893),i=(n(7294),n(1878)),a=n(3414),s=n(3919),o=n(1687),c=n(3187),l=n.n(c),d=function(e){var t=e.direction,n=e.text,i=e.children;return(0,r.jsx)("span",{className:l().tooltip+" "+l()[t],id:n,children:i})};function u(e){var t=e.title,n=e.description,c=e.chartType,l=e.showSectionLink,u=void 0!==l&&l,h=e.showInspirationLink,f=void 0===h||h,m=e.showD3GalleryLink,p=void 0===m||m,x=i.c.filter((function(e){return e.id===c}))[0];return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"w-full pt-1 sm:pt-28 pb-20 ",children:[(0,r.jsx)("h1",{children:t}),(0,r.jsx)(s.r,{}),(0,r.jsx)("div",{className:"max-w-xxl py-2",children:(0,r.jsx)("p",{children:n})}),c&&(0,r.jsx)("span",{className:"text-gray-400 text-sm font-light",children:"Useful links"}),c&&(0,r.jsxs)("div",{className:"flex flex-row flex-wrap",children:[u&&(0,r.jsx)(d,{text:"kkkk",direction:"bottom",children:(0,r.jsx)(o.J,{href:(0,a.y)(x.reactURL),size:"sm",children:x.label+" section"})}),f&&(0,r.jsx)(d,{text:"Hundreds of stunning dataviz projects to gather inspiration",direction:"bottom",children:(0,r.jsx)(o.J,{href:"https://www.dataviz-inspiration.com/"+x.id,size:"sm",children:"inspiration"})}),p&&(0,r.jsx)(d,{text:"Pure d3 implementation, no React",direction:"bottom",children:(0,r.jsx)(o.J,{href:x.d3URL,size:"sm",children:"d3 gallery"})}),(0,r.jsx)(d,{text:"Dataviz theory about this chart",direction:"bottom",children:(0,r.jsx)(o.J,{href:x.dataToVizURL,isFilled:!0,size:"sm",children:"About this chart"})})]})]})})}},4893:function(e,t,n){"use strict";n.d(t,{z:function(){return i}});var r=n(5893),i=function(e){var t=e.children,n=e.onClick,i=e.isFilled,a=e.size,s=void 0===a?"md":a,o="rounded m-1 cursor-pointer border-reactGallery border ";return"sm"===s&&(o+="text-sm py-1 px-2"),"md"===s&&(o+="text-md py-2 px-4"),o+=i?" bg-reactGallery hover:bg-reactGallery text-white":" bg-white hover:bg-reactGallery hover:text-white text-reactGallery",(0,r.jsx)("button",{className:o,onClick:n,children:t})}},5380:function(e,t,n){"use strict";n.d(t,{Y:function(){return i}});var r=n(5893),i=function(e){var t=e.children;return(0,r.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},8193:function(e,t,n){"use strict";n.d(t,{d:function(){return o}});var r=n(5893),i=n(4725),a=n.n(i),s=n(7294),o=function(e){var t=e.code,n=(0,s.useRef)(null);return(0,s.useEffect)((function(){n.current&&a().highlightElement(n.current)}),[n,t]),(0,r.jsx)("div",{className:"mb-6",children:(0,r.jsx)("pre",{className:"rounded-md line-numbers",children:(0,r.jsx)("code",{ref:n,className:"p-0 language-js",children:t})})})}},217:function(e,t,n){"use strict";n.d(t,{B:function(){return i}});var r=n(7294),i=function(e){var t=function(){return{width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}},n=(0,r.useState)(t),i=n[0],a=n[1],s=function(){a(t())};return(0,r.useEffect)((function(){return window.addEventListener("resize",s),function(){return window.removeEventListener("resize",s)}}),[]),(0,r.useLayoutEffect)((function(){s()}),[]),i}},2741:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var r=n(5893),i=n(7294),a=n(1884),s=n(8807),o=n(6978),c=n(33),l=n(7197),d=n(3485),u=n(8193),h=[{name:"Mark",value:90},{name:"Robert",value:12},{name:"Emily",value:34},{name:"Marion",value:53},{name:"Nicolas",value:98}],f=[{name:"Mark",value:90},{name:"Robert",value:12},{name:"Emily",value:34},{name:"Marion",value:53},{name:"Nicolas",value:98}],m=n(2535),p=["#98abc5","#8a89a6","#7b6888","#6b486b","#a05d56"],x=function(e){var t=e.width,n=e.height,a=e.data,s=Math.min(t,n)/2-30,o=(0,i.useMemo)((function(){return m.ve8().value((function(e){return e.value}))(a)}),[a]),c=(0,i.useMemo)((function(){var e=m.Nb1();return o.map((function(t){return e({innerRadius:0,outerRadius:s,startAngle:t.startAngle,endAngle:t.endAngle})}))}),[s,o]);return(0,r.jsx)("svg",{width:t,height:n,style:{display:"inline-block"},children:(0,r.jsx)("g",{transform:"translate(".concat(t/2,", ").concat(n/2,")"),children:c.map((function(e,t){return(0,r.jsx)("path",{d:e,fill:p[t]},t)}))})})},v=function(e){var t=e.width,n=void 0===t?700:t,i=e.height,a=void 0===i?400:i;return(0,r.jsx)(x,{data:f,width:n,height:a})},j=(0,r.jsxs)("p",{children:["The ",(0,r.jsx)("a",{href:"https://www.data-to-viz.com/caveat/pie.html",children:"pie chart"})," is both the most common and the most criticized chart. D3.js has a"," ",(0,r.jsx)("code",{children:"pie()"})," function that creates some svg ",(0,r.jsx)("code",{children:"path"})," for you, ready to be renderered with React."]}),b='\nconst data = [\n  {name:"Mark", value: 90},\n  {name:"Robert", value: 12},\n  {name:"Emily", value: 34},\n  {name:"Marion", value: 53},\n  {name:"Nicolas", value: 98},\n]\n'.trim(),w='\nconst pieGenerator = d3.pie().value((d) => d.value);\nconst pie = pieGenerator(data);\n\n/*\n[\n  {\n      "data": {"name": "Mark", "value": 90},\n      "index": 1,\n      "value": 90,\n      "startAngle": 2.145477909768639,\n      "endAngle": 4.115814765678614,\n      "padAngle": 0\n  }, .... same for other groups\n]\n*/\n'.trim(),g='\nconst arcPathGenerator = d3.arc();\nconst arcs pie.map((p) =>\n      arcPathGenerator({\n        innerRadius: 0,\n        outerRadius: radius,\n        startAngle: p.startAngle,\n        endAngle: p.endAngle,\n      })\n    );\n\n/*\n[\n  "M151,97 A180,180,0,0,1,-148,101 L0,0Z",\n  .... other groups\n]\n*/\n'.trim();function y(){var e=(0,i.useState)(h);e[0],e[1];return(0,r.jsxs)(a.A,{title:"Pie chart with React",seoDescription:"How to build a pie chart with React and D3.js. A set of re-usable components",children:[(0,r.jsx)(s.Z,{title:"Pie chart",description:j,chartType:"pie"}),(0,r.jsxs)(d.U,{title:"Dataset",startOpen:!0,children:[(0,r.jsxs)("p",{children:["The dataset required to build a pie chart is pretty simple. It is an array where each item represents a group of the pie chart. Each item is an object with 2 properties. They provide the group name (",(0,r.jsx)("code",{children:"name"}),") and its value (",(0,r.jsx)("code",{children:"value"}),")."]}),(0,r.jsx)("br",{}),(0,r.jsx)("p",{children:"For instance, here is the dataset used for the simple pie chart below:"}),(0,r.jsx)(u.d,{code:b})]}),(0,r.jsxs)(d.U,{title:"Most basic pie chart",startOpen:!0,children:[(0,r.jsx)("p",{children:"As usual, the math is done thanks to d3.js, and the rendering using React"}),(0,r.jsx)("br",{}),(0,r.jsxs)("p",{children:["First of all, the ",(0,r.jsx)("code",{children:"pie()"})," function is used to compute the start and end angles of each group. By default this function expects an array of number as input. Thus we have to tell it how to find the value to use in our dataset using an assesor function"]}),(0,r.jsx)(u.d,{code:w}),(0,r.jsx)("br",{}),(0,r.jsxs)("p",{children:["From those start and end angles we now need to build a proper string that we can pass as the ",(0,r.jsx)("code",{children:"d"})," attribute of a"," ",(0,r.jsx)("code",{children:"path"}),". This is pretty easy thanks to the"," ",(0,r.jsx)("code",{children:"arc()"})," function of d3. This function must be applied to every item of the pie object created above."]}),(0,r.jsx)(u.d,{code:g}),(0,r.jsx)("br",{}),(0,r.jsx)("p",{children:"And that's it. This array of path can be renderer using react using a map pretty easily."}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)(c.$,{vizName:"PieChartBasic",VizComponent:v,maxWidth:400,height:400,caption:"basic pie chart with react and d3.js"})]}),(0,r.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 my-3"}),(0,r.jsx)(l.Z,{chartFamily:"partOfAWhole"}),(0,r.jsx)("div",{className:"mt-20"}),(0,r.jsx)(o.Z,{})]})}},3187:function(e){e.exports={tooltip:"tooltip_tooltip__Fv96Y",right:"tooltip_right__lXq9G",left:"tooltip_left__hUc5l",bottom:"tooltip_bottom__Qzoh5",top:"tooltip_top__qDz28"}},3924:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__oi0XB",tocItem:"table-of-content_tocItem__fZBSX",tocItemActive:"table-of-content_tocItemActive__kiClt"}}},function(e){e.O(0,[3888,5660,358,9774,2888,179],(function(){return t=6350,e(e.s=t);var t}));var t=e.O();_N_E=t}]);