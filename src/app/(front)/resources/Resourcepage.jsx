 "use client";

import ResourceListCards from "@/components/Front/ResourceListCards";
import TopBarImage from "public/images&icons/resources/banner1.jpg";
import TopBanner from "@/components/Front/TopBanner";
import { useAuth } from "@/context/UserContext";

const Resourcespage = () => {
  const {metaData,loading} = useAuth();
  const resourceMeta = metaData?.resources;

  return (
    <>
     {loading ? (
      <section className="top_banner sm:relative">
        <div className="text-center">
         Loading...
        </div>
      </section>
      
     ):(
      <TopBanner
        resourceMeta = {resourceMeta}/>
        )}
      <section className="product_section sm:pt-[42rem] md:pt-[44rem] lg:pt-64 xl:pt-[23rem] 2xl:pt-[25rem]">
        <ResourceListCards title="Read Our Latest Blogs" />

        {/* <Pagination /> */}
        
      </section>
    </>
  );
};

export default Resourcespage;
