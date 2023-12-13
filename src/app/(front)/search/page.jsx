import TopBannerSearch from "@/components/Front/TopBannerSearch";
import TopBarImage from "public/images&icons/search_result/Asset2.jpg";
import SearchAllData from "./SearchAllData";

export const metadata = {
  title: 'Vendor Guide | Search'
}

const Searchpage = () => {
  return (
    <>
      <TopBannerSearch title="Search Results" image={TopBarImage.src} />
      {/* <BannerSectionCard  /> */}
      <SearchAllData />
    </>
  );
};

export default Searchpage;
