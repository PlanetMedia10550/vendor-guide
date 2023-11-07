import TopBannerSearch from "@/components/Front/TopBannerSearch";
import VendorCard from "@/components/Front/VendorCard";
import Link from "next/link";
import TopBarImage from "public/images&icons/search_result/Asset2.jpg";

const Search = () => {
  return (
    <>
      <TopBannerSearch title="Search Results" image={TopBarImage.src} />
      {/* <BannerSectionCard  /> */}
      <VendorCard />
      
    </>
  );
};

export default Search;
