"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
const SignUpcard = (props) => {
  const [vendorData, setVendorData] = useState([
    {
      img: "images&icons/img1.png",
    },
    {
      img: "images&icons/img2.png",
    },
    {
      img: "images&icons/img3.png",
    },
    {
      img: "images&icons/img4.png",
    },
    {
      img: "images&icons/img5.jpg",
    },
  ]);

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
            <div className="grid grid-cols-5 items-center justify-center gap-3  lg:gap-5 xl:gap-4 md:gap-4 sm:mt-0 md:mt-0 px-2 sm:px-8 lg:px-12 pb-5 md:pb-10">
              {vendorData.map((row, index) => {
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
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpcard;
