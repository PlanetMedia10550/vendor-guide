"use client";
import DashBoardTableData from "@/components/Front/NewRegionalmanagerDashboard/DashBoardTableData";
import Graph from "@/components/Front/NewRegionalmanagerDashboard/Graph";
import Sideli from "@/components/Common/Sideli";
import DashBoardTable from "@/components/Front/DashboardNewLookEmployee/DashBoardTable";
import TableCheckbox from "@/components/Front/Company/TableCheckbox";
import { useAuth } from "@/context/UserContext";
function Page() {
  const {user,navigate}  = useAuth();
  // console.log(user);
  // if(user==null){
  //   navigate.push('/');
  // }
  const requestorInfo = () =>{
    return(
        <div className="flex gap-4">
           <TableCheckbox/> 2023-187265
        </div>
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

  return (
    <>
    <section className="top_grid"> 
        <div className="px-20">
            <div className="grid grid-cols-3 sm:gap-16 ">
            <Sideli/>
            <Graph />
            </div>
        </div>
    </section>
    <section className="pt-14 pb-14"> 
      <div className="px-10">
        <DashBoardTable data={bidRequests}/>
      </div>
    </section>
    </>
  )
}

export default Page