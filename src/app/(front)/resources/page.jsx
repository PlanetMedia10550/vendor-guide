// import PaginationBar from "@/components/Front/Pagination";
import ResourceListCards from "@/components/Front/ResourceListCards";
import TopBarImage from "public/images&icons/resources/banner1.jpg";
import TopBanner from "@/components/Front/TopBanner";

const Resources = () => {
  return (
    <>
      <TopBanner
        heading="Resources"
        title="Stay Informed and Inspired with Our Digital Magazines and Blogs"
        image={TopBarImage.src}
      />
      <section className="product_section sm:pt-[42rem] md:pt-[44rem] lg:pt-64 xl:pt-[23rem] 2xl:pt-[25rem]">
        <ResourceListCards title="Read Our Latest Blogs" />

        {/* <Pagination /> */}
        
      </section>
    </>
  );
};

export default Resources;
