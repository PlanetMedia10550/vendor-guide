import DashBoardTablePdata from "@/components/Front/NewRegionalmanagerDashboard/DashBoardTablePdata";
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
           <DashBoardTablePdata />
        </>
    )
}

export default NewRegionalmanagerProperty