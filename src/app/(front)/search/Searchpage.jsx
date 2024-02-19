"use client";
import TopBannerSearch from "@/components/Front/TopBannerSearch";
import TopBarImage from "/public/images&icons/search_result/Asset2.jpg";
import SearchAllData from "./SearchAllData";
import { useAuth } from "@/context/UserContext";
 
export const metadata = {
  title: 'Vendor Guide | Search'
}

const Searchpage = ({vendors,bannerContent}) => {

  const searchMeta = bannerContent.search_background;

  return (
    <>
      <TopBannerSearch title="Search Results" backgroundimage={searchMeta} vendors={vendors} />
      {/* <BannerSectionCard  /> */}
      <SearchAllData />
    </>
  );
};

export default Searchpage;
