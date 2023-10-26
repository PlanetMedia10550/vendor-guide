
import DashBoardTable from "@/components/Front/NewRegionalmanagerDashboard/DashBoardTable";
import DashBoardTableBtn from "@/components/Front/NewRegionalmanagerDashboard/DashBoardTableBtn";
import TableCheckbox from "@/components/Front/Company/TableCheckbox"
import Pagination from "@/components/Common/Pagination"
  

const requestorInfo = () =>{
  return(
      <div className="flex gap-4">
         <TableCheckbox/> EM7464
      </div>
  )
}

const bidRequests = {
  collums:['Employee Id:','Name','Position','Phone','Open Bids','Completed Bids'],
  rows:[
      [
        ,
           requestorInfo(),
          'Elijah Cooper',
          'Propery Manager',
          '(952) 834-7652',
          '3',
          '29',
      ],
      [
        ,
           requestorInfo(),
          'Elijah Cooper',
          'Propery Manager',
          '(952) 834-7652',
          '3',
          '29',
      ],
      [
        ,
           requestorInfo(),
          'Elijah Cooper',
          'Propery Manager',
          '(952) 834-7652',
          '3',
          '29',
      ],
      [
        ,
           requestorInfo(),
          'Elijah Cooper',
          'Propery Manager',
          '(952) 834-7652',
          '3',
          '29',
      ],
      [
        ,
           requestorInfo(),
          'Elijah Cooper',
          'Propery Manager',
          '(952) 834-7652',
          '3',
          '29',
      ],
      [
        ,
           requestorInfo(),
          'Elijah Cooper',
          'Propery Manager',
          '(952) 834-7652',
          '3',
          '29',
      ],
      [
        ,
           requestorInfo(),
          'Elijah Cooper',
          'Propery Manager',
          '(952) 834-7652',
          '3',
          '29',
      ],
  ]
}

const NewRegionalmanagerProperty =  () => {


    return (
        <>
          
          <section className="pt-14">      
           <div className="px-10"> 
          <DashBoardTable data={bidRequests} />
          <div className="flex gap-7 justify-end">
          <DashBoardTableBtn name="View/Edit"/> 
          <DashBoardTableBtn name="Add"/> 
          </div> 
          </div>   
          <Pagination/>       
          </section>
        </>
    )
}

export default NewRegionalmanagerProperty