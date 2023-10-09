"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ResourceBannerSection = (props) => {
  const [vendorData, setVendorData] = useState([
    {
      img: "images&icons/resources/Asset1.jpg",
      title1: "Explore the Twin Cities",
      title2: " Best of Edition",
    },
    {
      img: "images&icons/resources/Asset2.jpg",
      title1: "  Explore the Des Moines",
      title2: " Best of Edition",
    },
    {
      img: "images&icons/resources/Asset3.jpg",
      title1: "Explore the St. Louis",
      title2: " Best of Edition",
    },
    {
      img: "images&icons/resources/Asset4.jpg",
      title1: "Explore the Twin Cities",
      title2: " Best of Edition",
    },
    {
      img: "images&icons/resources/Asset5.jpg",
      title1: "Explore the Louisiana",
      title2: " Best of Edition",
    },
  ]);

  return (
    <>
      <div className="image_grid block relative left-0 right-0 bottom-[-8rem] sm:bottom-[121px] lg:bottom-[30px] xl:bottom-[-2rem]  2xl:bottom-[-3rem] md:px-16 lg:px-8 xl:px-20 px-10">
        <div className="">
          <div className="rounded-xl overflow-hidden shadow-[#0000004a] shadow-2xl  flex flex-col  bg-white">
            <div className="flex items-center p-3 bg-[#B13634]"></div>
            <div className="text-center px-1 sm:px-0 pt-3 md:pt-4 lg:pt-6">
              <h1 className="lg:text-2xl sm:text-xl text-lg font-bold tracking-tight  text-[#171717b]">
                {props.title}
              </h1>
            </div>
            <div className="digital_grid grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 items-center justify-center gap-x-[0.15rem]  gap-y-5 xl:gap-y-0 py-4 sm:py-6 xl:py-10">
              {vendorData.map((row, index) => {
                return (
                  <>
                    <div className="">
                      <div className="sm:mt-0 px-7 xl:px-9">
                        <Image
                          src={row.img}
                          className="w-full h-full sm:h-[100%] xl:h-[100%] object-fill"
                          alt="Vendor Guide Logo"
                          width="100"
                          height="100"
                        />
                      </div>
                      <div className="text-center block">
                        <Link
                          href="javascript:void();"
                          className="my-4 xl:my-9 mx-5 xl:mx-8  block px-0  py-1 lg:py-2 text-center rounded-full  bg-[#221F20] xl:text-xl text:lg tracking-wide font-medium font-lato text-white shadow-sm hover:bg-[#221F20] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#221F20]"
                        >
                          Twin Cities
                        </Link>
                        <p className="xl:text-xl text-lg font-bold text-[#171717b]">
                          {row.title1}
                        </p>
                        <h2 className="xl:text-xl text-lg font-bold text-[#171717b]">
                          {row.title2}
                        </h2>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResourceBannerSection;
