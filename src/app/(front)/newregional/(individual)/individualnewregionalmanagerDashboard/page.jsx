import Graph from "@/components/Front/NewRegionalmanagerDashboard/Graph";
import Sideli from "@/components/Common/Sideli";
import DashBoardTable from "@/components/Front/NewRegionalmanagerDashboard/DashBoardTable";
import DashBoardTableBtn from "@/components/Front/NewRegionalmanagerDashboard/DashBoardTableBtn";
import TableCheckbox from "@/components/Front/Company/TableCheckbox";

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
      "	Urgent",
      "	Draft",
    ],
  ],
};

const NewRegionalmanagerDashboard = () => {
  return (
    <>
      <section className="top_grid">
        <div className="px-20">
          <div className="grid grid-cols-3 sm:gap-16">
            <Sideli />
            <Graph />
          </div>
        </div>
      </section>
      <section className="table_section pt-14 bg-[#F6F7F8]">
        <div className="px-10">
          <DashBoardTable data={bidRequests} />
          <DashBoardTableBtn name="View/Edit" />
        </div>
      </section>
    </>
  );
};

export default NewRegionalmanagerDashboard;
