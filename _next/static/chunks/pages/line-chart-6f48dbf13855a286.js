(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[738],{2083:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/line-chart",function(){return n(3064)}])},3485:function(e,t,n){"use strict";n.d(t,{U:function(){return a}});var r=n(5893),i=n(7294),a=function(e){var t=e.startOpen,n=e.title,a=e.children,s=e.toc,o=(0,i.useState)(t),l=o[0],c=o[1],h=l?"max-h-full":"max-h-0",d=l?"overflow-visible":"overflow-hidden";return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("h2",{className:"cursor-pointer",onClick:function(){return c(!l)},id:s,children:[l?(0,r.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"-"}):(0,r.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"+"}),n]}),(0,r.jsx)("div",{className:"transition-max-height ease-in duration-300  "+h+" "+d,children:a})]})}},3064:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r=n(5893),i=n(7294),a=n(1884),s=n(8807),o=n(7197),l=n(6978),c=n(3485),h=n(8193),d=n(33),u=n(1664),x=[{x:1,y:90},{x:2,y:12},{x:3,y:34},{x:4,y:53},{x:5,y:52},{x:6,y:9},{x:7,y:18},{x:8,y:78},{x:9,y:28},{x:10,y:34}],p=n(5250);function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,a=void 0;try{for(var s,o=e[Symbol.iterator]();!(r=(s=o.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(l){i=!0,a=l}finally{try{r||null==o.return||o.return()}finally{if(i)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var m={top:30,right:30,bottom:50,left:50},j=function(e){var t=e.width,n=e.height,a=e.data,s=(0,i.useRef)(null),o=t-m.right-m.left,l=n-m.top-m.bottom,c=f(p.Wem(a,(function(e){return e.y})),2),h=(c[0],c[1]),d=(0,i.useMemo)((function(){return p.BYU().domain([0,h||0]).range([l,0])}),[a,n]),u=f(p.Wem(a,(function(e){return e.x})),2),x=(u[0],u[1]),j=(0,i.useMemo)((function(){return p.BYU().domain([0,x||0]).range([0,o])}),[a,t]);(0,i.useLayoutEffect)((function(){var e=p.Ys(s.current);e.selectAll("*").remove();var t=p.LLu(j);e.append("g").attr("transform","translate(0,"+l+")").call(t);var n=p.y4O(d);e.append("g").call(n)}),[j,d,l]);var y=p.jvg().x((function(e){return j(e.x)})).y((function(e){return d(e.y)}))(a);return y?(0,r.jsx)("div",{children:(0,r.jsxs)("svg",{width:t,height:n,children:[(0,r.jsx)("g",{width:o,height:l,transform:"translate(".concat([m.left,m.top].join(","),")"),children:(0,r.jsx)("path",{d:y,opacity:1,stroke:"#9a6fb0",fill:"none",strokeWidth:2})}),(0,r.jsx)("g",{width:o,height:l,ref:s,transform:"translate(".concat([m.left,m.top].join(","),")")})]})}):null},y=function(e){var t=e.width,n=void 0===t?700:t,i=e.height,a=void 0===i?400:i;return(0,r.jsx)(j,{data:x,width:n,height:a})},v=n(3440),g=(0,r.jsxs)("p",{children:["A ",(0,r.jsx)("a",{href:"https://www.data-to-viz.com/graph/line.html",children:"line chart"})," or line graph displays the evolution of one or several numeric variables. This section describes how to build line charts on the web with"," ",(0,r.jsx)("code",{children:"d3.js"})," and ",(0,r.jsx)("code",{children:"react"}),". It starts very basic and then explains how to add more complex features like brushing, adding hover effects and more."]}),b="\nconst data = [\n  {x:1, y: 90},\n  {x: 2, y: 12},\n  {x: 3, , y: 34},\n  {x: 4, , y: 53},\n  {x: 5, , y: 98},\n]\n".trim();function w(){return(0,r.jsxs)(a.A,{title:"Line charts with React",seoDescription:"How to build a line chart with React and D3.js. A set of re-usable components",children:[(0,r.jsx)(s.Z,{title:"Line charts",description:g,chartType:"line"}),(0,r.jsxs)(c.U,{title:"Dataset",startOpen:!0,children:[(0,r.jsxs)("p",{children:["The dataset required to build a line chart is usually an array where each item is an object providing the ",(0,r.jsx)("code",{children:"x"})," and the"," ",(0,r.jsx)("code",{children:"x"})," values of the data point."]}),(0,r.jsx)("br",{}),(0,r.jsx)("p",{children:"Here is a minimal example:"}),(0,r.jsx)(h.d,{code:b}),(0,r.jsxs)("p",{children:["Note: if your data is in ",(0,r.jsx)("code",{children:".csv"})," format, you can translate it thanks to the ",(0,r.jsx)("code",{children:"d3.csv()"})," function as suggested"," ",(0,r.jsx)("a",{href:"https://d3-graph-gallery.com/graph/line_basic.html",children:"here"}),"."]})]}),(0,r.jsxs)(c.U,{title:"Most basic line chart",startOpen:!0,children:[(0,r.jsxs)("p",{children:["There is nothing really tricky when it comes to build a basic barplot with react, all is pretty close to the"," ",(0,r.jsx)("a",{href:"https://d3-graph-gallery.com/graph/line_basic.html",children:"d3-only examples"}),"."]}),(0,r.jsxs)("p",{children:["First of all you probably want to add some margins around the dimensions provided in the component properties as described"," ",(0,r.jsx)(u.default,{href:"/build-axis-with-react",children:"here"}),"."]}),(0,r.jsxs)("p",{children:["Both the X and Y axis are using a numeric scale thanks to the"," ",(0,r.jsx)("code",{children:"scaleLinear()"})," function here. Note that a usual struggle is to deal with the date format but this is described in the timeseries section."]}),(0,r.jsx)(d.$,{vizName:"LineChartBasic",VizComponent:y,height:400,maxWidth:600,caption:"most basic line chart with react and d3.js"})]}),(0,r.jsx)(v.Z,{chartId:"line"}),(0,r.jsx)(c.U,{title:"Multiple groups",startOpen:!0,children:(0,r.jsx)("p",{children:"Todo, same thing but with several groups"})}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 my-3"}),(0,r.jsx)(o.Z,{chartFamily:"evolution"}),(0,r.jsx)("div",{className:"mt-20"}),(0,r.jsx)(l.Z,{})]})}}},function(e){e.O(0,[503,5660,358,5443,9774,2888,179],(function(){return t=2083,e(e.s=t);var t}));var t=e.O();_N_E=t}]);