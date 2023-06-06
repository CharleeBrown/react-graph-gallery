(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5989],{225:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/voronoi",function(){return n(110)}])},6820:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var i=n(5893);n(7294);var o=n(8843),s=n(6438);let a=e=>{let{imgLink:t,height:n,opacity:o,children:s}=e;return(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsx)("div",{style:{backgroundImage:"url("+t+")",height:n,backgroundAttachment:"fixed",opacity:o,backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}),(0,i.jsx)("div",{className:"absolute top-0 left-0 w-full h-full",children:s})]})};function r(e){var t;let{chartId:n}=e,r=(null===(t=o.c.find(e=>e.id===n))||void 0===t?void 0:t.label)||"chart";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{id:"inspiration",children:r+" inspiration"}),(0,i.jsxs)("p",{children:["If you're looking for inspiration to create your next"," ",(0,i.jsx)("span",{children:r}),", note that"," ",(0,i.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","showcases many examples. Definitely the best place to get ... inspiration!"]}),(0,i.jsx)("div",{className:"border mb-10",children:(0,i.jsx)(a,{height:250,imgLink:"https://github.com/holtzy/dataviz-inspiration/blob/main/public/misc/overview1.png?raw=true",opacity:.3,children:(0,i.jsx)("div",{className:"flex justify-center items-center h-full",children:(0,i.jsxs)("div",{style:{maxWidth:400},className:"flex flex-col items-center",children:[(0,i.jsxs)("p",{className:"text-center text-sm",children:[(0,i.jsx)("a",{href:"https://www.dataviz-inspiration.com",children:"dataviz-inspiration.com"})," ","showcases hundreds of stunning dataviz projects. Have a look to get some ideas on how to make your ",(0,i.jsx)("span",{children:r})," ","looks good!"]}),(0,i.jsx)(s.J,{href:"https://www.dataviz-inspiration.com",isFilled:!0,size:"md",children:"visit"})]})})})})]})}},505:function(e,t,n){"use strict";n.d(t,{r:function(){return l}});var i=n(5893),o=n(1664),s=n.n(o),a=n(8843),r=n(88),d=n(3572);let l=e=>{let{chartId:t}=e,n=a.c.filter(e=>e.id===t)[0].label;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{id:"responsiveness",children:"Responsive "+n+" with react"}),(0,i.jsxs)("p",{children:["The component above is not responsive. It expects 2 props called"," ",(0,i.jsx)("code",{children:"width"})," and ",(0,i.jsx)("code",{children:"height"})," and will render a ",n," of those dimensions."]}),(0,i.jsxs)("p",{children:["Making the ",n," responsive requires adding a ",(0,i.jsx)("b",{children:"wrapper"})," component that gets the dimension of the parent ",(0,i.jsx)("code",{children:"div"}),", and listening to a potential dimension change. This is possible thanks to a hook called"," ",(0,i.jsx)("code",{children:"useDimensions"})," that will do the job for us."]}),(0,i.jsx)(r.U,{startOpen:!1,title:(0,i.jsxs)("span",{children:[(0,i.jsx)("code",{children:"useDimensions"}),": a hook to make your viz responsive"]}),children:(0,i.jsx)(d.d,{code:h})}),(0,i.jsxs)("p",{children:["I'm in the process of writing a complete blog post on the topic."," ",(0,i.jsx)(s(),{href:"/subscribe",children:"Subscribe to the project"})," to know when it's ready."]}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{})]})},h='\nexport const useDimensions = (targetRef: React.RefObject<HTMLDivElement>) => {\n\n  const getDimensions = () => {\n    return {\n      width: targetRef.current ? targetRef.current.offsetWidth : 0,\n      height: targetRef.current ? targetRef.current.offsetHeight : 0\n    };\n  };\n\n  const [dimensions, setDimensions] = useState(getDimensions);\n\n  const handleResize = () => {\n    setDimensions(getDimensions());\n  };\n\n  useEffect(() => {\n    window.addEventListener("resize", handleResize);\n    return () => window.removeEventListener("resize", handleResize);\n  }, []);\n\n  useLayoutEffect(() => {\n    handleResize();\n  }, []);\n\n  return dimensions;\n}\n'.trim()},110:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return R}});var i=n(5893),o=n(7294),s=n(153),a=n(9965),r=n(7262),d=n(3572),l=n(1122);let h=[{x:10,y:10},{x:4,y:4},{x:35,y:90},{x:67,y:34},{x:89,y:65},{x:23,y:10},{x:12,y:32},{x:45,y:78},{x:67,y:98},{x:23,y:23}];var c=n(3890);let x=e=>{let{width:t,height:n,data:s}=e,a=c.BYU().domain([0,100]).range([0,t]),r=c.BYU().domain([0,100]).range([0,n]),d=s.map((e,t)=>(0,i.jsx)("circle",{cx:a(e.x),cy:r(e.y),r:4},t)),l=(0,o.useMemo)(()=>{let e=s.map(e=>[a(e.x),r(e.y)]);return c.oc6.from(e)},[]),h=l.render(),x=(0,i.jsx)("path",{d:h,stroke:"grey",fill:"transparent",opacity:.2}),u=(0,o.useMemo)(()=>l.voronoi([0,0,t,n]),[s]),p=u.render(),m=(0,i.jsx)("path",{d:p,stroke:"black",fill:"red"});return(0,i.jsxs)("svg",{width:t,height:n,children:[d,x,m]})},u=e=>{let{width:t=700,height:n=400}=e;return 0===t||0===n?null:(0,i.jsx)("div",{children:(0,i.jsx)(x,{width:t,height:n,data:h})})};var p=n(1664),m=n.n(p);let j=[{x:10,y:10},{x:4,y:4},{x:35,y:90},{x:67,y:34},{x:89,y:65},{x:23,y:10},{x:12,y:32},{x:45,y:78},{x:67,y:98},{x:23,y:23}],g=e=>{let{width:t,height:n,data:o}=e,s=c.BYU().domain([0,100]).range([0,t]),a=c.BYU().domain([0,100]).range([0,n]),r=o.map((e,t)=>(0,i.jsx)("circle",{cx:s(e.x),cy:a(e.y),r:4},t));return(0,i.jsx)("svg",{width:t,height:n,children:r})},y=e=>{let{width:t=700,height:n=400}=e;return(0,i.jsx)("div",{style:{marginTop:20,marginBottom:20},children:(0,i.jsx)(g,{width:t,height:n-40,data:j})})},f=[{x:10,y:10},{x:4,y:4},{x:35,y:90},{x:67,y:34},{x:89,y:65},{x:23,y:10},{x:12,y:32},{x:45,y:78},{x:67,y:98},{x:23,y:23}],v=e=>{let{width:t,height:n,data:s}=e,a=c.BYU().domain([0,100]).range([0,t]),r=c.BYU().domain([0,100]).range([0,n]),d=s.map((e,t)=>(0,i.jsx)("circle",{cx:a(e.x),cy:r(e.y),r:4},t)),l=(0,o.useMemo)(()=>{let e=s.map(e=>[a(e.x),r(e.y)]);return c.oc6.from(e)},[]),h=l.render(),x=(0,i.jsx)("path",{d:h,stroke:"grey",fill:"transparent",opacity:.8});return(0,i.jsxs)("svg",{width:t,height:n,children:[d,x]})},b=e=>{let{width:t=700,height:n=400}=e;return 0===t||0===n?null:(0,i.jsx)("div",{children:(0,i.jsx)(v,{width:t,height:n,data:f})})};var w=n(505),k=n(6820);let D=[{x:10,y:10},{x:4,y:4},{x:35,y:90},{x:67,y:34},{x:89,y:65},{x:23,y:10},{x:12,y:32},{x:45,y:78},{x:67,y:98},{x:23,y:23}],z=e=>{let{width:t,height:n,data:s}=e,a=c.BYU().domain([0,100]).range([0,t]),r=c.BYU().domain([0,100]).range([0,n]),d=(0,o.useMemo)(()=>{let e=s.map(e=>[a(e.x),r(e.y)]);return c.oc6.from(e)},[s]),[l,h]=(0,o.useState)(null),x=(0,o.useMemo)(()=>d.voronoi([0,0,t,n]),[d,t,n]),u=s.map((e,t)=>{let n=x.renderCell(t);return(0,i.jsx)("path",{d:n,stroke:"grey",fill:"transparent",opacity:.1,onMouseOver:()=>{h(t)}},t)}),p=s.map((e,t)=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("circle",{cx:a(e.x),cy:r(e.y),r:4},t),l===t&&(0,i.jsx)("circle",{cx:a(e.x),cy:r(e.y),r:10,fill:"transparent",stroke:"red",strokeWidth:3},t)]}));return(0,i.jsxs)("svg",{width:t,height:n,children:[p,u]})},N=e=>{let{width:t=700,height:n=400}=e;return 0===t||0===n?null:(0,i.jsx)("div",{children:(0,i.jsx)(z,{width:t,height:n,data:D})})},T=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("p",{children:["A"," ",(0,i.jsx)("a",{href:"https://en.wikipedia.org/wiki/Voronoi_diagram",children:"voronoi diagram"})," ","is a is a partition of a plane into regions called ",(0,i.jsx)("b",{children:"voronoi cells"}),". A voronoi cell consists of every point in the plane whose distance to its linked data point is less than or equal to its distance to"," ",(0,i.jsx)("b",{children:"any other data point"}),"."," "]}),(0,i.jsxs)("p",{children:["This page is a step-by-step guide on how to build your own voronoi diagram for the web, using ",(0,i.jsx)("a",{href:"https://reactjs.org/",children:"React"})," and"," ",(0,i.jsx)("a",{href:"https://d3-graph-gallery.com",children:"D3.js"}),"."]}),(0,i.jsxs)("p",{children:["It starts by describing how the ",(0,i.jsx)("b",{children:"data"})," should be organized and explains how to run and plot a ",(0,i.jsx)("b",{children:"Delaunay triangulation"}),". Based on this, it explains how to build the voronoi diagram. Finally it shows how this can be used for real life application like for a ",(0,i.jsx)("b",{children:"scatterplot"})," ","or to build a ",(0,i.jsx)("b",{children:"voronoi treemap"}),"."]})]});function R(){return(0,i.jsxs)(s.A,{title:"How to build a histogram with React and D3.",seoDescription:"A step-by-step guide to build your very own histogram from scratch. Comes with explanations, code sandboxes, and ready-to-use templates.",children:[(0,i.jsx)(a.Z,{title:"Voronoi Diagram",description:T,chartType:"voronoi"}),(0,i.jsx)("h2",{id:"data",children:"The Data"}),(0,i.jsxs)("p",{children:["Everything starts with a set of ",(0,i.jsx)("b",{children:"two-dimensional points"}),". Their coordinates are available with ",(0,i.jsx)("code",{children:"x"})," representing the position on the ",(0,i.jsx)("b",{children:"horizontal"})," axis and ",(0,i.jsx)("code",{children:"y"})," being for the"," ",(0,i.jsx)("b",{children:"vertical"})," axis."]}),(0,i.jsxs)("p",{children:["As a result, the dataset is pretty simple: an ",(0,i.jsx)("code",{children:"array"})," of"," ","objects that looks like this:"]}),(0,i.jsx)("br",{}),(0,i.jsx)(d.d,{code:B}),(0,i.jsxs)("p",{children:["Note: this is the same dataset as the one used for a"," ",(0,i.jsx)(m(),{href:"/scatter-plot",children:"scatterplot"}),"."]}),(0,i.jsx)("h2",{id:"2d plane",children:"A set of two-dimensional points"}),(0,i.jsxs)("p",{children:["Let's start by plotting those data points on a two-dimensional points. This is basically a ",(0,i.jsx)(m(),{href:"/scatter-plot",children:"scatterplot"})," except that we're not drawing the axes."]}),(0,i.jsxs)("p",{children:["If you're not familiar with the basic steps used in the following sandbox, please take a look at the"," ",(0,i.jsx)(m(),{href:"/scatter-plot",children:"scatterplot"})," section of the gallery that goes in deep on what's going on here."]}),(0,i.jsxs)("p",{children:["You need a good understanding about ",(0,i.jsx)("b",{children:"d3 scales"}),", how to"," ",(0,i.jsx)("b",{children:"loop through a data"})," object to create ",(0,i.jsx)("b",{children:"svg elements"})," and how to make the component ",(0,i.jsx)("b",{children:"render"})," them."]}),(0,i.jsx)(l.$,{VizComponent:y,vizName:"VoronoiScatterOnly",maxWidth:600,height:300,caption:"A voronoi diagram starts with a set of 2d coordinate points plotted on a plane."}),(0,i.jsx)("h2",{id:"delaunay",children:"Delaunay triangulation"}),(0,i.jsxs)("p",{children:["The first required step to build a voronoi diagram is to run a"," ",(0,i.jsx)("a",{href:"https://en.wikipedia.org/wiki/Delaunay_triangulation",children:"Delaunay triangulation"}),"."]}),(0,i.jsx)("p",{children:"You don't necessarily need to understand what a Delaunay triangulation is. But if you're interested in the topic, it will be covered in the dataviz universe newslette soon."}),(0,i.jsxs)("p",{children:["Fortunately, d3.js has a module called"," ",(0,i.jsx)("a",{href:"https://github.com/d3/d3-delaunay",children:"d3-delaunay"})," that does this triangulation for us. You can import this module as follow. You can also read its complete doc on"," ",(0,i.jsx)("a",{href:"https://github.com/d3/d3-delaunay",children:"github"}),"."]}),(0,i.jsx)(d.d,{code:_}),(0,i.jsxs)("p",{children:["Start by creating a ",(0,i.jsx)("code",{children:"delaunay"})," object thanks to the"," ",(0,i.jsx)("code",{children:"Delaunay.from()"})," function. This function expects an array of array of numbers, so there is a tiny bit of data wrangling to do here."]}),(0,i.jsx)(d.d,{code:V}),(0,i.jsxs)("p",{children:["This ",(0,i.jsx)("code",{children:"delaunay"})," object contains all the information about the triangulation \uD83C\uDF89. It also has a method called ",(0,i.jsx)("code",{children:"render()"})," that provides the svg path of all the ",(0,i.jsx)("code",{children:"adjacent triangles"}),"."]}),(0,i.jsx)(d.d,{code:C}),(0,i.jsxs)("p",{children:["This path is provided as a string that we can path to a"," ",(0,i.jsx)("code",{children:"path"})," svg element as follow:"]}),(0,i.jsx)(d.d,{code:Y}),(0,i.jsxs)("p",{children:["We can now render this inside an ",(0,i.jsx)("code",{children:"svg"})," element to get an overview of this ",(0,i.jsx)("b",{children:"delaunay triangulation"}),":"]}),(0,i.jsx)(l.$,{VizComponent:b,vizName:"VoronoidelaunayOnly",maxWidth:600,height:300,caption:"Second step: run a Delaunay triangulation on the set of two-dimensional points."}),(0,i.jsx)("h2",{id:"voronoi",children:"Voronoi diagram"}),(0,i.jsxs)("p",{children:["The Delaunay triangulation above corresponds to the ",(0,i.jsx)("b",{children:"dual graph"})," of the Voronoi diagram. Basically, it means that the ",(0,i.jsx)("b",{children:"circumcenters"})," ","of the Delaunay triangles are the ",(0,i.jsx)("b",{children:"vertices"})," of the Voronoi diagram."]}),(0,i.jsxs)("p",{children:["But no worries, the ",(0,i.jsx)("code",{children:"delaunay"})," object we built in the previous section has a ",(0,i.jsx)("code",{children:"voronoi()"})," method. It computes the voronoi cell coordinates based on the delaunay information:"]}),(0,i.jsx)(d.d,{code:E}),(0,i.jsx)("p",{children:"We can plot the voronoi cells using the same kind of code as for the delaunay triangles. Resulting in our first voronoi diagram! \uD83C\uDF89"}),(0,i.jsx)("br",{}),(0,i.jsx)(l.$,{VizComponent:u,vizName:"VoronoiBasic",maxWidth:600,height:300,caption:"Last step: join the circumcenters of each triangle to get the voronoi diagram."}),(0,i.jsx)(w.r,{chartId:"voronoi"}),(0,i.jsx)(k.Z,{chartId:"voronoi"}),(0,i.jsx)("h2",{id:"closest point",children:"Closest point detection"}),(0,i.jsx)("p",{children:"The voronoi diagram is commonly used to detect the closest data point of the mouse position. This can be pretty useful to highlight the closest point without having to hover exactly over it."}),(0,i.jsx)("br",{}),(0,i.jsx)(l.$,{VizComponent:N,vizName:"VoronoiClosestPoint",maxWidth:600,height:300,caption:"Use the voronoi algorithm to detect the closest point of the mouse position."}),(0,i.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 mb-3 mt-24"}),(0,i.jsx)(r.Z,{chartFamily:"distribution"}),(0,i.jsx)("div",{className:"mt-20"})]})}let B="\nexport const data = [\n  { x: 10, y: 10 },\n  { x: 4, y: 4 },\n  { x: 35, y: 90 },\n  { x: 67, y: 34 },\n  ...\n];\n".trim(),_='\nimport { Delaunay } from "d3";\n'.trim(),V="\nconst delaunay = useMemo(() => {\n  const formattedData = data.map((d) => [xScale(d.x), yScale(d.y)]);\n  return Delaunay.from(formattedData);\n}, []);\n".trim(),C="\nconst delaunayPath = delaunay.render();\n".trim(),Y='\nconst allDelaunayShapes = (\n  <path d={delaunayPath} stroke="grey" fill="transparent" opacity={0.2} />\n);\n'.trim(),E="\nconst voronoi = useMemo(() => {\n  return delaunay.voronoi([0, 0, width, height]);\n}, [data]);\n".trim()}},function(e){e.O(0,[3996,3890,5660,645,1188,9774,2888,179],function(){return e(e.s=225)}),_N_E=e.O()}]);