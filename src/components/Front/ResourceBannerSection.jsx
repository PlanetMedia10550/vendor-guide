"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from 'axios';
import ResourceCarousel from "./ResourceCarousel";
// import ResourceCarousel from "@components/Front/ResourceCarousel";

const ResourceBannerSection = (props) => {
  const [isLoading, setLoading] = useState(true)
  const [magazineData, setMagazineData] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.BASE_API_URL+'magazine?limit=5'}`).then(function(response) {
      var result = response.data;
        setMagazineData(result.data);
        setLoading(false)
        // console.log(result.data)
    }).catch(function(error) {
        // console.log(error);
    });
  }, [])

  return (
    <>
      <div className="image_grid block relative left-0 right-0 bottom-[-8rem] sm:bottom-[121px] lg:bottom-[30px] xl:bottom-[-2rem]  2xl:bottom-[-3rem] md:px-16 lg:px-8 xl:px-20 px-10">
        <div className="">
          <div className="rounded-xl overflow-hidden shadow-[#0000004a] shadow-2xl  flex flex-col  bg-white">
            <div className="flex items-center p-3 bg-[#B13634]"></div>
            <div className="text-center px-2 sm:px-0 pt-3 md:pt-4 lg:pt-6">
              <h2 className="lg:text-2xl sm:text-xl text-lg font-bold tracking-tight  text-[#171717b]">
                {props.title}
              </h2>
            </div>
            <div className="hidden lg:block">
            <div className=" digital_grid  grid grid-cols-5  items-center justify-center gap-x-[0.15rem]  gap-y-5 xl:gap-y-0 py-4 sm:py-6 xl:py-10 ">
              {isLoading==false && magazineData.map((row, i) => {
                return (
                    <div  key={i}>
                      <div className="sm:mt-0 sm:px-7 xl:px-9">
                        <Image
                          src={row.image_url}
                          className="w-full  h-[100%] xl:h-[100%] object-fill"
                          alt="Vendor Guide Logo"
                          width="100"
                          height="100"
                        />
                      </div>
                      <div className="text-center block">
                        <Link
                          href=""
                          className="my-4 xl:my-9 mx-5 xl:mx-8  block px-0  py-1 lg:py-2 text-center rounded-full  bg-[#221F20] xl:text-xl text:lg tracking-wide font-medium font-lato text-white shadow-sm hover:bg-[#221F20] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#221F20]"
                        >
                          {row.title}
                        </Link>
                        <p className="xl:text-xl text-lg font-bold text-[#171717b]">
                          {row.short_description}
                        </p>
                        <h2 className="xl:text-xl text-lg font-bold text-[#171717b]">
                          {row.title2}
                        </h2>
                      </div>
                    </div>
                );
              })}
            </div>
            </div>
            <div className="block lg:hidden px-4 py-4">
              <div className="flex gap-6  overflow-x-auto whitespace-nowrap">
            {isLoading==false && magazineData.map((row, i) => {
                return (
                    <div  key={i} className="w-full">
                      <div className="sm:mt-0 sm:px-4 md:px-4 xl:px-9">
                        <Image
                          src={row.image_url}
                          className="w-96  h-[100%] xl:h-[100%] object-fill"
                          alt="Vendor Guide Logo"
                          width="100"
                          height="100"
                        />
                      </div>
                      <div className="text-center block">
                        <Link
                          href=""
                          className="my-4 xl:my-9 mx-4 xl:mx-8  block px-10  py-1 lg:py-2 text-center rounded-full  bg-[#221F20] xl:text-xl text:lg tracking-wide font-medium font-lato text-white shadow-sm hover:bg-[#221F20] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#221F20]"
                        >
                          {row.title}
                        </Link>
                        <p className="xl:text-xl text-lg font-bold text-[#171717b] whitespace-nowrap">
                          {row.short_description}
                        </p>
                        {/* <h2 className="xl:text-xl text-lg font-bold text-[#171717b]">
                          {row.title2}
                        </h2> */}
                      </div>
                    </div>
                );
              })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResourceBannerSection;
