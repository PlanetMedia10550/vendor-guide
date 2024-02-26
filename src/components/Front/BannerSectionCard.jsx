"use client";
import Image from "next/image";
import { getResponse } from "@/app/lib/load-api";
import { useEffect, useState } from "react";
import { LoadingScreen } from "./LoadingScreen";
import Link from "next/link";
import { getVendors } from "@/app/lib/server-api";

const BannerSectionCard = () => {
  const [vendors,setVendors] = useState({})
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if ('geolocation' in navigator) {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            async function (position) {
              const latitude = position.coords.latitude;
              const longitude = position.coords.longitude;
              var res = await getVendors({ latitude, longitude });
              setVendors(res);
            },
            async function (error) {
              let vendor = await getVendors();
              setVendors(vendor);
            }
          );
        }
      }
    }
  }, [getVendors]);
  return (
    <div className="grid grid-cols-5 items-center justify-center gap-2 md:gap-5 sm:mt-4 px-4 md:px-8 lg:my-8 my-4">
      {vendors?.data && vendors?.data.map((row, i) => {
          return (
            <div
              key={i}
              className=" lg:col-span-1  shadow-sm border border-gray-300 bg-gray-200 h-full"
            >
              <div className="sm:mt-0 flex justify-center md:justify-end h-full items-center p-1">
                <Link href={`/search/`+ row.slug }>
                <Image
                  src={row.image_url?row.image_url:""}
                  alt={row.name?row.name:""}
                  className="w-full w-auto"
                  width="100"
                  height="100"
                />
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default BannerSectionCard;
