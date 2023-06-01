(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8093],{1757:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/area-plot",function(){return r(2407)}])},6260:function(e,t,r){"use strict";r.d(t,{U:function(){return n}});var i=r(5893),s=r(7294);let n=e=>{let{startOpen:t,title:r,children:n,toc:a}=e,[l,o]=(0,s.useState)(t);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("h2",{className:"cursor-pointer",onClick:()=>o(!l),id:a,children:[l?(0,i.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"-"}):(0,i.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"+"}),r]}),(0,i.jsx)("div",{className:"transition-max-height ease-in duration-300  "+(l?"max-h-full":"max-h-0")+" "+(l?"overflow-visible":"overflow-hidden"),children:n})]})}},7262:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var i=r(5893);r(7294);var s=r(5887),n=r(8843),a=r(1664),l=r.n(a);let o=n.c.filter(e=>"general"===e.family).map(e=>e.logo);function c(e){let{chartLogo:t,caption:r,link:n,isAvailable:a,size:c}=e,h=o.includes(t),u=a?"opacity-100":"opacity-20";return(0,i.jsx)(l(),{href:a?n:"subscribe",className:"no-underline",children:(0,i.jsxs)("div",{className:"flex flex-col items-center",children:[(0,i.jsxs)("div",{style:{width:c,height:c},className:"relative mr-2 rounded-full "+u+" "+(a?"cursor-pointer":"cursor-not-allowed"),children:[(0,i.jsx)("div",{className:"absolute",children:(0,i.jsx)(s.Z,{chartLogo:t})}),h?(0,i.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,i.jsx)(d,{size:c})}):(0,i.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full  z-30",children:(0,i.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,i.jsx)("p",{className:"font-light text-sm text-gray-600 "+u,children:r})]})})}let d=e=>{let{size:t}=e;return(0,i.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,i.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})};var h=r(4588);let u={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function x(e){let{chartFamily:t}=e,r=n.c.filter(e=>e.family===t).map((e,t)=>{let r=(0,h.y)(e.reactURL);return(0,i.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,i.jsx)(c,{link:r,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:129})},t)});return(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null==u?void 0:u[t]}),(0,i.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:r})]})}},1122:function(e,t,r){"use strict";r.d(t,{$:function(){return c}});var i=r(5893),s=r(7294),n=r(9973),a=r(8107),l=r(615),o=r(8578);let c=e=>{let{VizComponent:t,vizName:r,height:c=400,maxWidth:d=800,caption:h}=e,[u,x]=(0,s.useState)(!1),m=(0,s.useRef)(null),p=(0,n.B)(m);return(0,i.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:u?(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,i.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,i.jsx)(o.X,{vizName:r})}),(0,i.jsx)("div",{className:"flex justify-center mt-2",children:(0,i.jsx)(a.z,{size:"sm",onClick:()=>x(!u),children:"Hide Sandbox"})})]}):(0,i.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,i.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,i.jsx)("div",{style:{height:c,width:"100%",maxWidth:d},ref:m,className:"pointer-events-auto",children:(0,i.jsx)(t,{height:c,width:p.width})})}),(0,i.jsx)(l.Y,{children:h}),(0,i.jsx)("div",{className:"flex justify-center",children:(0,i.jsx)(a.z,{size:"sm",onClick:()=>x(!u),children:"Show code"})})]})})}},8578:function(e,t,r){"use strict";r.d(t,{X:function(){return s}});var i=r(5893);r(7294);let s=e=>{let{vizName:t}=e;return(0,i.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0",style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},6820:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var i=r(5893);r(7294);var s=r(8843),n=r(6438);let a=e=>{let{imgLink:t,height:r,opacity:s,children:n}=e;return(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsx)("div",{style:{backgroundImage:"url("+t+")",height:r,backgroundAttachment:"fixed",opacity:s,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}),(0,i.jsx)("div",{className:"absolute top-0 left-0 w-full h-full",children:n})]})};function l(e){var t;let{chartId:r}=e,l=(null===(t=s.c.find(e=>e.id===r))||void 0===t?void 0:t.label)||"chart";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{id:"inspiration",children:l+" inspiration"}),(0,i.jsxs)("p",{children:["If you're looking for inspiration to create your next"," ",(0,i.jsx)("span",{children:l}),", note that"," ",(0,i.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","showcases many examples. Definitely the best place to get ... inspiration!"]}),(0,i.jsx)("div",{className:"border mb-10",children:(0,i.jsx)(a,{height:250,imgLink:"https://github.com/holtzy/dataviz-inspiration/blob/main/public/misc/overview1.png?raw=true",opacity:.3,children:(0,i.jsx)("div",{className:"flex justify-center items-center h-full",children:(0,i.jsxs)("div",{style:{maxWidth:400},className:"flex flex-col items-center",children:[(0,i.jsxs)("p",{className:"text-center text-sm",children:[(0,i.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","showcases hundreds of stunning dataviz projects. Have a look to get some ideas on how to make your ",(0,i.jsx)("span",{children:l})," ","looks good!"]}),(0,i.jsx)(n.J,{href:"https://www.dataviz-inspiration.com",isFilled:!0,size:"md",children:"visit"})]})})})})]})}},153:function(e,t,r){"use strict";r.d(t,{A:function(){return u}});var i=r(5893),s=r(9700),n=r(3476),a=r(7294),l=r(3084),o=r.n(l);function c(){let[e,t]=(0,a.useState)([]),[r,s]=(0,a.useState)(0);return(0,a.useEffect)(()=>{let e=Array.from(document.querySelectorAll("h2"));t(e)},[]),(0,a.useEffect)(()=>{let t=()=>{let t=e.map(e=>e.offsetTop-e.scrollTop+e.clientTop),r=window.scrollY+150,i=t.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,0),n=t.findIndex(e=>e===i);s(-1===n?0:n)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e]),(0,i.jsx)("div",{className:o().tableOfContent,children:e.map((t,s)=>(0,i.jsx)("p",{className:r===s?"".concat(o().tocItem," ").concat(o().tocItemActive):o().tocItem,onClick:t=>{t.preventDefault(),e[s].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:t.id.charAt(0).toUpperCase()+t.id.slice(1)},t.id))})}var d=r(7414),h=r(2594);let u=e=>{let{children:t,title:r,seoDescription:a}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.A,{title:r,seoDescription:a}),(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsx)(s.Z,{})}),(0,i.jsx)("div",{className:"wrapper",children:t}),(0,i.jsx)(h.Z,{}),(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsx)(n.Z,{})}),(0,i.jsx)(c,{})]})}},6438:function(e,t,r){"use strict";r.d(t,{J:function(){return a}});var i=r(5893),s=r(1664),n=r.n(s);let a=e=>{let{children:t,href:r,isFilled:s,size:a="md",isFaded:l}=e,o=r.startsWith("www")||r.startsWith("http"),c="font-normal rounded mr-1 cursor-pointer border-reactGallery border ";s?c+=" bg-reactGallery hover:bg-reactGallery text-white ":c+=" bg-white hover:bg-reactGallery hover:text-white text-reactGallery ","sm"===a&&(c+="text-sm py-1 px-2 "),"md"===a&&(c+="text-md py-2 px-4 "),l&&(c+="opacity-60");let d=(0,i.jsx)("span",{className:c,children:t});return o?(0,i.jsx)("a",{href:r,target:"_blank",children:d}):(0,i.jsx)(n(),{href:r,passHref:!0,children:d})}},9965:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var i=r(5893);r(7294);var s=r(8843),n=r(4588),a=r(1859),l=r(6438),o=r(1832),c=r.n(o);let d=e=>{let{direction:t,text:r,children:s}=e;return(0,i.jsx)("span",{className:c().tooltip+" "+c()[t],id:r,children:s})};var h=r(5887);function u(e){let{title:t,description:r,chartType:o,showSectionLink:c=!1,showInspirationLink:u=!0,showD3GalleryLink:x=!0}=e,m=s.c.find(e=>e.id===o);return m?(0,i.jsxs)("div",{className:"w-full pt-1 sm:pt-28 pb-20 ",children:[(0,i.jsxs)("div",{className:"flex justify-start items-center",children:[(0,i.jsx)("h1",{children:t}),(0,i.jsx)("div",{className:"w-20 ml-4",children:(0,i.jsx)(h.Z,{chartLogo:null==m?void 0:m.logo})})]}),(0,i.jsx)(a.r,{}),(0,i.jsx)("div",{className:"max-w-xxl  py-2",children:r}),o&&(0,i.jsx)("span",{className:"text-gray-400 text-sm font-light",children:"Useful links"}),o&&(0,i.jsxs)("div",{className:"flex flex-row flex-wrap",children:[c&&(0,i.jsx)(d,{text:"visit related section in the gallery",direction:"bottom",children:(0,i.jsx)(l.J,{href:(0,n.y)(m.reactURL),size:"sm",children:m.label+" section"})}),u&&(0,i.jsx)(d,{text:"Hundreds of stunning dataviz projects to gather inspiration",direction:"bottom",children:(0,i.jsx)(l.J,{href:"https://www.dataviz-inspiration.com/"+m.id,size:"sm",children:"inspiration"})}),x&&(0,i.jsx)(d,{text:"Pure d3 implementation, no React",direction:"bottom",children:(0,i.jsx)(l.J,{href:m.d3URL,size:"sm",children:"d3 gallery"})}),(0,i.jsx)(d,{text:"Dataviz theory about this chart",direction:"bottom",children:(0,i.jsx)(l.J,{href:m.dataToVizURL,isFilled:!0,size:"sm",children:"About this chart"})})]})]}):null}},8107:function(e,t,r){"use strict";r.d(t,{z:function(){return s}});var i=r(5893);let s=e=>{let{children:t,onClick:r,isFilled:s,size:n="md"}=e,a="rounded m-1 cursor-pointer border-reactGallery border ";return"sm"===n&&(a+="text-sm py-1 px-2"),"md"===n&&(a+="text-md py-2 px-4"),s?a+=" bg-reactGallery hover:bg-reactGallery text-white":a+=" bg-white hover:bg-reactGallery hover:text-white text-reactGallery",(0,i.jsx)("button",{className:a,onClick:r,children:t})}},615:function(e,t,r){"use strict";r.d(t,{Y:function(){return s}});var i=r(5893);let s=e=>{let{children:t}=e;return(0,i.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},3572:function(e,t,r){"use strict";r.d(t,{d:function(){return l}});var i=r(5893),s=r(5660),n=r.n(s),a=r(7294);let l=e=>{let{code:t}=e,r=(0,a.useRef)(null);return(0,a.useEffect)(()=>{r.current&&n().highlightElement(r.current)},[r,t]),(0,i.jsx)("div",{className:"mb-6",children:(0,i.jsx)("pre",{className:"rounded-md line-numbers",children:(0,i.jsx)("code",{ref:r,className:"p-0 language-js",children:t})})})}},9973:function(e,t,r){"use strict";r.d(t,{B:function(){return s}});var i=r(7294);let s=e=>{let t=()=>({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),[r,s]=(0,i.useState)(t),n=()=>{s(t())};return(0,i.useEffect)(()=>(window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)),[]),(0,i.useLayoutEffect)(()=>{n()},[]),r}},2407:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return w}});var i=r(5893),s=r(7294),n=r(153),a=r(9965),l=r(7262),o=r(2594),c=r(6260),d=r(3572),h=r(1122),u=r(1664),x=r.n(u);let m=[{x:1,y:90},{x:2,y:12},{x:3,y:34},{x:4,y:53},{x:5,y:52},{x:6,y:9},{x:7,y:18},{x:8,y:78},{x:9,y:28},{x:10,y:34}];var p=r(6020);let f={top:30,right:30,bottom:50,left:50},j=e=>{let{width:t,height:r,data:n}=e,a=(0,s.useRef)(null),l=t-f.right-f.left,o=r-f.top-f.bottom,[c,d]=p.Wem(n,e=>e.y),h=(0,s.useMemo)(()=>p.BYU().domain([0,d||0]).range([o,0]),[n,r]),[u,x]=p.Wem(n,e=>e.x),m=(0,s.useMemo)(()=>p.BYU().domain([u||0,x||0]).range([0,l]),[n,t]);(0,s.useLayoutEffect)(()=>{let e=p.Ys(a.current);e.selectAll("*").remove();let t=p.LLu(m);e.append("g").attr("transform","translate(0,"+o+")").call(t);let r=p.y4O(h);e.append("g").call(r)},[m,h,o]);let j=p.SOn().x(e=>m(e.x)).y1(e=>h(e.y)).y0(h(0)),v=j(n),g=p.jvg().x(e=>m(e.x)).y(e=>h(e.y)),b=g(n);return b&&v?(0,i.jsx)("div",{children:(0,i.jsxs)("svg",{width:t,height:r,children:[(0,i.jsxs)("g",{width:l,height:o,transform:"translate(".concat([f.left,f.top].join(","),")"),children:[(0,i.jsx)("path",{d:v,opacity:1,stroke:"none",fill:"#9a6fb0",fillOpacity:.4}),(0,i.jsx)("path",{d:b,opacity:1,stroke:"#9a6fb0",fill:"none",strokeWidth:2})]}),(0,i.jsx)("g",{width:l,height:o,ref:a,transform:"translate(".concat([f.left,f.top].join(","),")")})]})}):null},v=e=>{let{width:t=700,height:r=400}=e;return(0,i.jsx)(j,{data:m,width:t,height:r})};var g=r(6820);let b=(0,i.jsxs)("p",{children:["An ",(0,i.jsx)("a",{href:"https://www.data-to-viz.com/graph/area.html",children:"area chart"})," ","displays the evolution of one numeric variables. It is like a"," ",(0,i.jsx)(x(),{href:"/line-chart",children:"line chart"}),", but with the area below the line being filled. This section describes how to build area charts on the web with ",(0,i.jsx)("code",{children:"d3.js"})," and ",(0,i.jsx)("code",{children:"react"}),". It starts very basic and then explains how to add more complex features like brushing, adding hover effects and more."]}),y="\nconst data = [\n  {x:1, y: 90},\n  {x: 2, y: 12},\n  {x: 3, , y: 34},\n  {x: 4, , y: 53},\n  {x: 5, , y: 98},\n]\n".trim();function w(){return(0,i.jsxs)(n.A,{title:"Area charts with React",seoDescription:"How to build an area chart with React and D3.js. A set of re-usable components",children:[(0,i.jsx)(a.Z,{title:"Area charts",description:b,chartType:"area"}),(0,i.jsxs)(c.U,{title:"Dataset",startOpen:!0,children:[(0,i.jsxs)("p",{children:["The dataset required to build a line chart is usually an array where each item is an object providing the ",(0,i.jsx)("code",{children:"x"})," and the"," ",(0,i.jsx)("code",{children:"x"})," values of the data point."]}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:"Here is a minimal example:"}),(0,i.jsx)(d.d,{code:y}),(0,i.jsxs)("p",{children:["Note: if your data is in ",(0,i.jsx)("code",{children:".csv"})," format, you can translate it thanks to the ",(0,i.jsx)("code",{children:"d3.csv()"})," function as suggested"," ",(0,i.jsx)("a",{href:"https://d3-graph-gallery.com/graph/line_basic.html",children:"here"}),"."]})]}),(0,i.jsxs)(c.U,{title:"Most basic area chart",startOpen:!0,children:[(0,i.jsxs)("p",{children:["There is nothing really tricky when it comes to build a basic barplot with react, all is pretty close to the"," ",(0,i.jsx)("a",{href:"https://d3-graph-gallery.com/graph/area_basic.html",children:"d3-only examples"}),"."]}),(0,i.jsxs)("p",{children:["First of all you probably want to add some margins around the dimensions provided in the component properties as described"," ",(0,i.jsx)(x(),{href:"/build-axis-with-react",children:"here"}),"."]}),(0,i.jsxs)("p",{children:["Both the X and Y axis are using a numeric scale thanks to the"," ",(0,i.jsx)("code",{children:"scaleLinear()"})," function here. Note that a usual struggle is to deal with the date format but this is described in the timeseries section."]}),(0,i.jsx)(h.$,{vizName:"AreaChartBasic",VizComponent:v,height:400,maxWidth:600,caption:"A very basic area chart made using react and d3.js"})]}),(0,i.jsx)(g.Z,{chartId:"area"}),(0,i.jsx)(c.U,{title:"Multiple groups",startOpen:!0,children:(0,i.jsx)("p",{children:"Todo, same thing but with several groups"})}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 my-3"}),(0,i.jsx)(l.Z,{chartFamily:"evolution"}),(0,i.jsx)("div",{className:"mt-20"}),(0,i.jsx)(o.Z,{})]})}},1832:function(e){e.exports={tooltip:"tooltip_tooltip__Fv96Y",right:"tooltip_right__lXq9G",left:"tooltip_left__hUc5l",bottom:"tooltip_bottom__Qzoh5",top:"tooltip_top__qDz28"}},3084:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__oi0XB",tocItem:"table-of-content_tocItem__fZBSX",tocItemActive:"table-of-content_tocItemActive__kiClt"}}},function(e){e.O(0,[3996,6020,5660,645,9774,2888,179],function(){return e(e.s=1757)}),_N_E=e.O()}]);