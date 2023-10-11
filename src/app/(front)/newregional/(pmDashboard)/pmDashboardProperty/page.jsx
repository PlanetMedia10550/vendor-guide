
// import PaginationBar from "@/components/Front/Pagination";
import LeftSide from "@/components/Front/PropertyManagerDashboardProperty/LeftSide";
import RightSide from "@/components/Front/PropertyManagerDashboardProperty/RightSide";
   
    
const PropertyManagerDashboardProperty =  () => {


    return (
        <>
          <section className="py-14 bg-[#F6F7F8]">
             <div className="px-10 md:px-16">
                 <div className="grid grid-cols-2 items-baseline gap-x-20 text-sm font-medium text-center border border-black  text-[#171717] p-5 bg-white">
                  <LeftSide />
                  <RightSide/>
                  </div>
             </div>
          </section>
        </>
    )
}

export default PropertyManagerDashboardProperty