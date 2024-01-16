 "use client";

import ResourceListCards from "@/components/Front/ResourceListCards";
import TopBanner from "@/components/Front/TopBanner";
import { useAuth } from "@/context/UserContext";

const Resourcespage = ({bannerContent}) => {
  return (
    <>
     
      <TopBanner
        resourceMeta = {bannerContent}/>
      <div className="pt-[31rem] product_section sm:pt-[21rem] md:pt-[18rem] lg:pt-64 xl:pt-[25rem] 2xl:pt-[25rem]">
        <ResourceListCards title="Read Our Latest Blogs" />

        {/* <Pagination /> */}
        
      </div>
    </>
  );
};

export default Resourcespage;
