"use client";
import React from "react";
import Link from "next/link";
import DashBoardTable from "@/components/Front/NewRegionalmanagerDashboard/DashBoardTable";
import TableCheckbox from "@/components/Front/Company/TableCheckbox"
// import { initTE } from 'tw-elements';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
// initTE({ Tab });

const requestorInfo = () =>{
  return(
      <div className="flex gap-4">
         <TableCheckbox/> 2023-187265
      </div>
  )
}

const Tablelabel = (props) =>{
  return(
      <span className="text-black">
         {props.val}
      </span>
  )
}

const bidRequests = {
collums:['Bid Number','Bid Title','Bid Type','Property','Bidder','Creation Date','Est.Close Date','Priority','Status'],
rows:[

    [
     
         requestorInfo(),
        'Unit #6203',
        'Leaking Water Plumbing',
        'Parkside Heights',
        'Jen Anderson',
        '09/01/2023',
        '09/15/2023',
        '	Urgent',
        '	Draft'
    ],
    [
    
         requestorInfo(),
        'Unit #6203',
        'Leaking Water Plumbing',
        'Parkside Heights',
        'Jen Anderson',
        '09/01/2023',
        '09/15/2023',
        '	Urgent',
        '	Draft'
    ],
    [
     
         requestorInfo(),
        'Unit #6203',
        'Leaking Water Plumbing',
        'Parkside Heights',
        'Jen Anderson',
        '09/01/2023',
        '09/15/2023',
        '	Urgent',
        '	Draft'
    ],
    [
    
         requestorInfo(),
        'Unit #6203',
        'Leaking Water Plumbing',
        'Parkside Heights',
        'Jen Anderson',
        '09/01/2023',
        '09/15/2023',
        '	Urgent',
        '	Draft'
    ],
    [
    
         requestorInfo(),
        'Unit #6203',
        'Leaking Water Plumbing',
        'Parkside Heights',
        'Jen Anderson',
        '09/01/2023',
        '09/15/2023',
        '	Urgent',
        '	Draft'
    ],

]
}

const bidRequeststab2 = {
  collums:['Bid Number','Bid Title','Bid Type'],
  rows:[
  
      [
       
           requestorInfo(),
          'Unit #6203',
          'Leaking Water Plumbing'
         
      ],
      [
      
           requestorInfo(),
          'Unit #6203',
          'Leaking Water Plumbing'
      ],
      [
       
           requestorInfo(),
          'Unit #6203',
          'Leaking Water Plumbing'
      ],
      [
      
           requestorInfo(),
          'Unit #6203',
          'Leaking Water Plumbing'
      ],
      [
      
           requestorInfo(),
          'Unit #6203',
          'Leaking Water Plumbing'
      ],
  
  ]
  }

  const DashBoardTableulli = (props) => {
    const [activeTab, setActiveTab] = React.useState("html");
    const data = [
      {
        label: <Tablelabel val="All Jobs" />,
        value: "html",
        desc: <DashBoardTable data={bidRequeststab2}/>,
      },
      {
        label: "Closed Jobs",
        value: "react",
        desc: <DashBoardTable data={bidRequeststab2} />,
      },
      {
        label: "Awarded Jobs",
        value: "vue",
        desc: <DashBoardTable data={bidRequests} />,
      },
      {
        label: "Cancelled Jobs",
        value: "red",
        desc: <DashBoardTable data={bidRequests} />,
      },
    ]
    
  

  
    return(
        <>
              <Tabs value={activeTab}>
        <TabsHeader
          className="rounded-none border-b border-blue-gray-50 text-black p-0"
          indicatorProps={{
            className: "border-b-2 border-gray-900 shadow-none rounded-none  text-black bg-black",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={activeTab === value ? "text-black" : ""} 
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value} className="p-0">
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </>
  );
};

export default DashBoardTableulli;