'use client'; 
import BannerSectionCard from "@/components/Front/BannerSectionCard";
import Carouselbanner from "@/components/Front/Carouselbanner";
import FeaturSection from "@/components/Front/FeaturSection";
import PartnerSection from "@/components/Front/PartnerSection";
import SearchBar from "@/components/Front/SearchBar";
import Link from "next/link";
import { useAuth } from "@/context/UserContext";
import { useEffect, useState } from "react";


const HomeComponent = ({blogs,vendors}) => {
   const {metaData,loading} = useAuth();
   const homeMeta = metaData?.home;
   const [backgroundImage,setBackgroundImage] = useState('');
   useEffect(() => {
    if(homeMeta?.hero_background!=undefined){
      setBackgroundImage(`url(${homeMeta?.hero_background})`);
    }
   },[homeMeta?.hero_background]);
  //  var backgroundImage = ;
  //  console.log(backgroundImage);
  return (
    < >
     {homeMeta?.hero_background!=undefined &&
      <div id="hero_section" >
          <div className={`hero_section_content relative h-[38vh]  sm:h-[45vh] md:h-[55vh] lg:h-[65vh] xl:h-[69vh]   bg-cover bg-no-repeat  before:content[''] before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:bg-[#0000007d] before:h-[38vh] before:sm:h-[45vh]  before:md:h-[55vh] before:lg:h-[65vh] before:xl:h-[69vh] bg:opacity-25 `} style={{ backgroundImage: `url(${homeMeta?.hero_background})` }}>
          <SearchBar  homeMeta={homeMeta} />
        </div>
      </div>}
      <div id="banner_section">
        <div className="container mx-auto py-3 px-8 md:py-4">
            <BannerSectionCard vendors={vendors} />
        </div>
      </div>
      <div id="featurs_section" className="lg:py-16 lg:pt-12 xl:pt-20">
        <div className="overflow-hidden bg-white lg:py-4 lg:py-7 px-4 lg:ps-12">
          <h2 className="text-2xl lg:hidden block text-center md:text-3xl  font-semibold leading-7 text-grey-500 mb-8 uppercase">
            In The News
          </h2>
          <div className="mx-auto xl:max-w-[90rem] lg:max-w-7xl px-2 sm:px-7">
                  <FeaturSection blogs={blogs} />
            <div className="py-9 md:py-12 lg:float-right text-center">
              <Link
                href="blog"
                className="text-center tracking-wide flex-none rounded-md bg-[#221F20] px-5 sm:px-10 py-3 text-sm sm:text-lg lg:text-xl font-normal  font-lato text-white shadow-sm hover:bg-[#221F20] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#221F20] lg:mr-9"
              >
                Explore Our Resource Library
              </Link>
            </div>
          </div>
        </div>
        
        <PartnerSection homeMeta={homeMeta}
          btnTitle="Get Started"
        />
      </div>
    </>
  );
}

export default HomeComponent;


