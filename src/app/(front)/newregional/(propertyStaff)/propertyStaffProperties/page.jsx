import DashBoardTablePdata from "@/components/Front/NewRegionalmanagerDashboard/DashBoardTablePdata";
import TableCheckbox from "@/components/Front/Company/TableCheckbox"
import Pagination from "@/components/Common/Pagination"

const requestorInfo = () =>{
  return(
      <div className="flex gap-4">
         <TableCheckbox/> PR7892
      </div>
  )
}
   
const bidRequests = {
  collums:['Property Id:','Property Name','Address','City','State','Zip','Contact','Phone','Open Bids','Completed Bids'],
  rows:[
      [
        ,
           requestorInfo(),
          'Parkside Heights',
          '4321 Sycamore Lane',
          'Shakopee',
          'MN',
          '55379',
          '55379 Dan White',
          '(952) 834-7652',
          '5',
          '81'

      ],
      [
        ,
           requestorInfo(),
          'Parkside Heights',
          '4321 Sycamore Lane',
          'Shakopee',
          'MN',
          '55379',
          '55379 Dan White',
          '(952) 834-7652',
          '5',
          '81'

      ],
      [
        ,
           requestorInfo(),
          'Parkside Heights',
          '4321 Sycamore Lane',
          'Shakopee',
          'MN',
          '55379',
          '55379 Dan White',
          '(952) 834-7652',
          '5',
          '81'

      ],
      [
        ,
           requestorInfo(),
          'Parkside Heights',
          '4321 Sycamore Lane',
          'Shakopee',
          'MN',
          '55379',
          '55379 Dan White',
          '(952) 834-7652',
          '5',
          '81'

      ],
      [
        ,
           requestorInfo(),
          'Parkside Heights',
          '4321 Sycamore Lane',
          'Shakopee',
          'MN',
          '55379',
          '55379 Dan White',
          '(952) 834-7652',
          '5',
          '81'

      ],
      [
        ,
           requestorInfo(),
          'Parkside Heights',
          '4321 Sycamore Lane',
          'Shakopee',
          'MN',
          '55379',
          '55379 Dan White',
          '(952) 834-7652',
          '5',
          '81'

      ],
      [
        ,
           requestorInfo(),
          'Parkside Heights',
          '4321 Sycamore Lane',
          'Shakopee',
          'MN',
          '55379',
          '55379 Dan White',
          '(952) 834-7652',
          '5',
          '81'

      ],
      [
        ,
           requestorInfo(),
          'Parkside Heights',
          '4321 Sycamore Lane',
          'Shakopee',
          'MN',
          '55379',
          '55379 Dan White',
          '(952) 834-7652',
          '5',
          '81'

      ]
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