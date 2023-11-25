'use client';

import Link from "next/link";
import Image from "next/image";
import flogo from "@/../../public/images&icons/SVG/logo_white.svg";
import starImg from "@/../../public/images&icons/SVG/star.svg";
import { useAuth,useState } from "@/context/UserContext";


const Footer = () => {
 const {sitesetting,isInfoLoding} = useAuth();
  // console.log(sitesetting?.sidelogo_url);

  
  return (
    <>
   
      <footer
        id=""
        className="bg-[#171717] text-white bottom-0 left-0 flex flex-col w-full gap-4  md:gap-8"
      >
       {isInfoLoding ? (
                <div className="px-4 lg:px-12 lg:py-5 py-7 text-center">
                  Loading....
                </div>
       ):(

    
        <div className="px-4 lg:px-12 lg:py-5 py-7">
          <div className="flex items-center gap-4 md:gap-7 justify-between md:flex-row md:mb-0 mb-4">
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="flex items-center md:ps-8 sm:ps-7"
              >
                <Image
                  width="100"
                  height="100"
                  src={sitesetting?.sidefooterlogo_url?sitesetting?.sidefooterlogo_url:flogo}
                  className="mr-3 h-6 sm:h-8 lg:h-9 w-auto"
                  alt="Vendor Guide"
                />
              </Link>
            </div>
            <div className="flex flex-col gap-4 xsm:flex-row md:p-0 relative float-label-input md:me-8 sm:my-0">
              <input
                type="text"
                id="name"
                placeholder=" "
                className="block bg-white md:w-full sm:w-64 w-52 focus:outline-none focus:shadow-outline border border-gray-300 rounded-md lg:py-3 px-4 md:px-12 lg:px-14 py-2 appearance-none leading-normal focus:border-gray-300"
              />
              <label
                htmlFor="name"
                className="absolute top-3 md:top-1 lg:top-2 left-0 text-[#171717] pointer-events-none transition duration-200 ease-in-outbg-white px-3 text-grey-darker font-semibold lg:text-xl sm:text-lg text-sm"
              >
                Subscribe to Our Newsletter
              </label>
            </div>
          </div>
          <div className="footer_grid grid gap-2.5 grid-cols-1 sm:justify-items-center sm:grid-cols-2 md:grid-cols-4 px-20  md:mr-20 md:ml-20 lg:mr-48 lg:ml-36 px-7 md:px-0 md:pt-5 lg:pt-10">
            <div className="flex flex-col">
              <label className="text-white pb-2 sm:pb-4">Advertise</label>
              <ul className="flex flex-col nav_list text-sm">
                <li>{sitesetting?.side_phone}</li>
                <li>{sitesetting?.side_email}</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <label className="text-white pb-2 sm:pb-4">Explore</label>
              <ul className="flex flex-col nav_list text-sm">
                <li>Publications</li>
                <li>Get in Touch</li>
                <li>
                  <Link href="/resources" className="">
                    Resources{" "}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <label className="text-white pb-2 sm:pb-4">Visit</label>
              <ul className="flex flex-col nav_list text-sm">
                <li>{sitesetting?.side_address}</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <label className="text-white pb-2 sm:pb-4">Follow</label>
              <ul className="flex flex-col nav_list text-sm">
               {sitesetting?.side_facebook_url && (
                <li><Link href={sitesetting?.side_facebook_url}>Facebook</Link></li>
                )}
                {sitesetting?.side_lingding_url && (
               <li><Link href={sitesetting?.side_lingding_url}>LinkedIn</Link></li>
               )}
               {sitesetting?.side_instagram_url && (
                <li><Link href={sitesetting?.side_instagram_url}>Instagram</Link></li>
               )}
              </ul>
            </div>
          </div>
        </div>
         )}

         {isInfoLoding ?(
               <div className="copy_right bg-[#ffffff] text-black flex  items-center justify-center md:flex-row md:justify-center">
                Loading...
               </div>
         ):(
        <div className="copy_right bg-[#ffffff] flex  items-center justify-center md:flex-row md:justify-center">
          <span className="text-black font-bold text-xs">{sitesetting?.powered_by}</span>
          {sitesetting?.footerlogo_url && (
          <Image
            width="100"
            height="100"
            src={sitesetting?.footerlogo_url}
            className="mr-3 h-16 w-16 sm:h-16"
            alt="Star"
          />)}
        </div>
       )}
      </footer>

    </>
  );
};

export default Footer;
