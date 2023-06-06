(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[738],{2388:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/line-chart",function(){return n(8504)}])},6820:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var i=n(5893);n(7294);var s=n(8843),r=n(6438);let a=e=>{let{imgLink:t,height:n,opacity:s,children:r}=e;return(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsx)("div",{style:{backgroundImage:"url("+t+")",height:n,backgroundAttachment:"fixed",opacity:s,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}),(0,i.jsx)("div",{className:"absolute top-0 left-0 w-full h-full",children:r})]})};function o(e){var t;let{chartId:n}=e,o=(null===(t=s.c.find(e=>e.id===n))||void 0===t?void 0:t.label)||"chart";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{id:"inspiration",children:o+" inspiration"}),(0,i.jsxs)("p",{children:["If you're looking for inspiration to create your next"," ",(0,i.jsx)("span",{children:o}),", note that"," ",(0,i.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","showcases many examples. Definitely the best place to get ... inspiration!"]}),(0,i.jsx)("div",{className:"border mb-10",children:(0,i.jsx)(a,{height:250,imgLink:"https://github.com/holtzy/dataviz-inspiration/blob/main/public/misc/overview1.png?raw=true",opacity:.3,children:(0,i.jsx)("div",{className:"flex justify-center items-center h-full",children:(0,i.jsxs)("div",{style:{maxWidth:400},className:"flex flex-col items-center",children:[(0,i.jsxs)("p",{className:"text-center text-sm",children:[(0,i.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","showcases hundreds of stunning dataviz projects. Have a look to get some ideas on how to make your ",(0,i.jsx)("span",{children:o})," ","looks good!"]}),(0,i.jsx)(r.J,{href:"https://www.dataviz-inspiration.com",isFilled:!0,size:"md",children:"visit"})]})})})})]})}},505:function(e,t,n){"use strict";n.d(t,{r:function(){return h}});var i=n(5893),s=n(1664),r=n.n(s),a=n(8843),o=n(88),l=n(3572);let h=e=>{let{chartId:t}=e,n=a.c.filter(e=>e.id===t)[0].label;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{id:"responsiveness",children:"Responsive "+n+" with react"}),(0,i.jsxs)("p",{children:["The component above is not responsive. It expects 2 props called"," ",(0,i.jsx)("code",{children:"width"})," and ",(0,i.jsx)("code",{children:"height"})," and will render a ",n," of those dimensions."]}),(0,i.jsxs)("p",{children:["Making the ",n," responsive requires adding a ",(0,i.jsx)("b",{children:"wrapper"})," component that gets the dimension of the parent ",(0,i.jsx)("code",{children:"div"}),", and listening to a potential dimension change. This is possible thanks to a hook called"," ",(0,i.jsx)("code",{children:"useDimensions"})," that will do the job for us."]}),(0,i.jsx)(o.U,{startOpen:!1,title:(0,i.jsxs)("span",{children:[(0,i.jsx)("code",{children:"useDimensions"}),": a hook to make your viz responsive"]}),children:(0,i.jsx)(l.d,{code:d})}),(0,i.jsxs)("p",{children:["I'm in the process of writing a complete blog post on the topic."," ",(0,i.jsx)(r(),{href:"/subscribe",children:"Subscribe to the project"})," to know when it's ready."]}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{})]})},d='\nexport const useDimensions = (targetRef: React.RefObject<HTMLDivElement>) => {\n\n  const getDimensions = () => {\n    return {\n      width: targetRef.current ? targetRef.current.offsetWidth : 0,\n      height: targetRef.current ? targetRef.current.offsetHeight : 0\n    };\n  };\n\n  const [dimensions, setDimensions] = useState(getDimensions);\n\n  const handleResize = () => {\n    setDimensions(getDimensions());\n  };\n\n  useEffect(() => {\n    window.addEventListener("resize", handleResize);\n    return () => window.removeEventListener("resize", handleResize);\n  }, []);\n\n  useLayoutEffect(() => {\n    handleResize();\n  }, []);\n\n  return dimensions;\n}\n'.trim()},9975:function(e,t,n){"use strict";n.d(t,{X:function(){return a}});var i=n(5893),s=n(6395),r=n.n(s);let a=e=>{let{img:t,title:n,description:s,link:a,alt:o}=e;return(0,i.jsxs)("figure",{className:r().container,children:[(0,i.jsx)("img",{src:"/chart/"+t,className:r().image,alt:o}),(0,i.jsxs)("figcaption",{children:[(0,i.jsx)("p",{className:r().title,children:(0,i.jsx)("b",{children:n})}),(0,i.jsx)("div",{className:"font-light",children:s}),(0,i.jsx)("a",{href:a})]})]})}},9942:function(e,t,n){"use strict";n.d(t,{E:function(){return s}});var i=n(5893);n(7294);let s=e=>{let{children:t}=e;return(0,i.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-4",children:t})}},8893:function(e,t,n){"use strict";n.d(t,{H:function(){return s}});var i=n(5893);let s=e=>{let{text:t}=e;return(0,i.jsxs)("blockquote",{className:"mt-10 opacity-20",children:[(0,i.jsx)("b",{className:"text-reactGallery mr-4",children:"ToDo"}),t]})}},8504:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var i=n(5893),s=n(7294),r=n(153),a=n(9965),o=n(7262),l=n(3572),h=n(1122),d=n(1664),c=n.n(d);let x=[{x:1,y:90},{x:2,y:12},{x:3,y:34},{x:4,y:53},{x:5,y:52},{x:6,y:9},{x:7,y:18},{x:8,y:78},{x:9,y:28},{x:10,y:34}];var p=n(3890);let u={top:30,right:30,bottom:50,left:50},j=e=>{let{width:t,height:n,data:r}=e,a=(0,s.useRef)(null),o=t-u.right-u.left,l=n-u.top-u.bottom,[h,d]=p.Wem(r,e=>e.y),c=(0,s.useMemo)(()=>p.BYU().domain([0,d||0]).range([l,0]),[r,n]),[x,j]=p.Wem(r,e=>e.x),m=(0,s.useMemo)(()=>p.BYU().domain([0,j||0]).range([0,o]),[r,t]);(0,s.useEffect)(()=>{let e=p.Ys(a.current);e.selectAll("*").remove();let t=p.LLu(m);e.append("g").attr("transform","translate(0,"+l+")").call(t);let n=p.y4O(c);e.append("g").call(n)},[m,c,l]);let g=p.jvg().x(e=>m(e.x)).y(e=>c(e.y)),f=g(r);return f?(0,i.jsx)("div",{children:(0,i.jsxs)("svg",{width:t,height:n,children:[(0,i.jsx)("g",{width:o,height:l,transform:"translate(".concat([u.left,u.top].join(","),")"),children:(0,i.jsx)("path",{d:f,opacity:1,stroke:"#9a6fb0",fill:"none",strokeWidth:2})}),(0,i.jsx)("g",{width:o,height:l,ref:a,transform:"translate(".concat([u.left,u.top].join(","),")")})]})}):null},m=e=>{let{width:t=700,height:n=400}=e;return(0,i.jsx)(j,{data:x,width:t,height:n})};var g=n(6820),f=n(505);let b=[{x:1,melanie:90,yan:34},{x:2,melanie:12,yan:24},{x:3,melanie:34,yan:14},{x:4,melanie:53,yan:45},{x:5,melanie:52,yan:45},{x:6,melanie:9,yan:67},{x:7,melanie:18,yan:67},{x:8,melanie:78,yan:87},{x:9,melanie:28,yan:87},{x:10,melanie:34,yan:45}];var w=n(2236);let y={top:30,right:30,bottom:50,left:50},v=e=>{let{width:t,height:n,data:r,selectedGroup:a}=e,o=(0,s.useRef)(null),l=t-y.right-y.left,h=n-y.top-y.bottom,d=(0,s.useMemo)(()=>p.BYU().domain([0,100]).range([h,0]),[r,n]),c=(0,s.useMemo)(()=>p.BYU().domain([0,10]).range([0,l]),[r,t]);(0,s.useEffect)(()=>{let e=p.Ys(o.current);e.selectAll("*").remove();let t=p.LLu(c);e.append("g").attr("transform","translate(0,"+h+")").call(t);let n=p.y4O(d);e.append("g").call(n)},[c,d,h]);let x=p.jvg().x(e=>c(e.x)).y(e=>d(e[a])),u=x(r);return u?(0,i.jsx)("div",{children:(0,i.jsxs)("svg",{width:t,height:n,children:[(0,i.jsx)("g",{width:l,height:h,transform:"translate(".concat([y.left,y.top].join(","),")"),children:(0,i.jsx)(k,{path:u,color:"yan"===a?"#69b3a2":"#9a6fb0"})}),(0,i.jsx)("g",{width:l,height:h,ref:o,transform:"translate(".concat([y.left,y.top].join(","),")")})]})}):null},k=e=>{let{path:t,color:n}=e,s=(0,w.q_)({to:{path:t,color:n},config:{friction:100}});return(0,i.jsx)(w.q.path,{d:s.path,fill:"none",stroke:n,strokeWidth:2})},z={border:"1px solid #9a6fb0",borderRadius:"3px",padding:"4px 8px",margin:"10px 2px",fontSize:14,color:"#9a6fb0",opacity:.7},L=e=>{let{width:t,height:n}=e,[r,a]=(0,s.useState)("melanie");return(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{style:{height:50},children:[(0,i.jsx)("button",{style:z,onClick:()=>a("melanie"),children:"Melanie"}),(0,i.jsx)("button",{style:z,onClick:()=>a("yan"),children:"Yan"})]}),(0,i.jsx)(v,{width:t,height:n-50,data:b,selectedGroup:r})]})},D=e=>{let{width:t=700,height:n=400}=e;return(0,i.jsx)(L,{width:t,height:n})};var T=n(88),N=n(9942),I=n(9975),R=n(6438),S=n(8893);let _=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("p",{children:["A ",(0,i.jsx)("a",{href:"https://www.data-to-viz.com/graph/line.html",children:"line chart"})," or line graph displays the evolution of one or several numeric variables. This page is a step-by-step guide on how to build your own line chart component for the web, using ",(0,i.jsx)("a",{href:"https://reactjs.org/",children:"React"})," and"," ",(0,i.jsx)("a",{href:"https://d3-graph-gallery.com/line",children:"D3.js"}),"."]}),(0,i.jsxs)("p",{children:["It starts by describing how the ",(0,i.jsx)("b",{children:"data"})," should be organized and how to initialize the ",(0,i.jsx)("b",{children:"react component"}),". It then explains how to compute the scales, and axes. Once this is done, it shows how to render the lines and suggests a few variations. \uD83D\uDE47‍♂️."]})]});function C(){return(0,i.jsxs)(r.A,{title:"Line chart | The React Graph Gallery",seoDescription:"How to build a line chart with React and D3.js. A set of re-usable components coming with editable code and explanations.",children:[(0,i.jsx)(a.Z,{title:"Line chart",description:_,chartType:"line"}),(0,i.jsx)("h2",{id:"data",children:"The Data"})," ",(0,i.jsxs)("p",{children:["The dataset required to build a line chart is usually an array where each item is an object providing the ",(0,i.jsx)("code",{children:"x"})," and the"," ",(0,i.jsx)("code",{children:"y"})," values of the data point."]}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:"Here is a minimal example:"}),(0,i.jsx)(l.d,{code:E}),(0,i.jsxs)("p",{children:[(0,i.jsx)("u",{children:"Note"}),": if your data is in ",(0,i.jsx)("code",{children:".csv"})," format, you can translate it thanks to the ",(0,i.jsx)("code",{children:"d3.csv()"})," function as suggested"," ",(0,i.jsx)("a",{href:"https://d3-graph-gallery.com/graph/line_basic.html",children:"here"}),"."]}),(0,i.jsxs)("p",{children:[(0,i.jsx)("u",{children:"Note"}),": a line chart is often made to represent ",(0,i.jsx)("b",{children:"time"}),". If your ",(0,i.jsx)("code",{children:"x"})," property is a ",(0,i.jsx)("b",{children:"date"}),", please visit the"," ",(0,i.jsx)(c(),{href:"/timeseries",children:"timeseries"})," section."]}),(0,i.jsx)(R.J,{href:"/timeseries",size:"sm",isFilled:!0,children:"Timeseries section"}),(0,i.jsx)("h2",{id:"skeleton",children:"Component skeleton"}),(0,i.jsxs)("p",{children:["The goal here is to create a ",(0,i.jsx)("code",{children:"LineChart"})," component that will be stored in a ",(0,i.jsx)("code",{children:"LineChart.tsx"})," file. This component requires 3 props to render: a ",(0,i.jsx)("code",{children:"width"}),", a ",(0,i.jsx)("code",{children:"height"}),", and some"," ",(0,i.jsx)("code",{children:"data"}),"."]}),(0,i.jsxs)("p",{children:["The shape of the ",(0,i.jsx)("code",{children:"data"})," is described above. The"," ",(0,i.jsx)("code",{children:"width"})," and ",(0,i.jsx)("code",{children:"height"})," will be used to render an"," ",(0,i.jsx)("code",{children:"svg"})," element in the DOM, in which we will insert the LineChart."]}),(0,i.jsxs)("p",{children:["To put it in a nutshell, that's the skeleton of our"," ",(0,i.jsx)("code",{children:"LineChart"})," component:"]}),(0,i.jsx)(l.d,{code:H}),(0,i.jsxs)("p",{children:["It's fundamental to understand that with this code organization, d3.js will be used to prepare the SVG ",(0,i.jsx)("code",{children:"path"}),", but it's React that will render them in the ",(0,i.jsx)("code",{children:"return()"})," statement. We won't use d3 methods like ",(0,i.jsx)("code",{children:"append"})," that you can find in usual"," ",(0,i.jsx)("a",{href:"https://www.d3-graph-gallery.com",children:"d3.js examples"}),"."]}),(0,i.jsx)("h2",{id:"scales & axes",children:"Scales and Axes"}),(0,i.jsxs)("p",{children:["Like for many charts, everything starts with ",(0,i.jsx)("b",{children:"scales"}),". A scale is a"," ",(0,i.jsx)("b",{children:"function"})," that transform the value of a data point in a position in ",(0,i.jsx)("b",{children:"pixel"}),"."]}),(0,i.jsxs)("p",{children:["Two scales are required here. One for the X axis, and one for the Y axis. They are both ",(0,i.jsx)("b",{children:"linear"})," scales."]}),(0,i.jsxs)("p",{children:["This concept of scale is thoroughly described in other chart type pages like for the ",(0,i.jsx)(c(),{href:"/scatter-plot",children:"scatterplot"})," so I won't repeat it here. Also, dealing with the ",(0,i.jsx)("code",{children:"Date"})," format shoud drive you to the ",(0,i.jsx)(c(),{href:"/timeseries",children:"timeseries section"}),"."]}),(0,i.jsxs)("div",{className:"flex",children:[(0,i.jsx)(R.J,{href:"/scatter-plot",size:"sm",children:"Scatterplot"}),(0,i.jsx)(R.J,{href:"/timeseries",size:"sm",isFilled:!0,children:"Timeseries"})]}),(0,i.jsxs)("h2",{id:"d3.line()",children:["The ",(0,i.jsx)("code",{children:"d3.line()"})," function"]}),(0,i.jsxs)("p",{children:["From the dataset described above, we want to draw a line in SVG. In the DOM this is done using a ",(0,i.jsx)("code",{children:"path"})," element that has a"," ",(0,i.jsx)("code",{children:"d"})," attribute."]}),(0,i.jsxs)("p",{children:["Fortunately, d3.js offers the ",(0,i.jsx)("code",{children:"d3.line()"})," function that helps us doing this. ",(0,i.jsx)("code",{children:"d3.line()"})," is a function that returns a function. It can be invoked this way:"]}),(0,i.jsx)(l.d,{code:M}),(0,i.jsxs)("p",{children:["Here 2 ",(0,i.jsx)("b",{children:"accessor functions"})," are provided. An accessor function tells to d3 how to find the position in pixel of a datapoint based on an item of the initial dataset."]}),(0,i.jsxs)("p",{children:[(0,i.jsx)("code",{children:"lineBuilder"})," is now a function that expects a dataset as input and returns a SVG ",(0,i.jsx)("code",{children:"path"})," from it."," "]})," ",(0,i.jsx)(l.d,{code:A}),(0,i.jsxs)("p",{children:[" ","This path can easily be plotted as shown in the following section. \uD83C\uDF89"]}),(0,i.jsx)("h2",{id:"basic",children:"Most basic line chart"}),(0,i.jsxs)("p",{children:["Most of the job is done already. It is just a matter of passing the"," ",(0,i.jsx)("code",{children:"path"})," computed above to the SVG element. Something like this:"]}),(0,i.jsx)(l.d,{code:P}),(0,i.jsx)("p",{children:"Leading to our first line chart! \uD83D\uDD25"}),(0,i.jsx)(h.$,{vizName:"LineChartBasic",VizComponent:m,height:500,maxWidth:600,caption:"Most basic line chart made with react (rendering) and d3.js (path computation)"}),(0,i.jsxs)("p",{children:["Note: you can compare this with a"," ",(0,i.jsx)("a",{href:"https://d3-graph-gallery.com/graph/line_basic.html",children:"d3.js only approach"})]}),(0,i.jsx)(f.r,{chartId:"line"}),(0,i.jsx)(g.Z,{chartId:"line"}),(0,i.jsx)("h2",{id:"transition",children:"Transition"}),(0,i.jsxs)("p",{children:["How can we ",(0,i.jsx)("b",{children:"smoothly animate"})," the transition between 2 datasets on a line chart? Click on the buttons on top of the chart below to trigger an animation between 2 groups of a dataset."]}),(0,i.jsxs)("p",{children:["This is possible thanks to the"," ",(0,i.jsx)("a",{href:"https://react-spring.dev/",children:"react spring"})," library. Basically, instead of rendering usual a ",(0,i.jsx)("code",{children:"path"})," element, the library provides an ",(0,i.jsx)("code",{children:"animated.path"})," element, that is linked to a"," ",(0,i.jsx)("code",{children:"useSpring"})," hook."]}),(0,i.jsxs)("p",{children:["This is what the ",(0,i.jsx)("code",{children:"LineItem"})," component I use looks like:"]}),(0,i.jsx)(T.U,{startOpen:!1,title:(0,i.jsxs)("span",{children:[(0,i.jsx)("code",{children:"LineItem"}),": a component that animates the transition of a"," ",(0,i.jsx)("code",{children:"path"})]}),children:(0,i.jsx)(l.d,{code:F})}),(0,i.jsx)(h.$,{vizName:"LineChartDatasetTransition",VizComponent:D,height:400,maxWidth:600,caption:"Click on the buttons to trigger a smooth transition between the 2 line charts."}),(0,i.jsxs)("p",{children:[(0,i.jsx)("b",{children:"Animation"})," in dataviz using React is a ",(0,i.jsx)("b",{children:"big"})," topic. It's impossible to go in-depth here! I will publish a dedicated blog post on the topic soon. Please ",(0,i.jsx)(c(),{href:"subscribe",children:"subscribe"})," to the newsletter if you want to be notified."]}),(0,i.jsx)("h2",{id:"variation",children:"Variations"}),(0,i.jsxs)("p",{children:["You know have the basic understanding on how to build a ",(0,i.jsx)("b",{children:"basic"})," ","line chart component with React and d3.js. Below are a few examples showing how to build more ",(0,i.jsx)("b",{children:"complex"})," graphs based on those principles."]}),(0,i.jsx)(N.E,{children:(0,i.jsx)(I.X,{link:"/example/line-chart-synchronized-cursors",title:"Synchronized cursors",description:(0,i.jsx)("p",{children:"Add a cursor synchronized on all your charts"}),img:"line-chart-synced-cursor.gif",alt:"line charts with synchronized cursors"})}),(0,i.jsx)("h2",{id:"next",children:"Next"}),(0,i.jsxs)("p",{children:["The"," ",(0,i.jsx)("a",{href:"https://www.react-graph-gallery.com",children:"react graph gallery"})," is under heavy development. Here is a list of things that will be added soon."]}),(0,i.jsx)(S.H,{text:"How to add a tooltip"}),(0,i.jsx)(S.H,{text:"Multi groups line charts aka Spaghetti chart"}),(0,i.jsx)(S.H,{text:"Sync with a bar chart"}),(0,i.jsx)(S.H,{text:"Dual Y Axis"}),(0,i.jsx)(S.H,{text:"Inline legend with Reppel"}),(0,i.jsx)("p",{children:(0,i.jsx)("br",{})})," ",(0,i.jsx)("p",{children:"Subscribe to the gallery to know when it is ready!"}),(0,i.jsx)(R.J,{isFilled:!0,size:"sm",href:"Subscribe",children:"Subscribe"}),(0,i.jsx)("p",{children:(0,i.jsx)("br",{})})," ",(0,i.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 my-3"}),(0,i.jsx)(o.Z,{chartFamily:"evolution"}),(0,i.jsx)("div",{className:"mt-20"})]})}let E="\nconst data = [\n  {x:1, y: 90},\n  {x: 2, y: 12},\n  {x: 3, y: 34},\n  {x: 4, y: 53},\n  {x: 5, y: 98},\n]\n".trim(),H='\nimport * as d3 from "d3"; // we will need d3.js\n\ntype LineChartProps = {\n  width: number;\n  height: number;\n  data: {x: number, y: number}[];\n};\n\nexport const LineChart = ({ width, height, data }: LineChartProps) => {\n\n  // read the data\n  // build the scales and axes\n  // build the lines\n\n  return (\n    <div>\n      <svg width={width} height={height}>\n        // render axes\n        // render all the <path>\n      </svg>\n    </div>\n  );\n};\n'.trim(),M="\nconst lineBuilder = d3\n  .line()\n  .x((d) => xScale(d.x))\n  .y((d) => yScale(d.y));\n".trim(),A="\nconst linePath = lineBuilder(data);\n\n// console.log(linePath)\n// 'M31.02,26.99 L63.02,59.9 L287.1,194.4 L319,178.2'\n".trim(),P='\n<svg width={width} height={height}>\n  <g ...some translation >\n    <path\n      d={linePath}\n      stroke="#9a6fb0"\n      fill="none"\n      strokeWidth={2}\n    />\n  </g>\n</svg>\n'.trim(),F='\ntype LineItemProps = {\n  path: string;\n  color: string;\n};\n\nconst LineItem = ({ path, color }: LineItemProps) => {\n  const springProps = useSpring({\n    to: {\n      path,\n      color,\n    },\n    config: {\n      friction: 100,\n    },\n  });\n\n  return (\n    <animated.path\n      d={springProps.path}\n      fill={"none"}\n      stroke={color}\n      strokeWidth={2}\n    />\n  );\n};'.trim()},6395:function(e){e.exports={container:"graphLinkImage_container__6vbL1",title:"graphLinkImage_title__86b4Y"}}},function(e){e.O(0,[3996,3890,5660,2236,645,1188,9774,2888,179],function(){return e(e.s=2388)}),_N_E=e.O()}]);