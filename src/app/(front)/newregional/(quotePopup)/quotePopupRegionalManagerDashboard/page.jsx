import TableCheckbox from "@/components/Front/Company/TableCheckbox";
import DashBoardTableData from "@/components/Front/NewRegionalmanagerDashboard/DashBoardTableData";
const requestorInfo = () => {
  return (
    <div className="flex gap-4">
      <TableCheckbox /> 2023-187265
    </div>
  );
};

const bidRequests = {
  collums: [
    "Bid Number",
    "Bid Title",
    "Bid Type",
    "Property",
    "Bidder",
    "Creation Date",
    "Est.Close Date",
    "Priority",
    "Status",
  ],
  rows: [
    [
      requestorInfo(),
      "Unit #6203",
      "Leaking Water Plumbing",
      "Parkside Heights",
      "Jen Anderson",
      "09/01/2023",
      "09/15/2023",
      "	Urgent",
      "	Draft",
    ],
    [
      requestorInfo(),
      "Unit #6203",
      "Leaking Water Plumbing",
      "Parkside Heights",
      "Jen Anderson",
      "09/01/2023",
      "09/15/2023",
      "	Urgent",
      "	Draft",
    ],
    [
      requestorInfo(),
      "Unit #6203",
      "Leaking Water Plumbing",
      "Parkside Heights",
      "Jen Anderson",
      "09/01/2023",
      "09/15/2023",
      "	Urgent",
      "	Draft",
    ],
    [
      requestorInfo(),
      "Unit #6203",
      "Leaking Water Plumbing",
      "Parkside Heights",
      "Jen Anderson",
      "09/01/2023",
      "09/15/2023",
      "	Urgent",
      "	Draft",
    ],
    [
      requestorInfo(),
      "Unit #6203",
      "Leaking Water Plumbing",
      "Parkside Heights",
      "Jen Anderson",
      "09/01/2023",
      "09/15/2023",
      "	Urgent",
      "	Draft",
    ],
    [
      requestorInfo(),
      "Unit #6203",
      "Leaking Water Plumbing",
      "Parkside Heights",
      "Jen Anderson",
      "09/01/2023",
      "09/15/2023",
      "	Urgent",
      "	Draft",
    ],
    [
      requestorInfo(),
      "Unit #6203",
      "Leaking Water Plumbing",
      "Parkside Heights",
      "Jen Anderson",
      "09/01/2023",
      "09/15/2023",
      "Urgent",
      "Draft",
    ],
    [
      requestorInfo(),
      "Unit #6203",
      "Leaking Water Plumbing",
      "Parkside Heights",
      "Jen Anderson",
      "09/01/2023",
      "09/15/2023",
      "Urgent",
      "Draft",
    ],
  ],
};

const NewRegionalmanagerDashboard = () => {
  return (
    <>
    
    <DashBoardTableData />
    </>
  );
};

export default NewRegionalmanagerDashboard;
