"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
const VendorCard = (props) => {
  const [vendorData, setVendorData] = useState([
    {
      img: "images&icons/search_result/img1.jpg",
      title: "American Surface Restoration(ASR)tub fusion",
      phone: "952-220-2604",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      url1: "#",
      url2: "#",
    },
    {
      img: "images&icons/search_result/img2.jpg",
      title: "America's Floor sources",
      phone: "952-220-2604",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      url1: "#",
      url2: "#",
    },
    {
      img: "images&icons/search_result/img3.jpg",
      title: "All, Inc.",
      phone: "952-220-2604",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      url1: "#",
      url2: "#",
    },
    {
      img: "images&icons/search_result/img4.jpg",
      title: "All, Inc.",
      phone: "952-220-2604",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      url1: "#",
      url2: "#",
    },
    {
      img: "images&icons/search_result/img5.jpg",
      title: "All, Inc.",
      phone: "952-220-2604",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      url1: "#",
      url2: "#",
    },
  ]);

  return (
    <>
      {vendorData.map((row, index) => {
        return (
          <div className="h-full" key={index}>
            <div className="card mb-0 bg-white px-3 shadow h-full relative">
              <div className="card-body">
                <div className="text-center xl:px-2 3xl:min-h-[36vh] 2xl:min-h-[42vh] lg:min-h-[55vh] md:min-h-[56vh] min-h-[55vh]">
                  <div className="w-36  pt-2 mx-auto text-center">
                    <Image
                      width="100"
                      height="100"
                      className="w-full"
                      src={row.img}
                      alt="Sunset in the mountains"
                    />
                  </div>
                  <h5 className="text-16 text-gray-700 mb-1">
                    <Link href="#" className="text-[#B13634] font-bold">
                      {row.title}
                    </Link>
                  </h5>
                  <p className="text-black font-bold  mb-2 pt-5">{row.phone}</p>
                  <p className="text-gray-400 font-normal text-sm">
                    {row.content}
                  </p>
                </div>
                <div
                  className="py-10 px-3 absolute bottom-0 left-0 right-0"
                  role="group"
                >
                  <div className="flex items-center justify-center xl:gap-x-4 gap-x-6  md:text-center">
                    <div>
                      <Link
                        href={row.url1}
                        className="rounded-[0.7rem] md:inline-block px-3.5 py-1 xl:text-[0.55rem] text-sm border-solid border-[1px] border-black font-semibold text-black shadow-sm hover:bg-[#B13634 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Learn More
                      </Link>
                    </div>
                    <div className="lg:mt-0  mt-0">
                      <Link
                        href={row.url2}
                        className="rounded-[0.7rem] md:inline-block px-3.5 py-1 xl:text-[0.55rem] text-sm border-solid border-[1px] border-black font-semibold text-black shadow-sm hover:bg-[#B13634 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Request Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default VendorCard;
