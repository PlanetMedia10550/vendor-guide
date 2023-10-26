"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import BannerSectionCard from "./BannerSectionCard";
const SignUpcard = (props) => {

  return (
    <>
      <div className="image_grid  absolute left-0 right-0 top-[2rem] md:top-[3rem] lg:top-[4rem] xl:top-[5rem]  2xl:top-[0] md:px-16 lg:px-16 xl:px-24 px-5">
        <div className="">
          <div className="rounded-xl overflow-hidden shadow-xl  flex flex-col  bg-white">
            <div className="flex items-center p-3 bg-[#B13634]"></div>
            <div className="text-center py-3 sm:py-3 md:py-4 lg:py-6">
              <h1 className="lg:text-2xl text-xl font-bold tracking-tight  text-[#171717b] ">
                {props.title}
              </h1>
            </div>
            
              {/* {vendorData.map((row, index) => {
                return (
                  <>
                    <div className="">
                      <div className="sm:mt-0 flex justify-center md:justify-end">
                        <Image
                          src={row.img}
                          className="w-full"
                          alt="Vendor Guide Logo"
                          width="100"
                          height="100"
                        />
                      </div>
                    </div>
                  </>
                );
              })} */}
              <BannerSectionCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpcard;
