(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[266],{6237:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/stacked-area-plot",function(){return a(2904)}])},3485:function(t,e,a){"use strict";a.d(e,{U:function(){return s}});var r=a(5893),n=a(7294),s=function(t){var e=t.startOpen,a=t.title,s=t.children,i=t.toc,o=(0,n.useState)(e),c=o[0],h=o[1],d=c?"max-h-full":"max-h-0",l=c?"overflow-visible":"overflow-hidden";return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("h2",{className:"cursor-pointer",onClick:function(){return h(!c)},id:i,children:[c?(0,r.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"-"}):(0,r.jsx)("span",{className:"text-purple-700 w-4 mr-2 hover:text-purple-900 inline-block",children:"+"}),a]}),(0,r.jsx)("div",{className:"transition-max-height ease-in duration-300  "+d+" "+l,children:s})]})}},2904:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return A}});var r=a(5893),n=a(7294),s=a(1884),i=a(8807),o=a(7197),c=a(6978),h=a(3485),d=a(8193),l=a(33),u=a(1664),p=[{x:1,groupA:38,groupB:19,groupC:9,groupD:4},{x:2,groupA:16,groupB:14,groupC:96,groupD:40},{x:3,groupA:64,groupB:96,groupC:64,groupD:40},{x:4,groupA:32,groupB:48,groupC:64,groupD:40},{x:5,groupA:12,groupB:18,groupC:14,groupD:10}],f=a(2535);function x(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var a=[],r=!0,n=!1,s=void 0;try{for(var i,o=t[Symbol.iterator]();!(r=(i=o.next()).done)&&(a.push(i.value),!e||a.length!==e);r=!0);}catch(c){n=!0,s=c}finally{try{r||null==o.return||o.return()}finally{if(n)throw s}}return a}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var g={top:30,right:30,bottom:50,left:50},j=function(t){var e=t.width,a=t.height,s=t.data,i=(0,n.useRef)(null),o=e-g.right-g.left,c=a-g.top-g.bottom,h=f.knu().keys(["groupA","groupB","groupC","groupD"]).order(f.Qxt).offset(f.HLf)(s),d=(0,n.useMemo)((function(){return f.BYU().domain([0,300]).range([c,0])}),[s,a]),l=x(f.Wem(s,(function(t){return t.x})),2),u=l[0],p=l[1],j=(0,n.useMemo)((function(){return f.BYU().domain([u||0,p||0]).range([0,o])}),[s,e]);(0,n.useLayoutEffect)((function(){var t=f.Ys(i.current);t.selectAll("*").remove();var e=f.LLu(j);t.append("g").attr("transform","translate(0,"+c+")").call(e);var a=f.y4O(d);t.append("g").call(a)}),[j,d,c]);var m=f.SOn().x((function(t){return j(t.data.x)})).y1((function(t){return d(t[1])})).y0((function(t){return d(t[0])})),v=h.map((function(t,e){var a=m(t);return(0,r.jsx)("path",{d:a,opacity:1,stroke:"none",fill:"#9a6fb0",fillOpacity:e/10+.1},e)}));return(0,r.jsx)("div",{children:(0,r.jsxs)("svg",{width:e,height:a,children:[(0,r.jsx)("g",{width:o,height:c,transform:"translate(".concat([g.left,g.top].join(","),")"),children:v}),(0,r.jsx)("g",{width:o,height:c,ref:i,transform:"translate(".concat([g.left,g.top].join(","),")")})]})})},m=function(t){var e=t.width,a=void 0===e?700:e,n=t.height,s=void 0===n?400:n;return(0,r.jsx)(j,{data:p,width:a,height:s})},v=a(3440),k=(0,r.jsxs)("p",{children:["A"," ",(0,r.jsx)("a",{href:"https://www.data-to-viz.com/graph/area.html",children:"stacked area chart"})," ","is an evolution of an ",(0,r.jsx)(u.default,{href:"area-plot",children:"area chart"})," used to display the evolution of several groups in a dataset. This section explains how to build it with ",(0,r.jsx)("code",{children:"d3.js"})," and ",(0,r.jsx)("code",{children:"react"}),". It focus on stacking, so make sure to read the ",(0,r.jsx)(u.default,{href:"area-plot",children:"area chart"})," ","section first."]}),w="\nconst data = [\n  {\n    x: 1,\n    groupA: 38,\n    groupB: 19,\n  },\n  {\n    x: 2,\n    groupA: 16,\n    groupB: 14,\n  },\n  ...\n];\n".trim(),y='\nconst stackSeries = d3\n  .stack()\n  .keys(["groupA", "groupB"])\n// stackSeries is a function that takes the kind of dataset above and stack the series\n'.trim(),b="\nconst series = stackSeries(data);\n".trim();function A(){return(0,r.jsxs)(s.A,{title:"Stacked Area charts with React",seoDescription:"How to build a stacked area chart with React and D3.js. A set of re-usable components",children:[(0,r.jsx)(i.Z,{title:"Stacked Area charts",description:k,chartType:"stackedArea"}),(0,r.jsxs)(h.U,{title:"Dataset",startOpen:!0,children:[(0,r.jsxs)("p",{children:["Most of the time the input dataset is an array where each item is an object.",(0,r.jsx)("br",{}),"Each object provides information for a step on the X axis. It has a value like ",(0,r.jsx)("code",{children:"x"})," that provides the exact position on the X axis. It then has several numeric values, one for each group of the dataset."]}),(0,r.jsx)("br",{}),(0,r.jsx)("p",{children:"Here is a minimal example:"}),(0,r.jsx)(d.d,{code:w}),(0,r.jsxs)("p",{children:["Note: if your data is in ",(0,r.jsx)("code",{children:".csv"})," format, you can translate it thanks to the ",(0,r.jsx)("code",{children:"d3.csv()"})," function as suggested"," ",(0,r.jsx)("a",{href:"https://d3-graph-gallery.com/graph/line_basic.html",children:"here"}),"."]})]}),(0,r.jsxs)(h.U,{title:"Data wrangling",startOpen:!0,children:[(0,r.jsxs)("p",{children:["The trickiest part of a stacked area chart is probably the"," ",(0,r.jsx)("b",{children:"stacking"})," step.",(0,r.jsx)("br",{}),"Series are displayed one on top of each other and you have to compute their positions on the Y axis. Fortunately ",(0,r.jsx)("code",{children:"d3.js"})," is here to the rescue with a ",(0,r.jsx)("code",{children:"d3.stack()"})," function."]}),(0,r.jsx)("h3",{children:"\u2192 Build a stack generator"}),(0,r.jsxs)("p",{children:[(0,r.jsx)("code",{children:"d3.stack()"})," constructs a stack generator. Basically, it is a function that outputs a function."]}),(0,r.jsx)(d.d,{code:y}),(0,r.jsx)("h3",{children:"\u2192 Use the generator"}),(0,r.jsx)("p",{children:"Now that this stack generator is available, we just have to run it on our dataset to get the stacked values"}),(0,r.jsx)(d.d,{code:b}),(0,r.jsx)("h3",{children:"\u2192 Output"}),(0,r.jsx)("p",{children:"The output has kind of an usual shape and it's important to understand how it's formatted. It's an array with the same length than the initial dataset. Once more, each item is linked to a positon on the x axis."}),(0,r.jsx)("p",{children:"Each item is an array of length 2, associated with a specific series. This is a mess to explain."})]}),(0,r.jsxs)(h.U,{title:"Most basic stacked area chart",startOpen:!0,children:[(0,r.jsx)("p",{children:"Once the data is properly stacked it becomes easy to map on it and add an area for each series, following the same idea than for a usual area chart. Here is a minimal code example wrapping the whole process."}),(0,r.jsx)(l.$,{vizName:"StackedAreaChartBasic",VizComponent:m,height:400,maxWidth:600,caption:"basic stacked area chart with react and d3.js"})]}),(0,r.jsx)(v.Z,{chartId:"stackedArea"}),(0,r.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 my-3"}),(0,r.jsx)(o.Z,{chartFamily:"evolution"}),(0,r.jsx)("div",{className:"mt-20"}),(0,r.jsx)(c.Z,{})]})}}},function(t){t.O(0,[3888,5660,358,5443,9774,2888,179],(function(){return e=6237,t(t.s=e);var e}));var e=t.O();_N_E=e}]);