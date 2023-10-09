exports.id=12,exports.ids=[12],exports.modules={7759:(s,e,l)=>{Promise.resolve().then(l.t.bind(l,1297,23)),Promise.resolve().then(l.bind(l,7701))},7701:(s,e,l)=>{"use strict";l.r(e),l.d(e,{default:()=>NewRegionalmanagerDashboard_Graph});var a=l(80),r=l(2196),o=l(2050),i=l(9885),n=l(36);let t=[["x","dogs","cats"],[0,0,0],[1,10,5],[2,23,15],[3,17,9],[4,18,10],[5,9,5],[6,11,3],[7,27,19]],d={series:{1:{curveType:"function"}}};let MultiLineChart=class MultiLineChart extends i.Component{render(){return a.jsx("div",{className:"container mt-5",children:a.jsx(n.ZP,{width:"451px",height:"250px","min-height":"255px",chartType:"LineChart",data:t,options:d,rootProps:{"data-testid":"2"}})})}};let NewRegionalmanagerDashboard_Graph=s=>a.jsx("div",{className:"col-span-3  md:col-span-3 lg:col-span-2 order-1 md:order-2 sm:mb-0 mb-5",children:a.jsx("div",{className:"border-solid border-[1px] border-[#171717] bg-white lg:mt-12",children:(0,a.jsxs)("div",{className:"grid grid-cols-12 sm:gap-8",children:[a.jsx("div",{className:"col-span-12 lg:col-span-7 md:col-span-7 order-2 sm:order-1",children:(0,a.jsxs)("div",{className:"card lg:pl-4",children:[a.jsx("div",{className:"card-body pb-0",children:a.jsx("h6",{className:"pl-10 font-semibold text-lg pt-6",children:"Bid Activity"})}),a.jsx("div",{className:"card-body flex flex-wrap gap-3",children:a.jsx(MultiLineChart,{})})]})}),(0,a.jsxs)("div",{className:"col-span-12 lg:col-span-5 md:col-span-5  order-2 sm:order-1",children:[(0,a.jsxs)("div",{className:"grid grid-cols-12 pt-6 px-3 lg:px-0",children:[(0,a.jsxs)("div",{className:"col-span-12  md:col-span-6  order-2 sm:order-1 ",children:[(0,a.jsxs)("p",{className:"font-semibold text-lg",children:[" ","Sort"," ",a.jsx("span",{children:a.jsx(r.FontAwesomeIcon,{icon:o.CmM,className:"w-[0.6rem]"})})]}),(0,a.jsxs)("ul",{className:"text-gray-700 pl-3",children:[a.jsx("li",{className:"font-semibold text-xs",children:"Person"}),a.jsx("li",{className:"font-semibold text-xs",children:"Property"})]})]}),a.jsx("div",{className:"col-span-12 md:col-span-6  order-2 sm:order-1 ",children:(0,a.jsxs)("div",{className:"col-span-12  md:col-span-6  order-2 sm:order-1",children:[(0,a.jsxs)("p",{className:"font-semibold text-lg",children:[" ","TimeFrame"," ",a.jsx("span",{children:a.jsx(r.FontAwesomeIcon,{icon:o.CmM,className:"w-[0.6rem]"})})]}),(0,a.jsxs)("ul",{className:"text-gray-700 pl-16",children:["faSort",a.jsx("li",{className:"font-semibold text-xs",children:"Day"}),a.jsx("li",{className:"font-semibold text-xs",children:"Week"}),a.jsx("li",{className:"font-semibold text-xs",children:"Month"}),a.jsx("li",{className:"font-semibold text-xs",children:"Year"})]})]})})]}),a.jsx("div",{className:"py-10 lg:pt-16 px-5 lg:px-0",children:(0,a.jsxs)("ul",{className:"text-gray-700 pl-3",children:[(0,a.jsxs)("li",{className:"font-semibold text-xs",children:[a.jsx("span",{className:"pr-3",children:a.jsx(r.FontAwesomeIcon,{icon:o.IQi,className:"text-blue-600 w-[1.2rem]"})}),"Bids Created"]}),(0,a.jsxs)("li",{className:"font-semibold text-xs flex items-baseline",children:[a.jsx("span",{className:"pr-3",children:a.jsx(r.FontAwesomeIcon,{icon:o.IQi,className:"text-emerald-500 w-[1.2rem]"})}),"Issued Bids"]}),(0,a.jsxs)("li",{className:"font-semibold text-xs flex items-baseline",children:[a.jsx("span",{className:"pr-3",children:a.jsx(r.FontAwesomeIcon,{icon:o.IQi,className:"text-red-600 w-[1.2rem]"})}),"Closed Bids"]}),(0,a.jsxs)("li",{className:"font-semibold text-xs",children:[a.jsx("span",{className:"pr-3",children:a.jsx(r.FontAwesomeIcon,{icon:o.IQi,className:"text-orange-400 w-[1.2rem]"})}),"Awarded Bids"]}),(0,a.jsxs)("li",{className:"font-semibold text-xs flex items-baseline",children:[a.jsx("span",{className:"pr-3",children:a.jsx(r.FontAwesomeIcon,{icon:o.IQi,className:"text-lime-400 w-[1.2rem]"})}),"Cancelled Bids"]})]})})]})]})})})},7312:(s,e,l)=>{"use strict";l.d(e,{Z:()=>Common_Sideli});var a=l(8144),r=l(4602),o=l.n(r);let Common_Sidecount=s=>a.jsx("li",{children:(0,a.jsxs)(o(),{href:"javascript:void(0)",className:"text-[#171717] text-base lg:text-lg  xl:text-xl font-semibold p-3 xl:py-6 xl:px-9 block border-t border-[#171717]",children:[a.jsx("span",{className:"text-[#B13634] rounded ltr:ml-1 rtl:mr-1 ltr:float-right rtl:float-left text-3xl text-semibold py-0.5 px-1  pr-3 pl-5 lg:pl-0",children:s.count}),s.name]})}),Common_Sideli=s=>a.jsx("div",{className:"col-span-3 lg:col-span-1 md:col-span-3  order-2 sm:order-1",children:a.jsx("div",{className:"sm:mt-6 lg:mt-12 ",children:(0,a.jsxs)("ul",{className:"bg-white list-unstyled font-medium border-solid border-[1px] border-[#171717]",children:[a.jsx(Common_Sidecount,{count:"2",name:"New Messages"}),a.jsx(Common_Sidecount,{count:"6",name:"Bids Requesting Approval"}),a.jsx(Common_Sidecount,{count:"2",name:"Draft Bids"}),a.jsx(Common_Sidecount,{count:"12",name:"Upcoming Projects"})]})})})},26:(s,e,l)=>{"use strict";l.d(e,{ZP:()=>t});var a=l(7536);let r=(0,a.createProxy)(String.raw`C:\Users\Rahul Singh Parmar\Desktop\vendorGuide\src\components\Front\NewRegionalmanagerDashboard\Graph.jsx`),{__esModule:o,$$typeof:i}=r,n=r.default,t=n}};