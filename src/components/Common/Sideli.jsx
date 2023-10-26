import Sidecount from "@/components/Common/Sidecount";

const Sideli = (props) => {
  return (
    <div className="col-span-3 lg:col-span-1 md:col-span-1  order-2 sm:order-1">
      <div className="sm:mt-6 lg:mt-12 ">
        <ul className="bg-white list-unstyled font-medium border-solid border-[1px] border-[#171717]">
          <Sidecount count="2" name="New Messages" />
          <Sidecount count="6" name="Bids Requesting Approval" />
          <Sidecount count="2" name="Draft Bids" />
          <Sidecount count="12" name="Upcoming Projects" />
        </ul>
      </div>
    </div>
  );
};

export default Sideli;
