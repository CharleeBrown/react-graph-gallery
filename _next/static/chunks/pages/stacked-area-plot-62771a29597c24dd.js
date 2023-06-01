(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[266],{7954:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stacked-area-plot",function(){return r(8789)}])},6260:function(e,t,r){"use strict";r.d(t,{U:function(){return a}});var s=r(5893),i=r(7294);let a=e=>{let{startOpen:t,title:r,children:a,toc:n}=e,[l,o]=(0,i.useState)(t);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("h2",{className:"cursor-pointer",onClick:()=>o(!l),id:n,children:[l?(0,s.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"-"}):(0,s.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"+"}),r]}),(0,s.jsx)("div",{className:"transition-max-height ease-in duration-300  "+(l?"max-h-full":"max-h-0")+" "+(l?"overflow-visible":"overflow-hidden"),children:a})]})}},7262:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var s=r(5893);r(7294);var i=r(5887),a=r(8843),n=r(1664),l=r.n(n);let o=a.c.filter(e=>"general"===e.family).map(e=>e.logo);function c(e){let{chartLogo:t,caption:r,link:a,isAvailable:n,size:c}=e,h=o.includes(t),u=n?"opacity-100":"opacity-20";return(0,s.jsx)(l(),{href:n?a:"subscribe",className:"no-underline",children:(0,s.jsxs)("div",{className:"flex flex-col items-center",children:[(0,s.jsxs)("div",{style:{width:c,height:c},className:"relative mr-2 rounded-full "+u+" "+(n?"cursor-pointer":"cursor-not-allowed"),children:[(0,s.jsx)("div",{className:"absolute",children:(0,s.jsx)(i.Z,{chartLogo:t})}),h?(0,s.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,s.jsx)(d,{size:c})}):(0,s.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full  z-30",children:(0,s.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,s.jsx)("p",{className:"font-light text-sm text-gray-600 "+u,children:r})]})})}let d=e=>{let{size:t}=e;return(0,s.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,s.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})};var h=r(4588);let u={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function x(e){let{chartFamily:t}=e,r=a.c.filter(e=>e.family===t).map((e,t)=>{let r=(0,h.y)(e.reactURL);return(0,s.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,s.jsx)(c,{link:r,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:129})},t)});return(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null==u?void 0:u[t]}),(0,s.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:r})]})}},1122:function(e,t,r){"use strict";r.d(t,{$:function(){return c}});var s=r(5893),i=r(7294),a=r(9973),n=r(8107),l=r(615),o=r(8578);let c=e=>{let{VizComponent:t,vizName:r,height:c=400,maxWidth:d=800,caption:h}=e,[u,x]=(0,i.useState)(!1),p=(0,i.useRef)(null),m=(0,a.B)(p);return(0,s.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:u?(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,s.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,s.jsx)(o.X,{vizName:r})}),(0,s.jsx)("div",{className:"flex justify-center mt-2",children:(0,s.jsx)(n.z,{size:"sm",onClick:()=>x(!u),children:"Hide Sandbox"})})]}):(0,s.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,s.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,s.jsx)("div",{style:{height:c,width:"100%",maxWidth:d},ref:p,className:"pointer-events-auto",children:(0,s.jsx)(t,{height:c,width:m.width})})}),(0,s.jsx)(l.Y,{children:h}),(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsx)(n.z,{size:"sm",onClick:()=>x(!u),children:"Show code"})})]})})}},8578:function(e,t,r){"use strict";r.d(t,{X:function(){return i}});var s=r(5893);r(7294);let i=e=>{let{vizName:t}=e;return(0,s.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0",style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},6820:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var s=r(5893);r(7294);var i=r(8843),a=r(6438);let n=e=>{let{imgLink:t,height:r,opacity:i,children:a}=e;return(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("div",{style:{backgroundImage:"url("+t+")",height:r,backgroundAttachment:"fixed",opacity:i,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}),(0,s.jsx)("div",{className:"absolute top-0 left-0 w-full h-full",children:a})]})};function l(e){var t;let{chartId:r}=e,l=(null===(t=i.c.find(e=>e.id===r))||void 0===t?void 0:t.label)||"chart";return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h2",{id:"inspiration",children:l+" inspiration"}),(0,s.jsxs)("p",{children:["If you're looking for inspiration to create your next"," ",(0,s.jsx)("span",{children:l}),", note that"," ",(0,s.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","showcases many examples. Definitely the best place to get ... inspiration!"]}),(0,s.jsx)("div",{className:"border mb-10",children:(0,s.jsx)(n,{height:250,imgLink:"https://github.com/holtzy/dataviz-inspiration/blob/main/public/misc/overview1.png?raw=true",opacity:.3,children:(0,s.jsx)("div",{className:"flex justify-center items-center h-full",children:(0,s.jsxs)("div",{style:{maxWidth:400},className:"flex flex-col items-center",children:[(0,s.jsxs)("p",{className:"text-center text-sm",children:[(0,s.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","showcases hundreds of stunning dataviz projects. Have a look to get some ideas on how to make your ",(0,s.jsx)("span",{children:l})," ","looks good!"]}),(0,s.jsx)(a.J,{href:"https://www.dataviz-inspiration.com",isFilled:!0,size:"md",children:"visit"})]})})})})]})}},153:function(e,t,r){"use strict";r.d(t,{A:function(){return u}});var s=r(5893),i=r(9700),a=r(3476),n=r(7294),l=r(3084),o=r.n(l);function c(){let[e,t]=(0,n.useState)([]),[r,i]=(0,n.useState)(0);return(0,n.useEffect)(()=>{let e=Array.from(document.querySelectorAll("h2"));t(e)},[]),(0,n.useEffect)(()=>{let t=()=>{let t=e.map(e=>e.offsetTop-e.scrollTop+e.clientTop),r=window.scrollY+150,s=t.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,0),a=t.findIndex(e=>e===s);i(-1===a?0:a)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e]),(0,s.jsx)("div",{className:o().tableOfContent,children:e.map((t,i)=>(0,s.jsx)("p",{className:r===i?"".concat(o().tocItem," ").concat(o().tocItemActive):o().tocItem,onClick:t=>{t.preventDefault(),e[i].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:t.id.charAt(0).toUpperCase()+t.id.slice(1)},t.id))})}var d=r(7414),h=r(2594);let u=e=>{let{children:t,title:r,seoDescription:n}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.A,{title:r,seoDescription:n}),(0,s.jsx)("div",{className:"wrapper",children:(0,s.jsx)(i.Z,{})}),(0,s.jsx)("div",{className:"wrapper",children:t}),(0,s.jsx)(h.Z,{}),(0,s.jsx)("div",{className:"wrapper",children:(0,s.jsx)(a.Z,{})}),(0,s.jsx)(c,{})]})}},6438:function(e,t,r){"use strict";r.d(t,{J:function(){return n}});var s=r(5893),i=r(1664),a=r.n(i);let n=e=>{let{children:t,href:r,isFilled:i,size:n="md",isFaded:l}=e,o=r.startsWith("www")||r.startsWith("http"),c="font-normal rounded mr-1 cursor-pointer border-reactGallery border ";i?c+=" bg-reactGallery hover:bg-reactGallery text-white ":c+=" bg-white hover:bg-reactGallery hover:text-white text-reactGallery ","sm"===n&&(c+="text-sm py-1 px-2 "),"md"===n&&(c+="text-md py-2 px-4 "),l&&(c+="opacity-60");let d=(0,s.jsx)("span",{className:c,children:t});return o?(0,s.jsx)("a",{href:r,target:"_blank",children:d}):(0,s.jsx)(a(),{href:r,passHref:!0,children:d})}},9965:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var s=r(5893);r(7294);var i=r(8843),a=r(4588),n=r(1859),l=r(6438),o=r(1832),c=r.n(o);let d=e=>{let{direction:t,text:r,children:i}=e;return(0,s.jsx)("span",{className:c().tooltip+" "+c()[t],id:r,children:i})};var h=r(5887);function u(e){let{title:t,description:r,chartType:o,showSectionLink:c=!1,showInspirationLink:u=!0,showD3GalleryLink:x=!0}=e,p=i.c.find(e=>e.id===o);return p?(0,s.jsxs)("div",{className:"w-full pt-1 sm:pt-28 pb-20 ",children:[(0,s.jsxs)("div",{className:"flex justify-start items-center",children:[(0,s.jsx)("h1",{children:t}),(0,s.jsx)("div",{className:"w-20 ml-4",children:(0,s.jsx)(h.Z,{chartLogo:null==p?void 0:p.logo})})]}),(0,s.jsx)(n.r,{}),(0,s.jsx)("div",{className:"max-w-xxl  py-2",children:r}),o&&(0,s.jsx)("span",{className:"text-gray-400 text-sm font-light",children:"Useful links"}),o&&(0,s.jsxs)("div",{className:"flex flex-row flex-wrap",children:[c&&(0,s.jsx)(d,{text:"visit related section in the gallery",direction:"bottom",children:(0,s.jsx)(l.J,{href:(0,a.y)(p.reactURL),size:"sm",children:p.label+" section"})}),u&&(0,s.jsx)(d,{text:"Hundreds of stunning dataviz projects to gather inspiration",direction:"bottom",children:(0,s.jsx)(l.J,{href:"https://www.dataviz-inspiration.com/"+p.id,size:"sm",children:"inspiration"})}),x&&(0,s.jsx)(d,{text:"Pure d3 implementation, no React",direction:"bottom",children:(0,s.jsx)(l.J,{href:p.d3URL,size:"sm",children:"d3 gallery"})}),(0,s.jsx)(d,{text:"Dataviz theory about this chart",direction:"bottom",children:(0,s.jsx)(l.J,{href:p.dataToVizURL,isFilled:!0,size:"sm",children:"About this chart"})})]})]}):null}},8107:function(e,t,r){"use strict";r.d(t,{z:function(){return i}});var s=r(5893);let i=e=>{let{children:t,onClick:r,isFilled:i,size:a="md"}=e,n="rounded m-1 cursor-pointer border-reactGallery border ";return"sm"===a&&(n+="text-sm py-1 px-2"),"md"===a&&(n+="text-md py-2 px-4"),i?n+=" bg-reactGallery hover:bg-reactGallery text-white":n+=" bg-white hover:bg-reactGallery hover:text-white text-reactGallery",(0,s.jsx)("button",{className:n,onClick:r,children:t})}},615:function(e,t,r){"use strict";r.d(t,{Y:function(){return i}});var s=r(5893);let i=e=>{let{children:t}=e;return(0,s.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},3572:function(e,t,r){"use strict";r.d(t,{d:function(){return l}});var s=r(5893),i=r(5660),a=r.n(i),n=r(7294);let l=e=>{let{code:t}=e,r=(0,n.useRef)(null);return(0,n.useEffect)(()=>{r.current&&a().highlightElement(r.current)},[r,t]),(0,s.jsx)("div",{className:"mb-6",children:(0,s.jsx)("pre",{className:"rounded-md line-numbers",children:(0,s.jsx)("code",{ref:r,className:"p-0 language-js",children:t})})})}},9973:function(e,t,r){"use strict";r.d(t,{B:function(){return i}});var s=r(7294);let i=e=>{let t=()=>({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),[r,i]=(0,s.useState)(t),a=()=>{i(t())};return(0,s.useEffect)(()=>(window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)),[]),(0,s.useLayoutEffect)(()=>{a()},[]),r}},8789:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return N}});var s=r(5893),i=r(7294),a=r(153),n=r(9965),l=r(7262),o=r(2594),c=r(6260),d=r(3572),h=r(1122),u=r(1664),x=r.n(u);let p=[{x:1,groupA:38,groupB:19,groupC:9,groupD:4},{x:2,groupA:16,groupB:14,groupC:96,groupD:40},{x:3,groupA:64,groupB:96,groupC:64,groupD:40},{x:4,groupA:32,groupB:48,groupC:64,groupD:40},{x:5,groupA:12,groupB:18,groupC:14,groupD:10}];var m=r(6020);let f={top:30,right:30,bottom:50,left:50},j=e=>{let{width:t,height:r,data:a}=e,n=(0,i.useRef)(null),l=t-f.right-f.left,o=r-f.top-f.bottom,c=m.knu().keys(["groupA","groupB","groupC","groupD"]).order(m.Qxt).offset(m.HLf),d=c(a),h=(0,i.useMemo)(()=>m.BYU().domain([0,300]).range([o,0]),[a,r]),[u,x]=m.Wem(a,e=>e.x),p=(0,i.useMemo)(()=>m.BYU().domain([u||0,x||0]).range([0,l]),[a,t]);(0,i.useLayoutEffect)(()=>{let e=m.Ys(n.current);e.selectAll("*").remove();let t=m.LLu(p);e.append("g").attr("transform","translate(0,"+o+")").call(t);let r=m.y4O(h);e.append("g").call(r)},[p,h,o]);let j=m.SOn().x(e=>p(e.data.x)).y1(e=>h(e[1])).y0(e=>h(e[0])),g=d.map((e,t)=>{let r=j(e);return(0,s.jsx)("path",{d:r,opacity:1,stroke:"none",fill:"#9a6fb0",fillOpacity:t/10+.1},t)});return(0,s.jsx)("div",{children:(0,s.jsxs)("svg",{width:t,height:r,children:[(0,s.jsx)("g",{width:l,height:o,transform:"translate(".concat([f.left,f.top].join(","),")"),children:g}),(0,s.jsx)("g",{width:l,height:o,ref:n,transform:"translate(".concat([f.left,f.top].join(","),")")})]})})},g=e=>{let{width:t=700,height:r=400}=e;return(0,s.jsx)(j,{data:p,width:t,height:r})};var v=r(6820);let w=(0,s.jsxs)("p",{children:["A"," ",(0,s.jsx)("a",{href:"https://www.data-to-viz.com/graph/area.html",children:"stacked area chart"})," ","is an evolution of an ",(0,s.jsx)(x(),{href:"area-plot",children:"area chart"})," used to display the evolution of several groups in a dataset. This section explains how to build it with ",(0,s.jsx)("code",{children:"d3.js"})," and ",(0,s.jsx)("code",{children:"react"}),". It focus on stacking, so make sure to read the ",(0,s.jsx)(x(),{href:"area-plot",children:"area chart"})," ","section first."]}),b="\nconst data = [\n  {\n    x: 1,\n    groupA: 38,\n    groupB: 19,\n  },\n  {\n    x: 2,\n    groupA: 16,\n    groupB: 14,\n  },\n  ...\n];\n".trim(),y='\nconst stackSeries = d3\n  .stack()\n  .keys(["groupA", "groupB"])\n// stackSeries is a function that takes the kind of dataset above and stack the series\n'.trim(),k="\nconst series = stackSeries(data);\n".trim();function N(){return(0,s.jsxs)(a.A,{title:"Stacked Area charts with React",seoDescription:"How to build a stacked area chart with React and D3.js. A set of re-usable components",children:[(0,s.jsx)(n.Z,{title:"Stacked Area charts",description:w,chartType:"stackedArea"}),(0,s.jsxs)(c.U,{title:"Dataset",startOpen:!0,children:[(0,s.jsxs)("p",{children:["Most of the time the input dataset is an array where each item is an object.",(0,s.jsx)("br",{}),"Each object provides information for a step on the X axis. It has a value like ",(0,s.jsx)("code",{children:"x"})," that provides the exact position on the X axis. It then has several numeric values, one for each group of the dataset."]}),(0,s.jsx)("br",{}),(0,s.jsx)("p",{children:"Here is a minimal example:"}),(0,s.jsx)(d.d,{code:b}),(0,s.jsxs)("p",{children:["Note: if your data is in ",(0,s.jsx)("code",{children:".csv"})," format, you can translate it thanks to the ",(0,s.jsx)("code",{children:"d3.csv()"})," function as suggested"," ",(0,s.jsx)("a",{href:"https://d3-graph-gallery.com/graph/line_basic.html",children:"here"}),"."]})]}),(0,s.jsxs)(c.U,{title:"Data wrangling",startOpen:!0,children:[(0,s.jsxs)("p",{children:["The trickiest part of a stacked area chart is probably the"," ",(0,s.jsx)("b",{children:"stacking"})," step.",(0,s.jsx)("br",{}),"Series are displayed one on top of each other and you have to compute their positions on the Y axis. Fortunately ",(0,s.jsx)("code",{children:"d3.js"})," is here to the rescue with a ",(0,s.jsx)("code",{children:"d3.stack()"})," function."]}),(0,s.jsx)("h3",{children:"→ Build a stack generator"}),(0,s.jsxs)("p",{children:[(0,s.jsx)("code",{children:"d3.stack()"})," constructs a stack generator. Basically, it is a function that outputs a function."]}),(0,s.jsx)(d.d,{code:y}),(0,s.jsx)("h3",{children:"→ Use the generator"}),(0,s.jsx)("p",{children:"Now that this stack generator is available, we just have to run it on our dataset to get the stacked values"}),(0,s.jsx)(d.d,{code:k}),(0,s.jsx)("h3",{children:"→ Output"}),(0,s.jsx)("p",{children:"The output has kind of an usual shape and it's important to understand how it's formatted. It's an array with the same length than the initial dataset. Once more, each item is linked to a positon on the x axis."}),(0,s.jsx)("p",{children:"Each item is an array of length 2, associated with a specific series. This is a mess to explain."})]}),(0,s.jsxs)(c.U,{title:"Most basic stacked area chart",startOpen:!0,children:[(0,s.jsx)("p",{children:"Once the data is properly stacked it becomes easy to map on it and add an area for each series, following the same idea than for a usual area chart. Here is a minimal code example wrapping the whole process."}),(0,s.jsx)(h.$,{vizName:"StackedAreaChartBasic",VizComponent:g,height:400,maxWidth:600,caption:"basic stacked area chart with react and d3.js"})]}),(0,s.jsx)(v.Z,{chartId:"stackedArea"}),(0,s.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 my-3"}),(0,s.jsx)(l.Z,{chartFamily:"evolution"}),(0,s.jsx)("div",{className:"mt-20"}),(0,s.jsx)(o.Z,{})]})}},1832:function(e){e.exports={tooltip:"tooltip_tooltip__Fv96Y",right:"tooltip_right__lXq9G",left:"tooltip_left__hUc5l",bottom:"tooltip_bottom__Qzoh5",top:"tooltip_top__qDz28"}},3084:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__oi0XB",tocItem:"table-of-content_tocItem__fZBSX",tocItemActive:"table-of-content_tocItemActive__kiClt"}}},function(e){e.O(0,[3996,6020,5660,645,9774,2888,179],function(){return e(e.s=7954)}),_N_E=e.O()}]);