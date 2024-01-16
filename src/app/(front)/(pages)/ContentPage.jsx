"use client";
// import DetailsHero from "@/components/Front/detailshero";
import { useState,useEffect } from "react";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { useAuth } from "@/context/UserContext"; 
import LoadingComponents from "@/components/LoadingComponents";

const ContentPage = ({page,pageData,bannercontent}) => {
  // const slug = params.slug;
  const [filterData, setFilterData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {metaData,loading} = useAuth();
  const [selectedMeta, setSelectedMeta] = useState(metaData?.[page]);

  useEffect(() => {
      const specificMeta = metaData?.[page];
      setSelectedMeta(specificMeta || {});
  }, [metaData]);



  return (
    <>

    <div
      id="hero_section"
      className=" bg-cover bg-center bg-no-repeat relative before:content[''] before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:bg-[#08161eab] xl:h-[40vh] lg:h-[40vh] md:h-[40vh] sm:h-[40vh] h:[40vh]"
      style={{
        backgroundImage: `url(${selectedMeta?.background?selectedMeta?.background:''})`,
      }}
    >
      {/* <Image
              src={backgroundImage}
              alt="Product screenshot"
              className="mx-auto max-w-none h-[38vh]  sm:h-[45vh] md:h-[55vh] lg:h-[65vh] xl:h-[69vh] w-full"
              width="100"
              height="100"
            /> */}
      <div className="sm:h-[40vh] md:h-[40vh] lg:h-[40vh] h-[40vh] w-full max-w-5xl mx-auto">
        <div className="magazine_breadcrumb relative">
          <div className="breadcrumb text-white py-4 text-lg">
            {/* <Link href="#">Vendor Guide</Link>

            <span className="seprater"> / </span>
            <span className="current text-xl font-lato">{filterData.title}</span> */}
          </div>
        </div>
        <div className="magazine_heading px-4 sm:px-6 lg:px-8 z-10 lg:py-12 relative text-center">
        {pageData.title && 
          <h1 className="text:sm sm:text-lg md:text-2xl lg:text-3xl xl:text-[3rem] font-lato -tracking-tight md:leading-10 lg:leading-[3.5rem] font-semibold  text-white   font-lato lg:px-10">
            {pageData.title}
          </h1>}
        </div>
      </div>
    </div>
      <div id="featurs_section" className="py-9 md:py-5">
          <div className="mx-auto ">
            <div className="mt-12">
                  {/* {isLoading ? <div className="flex justify-center items-center h-full">
            <LoadingComponents />
        </div> : */}
                  <div className="text-[#647589] text-lg font-medium font-lato leading-8" dangerouslySetInnerHTML={{ __html: pageData.description }} />
                  {/* } */}
            </div>
          </div>
      </div>
    </>
  );
};

export default ContentPage;
