(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6456],{4854:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dendrogram",function(){return n(3335)}])},7262:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var r=n(5893);n(7294);var a=n(5887),i=n(8843),s=n(1664),o=n.n(s);let l=i.c.filter(e=>"general"===e.family).map(e=>e.logo);function d(e){let{chartLogo:t,caption:n,link:i,isAvailable:s,size:d}=e,h=l.includes(t),u=s?"opacity-100":"opacity-20";return(0,r.jsx)(o(),{href:s?i:"subscribe",className:"no-underline",children:(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[(0,r.jsxs)("div",{style:{width:d,height:d},className:"relative mr-2 rounded-full "+u+" "+(s?"cursor-pointer":"cursor-not-allowed"),children:[(0,r.jsx)("div",{className:"absolute",children:(0,r.jsx)(a.Z,{chartLogo:t})}),h?(0,r.jsx)("div",{className:"absolute opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full z-30",children:(0,r.jsx)(c,{size:d})}):(0,r.jsx)("div",{style:{backgroundColor:"var(--react-gallery)"},className:"opacity-0 hover:opacity-60 flex items-center justify-center w-full h-full rounded-full  z-30",children:(0,r.jsx)("span",{className:"text-white text-4xl",children:"+"})})]}),(0,r.jsx)("p",{className:"font-light text-sm text-gray-600 "+u,children:n})]})})}let c=e=>{let{size:t}=e;return(0,r.jsx)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 100 100",className:"fill-current text-purple-800",children:(0,r.jsx)("path",{d:"M50,0 L100,20 L100,80 L50,100 L0,80 L0,20 Z"})})};var h=n(4588);let u={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function x(e){let{chartFamily:t}=e,n=i.c.filter(e=>e.family===t).map((e,t)=>{let n=(0,h.y)(e.reactURL);return(0,r.jsx)("div",{className:"flex flex-col items-center justify-center",children:(0,r.jsx)(d,{link:n,chartLogo:e.logo,caption:e.label,isAvailable:e.isAvailable,size:129})},t)});return(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:t+"  mt-4 text-md border-b mb-2 border-gray-100 tracking-wider",children:null==u?void 0:u[t]}),(0,r.jsx)("div",{className:"flex flex-row justify-start flex-wrap",children:n})]})}},1122:function(e,t,n){"use strict";n.d(t,{$:function(){return d}});var r=n(5893),a=n(7294),i=n(9973),s=n(8107),o=n(615),l=n(8578);let d=e=>{let{VizComponent:t,vizName:n,height:d=400,maxWidth:c=800,caption:h}=e,[u,x]=(0,a.useState)(!1),m=(0,a.useRef)(null),p=(0,i.B)(m);return(0,r.jsx)("div",{style:{marginLeft:"-50vw",left:"50%"},className:"my-4 py-4 w-screen relative",children:u?(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center w-full",children:[(0,r.jsx)("div",{style:{maxWidth:2e3},className:"w-full z-50",children:(0,r.jsx)(l.X,{vizName:n})}),(0,r.jsx)("div",{className:"flex justify-center mt-2",children:(0,r.jsx)(s.z,{size:"sm",onClick:()=>x(!u),children:"Hide Sandbox"})})]}):(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center",children:[(0,r.jsx)("div",{className:"bg-gray-100 bg-opacity-50 w-screen flex justify-center z-50 pointer-events-none",children:(0,r.jsx)("div",{style:{height:d,width:"100%",maxWidth:c},ref:m,className:"pointer-events-auto",children:(0,r.jsx)(t,{height:d,width:p.width})})}),(0,r.jsx)(o.Y,{children:h}),(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsx)(s.z,{size:"sm",onClick:()=>x(!u),children:"Show code"})})]})})}},8578:function(e,t,n){"use strict";n.d(t,{X:function(){return a}});var r=n(5893);n(7294);let a=e=>{let{vizName:t}=e;return(0,r.jsx)("iframe",{src:"https://codesandbox.io/embed/github/holtzy/react-graph-gallery/tree/main/viz/"+t+"?fontsize=14&hidenavigation=1&theme=dark&expanddevtools=0",style:{width:"100%",height:"500px",border:"solid",borderWidth:2,borderRadius:"4px",overflow:"hidden"},allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})}},153:function(e,t,n){"use strict";n.d(t,{A:function(){return u}});var r=n(5893),a=n(9700),i=n(3476),s=n(7294),o=n(3084),l=n.n(o);function d(){let[e,t]=(0,s.useState)([]),[n,a]=(0,s.useState)(0);return(0,s.useEffect)(()=>{let e=Array.from(document.querySelectorAll("h2"));t(e)},[]),(0,s.useEffect)(()=>{let t=()=>{let t=e.map(e=>e.offsetTop-e.scrollTop+e.clientTop),n=window.scrollY+150,r=t.reduce((e,t)=>Math.abs(t-n)<Math.abs(e-n)?t:e,0),i=t.findIndex(e=>e===r);a(-1===i?0:i)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[e]),(0,r.jsx)("div",{className:l().tableOfContent,children:e.map((t,a)=>(0,r.jsx)("p",{className:n===a?"".concat(l().tocItem," ").concat(l().tocItemActive):l().tocItem,onClick:t=>{t.preventDefault(),e[a].scrollIntoView({behavior:"smooth",block:"start",alignToTop:!0})},children:t.id.charAt(0).toUpperCase()+t.id.slice(1)},t.id))})}var c=n(7414),h=n(2594);let u=e=>{let{children:t,title:n,seoDescription:s}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.A,{title:n,seoDescription:s}),(0,r.jsx)("div",{className:"wrapper",children:(0,r.jsx)(a.Z,{})}),(0,r.jsx)("div",{className:"wrapper",children:t}),(0,r.jsx)(h.Z,{}),(0,r.jsx)("div",{className:"wrapper",children:(0,r.jsx)(i.Z,{})}),(0,r.jsx)(d,{})]})}},6438:function(e,t,n){"use strict";n.d(t,{J:function(){return s}});var r=n(5893),a=n(1664),i=n.n(a);let s=e=>{let{children:t,href:n,isFilled:a,size:s="md",isFaded:o}=e,l=n.startsWith("www")||n.startsWith("http"),d="font-normal rounded mr-1 cursor-pointer border-reactGallery border ";a?d+=" bg-reactGallery hover:bg-reactGallery text-white ":d+=" bg-white hover:bg-reactGallery hover:text-white text-reactGallery ","sm"===s&&(d+="text-sm py-1 px-2 "),"md"===s&&(d+="text-md py-2 px-4 "),o&&(d+="opacity-60");let c=(0,r.jsx)("span",{className:d,children:t});return l?(0,r.jsx)("a",{href:n,target:"_blank",children:c}):(0,r.jsx)(i(),{href:n,passHref:!0,children:c})}},9965:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(5893);n(7294);var a=n(8843),i=n(4588),s=n(1859),o=n(6438),l=n(1832),d=n.n(l);let c=e=>{let{direction:t,text:n,children:a}=e;return(0,r.jsx)("span",{className:d().tooltip+" "+d()[t],id:n,children:a})};var h=n(5887);function u(e){let{title:t,description:n,chartType:l,showSectionLink:d=!1,showInspirationLink:u=!0,showD3GalleryLink:x=!0}=e,m=a.c.find(e=>e.id===l);return m?(0,r.jsxs)("div",{className:"w-full pt-1 sm:pt-28 pb-20 ",children:[(0,r.jsxs)("div",{className:"flex justify-start items-center",children:[(0,r.jsx)("h1",{children:t}),(0,r.jsx)("div",{className:"w-20 ml-4",children:(0,r.jsx)(h.Z,{chartLogo:null==m?void 0:m.logo})})]}),(0,r.jsx)(s.r,{}),(0,r.jsx)("div",{className:"max-w-xxl  py-2",children:n}),l&&(0,r.jsx)("span",{className:"text-gray-400 text-sm font-light",children:"Useful links"}),l&&(0,r.jsxs)("div",{className:"flex flex-row flex-wrap",children:[d&&(0,r.jsx)(c,{text:"visit related section in the gallery",direction:"bottom",children:(0,r.jsx)(o.J,{href:(0,i.y)(m.reactURL),size:"sm",children:m.label+" section"})}),u&&(0,r.jsx)(c,{text:"Hundreds of stunning dataviz projects to gather inspiration",direction:"bottom",children:(0,r.jsx)(o.J,{href:"https://www.dataviz-inspiration.com/"+m.id,size:"sm",children:"inspiration"})}),x&&(0,r.jsx)(c,{text:"Pure d3 implementation, no React",direction:"bottom",children:(0,r.jsx)(o.J,{href:m.d3URL,size:"sm",children:"d3 gallery"})}),(0,r.jsx)(c,{text:"Dataviz theory about this chart",direction:"bottom",children:(0,r.jsx)(o.J,{href:m.dataToVizURL,isFilled:!0,size:"sm",children:"About this chart"})})]})]}):null}},88:function(e,t,n){"use strict";n.d(t,{U:function(){return a}});var r=n(5893);let a=e=>{let{startOpen:t,title:n,children:a}=e;return(0,r.jsxs)("details",{className:"bg-gray-50 py-2 px-4 rounded-md my-2",children:[(0,r.jsx)("summary",{className:"cursor-pointer",children:n}),a]})}},8107:function(e,t,n){"use strict";n.d(t,{z:function(){return a}});var r=n(5893);let a=e=>{let{children:t,onClick:n,isFilled:a,size:i="md"}=e,s="rounded m-1 cursor-pointer border-reactGallery border ";return"sm"===i&&(s+="text-sm py-1 px-2"),"md"===i&&(s+="text-md py-2 px-4"),a?s+=" bg-reactGallery hover:bg-reactGallery text-white":s+=" bg-white hover:bg-reactGallery hover:text-white text-reactGallery",(0,r.jsx)("button",{className:s,onClick:n,children:t})}},615:function(e,t,n){"use strict";n.d(t,{Y:function(){return a}});var r=n(5893);let a=e=>{let{children:t}=e;return(0,r.jsx)("p",{className:"text-sm text-gray-500 max-w-xs italic text-center mt-4 font-light",children:t})}},3572:function(e,t,n){"use strict";n.d(t,{d:function(){return o}});var r=n(5893),a=n(5660),i=n.n(a),s=n(7294);let o=e=>{let{code:t}=e,n=(0,s.useRef)(null);return(0,s.useEffect)(()=>{n.current&&i().highlightElement(n.current)},[n,t]),(0,r.jsx)("div",{className:"mb-6",children:(0,r.jsx)("pre",{className:"rounded-md line-numbers",children:(0,r.jsx)("code",{ref:n,className:"p-0 language-js",children:t})})})}},9973:function(e,t,n){"use strict";n.d(t,{B:function(){return a}});var r=n(7294);let a=e=>{let t=()=>({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),[n,a]=(0,r.useState)(t),i=()=>{a(t())};return(0,r.useEffect)(()=>(window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)),[]),(0,r.useLayoutEffect)(()=>{i()},[]),n}},3335:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});var r=n(5893),a=n(7294),i=n(153),s=n(9965),o=n(7262),l=n(3572),d=n(1122);let c={type:"node",name:"boss",value:0,children:[{type:"node",name:"Team Dataviz",value:0,children:[{type:"leaf",name:"Mark",value:90},{type:"leaf",name:"Robert",value:12},{type:"leaf",name:"Emily",value:34},{type:"leaf",name:"Marion",value:53}]},{type:"node",name:"Team DevOps",value:0,children:[{type:"leaf",name:"Nicolas",value:98},{type:"leaf",name:"Malki",value:22},{type:"leaf",name:"Dj\xe9",value:12}]},{type:"node",name:"Team Sales",value:0,children:[{type:"leaf",name:"M\xe9lanie",value:45},{type:"leaf",name:"Einstein",value:76}]}]};var h=n(7651);let u={top:60,right:60,bottom:60,left:60},x=e=>{let{width:t,height:n,data:i}=e,s=t-u.right-u.left,o=n-u.top-u.bottom;console.log(t);let l=(0,a.useMemo)(()=>h.bT9(i),[i]),d=(0,a.useMemo)(()=>{let e=h.ki8().size([s,o]);return e(l)},[l,t,n]),c=d.descendants().map(e=>(0,r.jsxs)("g",{children:[(0,r.jsx)("circle",{cx:e.x,cy:e.y,r:5,stroke:"transparent",fill:"#69b3a2"}),(0,r.jsx)("text",{x:e.x,y:e.y+25,fontSize:12,textAnchor:"middle",children:e.data.name})]},"node"+e.id)),x=d.descendants().map(e=>e.parent?(0,r.jsx)("line",{fill:"none",stroke:"grey",x1:e.x,x2:e.parent.x,y1:e.y,y2:e.parent.y},"line"+e.id):null);return(0,r.jsx)("div",{children:(0,r.jsx)("svg",{width:t,height:n,children:(0,r.jsxs)("g",{width:s,height:o,transform:"translate(".concat([u.left,u.top].join(","),")"),children:[c,x]})})})},m=e=>{let{width:t=700,height:n=400}=e;return t?(0,r.jsx)(x,{data:c,width:t,height:n}):null},p={type:"node",name:"boss",value:0,children:[{type:"node",name:"Team Dataviz",value:0,children:[{type:"leaf",name:"Mark",value:90},{type:"leaf",name:"Robert",value:12},{type:"leaf",name:"Emily",value:34},{type:"leaf",name:"Marion",value:53}]},{type:"node",name:"Team DevOps",value:0,children:[{type:"leaf",name:"Nicolas",value:98},{type:"leaf",name:"Malki",value:22},{type:"leaf",name:"Dj\xe9",value:12}]},{type:"node",name:"Team Sales",value:0,children:[{type:"leaf",name:"M\xe9lanie",value:45},{type:"leaf",name:"Einstein",value:76}]}]},f={top:60,right:60,bottom:60,left:60},j=e=>{let{width:t,height:n,data:i}=e,s=t-f.right-f.left,o=n-f.top-f.bottom,l=(0,a.useMemo)(()=>h.bT9(i).sum(e=>e.value),[i]),d=(0,a.useMemo)(()=>{let e=h.ki8().size([o,s]);return e(l)},[l,t,n]),c=d.descendants().map(e=>(0,r.jsxs)("g",{children:[(0,r.jsx)("circle",{cx:e.y,cy:e.x,r:5,stroke:"transparent",fill:"#69b3a2"}),!e.children&&(0,r.jsx)("text",{x:e.y+15,y:e.x,fontSize:12,textAnchor:"left",alignmentBaseline:"middle",children:e.data.name})]},e.id)),u=h.h5h(),x=d.descendants().map(e=>{if(e.parent)return(0,r.jsx)("path",{fill:"none",stroke:"grey",d:u({source:[e.parent.y,e.parent.x],target:[e.y,e.x]})},e.id)});return(0,r.jsx)("div",{children:(0,r.jsx)("svg",{width:t,height:n,children:(0,r.jsxs)("g",{width:s,height:o,transform:"translate(".concat([f.left,f.top].join(","),")"),children:[c,x]})})})},y=e=>{let{width:t=700,height:n=400}=e;return(0,r.jsx)(j,{data:p,width:t,height:n})},v={type:"node",name:"boss",value:0,children:[{type:"node",name:"Team Dataviz",value:0,children:[{type:"leaf",name:"Mark",value:90},{type:"leaf",name:"Robert",value:12},{type:"leaf",name:"Emily",value:34},{type:"leaf",name:"Marion",value:53}]},{type:"node",name:"Team DevOps",value:0,children:[{type:"leaf",name:"Nicolas",value:98},{type:"leaf",name:"Malki",value:22},{type:"leaf",name:"Dj\xe9",value:12}]},{type:"node",name:"Team Sales",value:0,children:[{type:"leaf",name:"M\xe9lanie",value:45},{type:"leaf",name:"Einstein",value:76}]}]},g=e=>2*e*Math.PI/360,b=e=>{let{width:t,height:n,data:i}=e,s=(0,a.useMemo)(()=>h.bT9(i).sum(e=>e.value),[i]),o=Math.min(t,n)/2-70,l=(0,a.useMemo)(()=>{let e=h.ki8().size([360,o]);return e(s)},[s,t,n]),d=l.descendants().map(e=>{let t=e.x>180;return(0,r.jsxs)("g",{transform:"rotate("+(e.x-90)+")translate("+e.y+")",children:[(0,r.jsx)("circle",{cx:0,cy:0,r:5,stroke:"transparent",fill:"#69b3a2"}),!e.children&&(0,r.jsx)("text",{x:t?-15:15,y:0,fontSize:12,textAnchor:t?"end":"start",transform:t?"rotate(180)":"rotate(0)",alignmentBaseline:"middle",children:e.data.name})]},e.id)}),c=h.M4Z().angle(e=>g(e.x)).radius(e=>e.y),u=l.links().map(e=>0===e.source.depth?(0,r.jsxs)("g",{transform:"rotate("+(e.target.x-90)+")",children:[(0,r.jsx)("line",{x1:0,y1:0,x2:e.target.y,y2:0,stroke:"grey"}),";"]},e.source+"_"+e.target):(0,r.jsx)("path",{fill:"none",stroke:"grey",d:c(e)||void 0},e.source+"_"+e.target));return(0,r.jsx)("div",{children:(0,r.jsx)("svg",{width:t,height:n,children:(0,r.jsxs)("g",{transform:"translate("+(o+35)+","+(o+35)+")",children:[u,d]})})})},w=e=>{let{width:t=700,height:n=400}=e;return(0,r.jsx)(b,{data:v,width:t,height:n})};var k=n(88),z=n(1664),N=n.n(z),T=n(6438);let _=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{children:["A"," ",(0,r.jsx)("a",{href:"https://www.data-to-viz.com/graph/dendrogram.html",children:"dendrogram"})," ","is a ",(0,r.jsx)("b",{children:"network"})," structure. It is constituted of a ",(0,r.jsx)("b",{children:"root"})," node that gives birth to several nodes connected by ",(0,r.jsx)("b",{children:"edges"})," or branches. The last nodes of the hierarchy are called ",(0,r.jsx)("b",{children:"leaves"}),"."]}),(0,r.jsxs)("p",{children:["This page explains how to build a dendrogram using ",(0,r.jsx)("b",{children:"d3.js"})," to compute the node position, and ",(0,r.jsx)("b",{children:"React"})," to render the nodes and edges. It starts by describing the required ",(0,r.jsx)("b",{children:"data"})," format, explains how to build a very ",(0,r.jsx)("b",{children:"basic"}),"dendrogram and then shows how to ",(0,r.jsx)("b",{children:"customize"})," it."]})]});function I(){return(0,r.jsxs)(i.A,{title:"Dendrogram | The React Graph Gallery",seoDescription:"How to build a dendrogram with React and D3.js. A set of re-usable components with explanation and code.",children:[(0,r.jsx)(s.Z,{title:"Dendrogram",description:_,chartType:"dendrogram"}),(0,r.jsx)("h2",{id:"data",children:"The Data"})," ",(0,r.jsxs)("p",{children:["The dataset describes a ",(0,r.jsx)("b",{children:"hierarchy"})," using a ",(0,r.jsx)("b",{children:"recursive"})," ","structure."]}),(0,r.jsxs)("p",{children:["Each item in this structure is called a ",(0,r.jsx)("b",{children:"node"}),". The lowest nodes of the hierarchy being called ",(0,r.jsx)("b",{children:"leaves"}),". The dataset is an object that has at least 3 properties: ",(0,r.jsx)("code",{children:"name"}),", ",(0,r.jsx)("code",{children:"value"})," and"," ",(0,r.jsx)("code",{children:"children"}),". Children is an array of nodes that have this structure too."]}),(0,r.jsx)("p",{children:"Here is a minimal example of the data structure:"}),(0,r.jsx)(l.d,{code:M}),(0,r.jsxs)("p",{children:[(0,r.jsx)("u",{children:"Note"}),": if your data is not formatted this way at all, don't fret! In the next section I explain how to deal with ",(0,r.jsx)("b",{children:"other formats"}),"."]}),(0,r.jsx)("h2",{id:"hierarchy",children:'The hierarchy format or "root node"'}),(0,r.jsxs)("p",{children:["A dendrogram is a ",(0,r.jsx)("b",{children:"hierarchical layout"}),". D3.js has a lot of"," ",(0,r.jsx)("a",{href:"https://github.com/d3/d3-hierarchy",children:"utility functions"})," ","allowing to deal with this kind of hierarchical data. To use those functions we first need to create a ",(0,r.jsx)("b",{children:'"Root node"'})," or"," ",(0,r.jsx)("b",{children:'"Hierarchy"'}),"."]}),(0,r.jsxs)("p",{children:["But ",(0,r.jsx)("i",{children:"what the heck is this"}),"? \uD83E\uDD14"]}),(0,r.jsxs)("p",{children:['A "root node" or "hierarchy" is a ',(0,r.jsx)("b",{children:"javascript object"}),". It has almost the same shape as the input data described above. But with some additional properties and methods that will make our life easier. This data structure is typed as a"," ",(0,r.jsx)("a",{href:"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/d3-hierarchy/index.d.ts#L29",children:"HierarchyNode"}),"."]}),(0,r.jsx)("h3",{children:"→ properties of a root node"}),(0,r.jsx)("p",{children:'This "root node" is a recursive structure of nodes as described in the data section above. But it has those new properties:'}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"data"}),": associated data"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"depth"}),": 0 for the root node, and increasing by one for each descendant."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"height"}),": 0 for leaf nodes, and the greatest distance from any descendant leaf otherwise."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"children"}),": an array of child nodes, if any; undefined for leaf nodes."]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("code",{children:"value"}),": the summed value of the node and its descendants."]})]}),(0,r.jsxs)("p",{children:["On top of that, each node also has associated methods like"," ",(0,r.jsx)("code",{children:"node.descendants()"})," or ",(0,r.jsx)("code",{children:"node.links()"})," that we will describe later. See the complete list in the"," ",(0,r.jsx)("a",{href:"https://github.com/d3/d3-hierarchy",children:"d3-hierarchy doc"}),"."," "]}),(0,r.jsx)("h3",{children:"→ how to build a root node"}),(0,r.jsxs)("p",{children:["If your dealing with the format describe in the previous section, you just have to pass it to the d3 ",(0,r.jsx)("code",{children:"hierarchy"})," function:"]}),(0,r.jsx)(l.d,{code:E}),(0,r.jsx)("p",{children:"Very convenient. If you have a different input, here is how to do:"}),(0,r.jsxs)(k.U,{startOpen:!1,title:"My input is a list of connection in .json format",children:[(0,r.jsx)("br",{}),(0,r.jsxs)("p",{children:["Let's say you have a ",(0,r.jsx)("b",{children:"tabular"})," format in json format. It's an array where each item represents a ",(0,r.jsx)("b",{children:"node"}),". For each node, you have a ",(0,r.jsx)("code",{children:"name"})," property and a ",(0,r.jsx)("code",{children:"parent"})," property that provides the parent name:"]}),(0,r.jsx)(l.d,{code:D}),(0,r.jsx)("p",{children:"In this case, you have to use the stratify function to create the hierarchy. This is how the syntax looks like:"}),(0,r.jsx)(l.d,{code:A}),(0,r.jsx)("p",{children:"And that's it. You have a hierarchy object and can follow the rest of this tutorial."})]}),(0,r.jsxs)(k.U,{startOpen:!1,title:"My input is a list of connection in .csv format",children:[(0,r.jsx)("br",{}),(0,r.jsxs)("p",{children:["In this case, you can use the"," ",(0,r.jsx)("a",{href:"https://github.com/d3/d3-dsv#csvParse",children:"csvParse()"})," ","function of d3 to get a javascript array and use the"," ",(0,r.jsx)("code",{children:"stratify"})," function as shown in the accordion above."," "]}),(0,r.jsx)(l.d,{code:R})]}),(0,r.jsxs)("h2",{id:"cluster",children:["The ",(0,r.jsx)("code",{children:"cluster()"})," function"]}),(0,r.jsxs)("p",{children:["We now have a ",(0,r.jsx)("code",{children:"hierarchy"})," object that is a convenient data structure. From this, we need to compute the position of each node in our ",(0,r.jsx)("b",{children:"2d space"}),"."]}),(0,r.jsxs)("p",{children:["This is made possible thanks to the ",(0,r.jsx)("code",{children:"cluster()"})," function of d3.js. You can check its"," ",(0,r.jsx)("a",{href:"https://github.com/d3/d3-hierarchy#cluster",children:"offical documentation"}),"."]}),(0,r.jsxs)("h3",{children:["→ calling ",(0,r.jsx)("code",{children:"d3.cluster()"})]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("code",{children:"d3.cluster()"})," is a function that returns a layout generator. It is thus a function that returns a function. There is not much to provide to it, except the ",(0,r.jsx)("code",{children:"width"})," and ",(0,r.jsx)("code",{children:"height"})," of the figure."]}),(0,r.jsx)(l.d,{code:G}),(0,r.jsxs)("p",{children:["The generator we have now (",(0,r.jsx)("code",{children:"dendrogramGenerator"}),") expect 1 input: a ",(0,r.jsx)("code",{children:"hierarchy"})," object that we described in the previous chapter."]}),(0,r.jsx)(l.d,{code:L}),(0,r.jsxs)("h3",{children:["→ ",(0,r.jsx)("code",{children:"d3.cluster()"})," output"]}),(0,r.jsxs)("p",{children:["The output is almost the same as the initial ",(0,r.jsx)("b",{children:"hierarchy"})," object. But for each node we have 2 additional properties: ",(0,r.jsx)("code",{children:"x"})," and"," ",(0,r.jsx)("code",{children:"y"})," that are the coordinates we need to build the dendrogram!"]}),(0,r.jsx)("h2",{id:"basic dendrogram",children:"Most Basic dendrogram"}),(0,r.jsxs)("p",{children:["We have a list of ",(0,r.jsx)("code",{children:"node"})," in the ",(0,r.jsx)("code",{children:"dendrogram"})," ","object. For each, we now its position."]}),(0,r.jsx)("p",{children:"We just need to loop through all those nodes to build circles and lines to make the dendrogram"}),(0,r.jsxs)("p",{children:["Fortunately, the dendrogram object has a ",(0,r.jsx)("code",{children:"descendants()"})," ","method that list all nodes in a flat array. It is then possible to use a"," ",(0,r.jsx)("code",{children:"map()"})," to loop through nodes. So for instance drawing edges looks like:"]}),(0,r.jsx)(l.d,{code:S}),(0,r.jsx)("p",{children:"And the same idea goes for nodes and circles. That makes our first dendrogram!"}),(0,r.jsx)(d.$,{vizName:"DendrogramBasic",VizComponent:m,maxWidth:800,height:400,caption:"The most basic treemap made with react and d3.js."}),(0,r.jsx)("h2",{id:"horizontal dendrogram",children:"Horizontal dendrogram"}),(0,r.jsxs)("p",{children:["You can ",(0,r.jsx)("b",{children:"swap"})," the ",(0,r.jsx)("code",{children:"x"})," and ",(0,r.jsx)("code",{children:"y"})," coordinates to make the dendrogram ",(0,r.jsx)("b",{children:"horizontal"})," instead of vertical."]}),(0,r.jsxs)("p",{children:["You can also create smooth edges thanks to the"," ",(0,r.jsx)("code",{children:"d3.linkHorizontal()"})," function. The function is described in its"," ",(0,r.jsx)("a",{href:"https://github.com/d3/d3-shape#linkHorizontal",children:"official documentation"}),". Basically, you need to provide an object with a ",(0,r.jsx)("code",{children:"source"})," ","and a ",(0,r.jsx)("code",{children:"target"})," property. The coordinates of those properties will be used to create the ",(0,r.jsx)("code",{children:"d"})," attribute of an svg"," ",(0,r.jsx)("code",{children:"path"})," element."]}),(0,r.jsx)(l.d,{code:C}),(0,r.jsx)(d.$,{vizName:"DendrogramHorizontal",VizComponent:y,maxWidth:600,height:400,caption:"Horizontal dendrogram with smooth edges made with react and d3.js."}),(0,r.jsx)("h2",{id:"Radial dendrogram",children:"Radial dendrogram"}),(0,r.jsx)("p",{children:"The radial dendrogram is a bit trickier to achieve."}),(0,r.jsx)("h3",{children:"→ polar coordinates"}),(0,r.jsxs)("p",{children:["We are dealing with polar coordinates here. As a result, the"," ",(0,r.jsx)("code",{children:"size"})," attribute of the",(0,r.jsx)("code",{children:"layout()"}),"function must be updated."]}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["The ",(0,r.jsx)("b",{children:"first"})," item is ",(0,r.jsx)("code",{children:"360"}),". It will define the angle (in degree) to follow to reach a node. 0 is on top."]}),(0,r.jsxs)("li",{children:["The second item is the ",(0,r.jsx)("code",{children:"radius"})," of the figure. It will provide the distance to the center of a node in pixel."]})]}),(0,r.jsx)(l.d,{code:B}),(0,r.jsxs)("p",{children:["Since ",(0,r.jsx)("code",{children:"x"})," and ",(0,r.jsx)("code",{children:"y"})," are now describing an angle and a distance to the center, we can position a node using the following"," ",(0,r.jsx)("code",{children:"transform"})," property:"]}),(0,r.jsx)(l.d,{code:O}),(0,r.jsxs)("h3",{children:["→ Smooth edges with ",(0,r.jsx)("code",{children:"linkRadial"})]}),(0,r.jsxs)("p",{children:["Edges are not horizontal anymore, so the ",(0,r.jsx)("code",{children:"linkHorizontal"})," ","won't be helpful this time. But instead, the"," ",(0,r.jsx)("a",{href:"https://github.com/d3/d3-shape#linkRadial",children:"d3.linkRadial"})," ","function does the job based on an angle and a distance."]}),(0,r.jsx)("h3",{children:"→ Smart labels"}),(0,r.jsxs)("p",{children:["Please make sure your labels are properly oriented. It always give a bit of a headhache to pivot them correctly, and to control the anchoring appropriately. I talked about it extensively in the"," ",(0,r.jsx)(N(),{href:"circular-barplot",children:"circular barplot"})," section so please take a look for this matter."]}),(0,r.jsx)(d.$,{vizName:"DendrogramRadial",VizComponent:w,maxWidth:600,height:600,caption:"A minimalist radial dendrogram built using d3 and react."}),(0,r.jsxs)("p",{children:[(0,r.jsx)("i",{children:"Note"}),": please check of the first level edges are"," ",(0,r.jsx)("b",{children:"straight lines"}),". IMO it does not make sense to use"," ",(0,r.jsx)("code",{children:"linkRadial"})," for the first level."]}),(0,r.jsx)("h2",{id:"next",children:"Coming next"}),(0,r.jsx)("p",{children:"There is much more that needs to be added to this tutorial."}),(0,r.jsxs)("p",{children:["Using ",(0,r.jsx)("code",{children:"canvas"})," for rendering is often a requirement when the number of nodes gets big. ",(0,r.jsx)("b",{children:"Interactivity"})," is often necessary, for"," ",(0,r.jsx)("b",{children:"hover effect"})," or to ",(0,r.jsx)("b",{children:"collapse"})," a part of the tree. It also possible to ",(0,r.jsx)("b",{children:"map"})," the node circle size to a numeric variable."]}),(0,r.jsxs)("p",{children:["This will come soon! I have a newsletter called the"," ",(0,r.jsx)("a",{href:"https://datavizuniverse.substack.com/",children:"dataviz universe"})," ","where I share my latest updates."]}),(0,r.jsx)(T.J,{href:"https://datavizuniverse.substack.com/",children:"Subscribe"}),(0,r.jsx)("div",{className:"full-bleed border-t h-0 bg-gray-100 my-3 mt-20"}),(0,r.jsx)(o.Z,{chartFamily:"partOfAWhole"}),(0,r.jsx)("div",{className:"mt-20"})]})}let M="\nconst data = {\n  type: 'node',\n  name: \"boss\",\n  value: 2300,\n  children: [\n    {type: 'leaf', name:\"Mark\", value: 90},\n    {type: 'leaf', name:\"Robert\", value: 12},\n    {type: 'leaf', name:\"Emily\", value: 34},\n    ...\n}\n".trim(),E="\nconst hierarchy = useMemo(() => {\n  return d3.hierarchy(data);\n}, [data]);\n".trim(),D='\nexport const dataTabular =\n  [\n    { "name": "Eve", "parent": "" },\n    { "name": "Cain", "parent": "Eve" },\n    { "name": "Seth", "parent": "Eve" },\n    ...\n  ]\n'.trim(),A="\nconst hierarchyGenerator = stratify()\n  .id((node) => node.name)\n  .parentId((node) => node.parent);\n\nconst hierarchy = hierarchyGenerator(dataTabular);\n".trim(),R="\nconst dataTabular = d3.csvParse(text);\n".trim(),G="\n// Create a dendogram generator = a function that compute the position of the nodes in a hierarchy\nconst dendrogramGenerator = d3\n  .cluster()\n  .size([width, height]);\n".trim(),L="\n// use the generator on our hierarchy\nconst dendrogramLayout = dendrogramGenerator(hierarchy);\n".trim(),S='\nconst allEdges = dendrogram.descendants().map((node) => {\n  if (!node.parent) {\n    return null;\n  }\n  return (\n    <line\n      key={"line" + node.id}\n      fill="none"\n      stroke="grey"\n      x1={node.x}\n      x2={node.parent.x}\n      y1={node.y}\n      y2={node.parent.y}\n    />\n  );\n});\n'.trim(),C='\n<path\n  key={node.id}\n  fill="none"\n  stroke="grey"\n  d={horizontalLinkGenerator({\n    source: [node.parent.y, node.parent.x],\n    target: [node.y, node.x],\n  })}\n/>\n'.trim(),B="\nconst dendrogramGenerator = d3\n  .cluster()\n  .size([360, radius]);\nconst dendrogram = dendrogramGenerator(hierarchy);\n".trim(),O='\ntransform={"rotate(" + (node.x - 90) + ")translate(" + node.y + ")"}\n'.trim()},1832:function(e){e.exports={tooltip:"tooltip_tooltip__Fv96Y",right:"tooltip_right__lXq9G",left:"tooltip_left__hUc5l",bottom:"tooltip_bottom__Qzoh5",top:"tooltip_top__qDz28"}},3084:function(e){e.exports={tableOfContent:"table-of-content_tableOfContent__oi0XB",tocItem:"table-of-content_tocItem__fZBSX",tocItemActive:"table-of-content_tocItemActive__kiClt"}}},function(e){e.O(0,[3996,7651,5660,645,9774,2888,179],function(){return e(e.s=4854)}),_N_E=e.O()}]);