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
      "Urgent",
      "Draft",
    ],
  ],
};

const NewRegionalmanagerDashboard = () => {
  return (
    <>
      <section className="top_grid bg-[#F6F7F8]">
        <div className="px-5 sm:px-20 lg:px-10">
          <div class="block lg:hidden py-3 md:px-8 sm:text-left text-center">
            <h6 class="mb-1 lg:text-xl  sm:text-lg  font-semibold text-[#171717]">
              Welcome to Your Vendor Management Dashboard!
            </h6>
          </div>
          <div className="grid grid-cols-3 sm:gap-16">
            <Sideli />
            <Graph />
          </div>
        </div>
      </section>
      <section className="table_section pt-14 bg-[#F6F7F8]">
        <div className="px-5 sm:px-10 pb-5">
          <DashBoardTable data={bidRequests} />
          <DashBoardTableBtn name="View/Edit" />
        </div>
      </section>
    </>
  );
};

export default NewRegionalmanagerDashboard;
