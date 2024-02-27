import TopBannerSearch from "@/components/Front/TopBannerSearch";
import SearchAllData from "./SearchAllData";
 

const Searchpage = ({bannerContent}) => {

  const searchMeta = bannerContent.search_background;
  
  return (
    <>
     <TopBannerSearch title="Search Results" backgroundimage={searchMeta} vendors={''} />
      {/* <BannerSectionCard  /> */}
      <SearchAllData />
    </>
  );
};

export default Searchpage;
