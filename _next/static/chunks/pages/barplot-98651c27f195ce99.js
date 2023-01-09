(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[370],{4142:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/barplot",function(){return n(8651)}])},2173:function(e,t,n){"use strict";n.d(t,{r:function(){return l}});var r=n(5893),a=n(1664),i=n(1878),o=n(3359),s=n(8193),l=function(e){var t=e.chartId,n=i.c.filter((function(e){return e.id===t}))[0].label;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{id:"responsiveness",children:"Responsive "+n+" with react"}),(0,r.jsxs)("p",{children:["The component above is not responsive. It expects 2 props called"," ",(0,r.jsx)("code",{children:"width"})," and ",(0,r.jsx)("code",{children:"height"})," and will render a ",n," of those dimensions."]}),(0,r.jsxs)("p",{children:["Making the ",n," responsive requires adding a ",(0,r.jsx)("b",{children:"wrapper"})," component that gets the dimension of the parent ",(0,r.jsx)("code",{children:"div"}),", and listening to a potential dimension change. This is possible thanks to a hook called"," ",(0,r.jsx)("code",{children:"useDimensions"})," that will do the job for us."]}),(0,r.jsx)(o.U,{startOpen:!1,title:(0,r.jsxs)("span",{children:[(0,r.jsx)("code",{children:"useDimensions"}),": a hook to make your viz responsive"]}),children:(0,r.jsx)(s.d,{code:d})}),(0,r.jsxs)("p",{children:["I'm in the process of writing a complete blog post on the topic."," ",(0,r.jsx)(a.default,{href:"/subscribe",children:"Subscribe to the project"})," to know when it's ready."]}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]})},d='\nexport const useDimensions = (targetRef: React.RefObject<HTMLDivElement>) => {\n\n  const getDimensions = () => {\n    return {\n      width: targetRef.current ? targetRef.current.offsetWidth : 0,\n      height: targetRef.current ? targetRef.current.offsetHeight : 0\n    };\n  };\n\n  const [dimensions, setDimensions] = useState(getDimensions);\n\n  const handleResize = () => {\n    setDimensions(getDimensions());\n  };\n\n  useEffect(() => {\n    window.addEventListener("resize", handleResize);\n    return () => window.removeEventListener("resize", handleResize);\n  }, []);\n\n  useLayoutEffect(() => {\n    handleResize();\n  }, []);\n\n  return dimensions;\n}\n'.trim()},3359:function(e,t,n){"use strict";n.d(t,{U:function(){return a}});var r=n(5893),a=function(e){e.startOpen;var t=e.title,n=e.children;return(0,r.jsxs)("details",{className:"bg-gray-50 py-2 px-4 rounded-md my-2",children:[(0,r.jsx)("summary",{className:"cursor-pointer",children:t}),n]})}},8193:function(e,t,n){"use strict";n.d(t,{d:function(){return s}});var r=n(5893),a=n(4725),i=n.n(a),o=n(7294),s=function(e){var t=e.code,n=(0,o.useRef)(null);return(0,o.useEffect)((function(){n.current&&i().highlightElement(n.current)}),[n,t]),(0,r.jsx)("div",{className:"mb-6",children:(0,r.jsx)("pre",{className:"rounded-md line-numbers",children:(0,r.jsx)("code",{ref:n,className:"p-0 language-js",children:t})})})}},8651:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return z}});var r=n(5893),a=n(7294),i=n(1884),o=n(8807),s=n(7197),l=n(8193),d=n(33),c=n(1664),h=[{name:"Mark",value:90},{name:"Robert",value:12},{name:"Emily",value:34},{name:"Marion",value:53},{name:"Nicolas",value:98},{name:"M\xe9lanie",value:23},{name:"Gabriel",value:18},{name:"Jean",value:104},{name:"Paul",value:2}],u=n(2989);function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(l){a=!0,i=l}finally{try{r||null==s.return||s.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var g={top:30,right:30,bottom:30,left:30},m=function(e){var t=e.width,n=e.height,i=e.data,o=t-g.right-g.left,s=n-g.top-g.bottom,l=i.sort((function(e,t){return t.value-e.value})).map((function(e){return e.name})),d=(0,a.useMemo)((function(){return u.tiA().domain(l).range([0,s]).padding(.3)}),[i,n]),c=(0,a.useMemo)((function(){var e=p(u.Wem(i.map((function(e){return e.value}))),2),t=(e[0],e[1]);return u.BYU().domain([0,t||10]).range([0,o])}),[i,t]),h=i.map((function(e,t){var n=d(e.name);return void 0===n?null:(0,r.jsxs)("g",{children:[(0,r.jsx)("rect",{x:c(0),y:d(e.name),width:c(e.value),height:d.bandwidth(),opacity:.7,stroke:"#9d174d",fill:"#9d174d",fillOpacity:.3,strokeWidth:1,rx:1}),(0,r.jsx)("text",{x:c(e.value)-7,y:n+d.bandwidth()/2,textAnchor:"end",alignmentBaseline:"central",fontSize:12,opacity:c(e.value)>90?1:0,children:e.value}),(0,r.jsx)("text",{x:c(0)+7,y:n+d.bandwidth()/2,textAnchor:"start",alignmentBaseline:"central",fontSize:12,children:e.name})]},t)})),m=c.ticks(5).slice(1).map((function(e,t){return(0,r.jsxs)("g",{children:[(0,r.jsx)("line",{x1:c(e),x2:c(e),y1:0,y2:s,stroke:"#808080",opacity:.2}),(0,r.jsx)("text",{x:c(e),y:s+10,textAnchor:"middle",alignmentBaseline:"central",fontSize:9,stroke:"#808080",opacity:.8,children:e})]},t)}));return(0,r.jsx)("div",{children:(0,r.jsx)("svg",{width:t,height:n,children:(0,r.jsxs)("g",{width:o,height:s,transform:"translate(".concat([g.left,g.top].join(","),")"),children:[m,h]})})})},x=function(e){var t=e.width,n=void 0===t?700:t,a=e.height,i=void 0===a?400:a;return(0,r.jsx)(m,{data:h,width:n,height:i})},f=n(2173),b=n(6266),v=n(8355),j=[{group:"Mark",subgroup:"travel",value:90},{group:"Mark",subgroup:"food",value:23},{group:"Mark",subgroup:"beer",value:14},{group:"Robert",subgroup:"travel",value:12},{group:"Robert",subgroup:"food",value:9},{group:"Robert",subgroup:"beer",value:2},{group:"Emily",subgroup:"travel",value:34},{group:"Emily",subgroup:"food",value:0},{group:"Emily",subgroup:"beer",value:4},{group:"Marion",subgroup:"travel",value:53},{group:"Marion",subgroup:"food",value:14},{group:"Marion",subgroup:"beer",value:102},{group:"Nicolas",subgroup:"travel",value:98},{group:"Nicolas",subgroup:"food",value:9},{group:"Nicolas",subgroup:"beer",value:8},{group:"M\xe9lanie",subgroup:"travel",value:23},{group:"M\xe9lanie",subgroup:"food",value:23},{group:"M\xe9lanie",subgroup:"beer",value:3},{group:"Gabriel",subgroup:"travel",value:18},{group:"Gabriel",subgroup:"food",value:11},{group:"Gabriel",subgroup:"beer",value:18},{group:"Jean",subgroup:"travel",value:104},{group:"Jean",subgroup:"food",value:10},{group:"Jean",subgroup:"beer",value:14},{group:"Paul",subgroup:"travel",value:2},{group:"Paul",subgroup:"food",value:12},{group:"Paul",subgroup:"beer",value:92}];function w(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var y={top:30,right:30,bottom:30,left:30},k=function(e){var t=e.width,n=e.height,i=e.data,o=t-y.right-y.left,s=n-y.top-y.bottom,l=w(new Set(i.map((function(e){return e.group})))),d=w(new Set(i.map((function(e){return e.subgroup})))),c=u.knu().keys(d).order(u.Qxt).offset(u.HLf).value((function(e,t){return i.filter((function(t){return t.group===e}))[0].value}))(l),h=(0,a.useMemo)((function(){return u.tiA().domain(l).range([0,s]).padding(.3)}),[i,n]),p=(0,a.useMemo)((function(){return u.BYU().domain([0,400]).range([0,o])}),[i,t]),g=u.PKp().domain(d).range(["#e85252","#6689c6","#9a6fb0"]),m=c.map((function(e,t){return(0,r.jsx)("g",{children:e.map((function(t,n){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("rect",{y:h(t.data),height:h.bandwidth(),x:p(t[0]),width:p(t[1])-p(t[0]),fill:g(e.key),opacity:.9},n)})}))},t)})),x=p.ticks(5).slice(1).map((function(e,t){return(0,r.jsxs)("g",{children:[(0,r.jsx)("line",{x1:p(e),x2:p(e),y1:0,y2:s,stroke:"#808080",opacity:.2}),(0,r.jsx)("text",{x:p(e),y:s+10,textAnchor:"middle",alignmentBaseline:"central",fontSize:9,stroke:"#808080",opacity:.8,children:e})]},t)}));return(0,r.jsx)("div",{children:(0,r.jsx)("svg",{width:t,height:n,children:(0,r.jsxs)("g",{width:o,height:s,transform:"translate(".concat([y.left,y.top].join(","),")"),children:[x,m]})})})},M=function(e){var t=e.width,n=void 0===t?700:t,a=e.height,i=void 0===a?400:a;return(0,r.jsx)(k,{data:j,width:n,height:i})},B=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{children:["A ",(0,r.jsx)("a",{href:"https://www.data-to-viz.com/graph/barplot.html",children:"barplot"})," ","displays a numeric value for several groups of a dataset using rectangles. This page is a step-by-step guide on how to build your own barplot for the web, using ",(0,r.jsx)("a",{href:"https://reactjs.org/",children:"React"})," and"," ",(0,r.jsx)("a",{href:"https://d3-graph-gallery.com/barplot.html",children:"D3.js"}),"."]}),(0,r.jsxs)("p",{children:["It starts with very basic concepts like ",(0,r.jsx)("b",{children:"data structure"}),","," ",(0,r.jsx)("b",{children:"scales"})," and svg rectangle ",(0,r.jsx)("b",{children:"rendering"}),". It then shows how to add interactivity to the chart with ",(0,r.jsx)("b",{children:"hover effects"}),". Last but not least it explains how to build variations like the ",(0,r.jsx)("b",{children:"stacked barplot"}),"."]})]});function z(){return(0,r.jsxs)(i.A,{title:"Barplot with React",seoDescription:"How to build a barplot with React and D3.js. A set of re-usable components",children:[(0,r.jsx)(o.Z,{title:"Barplot",description:B,chartType:"barplot"}),(0,r.jsx)("h2",{id:"data",children:"The Data"})," ",(0,r.jsxs)("p",{children:["The dataset required to build a barplot is usually an array where each item is an object providing the ",(0,r.jsx)("code",{children:"name"})," and the"," ",(0,r.jsx)("code",{children:"value"})," of the group."]}),(0,r.jsx)("br",{}),(0,r.jsx)("p",{children:"Here is a minimal example"}),(0,r.jsx)(l.d,{code:S}),(0,r.jsxs)("p",{children:["Note: if your data is in ",(0,r.jsx)("code",{children:".csv"})," format, you can translate it thanks to the ",(0,r.jsx)("code",{children:"d3.csv()"})," function as suggested"," ",(0,r.jsx)("a",{href:"https://d3-graph-gallery.com/graph/barplot_horizontal.html",children:"here"}),"."]}),(0,r.jsx)("h2",{id:"skeleton",children:"Component skeleton"}),(0,r.jsxs)("p",{children:["The goal here is to create a ",(0,r.jsx)("code",{children:"Barplot"})," component that will be stored in a ",(0,r.jsx)("code",{children:"Barplot.tsx"})," file. This component requires 3 props to render: a ",(0,r.jsx)("code",{children:"width"}),", a ",(0,r.jsx)("code",{children:"height"}),", and some"," ",(0,r.jsx)("code",{children:"data"}),"."]}),(0,r.jsxs)("p",{children:["The shape of the ",(0,r.jsx)("code",{children:"data"})," is described above. The"," ",(0,r.jsx)("code",{children:"width"})," and ",(0,r.jsx)("code",{children:"height"})," will be used to rendering a"," ",(0,r.jsx)("code",{children:"svg"})," element in the DOM, in which we will insert the barplot."]}),(0,r.jsxs)("p",{children:["To put it in a nutshell, that's the skeleton of our ",(0,r.jsx)("code",{children:"Barplot"})," ","component:"]}),(0,r.jsx)(l.d,{code:N}),(0,r.jsxs)("p",{children:["It's fundamental to understand that with this code organization, d3.js will be used to prepare the svg ",(0,r.jsx)("code",{children:"circle"}),", but it's react that will render them in the ",(0,r.jsx)("code",{children:"return()"})," statement. We won't use d3 methods like ",(0,r.jsx)("code",{children:"append"})," that you can find in usual"," ",(0,r.jsx)("a",{href:"https://d3-graph-gallery.com/barplot.html",children:"d3.js examples"}),"."]}),(0,r.jsx)("h2",{id:"Scales",children:"Scales"}),(0,r.jsxs)("p",{children:["A ",(0,r.jsx)("b",{children:"scale"})," is a function that transforms a ",(0,r.jsx)("b",{children:"dimension"})," (like our ",(0,r.jsx)("code",{children:"value"})," or our group ",(0,r.jsx)("code",{children:"name"}),") in a"," ",(0,r.jsx)("b",{children:"position"})," in pixels."]}),(0,r.jsxs)("p",{children:["Building a barplot requires 2 scales of 2 kinds. The first will transform the group ",(0,r.jsx)("code",{children:"value"})," in a bar length. The second will transform the group ",(0,r.jsx)("code",{children:"name"})," in a position."]}),(0,r.jsx)("h3",{children:"\u2192 Linear scale for the bar length"}),(0,r.jsxs)("p",{children:["D3.js comes with a handful set of"," ",(0,r.jsx)("a",{href:"https://github.com/d3/d3-scale",children:"predefined scales"}),"."," ",(0,r.jsx)("code",{children:"scaleLinear"})," is what we need for the bar length. Here is a quick overview on how to build and use a linear scale:"]}),(0,r.jsx)(l.d,{code:R}),(0,r.jsxs)("p",{children:["Since we are building a ",(0,r.jsx)("b",{children:"horizontal"})," barplot here, this scale will be used by the ",(0,r.jsx)("b",{children:"X"})," axis."]}),(0,r.jsxs)("p",{children:["To dig more into d3 scales, visit this"," ",(0,r.jsx)("a",{href:"https://d3-graph-gallery.com/graph/custom_axis.html",children:"dedicated page"}),". It's a crucial concept that will be used everywhere in this website."]}),(0,r.jsx)("h3",{children:"\u2192 Band scale for the group position"}),(0,r.jsxs)("p",{children:["A ",(0,r.jsx)("a",{href:"https://github.com/d3/d3-scale#scaleBand",children:"band scale"})," will be used to control the position of each rectangle on the Y axis. It is computed with the ",(0,r.jsx)("code",{children:"scaleBand()"})," function of d3.js. It attributes a band of pixels to each group."]}),(0,r.jsxs)("p",{children:["For instance, calling the band scale with ",(0,r.jsx)("code",{children:'yScale("A")'})," will return ",(0,r.jsx)("code",{children:"0"}),", and ",(0,r.jsx)("code",{children:"yScale.bandwidth()"})," will return the width of the band (e.g. ",(0,r.jsx)("code",{children:"11px"}),")."]}),(0,r.jsxs)("p",{children:["Note: the ",(0,r.jsx)("code",{children:"padding"})," argument controls the space between bars."]}),(0,r.jsx)(l.d,{code:A}),(0,r.jsx)("h2",{id:"basic barplot",children:"Basic barplot"}),(0,r.jsxs)("p",{children:["We now have all the ingredients to build a basic barplot with react, all being pretty close to the"," ",(0,r.jsx)("a",{href:"https://d3-graph-gallery.com/barplot",children:"d3-only examples"}),"."]}),(0,r.jsxs)("p",{children:["For each item in the dataset, create a SVG ",(0,r.jsx)("code",{children:"rect"})," element. Its vertical position can be retrieved from the group ",(0,r.jsx)("code",{children:"name"})," ","thanks to the band scale. It's size is retrieved using the"," ",(0,r.jsx)("code",{children:"xScale"})," and its ",(0,r.jsx)("code",{children:"value"}),"."]}),(0,r.jsx)("p",{children:"Note that using the same amount of information it is straightforward to add a label for the name and one for the value."}),(0,r.jsx)(d.$,{vizName:"BarplotBasic",VizComponent:x,height:500,maxWidth:600,caption:"Most basic barplot built with d3.js for scales, and react for rendering"}),(0,r.jsx)(f.r,{chartId:"barplot"}),(0,r.jsx)("h2",{id:"transition",children:"Transition"}),(0,r.jsx)("p",{children:"How to animation the transition between dataset"}),(0,r.jsxs)("p",{children:["You can read the"," ",(0,r.jsx)(c.default,{href:"example/barplot-data-transition-animation",children:"full tutorial here"}),"."]}),(0,r.jsx)(d.$,{vizName:"BarplotDatasetTransition",VizComponent:b.P,height:400,maxWidth:600,caption:"Most basic barplot built with d3.js for scales, and react for rendering"}),(0,r.jsx)("h2",{id:"stacking",children:"Stacking"}),(0,r.jsx)("p",{children:"Let's start with a vertical barplot. Describe the dataset that is a bit weird imo."}),(0,r.jsx)(d.$,{vizName:"BarplotStackedBasic",VizComponent:v.x,height:400,maxWidth:600,caption:"Most basic barplot built with d3.js for scales, and react for rendering"}),(0,r.jsx)("p",{children:"Now let's do it horizontal with a normal dataset"}),(0,r.jsx)(d.$,{vizName:"BarplotStackedHorizontal",VizComponent:M,height:400,maxWidth:600,caption:"Most basic barplot built with d3.js for scales, and react for rendering"}),(0,r.jsx)("h2",{id:"vertical",children:"Vertical barplot"})," ",(0,r.jsx)("p",{children:"The vertical option is less common since it makes is much harder to read the labels. But if you really need it, it is just a matter of swaping the X and Y axes of the previous example. Here is a working version."}),(0,r.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 mb-3 mt-24"}),(0,r.jsx)(s.Z,{chartFamily:"ranking"}),(0,r.jsx)("div",{className:"mt-20"})]})}var S='\nconst data = [\n  {name:"Mark", value: 90},\n  {name:"Robert", value: 12},\n  {name:"Emily", value: 34},\n  {name:"Marion", value: 53},\n  {name:"Nicolas", value: 98},\n]\n'.trim(),N='\nimport * as d3 from "d3"; // we will need d3.js\n\ntype BarplotProps = {\n  width: number;\n  height: number;\n  data: { name: string; y: number }[];\n};\n\nexport const Barplot = ({ width, height, data }: BarplotProps) => {\n\n  // read the data\n  // do some stuff with d3\n  // compute all the <rect>\n\n  return (\n    <div>\n      <svg width={width} height={height}>\n        // render all the <rect>\n      </svg>\n    </div>\n  );\n};\n'.trim(),R="\nconst scale = d3.scaleLinear()\n  .domain([0, 10]) // data goes from 0 to 10\n  .range([0, 200]); // axis goes from 0 to 200\n\nscale(0); // 0 -> item with a value of 0 will have a bar of length 0\nscale(5); // 100 -> bar of length 100\nscale(10); // 200 -> bar of length 200\n".trim(),A='\nconst yScale = d3\n    .scaleBand()\n    .range([0, boundsHeight])\n    .domain(allGroups)\n    .padding(0.01);\n\n// yScale("A") -> 0\n// yScale.bandwidth() -> 11\n'.trim()},6266:function(e,t,n){"use strict";n.d(t,{P:function(){return g}});var r=n(5893),a=n(7294),i=[{name:"Mark",value:90},{name:"Robert",value:12},{name:"Emily",value:34},{name:"Marion",value:53},{name:"Nicolas",value:98},{name:"M\xe9lanie",value:23},{name:"Gabriel",value:18},{name:"Jean",value:104},{name:"Paul",value:2}],o=[{name:"Mark",value:9},{name:"Robert",value:19},{name:"Emily",value:31},{name:"Marion",value:23},{name:"Nicolas",value:38},{name:"M\xe9lanie",value:123},{name:"Gabriel",value:4},{name:"Jean",value:23},{name:"Christophe",value:22}],s=n(2989),l=n(1472),d=function(e){var t,n,a,i,o=e.name,s=e.value,d=e.barHeight,c=e.barWidth,h=e.x,u=e.y,p=(0,l.useSpring)({from:{value:0,barWidth:0,valueOpacity:0},to:{value:s,barWidth:c,valueOpacity:c>80?1:0,y:u},config:{friction:100}});return(0,r.jsxs)("g",{children:[(0,r.jsx)(l.q.rect,{x:h,y:p.y,width:p.barWidth,height:d,opacity:.7,stroke:"#9d174d",fill:"#9d174d",fillOpacity:.3,strokeWidth:1,rx:1}),(0,r.jsx)(l.q.text,{x:null===(t=p.barWidth)||void 0===t?void 0:t.to((function(e){return e-7})),y:null===(n=p.y)||void 0===n?void 0:n.to((function(e){return e+d/2})),textAnchor:"end",alignmentBaseline:"central",fontSize:12,opacity:p.valueOpacity,children:null===(a=p.value)||void 0===a?void 0:a.to((function(e){return e.toFixed(0)}))}),(0,r.jsx)(l.q.text,{x:h+7,y:null===(i=p.y)||void 0===i?void 0:i.to((function(e){return e+d/2})),textAnchor:"start",alignmentBaseline:"central",fontSize:12,children:o})]})},c={top:30,right:30,bottom:30,left:30},h=function(e){var t=e.width,n=e.height,i=e.data,o=t-c.right-c.left,l=n-c.top-c.bottom,h=i.sort((function(e,t){return t.value-e.value})).map((function(e){return e.name})),u=(0,a.useMemo)((function(){return s.tiA().domain(h).range([0,l]).padding(.3)}),[i,n]),p=s.Fp7(i.map((function(e){return e.value}))),g=s.BYU().domain([0,p]).range([0,o]),m=i.map((function(e){return(0,r.jsx)(d,{name:e.name,value:e.value,barHeight:u.bandwidth(),barWidth:g(e.value),x:g(0),y:u(e.name)},e.name)}));return(0,r.jsx)("div",{children:(0,r.jsx)("svg",{width:t,height:n,children:(0,r.jsx)("g",{width:o,height:l,transform:"translate(".concat([c.left,c.top].join(","),")"),children:m})})})},u={border:"1px solid #9a6fb0",borderRadius:"3px",padding:"4px 8px",margin:"10px 2px",fontSize:14,color:"#9a6fb0",opacity:.7},p=function(e){var t=e.width,n=e.height,s=(0,a.useState)(i),l=s[0],d=s[1];return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{style:{height:50},children:[(0,r.jsx)("button",{style:u,onClick:function(){return d(i)},children:"Data 1"}),(0,r.jsx)("button",{style:u,onClick:function(){return d(o)},children:"Data 2"})]}),(0,r.jsx)(h,{width:t,height:n-50,data:l})]})},g=function(e){var t=e.width,n=void 0===t?700:t,a=e.height,i=void 0===a?400:a;return n&&i?(0,r.jsx)(p,{width:n,height:i}):null}}},function(e){e.O(0,[2781,5660,1472,358,6163,9774,2888,179],(function(){return t=4142,e(e.s=t);var t}));var t=e.O();_N_E=t}]);