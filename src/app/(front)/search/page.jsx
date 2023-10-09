import TopBannerSearch from "@/components/Front/TopBannerSearch";
import VendorCard from "@/components/Front/VendorCard";
import Companyinfo from "@/components/Front/companyinfo";
import TopBarImage from "public/images&icons/search_result/Asset2.jpg";
const Search = () => {
  return (
    <>
      <TopBannerSearch title="Search Results" image={TopBarImage.src} />
      <Companyinfo />
      <section className="contact_search bg-[#f7f9f8]">
        <div className="py-20 pt-8 px-10 md:px-10">
          <div className="grid grid-cols-12 md:gap-12">
            <div className="col-span-12  md:col-span-12 lg:col-span-12  order-2 sm:order-1">
              <div className="grid_system grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  xl:grid-cols-5 2xl:grid-cols-5 gap-6  xl:gap-8 items-center">
                <VendorCard />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
