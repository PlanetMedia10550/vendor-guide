"use client";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Image from "next/image";
import Link from "next/link";
import axios from 'axios';
import Pagination from "../Common/Paginations";
const ResourceListCards = (props) => {
  const [items, setItems] = useState([]);
  // console.log(items);
  // const [pageCount, setPageCount] = useState(0);
  const [isLoading, setLoading] = useState(true)
  // const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(3); // Number of items per page
  const nPages = Math.ceil(items.length / pageSize);


  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, items.length);
  const itemsToDisplay = items.slice(startIndex, endIndex);
  // console.log(itemsToDisplay);
  
  useEffect(() => {
    const getProducts = () => {

      axios.get(`${process.env.BASE_API_URL+'blog?limit=9'}`).then(function(response) {
        // console.log("hello");
        var result = response.data;
        // setPageCount(Math.ceil(totalCount / itemsPerPage));
        setItems(result.data);
        setLoading(false)
      }).catch(function(error) {
          // console.log(error);
          setLoading(false)
      });
    };
    getProducts();
  }, []);

 

  return (
    <>
      <div className="z-50">
        <div className="mx-auto max-w-2xl px-10 pb-6 sm:px-6 lg:py-12 lg:max-w-7xl lg:px-8">
          <div className="text-center py-10 sm:py-0">
            <Link
              href="#"
              className="readblog_btn inline-block px-10 sm:px-20 lg:px-40 2xl:px-56 py-2 lg:py-2 2xl:py-3 text-center rounded-full bg-[#B13634] 2xl:text-3xl lg:text-2xl text:xl tracking-wide font-semibold font-lato text-white shadow-sm hover:bg-[#B13634] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B13634]"
            >
              {props.title}
            </Link>
          </div>
          <div className="xl:mt-16 lg:mt-12 sm:mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-12">
            {isLoading==false &&
              itemsToDisplay.map((row, i) => {
                return (
                  <div className="group relative" key={i}>
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden  bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-64">
                      <Image
                        src={row.image_url}
                        alt={row.title}
                        width="100"
                        height="100"
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="mt-4 md:mx-6  xl:ml-10 md:text-left text-center">
                      <div>
                          <Link href={`/blog/${row.slug}`}>
                        <h3 className="lg:text-xl text-lg  text-[#B13634] font-bold ">
                            {/* <span
                              aria-hidden="true"
                              className="absolute inset-0"
                            ></span> */}
                            {row.title}
                        </h3>
                          </Link>
                        <p className="mt-1 lg:text-xl text-lg text-[#221F20] font-medium ">
                          {row.short_description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <Pagination
    nPages={nPages}
    currentPage={currentPage}
    setCurrentPage={setCurrentPage}
/>
        </div>
      </div>

    </>
  );
};

export default ResourceListCards;
