(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8093],{1757:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/area-plot",function(){return a(2407)}])},6260:function(e,t,a){"use strict";a.d(t,{U:function(){return i}});var r=a(5893),s=a(7294);let i=e=>{let{startOpen:t,title:a,children:i,toc:n}=e,[l,h]=(0,s.useState)(t);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("h2",{className:"cursor-pointer",onClick:()=>h(!l),id:n,children:[l?(0,r.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"-"}):(0,r.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"+"}),a]}),(0,r.jsx)("div",{className:"transition-max-height ease-in duration-300  "+(l?"max-h-full":"max-h-0")+" "+(l?"overflow-visible":"overflow-hidden"),children:i})]})}},2407:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return v}});var r=a(5893),s=a(7294),i=a(153),n=a(9965),l=a(7262),h=a(2594),o=a(6260),c=a(3572),d=a(1122),x=a(1664),u=a.n(x);let p=[{x:1,y:90},{x:2,y:12},{x:3,y:34},{x:4,y:53},{x:5,y:52},{x:6,y:9},{x:7,y:18},{x:8,y:78},{x:9,y:28},{x:10,y:34}];var m=a(7651);let j={top:30,right:30,bottom:50,left:50},f=e=>{let{width:t,height:a,data:i}=e,n=(0,s.useRef)(null),l=t-j.right-j.left,h=a-j.top-j.bottom,[o,c]=m.Wem(i,e=>e.y),d=(0,s.useMemo)(()=>m.BYU().domain([0,c||0]).range([h,0]),[i,a]),[x,u]=m.Wem(i,e=>e.x),p=(0,s.useMemo)(()=>m.BYU().domain([x||0,u||0]).range([0,l]),[i,t]);(0,s.useLayoutEffect)(()=>{let e=m.Ys(n.current);e.selectAll("*").remove();let t=m.LLu(p);e.append("g").attr("transform","translate(0,"+h+")").call(t);let a=m.y4O(d);e.append("g").call(a)},[p,d,h]);let f=m.SOn().x(e=>p(e.x)).y1(e=>d(e.y)).y0(d(0)),y=f(i),b=m.jvg().x(e=>p(e.x)).y(e=>d(e.y)),g=b(i);return g&&y?(0,r.jsx)("div",{children:(0,r.jsxs)("svg",{width:t,height:a,children:[(0,r.jsxs)("g",{width:l,height:h,transform:"translate(".concat([j.left,j.top].join(","),")"),children:[(0,r.jsx)("path",{d:y,opacity:1,stroke:"none",fill:"#9a6fb0",fillOpacity:.4}),(0,r.jsx)("path",{d:g,opacity:1,stroke:"#9a6fb0",fill:"none",strokeWidth:2})]}),(0,r.jsx)("g",{width:l,height:h,ref:n,transform:"translate(".concat([j.left,j.top].join(","),")")})]})}):null},y=e=>{let{width:t=700,height:a=400}=e;return(0,r.jsx)(f,{data:p,width:t,height:a})};var b=a(6820);let g=(0,r.jsxs)("p",{children:["An ",(0,r.jsx)("a",{href:"https://www.data-to-viz.com/graph/area.html",children:"area chart"})," ","displays the evolution of one numeric variables. It is like a"," ",(0,r.jsx)(u(),{href:"/line-chart",children:"line chart"}),", but with the area below the line being filled. This section describes how to build area charts on the web with ",(0,r.jsx)("code",{children:"d3.js"})," and ",(0,r.jsx)("code",{children:"react"}),". It starts very basic and then explains how to add more complex features like brushing, adding hover effects and more."]}),w="\nconst data = [\n  {x:1, y: 90},\n  {x: 2, y: 12},\n  {x: 3, , y: 34},\n  {x: 4, , y: 53},\n  {x: 5, , y: 98},\n]\n".trim();function v(){return(0,r.jsxs)(i.A,{title:"Area charts with React",seoDescription:"How to build an area chart with React and D3.js. A set of re-usable components",children:[(0,r.jsx)(n.Z,{title:"Area charts",description:g,chartType:"area"}),(0,r.jsxs)(o.U,{title:"Dataset",startOpen:!0,children:[(0,r.jsxs)("p",{children:["The dataset required to build a line chart is usually an array where each item is an object providing the ",(0,r.jsx)("code",{children:"x"})," and the"," ",(0,r.jsx)("code",{children:"x"})," values of the data point."]}),(0,r.jsx)("br",{}),(0,r.jsx)("p",{children:"Here is a minimal example:"}),(0,r.jsx)(c.d,{code:w}),(0,r.jsxs)("p",{children:["Note: if your data is in ",(0,r.jsx)("code",{children:".csv"})," format, you can translate it thanks to the ",(0,r.jsx)("code",{children:"d3.csv()"})," function as suggested"," ",(0,r.jsx)("a",{href:"https://d3-graph-gallery.com/graph/line_basic.html",children:"here"}),"."]})]}),(0,r.jsxs)(o.U,{title:"Most basic area chart",startOpen:!0,children:[(0,r.jsxs)("p",{children:["There is nothing really tricky when it comes to build a basic barplot with react, all is pretty close to the"," ",(0,r.jsx)("a",{href:"https://d3-graph-gallery.com/graph/area_basic.html",children:"d3-only examples"}),"."]}),(0,r.jsxs)("p",{children:["First of all you probably want to add some margins around the dimensions provided in the component properties as described"," ",(0,r.jsx)(u(),{href:"/build-axis-with-react",children:"here"}),"."]}),(0,r.jsxs)("p",{children:["Both the X and Y axis are using a numeric scale thanks to the"," ",(0,r.jsx)("code",{children:"scaleLinear()"})," function here. Note that a usual struggle is to deal with the date format but this is described in the timeseries section."]}),(0,r.jsx)(d.$,{vizName:"AreaChartBasic",VizComponent:y,height:400,maxWidth:600,caption:"A very basic area chart made using react and d3.js"})]}),(0,r.jsx)(b.Z,{chartId:"area"}),(0,r.jsx)(o.U,{title:"Multiple groups",startOpen:!0,children:(0,r.jsx)("p",{children:"Todo, same thing but with several groups"})}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 my-3"}),(0,r.jsx)(l.Z,{chartFamily:"evolution"}),(0,r.jsx)("div",{className:"mt-20"}),(0,r.jsx)(h.Z,{})]})}}},function(e){e.O(0,[3996,7651,5660,645,7934,9774,2888,179],function(){return e(e.s=1757)}),_N_E=e.O()}]);