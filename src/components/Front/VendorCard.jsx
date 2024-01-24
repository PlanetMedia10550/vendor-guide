"use client";
import Link from "next/link";
import { getResponse } from "@/app/lib/load-api";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { LoadingScreen } from "./LoadingScreen";
import Companyinfo from "./Companyinfo";
import Modal from "@/components/Modal";
import { useAuth } from "@/context/UserContext";
import PropartyForm from "@/components/PropartyForm";
import vendorDefult from "@/../../public/images&icons/vendor-default.jpg"
import Pagination from "../Common/Paginations";
import { getCookie } from "cookies-next";
import axios from 'axios';

const VendorCard = (props) => {
  const {user,renderFieldError,isLoding}  = useAuth();
  // console.log(user);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [vendorData, setVendorData] = useState([]);
  const [isLoading, setIsLoding] = useState(true);
  const [totalPage, setTotalPage] = useState(0);
  const [vendorId, setVendorId] = useState(0);
  const searchParams = useSearchParams()
  const search = searchParams.get('key_word')?searchParams.get('key_word'):""

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10); // Number of items per page
  const nPages = Math.ceil(vendorData.length / pageSize);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, vendorData.length);
  const itemsToDisplay = vendorData.slice(startIndex, endIndex);
  const [geoLatitude, setGeoLatitude] = useState(props.lat);
  const [geoLongitude, setGeoLongitude] = useState(props.long);
  const [postalCode, setPostalCode] = useState(props.postalCode);

  const [categoryData, setCategoryData] = useState([]);
  

  
  const openModal = (id) => {
    setIsModalOpen(true);
    setVendorId(id);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  
  useEffect(() => {



    const categoriesResult = async () => {
      var response2 = await fetch(`${process.env.BASE_API_URL}category`,{
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${getCookie('token')}`
        },
          
      })
  
      if (!response2.ok) {
      throw new Error('Failed to submit the data. Please try again.')
      }
      var categoryResult = await response2.json();
      setCategoryData(categoryResult.data)
      // console.log(vendorResult)
    }
    categoriesResult();
    
    const params = new URLSearchParams()

    const bannerResponse = async () => {
      
      // params.set('limit',pageSize)
      // params.set('offset',0)
      params.set('latitude',geoLatitude);
      params.set('longitude',geoLongitude);
      params.set('zip_code',postalCode);
      // params.set('query',params);
      // params.set('query',params);

      if(search) {params.set('key_word',search) }else{ params.delete('key_word') }
      var urlString = params.toString();
      const response = await fetch(`${process.env.BASE_API_URL}vendor?${urlString}`,{
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${getCookie('token')}`
        },
      })

      if (!response.ok) {
        throw new Error('Failed to submit the data. Please try again.')
      }
      var vendorResult = await response.json();
      setVendorData(vendorResult.data)
      setIsLoding(false)
      // console.log(totalPage)
    }

    bannerResponse();

  }, [search])


  
  return (
    <>
      <Companyinfo searchWord={search} setIsLoding={setIsLoding} setVendorData={setVendorData} latitude={geoLatitude} longitude={geoLongitude} postalCode={postalCode} locality={props.locality} categoryData={categoryData} />
      
      <div className="contact_search bg-[#f7f9f8]">
        <div className="py-20 pt-8 px-10 md:px-10">
          <div className="grid grid-cols-12 md:gap-12">
            <div className="col-span-12  md:col-span-12 lg:col-span-12  order-2 sm:order-1">
            {(isLoading) ? <div className="loading-screen text-center">
            <p className="text-[#221F20] font-bold text-md">Please wait, we are finding the best Vendors for your project.</p>
        </div> : (
              itemsToDisplay.length == 0 ? <DataNotFound /> : (<>
              <div className="grid_system grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  xl:grid-cols-5 2xl:grid-cols-5 gap-6  xl:gap-8 items-center" >
              {itemsToDisplay.length>0 && itemsToDisplay.map((row, index) => {
                return (
                  
                    <div className="h-full" key={index}>
                      <div className="card mb-0 bg-white px-3 shadow h-full relative">
                        <div className="card-body">
                          <div className="text-center">
                          <div className="w-36 h-28 pt-2 mx-auto flex justify-center">
                            <Link href={`/search/`+ row.slug } className="flex justify-center items-center h-full">
                            
                              <Image
                                width="100"
                                height="100"
                                className={`${vendorDefult.src ? 'w-full ': 'w-full'} h-full`}
                                src={row.image_url ? row.image_url : vendorDefult.src}
                                alt={row.name}
                              />
                            </Link>
                          </div>
                            <Link href={`/search/`+ row.slug } className="">
                              <h3 className="text-[#B13634] font-bold whitespace-nowrap text-16  mb-1 text-ellipsis overflow-hidden">
                                  {row.name}
                              </h3>
                            </Link>
                            <h3 className="text-black font-semibold text-xs">Distance: {row.distance.toFixed(2)} km</h3>
                            <p className="text-black font-bold  mb-2 pt-5">{row.mobile}</p>
                            {row.short_description ? (
                                <p className="text-gray-400 font-normal text-sm whitespace-nowrap text-ellipsis overflow-hidden" dangerouslySetInnerHTML={{ __html: row.short_description }} />
                              ) : (
                                // Apply styles for when short_description is not accessible
                                <div style={{ height: "1.3rem" }}></div>
                              )}
                          </div>
                          <div
                            className="py-10"
                            role="group"
                          >
                            <div className="flex items-center justify-center xl:gap-x-4 gap-x-6  md:text-center">
                              <div>
                                <Link
                                   href={`/search/`+ row.slug }
                                  className="rounded-[0.7rem] md:inline-block px-3.5 py-1 2xl:text-sm xl:text-[0.66rem] text-sm border-solid border-[1px] border-black font-extrabold text-black shadow-sm hover:bg-[#B13634 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                  Learn More
                                </Link>
                              </div>
                              <div className="sm:mt-0  mt-5">
                                <Link
                                  href=""
                                  className="rounded-[0.7rem] md:inline-block px-3.5 py-1 2xl:text-sm xl:text-[0.66rem] text-sm border-solid border-[1px] border-black font-extrabold text-black shadow-sm hover:bg-[#B13634 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                  onClick={(e)=>{e.preventDefault(); openModal(row.id)}}
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
              </div>
              
             
                { nPages>1 && 
                <Pagination
                    nPages={nPages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
                }
              </>
              )

              ) }
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h1 className="text-3xl font-medium" >Request a Quote !</h1>
        {user!=null ? (
          <PropartyForm user={user} vendor_id={vendorId} onClose={closeModal} categoryData={categoryData}   />
        ) : (
          <>
            <p className="text-xl mt-2">Kindly login or register to request a quote</p>
            <div className="flex justify-center gap-x-2 mt-10">
              <Link className="text-white bg-[#B13634] block   hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-normal rounded-lg text-xs sm:text-base lg:text-[1.100rem] px-2 sm:px-4 lg:px-4 py-2 lg:py-2 md:mr-2 focus:outline-none" href="/login" >Login</Link>
              <Link className="text-white bg-[#B13634] block   hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-normal rounded-lg text-xs sm:text-base lg:text-[1.100rem] px-2 sm:px-4 lg:px-4 py-2 lg:py-2 md:mr-2 focus:outline-none" href='/register' >Register</Link>
            </div>
          </>
        )}
      </Modal>
    </>
  );
};

export default VendorCard;

export const DataNotFound = () => {
  return (
    <>
      <div className="h-full">
        <div className="w-100  pt-2 mx-auto text-center text-sm text-[#221F20]">
          <h1 className="text-lg font-medium">Sorry, we could not find any vendors that matched your criteria.</h1>
          <p className="text-base ">Try a different search
            {/* or view all our vendors */}
          </p>
        </div>
      </div>
    </>
  );
};