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
    collums:['Employee Id:','Name','Position','Phone','Open Bids','Completed Bids	','	Last Session','Avg. length'],
  rows:[
      [
       
           requestorInfo(),
          'Elijah Cooper',
          'Propery Manager',
          '(952) 834-7652',
          '3',
          '29',
          'Today at 9:13 AM',
          '5 mins 10 secs',
      ],
      [
       
         requestorInfo(),
        'Elijah Cooper',
        'Propery Manager',
        '(952) 834-7652',
        '3',
        '29',
        'Today at 9:13 AM',
        '5 mins 10 secs',
    ],
    [
       
         requestorInfo(),
        'Elijah Cooper',
        'Propery Manager',
        '(952) 834-7652',
        '3',
        '29',
        'Today at 9:13 AM',
        '5 mins 10 secs',
    ],
    [
       
         requestorInfo(),
        'Elijah Cooper',
        'Propery Manager',
        '(952) 834-7652',
        '3',
        '29',
        'Today at 9:13 AM',
        '5 mins 10 secs',
    ],
    [
       
         requestorInfo(),
        'Elijah Cooper',
        'Propery Manager',
        '(952) 834-7652',
        '3',
        '29',
        'Today at 9:13 AM',
        '5 mins 10 secs',
    ],
    [
       
         requestorInfo(),
        'Elijah Cooper',
        'Propery Manager',
        '(952) 834-7652',
        '3',
        '29',
        'Today at 9:13 AM',
        '5 mins 10 secs',
    ],
    [
       
        ' EM7464',
        'Elijah Cooper',
        'Propery Manager',
        '(952) 834-7652',
        '3',
        '29',
        'Today at 9:13 AM',
        '5 mins 10 secs',
    ],
  ]
}
   
    
const NewRegionalmanagerDashboard =  () => {


    return (
        <>
            <DashBoardTablePdata />
        </>
    )
}

export default NewRegionalmanagerDashboard